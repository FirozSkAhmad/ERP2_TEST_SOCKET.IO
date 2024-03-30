import React, { useContext, useEffect, useState } from "react";
import "./table.css";
import dummyData from "../data/dummyData";
import AddProject from "./admin/AddProject";
import ProjectDetails from "./sales-channel/ProjectDetails";
import UploadForm from "./admin/UploadForm";
import sharedContext from "../context/SharedContext";
import Loader from "./Loader";

const Table = ({ selectedButton, url }) => {
  const { setLoader, loader } = useContext(sharedContext);
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showAddProjectForm, setShowAddProjectForm] = useState(false);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showProjectDetails, setShowProjectDetails] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const maxRowsPerPage = 10;

  const [scaleData, setScaleData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);
      setScaleData([]);

      try {
        const accessToken = localStorage.getItem("token");
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const responseData = await response.json();
        setScaleData(responseData.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      } finally {
        setLoader(false);
      }
    };

    fetchData();
  }, [selectedButton]);

  useEffect(() => {
    setProjects(
      scaleData?.filter(
        (project) => project.project_type === selectedButton.toUpperCase()
      )
    );
  }, [selectedButton, scaleData]);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize); // Listen for viewport width changes

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);

  const handleAddProject = () => {
    setShowAddProjectForm(true);
  };

  const handleCloseProject = () => {
    setShowAddProjectForm(false);
  };

  const handleUpload = () => {
    setShowUploadForm(true);
  };

  const handleCellClick = (project) => {
    setSelectedProject(project);
    setShowProjectDetails(true);
  };

  const handleCloseProjectDetails = () => {
    setShowProjectDetails(false);
  };
  // const handleButtonClick = (type) => {
  //   setSelectedButton(type);
  // };

  const renderColumns = () => {
    switch (selectedButton) {
      case "APARTMENT":
        return (
          <>
            <th className="tower-number">Tower Number</th>
            <th className="flat-number">Flat Number</th>
          </>
        );
      case "VILLA":
        return <th className="villa-number">Villa Number</th>;
      case "PLOT":
        return <th className="plot-number">Plot Number</th>;
      case "FARM_LAND":
        return (
          <>
            <th className="plot-number">Plot Number</th>
            <th className="sq-yards">Sq yards</th>
          </>
        );
      default:
        return null;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "AVAILABLE":
        return "#10A760";
      case "SOLD":
        return "#FF0000";
      case "TOKEN":
        return "#E19133";
      case "ADVANCE":
        return "#3D4DD6";
      case "BLOCK":
        return "#9C9C9C";
      case "PART PAYMENT":
        return "#515151";
      default:
        return "";
    }
  };

  const startIndex = (currentPage - 1) * maxRowsPerPage;
  const endIndex = startIndex + maxRowsPerPage;
  const displayedProjects = projects?.slice(startIndex, endIndex);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="table">
      <Loader />
      <div className="table_Sec">
        <div className="table_Head">
          <h1>Projects</h1>
          <div className="actions">
            <button onClick={handleAddProject}>Add Project</button>
            <div className="actions file-actions">
              <div>
                <button onClick={handleUpload}>Upload</button>
              </div>
              <div>
                <button>Download</button>
              </div>
            </div>
          </div>
        </div>
        {displayedProjects.length !== 0 ? (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Sno</th>
                <th>Project Name</th>
                {viewportWidth >= 1024 && renderColumns()}
                <th>Project ID</th>
                <th className="proj-status">Status</th>
              </tr>
            </thead>
            <tbody>
              {displayedProjects?.map((project) => (
                <tr
                  key={project.project_id}
                  onClick={() => handleCellClick(project)}
                  className={selectedButton.toLowerCase() + "-row"}
                >
                  <td>
                    {project.project_id}
                  </td>
                  <td>
                    {project.project_name}
                  </td>
                  {viewportWidth >= 1024 && selectedButton === "APARTMENT" && (
                    <>
                      <td className="tower-number">{project.tower_number}</td>
                      <td className="flat-number">{project.flat_number}</td>
                    </>
                  )}
                  {viewportWidth >= 1024 && selectedButton === "VILLA" && (
                    <td className="villa-number">{project.villaNumber}</td>
                  )}
                  {viewportWidth >= 1024 && selectedButton === "PLOT" && (
                    <td className="plot-number">{project.plotNumber}</td>
                  )}
                  {viewportWidth >= 1024 && selectedButton === "FARM_LAND" && (
                    <>
                      <td className="plot-number">{project.plotNumber}</td>
                      <td className="sq-yards">{project.sqYards}</td>
                    </>
                  )}
                  <td>
                    {project.pid}
                  </td>
                  <td
                    className="proj-status"
                    style={{ color: getStatusColor(project.status) }}
                  >
                    {project.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>) : loader == false ? ("No data to show") :
        ("")}
        <div className="pagination">
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>
            Previous
          </button>
          <span>
            Page {currentPage} of {Math.ceil(projects?.length / maxRowsPerPage)}
          </span>
          <button
            onClick={handleNextPage}
            disabled={endIndex >= projects?.length}
          >
            Next
          </button>
        </div>
      </div>
      {showAddProjectForm && (
        <AddProject
          selectedType={selectedButton}
          onClose={handleCloseProject}
        />
      )}
      {showUploadForm && <UploadForm selectedType={selectedButton} />}
      {showProjectDetails && (
        <ProjectDetails
          project={selectedProject}
          getStatusColor={getStatusColor}
          onClose={handleCloseProjectDetails}
        />
      )}
    </div>
  );
};

export default Table;
