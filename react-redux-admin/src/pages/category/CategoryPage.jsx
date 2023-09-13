import { useState } from "react";
import ModalPopPup from "../../components/ModalPopPup/ModalPopPup";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getDate } from "../../helper/dateHelper";

const CategoryPage = () => {
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

  // Handle Category Data Edit and Update

  // Handle Input Update

  //  Handle Form Update

  // Handle Status Update

  // useEffects function

  return (
    <>
      {/* Modal */}

      {/* Add Category Modal  */}
      <ModalPopPup target="Categorymodalpopup">
        <div className="modal-header">
          <h5 className="modal-title">Add New Category</h5>
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
            <label htmlFor="">Category Name</label>
            <input
              type="text"
              className="form-control mb-3"
              name="name"
              onChange={handleInputChange}
              value={input.name}
            />
            <label htmlFor="">Category Logo</label>
            <input
              type="File"
              className="form-control mb-3"
              name="name"
              onChange={handleInputChange}
            />
            <button type="submit" className="btn btn-primary btn-block">
              Add New Category
            </button>
          </form>
        </div>
      </ModalPopPup>
      {/* Edit Category Modal  */}
      <ModalPopPup target="editCategory">
        <div className="modal-header">
          <h5 className="modal-title">Update Category</h5>
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
          <form onSubmit={"handleCategoryUpdate"}>
            <input
              type="text"
              className="form-control mb-3"
              name="name"
              onChange={"handleInputUpdate"}
              value={editInput.name}
            />
            <button type="submit" className="btn btn-primary btn-block">
              Update Category
            </button>
          </form>
        </div>
      </ModalPopPup>

      {/* Modal */}
      {/* Page Header */}
      <div className="page-header">
        <div className="row">
          <div className="col-sm-7 col-auto">
            <h3 className="page-title">Category</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Dashboard</Link>
              </li>
              <li className="breadcrumb-item active">Category</li>
            </ul>
          </div>
          <div className="col-sm-5 col">
            <button
              data-target="#Categorymodalpopup"
              data-toggle="modal"
              className="btn btn-primary float-right mt-2"
            >
              Add New Category
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

export default CategoryPage;
