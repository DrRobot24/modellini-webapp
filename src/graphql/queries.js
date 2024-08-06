/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getModellino = /* GraphQL */ `
  query GetModellino($id: ID!) {
    getModellino(id: $id) {
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
export const listModellinos = /* GraphQL */ `
  query ListModellinos(
    $filter: ModelModellinoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listModellinos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
