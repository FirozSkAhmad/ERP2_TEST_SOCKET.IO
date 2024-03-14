import React, { useEffect, useState } from 'react'
import './table.css'
import dummyData from '../data/dummyData'
import AddProject from './admin/AddProject';
import ProjectDetails from './sales-channel/ProjectDetails';
import UploadForm from './admin/UploadForm';

const Table = ({selectedButton}) => {

  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showAddProjectForm, setShowAddProjectForm] = useState(false);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showProjectDetails, setShowProjectDetails] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth); // Track viewport width
  
  
  const maxRowsPerPage = 10;

  useEffect(() => {
    setProjects(dummyData.filter(project => project.type === selectedButton));
}, [selectedButton]);

useEffect(() => {
  const handleResize = () => {
    setViewportWidth(window.innerWidth);
  };

  window.addEventListener('resize', handleResize); // Listen for viewport width changes

  return () => {
    window.removeEventListener('resize', handleResize); // Cleanup
  };
}, []);

const handleAddProject = () => {
  setShowAddProjectForm(true);
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
        case 'Apartments':
            return (
                <>
                    <th className="tower-number">Tower Number</th>
                    <th className="flat-number">Flat Number</th>
                </>
            );
        case 'Villas':
            return <th className="villa-number">Villa Number</th>;
        case 'Plots':
            return <th className="plot-number">Plot Number</th>;
        case 'Farm lands':
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
        case 'Available':
            return '#10A760';
        case 'Sold':
            return '#FF0000';
        case 'Token':
            return '#E19133';
        case 'Advance':
            return '#3D4DD6';
        case 'Block':
            return '#9C9C9C';
        case 'Part-Payment':
            return '#515151';
        default:
            return '';
    }
};

  const startIndex = (currentPage - 1) * maxRowsPerPage;
  const endIndex = startIndex + maxRowsPerPage;
  const displayedProjects = projects.slice(startIndex, endIndex);

   const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  return (
    <div className="table">
      <div className='table_Sec'>
      <div className="table_Head">
        <h1>Projects</h1>
        <div className="actions">
          <button onClick={handleAddProject}>Add Project</button>
          <div className='actions file-actions'>
            <div><button onClick={handleUpload}>Upload</button></div>
            <div><button>Download</button></div>
          </div>
        </div>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Sno</th>
              <th>Project Name</th>
              {viewportWidth >= 1024 && renderColumns()}
              <th>Project ID</th>
              <th className='proj-status'>Status</th>
            </tr>
          </thead>
          <tbody>
            {displayedProjects.map(project => (
              <tr key={project.projectID} className={selectedButton.toLowerCase() + "-row"}>
              <td onClick={() => handleCellClick(project)}>{project.sno}</td>
              <td onClick={() => handleCellClick(project)}>{project.projectName}</td>
              {viewportWidth >= 1024 && selectedButton === 'Apartments' && <>
                                        <td className='tower-number'>{project.towerNumber}</td>
                                        <td className='flat-number'>{project.flatNumber}</td>
                                        </>
                                    }
                                    {viewportWidth >= 1024 && selectedButton === 'Villas' &&
                                        <td className='villa-number'>{project.villaNumber}</td>}
                                    {viewportWidth >= 1024 && selectedButton === 'Plots' &&
                                        <td className='plot-number'>{project.plotNumber}</td>}
                                    {viewportWidth >= 1024 && selectedButton === 'Farm lands' && <>
                                        <td className='plot-number'>{project.plotNumber}</td>
                                        <td className='sq-yards'>{project.sqYards}</td>
                                    </>}
              <td onClick={() => handleCellClick(project)}>{project.projectID}</td>
              <td className='proj-status' style={{ color: getStatusColor(project.status) }}>{project.status}</td>
            </tr>))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
        <span>Page {currentPage} of {Math.ceil(projects.length / maxRowsPerPage)}</span>
        <button onClick={handleNextPage} disabled={endIndex >= projects.length}>Next</button>
      </div>
      </div>
      {showAddProjectForm && <AddProject selectedType={selectedButton} />}
      {showUploadForm && <UploadForm selectedType={selectedButton} />}
      {showProjectDetails && <ProjectDetails project={selectedProject} getStatusColor={getStatusColor} onClose={handleCloseProjectDetails}/>}
    </div>
  )
}

export default Table