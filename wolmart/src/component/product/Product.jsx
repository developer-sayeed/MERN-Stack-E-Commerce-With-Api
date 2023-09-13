import product1 from "../../assets/images/shop/1.jpg";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <>
      {/* Product Area Start */}
      <div className="product-wrap">
        <div className="product text-center">
          <figure className="product-media">
            <Link to="/shop/123">
              <img src={product1} alt="Product" width={300} height={338} />
            </Link>
            <div className="product-action-horizontal">
              <a
                href="#"
                className="btn-product-icon btn-cart w-icon-cart"
                title="Add to cart"
              />
              <a
                href="#"
                className="btn-product-icon btn-wishlist w-icon-heart"
                title="Wishlist"
              />
              <a
                href="#"
                className="btn-product-icon btn-compare w-icon-compare"
                title="Compare"
              />
              <a
                href="#"
                className="btn-product-icon btn-quickview w-icon-search"
                title="Quick View"
              />
            </div>
          </figure>
          <div className="product-details">
            <div className="product-cat">
              <Link to="/shop/123">Electronics</Link>
            </div>
            <h3 className="product-name">
              <Link to="/shop/123">3D Television</Link>
            </h3>
            <div className="ratings-container">
              <div className="ratings-full">
                <span className="ratings" style={{ width: "100%" }} />
                <span className="tooltiptext tooltip-top" />
              </div>
              <Link to="/shop/123" className="rating-reviews">
                (3 reviews)
              </Link>
            </div>
            <div className="product-pa-wrapper">
              <div className="product-price">$220.00 - $230.00</div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Area End */}
    </>
  );
};

export default Product;
