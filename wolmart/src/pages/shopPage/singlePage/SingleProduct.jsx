import { Link } from "react-router-dom";
import product1 from "../../../assets/images/products/default/1-800x900.jpg";
import product2 from "../../../assets/images/products/default/2.jpg";
import product3 from "../../../assets/images/products/default/3-800x900.jpg";
import product4 from "../../../assets/images/products/default/4-800x900.jpg";
import product5 from "../../../assets/images/products/default/5-800x900.jpg";

const SingleProduct = () => {
  return (
    <>
      <main className="main mb-10 pb-1">
        {/* Start of Breadcrumb */}
        <nav className="breadcrumb-nav container">
          <ul className="breadcrumb bb-no">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Products</li>
          </ul>
        </nav>
        {/* End of Breadcrumb */}

        {/* Start of Page Content */}
        <div className="page-content">
          <div className="container">
            <div className="row gutter-lg">
              <div className="main-content">
                <div className="product product-single row">
                  <div className="col-md-6 mb-6">
                    <div className="product-gallery product-gallery-sticky">
                      <div className="swiper-container product-single-swiper swiper-theme nav-inner">
                        <div className="swiper-wrapper row cols-1 gutter-no">
                          <div className="swiper-slide">
                            <figure className="product-image">
                              <img
                                src={product1}
                                alt="Electronics Black Wrist Watch"
                                width={800}
                                height={900}
                              />
                            </figure>
                          </div>
                        </div>
                        <button className="swiper-button-next" />
                        <button className="swiper-button-prev" />
                        <a
                          href="#"
                          className="product-gallery-btn product-image-full"
                        >
                          <i className="w-icon-zoom" />
                        </a>
                      </div>
                      <div
                        className="product-thumbs-wrap swiper-container"
                        data-swiper-options="{
                                      'navigation': {
                                          'nextEl': '.swiper-button-next',
                                          'prevEl': '.swiper-button-prev'
                                      }
                                  }"
                      >
                        <div className="product-thumbs swiper-wrapper row cols-4 gutter-sm">
                          <div className="product-thumb swiper-slide">
                            <img
                              src={product1}
                              alt="Product Thumb"
                              width={800}
                              height={900}
                            />
                          </div>
                          <div className="product-thumb swiper-slide">
                            <img
                              src={product2}
                              alt="Product Thumb"
                              width={800}
                              height={900}
                            />
                          </div>
                          <div className="product-thumb swiper-slide">
                            <img
                              src={product3}
                              alt="Product Thumb"
                              width={800}
                              height={900}
                            />
                          </div>
                          <div className="product-thumb swiper-slide">
                            <img
                              src={product4}
                              alt="Product Thumb"
                              width={800}
                              height={900}
                            />
                          </div>
                        </div>
                        <button className="swiper-button-next" />
                        <button className="swiper-button-prev" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4 mb-md-6">
                    <div
                      className="product-details"
                      data-sticky-options="{'minWidth': 767}"
                    >
                      <h1 className="product-title">
                        Electronics Black Wrist Watch
                      </h1>
                      <div className="product-bm-wrapper">
                        <figure className="brand">
                          <img
                            src="../../../assets/images/products/brand/brand-1.jpg"
                            alt="Brand"
                            width={102}
                            height={48}
                          />
                        </figure>
                        <div className="product-meta">
                          <div className="product-categories">
                            Category:
                            <span className="product-category">
                              <Link to="#">Electronics</Link>
                            </span>
                          </div>
                          <div className="product-sku">
                            SKU: <span>MS46891340</span>
                          </div>
                        </div>
                      </div>
                      <hr className="product-divider" />
                      <div className="product-price">
                        <ins className="new-price">$40.00</ins>
                      </div>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span className="ratings" style={{ width: "80%" }} />
                          <span className="tooltiptext tooltip-top" />
                        </div>
                        <a
                          href="#product-tab-reviews"
                          className="rating-reviews scroll-to"
                        >
                          (3 Reviews)
                        </a>
                      </div>
                      <div className="product-short-desc">
                        <ul className="list-type-check list-style-none">
                          <li>
                            Ultrices eros in cursus turpis massa cursus mattis.
                          </li>
                          <li>
                            Volutpat ac tincidunt vitae semper quis lectus.
                          </li>
                          <li>
                            Aliquam id diam maecenas ultricies mi eget mauris.
                          </li>
                        </ul>
                      </div>
                      <hr className="product-divider" />
                      <div className="product-form product-variation-form product-color-swatch">
                        <label>Color:</label>
                        <div className="d-flex align-items-center product-variations">
                          <a
                            href="#"
                            className="color"
                            style={{ backgroundColor: "#ffcc01" }}
                          />
                          <a
                            href="#"
                            className="color"
                            style={{ backgroundColor: "#ca6d00" }}
                          />
                          <a
                            href="#"
                            className="color"
                            style={{ backgroundColor: "#1c93cb" }}
                          />
                          <a
                            href="#"
                            className="color"
                            style={{ backgroundColor: "#ccc" }}
                          />
                          <a
                            href="#"
                            className="color"
                            style={{ backgroundColor: "#333" }}
                          />
                        </div>
                      </div>
                      <div className="product-form product-variation-form product-size-swatch">
                        <label className="mb-1">Size:</label>
                        <div className="flex-wrap d-flex align-items-center product-variations">
                          <Link to="#" className="size">
                            Small
                          </Link>
                          <Link to="#" className="size">
                            Medium
                          </Link>
                          <Link to="#" className="size">
                            Large
                          </Link>
                          <Link to="#" className="size">
                            Extra Large
                          </Link>
                        </div>
                        <Link to="#" className="product-variation-clean">
                          Clean All
                        </Link>
                      </div>
                      <div className="product-variation-price">
                        <span />
                      </div>
                      <div className="fix-bottom product-sticky-content sticky-content">
                        <div className="product-form container">
                          <div className="product-qty-form">
                            <div className="input-group">
                              <input
                                className="quantity form-control"
                                type="number"
                                min={1}
                                max={10000000}
                              />
                              <button className="quantity-plus w-icon-plus" />
                              <button className="quantity-minus w-icon-minus" />
                            </div>
                          </div>
                          <Link to="/cart" className="btn btn-primary btn-cart">
                            <i className="w-icon-cart" />
                            <span>Add to Cart</span>
                          </Link>
                        </div>
                      </div>
                      <div className="social-links-wrapper">
                        <div className="social-links">
                          <div className="social-icons social-no-color border-thin">
                            <a
                              href="#"
                              className="social-icon social-facebook w-icon-facebook"
                            />
                            <a
                              href="#"
                              className="social-icon social-twitter w-icon-twitter"
                            />
                            <a
                              href="#"
                              className="social-icon social-pinterest fab fa-pinterest-p"
                            />
                            <a
                              href="#"
                              className="social-icon social-whatsapp fab fa-whatsapp"
                            />
                            <a
                              href="#"
                              className="social-icon social-youtube fab fa-linkedin-in"
                            />
                          </div>
                        </div>
                        <span className="divider d-xs-show" />
                        <div className="product-link-wrapper d-flex">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                          >
                            <span />
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare btn-icon-left w-icon-compare"
                          >
                            <span />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tab tab-nav-boxed tab-nav-underline product-tabs">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                      <a
                        href="#product-tab-description"
                        className="nav-link active"
                      >
                        Description
                      </a>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="#product-tab-specification"
                        className="nav-link"
                      >
                        Specification
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="#product-tab-reviews" className="nav-link">
                        Customer Reviews (3)
                      </Link>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div
                      className="tab-pane active"
                      id="product-tab-description"
                    >
                      <div className="row mb-4">
                        <div className="col-md-6 mb-5">
                          <h4 className="title tab-pane-title font-weight-bold mb-2">
                            Detail
                          </h4>
                          <p className="mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt arcu cursus
                            vitae congue mauris. Sagittis id consectetur purus
                            ut. Tellus rutrum tellus pelle Vel pretium lectus
                            quam id leo in vitae turpis massa.
                          </p>
                          <ul className="list-type-check">
                            <li>
                              Nunc nec porttitor turpis. In eu risus enim. In
                              vitae mollis elit.
                            </li>
                            <li>Vivamus finibus vel mauris ut vehicula.</li>
                            <li>
                              Nullam a magna porttitor, dictum risus nec,
                              faucibus sapien.
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6 mb-5">
                          <div className="banner banner-video product-video br-xs">
                            <figure className="banner-media">
                              <Link to="#">
                                <img
                                  src={product2}
                                  alt="banner"
                                  width={610}
                                  height={300}
                                  style={{ backgroundColor: "#bebebe" }}
                                />
                              </Link>
                              <a
                                className="btn-play-video btn-iframe"
                                href="assets/video/memory-of-a-woman.mp4"
                              />
                            </figure>
                          </div>
                        </div>
                      </div>
                      <div className="row cols-md-3">
                        <div className="mb-3">
                          <h5 className="sub-title font-weight-bold">
                            <span className="mr-3">1.</span>Free Shipping &amp;
                            Return
                          </h5>
                          <p className="detail pl-5">
                            We offer free shipping for products on orders above
                            50$ and offer free delivery for all orders in US.
                          </p>
                        </div>
                        <div className="mb-3">
                          <h5 className="sub-title font-weight-bold">
                            <span>2.</span>Free and Easy Returns
                          </h5>
                          <p className="detail pl-5">
                            We guarantee our products and you could get back all
                            of your money anytime you want in 30 days.
                          </p>
                        </div>
                        <div className="mb-3">
                          <h5 className="sub-title font-weight-bold">
                            <span>3.</span>Special Financing
                          </h5>
                          <p className="detail pl-5">
                            Get 20%-50% off items over 50$ for a month or over
                            250$ for a year with our special credit card.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="product-tab-specification">
                      <ul className="list-none">
                        <li>
                          <label>Model</label>
                          <p>Skysuite 320</p>
                        </li>
                        <li>
                          <label>Color</label>
                          <p>Black</p>
                        </li>
                        <li>
                          <label>Size</label>
                          <p>Large, Small</p>
                        </li>
                        <li>
                          <label>Guarantee Time</label>
                          <p>3 Months</p>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-pane" id="product-tab-vendor">
                      <div className="row mb-3">
                        <div className="col-md-6 mb-4">
                          <figure className="vendor-banner br-sm">
                            <img
                              src="../../../assets/images/products/vendor-banner.jpg"
                              alt="Vendor Banner"
                              width={610}
                              height={295}
                              style={{ backgroundColor: "#353b55" }}
                            />
                          </figure>
                        </div>
                        <div className="col-md-6 pl-2 pl-md-6 mb-4">
                          <div className="vendor-user">
                            <figure className="vendor-logo mr-4">
                              <Link to="#">
                                <img
                                  src="../../../assets/images/products/vendor-logo.jpg"
                                  alt="Vendor Logo"
                                  width={80}
                                  height={80}
                                />
                              </Link>
                            </figure>
                            <div>
                              <div className="vendor-name">
                                <Link to="#">Jone Doe</Link>
                              </div>
                              <div className="ratings-container">
                                <div className="ratings-full">
                                  <span
                                    className="ratings"
                                    style={{ width: "90%" }}
                                  />
                                  <span className="tooltiptext tooltip-top" />
                                </div>
                                <Link to="#" className="rating-reviews">
                                  (32 Reviews)
                                </Link>
                              </div>
                            </div>
                          </div>
                          <ul className="vendor-info list-style-none">
                            <li className="store-name">
                              <label>Store Name:</label>
                              <span className="detail">OAIO Store</span>
                            </li>
                            <li className="store-address">
                              <label>Address:</label>
                              <span className="detail">
                                Steven Street, El Carjon, CA 92020, United
                                States (US)
                              </span>
                            </li>
                            <li className="store-phone">
                              <label>Phone:</label>
                              <Link to="#tel:">1234567890</Link>
                            </li>
                          </ul>
                          <a
                            href="vendor-dokan-store.html"
                            className="btn btn-dark btn-link btn-underline btn-icon-right"
                          >
                            Visit Store
                            <i className="w-icon-long-arrow-right" />
                          </a>
                        </div>
                      </div>
                      <p className="mb-5">
                        <strong className="text-dark">L</strong>orem ipsum dolor
                        sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                        Venenatis tellus in metus vulputate eu scelerisque
                        felis. Vel pretium lectus quam id leo in vitae turpis
                        massa. Nunc id cursus metus aliquam. Libero id faucibus
                        nisl tincidunt eget. Aliquam id diam maecenas ultricies
                        mi eget mauris. Volutpat ac tincidunt vitae semper quis
                        lectus. Vestibulum mattis ullamcorper velit sed. A arcu
                        cursus vitae congue mauris.
                      </p>
                      <p className="mb-2">
                        <strong className="text-dark">A</strong> arcu cursus
                        vitae congue mauris. Sagittis id consectetur purus ut.
                        Tellus rutrum tellus pellentesque eu tincidunt tortor
                        aliquam nulla. Diam in arcu cursus euismod quis. Eget
                        sit amet tellus cras adipiscing enim eu. In fermentum et
                        sollicitudin ac orci phasellus. A condimentum vitae
                        sapien pellentesque habitant morbi tristique senectus
                        et. In dictum non consectetur a erat. Nunc scelerisque
                        viverra mauris in aliquam sem fringilla.
                      </p>
                    </div>
                    <div className="tab-pane" id="product-tab-reviews">
                      <div className="row mb-4">
                        <div className="col-xl-4 col-lg-5 mb-4">
                          <div className="ratings-wrapper">
                            <div className="avg-rating-container">
                              <h4 className="avg-mark font-weight-bolder ls-50">
                                3.3
                              </h4>
                              <div className="avg-rating">
                                <p className="text-dark mb-1">Average Rating</p>
                                <div className="ratings-container">
                                  <div className="ratings-full">
                                    <span
                                      className="ratings"
                                      style={{ width: "60%" }}
                                    />
                                    <span className="tooltiptext tooltip-top" />
                                  </div>
                                  <Link to="#" className="rating-reviews">
                                    (3 Reviews)
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="ratings-value d-flex align-items-center text-dark ls-25">
                              <span className="text-dark font-weight-bold">
                                66.7%
                              </span>
                              Recommended<span className="count">(2 of 3)</span>
                            </div>
                            <div className="ratings-list">
                              <div className="ratings-container">
                                <div className="ratings-full">
                                  <span
                                    className="ratings"
                                    style={{ width: "100%" }}
                                  />
                                  <span className="tooltiptext tooltip-top" />
                                </div>
                                <div className="progress-bar progress-bar-sm">
                                  <span />
                                </div>
                                <div className="progress-value">
                                  <mark>70%</mark>
                                </div>
                              </div>
                              <div className="ratings-container">
                                <div className="ratings-full">
                                  <span
                                    className="ratings"
                                    style={{ width: "80%" }}
                                  />
                                  <span className="tooltiptext tooltip-top" />
                                </div>
                                <div className="progress-bar progress-bar-sm">
                                  <span />
                                </div>
                                <div className="progress-value">
                                  <mark>30%</mark>
                                </div>
                              </div>
                              <div className="ratings-container">
                                <div className="ratings-full">
                                  <span
                                    className="ratings"
                                    style={{ width: "60%" }}
                                  />
                                  <span className="tooltiptext tooltip-top" />
                                </div>
                                <div className="progress-bar progress-bar-sm">
                                  <span />
                                </div>
                                <div className="progress-value">
                                  <mark>40%</mark>
                                </div>
                              </div>
                              <div className="ratings-container">
                                <div className="ratings-full">
                                  <span
                                    className="ratings"
                                    style={{ width: "40%" }}
                                  />
                                  <span className="tooltiptext tooltip-top" />
                                </div>
                                <div className="progress-bar progress-bar-sm">
                                  <span />
                                </div>
                                <div className="progress-value">
                                  <mark>0%</mark>
                                </div>
                              </div>
                              <div className="ratings-container">
                                <div className="ratings-full">
                                  <span
                                    className="ratings"
                                    style={{ width: "20%" }}
                                  />
                                  <span className="tooltiptext tooltip-top" />
                                </div>
                                <div className="progress-bar progress-bar-sm">
                                  <span />
                                </div>
                                <div className="progress-value">
                                  <mark>0%</mark>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-8 col-lg-7 mb-4">
                          <div className="review-form-wrapper">
                            <h3 className="title tab-pane-title font-weight-bold mb-1">
                              Submit Your Review
                            </h3>
                            <p className="mb-3">
                              Your email address will not be published. Required
                              fields are marked *
                            </p>
                            <form
                              action="#"
                              method="POST"
                              className="review-form"
                            >
                              <div className="rating-form">
                                <label htmlFor="rating">
                                  Your Rating Of This Product :
                                </label>
                                <span className="rating-stars">
                                  <a className="star-1" href="#">
                                    1
                                  </a>
                                  <a className="star-2" href="#">
                                    2
                                  </a>
                                  <a className="star-3" href="#">
                                    3
                                  </a>
                                  <a className="star-4" href="#">
                                    4
                                  </a>
                                  <a className="star-5" href="#">
                                    5
                                  </a>
                                </span>
                                <select
                                  name="rating"
                                  id="rating"
                                  required=""
                                  style={{ display: "none" }}
                                >
                                  <option value="">Rate…</option>
                                  <option value={5}>Perfect</option>
                                  <option value={4}>Good</option>
                                  <option value={3}>Average</option>
                                  <option value={2}>Not that bad</option>
                                  <option value={1}>Very poor</option>
                                </select>
                              </div>
                              <textarea
                                cols={30}
                                rows={6}
                                placeholder="Write Your Review Here..."
                                className="form-control"
                                id="review"
                                defaultValue={""}
                              />
                              <div className="row gutter-md">
                                <div className="col-md-6">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Your Name"
                                    id="author"
                                  />
                                </div>
                                <div className="col-md-6">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Your Email"
                                    id="email_1"
                                  />
                                </div>
                              </div>
                              <div className="form-group">
                                <input
                                  type="checkbox"
                                  className="custom-checkbox"
                                  id="save-checkbox"
                                />
                                <label htmlFor="save-checkbox">
                                  Save my name, email, and website in this
                                  browser for the next time I comment.
                                </label>
                              </div>
                              <button type="submit" className="btn btn-dark">
                                Submit Review
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className="tab tab-nav-boxed tab-nav-outline tab-nav-center">
                        <ul className="nav nav-tabs" role="tablist">
                          <li className="nav-item">
                            <Link to="#show-all" className="nav-link active">
                              Show All
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link to="#helpful-positive" className="nav-link">
                              Most Helpful Positive
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link to="#helpful-negative" className="nav-link">
                              Most Helpful Negative
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link to="#highest-rating" className="nav-link">
                              Highest Rating
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link to="#lowest-rating" className="nav-link">
                              Lowest Rating
                            </Link>
                          </li>
                        </ul>
                        <div className="tab-content">
                          <div className="tab-pane active" id="show-all">
                            <ul className="comments list-style-none">
                              <li className="comment">
                                <div className="comment-body">
                                  <figure className="comment-avatar">
                                    <img
                                      src="../../../assets/images/agents/1-100x100.png"
                                      alt="Commenter Avatar"
                                      width={90}
                                      height={90}
                                    />
                                  </figure>
                                  <div className="comment-content">
                                    <h4 className="comment-author">
                                      <Link to="#">John Doe</Link>
                                      <span className="comment-date">
                                        March 22, 2021 at 1:54 pm
                                      </span>
                                    </h4>
                                    <div className="ratings-container comment-rating">
                                      <div className="ratings-full">
                                        <span
                                          className="ratings"
                                          style={{ width: "60%" }}
                                        />
                                        <span className="tooltiptext tooltip-top" />
                                      </div>
                                    </div>
                                    <p>
                                      pellentesque habitant morbi tristique
                                      senectus et. In dictum non consectetur a
                                      erat. Nunc ultrices eros in cursus turpis
                                      massa tincidunt ante in nibh mauris cursus
                                      mattis. Cras ornare arcu dui vivamus arcu
                                      felis bibendum ut tristique.
                                    </p>
                                    <div className="comment-action">
                                      <a
                                        href="#"
                                        className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                      >
                                        <i className="far fa-thumbs-up" />
                                        Helpful (1)
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                      >
                                        <i className="far fa-thumbs-down" />
                                        Unhelpful (0)
                                      </a>
                                      <div className="review-image">
                                        <Link to="#">
                                          <figure>
                                            <img
                                              src="../../../assets/images/products/default/review-img-1.jpg"
                                              width={60}
                                              height={60}
                                              alt="Attachment image of John Doe's review on Electronics Black Wrist Watch"
                                              data-zoom-image="../../../assets/images/products/default/review-img-1-800x900.jpg"
                                            />
                                          </figure>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="comment">
                                <div className="comment-body">
                                  <figure className="comment-avatar">
                                    <img
                                      src="../../../assets/images/agents/2-100x100.png"
                                      alt="Commenter Avatar"
                                      width={90}
                                      height={90}
                                    />
                                  </figure>
                                  <div className="comment-content">
                                    <h4 className="comment-author">
                                      <Link to="#">John Doe</Link>
                                      <span className="comment-date">
                                        March 22, 2021 at 1:52 pm
                                      </span>
                                    </h4>
                                    <div className="ratings-container comment-rating">
                                      <div className="ratings-full">
                                        <span
                                          className="ratings"
                                          style={{ width: "80%" }}
                                        />
                                        <span className="tooltiptext tooltip-top" />
                                      </div>
                                    </div>
                                    <p>
                                      Nullam a magna porttitor, dictum risus
                                      nec, faucibus sapien. Ultrices eros in
                                      cursus turpis massa tincidunt ante in nibh
                                      mauris cursus mattis. Cras ornare arcu dui
                                      vivamus arcu felis bibendum ut tristique.
                                    </p>
                                    <div className="comment-action">
                                      <a
                                        href="#"
                                        className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                      >
                                        <i className="far fa-thumbs-up" />
                                        Helpful (1)
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                      >
                                        <i className="far fa-thumbs-down" />
                                        Unhelpful (0)
                                      </a>
                                      <div className="review-image">
                                        <Link to="#">
                                          <figure>
                                            <img
                                              src="../../../assets/images/products/default/review-img-2.jpg"
                                              width={60}
                                              height={60}
                                              alt="Attachment image of John Doe's review on Electronics Black Wrist Watch"
                                              data-zoom-image="../../../assets/images/products/default/review-img-2.jpg"
                                            />
                                          </figure>
                                        </Link>
                                        <Link to="#">
                                          <figure>
                                            <img
                                              src="../../../assets/images/products/default/review-img-3.jpg"
                                              width={60}
                                              height={60}
                                              alt="Attachment image of John Doe's review on Electronics Black Wrist Watch"
                                              data-zoom-image="../../../assets/images/products/default/review-img-3.jpg"
                                            />
                                          </figure>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="comment">
                                <div className="comment-body">
                                  <figure className="comment-avatar">
                                    <img
                                      src="../../../assets/images/agents/3-100x100.png"
                                      alt="Commenter Avatar"
                                      width={90}
                                      height={90}
                                    />
                                  </figure>
                                  <div className="comment-content">
                                    <h4 className="comment-author">
                                      <Link to="#">John Doe</Link>
                                      <span className="comment-date">
                                        March 22, 2021 at 1:21 pm
                                      </span>
                                    </h4>
                                    <div className="ratings-container comment-rating">
                                      <div className="ratings-full">
                                        <span
                                          className="ratings"
                                          style={{ width: "60%" }}
                                        />
                                        <span className="tooltiptext tooltip-top" />
                                      </div>
                                    </div>
                                    <p>
                                      In fermentum et sollicitudin ac orci
                                      phasellus. A condimentum vitae sapien
                                      pellentesque habitant morbi tristique
                                      senectus et. In dictum non consectetur a
                                      erat. Nunc scelerisque viverra mauris in
                                      aliquam sem fringilla.
                                    </p>
                                    <div className="comment-action">
                                      <a
                                        href="#"
                                        className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                      >
                                        <i className="far fa-thumbs-up" />
                                        Helpful (0)
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                      >
                                        <i className="far fa-thumbs-down" />
                                        Unhelpful (1)
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="tab-pane" id="helpful-positive">
                            <ul className="comments list-style-none">
                              <li className="comment">
                                <div className="comment-body">
                                  <figure className="comment-avatar">
                                    <img
                                      src="../../../assets/images/agents/1-100x100.png"
                                      alt="Commenter Avatar"
                                      width={90}
                                      height={90}
                                    />
                                  </figure>
                                  <div className="comment-content">
                                    <h4 className="comment-author">
                                      <Link to="#">John Doe</Link>
                                      <span className="comment-date">
                                        March 22, 2021 at 1:54 pm
                                      </span>
                                    </h4>
                                    <div className="ratings-container comment-rating">
                                      <div className="ratings-full">
                                        <span
                                          className="ratings"
                                          style={{ width: "60%" }}
                                        />
                                        <span className="tooltiptext tooltip-top" />
                                      </div>
                                    </div>
                                    <p>
                                      pellentesque habitant morbi tristique
                                      senectus et. In dictum non consectetur a
                                      erat. Nunc ultrices eros in cursus turpis
                                      massa tincidunt ante in nibh mauris cursus
                                      mattis. Cras ornare arcu dui vivamus arcu
                                      felis bibendum ut tristique.
                                    </p>
                                    <div className="comment-action">
                                      <a
                                        href="#"
                                        className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                      >
                                        <i className="far fa-thumbs-up" />
                                        Helpful (1)
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                      >
                                        <i className="far fa-thumbs-down" />
                                        Unhelpful (0)
                                      </a>
                                      <div className="review-image">
                                        <Link to="#">
                                          <figure>
                                            <img
                                              src="../../../assets/images/products/default/review-img-1.jpg"
                                              width={60}
                                              height={60}
                                              alt="Attachment image of John Doe's review on Electronics Black Wrist Watch"
                                              data-zoom-image="../../../assets/images/products/default/review-img-1.jpg"
                                            />
                                          </figure>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="comment">
                                <div className="comment-body">
                                  <figure className="comment-avatar">
                                    <img
                                      src="../../../assets/images/agents/2-100x100.png"
                                      alt="Commenter Avatar"
                                      width={90}
                                      height={90}
                                    />
                                  </figure>
                                  <div className="comment-content">
                                    <h4 className="comment-author">
                                      <Link to="#">John Doe</Link>
                                      <span className="comment-date">
                                        March 22, 2021 at 1:52 pm
                                      </span>
                                    </h4>
                                    <div className="ratings-container comment-rating">
                                      <div className="ratings-full">
                                        <span
                                          className="ratings"
                                          style={{ width: "80%" }}
                                        />
                                        <span className="tooltiptext tooltip-top" />
                                      </div>
                                    </div>
                                    <p>
                                      Nullam a magna porttitor, dictum risus
                                      nec, faucibus sapien. Ultrices eros in
                                      cursus turpis massa tincidunt ante in nibh
                                      mauris cursus mattis. Cras ornare arcu dui
                                      vivamus arcu felis bibendum ut tristique.
                                    </p>
                                    <div className="comment-action">
                                      <a
                                        href="#"
                                        className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                      >
                                        <i className="far fa-thumbs-up" />
                                        Helpful (1)
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                      >
                                        <i className="far fa-thumbs-down" />
                                        Unhelpful (0)
                                      </a>
                                      <div className="review-image">
                                        <Link to="#">
                                          <figure>
                                            <img
                                              src="../../../assets/images/products/default/review-img-2.jpg"
                                              width={60}
                                              height={60}
                                              alt="Attachment image of John Doe's review on Electronics Black Wrist Watch"
                                              data-zoom-image="../../../assets/images/products/default/review-img-2-800x900.jpg"
                                            />
                                          </figure>
                                        </Link>
                                        <Link to="#">
                                          <figure>
                                            <img
                                              src="../../../assets/images/products/default/review-img-3.jpg"
                                              width={60}
                                              height={60}
                                              alt="Attachment image of John Doe's review on Electronics Black Wrist Watch"
                                              data-zoom-image="../../../assets/images/products/default/review-img-3-800x900.jpg"
                                            />
                                          </figure>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="tab-pane" id="helpful-negative">
                            <ul className="comments list-style-none">
                              <li className="comment">
                                <div className="comment-body">
                                  <figure className="comment-avatar">
                                    <img
                                      src="../../../assets/images/agents/3-100x100.png"
                                      alt="Commenter Avatar"
                                      width={90}
                                      height={90}
                                    />
                                  </figure>
                                  <div className="comment-content">
                                    <h4 className="comment-author">
                                      <Link to="#">John Doe</Link>
                                      <span className="comment-date">
                                        March 22, 2021 at 1:21 pm
                                      </span>
                                    </h4>
                                    <div className="ratings-container comment-rating">
                                      <div className="ratings-full">
                                        <span
                                          className="ratings"
                                          style={{ width: "60%" }}
                                        />
                                        <span className="tooltiptext tooltip-top" />
                                      </div>
                                    </div>
                                    <p>
                                      In fermentum et sollicitudin ac orci
                                      phasellus. A condimentum vitae sapien
                                      pellentesque habitant morbi tristique
                                      senectus et. In dictum non consectetur a
                                      erat. Nunc scelerisque viverra mauris in
                                      aliquam sem fringilla.
                                    </p>
                                    <div className="comment-action">
                                      <a
                                        href="#"
                                        className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                      >
                                        <i className="far fa-thumbs-up" />
                                        Helpful (0)
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                      >
                                        <i className="far fa-thumbs-down" />
                                        Unhelpful (1)
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="tab-pane" id="highest-rating">
                            <ul className="comments list-style-none">
                              <li className="comment">
                                <div className="comment-body">
                                  <figure className="comment-avatar">
                                    <img
                                      src="../../../assets/images/agents/2-100x100.png"
                                      alt="Commenter Avatar"
                                      width={90}
                                      height={90}
                                    />
                                  </figure>
                                  <div className="comment-content">
                                    <h4 className="comment-author">
                                      <Link to="#">John Doe</Link>
                                      <span className="comment-date">
                                        March 22, 2021 at 1:52 pm
                                      </span>
                                    </h4>
                                    <div className="ratings-container comment-rating">
                                      <div className="ratings-full">
                                        <span
                                          className="ratings"
                                          style={{ width: "80%" }}
                                        />
                                        <span className="tooltiptext tooltip-top" />
                                      </div>
                                    </div>
                                    <p>
                                      Nullam a magna porttitor, dictum risus
                                      nec, faucibus sapien. Ultrices eros in
                                      cursus turpis massa tincidunt ante in nibh
                                      mauris cursus mattis. Cras ornare arcu dui
                                      vivamus arcu felis bibendum ut tristique.
                                    </p>
                                    <div className="comment-action">
                                      <a
                                        href="#"
                                        className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                      >
                                        <i className="far fa-thumbs-up" />
                                        Helpful (1)
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                      >
                                        <i className="far fa-thumbs-down" />
                                        Unhelpful (0)
                                      </a>
                                      <div className="review-image">
                                        <Link to="#">
                                          <figure>
                                            <img
                                              src="../../../assets/images/products/default/review-img-2.jpg"
                                              width={60}
                                              height={60}
                                              alt="Attachment image of John Doe's review on Electronics Black Wrist Watch"
                                              data-zoom-image="../../../assets/images/products/default/review-img-2-800x900.jpg"
                                            />
                                          </figure>
                                        </Link>
                                        <Link to="#">
                                          <figure>
                                            <img
                                              src="../../../assets/images/products/default/review-img-3.jpg"
                                              width={60}
                                              height={60}
                                              alt="Attachment image of John Doe's review on Electronics Black Wrist Watch"
                                              data-zoom-image="../../../assets/images/products/default/review-img-3-800x900.jpg"
                                            />
                                          </figure>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="tab-pane" id="lowest-rating">
                            <ul className="comments list-style-none">
                              <li className="comment">
                                <div className="comment-body">
                                  <figure className="comment-avatar">
                                    <img
                                      src="../../../assets/images/agents/1-100x100.png"
                                      alt="Commenter Avatar"
                                      width={90}
                                      height={90}
                                    />
                                  </figure>
                                  <div className="comment-content">
                                    <h4 className="comment-author">
                                      <Link to="#">John Doe</Link>
                                      <span className="comment-date">
                                        March 22, 2021 at 1:54 pm
                                      </span>
                                    </h4>
                                    <div className="ratings-container comment-rating">
                                      <div className="ratings-full">
                                        <span
                                          className="ratings"
                                          style={{ width: "60%" }}
                                        />
                                        <span className="tooltiptext tooltip-top" />
                                      </div>
                                    </div>
                                    <p>
                                      pellentesque habitant morbi tristique
                                      senectus et. In dictum non consectetur a
                                      erat. Nunc ultrices eros in cursus turpis
                                      massa tincidunt ante in nibh mauris cursus
                                      mattis. Cras ornare arcu dui vivamus arcu
                                      felis bibendum ut tristique.
                                    </p>
                                    <div className="comment-action">
                                      <a
                                        href="#"
                                        className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                      >
                                        <i className="far fa-thumbs-up" />
                                        Helpful (1)
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                      >
                                        <i className="far fa-thumbs-down" />
                                        Unhelpful (0)
                                      </a>
                                      <div className="review-image">
                                        <Link to="#">
                                          <figure>
                                            <img
                                              src="../../../assets/images/products/default/review-img-3.jpg"
                                              width={60}
                                              height={60}
                                              alt="Attachment image of John Doe's review on Electronics Black Wrist Watch"
                                              data-zoom-image="../../../assets/images/products/default/review-img-3-800x900.jpg"
                                            />
                                          </figure>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  reletaed Product  */}
                <section className="related-product-section">
                  <div className="title-link-wrapper mb-4">
                    <h4 className="title">Related Products</h4>
                    <a
                      href="#"
                      className="btn btn-dark btn-link btn-slide-right btn-icon-right"
                    >
                      More Products
                      <i className="w-icon-long-arrow-right" />
                    </a>
                  </div>
                  <div className="swiper-container swiper-theme">
                    <div className="swiper-wrapper row cols-lg-3 cols-md-4 cols-sm-3 cols-2">
                      <div className="swiper-slide product">
                        <figure className="product-media">
                          <Link to="product-default.html">
                            <img
                              src={product1}
                              alt="Product"
                              width={300}
                              height={338}
                            />
                          </Link>
                          <div className="product-action-vertical">
                            <a
                              href="#"
                              className="btn-product-icon btn-cart w-icon-cart"
                              title="Add to cart"
                            />
                            <a
                              href="#"
                              className="btn-product-icon btn-wishlist w-icon-heart"
                              title="Add to wishlist"
                            />
                            <a
                              href="#"
                              className="btn-product-icon btn-compare w-icon-compare"
                              title="Add to Compare"
                            />
                          </div>
                          <div className="product-action">
                            <a
                              href="#"
                              className="btn-product btn-quickview"
                              title="Quick View"
                            >
                              Quick View
                            </a>
                          </div>
                        </figure>
                        <div className="product-details">
                          <h4 className="product-name">
                            <Link to="product-default.html">Drone</Link>
                          </h4>
                          <div className="ratings-container">
                            <div className="ratings-full">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            <a
                              href="product-default.html"
                              className="rating-reviews"
                            >
                              (3 reviews)
                            </a>
                          </div>
                          <div className="product-pa-wrapper">
                            <div className="product-price">$632.00</div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide product">
                        <figure className="product-media">
                          <Link to="product-default.html">
                            <img
                              src={product1}
                              alt="Product"
                              width={300}
                              height={338}
                            />
                          </Link>
                          <div className="product-action-vertical">
                            <a
                              href="#"
                              className="btn-product-icon btn-cart w-icon-cart"
                              title="Add to cart"
                            />
                            <a
                              href="#"
                              className="btn-product-icon btn-wishlist w-icon-heart"
                              title="Add to wishlist"
                            />
                            <a
                              href="#"
                              className="btn-product-icon btn-compare w-icon-compare"
                              title="Add to Compare"
                            />
                          </div>
                          <div className="product-action">
                            <a
                              href="#"
                              className="btn-product btn-quickview"
                              title="Quick View"
                            >
                              Quick View
                            </a>
                          </div>
                        </figure>
                        <div className="product-details">
                          <h4 className="product-name">
                            <Link to="product-default.html">
                              Official Camera
                            </Link>
                          </h4>
                          <div className="ratings-container">
                            <div className="ratings-full">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            <a
                              href="product-default.html"
                              className="rating-reviews"
                            >
                              (3 reviews)
                            </a>
                          </div>
                          <div className="product-pa-wrapper">
                            <div className="product-price">
                              <ins className="new-price">$263.00</ins>
                              <del className="old-price">$300.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide product">
                        <figure className="product-media">
                          <Link to="product-default.html">
                            <img
                              src={product1}
                              alt="Product"
                              width={300}
                              height={338}
                            />
                          </Link>
                          <div className="product-action-vertical">
                            <a
                              href="#"
                              className="btn-product-icon btn-cart w-icon-cart"
                              title="Add to cart"
                            />
                            <a
                              href="#"
                              className="btn-product-icon btn-wishlist w-icon-heart"
                              title="Add to wishlist"
                            />
                            <a
                              href="#"
                              className="btn-product-icon btn-compare w-icon-compare"
                              title="Add to Compare"
                            />
                          </div>
                          <div className="product-action">
                            <a
                              href="#"
                              className="btn-product btn-quickview"
                              title="Quick View"
                            >
                              Quick View
                            </a>
                          </div>
                        </figure>
                        <div className="product-details">
                          <h4 className="product-name">
                            <Link to="product-default.html">
                              Official Camera
                            </Link>
                          </h4>
                          <div className="ratings-container">
                            <div className="ratings-full">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            <a
                              href="product-default.html"
                              className="rating-reviews"
                            >
                              (3 reviews)
                            </a>
                          </div>
                          <div className="product-pa-wrapper">
                            <div className="product-price">
                              <ins className="new-price">$263.00</ins>
                              <del className="old-price">$300.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              {/* End of Main Content */}
              <aside className="sidebar product-sidebar sidebar-fixed right-sidebar sticky-sidebar-wrapper">
                <div className="sidebar-overlay" />
                <a className="sidebar-close" href="#">
                  <i className="close-icon" />
                </a>
                <Link to="#" className="sidebar-toggle d-flex d-lg-none">
                  <i className="fas fa-chevron-left" />
                </Link>
                <div className="sidebar-content scrollable">
                  <div className="sticky-sidebar">
                    <div className="widget widget-icon-box mb-6">
                      <div className="icon-box icon-box-side">
                        <span className="icon-box-icon text-dark">
                          <i className="w-icon-truck" />
                        </span>
                        <div className="icon-box-content">
                          <h4 className="icon-box-title">
                            Free Shipping &amp; Returns
                          </h4>
                          <p>For all orders over $99</p>
                        </div>
                      </div>
                      <div className="icon-box icon-box-side">
                        <span className="icon-box-icon text-dark">
                          <i className="w-icon-bag" />
                        </span>
                        <div className="icon-box-content">
                          <h4 className="icon-box-title">Secure Payment</h4>
                          <p>We ensure secure payment</p>
                        </div>
                      </div>
                      <div className="icon-box icon-box-side">
                        <span className="icon-box-icon text-dark">
                          <i className="w-icon-money" />
                        </span>
                        <div className="icon-box-content">
                          <h4 className="icon-box-title">
                            Money Back Guarantee
                          </h4>
                          <p>Any back within 30 days</p>
                        </div>
                      </div>
                    </div>
                    {/* End of Widget Icon Box */}
                    <div className="widget widget-banner mb-9">
                      <div className="banner banner-fixed br-sm">
                        <figure>
                          <img
                            src="../../../assets/images/shop/banner3.jpg"
                            alt="Banner"
                            width={266}
                            height={220}
                            style={{ backgroundColor: "#1d2d44" }}
                          />
                        </figure>
                        <div className="banner-content">
                          <div className="banner-price-info font-weight-bolder text-white lh-1 ls-25">
                            40<sup className="font-weight-bold">%</sup>
                            <sub className="font-weight-bold text-uppercase ls-25">
                              Off
                            </sub>
                          </div>
                          <h4 className="banner-subtitle text-white font-weight-bolder text-uppercase mb-0">
                            Ultimate Sale
                          </h4>
                        </div>
                      </div>
                    </div>
                    {/* End of Widget Banner */}
                    <div className="widget widget-products">
                      <div className="title-link-wrapper mb-2">
                        <h4 className="title title-link font-weight-bold">
                          Tranding Products
                        </h4>
                      </div>
                      <div className="swiper nav-top">
                        <div className="swiper-container swiper-theme nav-top">
                          <div className="swiper-wrapper">
                            <div className="widget-col swiper-slide">
                              <div className="product product-widget">
                                <figure className="product-media">
                                  <Link to="#">
                                    <img
                                      src={product1}
                                      alt="Product"
                                      width={100}
                                      height={113}
                                    />
                                  </Link>
                                </figure>
                                <div className="product-details">
                                  <h4 className="product-name">
                                    <Link to="#">Smart Watch</Link>
                                  </h4>
                                  <div className="ratings-container">
                                    <div className="ratings-full">
                                      <span
                                        className="ratings"
                                        style={{ width: "100%" }}
                                      />
                                      <span className="tooltiptext tooltip-top" />
                                    </div>
                                  </div>
                                  <div className="product-price">
                                    $80.00 - $90.00
                                  </div>
                                </div>
                              </div>
                              <div className="product product-widget">
                                <figure className="product-media">
                                  <Link to="#">
                                    <img
                                      src={product2}
                                      alt="Product"
                                      width={100}
                                      height={113}
                                    />
                                  </Link>
                                </figure>
                                <div className="product-details">
                                  <h4 className="product-name">
                                    <Link to="#">Smart Watch</Link>
                                  </h4>
                                  <div className="ratings-container">
                                    <div className="ratings-full">
                                      <span
                                        className="ratings"
                                        style={{ width: "100%" }}
                                      />
                                      <span className="tooltiptext tooltip-top" />
                                    </div>
                                  </div>
                                  <div className="product-price">
                                    $80.00 - $90.00
                                  </div>
                                </div>
                              </div>
                              <div className="product product-widget">
                                <figure className="product-media">
                                  <Link to="#">
                                    <img
                                      src={product3}
                                      alt="Product"
                                      width={100}
                                      height={113}
                                    />
                                  </Link>
                                </figure>
                                <div className="product-details">
                                  <h4 className="product-name">
                                    <Link to="#">Smart Watch</Link>
                                  </h4>
                                  <div className="ratings-container">
                                    <div className="ratings-full">
                                      <span
                                        className="ratings"
                                        style={{ width: "100%" }}
                                      />
                                      <span className="tooltiptext tooltip-top" />
                                    </div>
                                  </div>
                                  <div className="product-price">
                                    $80.00 - $90.00
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="widget-col swiper-slide">
                              <div className="product product-widget">
                                <figure className="product-media">
                                  <Link to="#">
                                    <img
                                      src="../../../assets/images/shop/16.jpg"
                                      alt="Product"
                                      width={100}
                                      height={113}
                                    />
                                  </Link>
                                </figure>
                                <div className="product-details">
                                  <h4 className="product-name">
                                    <Link to="#">Skate Pan</Link>
                                  </h4>
                                  <div className="ratings-container">
                                    <div className="ratings-full">
                                      <span
                                        className="ratings"
                                        style={{ width: "100%" }}
                                      />
                                      <span className="tooltiptext tooltip-top" />
                                    </div>
                                  </div>
                                  <div className="product-price">$278.00</div>
                                </div>
                              </div>
                              <div className="product product-widget">
                                <figure className="product-media">
                                  <Link to="#">
                                    <img
                                      src="../../../assets/images/shop/17.jpg"
                                      alt="Product"
                                      width={100}
                                      height={113}
                                    />
                                  </Link>
                                </figure>
                                <div className="product-details">
                                  <h4 className="product-name">
                                    <Link to="#">Modern Cooker</Link>
                                  </h4>
                                  <div className="ratings-container">
                                    <div className="ratings-full">
                                      <span
                                        className="ratings"
                                        style={{ width: "80%" }}
                                      />
                                      <span className="tooltiptext tooltip-top" />
                                    </div>
                                  </div>
                                  <div className="product-price">$324.00</div>
                                </div>
                              </div>
                              <div className="product product-widget">
                                <figure className="product-media">
                                  <Link to="#">
                                    <img
                                      src="../../../assets/images/shop/18.jpg"
                                      alt="Product"
                                      width={100}
                                      height={113}
                                    />
                                  </Link>
                                </figure>
                                <div className="product-details">
                                  <h4 className="product-name">
                                    <Link to="#">CT Machine</Link>
                                  </h4>
                                  <div className="ratings-container">
                                    <div className="ratings-full">
                                      <span
                                        className="ratings"
                                        style={{ width: "100%" }}
                                      />
                                      <span className="tooltiptext tooltip-top" />
                                    </div>
                                  </div>
                                  <div className="product-price">$236.00</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button className="swiper-button-next" />
                          <button className="swiper-button-prev" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
              {/* End of Sidebar */}
            </div>
          </div>
        </div>
        {/* End of Page Content */}
      </main>
    </>
  );
};

export default SingleProduct;
