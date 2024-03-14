import React from "react";
import './payrollCard.css'

const ManageRoleInput = () => {
  return (
    <div className="payroll">
            <div className="payroll-sec">
                <div className="payroll-form">
                    <form action="">
                        <div className="manage-input">
                            <input type="text" placeholder="Add Role" />
                            <div className="manage-sbt">
                                <button>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  );
};

export default ManageRoleInput;
