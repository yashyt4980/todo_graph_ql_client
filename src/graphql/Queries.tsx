import { gql } from "@apollo/client";
export const ADD_TODO = gql`
      mutation AddTodo($task: String!, $deadline: String!) {
        addTask(task: $task, deadline: $deadline) {
          task
          deadline
        }
      }
`;

export const UPDATE_TODO = gql`
      mutation UpdateTodo($task: String!, $deadline: String!, $id: ID!) {
        updateTask(task: $task, deadline: $deadline, _id: $id) {
          task
          deadline
        }
      }
`;
export const FETCH_TODO = gql`
      query fetchTodos {
        getTasks {
          task
          deadline
          _id
        }
      }
`