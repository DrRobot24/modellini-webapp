import React from 'react';
import { Button } from '@aws-amplify/ui-react';

function ModellinoList({ modellini, onDelete }) {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">I tuoi Modellini</h2>
      {modellini.length === 0 ? (
        <p>Non hai ancora inserito modellini.</p>
      ) : (
        <ul className="space-y-4">
          {modellini.map((modellino) => (
            <li key={modellino.id} className="border p-4 rounded-lg bg-white shadow-md">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold">{modellino.descrizione}</h3>
                  <p className="text-sm text-gray-500">ID: {modellino.id}</p>
                </div>
                <Button onClick={() => onDelete(modellino.id)} variation="danger" size="small">Elimina</Button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ModellinoList;