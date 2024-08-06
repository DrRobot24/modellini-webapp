/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUtente = /* GraphQL */ `
  subscription OnCreateUtente(
    $filter: ModelSubscriptionUtenteFilterInput
    $owner: String
  ) {
    onCreateUtente(filter: $filter, owner: $owner) {
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
export const onUpdateUtente = /* GraphQL */ `
  subscription OnUpdateUtente(
    $filter: ModelSubscriptionUtenteFilterInput
    $owner: String
  ) {
    onUpdateUtente(filter: $filter, owner: $owner) {
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
export const onDeleteUtente = /* GraphQL */ `
  subscription OnDeleteUtente(
    $filter: ModelSubscriptionUtenteFilterInput
    $owner: String
  ) {
    onDeleteUtente(filter: $filter, owner: $owner) {
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
