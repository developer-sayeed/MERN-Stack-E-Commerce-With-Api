import { useState } from "react";
import ModalPopPup from "../../components/ModalPopPup/ModalPopPup";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getDate } from "../../helper/dateHelper";

const TagPage = () => {
  const dispatch = useDispatch();

  const [input, SetInput] = useState({
    name: "",
  });

  const [editInput, setEditInput] = useState([]);

  // Handle Input Chnage Login

  const handleInputChange = (e) => {
    SetInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle Delete

  // Handle Tag Data Edit and Update

  // Handle Input Update

  //  Handle Form Update

  // Handle Status Update

  // useEffects function

  return (
    <>
      {/* Modal */}

      {/* Add Tag Modal  */}
      <ModalPopPup target="Tagmodalpopup">
        <div className="modal-header">
          <h5 className="modal-title">Add New Tag</h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <form onSubmit={"handlesubmit"}>
            <label htmlFor="">Tag Name</label>
            <input
              type="text"
              className="form-control mb-3"
              name="name"
              onChange={handleInputChange}
              value={input.name}
            />
            <label htmlFor="">Tag Logo</label>
            <input
              type="File"
              className="form-control mb-3"
              name="name"
              onChange={handleInputChange}
            />
            <button type="submit" className="btn btn-primary btn-block">
              Add New Tag
            </button>
          </form>
        </div>
      </ModalPopPup>
      {/* Edit Tag Modal  */}
      <ModalPopPup target="editTag">
        <div className="modal-header">
          <h5 className="modal-title">Update Tag</h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <form onSubmit={"handleTagUpdate"}>
            <input
              type="text"
              className="form-control mb-3"
              name="name"
              onChange={"handleInputUpdate"}
              value={editInput.name}
            />
            <button type="submit" className="btn btn-primary btn-block">
              Update Tag
            </button>
          </form>
        </div>
      </ModalPopPup>

      {/* Modal */}
      {/* Page Header */}
      <div className="page-header">
        <div className="row">
          <div className="col-sm-7 col-auto">
            <h3 className="page-title">Tag</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Dashboard</Link>
              </li>
              <li className="breadcrumb-item active">Tag</li>
            </ul>
          </div>
          <div className="col-sm-5 col">
            <button
              data-target="#Tagmodalpopup"
              data-toggle="modal"
              className="btn btn-primary float-right mt-2"
            >
              Add New Tag
            </button>
          </div>
        </div>
      </div>
      {/* /Page Header */}
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body"></div>
          </div>
          {/* /Recent Orders */}
        </div>
      </div>
    </>
  );
};

export default TagPage;
