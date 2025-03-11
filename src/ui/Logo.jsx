import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 12.8rem;
  width: auto;
  cursor: ${(props) => (props.$clickable ? "pointer" : "default")};
`;

function Logo({ onClick = null }) {
  const { isDarkMode } = useDarkMode();
  const src = isDarkMode ? "darklogo.png" : "./lightlogo.png";

  return (
    <StyledLogo>
      <Img
        src={src}
        alt="Logo"
        onClick={onClick || undefined}
        $clickable={!!onClick}
      />
    </StyledLogo>
  );
}

export default Logo;
