import MyAccount from "../pages/authPage/myAccount/MyAccount";

// create Private router
const privateRouter = [
  {
    path: "account",
    element: <MyAccount />,
  },
];

// export router
export default privateRouter;
