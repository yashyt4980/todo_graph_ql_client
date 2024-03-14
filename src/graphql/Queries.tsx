import { gql } from "@apollo/client";
export const ADD_TODO = gql`
      mutation AddTodo($task: String!, $deadline: String!) {
        addTask(task: $task, deadline: $deadline) {
          task
          deadline
        }
      }
`;
