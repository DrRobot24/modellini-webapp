import React, { useEffect, useState } from "react";
import { Button } from "@aws-amplify/ui-react";
import { fetchUserAttributes } from 'aws-amplify/auth';

function Header({ signOut }) {
  const [userEmail, setUserEmail] = useState('Utente');

  useEffect(() => {
    async function fetchUserEmail() {
      try {
        const attributes = await fetchUserAttributes();
        setUserEmail(attributes.email || 'Utente');
      } catch (error) {
        console.error('Errore nel recupero delle informazioni utente:', error);
        setUserEmail('Utente');
      }
    }

    fetchUserEmail();
  }, []);

  return (
    <header className="bg-slate-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Model Contest WebApp</h1>
        <div>
          <span className="mr-4">Benvenuto, {userEmail}</span>
          <Button onClick={signOut}>Logout</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;