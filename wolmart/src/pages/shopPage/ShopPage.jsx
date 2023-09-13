import ShopPageSidebar from "../../component/shopSidebar/ShopPageSidebar";
import Product from "../../component/product/Product";
import ShopBanner from "../../component/shopBanner/ShopBanner";
import { Link } from "react-router-dom";

const ShopPage = () => {
  return (
    <>
      {/* Start of Main */}
      <main className="main">
        {/* Start of Breadcrumb */}
        <nav className="breadcrumb-nav">
          <div className="container">
            <ul className="breadcrumb bb-no">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Shop</li>
            </ul>
          </div>
        </nav>
        {/* End of Breadcrumb */}
        {/* Start of Page Content */}
        <div className="page-content">
          <div className="container">
            {/* Shop Banner */}
            <ShopBanner />
            {/* Shop Banner */}
            {/* Start of Shop Content */}
            <div className="shop-content row gutter-lg mb-10">
              {/*  Shop Sidebar */}
              <ShopPageSidebar />
              {/*Sidebar */}

              {/* Start of Shop Main Content */}
              <div className="main-content">
                <nav className="toolbox sticky-toolbox sticky-content fix-top">
                  <div className="toolbox-left">
                    <a
                      href="#"
                      className="btn btn-primary btn-outline btn-rounded left-sidebar-toggle btn-icon-left d-block d-lg-none"
                    >
                      <i className="w-icon-category" />
                      <span>Filters</span>
                    </a>
                    <div className="toolbox-item toolbox-sort select-box text-dark">
                      <label>Sort By :</label>
                      <select name="orderby" className="form-control">
                        <option value="default" selected="selected">
                          Default sorting
                        </option>
                        <option value="popularity">Sort by popularity</option>
                        <option value="rating">Sort by average rating</option>
                        <option value="date">Sort by latest</option>
                        <option value="price-low">
                          Sort by pric: low to high
                        </option>
                        <option value="price-high">
                          Sort by price: high to low
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="toolbox-right">
                    <div className="toolbox-item toolbox-show select-box">
                      <select name="count" className="form-control">
                        <option value={9}>Show 9</option>
                        <option value={12} selected="selected">
                          Show 12
                        </option>
                        <option value={24}>Show 24</option>
                        <option value={36}>Show 36</option>
                      </select>
                    </div>
                    <div className="toolbox-item toolbox-layout">
                      <a
                        href="shop-banner-sidebar.html"
                        className="icon-mode-grid btn-layout active"
                      >
                        <i className="w-icon-grid" />
                      </a>
                      <a
                        href="shop-list.html"
                        className="icon-mode-list btn-layout"
                      >
                        <i className="w-icon-list" />
                      </a>
                    </div>
                  </div>
                </nav>
                <div className="product-wrapper row cols-lg-4 cols-md-3 cols-sm-2 cols-2">
                  {/* Product */}
                  <Product />
                  <Product />
                  <Product />
                  <Product />
                  {/* Product */}
                </div>
                <div className="toolbox toolbox-pagination justify-content-between">
                  <p className="showing-info mb-2 mb-sm-0">
                    Showing<span>1-12 of 60</span>Products
                  </p>
                  <ul className="pagination">
                    <li className="prev disabled">
                      <a
                        href="#"
                        aria-label="Previous"
                        tabIndex={-1}
                        aria-disabled="true"
                      >
                        <i className="w-icon-long-arrow-left" />
                        Prev
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="next">
                      <a href="#" aria-label="Next">
                        Next
                        <i className="w-icon-long-arrow-right" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* End of Shop Main Content */}
            </div>
            {/* End of Shop Content */}
          </div>
        </div>
        {/* End of Page Content */}
      </main>
      {/* End of Main */}
    </>
  );
};

export default ShopPage;
