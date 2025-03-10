import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";
import SpinnerMini from "./SpinnerMini";

const StyledConfirmLogout = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function ConfirmLogout({ onConfirm, disabled, onCloseModal }) {
  return (
    <StyledConfirmLogout>
      <Heading as="h3">Logout Confirmation</Heading>
      <p>Are you sure you want to Logout?</p>

      <div>
        <Button
          variation="secondary"
          disabled={disabled}
          onClick={onCloseModal}
          style={{ width: "85px" }}
        >
          Cancel
        </Button>
        <Button
          variation="danger"
          disabled={disabled}
          onClick={onConfirm}
          style={{ width: "85px" }}
        >
          {disabled ? <SpinnerMini /> : "Logout"}
        </Button>
      </div>
    </StyledConfirmLogout>
  );
}

export default ConfirmLogout;
