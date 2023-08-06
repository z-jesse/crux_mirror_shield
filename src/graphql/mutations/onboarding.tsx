import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation CreateUser($authProvider: AuthProviderSignupData!) {
    createUser( authProvider: $authProvider) {
      id
    }
  }
`;

export const CONFIRM_EMAIL = gql`
  mutation ConfirmEmail($confirmationToken: String!) {
    confirmEmail( confirmationToken: $confirmationToken) {
        status
    }
  }
`;
