import React, { useState } from 'react'
import '../admin/style.css'

const AddProject = ({ selectedType, onClose }) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => { 
      setIsOpen(false);
      onClose();
    };

    const inputFieldsMap = {
        "APARTMENT": [
          {
            label: "Project Type",
            id: "type",
            type: "text",
            value: selectedType,
            readOnly: true,
          },
          {
            label: "Project Name",
            id: "name",
            type: "text",
            placeholder: "Enter project name",
          },
          {
            label: "Tower Number",
            id: "tower-number",
            type: "text",
            placeholder: "Enter tower number",
          },
          {
            label: "Flat Number",
            id: "flat-number",
            type: "text",
            placeholder: "Enter flat number",
          },
        ],
        "VILLA": [
          {
            label: "Project Type",
            id: "type",
            type: "text",
            value: selectedType,
            readOnly: true,
          },
          {
            label: "Project Name",
            id: "name",
            type: "text",
            placeholder: "Enter project name",
          },
          {
            label: "Villa Number",
            id: "villa-number",
            type: "text",
            placeholder: "Enter villa number",
          },
        ],
        "PLOT": [
          {
            label: "Project Type",
            id: "type",
            type: "text",
            value: selectedType,
            readOnly: true,
          },
          {
            label: "Project Name",
            id: "name",
            type: "text",
            placeholder: "Enter project name",
          },
          {
            label: "Plot Number",
            id: "plot-number",
            type: "text",
            placeholder: "Enter plot number",
          },
        ],
        "FARM_LAND": [
          {
            label: "Project Type",
            id: "type",
            type: "text",
            value: selectedType,
            readOnly: true,
          },
          {
            label: "Project Name",
            id: "name",
            type: "text",
            placeholder: "Enter project name",
          },
          {
            label: "Plot Number",
            id: "plot-number",
            type: "text",
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

  return (
        <div className='add_Proj'>
            <div className='add_Sec'>
                <div className='add_Head'>
                    <h3>
                        New Project
                    </h3>
                </div>
                <div className='add_Form'>
                    <form action="">
                    {inputFieldsMap[selectedType].map((field) => (
              <div className="add_input-field" key={field.id}>
                <label htmlFor={field.id} className="add-label">
                  {field.label}
                </label>
                <input
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={field.value}
                  readOnly={field.readOnly}
                />
              </div>
            ))}
                    <div className='add_Btns'>
                        <div className='disc-btn'>
                            <button onClick={onClose}>Discard</button>
                        </div>
                        <div className='add-btn'>
                            <button>Add Project</button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default AddProject