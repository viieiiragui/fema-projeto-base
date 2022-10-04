import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 12.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme.white};

  img {
    margin-right: 0.5rem;
  }

  h1 {
    font-weight: 900;
    font-size: 2.5rem;

    color: ${(props) => props.theme["orange-700"]};

    strong {
      font-weight: inherit;
      color: ${(props) => props.theme["blue-700"]};
      margin-right: 0.5rem;
    }
  }
`;
