/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getJobPost = /* GraphQL */ `
  query GetJobPost($id: ID!) {
    getJobPost(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listJobPosts = /* GraphQL */ `
  query ListJobPosts(
    $filter: ModelJobPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJobPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
