import logo from "../../assets/images/logo.png";
import flagEng from "../../assets/images/flags/eng.png";
import flagFra from "../../assets/images/flags/fra.png";
import { Link, useLocation } from "react-router-dom";

const HeaderSection = () => {
  const location = useLocation();

  return (
    <>
      {" "}
      {/* <!-- Start of Header --> */}
      <header className="header">
        <div className="header-top">
          <div className="container">
            <div className="header-left">
              <p className="welcome-msg">
                Welcome to Wolmart Store message or remove it!
              </p>
            </div>
            <div className="header-right">
              <div className="dropdown">
                <Link to="#currency">USD</Link>
                <div className="dropdown-box">
                  <Link to="#USD">USD</Link>
                  <Link to="#EUR">EUR</Link>
                </div>
              </div>
              {/* End of DropDown Menu */}
              <div className="dropdown">
                <Link to="#language">
                  <img
                    src={flagEng}
                    alt="ENG Flag"
                    width={14}
                    height={8}
                    className="dropdown-image"
                  />
                  ENG
                </Link>
                <div className="dropdown-box">
                  <Link to="#ENG">
                    <img
                      src={flagEng}
                      alt="ENG Flag"
                      width={14}
                      height={8}
                      className="dropdown-image"
                    />
                    ENG
                  </Link>
                  <Link to="#FRA">
                    <img
                      src={flagFra}
                      alt="FRA Flag"
                      width={14}
                      height={8}
                      className="dropdown-image"
                    />
                    FRA
                  </Link>
                </div>
              </div>
              {/* End of Dropdown Menu */}
              <span className="divider d-lg-show" />
              <Link to="blog" className="d-lg-show">
                Blog
              </Link>
              <Link to="contact-us" className="d-lg-show">
                Contact Us
              </Link>
              <Link to="account" className="d-lg-show">
                My Account
              </Link>
              <Link href="login" className="d-lg-show login sign-in">
                <i className="w-icon-account" />
                Sign In
              </Link>
              <span className="delimiter d-lg-show">/</span>
              <Link to="/login" className="ml-0 d-lg-show login register">
                Register
              </Link>
            </div>
          </div>
        </div>
        {/* End of Header Top */}
        <div className="header-middle">
          <div className="container">
            <div className="header-left mr-md-4">
              <a
                href="#"
                className="mobile-menu-toggle w-icon-hamburger"
                aria-label="menu-toggle"
              ></a>
              <Link to="/" className="logo ml-lg-0">
                <img src={logo} alt="logo" width={144} height={45} />
              </Link>
              <form
                method="get"
                action="#"
                className="header-search hs-expanded hs-round d-none d-md-flex input-wrapper"
              >
                <div className="select-box">
                  <select id="category" name="category">
                    <option value="">All Categories</option>
                    <option value={4}>Fashion</option>
                    <option value={5}>Furniture</option>
                    <option value={6}>Shoes</option>
                    <option value={7}>Sports</option>
                    <option value={8}>Games</option>
                    <option value={9}>Computers</option>
                    <option value={10}>Electronics</option>
                    <option value={11}>Kitchen</option>
                    <option value={12}>Clothing</option>
                  </select>
                </div>
                <input
                  type="text"
                  className="form-control"
                  name="search"
                  id="search"
                  placeholder="Search in..."
                  required=""
                />
                <button className="btn btn-search" type="submit">
                  <i className="w-icon-search" />
                </button>
              </form>
            </div>
            <div className="header-right ml-4">
              <div className="header-call d-xs-show d-lg-flex align-items-center">
                <Link to="tel:#" className="w-icon-call" />
                <div className="call-info d-lg-show">
                  <h4 className="chat font-weight-normal font-size-md text-normal ls-normal text-light mb-0">
                    <Link to="mailto:#" className="text-capitalize">
                      Live Chat
                    </Link>{" "}
                    or :
                  </h4>
                  <a
                    href="tel:#"
                    className="phone-number font-weight-bolder ls-50"
                  >
                    0(800)123-456
                  </a>
                </div>
              </div>
              <Link
                className="wishlist label-down link d-xs-show"
                to="wishlist"
              >
                <i className="w-icon-heart" />
                <span className="wishlist-label d-lg-show">Wishlist</span>
              </Link>
              <Link className="compare label-down link d-xs-show" to="compare">
                <i className="w-icon-compare" />
                <span className="compare-label d-lg-show">Compare</span>
              </Link>
              <div className="dropdown cart-dropdown cart-offcanvas mr-0 mr-lg-2">
                <div className="cart-overlay" />
                <Link to="/cart" className="cart-toggle label-down link">
                  <i className="w-icon-cart">
                    <span className="cart-count">2</span>
                  </i>
                  <span className="cart-label">Cart</span>
                </Link>
                <div className="dropdown-box">
                  <div className="cart-header">
                    <span>Shopping Cart</span>
                    <Link to="#" className="btn-close">
                      Close
                      <i className="w-icon-long-arrow-right" />
                    </Link>
                  </div>
                  <div className="products">
                    <div className="product product-cart">
                      <div className="product-detail">
                        <Link to="product-default" className="product-name">
                          Beige knitted elas
                          <br />
                          tic runner shoes
                        </Link>
                        <div className="price-box">
                          <span className="product-quantity">1</span>
                          <span className="product-price">$25.68</span>
                        </div>
                      </div>
                      <figure className="product-media">
                        <Link to="product-default">
                          <img
                            src="assets/images/cart/product-1.jpg"
                            alt="product"
                            height={84}
                            width={94}
                          />
                        </Link>
                      </figure>
                      <button
                        className="btn btn-link btn-close"
                        aria-label="button"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                    <div className="product product-cart">
                      <div className="product-detail">
                        <Link to="product-default" className="product-name">
                          Blue utility pina
                          <br />
                          fore denim dress
                        </Link>
                        <div className="price-box">
                          <span className="product-quantity">1</span>
                          <span className="product-price">$32.99</span>
                        </div>
                      </div>
                      <figure className="product-media">
                        <Link to="product-default">
                          <img
                            src="assets/images/cart/product-2.jpg"
                            alt="product"
                            width={84}
                            height={94}
                          />
                        </Link>
                      </figure>
                      <button
                        className="btn btn-link btn-close"
                        aria-label="button"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                  <div className="cart-total">
                    <label>Subtotal:</label>
                    <span className="price">$58.67</span>
                  </div>
                  <div className="cart-action">
                    <a
                      href="cart"
                      className="btn btn-dark btn-outline btn-rounded"
                    >
                      View Cart
                    </a>
                    <a href="checkout" className="btn btn-primary btn-rounded">
                      Checkout
                    </a>
                  </div>
                </div>
                {/* End of Dropdown Box */}
              </div>
            </div>
          </div>
        </div>
        {/* End of Header Middle */}

        <div className="header-bottom sticky-content fix-top sticky-header has-dropdown">
          <div className="container">
            <div className="inner-wrap">
              <div className="header-left">
                <div
                  className="dropdown category-dropdown has-border"
                  data-visible="true"
                >
                  <a
                    href="#"
                    className="category-toggle text-dark"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                    data-display="static"
                    title="Browse Categories"
                  >
                    <i className="w-icon-category" />
                    <span>Browse Categories</span>
                  </a>
                  {/* <div className="dropdown-box">
                    <ul className="menu vertical-menu category-menu">
                      <li>
                        <Link to="shop-fullwidth-banner">
                          <i className="w-icon-tshirt2" />
                          Fashion
                        </Link>
                        <ul className="megamenu">
                          <li>
                            <h4 className="menu-title">Women</h4>
                            <hr className="divider" />
                            <ul>
                              <li>
                                <Link to="shop-fullwidth-banner">
                                  New Arrivals
                                </Link>
                              </li>
                              <li>
                                <Link to="shop-fullwidth-banner">
                                  Best Sellers
                                </Link>
                              </li>
                              <li>
                                <Link to="shop-fullwidth-banner">
                                  Trending
                                </Link>
                              </li>
                              <li>
                                <Link to="shop-fullwidth-banner">
                                  Clothing
                                </Link>
                              </li>
                              <li>
                                <Link to="shop-fullwidth-banner">Shoes</Link>
                              </li>
                              <li>
                                <Link to="shop-fullwidth-banner">Bags</Link>
                              </li>
                              <li>
                                <Link to="shop-fullwidth-banner">
                                  Accessories
                                </Link>
                              </li>
                              <li>
                                <Link to="shop-fullwidth-banner">
                                  Jewlery &amp; Watches
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <h4 className="menu-title">Men</h4>
                            <hr className="divider" />
                            <ul>
                              <li>
                                <Link to="shop-fullwidth-banner">
                                  New Arrivals
                                </Link>
                              </li>
                              <li>
                                <Link to="shop-fullwidth-banner">
                                  Best Sellers
                                </Link>
                              </li>
                              <li>
                                <Link to="shop-fullwidth-banner">
                                  Trending
                                </Link>
                              </li>
                              <li>
                                <Link to="shop-fullwidth-banner">
                                  Clothing
                                </Link>
                              </li>
                              <li>
                                <Link to="shop-fullwidth-banner">Shoes</Link>
                              </li>
                              <li>
                                <Link to="shop-fullwidth-banner">Bags</Link>
                              </li>
                              <li>
                                <Link to="shop-fullwidth-banner">
                                  Accessories
                                </Link>
                              </li>
                              <li>
                                <Link to="shop-fullwidth-banner">
                                  Jewlery &amp; Watches
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <div className="banner-fixed menu-banner menu-banner2">
                              <figure>
                                <img
                                  src="assets/images/menu/banner-2.jpg"
                                  alt="Menu Banner"
                                  width={235}
                                  height={347}
                                />
                              </figure>
                              <div className="banner-content">
                                <div className="banner-price-info mb-1 ls-normal">
                                  Get up to
                                  <strong className="text-primary text-uppercase">
                                    20%Off
                                  </strong>
                                </div>
                                <h3 className="banner-title ls-normal">
                                  Hot Sales
                                </h3>
                                <a
                                  href="shop-banner-sidebar"
                                  className="btn btn-dark btn-sm btn-link btn-slide-right btn-icon-right"
                                >
                                  Shop Now
                                  <i className="w-icon-long-arrow-right" />
                                </a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="shop-fullwidth-banner">
                          <i className="w-icon-home" />
                          Home &amp; Garden
                        </Link>
                        <ul className="megamenu">
                          <li>
                            <h4 className="menu-title">Bedroom</h4>
                            <hr className="divider" />
                            <ul>
                              <li>
                                <Link to="shop-fullwidth-banner">
                                  Beds, Frames &amp; Bases
                                </Link>
                              </li>
                              <li>
                                <Link to="shop-fullwidth-banner">
                                  Dressers
                                </Link>
                              </li>
                              <li>
                                <Link to="shop-fullwidth-banner">
                                  Nightstands
                                </Link>
                              </li>
                              <li>
                                <Link to="shop-fullwidth-banner">
                                  Kids Beds &amp; Headboards
                                </Link>
                              </li>
                              <li>
                                <Link to="shop-fullwidth-banner">
                                  Armoires
                                </Link>
                              </li>
                            </ul>
                            <h4 className="menu-title mt-1">Living Room</h4>
                            <hr className="divider" />
                            <ul>
                              <li>
                                <Link to="shop-fullwidth-banner">
                                  Coffee Tables
                                </Link>
                              </li>
                              <li>
                                <Link to="shop-fullwidth-banner">Chairs</Link>
                              </li>
                              <li>
                                <Link to="shop-fullwidth-banner">Tables</Link>
                              </li>
                              <li>
                                <Link to="shop-fullwidth-banner">
                                  Futons &amp; Sofa Beds
                                </Link>
                              </li>
                              <li>
                                <Link to="shop-fullwidth-banner">
                                  Cabinets &amp; Chests
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <h4 className="menu-title">Office</h4>
                            <hr className="divider" />
                            <ul>
                              <li>
                                <Link to="shop-fullwidth-banner">
                                  Office Chairs
                                </Link>
                              </li>
                              <li>
                                <Link to="shop-fullwidth-banner">Desks</Link>
                              </li>
                              <li>
                                <Link to="shop-fullwidth-banner">
                                  Bookcases
                                </Link>
                              </li>
                              <li>
                                <Link to="shop-fullwidth-banner">
                                  File Cabinets
                                </Link>
                              </li>
                              <li>
                                <Link to="shop-fullwidth-banner">
                                  Breakroom Tables
                                </Link>
                              </li>
                            </ul>
                            <h4 className="menu-title mt-1">
                              Kitchen &amp; Dining
                            </h4>
                            <hr className="divider" />
                            <ul>
                              <li>
                                <Link to="shop-fullwidth-banner">
                                  Dining Sets
                                </Link>
                              </li>
                              <li>
                                <Link to="shop-fullwidth-banner">
                                  Kitchen Storage Cabinets
                                </Link>
                              </li>
                              <li>
                                <Link to="shop-fullwidth-banner">
                                  Bashers Racks
                                </Link>
                              </li>
                              <li>
                                <Link to="shop-fullwidth-banner">
                                  Dining Chairs
                                </Link>
                              </li>
                              <li>
                                <Link to="shop-fullwidth-banner">
                                  Dining Room Tables
                                </Link>
                              </li>
                              <li>
                                <Link to="shop-fullwidth-banner">
                                  Bar Stools
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <div className="menu-banner banner-fixed menu-banner3">
                              <figure>
                                <img
                                  src="assets/images/menu/banner-3.jpg"
                                  alt="Menu Banner"
                                  width={235}
                                  height={461}
                                />
                              </figure>
                              <div className="banner-content">
                                <h4 className="banner-subtitle font-weight-normal text-white mb-1">
                                  Restroom
                                </h4>
                                <h3 className="banner-title font-weight-bolder text-white ls-normal">
                                  Furniture Sale
                                </h3>
                                <div className="banner-price-info text-white font-weight-normal ls-25">
                                  Up to
                                  <span className="text-secondary text-uppercase font-weight-bold">
                                    25% Off
                                  </span>
                                </div>
                                <a
                                  href="shop-banner-sidebar"
                                  className="btn btn-white btn-link btn-sm btn-slide-right btn-icon-right"
                                >
                                  Shop Now
                                  <i className="w-icon-long-arrow-right" />
                                </a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="shop-fullwidth-banner">
                          <i className="w-icon-electronics" />
                          Electronics
                        </Link>
                        <ul className="megamenu">
                          <li>
                            <h4 className="menu-title">
                              Laptops &amp; Computers
                            </h4>
                            <hr className="divider" />
                            <ul>
                              <li>
                                <Link to="shop-fullwidth-banner">
                                  Desktop Computers
                                </Link>
                              </li>
                              <li>
                                <Link to="shop-fullwidth-banner">
                                  Monitors
                                </Link>
                              </li>
                              <li>
                                <Link to="shop-fullwidth-banner">Laptops</Link>
                              </li>
                              <li>
                                <Link to="shop-fullwidth-banner">
                                  Hard Drives &amp; Storage
                                </Link>
                              </li>
                              <li>
                                <Link to="shop-fullwidth-banner">
                                  Computer Accessories
                                </Link>
                              </li>
                            </ul>
                            <h4 className="menu-title mt-1">TV &amp; Video</h4>
                            <hr className="divider" />
                            <ul>
                              <li>
                                <Link to="shop-fullwidth-banner">TVs</Link>
                              </li>
                              <li>
                                <Link to="shop-fullwidth-banner">
                                  Home Audio Speakers
                                </Link>
                              </li>
                              <li>
                                <Link to="shop-fullwidth-banner">
                                  Projectors
                                </Link>
                              </li>
                              <li>
                                <Link to="shop-fullwidth-banner">
                                  Media Streaming Devices
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <h4 className="menu-title">Digital Cameras</h4>
                            <hr className="divider" />
                            <ul>
                              <li>
                                <Link to="shop-fullwidth-banner">
                                  Digital SLR Cameras
                                </Link>
                              </li>
                              <li>
                                <Link to="shop-fullwidth-banner">
                                  Sports &amp; Action Cameras
                                </Link>
                              </li>
                              <li>
                                <Link to="shop-fullwidth-banner">
                                  Camera Lenses
                                </Link>
                              </li>
                              <li>
                                <Link to="shop-fullwidth-banner">
                                  Photo Printer
                                </Link>
                              </li>
                              <li>
                                <Link to="shop-fullwidth-banner">
                                  Digital Memory Cards
                                </Link>
                              </li>
                            </ul>
                            <h4 className="menu-title mt-1">Cell Phones</h4>
                            <hr className="divider" />
                            <ul>
                              <li>
                                <Link to="shop-fullwidth-banner">
                                  Carrier Phones
                                </Link>
                              </li>
                              <li>
                                <Link to="shop-fullwidth-banner">
                                  Unlocked Phones
                                </Link>
                              </li>
                              <li>
                                <Link to="shop-fullwidth-banner">
                                  Phone &amp; Cellphone Cases
                                </Link>
                              </li>
                              <li>
                                <Link to="shop-fullwidth-banner">
                                  Cellphone Chargers
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <div className="menu-banner banner-fixed menu-banner4">
                              <figure>
                                <img
                                  src="assets/images/menu/banner-4.jpg"
                                  alt="Menu Banner"
                                  width={235}
                                  height={433}
                                />
                              </figure>
                              <div className="banner-content">
                                <h4 className="banner-subtitle font-weight-normal">
                                  Deals Of The Week
                                </h4>
                                <h3 className="banner-title text-white">
                                  Save On Smart EarPhone
                                </h3>
                                <div className="banner-price-info text-secondary font-weight-bolder text-uppercase text-secondary">
                                  20% Off
                                </div>
                                <a
                                  href="shop-banner-sidebar"
                                  className="btn btn-white btn-outline btn-sm btn-rounded"
                                >
                                  Shop Now
                                </a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="shop-fullwidth-banner">
                          <i className="w-icon-furniture" />
                          Furniture
                        </Link>
                        <ul className="megamenu type2">
                          <li className="row">
                            <div className="col-md-3 col-lg-3 col-6">
                              <h4 className="menu-title">Furniture</h4>
                              <hr className="divider" />
                              <ul>
                                <li>
                                  <Link to="shop-fullwidth-banner">
                                    Sofas &amp; Couches
                                  </Link>
                                </li>
                                <li>
                                  <Link to="shop-fullwidth-banner">
                                    Armchairs
                                  </Link>
                                </li>
                                <li>
                                  <Link to="shop-fullwidth-banner">
                                    Bed Frames
                                  </Link>
                                </li>
                                <li>
                                  <Link to="shop-fullwidth-banner">
                                    Beside Tables
                                  </Link>
                                </li>
                                <li>
                                  <Link to="shop-fullwidth-banner">
                                    Dressing Tables
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-md-3 col-lg-3 col-6">
                              <h4 className="menu-title">Lighting</h4>
                              <hr className="divider" />
                              <ul>
                                <li>
                                  <Link to="shop-fullwidth-banner">
                                    Light Bulbs
                                  </Link>
                                </li>
                                <li>
                                  <Link to="shop-fullwidth-banner">Lamps</Link>
                                </li>
                                <li>
                                  <Link to="shop-fullwidth-banner">
                                    Celling Lights
                                  </Link>
                                </li>
                                <li>
                                  <Link to="shop-fullwidth-banner">
                                    Wall Lights
                                  </Link>
                                </li>
                                <li>
                                  <Link to="shop-fullwidth-banner">
                                    Bathroom Lighting
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-md-3 col-lg-3 col-6">
                              <h4 className="menu-title">Home Accessories</h4>
                              <hr className="divider" />
                              <ul>
                                <li>
                                  <Link to="shop-fullwidth-banner">
                                    Decorative Accessories
                                  </Link>
                                </li>
                                <li>
                                  <Link to="shop-fullwidth-banner">
                                    Candals &amp; Holders
                                  </Link>
                                </li>
                                <li>
                                  <Link to="shop-fullwidth-banner">
                                    Home Fragrance
                                  </Link>
                                </li>
                                <li>
                                  <Link to="shop-fullwidth-banner">
                                    Mirrors
                                  </Link>
                                </li>
                                <li>
                                  <Link to="shop-fullwidth-banner">
                                    Clocks
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-md-3 col-lg-3 col-6">
                              <h4 className="menu-title">
                                Garden &amp; Outdoors
                              </h4>
                              <hr className="divider" />
                              <ul>
                                <li>
                                  <Link to="shop-fullwidth-banner">
                                    Garden Furniture
                                  </Link>
                                </li>
                                <li>
                                  <Link to="shop-fullwidth-banner">
                                    Lawn Mowers
                                  </Link>
                                </li>
                                <li>
                                  <Link to="shop-fullwidth-banner">
                                    Pressure Washers
                                  </Link>
                                </li>
                                <li>
                                  <Link to="shop-fullwidth-banner">
                                    All Garden Tools
                                  </Link>
                                </li>
                                <li>
                                  <Link to="shop-fullwidth-banner">
                                    Outdoor Dining
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="row">
                            <div className="col-6">
                              <div className="banner banner-fixed menu-banner5 br-xs">
                                <figure>
                                  <img
                                    src="assets/images/menu/banner-5.jpg"
                                    alt="Banner"
                                    width={410}
                                    height={123}
                                    style={{ backgroundColor: "#d2d2d2" }}
                                  />
                                </figure>
                                <div className="banner-content text-right y-50">
                                  <h4 className="banner-subtitle font-weight-normal text-default text-capitalize">
                                    New Arrivals
                                  </h4>
                                  <h3 className="banner-title font-weight-bolder text-capitalize ls-normal">
                                    Amazing Sofa
                                  </h3>
                                  <div className="banner-price-info font-weight-normal ls-normal">
                                    Starting at <strong>$125.00</strong>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="banner banner-fixed menu-banner5 br-xs">
                                <figure>
                                  <img
                                    src="assets/images/menu/banner-6.jpg"
                                    alt="Banner"
                                    width={410}
                                    height={123}
                                    style={{ backgroundColor: "#9f9888" }}
                                  />
                                </figure>
                                <div className="banner-content y-50">
                                  <h4 className="banner-subtitle font-weight-normal text-white text-capitalize">
                                    Best Seller
                                  </h4>
                                  <h3 className="banner-title font-weight-bolder text-capitalize text-white ls-normal">
                                    Chair &amp; Lamp
                                  </h3>
                                  <div className="banner-price-info font-weight-normal ls-normal text-white">
                                    From <strong>$165.00</strong>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="shop-fullwidth-banner">
                          <i className="w-icon-heartbeat" />
                          Healthy &amp; Beauty
                        </Link>
                      </li>
                      <li>
                        <Link to="shop-fullwidth-banner">
                          <i className="w-icon-gift" />
                          Gift Ideas
                        </Link>
                      </li>
                      <li>
                        <Link to="shop-fullwidth-banner">
                          <i className="w-icon-gamepad" />
                          Toy &amp; Games
                        </Link>
                      </li>
                      <li>
                        <Link to="shop-fullwidth-banner">
                          <i className="w-icon-ice-cream" />
                          Cooking
                        </Link>
                      </li>
                      <li>
                        <Link to="shop-fullwidth-banner">
                          <i className="w-icon-ios" />
                          Smart Phones
                        </Link>
                      </li>
                      <li>
                        <Link to="shop-fullwidth-banner">
                          <i className="w-icon-camera" />
                          Cameras &amp; Photo
                        </Link>
                      </li>
                      <li>
                        <Link to="shop-fullwidth-banner">
                          <i className="w-icon-ruby" />
                          Accessories
                        </Link>
                      </li>
                      <li>
                        <a
                          href="shop-banner-sidebar"
                          className="font-weight-bold text-primary text-uppercase ls-25"
                        >
                          View All Categories
                          <i className="w-icon-angle-right" />
                        </a>
                      </li>
                    </ul>
                  </div> */}
                </div>
                <nav className="main-nav">
                  <ul className="menu active-underline">
                    <li className={location.pathname === "/" ? "active" : ""}>
                      <Link to="/">Home</Link>
                    </li>
                    <li
                      className={location.pathname === "/shop" ? "active" : ""}
                    >
                      <Link to="shop">Shop</Link>
                    </li>

                    <li
                      className={location.pathname === "/blog" ? "active" : ""}
                    >
                      <Link to="blog">Blog</Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/checkout" ? "active" : ""
                      }
                    >
                      <Link to="checkout">checkout</Link>
                    </li>
                    <li
                      className={location.pathname === "/cart" ? "active" : ""}
                    >
                      <Link to="cart">Cart</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header-right">
                <Link to="tracking-order" className="d-xl-show">
                  <i className="w-icon-map-marker mr-1" />
                  Track Order
                </Link>
                <Link to="#">
                  <i className="w-icon-sale" />
                  Daily Deals
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* End Of Bottom Header */}
      </header>
      {/* <!-- End of Header --> */}
    </>
  );
};

export default HeaderSection;
