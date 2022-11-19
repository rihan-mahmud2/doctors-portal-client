import React from "react";

const ConfirmationModal = ({
  title,
  message,
  closeModal,
  sucessAction,
  doctor,
}) => {
  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="confirm-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <label
              onClick={() => sucessAction(doctor)}
              htmlFor="confirm-modal"
              className="btn"
            >
              Yes
            </label>
            <label onClick={closeModal} htmlFor="confirm-modal" className="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
