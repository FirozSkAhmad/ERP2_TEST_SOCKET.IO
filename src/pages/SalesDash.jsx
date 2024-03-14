import React, { useState } from "react";
import '../components/sales-channel/style.css'
import logo from '../assets/logo.svg'
import menu from '../assets/menu.svg'
import Table from '../../src/components/Table'
import MobileModal from "../components/menu/MobileModal";
import WebMenu from '../components/menu/WebMenu'
import NavBar from '../components/NavBar'

const SalesDash = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Apartments');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const toggleModal = () => {
    setIsOpen(!isOpen); // Toggle modal visibility
  };

  const handleButtonClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <style>
                {`
                    @media screen and (min-width: 1024px) {
                      body {
                        background-color: #f0f1f3;
                      }
                    }
                    .type-btn button {
                        background-color: ${selectedOption ? '#9FC2F3' : '#1366d9'};
                    }
                `}
            </style>
      <div className="mob-nav" >
        <a href=""><img src={logo} alt="" /></a>
        <img src={menu} alt="" onClick={toggleModal}/>
      </div>
      <div className="proj-type">
        <select className="select-button" value={selectedOption} onChange={handleSelectChange}>
          <option value="Apartments">Apartments</option>
          <option value="Villas" >Villas</option>
          <option value="Plots" >Plots</option>
          <option value="Farm lands">Farm lands</option>
        </select>
      </div>
      <div className='sales-type'>
                    <div className='type-btn'>
                        <button style={{ backgroundColor: selectedOption === 'Apartments' ?  '#1366d9': '' }} onClick={() => handleButtonClick('Apartments')}>
                            Apartments
                        </button>
                    </div>
                    <div className='type-btn'>
                        <button style={{ backgroundColor: selectedOption === 'Villas' ?  '#1366d9': '' }} onClick={() => handleButtonClick('Villas')}>
                            Villas
                        </button>
                    </div>
                    <div className='type-btn'>
                        <button style={{ backgroundColor: selectedOption === 'Plots' ?  '#1366d9': '' }} onClick={() => handleButtonClick('Plots')}>
                            Plots
                        </button>
                    </div>
                    <div className='type-btn'>
                        <button style={{ backgroundColor: selectedOption === 'Farm lands' ?  '#1366d9': '' }} onClick={() => handleButtonClick('Farm lands')}>
                            Farm lands
                        </button>
                    </div>
                </div>
                <NavBar />
                <WebMenu />
      <MobileModal isOpen={isOpen} onClose={toggleModal} />
      <Table selectedButton={selectedOption}/>
    </div>
  );
};

export default SalesDash;
