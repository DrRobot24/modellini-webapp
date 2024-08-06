/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUtente = /* GraphQL */ `
  mutation CreateUtente(
    $input: CreateUtenteInput!
    $condition: ModelUtenteConditionInput
  ) {
    createUtente(input: $input, condition: $condition) {
      id
      cognitoId
      nome
      cognome
      telefono
      email
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateUtente = /* GraphQL */ `
  mutation UpdateUtente(
    $input: UpdateUtenteInput!
    $condition: ModelUtenteConditionInput
  ) {
    updateUtente(input: $input, condition: $condition) {
      id
      cognitoId
      nome
      cognome
      telefono
      email
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteUtente = /* GraphQL */ `
  mutation DeleteUtente(
    $input: DeleteUtenteInput!
    $condition: ModelUtenteConditionInput
  ) {
    deleteUtente(input: $input, condition: $condition) {
      id
      cognitoId
      nome
      cognome
      telefono
      email
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
