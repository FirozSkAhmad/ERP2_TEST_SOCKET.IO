import React, { useState } from "react";
import "../admin/style.css";

const AddProject = ({ selectedType, onClose }) => {
  const BaseURL = "https://erp-phase2-bck.onrender.com";

  const [projectData, setProjectData] = useState({
    project_name: "",
    tower_number: "",
    flat_number: "",
    villa_number: "",
    plot_number: "",
    sqYards: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setProjectData({ ...projectData, [id]: value });
  };

  const handleClose = (e) => {
    e.preventDefault;
    onClose();
  };

  const handleSubmit = async (e) => {
    console.log(projectData, selectedType);
    e.preventDefault();
    try {
      const accessToken = localStorage.getItem("token");
      const response = await fetch(`${BaseURL}/project/createNewProject`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          ...projectData,
          project_type: selectedType,
        }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
        handleClose();
      }
      // Optionally, handle success response
      console.log("Successful");
      onClose();
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  const inputFieldsMap = {
    APARTMENT: [
      {
        label: "Project Type",
        id: "project_type",
        type: "text",
        value: selectedType,
        readOnly: true,
      },
      {
        label: "Project Name",
        id: "project_name",
        type: "text",
        placeholder: "Enter project name",
      },
      {
        label: "Tower Number",
        id: "tower_number",
        type: "text",
        placeholder: "Enter tower number",
      },
      {
        label: "Flat Number",
        id: "flat_number",
        type: "number",
        placeholder: "Enter flat number",
      },
    ],
    VILLA: [
      {
        label: "Project Type",
        id: "project_type",
        type: "text",
        value: selectedType,
        readOnly: true,
      },
      {
        label: "Project Name",
        id: "project_name",
        type: "text",
        placeholder: "Enter project name",
      },
      {
        label: "Villa Number",
        id: "villa_number",
        type: "number",
        placeholder: "Enter villa number",
      },
    ],
    PLOT: [
      {
        label: "Project Type",
        id: "project_type",
        type: "text",
        value: selectedType,
        readOnly: true,
      },
      {
        label: "Project Name",
        id: "project_name",
        type: "text",
        placeholder: "Enter project name",
      },
      {
        label: "Plot Number",
        id: "plot_number",
        type: "number",
        placeholder: "Enter plot number",
      },
    ],
    FARM_LAND: [
      {
        label: "Project Type",
        id: "project_type",
        type: "text",
        value: selectedType,
        readOnly: true,
      },
      {
        label: "Project Name",
        id: "project_name",
        type: "text",
        placeholder: "Enter project name",
      },
      {
        label: "Plot Number",
        id: "plot_number",
        type: "number",
        placeholder: "Enter plot number",
      },
      {
        label: "Sq. yards",
        id: "sq-yards",
        type: "text",
        placeholder: "Enter sq. yards",
      },
    ],
  };

  console.log(inputFieldsMap);

  return (
    <div className="add_Proj">
      <div className="add_Sec">
        <div className="add_Head">
          <h3>New Project</h3>
        </div>
        <div className="add_Form">
          <form onSubmit={handleSubmit}>
            {inputFieldsMap[selectedType].map((field) => (
              <div className="add_input-field" key={field.id}>
                <label htmlFor={field.id} className="add-label">
                  {field.label}
                </label>
                <input
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={projectData[field.value]}
                  onChange={handleInputChange}
                />
              </div>
            ))}
            <div className="add_Btns">
              <div className="disc-btn">
                <button type="button" onClick={handleClose}>
                  Discard
                </button>
              </div>
              <div className="add-btn">
                <button type="submit">Add Project</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProject;
