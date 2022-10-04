import styled from "styled-components";

export const TasksContainer = styled.div`
  height: 100%;
  min-height: 100vh;
`;

export const Wrapper = styled.main`
  max-width: 46rem;
  margin: 0 auto;
  padding: 0 1rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  form {
    display: flex;
    width: 100%;
    gap: 0.5rem;

    margin-top: -1.875rem;
    margin-bottom: 4rem;

    input,
    button {
      height: 3.375rem;
      padding: 1rem;
    }

    input {
      flex: 1;
      font-size: 1rem;
      color: ${(props) => props.theme["gray-600"]};
      border: 0;
      border-radius: 8px;
      background: ${(props) => props.theme["gray-200"]};
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      font-size: 0.875rem;
      font-weight: bold;
      color: ${(props) => props.theme["gray-100"]};
      border: 0;
      border-radius: 8px;
      background: ${(props) => props.theme["blue-700"]};

      cursor: pointer;

      &:hover {
        background: ${(props) => props.theme["blue-500"]};
      }
    }
  }
`;

export const Information = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    padding: 0.5rem;
    background: transparent;
    border: 0;
    border-bottom: 1px solid #333;

    &:focus {
      box-shadow: none;
    }
  }

  div {
    display: flex;
    gap: 0.5rem;

    strong {
      display: flex;
      flex-direction: column;
      color: ${(props) => props.theme["gray-400"]};

      align-items: center;

      span {
        border-radius: 999px;
        background: ${(props) => props.theme["blue-700"]};
        padding: 0.125rem 0.5rem;
        font-size: 0.75rem;
        color: ${(props) => props.theme.white};

        &.created {
          background: ${(props) => props.theme["orange-700"]};
        }
      }
    }
  }
`;

export const TasksList = styled.ul`
  list-style: none;

  li {
    margin-bottom: 0.875rem;
  }
`;

export const Task = styled.li`
  display: flex;
  gap: 0.5rem;

  width: 100%;
  padding: 1rem;
  background: ${(props) => props.theme.white};

  button {
    border: 0;
    background: transparent;
    line-height: 0;
    cursor: pointer;
  }

  p {
    flex: 1;
  }

  .done {
    color: ${(props) => props.theme["gray-400"]};
    text-decoration: line-through;
  }
`;

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 4rem 1.5rem;

  p > strong {
    display: block;
  }
`;
