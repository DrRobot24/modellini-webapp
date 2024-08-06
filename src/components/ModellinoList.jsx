import React from 'react';
import { Button } from '@aws-amplify/ui-react';

function ModellinoList({ modellini, onUpdate, onDelete }) {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">I tuoi Modellini</h2>
      {modellini.length === 0 ? (
        <p>Non hai ancora inserito modellini.</p>
      ) : (
        <ul className="space-y-4">
          {modellini.map((modellino) => (
            <li key={modellino.id} className="border p-4 rounded-lg">
              <h3 className="text-xl font-semibold">{modellino.descrizione}</h3>
              <p>Tipo: {modellino.tipoPartecipazione}</p>
              <p>Classe: {modellino.classeAppartenenza}</p>
              <p>Categoria: {modellino.categoria}</p>
              {modellino.premioSpeciale && <p>Premio Speciale: {modellino.premioSpeciale}</p>}
              <div className="mt-2">
                <Button onClick={() => onUpdate(modellino)} className="mr-2">Modifica</Button>
                <Button onClick={() => onDelete(modellino.id)} variation="danger">Elimina</Button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ModellinoList;