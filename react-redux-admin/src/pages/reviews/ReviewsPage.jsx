import DataTable from "datatables.net-dt";
import customer from "../../assets/img/doctors/doctor-thumb-01.jpg";
import product from "../../assets/img/patients/patient1.jpg";
import { useEffect } from "react";

const ReviewsPage = () => {
  useEffect(() => {
    new DataTable(".datatable");
  });
  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <h3 className="page-title">General Settings</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Reviews</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Page Header */}

      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body">
              <div className="table-responsive">
                <table className="datatable table table-borderless table-center mb-0">
                  <thead>
                    <tr>
                      <th>Sl</th>
                      <th>Customer Name</th>
                      <th>Product Name</th>
                      <th>Ratings</th>
                      <th>Customer Comment</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th className="text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>01</td>
                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="profile.html"
                            className="avatar avatar-sm mr-2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src={customer}
                              alt="User Image"
                            />
                          </a>
                          <a href="profile.html">Charlene Reed </a>
                        </h2>
                      </td>
                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="profile.html"
                            className="avatar avatar-sm mr-2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src={product}
                              alt="User Image"
                            />
                          </a>
                          <a href="profile.html">Dr. Ruby Perrin</a>
                        </h2>
                      </td>
                      <td>
                        <i className="fe fe-star text-warning" />
                        <i className="fe fe-star text-warning" />
                        <i className="fe fe-star text-warning" />
                        <i className="fe fe-star text-warning" />
                        <i className="fe fe-star-o text-secondary" />
                      </td>
                      <td>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </td>
                      <td>
                        3 Nov 2019 <br />
                        <small>09.59 AM</small>
                      </td>
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
                            className="btn btn-sm bg-danger-light"
                            data-toggle="modal"
                            href="#delete_modal"
                          >
                            <i className="fe fe-trash" /> Delete
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewsPage;
