import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";
import Modal from "../../ui/Modal";
import ConfirmLogout from "../../ui/ConfirmLogout";

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <Modal>
      <Modal.Open opens="confirmLogout">
        <ButtonIcon disabled={isLoading}>
          {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
        </ButtonIcon>
      </Modal.Open>

      <Modal.Window name="confirmLogout">
        <ConfirmLogout onConfirm={() => logout()} disabled={isLoading} />
      </Modal.Window>
    </Modal>
  );
}

export default Logout;
