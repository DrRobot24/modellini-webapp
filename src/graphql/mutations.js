/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createModellino = /* GraphQL */ `
  mutation CreateModellino(
    $input: CreateModellinoInput!
    $condition: ModelModellinoConditionInput
  ) {
    createModellino(input: $input, condition: $condition) {
      id
      Descrizione
      ClasseAppartenenza
      Categoria
      TipodiPartecipazione
      PremioSpeciale
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateModellino = /* GraphQL */ `
  mutation UpdateModellino(
    $input: UpdateModellinoInput!
    $condition: ModelModellinoConditionInput
  ) {
    updateModellino(input: $input, condition: $condition) {
      id
      Descrizione
      ClasseAppartenenza
      Categoria
      TipodiPartecipazione
      PremioSpeciale
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteModellino = /* GraphQL */ `
  mutation DeleteModellino(
    $input: DeleteModellinoInput!
    $condition: ModelModellinoConditionInput
  ) {
    deleteModellino(input: $input, condition: $condition) {
      id
      Descrizione
      ClasseAppartenenza
      Categoria
      TipodiPartecipazione
      PremioSpeciale
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;