import React, { useState } from "react";

const UploadForm = ({ selectedType, onClose }) => {
  return (
    <div className="add_Proj">
      <div className="add_Sec">
        <div className="add_Head">
          <h3>Select the file</h3>
        </div>
        <div className="add_Form">
          <form action="">
            <div className="upl_input-field">
              <input type="file" style={{ display: "none" }} accept=".csv" />
              <div className="upl_input-text" disabled>
                <div className="browse_input">
                  <p>Choose a CSV file</p>
                </div>
                <button className="browse">Browse files</button>
              </div>
            </div>
            <div className="add_input-field">
              <label htmlFor="type" className="add-label">
                Project Type
              </label>
              <input id="type" type="text" value={selectedType} readOnly />
            </div>
            <div className="add_Btns">
              <div className="can-btn">
                <button onClick={onClose}>Cancel</button>
              </div>
              <div className="add-btn">
                <button>Add Project</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadForm;
