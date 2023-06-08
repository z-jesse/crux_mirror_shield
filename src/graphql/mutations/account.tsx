import { gql } from "@apollo/client";

export const UPDATE_USER_DETAIL = gql`
  mutation UpdateUserDetail($userInformation: USER_DETAILS!) {
    updateUserDetail( userInformation: $userInformation) {
        firstName
        lastName
        phone
    }
  }
`;