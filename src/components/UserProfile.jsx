import React from 'react';

function UserProfile({ user }) {
  // Aggiungiamo un controllo per vedere se user e user.attributes esistono
  const email = user?.attributes?.email || 'Email non disponibile';

  return (
    <div className="bg-gray-100 p-4 my-4">
      <h2 className="text-xl font-bold mb-2">Profilo Utente</h2>
      <p><strong>Email:</strong> {email}</p>
      {/* Puoi aggiungere altri attributi dell'utente qui, se disponibili */}
    </div>
  );
}

export default UserProfile;