import bannerimg1 from "../../assets/images/shop/banner1.jpg";

const ShopBanner = () => {
  return (
    <>
      <div
        className="shop-default-banner banner d-flex align-items-center mb-5 br-xs"
        style={{
          backgroundImage: `url(${bannerimg1})`,
          backgroundColor: "#ffc74e",
        }}
      >
        <div className="banner-content">
          <h4 className="banner-subtitle font-weight-bold">
            Accessories Collection
          </h4>
          <h3 className="banner-title text-white text-uppercase font-weight-bolder ls-normal">
            Smart Wrist Watches
          </h3>
          <a
            href="shop-banner-sidebar.html"
            className="btn btn-dark btn-rounded btn-icon-right"
          >
            Discover Now
            <i className="w-icon-long-arrow-right" />
          </a>
        </div>
      </div>
    </>
  );
};

export default ShopBanner;
