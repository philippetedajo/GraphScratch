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

export const Get_Post = gql`
  query($id: ID!) {
    post(id: $id) {
      id
      title
      body
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

export const Update_Post = gql`
  mutation($id: ID!, $input: UpdatePostInput!) {
    updatePost(id: $id, input: $input) {
      id
      title
      body
    }
  }
`;

export const Delete_Post = gql`
  mutation($id: ID!) {
    deletePost(id: $id)
  }
`;
