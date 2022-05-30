import "./ProjectModal.css";

const Modal = (props) => {
  return (
    <div
      className="modal fade"
      id={`modal-${props.id}`}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {props.title ? props.title : `title here`}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {props.text
              ? props.text
              : `Does not wisdom call out?
		Does not understanding raise her voice?`}
          </div>
          <div className="modal-footer">
            <a
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
              href={props.link}
            >
              Deployed Project
            </a>
            <a
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
              href={props.repo}
            >
              github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
