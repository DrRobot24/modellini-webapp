import React from "react";
import { Button } from "@aws-amplify/ui-react";

function Header({ signOut, user }) {
  // Aggiungiamo un controllo per vedere se user e user.attributes esistono
  const userEmail = user?.attributes?.email || 'Utente';

  return (
    <header className="bg-slate-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Modellini da Competizione</h1>
        <div>
          <span className="mr-4">Benvenuto, {userEmail}</span>
          <Button onClick={signOut}>Logout</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;