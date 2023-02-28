import React from 'react';
import { FaStar } from "react-icons/fa";
import './App.css';

const colors = {
  orange: "#FFBA5A",
  grey: "white"
}

function App() {

  const stars= Array(5).fill(0);
  const [currentValue, setCurrentValue] =React.useState(0);
  const [hoverValue, setHoverValue] =React.useState(undefined);


  const handleClick= value => {
    setCurrentValue(value)
  }

  const handleMouseOver = value => {
    setHoverValue(value)
  }

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }



  return (

    <div>
      

      <h1>Rating Stars</h1>
      
      <div className='star'>
        

        {stars.map((_, index) =>{
          return(
            <FaStar
            key={index}
            size={24}
            style={{
              
            }}
            color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
            onClick={() => handleClick(index + 1) }
            onMouseOver={() => handleMouseOver(index + 1)}
            onMouseLeave={handleMouseLeave}
            />
          )
        })}
      </div>

    <div className='text'>
      <textarea
      placeholder='Your feedback'
      />

    </div>

      <button>Submit</button>

    </div>
    

  );
};


// const styles = {
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "centre",
//   }
// }


export default App;
