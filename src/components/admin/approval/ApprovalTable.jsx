import React, { useEffect, useState } from "react";
import '../../admin/approval/pending.css'
import approvalData from "../../../data/pendingApproval";
import PendingApprovalCard from "./PendingApprovalCard";

const ApprovalTable = ({ selectedStatus }) => {
    const [approvals, setApprovals] = useState([]);
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    const [selectedApproval, setSelectedApproval] = useState(null);


    useEffect(() => {
        // Filter approvals based on selected status
        const filteredApprovals = approvalData.filter(approval => approval.status === selectedStatus);
        setApprovals(filteredApprovals);
    }, [selectedStatus]);


    useEffect(() => {
        const handleResize = () => {
          setViewportWidth(window.innerWidth);
        };
      
        window.addEventListener('resize', handleResize); // Listen for viewport width changes
      
        return () => {
          window.removeEventListener('resize', handleResize); // Cleanup
        };
    }, []);

    const handleOpenPendingApproval = (approval) => {
        setSelectedApproval(approval);
    };

    const handleClosePendingApproval = () => {
        setSelectedApproval(false);
    };

    const renderDateHeader = () => {
        if (selectedStatus === 'Approved') {
            return <th>Date of Approval</th>;
        } else if (selectedStatus === 'Rejected') {
            return <th>Date of Rejected</th>;
        } else {
            return <th>Date of Signup</th>;
        }
    };

  return (
    <div className="approval-table">
                <div className="approval-table-sec">
                    <div className="approval-head">
                        <h3>
                            Projects
                        </h3>
                    </div>
                    <div className="approval-table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Sno</th>
                                    <th>Name</th>
                                    {viewportWidth >= 1024 && <th>Email</th>}
                                    {viewportWidth >= 1024 && <th>Roles</th>}
                                    {renderDateHeader()}
                                    {selectedStatus === 'Pending' && viewportWidth >= 1024 && <th>Actions</th>}
                                </tr>
                            </thead>
                            <tbody>
                                {approvals.map((approv) => (
                                    <tr key={approv.sno}>
                                        <td onClick={() => handleOpenPendingApproval(approv)}>{approv.sno}</td>
                                        <td onClick={() => handleOpenPendingApproval(approv)}>{approv.name}</td>
                                        {viewportWidth >= 1024 && <td onClick={() => handleOpenPendingApproval(approv)}>{approv.emailId}</td>}
                                        {selectedStatus === 'Pending' && viewportWidth >= 1024 ? (
                                            <td>
                                                <select>
                                                    <option value="">Roles</option>
                                                    <option value="Super Admin">Super Admin</option>
                                                    <option value="Manager">Manager</option>
                                                    <option value="Channel Person">Channel Person</option>
                                                    <option value="Sales Person">Sales Person</option>
                                                </select>
                                            </td>
                                        ) : viewportWidth >= 1024 && <td onClick={() => handleOpenPendingApproval(approv)}>{approv.role}</td>}
                                        
                                        <td onClick={() => handleOpenPendingApproval(approv)}>{approv.dateOfSignUp}</td>
                                        {selectedStatus === 'Pending' && viewportWidth >= 1024 && (
                                            <td>
                                                <button className="approv-decline">Decline</button>
                                                <button className="approv-accept">Accept</button>
                                            </td>
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                {selectedApproval && <PendingApprovalCard approval={selectedApproval} onClose={handleClosePendingApproval} />}
            </div>
  );
};

export default ApprovalTable;
