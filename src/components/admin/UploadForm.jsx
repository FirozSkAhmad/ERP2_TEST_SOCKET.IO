import React, { useState } from "react";

const UploadForm = ({ selectedType, onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    // onClose();
  };

  return (
    <div className="add_Proj">
      <div className="add_Sec">
        <div className="add_Head">
          <h3>Select the file</h3>
        </div>
        <div className="add_Form">
          <form action="">
            <div className="add_input-field">
              <div className="file-label">
                <label htmlFor="file">Choose a CSV file.</label>
              </div>
              <div className="file-input-wrapper">
                <input id="file" type="file" />
                <button className="browse-button">Browse files</button>
              </div>
            </div>
            <div className="add_input-field">
              <label htmlFor="type" className="add-label">
                Project Type
              </label>
              <input
                id="type"
                type="text"
                value={selectedType}
                readOnly
              />
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
