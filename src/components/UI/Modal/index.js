import { createPortal } from "react-dom";
import "./index.css";

const Backdrop = ({ onclose }) => (
  <div onClick={onclose} className="backdrop" />
);

const ModalOverlay = ({ children }) => {
  return (
    <div className="modal">
      <div className="content"> {children}</div>
    </div>
  );
};
const portalElement = document.getElementById("overlays");

const Modal = ({ children, onclose }) => {
  return (
    <>
      {createPortal(<Backdrop onclose={onclose} />, portalElement)}
      {createPortal(<ModalOverlay children={children} />, portalElement)}
    </>
  );
};
export default Modal;
