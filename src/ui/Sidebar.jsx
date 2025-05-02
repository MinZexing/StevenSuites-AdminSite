import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Uploader from "../data/Uploader";
import { useNavigate } from "react-router-dom";

const StyledSiderbar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function Sidebar() {
  const navigate = useNavigate();

  return (
    <StyledSiderbar>
      <Logo onClick={() => navigate("/dashboard")} />
      <MainNav />
      {/* 
      <Uploader /> */}
    </StyledSiderbar>
  );
}

export default Sidebar;
