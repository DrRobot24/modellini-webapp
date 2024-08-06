import React, { useState, useEffect } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { fetchUserAttributes, getCurrentUser, signOut } from 'aws-amplify/auth';
import * as Auth from 'aws-amplify/auth';
import { generateClient } from 'aws-amplify/api';
import { ModellinoCreateForm } from './ui-components';
import { createModellino } from './graphql/mutations';
import { listModellinos } from './graphql/queries';
import Header from './components/Header';

const client = generateClient();

function App({ user: initialUser }) {
  const [user, setUser] = useState(initialUser);
  const [modellini, setModellini] = useState([]);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    async function initApp() {
      try {
        await loadUserInfo();
        await fetchModellini();
      } catch (error) {
        console.error('Error initializing app', error);
        setError('Errore nell\'inizializzazione dell\'app: ' + error.message);
      }
    }
    initApp();
  }, []);

  async function loadUserInfo() {
    try {
      const currentUser = await Auth.getCurrentUser();
      const userAttributes = await Auth.fetchUserAttributes();
      setUser({ ...currentUser, attributes: userAttributes });
    } catch (e) {
      console.error('Error fetching user data', e);
      setError('Errore nel caricamento delle informazioni dell\'utente');
    }
  }

  async function fetchModellini() {
    try {
      const currentSession = await Auth.getCurrentUser();
      const modellinoData = await client.graphql({
        query: listModellinos,
        authMode: 'AMAZON_COGNITO_USER_POOLS'
      });
      
      setModellini(modellinoData.data.listModellinos.items);
    } catch (error) {
      console.error('error fetching modellini', error);
      if (error.message === 'No current user') {
        setError('Utente non autenticato. Effettua il login.');
      } else {
        setError('Errore nel caricamento dei modellini: ' + error.message);
      }
    }
  }

  const handleCreateModellino = async (fields) => {
    try {
      await client.graphql({
        query: createModellino,
        variables: { input: fields },
        authMode: 'AMAZON_COGNITO_USER_POOLS'
      });
      setSuccessMessage('Modellino creato con successo!');
      fetchModellini();
    } catch (err) {
      setError('Errore nella creazione del modellino');
    }
  };

  if (!user) {
    return <div>Caricamento...</div>;
  }

  return (
    <div>
      <Header signOut={signOut} user={user} />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Modellini da Competizione</h1>
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
        <div>
          <h2 className="text-xl font-bold mb-2">I tuoi modellini</h2>
          {modellini.length > 0 ? (
            modellini.map((modellino) => (
              <div key={modellino.id} className="mb-4 p-4 border rounded">
                <p>Descrizione: {modellino.Descrizione}</p>
                <p>Classe: {modellino.ClasseAppartenenza}</p>
                <p>Categoria: {modellino.Categoria}</p>
                <p>Tipo di Partecipazione: {modellino.TipodiPartecipazione}</p>
                {modellino.PremioSpeciale && <p>Premio Speciale: {modellino.PremioSpeciale}</p>}
              </div>
            ))
          ) : (
            <p>Nessun modellino presente. Crea il tuo primo modellino!</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default withAuthenticator(App);