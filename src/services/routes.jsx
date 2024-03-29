import { createBrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Layout from "../pages/Layout";
import HomeLogin from "../pages/HomeLogin";
import SignUp from "../components/SignUp";
import AdminDash from "../pages/AdminDash";
import SalesDash from "../pages/SalesDash";
import OnBoarding from "../components/sales-channel/OnBoarding";
import History from "../components/sales-channel/History";
import ChannelDash from "../pages/ChannelDash";
import Pending from "../components/admin/approval/Pending";
import PendingReceipts from "../components/Receipts/PendingReceipts";
import PayRollCard from "../components/admin/payroll/PayRollCard";
import Customer from "../components/admin/customer/Customer";
import MiscellaneousCard from "../components/admin/miscellaneous/MiscellaneousCard";
import Discount from "../components/admin/discount/Discount";
import SpHistory from "../components/sp-history/SpHistory";
import CpHistory from "../components/cp-history/CpHistory";
import LeadGeneration from "../components/admin/lead-generation/LeadGeneration";
import Expenses from "../components/expenses/Expenses";
import Commissions from "../components/admin/commissions/Commissions";
import Payments from "../components/admin/payments/Payments";
import ManagerDash from "../pages/ManagerDash";
import UnauthorizedAccess from "./UnauthorizedAccess";

const roleType = localStorage.getItem("role_type");

// Define roles and permissions
const PERMISSIONS = {
  "SUPER ADMIN": ["admin"],
  "MANAGER": ["manager"],
  "SALES PERSON": ["sales"],
  "CHANNEL PARTNER": ["channel"],
};

// Check if user has permission based on role
const hasPermission = (role, resource) => {
  return PERMISSIONS[role]?.includes(resource);
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomeLogin /> },
      { path: "signup", element: <SignUp /> },
      { path: "/admin/dashboard", element: hasPermission(roleType, "admin") ? <AdminDash /> : <UnauthorizedAccess /> },
      { path: "/admin/approvals", element: hasPermission(roleType, "admin") ? <Pending /> : <UnauthorizedAccess /> },
      { path: "/admin/receipts", element: hasPermission(roleType, "admin") ? <PendingReceipts /> : <UnauthorizedAccess /> },
      { path: "/admin/payments", element: hasPermission(roleType, "admin") ? <Payments /> : <UnauthorizedAccess /> },
      { path: "/admin/payroll", element: hasPermission(roleType, "admin") ? <PayRollCard /> : <UnauthorizedAccess /> },
      { path: "/admin/expenses", element: hasPermission(roleType, "admin") ? <Expenses /> : <UnauthorizedAccess /> },
      { path: "/admin/commissions", element: hasPermission(roleType, "admin") ? <Commissions /> : <UnauthorizedAccess /> },
      { path: "/admin/customer", element: hasPermission(roleType, "admin") ? <Customer /> : <UnauthorizedAccess /> },
      { path: "/admin/discount", element: hasPermission(roleType, "admin") ? <Discount /> : <UnauthorizedAccess /> },
      { path: "/admin/miscellaneous", element: hasPermission(roleType, "admin") ? <MiscellaneousCard /> : <UnauthorizedAccess /> },
      { path: "/admin/sp-history", element: hasPermission(roleType, "admin") ? <SpHistory /> : <UnauthorizedAccess /> },
      { path: "/admin/cp-history", element: hasPermission(roleType, "admin") ? <CpHistory /> : <UnauthorizedAccess /> },
      { path: "/admin/lead-generation", element: hasPermission(roleType, "admin") ? <LeadGeneration /> : <UnauthorizedAccess /> },
      { path: "/manager/dashboard", element: hasPermission(roleType, "manager") ? <ManagerDash /> : <UnauthorizedAccess /> },
      { path: "/manager/receipts", element: hasPermission(roleType, "manager") ? <PendingReceipts /> : <UnauthorizedAccess /> },
      { path: "/manager/expenses", element: hasPermission(roleType, "manager") ? <Expenses /> : <UnauthorizedAccess /> },
      { path: "/manager/sp-history", element: hasPermission(roleType, "manager") ? <SpHistory /> : <UnauthorizedAccess /> },
      { path: "/manager/cp-history", element: hasPermission(roleType, "manager") ? <CpHistory /> : <UnauthorizedAccess /> },
      { path: "/sales/dashboard", element: hasPermission(roleType, "sales") ? <SalesDash /> : <UnauthorizedAccess /> },
      { path: "/sales/onBoard", element: hasPermission(roleType, "sales") ? <OnBoarding /> : <UnauthorizedAccess /> },
      { path: "/sales/history", element: hasPermission(roleType, "sales") ? <History /> : <UnauthorizedAccess /> },
      { path: "/channel/dashboard", element: hasPermission(roleType, "channel") ? <ChannelDash /> : <UnauthorizedAccess /> },
      { path: "/channel/onBoard", element: hasPermission(roleType, "channel") ? <OnBoarding /> : <UnauthorizedAccess /> },
      { path: "/channel/history", element: hasPermission(roleType, "channel") ? <History /> : <UnauthorizedAccess /> },
    ],
  },
]);

export default router;
