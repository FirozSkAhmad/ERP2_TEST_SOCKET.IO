import React, { useEffect, useState } from "react";
import './/discount.css';
import logo from '../../../assets/logo.svg';
import menu from '../../../assets/menu.svg'
import NavBar from '../../NavBar';
import WebMenu from '../../menu/WebMenu'
import MobileModal from "../../menu/MobileModal";
import discountData from '../../../data/discountData'
import DiscountCard from "./DiscountCard";

const Discount = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [discount, setDiscount] = useState([]);
    const [selectedProjectID, setSelectedProjectID] = useState(null);
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    const toggleModal = () => {
        setIsOpen(!isOpen); // Toggle modal visibility
    };

    useEffect(() => {
        setDiscount(discountData)
    })

    useEffect(() => {
        const handleResize = () => {
          setViewportWidth(window.innerWidth);
        };
      
        window.addEventListener('resize', handleResize); // Listen for viewport width changes
      
        return () => {
          window.removeEventListener('resize', handleResize); // Cleanup
        };
    }, []);

    const handleRowClick = (projectID) => {
        setSelectedProjectID(projectID);
    };

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
        <div className="mob-nav" >
            <a href=""><img src={logo} alt="" /></a>
            <img src={menu} alt="" onClick={toggleModal}/>
        </div >
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
                        {discount.map(disc => (
                        <tr key={disc.projectID} onClick={() => handleRowClick(disc.projectID)}>
                            {viewportWidth >= 1024 && <td>{disc.sno}</td>}
                            {viewportWidth >= 1024 && <td>{disc.clientName}</td>}
                            {viewportWidth >= 1024 && <td>{disc.clientPhone}</td>}
                            <td>{disc.projectID}</td>
                            {viewportWidth >= 1024 && <td>{disc.projectName}</td>}
                            <td>{disc.projectType}</td>
                            <td>{disc.discount}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <NavBar />
            <WebMenu />
            <MobileModal isOpen={isOpen} onClose={toggleModal}/>
            {selectedProjectID && <DiscountCard projectID={selectedProjectID} onClose={() => setSelectedProjectID(null)} />}
    </div>
  );
};

export default Discount;
