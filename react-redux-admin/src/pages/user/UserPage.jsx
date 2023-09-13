import { useEffect } from "react";
import userphoto from "../../assets/img/profiles//avatar-01.jpg";
import ModalPopPup from "../../components/ModalPopPup/ModalPopPup";
import { Link } from "react-router-dom";
import DataTable from "datatables.net-dt";

const UserPage = () => {
  useEffect(() => {
    new DataTable(".datatable");
  });
  return (
    <>
      {/* Modal */}

      <ModalPopPup target="usermodalpopup">
        <div className="modal-header">
          <h5 className="modal-title">Add New User</h5>
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
          <form>
            <div className="row form-row">
              <div className="col-12 col-sm-6">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="John"
                  />
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <label>Date of Birth</label>
                  <div className="cal-icon">
                    <input
                      type="date"
                      className="form-control"
                      placeholder="24-07-2023"
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="form-group">
                  <label>Email ID</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="johndoe@example.com"
                  />
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="form-group">
                  <label>Mobile</label>
                  <input
                    type="text"
                    placeholder="+1 202-555-0125"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-12">
                <h5 className="form-title">
                  <span>Address</span>
                </h5>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="4663 Agriculture Lane"
                  />
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="form-group">
                  <label>City</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Miami"
                  />
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="form-group">
                  <label>State</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Florida"
                  />
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="form-group">
                  <label>Zip Code</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={22434}
                  />
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="form-group">
                  <label>Country</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="United States"
                  />
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Add New User
            </button>
          </form>
        </div>
      </ModalPopPup>
      {/* Modal */}
      {/* Page Header */}
      <div className="page-header">
        <div className="row">
          <div className="col-sm-7 col-auto">
            <h3 className="page-title">User</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Dashboard</Link>
              </li>
              <li className="breadcrumb-item active">User</li>
            </ul>
          </div>
          <div className="col-sm-5 col">
            <button
              data-target="#usermodalpopup"
              data-toggle="modal"
              className="btn btn-primary float-right mt-2"
            >
              Add New User
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
                <table className="datatable table table-borderless table-center mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>User Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Address</th>
                      <th>Rule</th>
                      <th>Status</th>
                      <th className="text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>01</td>
                      <td>
                        <h2 className="table-avatar">
                          <Link to="/profile" className="avatar avatar-sm mr-2">
                            <img
                              className="avatar-img rounded-circle"
                              src={userphoto}
                              alt="User Image"
                            />
                          </Link>
                          <Link to="/profile">Abu Sayeed Riday</Link>
                        </h2>
                      </td>
                      <td>admin@gmail.com</td>
                      <td>0571858601</td>
                      <td>
                        Comilla
                        <span className="text-primary d-block">Bangladesh</span>
                      </td>
                      <td>Admin</td>
                      <td>
                        <div className="status-toggle">
                          <input
                            type="checkbox"
                            id="status_1"
                            className="check"
                            defaultChecked=""
                          />
                          <label htmlFor="status_1" className="checktoggle">
                            checkbox
                          </label>
                        </div>
                      </td>

                      <td className="text-right">
                        <div className="actions">
                          <a
                            className="btn btn-sm bg-success-light"
                            data-toggle="modal"
                            href="#edit_specialities_details"
                          >
                            <i className="fe fe-pencil"> Edit</i>
                          </a>
                          <a
                            data-toggle="modal"
                            href="#delete_modal"
                            className="btn btn-sm bg-danger-light"
                          >
                            <i className="fe fe-trash"> Delete</i>
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* /Recent Orders */}
        </div>
      </div>
    </>
  );
};

export default UserPage;
