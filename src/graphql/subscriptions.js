/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateModellino = /* GraphQL */ `
  subscription OnCreateModellino(
    $filter: ModelSubscriptionModellinoFilterInput
    $owner: String
  ) {
    onCreateModellino(filter: $filter, owner: $owner) {
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
export const onUpdateModellino = /* GraphQL */ `
  subscription OnUpdateModellino(
    $filter: ModelSubscriptionModellinoFilterInput
    $owner: String
  ) {
    onUpdateModellino(filter: $filter, owner: $owner) {
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
export const onDeleteModellino = /* GraphQL */ `
  subscription OnDeleteModellino(
    $filter: ModelSubscriptionModellinoFilterInput
    $owner: String
  ) {
    onDeleteModellino(filter: $filter, owner: $owner) {
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
