import React, { useEffect, useState, useContext } from "react";
import ".//discount.css";
import logo from "../../../assets/logo.svg";
import menu from "../../../assets/menu.svg";
import NavBar from "../../NavBar";
import WebMenu from "../../menu/WebMenu";
import MobileModal from "../../menu/MobileModal";
import DiscountCard from "./DiscountCard";
import BASEURL from "../../../data/baseurl";
import sharedContext from "../../../context/SharedContext";
import Loader from "../../Loader";

const Discount = () => {
  const { loader, setLoader } = useContext(sharedContext);
  const [isOpen, setIsOpen] = useState(false);
  const [discount, setDiscount] = useState([]);
  const [selectedProjectID, setSelectedProjectID] = useState(null);
  const [selectedProjectType, setSelectedProjectType] = useState(null);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const [error, setError] = useState(null);

  const toggleModal = () => {
    setIsOpen(!isOpen); // Toggle modal visibility
  };

  useEffect(() => {
    const fetchDiscounts = async () => {
      try {
        setLoader(true);
        const accessToken = localStorage.getItem("token");
        const response = await fetch(
          `${BASEURL.url}/discounts/getDiscountsList`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch discounts");
        }
        const data = await response.json();
        setDiscount(data.data);
        console.log(discount);
        setLoader(false);
      } catch (error) {
        console.error("Error fetching discounts:", error);
        setError(error);
        setLoader(false);
      }
    };

    fetchDiscounts();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize); // Listen for viewport width changes

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);

  const handleRowClick = (projectID, projectType) => {
    setSelectedProjectID(projectID);
    setSelectedProjectType(projectType);
  };

  if (loader) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <style>
        {`
                @media screen and (min-width: 1024px) {
                    body {
                        background: #f0f1f3;
                    }
                }
            `}
      </style>
      <div className="mob-nav">
        <a href="">
          <img src={logo} alt="" />
        </a>
        <img src={menu} alt="" onClick={toggleModal} />
      </div>
      <div className="disc-table-container">
        <table>
          <thead>
            <tr>
              {viewportWidth >= 1024 && <th>Sno</th>}
              {viewportWidth >= 1024 && <th>Client Name</th>}
              {viewportWidth >= 1024 && <th>Client Phone</th>}
              <th>Project ID</th>
              {viewportWidth >= 1024 && <th>Project Name</th>}
              <th>Project Type</th>
              <th>Discount %</th>
            </tr>
          </thead>
          <tbody>
            {discount.map((disc) => (
              <tr
                key={disc.receipt_id}
                onClick={() =>
                  handleRowClick(
                    disc.project.project_id,
                    disc.project.project_type
                  )
                }
              >
                {viewportWidth >= 1024 && <td>{disc.receipt_id}</td>}
                {viewportWidth >= 1024 && <td>{disc.client_name}</td>}
                {viewportWidth >= 1024 && <td>{disc.client_phn_no}</td>}
                <td>{disc.project.project_id}</td>
                {viewportWidth >= 1024 && <td>{disc.project.project_name}</td>}
                <td>{disc.project.project_type}</td>
                <td>{disc.PropertyDetail.discount_percent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <NavBar />
      <WebMenu />
      <MobileModal isOpen={isOpen} onClose={toggleModal} />
      {selectedProjectID && (
        <DiscountCard
          projectID={selectedProjectID}
          projectType={selectedProjectType}
          onClose={() => setSelectedProjectID(null)}
        />
      )}
    </div>
  );
};

export default Discount;
