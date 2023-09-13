import { useEffect, useState } from "react";
import ModalPopPup from "../../components/ModalPopPup/ModalPopPup";
import { Link } from "react-router-dom";
import DataTable from "datatables.net-dt";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllpermissionData,
  setMessageEmpty,
} from "../../features/user/userSlice";
import {
  DdeletePermission,
  createPermission,
  getPermission,
  updatePermission,
  updatePermissionStatus,
} from "../../features/user/userApiSlice";
import { createtoast } from "../../utils/reactToastify";
import { getDate } from "../../helper/dateHelper";

const Permission = () => {
  const dispatch = useDispatch();
  const { permission, error, message } = useSelector(getAllpermissionData);

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

  // Handle From Submit

  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(createPermission(input));
    if (error) {
      createtoast(error, "error");
      dispatch(setMessageEmpty());
    } else if (message) {
      createtoast(message, "success");
      dispatch(setMessageEmpty());
    }
    SetInput({
      name: "",
    });
  };

  // Handle Delete

  const handleDelete = (id) => {
    dispatch(DdeletePermission(id));
  };

  // Handle Permission Data Edit and Update

  const handlePermissionEdit = (id) => {
    const editData = permission.find((data) => data._id == id);
    setEditInput(editData);
  };

  // Handle Input Update

  const handleInputUpdate = (e) => {
    setEditInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //  Handle Form Update

  const handlePermissionUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updatePermission({
        name: editInput.name,
        id: editInput._id,
      })
    );
  };

  // Handle Status Update

  const handleStatusUpdate = (status, id) => {
    dispatch(updatePermissionStatus({ status, id }));
  };
  // useEffects function
  useEffect(() => {
    if (error) {
      createtoast(error, "error");
      dispatch(setMessageEmpty());
    } else if (message) {
      createtoast(message, "success");
      dispatch(setMessageEmpty());
    }
  }, [error, message, dispatch]);

  useEffect(() => {
    dispatch(getPermission());
  }, [dispatch]);

  useEffect(() => {
    new DataTable(".datatable");
  });

  return (
    <>
      {/* Modal */}

      {/* Add Permission Modal  */}
      <ModalPopPup target="Permissionmodalpopup">
        <div className="modal-header">
          <h5 className="modal-title">Add New Permission</h5>
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
          <form onSubmit={handlesubmit}>
            <input
              type="text"
              className="form-control mb-3"
              name="name"
              onChange={handleInputChange}
              value={input.name}
            />
            <button type="submit" className="btn btn-primary btn-block">
              Add New Permission
            </button>
          </form>
        </div>
      </ModalPopPup>
      {/* Edit Permission Modal  */}
      <ModalPopPup target="editpermission">
        <div className="modal-header">
          <h5 className="modal-title">Update Permission</h5>
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
          <form onSubmit={handlePermissionUpdate}>
            <input
              type="text"
              className="form-control mb-3"
              name="name"
              onChange={handleInputUpdate}
              value={editInput.name}
            />
            <button type="submit" className="btn btn-primary btn-block">
              Update Permission
            </button>
          </form>
        </div>
      </ModalPopPup>

      {/* Modal */}
      {/* Page Header */}
      <div className="page-header">
        <div className="row">
          <div className="col-sm-7 col-auto">
            <h3 className="page-title">Permission</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Dashboard</Link>
              </li>
              <li className="breadcrumb-item active">Permission</li>
            </ul>
          </div>
          <div className="col-sm-5 col">
            <button
              data-target="#Permissionmodalpopup"
              data-toggle="modal"
              className="btn btn-primary float-right mt-2"
            >
              Add New Permission
            </button>
          </div>
        </div>
      </div>
      {/* /Page Header */}
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="table-responsive">
                {permission && (
                  <table className="datatable table table-borderless table-center mb-0">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Slug</th>
                        <th>Created At</th>

                        <th>Status</th>
                        <th className="text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[...permission]?.reverse().map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.slug}</td>
                            <td>{getDate(item.createdAt)}</td>

                            <td>
                              <div className="status-toggle">
                                <input
                                  type="checkbox"
                                  id="status_1"
                                  className="check"
                                  checked={item.status ? true : false}
                                />
                                <label
                                  onClick={() => {
                                    handleStatusUpdate(item.status, item._id);
                                  }}
                                  htmlFor="status_1"
                                  className="checktoggle"
                                >
                                  checkbox
                                </label>
                              </div>
                            </td>

                            <td className="text-center">
                              <div className="actions">
                                <a
                                  className="btn btn-sm bg-success-light"
                                  data-toggle="modal"
                                  href="#editpermission"
                                  onClick={() => handlePermissionEdit(item._id)}
                                >
                                  <i className="fe fe-pencil"> Edit</i>
                                </a>
                                &nbsp;
                                <a
                                  data-toggle="modal"
                                  href="#delete_modal"
                                  className="btn btn-sm bg-danger-light"
                                  onClick={() => handleDelete(item._id)}
                                >
                                  <i className="fe fe-trash"> Delete</i>
                                </a>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
          {/* /Recent Orders */}
        </div>
      </div>
    </>
  );
};

export default Permission;
