import LoginPage from "../pages/authPage/login/LoginPage";
import BlogPage from "../pages/blogPage/BlogPage";
import SingleBlogPage from "../pages/blogPage/singleBlogPage/SingleBlogPage";
import CartPage from "../pages/cartPage/CartPage";
import CheckOutPage from "../pages/checkOutPage/CheckOutPage";
import ComparePage from "../pages/comparePage/ComparePage";
import HomePage from "../pages/homePage/HomePage";
import OrderCompletePage from "../pages/orderComplete/OrderCompletePage";
import OrderTracking from "../pages/orderTracking/OrderTracking";
import ShopPage from "../pages/shopPage/ShopPage";
import SingleProduct from "../pages/shopPage/singlePage/SingleProduct";
import WishListPage from "../pages/wishList/WishListPage";

// create public router
const publicRouter = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/shop",
    element: <ShopPage />,
  },
  {
    path: "/shop/:id",
    element: <SingleProduct />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/checkout",
    element: <CheckOutPage />,
  },
  {
    path: "/complete",
    element: <OrderCompletePage />,
  },
  {
    path: "/wishlist",
    element: <WishListPage />,
  },
  {
    path: "/compare",
    element: <ComparePage />,
  },
  {
    path: "/tracking-order",
    element: <OrderTracking />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/blog/:id",
    element: <SingleBlogPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
];

// export router
export default publicRouter;
