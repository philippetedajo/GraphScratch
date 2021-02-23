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

export const Create_Post = gql`
  mutation($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      title
      body
    }
  }
`;
