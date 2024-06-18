import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgress = ({ value,color,textcolor,balancetailcolor,pathcolor ,textsize }) => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        styles={buildStyles({
          textSize:textsize ? textsize : '20px',
          pathColor: pathcolor ? pathcolor : "red",
          textColor: textcolor,
          trailColor: balancetailcolor ? balancetailcolor : 'white',
          backgroundColor: '#3e98c7',
          // rotation: 0.25,/
        })}
      > 
       
      </CircularProgressbar>
    </div>
  );
};

export default CircularProgress;
