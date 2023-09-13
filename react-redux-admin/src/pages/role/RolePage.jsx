import { useEffect, useState } from "react";
import ModalPopPup from "../../components/ModalPopPup/ModalPopPup";
import { Link } from "react-router-dom";
import DataTable from "datatables.net-dt";
import useFormField from "../../hooks/useFormField";
import { useDispatch, useSelector } from "react-redux";
import { createtoast } from "../../utils/reactToastify";
import {
  getAllpermissionData,
  setMessageEmpty,
} from "../../features/user/userSlice";
import {
  DdeleteRole,
  createRole,
  updateRole,
  updateRoleStatus,
} from "../../features/user/userApiSlice";
import { getDate } from "../../helper/dateHelper";

const RolePage = () => {
  const dispatch = useDispatch();

  const { permission, role, error, message } =
    useSelector(getAllpermissionData);

  const [selected, setSelected] = useState([]);

  const { input, handleInputChange, formReset } = useFormField({
    name: "",
  });

  const [editInput, setEditInput] = useState({});

  // Check Box Check
  const handleCheckBoxChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setSelected([...selected, value]);
    } else {
      setSelected(selected.filter((val) => val !== value));
    }
  };

  // Handle From Submit

  const handleRoleCreate = (e) => {
    e.preventDefault();
    dispatch(
      createRole({
        name: input.name,
        permissions: [...selected],
      })
    );
    formReset();
    setSelected([]);
  };

  // Handle Delete

  const handleDelete = (id) => {
    dispatch(DdeleteRole(id));
  };

  // Handle Status Update

  const handleRoleStatusUpdate = (status, id) => {
    dispatch(updateRoleStatus({ status, id }));
  };

  // Handle Modal Role Edit

  const handleRoleEdit = (id) => {
    const editData = role.find((data) => data._id == id);
    setEditInput(editData);
    setSelected(editData.permissions);
  };
  // Handle Input Update

  const handleInputUpdate = (e) => {
    setEditInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //  Handle Form Update

  const handleRoleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updateRole({
        name: editInput.name,
        permissions: selected,
        id: editInput._id,
      })
    );
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
    new DataTable(".datatable");
  });

  return (
    <>
      {/* Modal */}

      {/* Add Role Modal */}
      <ModalPopPup target="Rolemodalpopup">
        <div className="modal-header">
          <h5 className="modal-title">Add New Role </h5>
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
          <form onSubmit={handleRoleCreate}>
            <label>Role Name</label>
            <input
              type="text"
              className="form-control mb-3"
              name="name"
              placeholder="Name"
              onChange={handleInputChange}
              value={input.name}
            />
            Permission
            <hr />
            {permission?.map((item, index) => {
              if (item.status == true) {
                return (
                  <label key={index} className="d-block">
                    <input
                      type="checkbox"
                      value={item.name}
                      onChange={handleCheckBoxChange}
                      checked={selected.includes(item.name)}
                    />{" "}
                    &nbsp;
                    {item.name}
                  </label>
                );
              }
            })}
            <button type="submit" className="btn btn-primary btn-block">
              Add New Role
            </button>
          </form>
        </div>
      </ModalPopPup>

      {/* Edit Role Modal */}
      <ModalPopPup target="edit_role_modal">
        <div className="modal-header">
          <h5 className="modal-title">Edit Role </h5>
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
          <form onSubmit={handleRoleUpdate}>
            <label>Role Name</label>
            <input
              type="text"
              className="form-control mb-3"
              name="name"
              placeholder="Name"
              onChange={handleInputUpdate}
              value={editInput.name}
            />
            Permission
            <hr />
            {permission?.map((item, index) => {
              if (item.status == true) {
                return (
                  <label key={index} className="d-block">
                    <input
                      type="checkbox"
                      value={item.name}
                      onChange={handleCheckBoxChange}
                      checked={selected?.includes(item.name)}
                    />{" "}
                    &nbsp;
                    {item.name}
                  </label>
                );
              }
            })}
            <button type="submit" className="btn btn-primary btn-block">
              Update Role
            </button>
          </form>
        </div>
      </ModalPopPup>

      {/* Modal */}
      {/* Page Header */}
      <div className="page-header">
        <div className="row">
          <div className="col-sm-7 col-auto">
            <h3 className="page-title">Role</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Dashboard</Link>
              </li>
              <li className="breadcrumb-item active">Role</li>
            </ul>
          </div>
          <div className="col-sm-5 col">
            <button
              data-target="#Rolemodalpopup"
              data-toggle="modal"
              className="btn btn-primary float-right mt-2"
            >
              Add New Role
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
                {role && (
                  <table className="datatable table table-borderless table-center mb-0">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Slug</th>
                        <th style={{ width: "100px", textAlign: "center" }}>
                          Permission
                        </th>
                        <th>Created At</th>
                        <th>Status</th>
                        <th className="text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[...role]?.reverse().map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.slug}</td>
                            <td>
                              <span
                                style={{
                                  display: "flex",
                                  width: "300px",
                                  flexWrap: "wrap",
                                  gap: "5px",
                                  alignItems: "center",
                                }}
                              >
                                {item.permissions.map((data, index) => {
                                  return <li key={index}>{data},</li>;
                                })}
                              </span>
                            </td>
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
                                    handleRoleStatusUpdate(
                                      item.status,
                                      item._id
                                    );
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
                                  href="#edit_role_modal"
                                  onClick={() => handleRoleEdit(item._id)}
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

export default RolePage;
