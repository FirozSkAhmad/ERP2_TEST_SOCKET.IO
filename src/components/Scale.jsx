import React, { useState, useEffect } from "react";
import "./scale.css";

const Scale = ({ selectedButton }) => {
  const [scaleData, setScaleData] = useState(null);
  const [loading, setLoading] = useState(true);
  const BaseURL = "https://erp-phase2-bck.onrender.com";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = localStorage.getItem("token");
        const response = await fetch(
          `${BaseURL}/project/status-count?project_type=${selectedButton}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const responseData = await response.json();
        setScaleData(responseData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedButton]);
  return (
    <div className="scale">
      <div className="scale-sec">
        <div className="scale_Data">
          <div className="scale_Items">
            <p className="item-heading one">Available</p>
            <div className="item-count">
              <span>{scaleData?.data?.AVAILABLE}</span>
              <span>{selectedButton}</span>
            </div>
          </div>
          <div className="scale_Items">
            <p className="item-heading two">Token</p>
            <div className="item-count">
              <span>{scaleData?.data?.TOKEN}</span>
              <span>{selectedButton}</span>
            </div>
          </div>
          <div className="scale_Items">
            <p className="item-heading three">Advance</p>
            <div className="item-count">
              <span>{scaleData?.data?.ADVANCE}</span>
              <span>{selectedButton}</span>
            </div>
          </div>
          <div className="scale_Items">
            <p className="item-heading four">Part-Payment</p>
            <div className="item-count">
              <span>{scaleData?.data?.PART_PAYMENT}</span>
              <span>{selectedButton}</span>
            </div>
          </div>
          <div className="scale_Items">
            <p className="item-heading five">Block</p>
            <div className="item-count">
              <span>{scaleData?.data?.BLOCK}</span>
              <span>{selectedButton}</span>
            </div>
          </div>
          <div className="scale_Items">
            <p className="item-heading six">Sold</p>
            <div className="item-count">
              <span>{scaleData?.data?.SOLD}</span>
              <span>{selectedButton}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scale;
