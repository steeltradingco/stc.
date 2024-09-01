// import React from 'react';
// import "./style.css";

// function Home() {
//   return (
//     <div className='home-page-main-container'>
//       Home Page was under process
//     </div>
//   );
// };

// export default Home;
import React, { useEffect, useRef, useState } from 'react';
import './style.css'; // Importing the CSS for styles
import { useNavigate } from 'react-router-dom';

const steelItems = [
  { name: 'D2', description: 'A top-grade steel plate known for its durability aasdfkljhalksjdfhlakjsdfhlsadkjdfhlkhjdhlkajsfdnd strength.', temperTemp: "150°C to 600°C", temperIn: "oil", bearTemp: "200-250°C", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCoMLSmI3ol8gJIuRPI-7JqO8AGUTKoGPMGQ&s' },
  { name: 'K100', description: 'A top-grade steel plate known for its durability aasdfkljhalksjdfhlakjsdfhlsadkjdfhlkhjdhlkajsfdnd strength.', temperTemp: "200°C to 600°C", temperIn: "oil or air", bearTemp: "200°C to 250°C", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCoMLSmI3ol8gJIuRPI-7JqO8AGUTKoGPMGQ&s' },
  { name: 'H13', description: 'A top-grade steel plate known for its durability aasdfkljhalksjdfhlakjsdfhlsadkjdfhlkhjdhlkajsfdnd strength.', temperTemp: "500°C to 550°C", temperIn: "oil or air", bearTemp: "540°C to 600°C", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCoMLSmI3ol8gJIuRPI-7JqO8AGUTKoGPMGQ&s' },
  { name: '4140', description: 'A top-grade steel plate known for its durability aasdfkljhalksjdfhlakjsdfhlsadkjdfhlkhjdhlkajsfdnd strength.', temperTemp: "400°C to 700°C", temperIn: "oil or water", bearTemp: "400°C to 500°C", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCoMLSmI3ol8gJIuRPI-7JqO8AGUTKoGPMGQ&s' },
  { name: 'EN31, Bearing steel, Hi-Carbon', description: 'A top-grade steel plate known for its durability aasdfkljhalksjdfhlakjsdfhlsadkjdfhlkhjdhlkajsfdnd strength.', temperTemp: "800-860°C", temperIn: "oil", bearTemp: "100°C to 150°C", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCoMLSmI3ol8gJIuRPI-7JqO8AGUTKoGPMGQ&s' },
  { name: 'Medium-Carbon', description: 'A top-grade steel plate known for its durability aasdfkljhalksjdfhlakjsdfhlsadkjdfhlkhjdhlkajsfdnd strength.', temperTemp: "150°C to 650°C", temperIn: "water", bearTemp: "120°C to 150°C", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCoMLSmI3ol8gJIuRPI-7JqO8AGUTKoGPMGQ&s' },
  { name: 'Low-Carbon', description: 'A top-grade steel plate known for its durability aasdfkljhalksjdfhlakjsdfhlsadkjdfhlkhjdhlkajsfdnd strength.', temperTemp: "150°C to 650°C", temperIn: "water", bearTemp: "120°C to 150°C", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCoMLSmI3ol8gJIuRPI-7JqO8AGUTKoGPMGQ&s' },
  { name: 'SUP9', description: 'A top-grade steel plate known for its durability aasdfkljhalksjdfhlakjsdfhlsadkjdfhlkhjdhlkajsfdnd strength.', temperTemp: "400°C to 700°C", temperIn: "oil", bearTemp: "400°C to 500°C", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCoMLSmI3ol8gJIuRPI-7JqO8AGUTKoGPMGQ&s' },

];

const SteelContainer = () => {
  const navigate = useNavigate();

  return (
    <div className="steel-container">
      {steelItems.map((item, index) => (
        <div key={index} className="steel-item">
          <h2 className="steel-name">{item.name}</h2>
          <img src={item.image} alt={`Steel item ${item.name}}`} className="steel-image" />
          <div className="steel-description-container">
            <p>Tempering temp: {item.temperTemp}</p>
            <p>Tempering in: {item.temperIn}</p>
            <p>Bearing temp: {item.bearTemp}</p>
            <p className={`steel-description collapsed`}>
              {item.description}
            </p>
            <button className="toggle-description" onClick={() => navigate(`/product-detail/${item.name}`)}>
              Show More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SteelContainer;
