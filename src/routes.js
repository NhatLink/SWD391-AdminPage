import React from "react";

const Account = React.lazy(() => import("./views/Account/Account"));
const Aution = React.lazy(() => import("./views/Aution/Aution"));
const Product = React.lazy(() => import("./views/Product/Product"));
const TransactionRequest = React.lazy(() =>
  import("./views/Transaction/TransactionRequest")
);
const Home = React.lazy(() => import("./views/Home/Home"));
const AccountDetail = React.lazy(() => import("./views/Account/AccountDetail"));
const AutionDetail = React.lazy(() => import("./views/Aution/AutionDetail"));
const AutionConfirm = React.lazy(() => import("./views/Aution/AuctionConfirm"));

const routes = [
  { path: "/", exact: true, name: "Home", element: Home },
  { path: "/account", name: "Account", element: Account, exact: true },
  {
    path: "/update-user/:userId",
    name: "UpdateUser",
    element: AccountDetail,
    exact: true,
  },
  { path: "/aution", name: "Aution", element: Aution, exact: true },
  {
    path: "/aution-detail/:autionId",
    name: "Aution Detail",
    element: AutionDetail,
    exact: true,
  },
  {
    path: "/aution-confirm",
    name: "Aution",
    element: AutionConfirm,
    exact: true,
  },
  { path: "/product", name: "Product", element: Product, exact: true },
  {
    path: "/transaction",
    name: "Transaction",
    element: TransactionRequest,
    exact: true,
  },
];

export default routes;
