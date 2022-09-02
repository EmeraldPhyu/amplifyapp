/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createJobPost = /* GraphQL */ `
  mutation CreateJobPost(
    $input: CreateJobPostInput!
    $condition: ModelJobPostConditionInput
  ) {
    createJobPost(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateJobPost = /* GraphQL */ `
  mutation UpdateJobPost(
    $input: UpdateJobPostInput!
    $condition: ModelJobPostConditionInput
  ) {
    updateJobPost(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteJobPost = /* GraphQL */ `
  mutation DeleteJobPost(
    $input: DeleteJobPostInput!
    $condition: ModelJobPostConditionInput
  ) {
    deleteJobPost(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
