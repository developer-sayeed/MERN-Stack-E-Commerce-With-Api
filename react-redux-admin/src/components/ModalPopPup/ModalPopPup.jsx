import { Modal } from "@rakan/bootstrap4rtl";

const ModalPopPup = ({ target, children }) => {
  return (
    <>
      {/* Add Modal */}
      <div className="modal fade" id={target} aria-hidden="true" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">{children}</div>
        </div>
      </div>
    </>
  );
};

export default ModalPopPup;
