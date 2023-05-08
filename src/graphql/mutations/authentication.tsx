import { gql } from "@apollo/client";

export const SIGNIN_USER = gql`
  mutation SigninUser($credentials: AUTH_PROVIDER_CREDENTIALS!) {
    signinUser( credentials: $credentials) {
      user {
        email
        status
      }
      token
    }
  }
`;

export const SIGNOUT_USER = gql`
  mutation SignoutUser {
    signoutUser {
      status
    }
  }
`;