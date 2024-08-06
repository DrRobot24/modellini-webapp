import React, { useState, useEffect } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { fetchUserAttributes, getCurrentUser, signOut } from 'aws-amplify/auth';
import { generateClient } from 'aws-amplify/api';
import { UtenteCreateForm } from './ui-components';
import { createUtente, updateUtente } from './graphql/mutations';
import { listUtentes } from './graphql/queries';
import Header from './components/Header';

import { ThemeProvider, createTheme } from "@aws-amplify/ui-react";
import { studioTheme } from './ui-components';

const updatedTheme = createTheme({
    // Extend the theme to update the button color
    name: "my-theme-updates", 
    tokens: {
        components: {
            button: {
                primary: {
                    backgroundColor: {
                        value: "#b71c1c"
                    },
                },
            },
        },
    },
}, studioTheme)

const client = generateClient();

function App({ user: initialUser }) {
  const [user, setUser] = useState(initialUser);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    async function loadUserInfo() {
      try {
        const currentUser = await getCurrentUser();
        const userAttributes = await fetchUserAttributes();
        setUser({ ...currentUser, attributes: userAttributes });

        const { data } = await client.graphql({
          query: listUtentes,
          variables: { 
            filter: { cognitoId: { eq: currentUser.userId } }
          }
        });

        if (data.listUtentes.items.length > 0) {
          setUserData(data.listUtentes.items[0]);
        } else {
          setUserData({
            cognitoId: currentUser.userId,
            email: userAttributes.email,
            nome: userAttributes.name || '',
            cognome: userAttributes.family_name || '',
            telefono: userAttributes.phone_number || ''
          });
        }
      } catch (e) {
        console.error('Error fetching user data', e);
        setError('Errore nel caricamento delle informazioni dell\'utente: ' + (e.message || 'Errore sconosciuto'));
      }
    }
    
    loadUserInfo();
  }, []);

  const handleSubmit = async (fields) => {
    try {
      let formattedPhone = fields.telefono.replace(/\D/g, '');
      if (!formattedPhone.startsWith('+')) {
        formattedPhone = '+' + formattedPhone;
      }
      
      const awsPhoneRegex = /^\+[1-9]\d{1,14}$/;
      if (!awsPhoneRegex.test(formattedPhone)) {
        throw new Error('Il numero di telefono non è valido. Dovrebbe essere nel formato internazionale (es. +39XXXXXXXXXX).');
      }

      const updatedFields = { 
        ...fields, 
        telefono: formattedPhone,
        cognitoId: user.userId,
        email: user.attributes.email
      };

      let response;
      if (userData && userData.id) {
        response = await client.graphql({
          query: updateUtente,
          variables: { input: { id: userData.id, ...updatedFields } }
        });
        setUserData(response.data.updateUtente);
      } else {
        response = await client.graphql({
          query: createUtente,
          variables: { input: updatedFields }
        });
        setUserData(response.data.createUtente);
      }
      setSuccessMessage('Profilo utente salvato con successo!');
      setError(null);
    } catch (err) {
      console.error('Errore nel salvataggio del profilo utente:', err);
      setError('Si è verificato un errore nel salvataggio del profilo utente: ' + (err.message || 'Errore sconosciuto'));
      setSuccessMessage(null);
    }
  };

  if (!user) {
    return <div>Caricamento utente...</div>;
  }

  const filterUserData = (data) => {
    const { id, cognitoId, nome, cognome, telefono, email } = data || {};
    const { cognitoId: _, ...filteredData } = { id, cognitoId, nome, cognome, telefono, email };
    return filteredData;
  };
 
  return (
    <div>
      <Header signOut={signOut} user={user} />
      <div className="container mx-auto p-4">
        <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-4" role="alert">
          <p className="font-bold">ID Utente:</p>
          <p>{user.userId}</p>
        </div>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl font-bold mb-4">Profilo Utente</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {successMessage && (
            <p className="text-green-500 mb-4 bg-green-100 border border-green-400 p-2 rounded">
              {successMessage}
            </p>
          )}
          <UtenteCreateForm
  onSubmit={handleSubmit}
  onError={(error) => {
    console.error('Errore nel form:', error);
    setError('Si è verificato un errore nel form: ' + (error.message || 'Errore sconosciuto'));
  }}
  overrides={{
    cognitoId: { 
      display: 'none',
      required: false,
      value: user.userId
    }
  }}
  {...filterUserData(userData)}
/>
        </div>
      </div>
    </div>
  );
}

export default withAuthenticator (App);