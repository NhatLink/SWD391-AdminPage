import React from "react";
import CIcon from "@coreui/icons-react";
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from "@coreui/icons";
import { CNavGroup, CNavItem, CNavTitle } from "@coreui/react";

const _nav = [
  {
    component: CNavItem,
    name: "Home",
    to: "/",
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  // {
  //   component: CNavTitle,
  //   name: "Account",
  // },
  {
    component: CNavItem,
    name: "Account",
    to: "/account",
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },

  // {
  //   component: CNavTitle,
  //   name: "Aution",
  // },
  {
    component: CNavGroup,
    name: "Aution",
    // to: "/aution",
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Aution",
        to: "/aution",
      },
      {
        component: CNavItem,
        name: "AutionConfirm",
        to: "/aution-confirm",
      },
    ],
  },
  // {
  //   component: CNavTitle,
  //   name: "Product",
  // },
  {
    component: CNavGroup,
    name: "Product",
    // to: "/buttons",
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Product",
        to: "/product",
      },
    ],
  },
  // {
  //   component: CNavTitle,
  //   name: "Transaction",
  // },
  {
    component: CNavGroup,
    name: "Transaction",
    // to: "/buttons",
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Transaction",
        to: "/transaction",
      },
    ],
  },
];

export default _nav;
