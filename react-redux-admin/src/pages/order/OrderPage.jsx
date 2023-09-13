import { Link } from "react-router-dom";
import product from "../../assets/img/doctors/doctor-thumb-01.jpg";

import DataTable from "datatables.net-dt";
import { useEffect } from "react";

const OrderPage = () => {
  useEffect(() => {
    new DataTable(".datatable");
  });
  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <h3 className="page-title">Order</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Dashboard</a>
              </li>

              <li className="breadcrumb-item active">Order</li>
            </ul>
          </div>
        </div>
      </div>
      {/* /Page Header */}
      <div className="row">
        <div className="col-sm-12">
          <div className="card card-table">
            <div className="card-body">
              <div className="table-responsive">
                <table className="datatable table table-borderless table-center mb-0">
                  <thead>
                    <tr>
                      <th>Sl</th>
                      <th>Order ID</th>
                      <th>Product Name</th>
                      <th>Address</th>
                      <th>Price</th>
                      <th>Payment</th>
                      <th>Status</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <h2 className="table-avatar">
                          <Link to="/invoice" style={{ fontWeight: "600" }}>
                            #INV-0001
                          </Link>
                        </h2>
                      </td>

                      <td>
                        <h2 className="table-avatar">
                          <Link to="/profile" className="avatar avatar-sm mr-2">
                            <img
                              className="avatar-img"
                              src={product}
                              alt="User Image"
                            />
                          </Link>
                          <Link to="/profile">Abu Sayeed Riday</Link>
                        </h2>
                      </td>
                      <td>king Abdullah Road, 23233, Jeddah</td>
                      <td>$45000</td>
                      <td>Paid</td>
                      <td>
                        <button className="btn btn-sm bg-success-light pr-3 pl-3 rounded-pill">
                          Complete
                        </button>
                      </td>
                      <td>20 Oct 2019</td>
                      <td className="text-right">
                        <div className="actions">
                          <a
                            className="btn btn-sm bg-success-light"
                            data-toggle="modal"
                            href="#edit_specialities_details"
                          >
                            <i className="fe fe-pencil"></i>
                          </a>{" "}
                          &nbsp;
                          <a
                            data-toggle="modal"
                            href="#delete_modal"
                            className="btn btn-sm bg-info-light"
                          >
                            <i className="fe fe-eye"></i>
                          </a>{" "}
                          &nbsp;
                          <a
                            data-toggle="modal"
                            href="#delete_modal"
                            className="btn btn-sm bg-danger-light"
                          >
                            <i className="fe fe-trash"></i>
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

export default OrderPage;
