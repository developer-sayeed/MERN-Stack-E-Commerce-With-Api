import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li>
                <Link to="/">
                  <i className="fe fe-home" /> <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/order">
                  <i className="fa fa-shopping-cart" /> <span>Order</span>
                </Link>
              </li>
              <li>
                <Link to="/product">
                  <i className="fa fa-shopping-cart" /> <span>Product</span>
                </Link>
              </li>
              <li>
                <Link to="/category">
                  <i className="fa fa-shopping-cart" /> <span>Category</span>
                </Link>
              </li>
              <li>
                <Link to="/brand">
                  <i className="fa fa-shopping-cart" /> <span>Brand</span>
                </Link>
              </li>
              <li>
                <Link to="/tag">
                  <i className="fa fa-shopping-cart" /> <span>Tag</span>
                </Link>
              </li>
              <li>
                <Link to="/user">
                  <i className="fe fe-user" /> <span>User</span>
                </Link>
              </li>
              <li>
                <Link to="/role">
                  <i className="fe fe-user" /> <span>Role</span>
                </Link>
              </li>
              <li>
                <Link to="/permission">
                  <i className="fa fa-lock" aria-hidden="true"></i>
                  <span>Permission</span>
                </Link>
              </li>
              <li>
                <Link to="/user">
                  <i className="fe fe-user" /> <span>Customer</span>
                </Link>
              </li>
              <li>
                <Link to="/reviews">
                  <i className="fe fe-star-o" /> <span>Reviews</span>
                </Link>
              </li>
              <li>
                <Link to="/setting">
                  <i className="fe fe-vector" /> <span>Setting</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
