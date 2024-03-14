import React from "react";
import '../approval/pending.css'
import close from '../../../assets/menuClose.svg'

const PendingApprovalCard = ({ approval, onClose }) => {
    const { status, name, emailId, role, dateOfSignUp } = approval;

  return (
    <div className="pend-det">
        <div className="pend-sec">
            <div className='close'>
                <img src={close} alt="Close card" onClick={onClose}/>
            </div>
            <div className="pend-data">
                <div className="pend-data-field">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" defaultValue={approval.name} readOnly />
                </div>
                <div className="pend-data-field">
                    <label htmlFor="email">Email Id</label>
                    <input type="email" id="email" defaultValue={approval.emailId} readOnly />
                </div>
                {status === 'Pending' &&
                        <div className="pend-data-field">
                            <label htmlFor="role">Roles</label>
                            <select id="role" defaultValue={role}>
                                <option value="">Roles</option>
                                <option value="Super Admin">Super Admin</option>
                                <option value="Manager">Manager</option>
                                <option value="Channel Person">Channel Person</option>
                                <option value="Sales Person">Sales Person</option>
                            </select>
                        </div>
                    }
                    {(status === 'Approved' || status === 'Rejected') &&
                        <div className="pend-data-field">
                            <label htmlFor="role">Role</label>
                            <input type="text" id="role" defaultValue={approval.role} readOnly />
                        </div> 
                    }
                <div className="pend-data-field">
                    <label htmlFor="date">Date of Signup</label>
                    <input type="date" id="date" defaultValue={approval.dateOfSignUp} readOnly />
                </div>
                {status === 'Pending' &&
                    <div className="approv-actions">
                        <div className="decline">
                            <button>Decline</button>
                        </div>
                        <div className="accept">
                            <button>Accept</button>
                        </div>
                    </div>
                }
                {(status === 'Approved' || status === 'Rejected') &&
                    <div className="approv-close">
                        <div className="close-card">
                            <button onClick={onClose}>Close</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    </div>
  );
};

export default PendingApprovalCard;
