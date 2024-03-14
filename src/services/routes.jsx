import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import HomeLogin from "../pages/HomeLogin";
import SignUp from "../components/SignUp";
import AdminDash from "../pages/AdminDash";
import SalesDash from "../pages/SalesDash";
import OnBoarding from "../components/sales-channel/OnBoarding";
import History from "../components/sales-channel/History";
import ChannelDash from "../pages/ChannelDash";
import Pending from "../components/admin/approval/Pending";
import PendingReceipts from "../components/admin/Receipts/PendingReceipts";
import PayRollCard from "../components/admin/payroll/PayRollCard";
import Customer from "../components/admin/customer/Customer";
import MiscellaneousCard from '../components/admin/miscellaneous/MiscellaneousCard'
import Discount from "../components/admin/discount/Discount";
import SpHistory from "../components/admin/sp-history/SpHistory";
import CpHistory from "../components/admin/cp-history/CpHistory";
import LeadGeneration from "../components/admin/lead-generation/LeadGeneration";
import Expenses from "../components/admin/expenses/Expenses";
import Commissions from "../components/admin/commissions/Commissions";
import Payments from "../components/admin/payments/Payments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomeLogin /> },
      { path: "signup", element: <SignUp /> },
      { path: "/admin/dashboard", element:  <AdminDash />},
      { path: "/admin/approvals", element:  <Pending />},
      { path: "/admin/receipts", element:  <PendingReceipts />},
      { path: "/admin/payments", element:  <Payments />},
      { path: "/admin/payroll", element:  <PayRollCard />},
      { path: "/admin/expenses", element:  <Expenses />},
      { path: "/admin/commissions", element:  <Commissions />},
      { path: "/admin/customer", element:  <Customer />},
      { path: "/admin/discount", element:  <Discount />},
      { path: "/admin/miscellaneous", element:  <MiscellaneousCard />},
      { path: "/admin/sp-history", element:  <SpHistory />},
      { path: "/admin/cp-history", element:  <CpHistory />},
      { path: "/admin/lead-generation", element:  <LeadGeneration />},
      { path: "/sales/dashboard", element:  <SalesDash />},
      { path: "/sales/onBoard", element:  <OnBoarding />},
      { path: "/sales/history", element:  <History />},
      { path: "/channel/dashboard", element:  <ChannelDash />},
      { path: "/channel/onBoard", element:  <OnBoarding />},
      { path: "/channel/history", element:  <History />},
    ],
  },
]);

export default router;
