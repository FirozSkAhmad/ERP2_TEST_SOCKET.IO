import React, { useContext } from "react";
import './payrollCard.css';
import { useNavigate } from "react-router-dom";
import sharedContext from "../../../context/SharedContext";

const ManageRoleInput = ({onClose}) => {
  const {setLoader} = useContext(sharedContext);

    const BaseURL = "https://erp-phase2-bck.onrender.com";

    // Add New Role Type

    const handleRoleSubmit = async (e) => {
        e.preventDefault();
        setLoader(true);

        try {
          const accessToken = localStorage.getItem("token");
          const roleType = e.target.role.value;
          const response = await fetch(`${BaseURL}/payroll/addRoleType`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({ role_type: roleType }),
          });
          if (!response.ok) {
            throw new Error("Network error. Network response was not ok");
        }
        console.log("Successfully added new role",  roleType);
        onClose();
        } catch (error) {
          console.error("Error submitting new role type:", error);
        } finally {
          setLoader(false);
        }

    };

  return (
    <div className="payroll">
            <div className="payroll-sec">
                <div className="payroll-form">
                    <form onSubmit={handleRoleSubmit}>
                        <div className="manage-input">
                            <input type="text" name="role" placeholder="Add Role" />
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
