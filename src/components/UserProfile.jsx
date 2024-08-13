import React, { useEffect, useState } from 'react';
import { API } from 'aws-amplify';
import { getUtente } from './graphql/queries';

function UserProfile({ user }) {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const userData = await API.graphql({
          query: getUtente,
          variables: { cognitoId: user.username }
        });
        setProfile(userData.data.getUtente);
      } catch (error) {
        console.error('Errore nel recupero del profilo:', error);
      }
    }
    fetchProfile();
  }, [user]);

  if (!profile) return <div>Caricamento profilo...</div>;

  return (
    <div className="bg-gray-100 p-4 my-4">
      <h2 className="text-xl font-bold mb-2">Profilo Utente</h2>
      <p><strong>Nome:</strong> {profile.nome}</p>
      <p><strong>Cognome:</strong> {profile.cognome}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Telefono:</strong> {profile.telefono}</p>
    </div>
  );
}

export default UserProfile;