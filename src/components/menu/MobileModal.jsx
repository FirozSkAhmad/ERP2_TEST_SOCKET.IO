import React from "react";
import '../menu/mobileModal.css'
import logo from '../../assets/logo.svg'
import menuClose from '../../assets/menuClose.svg'
import home from '../../assets/home.svg';
import approval from '../../assets/approval.svg';
import expenses from '../../assets/expense.svg'; 
import payments from '../../assets/payments.svg';
import discount from '../../assets/discount.svg';
import miscel from '../../assets/miscel.svg';
import historyIcon from '../../assets/history.svg';
import receipts from '../../assets/receipts.svg';
import customer from '../../assets/customer.svg';
import logout from '../../assets/logout.svg';

const MobileModal = ({ isOpen, onClose }) => {
    
    const handleClose = () => {
        onClose(); // Call onClose function to close the modal
    };

      const renderMenuItems = () => {
        const roleType = localStorage.getItem("role_type");
        console.log(roleType);

        if(!roleType) return null;

        switch (roleType) {
            case 'SALES PERSON':
                return (
                    <>
                        <li><a href="/sales/dashboard"><img src={home} alt="" /></a><a href="/sales/dashboard"><p>Dashboard</p></a></li>
                        <li><a href="/sales/onBoard"><img src={historyIcon} alt="" /></a><a href="/sales/onBoard"><p>Onboard Form</p></a></li>
                        <li><a href="/sales/history"><img src={approval} alt="" /></a><a href="/sales/history"><p>History</p></a></li>
                    </>
                );
            case 'MANAGER':
                return (
                    <>
                        <li><a href="/manager/dashboard"><img src={home} alt="" /></a><a href="/manager/dashboard"><p>Dashboard</p></a></li>
                        <li><a href="/manager/receipts"><img src={receipts} alt="" /></a><a href="/manager/receipts"><p>Receipts</p></a></li>
                        <li><a href="/manager/expenses"><img src={expenses} alt="" /></a><a href="/manager/expenses"><p>Expenses</p></a></li>
                        <li><a href="/manager/sp-history"><img src={historyIcon} alt="" /></a><a href="/manager/sp-history"><p>SP History</p></a></li>
                        <li><a href="/manager/cp-history"><img src={historyIcon} alt="" /></a><a href="/manager/cp-history"><p>CP History</p></a></li>
                    </>
                );
            case 'CHANNEL PARTNER':
                return (
                    <>
                        <li><a href="/channel/dashboard"><img src={home} alt="" /></a><a href="/channel/dashboard"><p>Dashboard</p></a></li>
                        <li><a href="/channel/history"><img src={historyIcon} alt="" /></a><a href="/channel/history"><p>History</p></a></li>
                        <li><a href="/channel/onboard"><img src={approval} alt="" /></a><a href="/channel/onboard"><p>Onboard Form</p></a></li>
                    </>
                );
            case 'SUPER ADMIN':
                return (
                    <>
                        <li><a href="/admin/dashboard"><img src={home} alt="" /></a><a href="/admin/dashboard"><p>Dashboard</p></a></li>
                        <li><a href="/admin/approval"><img src={approval} alt="" /></a><a href="/admin/approval"><p>Approval</p></a></li>
                        <li><a href="/admin/receipts"><img src={receipts} alt="" /></a><a href="/admin/receipts"><p>Receipts</p></a></li>
                        <li><a href="/admin/payments"><img src={payments} alt="" /></a><a href="/admin/payments"><p>Payments</p></a></li>
                        <li><a href="/admin/payroll"><img src={home} alt="" /></a><a href="/admin/payrolls"><p>Payrolls</p></a></li>
                        <li><a href="/admin/expenses"><img src={expenses} alt="" /></a><a href="/admin/expenses"><p>Expenses</p></a></li>
                        <li><a href="/admin/commissions"><img src={home} alt="" /></a><a href="/admin/commissions"><p>Commissions</p></a></li>
                        <li><a href="/admin/customer"><img src={customer} alt="" /></a><a href="/admin/customer"><p>Customer</p></a></li>
                        <li><a href="/admin/discount"><img src={discount} alt="" /></a><a href="/admin/discount"><p>Discount</p></a></li>
                        <li><a href="/admin/miscellaneous"><img src={miscel} alt="" /></a><a href="/admin/miscellaneous"><p>Miscellaneous</p></a></li>
                        <li><a href="/admin/sp-history"><img src={historyIcon} alt="" /></a><a href="/admin/sp-history"><p>SP History</p></a></li>
                        <li><a href="/admin/cp-history"><img src={historyIcon} alt="" /></a><a href="/admin/cp-history"><p>CP History</p></a></li>
                        <li><a href="/admin/lead-generation"><img src={miscel} alt="" /></a><a href="/admin/lead-generation"><p>Lead Generation</p></a></li>
                    </>
                );
            default:
                return null;
        }
    };

  return <>
  <div className={`mob-modal ${isOpen ? "open" : ""}`}>
    <div className="mob-modal-content">
        <div className="close-menu" >
            <a className="menu-logo" href="/"><img src={logo} alt="VarunRaj Logo" /></a>
            <img src={menuClose} alt="Close Menu" onClick={handleClose}/>
        </div>
            <div className="mob-mn_Col2">
              <ul className="mn-items">
                {renderMenuItems()}
              </ul>
              <ul className='logout'>
                <li>
                  <a href=""><img src={logout} alt="" /></a>
                  <a href=""><p>Logout</p></a>
                </li>
              </ul>
            </div>
          </div>
    </div>
</>;
};

export default MobileModal;
