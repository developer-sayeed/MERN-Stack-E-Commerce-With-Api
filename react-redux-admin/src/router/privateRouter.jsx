import PageLayout from "../components/PageLayout/PageLayout";
import BrandPage from "../pages/brand/BrandPage";
import CategoryPage from "../pages/category/CategoryPage";
import Dashboard from "../pages/dashboard/Dashboard";
import InvoicePage from "../pages/invoice/InvoicePage";
import OrderPage from "../pages/order/OrderPage";
import Permission from "../pages/permission/Permission";
import ProductPage from "../pages/product/Product";
import ProfilePage from "../pages/profile/ProfilePage";
import ReviewsPage from "../pages/reviews/ReviewsPage";
import RolePage from "../pages/role/RolePage";
import SettingPage from "../pages/setting/SettingPage";
import TagPage from "../pages/tag/TagPage";
import UserPage from "../pages/user/UserPage";
import PrivateRouteGard from "./PrivateRouteGard";

// create Private router
const privateRouter = [
  {
    element: <PageLayout />,
    children: [
      {
        element: <PrivateRouteGard />,
        children: [
          {
            path: "/",
            element: <Dashboard />,
          },
          {
            path: "user",
            element: <UserPage />,
          },
          {
            path: "brand",
            element: <BrandPage />,
          },
          {
            path: "product",
            element: <ProductPage />,
          },
          {
            path: "tag",
            element: <TagPage />,
          },
          {
            path: "category",
            element: <CategoryPage />,
          },
          {
            path: "reviews",
            element: <ReviewsPage />,
          },
          {
            path: "order",
            element: <OrderPage />,
          },
          {
            path: "invoice",
            element: <InvoicePage />,
          },
          {
            path: "setting",
            element: <SettingPage />,
          },
          {
            path: "profile",
            element: <ProfilePage />,
          },
          {
            path: "permission",
            element: <Permission />,
          },
          {
            path: "role",
            element: <RolePage />,
          },
        ],
      },
    ],
  },
];

// export router
export default privateRouter;
