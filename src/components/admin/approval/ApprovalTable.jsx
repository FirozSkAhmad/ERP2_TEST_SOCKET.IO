import React, { useEffect, useState, useContext } from "react";
import "../../admin/approval/pending.css";
import PendingApprovalCard from "./PendingApprovalCard";
import sharedContext from "../../../context/SharedContext";
import Loader from "../../Loader";
import toast from "react-hot-toast";
import { toast as toastify } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SharedContext from "../../../context/SharedContext";

const ApprovalTable = ({ selectedStatus }) => {
  const { setLoader, loader } = useContext(sharedContext);
  const [approvals, setApprovals] = useState([]);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [selectedApproval, setSelectedApproval] = useState(null);
  const [selectedRoles, setSelectedRoles] = useState({});
  const roles = ["SUPER ADMIN", "MANAGER", "CHANNEL PARTNER", "SALES PERSON"];
  const { socket } = useContext(SharedContext);

  const userName = localStorage.getItem("user_name");

  useEffect(() => {
    fetchUsersList(selectedStatus);
  }, [selectedStatus]);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize); // Listen for viewport width changes

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);

  const handleOpenPendingApproval = (approval) => {
    setSelectedApproval(approval);
  };

  const handleClosePendingApproval = () => {
    setSelectedApproval(false);
  };

  const makeRequest = async (url, options) => {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  };

  const fetchUsersList = async (selectedStatus) => {
    setLoader(true);
    setApprovals([]);
    try {
      // Token should be retrieved securely, e.g., from an environment variable or secure storage
      const token = localStorage.getItem("token");
      const headers = new Headers({
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      });

      const requestOptions = {
        method: "GET",
        headers: headers,
        redirect: "follow",
      };

      const result = await makeRequest(
        `${
          import.meta.env.VITE_BASE_URL
        }/admin/getUsersList?status_filter=${selectedStatus}`,
        requestOptions
      );

      setApprovals(result.data);
      // Update the selectedRoles state based on the fetched data
      const newSelectedRoles = result.data.reduce((acc, approval) => {
        acc[approval.user_id] = approval.role_type;
        return acc;
      }, {});

      setSelectedRoles(newSelectedRoles);
    } catch (error) {
      console.error("Error fetching users list:", error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    if (socket) {
      // Define a new async function to handle the event
      const handleNewValidation = async (data) => {
        if (userName !== data.user_name) {
          console.log(data);
          toastify(data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          const accessToken = localStorage.getItem("token");
          try {
            const response = await fetch(
              `${
                import.meta.env.VITE_BASE_URL
              }/notifications/createNotification`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify({ message: data.message }),
              }
            );
            if (!response.ok) {
              throw new Error("Network error. Network response was not ok");
            }
          } catch (error) {
            console.error("Failed to send notification:", error);
          }
        }
      };

      // Attach the event listener
      socket.on("new-validation", handleNewValidation);

      // Cleanup by removing the event listener
      return () => {
        socket.off("new-validation", handleNewValidation);
      };
    } else {
      console.log("Socket not initialized");
    }
  }, [socket]); // Make sure to include all dependencies in the dependency array

  const handleAction = async (emailId, roleType, approveOrReject) => {
    setLoader(true);

    try {
      const token = localStorage.getItem("token");
      const headers = new Headers({
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      });

      const putBody = JSON.stringify({
        email_id: emailId,
        role_type: roleType,
        status: approveOrReject,
      });

      const putRequestOptions = {
        method: "PUT",
        headers: headers,
        body: putBody,
        redirect: "follow",
      };

      const putResult = await makeRequest(
        `${import.meta.env.VITE_BASE_URL}/admin/validateUser`,
        putRequestOptions
      );

      toast.success(`${putResult.message}`);
      setSelectedApproval(false);
      // Re-fetch the user list to update the UI
      await fetchUsersList(selectedStatus);
    } catch (error) {
      console.error("Error processing action:", error);
    } finally {
      setLoader(false);
    }
  };

  const renderDateHeader = () => {
    if (selectedStatus === "Approved") {
      return <th>Date of Approval</th>;
    } else if (selectedStatus === "Rejected") {
      return <th>Date of Rejected</th>;
    } else {
      return <th>Date of Signup</th>;
    }
  };

  const handleRoleChange = (userId, newRole) => {
    setSelectedRoles((prevSelectedRoles) => ({
      ...prevSelectedRoles,
      [userId]: newRole,
    }));
  };

  return (
    <>
      <Loader />
      <div className="approval-table">
        <div className="approval-table-sec">
          {/* <div className="approval-head">
            <h3>Projects</h3>
          </div> */}
          {approvals.length !== 0 ? (
            <div className="approval-table-container">
              <table>
                <thead>
                  <tr>
                    <th>Sno</th>
                    <th>Name</th>
                    {viewportWidth >= 1024 && <th>Email</th>}
                    {viewportWidth >= 1024 && <th>Roles</th>}
                    {renderDateHeader()}
                    {selectedStatus === "Pending" && viewportWidth >= 1024 && (
                      <th>Actions</th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {approvals.map((approv) => (
                    <tr key={approv.user_id}>
                      <td onClick={() => handleOpenPendingApproval(approv)}>
                        {approv.user_id}
                      </td>
                      <td onClick={() => handleOpenPendingApproval(approv)}>
                        {approv.user_name}
                      </td>
                      {viewportWidth >= 1024 && (
                        <td onClick={() => handleOpenPendingApproval(approv)}>
                          {approv.email_id}
                        </td>
                      )}
                      {selectedStatus === "Pending" && viewportWidth >= 1024 ? (
                        <td>
                          <select
                            id={`role-${approv.user_id}`}
                            value={selectedRoles[approv.user_id]}
                            onChange={(e) =>
                              handleRoleChange(approv.user_id, e.target.value)
                            }
                          >
                            <option value={approv.role_type}>
                              {approv.role_type}
                            </option>
                            {roles
                              .filter((role) => role !== approv.role_type) // Exclude the current role_type from the options
                              .map((role, index) => (
                                <option key={index} value={role}>
                                  {role}
                                </option>
                              ))}
                          </select>
                        </td>
                      ) : (
                        viewportWidth >= 1024 && (
                          <td onClick={() => handleOpenPendingApproval(approv)}>
                            {approv.role_type}
                          </td>
                        )
                      )}

                      <td onClick={() => handleOpenPendingApproval(approv)}>
                        {approv.date_of_signUp}
                      </td>
                      {selectedStatus === "Pending" &&
                        viewportWidth >= 1024 && (
                          <td>
                            <button
                              className="approv-decline"
                              onClick={() =>
                                handleAction(
                                  approv.email_id,
                                  selectedRoles[approv.user_id],
                                  "R"
                                )
                              }
                            >
                              Decline
                            </button>
                            <button
                              className="approv-accept"
                              onClick={() =>
                                handleAction(
                                  approv.email_id,
                                  selectedRoles[approv.user_id],
                                  "A"
                                )
                              }
                            >
                              Accept
                            </button>
                          </td>
                        )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : loader == false ? (
            "No data to show"
          ) : (
            ""
          )}
        </div>
        {selectedApproval && (
          <PendingApprovalCard
            approval={selectedApproval}
            onClose={handleClosePendingApproval}
            handleAction={handleAction}
          />
        )}
      </div>
    </>
  );
};

export default ApprovalTable;
