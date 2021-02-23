import { gql } from "@apollo/client";

export const Get_All_Posts = gql`
  query($options: PageQueryOptions) {
    posts(options: $options) {
      data {
        id
        title
      }
      meta {
        totalCount
      }
    }
  }
`;
