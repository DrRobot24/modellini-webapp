import React, { useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import { fetchAuthSession } from 'aws-amplify/auth';
import { Button, TextField } from '@aws-amplify/ui-react';
import { createUtente } from '../graphql/mutations';

const client = generateClient();

function CompletaProfiloForm({ user, onComplete }) {
  const [nome, setNome] = useState('');
  const [cognome, setCognome] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { tokens } = await fetchAuthSession();
      const token = tokens.idToken.toString();

      await client.graphql({
        query: createUtente,
        variables: {
          input: {
            cognitoId: user.username,
            nome,
            cognome,
            telefono
          }
        },
        authMode: 'AMAZON_COGNITO_USER_POOLS',
        authToken: token
      });
      onComplete();
    } catch (error) {
      console.error('Errore nel salvataggio del profilo:', error);
      alert('Errore nel salvataggio del profilo. Riprova.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <TextField
        label="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />
      <TextField
        label="Cognome"
        value={cognome}
        onChange={(e) => setCognome(e.target.value)}
        required
      />
      <TextField
        label="Telefono"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
        required
      />
      <Button type="submit">Completa Profilo</Button>
    </form>
  );
}

export default CompletaProfiloForm;