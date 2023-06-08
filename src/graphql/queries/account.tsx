import { gql } from "@apollo/client";

export const GET_ACCOUNT_INFO = gql`
  query GetAccountInfo {
    getAccountInfo {
      id
      email
      phoneConfirmed
      emailConfirmed
      status
      userDetail {
        firstName
        lastName
        dob
        street
        street2
      }
    }
  }
`;