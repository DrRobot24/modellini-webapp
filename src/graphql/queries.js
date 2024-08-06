/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUtente = /* GraphQL */ `
  query GetUtente($id: ID!) {
    getUtente(id: $id) {
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
export const listUtentes = /* GraphQL */ `
  query ListUtentes(
    $filter: ModelUtenteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUtentes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
