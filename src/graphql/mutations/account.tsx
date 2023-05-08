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

export const UPDATE_USER_DETAIL = gql`
  mutation UpdateUserDetail($userInformation: USER_DETAILS!) {
    updateUserDetail( userInformation: $userInformation) {
        firstName
        lastName
        phone
    }
  }
`;