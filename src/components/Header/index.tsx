import { HeaderContainer } from "./styles";

import femaLogo from "../../assets/fema-logo.png";

export function Header() {
  return (
    <HeaderContainer>
      <img src={femaLogo} />
      <h1>
        To
        <strong>Do</strong>
        List
      </h1>
    </HeaderContainer>
  );
}
