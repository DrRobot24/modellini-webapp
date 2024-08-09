import React, { useState, useEffect } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { fetchAuthSession, getCurrentUser, signOut } from 'aws-amplify/auth';
import { generateClient } from 'aws-amplify/api';
import { ModellinoCreateForm } from './ui-components';
import { createModellino, deleteModellino } from './graphql/mutations';
import { listModellinos } from './graphql/queries';
import Header from './components/Header';
import ModellinoList from './components/ModellinoList';

const client = generateClient();

function App({ signOut: amplifySignOut, user: initialUser }) {
  const [user, setUser] = useState(initialUser);
  const [modellini, setModellini] = useState([]);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function initApp() {
      setIsLoading(true);
      try {
        await loadUserInfo();
        await fetchModellini();
      } catch (error) {
        console.error('Error initializing app', error);
        setError('Errore nell\'inizializzazione dell\'app: ' + error.message);
      } finally {
        setIsLoading(false);
      }
    }
    initApp();
  }, []);

  async function loadUserInfo() {
    try {
      const currentUser = await getCurrentUser();
      const session = await fetchAuthSession();
      console.log('Current user:', currentUser);
      console.log('Auth session:', session);
      setUser(currentUser);
    } catch (e) {
      console.error('Error fetching user data', e);
      setError('Errore nel caricamento delle informazioni dell\'utente');
      throw e;
    }
  }

  async function fetchModellini() {
    try {
      const session = await fetchAuthSession();
      const modellinoData = await client.graphql({
        query: listModellinos,
        authMode: 'AMAZON_COGNITO_USER_POOLS',
        authToken: session.tokens.idToken.toString()
      });
      
      setModellini(modellinoData.data.listModellinos.items);
    } catch (error) {
      console.error('error fetching modellini', error);
      if (error.message.includes('Not Authorized')) {
        setError('Non sei autorizzato ad accedere a questa risorsa. Assicurati di aver effettuato il login correttamente.');
      } else {
        setError('Errore nel caricamento dei modellini: ' + error.message);
      }
      throw error;
    }
  }

  const handleCreateModellino = async (fields) => {
    try {
      const session = await fetchAuthSession();
      await client.graphql({
        query: createModellino,
        variables: { input: fields },
        authMode: 'AMAZON_COGNITO_USER_POOLS',
        authToken: session.tokens.idToken.toString()
      });
      setSuccessMessage('Modellino creato con successo!');
      fetchModellini();
    } catch (err) {
      setError('Errore nella creazione del modellino: ' + err.message);
    }
  };

  const handleUpdateModellino = (modellino) => {
    // Implementare la logica di aggiornamento
    console.log('Aggiornamento modellino:', modellino);
  };

  const handleDeleteModellino = async (id) => {
    try {
      const session = await fetchAuthSession();
      await client.graphql({
        query: deleteModellino,
        variables: { input: { id } },
        authMode: 'AMAZON_COGNITO_USER_POOLS',
        authToken: session.tokens.idToken.toString()
      });
      setSuccessMessage('Modellino eliminato con successo!');
      fetchModellini();
    } catch (err) {
      setError('Errore nell\'eliminazione del modellino: ' + err.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await amplifySignOut();
    } catch (error) {
      console.error('Error signing out:', error);
      setError('Errore durante il logout: ' + error.message);
    }
  };

  if (isLoading) {
    return <div>Caricamento...</div>;
  }

  return (
    <div>
      <Header signOut={handleSignOut} user={user} />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Modellini da Competizione !</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {successMessage && (
          <p className="text-green-500 mb-4 bg-green-100 border border-green-400 p-2 rounded">
            {successMessage}
          </p>
        )}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Crea un nuovo modellino</h2>
          <ModellinoCreateForm onSubmit={handleCreateModellino} />
        </div>
        <ModellinoList 
          modellini={modellini}
          onUpdate={handleUpdateModellino}
          onDelete={handleDeleteModellino}
        />
      </div>
    </div>
  );
}

export default withAuthenticator(App);