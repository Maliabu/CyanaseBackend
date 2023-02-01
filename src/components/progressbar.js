import { Text } from "atomize";
import React  from "react";
const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 10,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    transition: 'width 1s ease-in-out',
    borderRadius: 'inherit',
    textAlign: 'right',
  }

  const labelStyles = {
    padding: 2,
    color: 'white',
    fontWeight: 'bold',
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}></span>
      </div><Text  textWeight="500">{`${completed}%`}</Text>
    </div>
  );
};

export default ProgressBar;