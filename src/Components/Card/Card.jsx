import React from 'react';
import { FaInfoCircle, FaArrowDown } from 'react-icons/fa';
import './Card.css';
import SpeedIcon from '@mui/icons-material/Speed';
import RouteIcon from '@mui/icons-material/Route';
import CallMadeIcon from '@mui/icons-material/CallMade';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DehazeIcon from '@mui/icons-material/Dehaze';
import TableRowsIcon from '@mui/icons-material/TableRows';
import ReorderIcon from '@mui/icons-material/Reorder';

const Card = ({value,label}) => {
  return (
    <div className="card_parent">
      <div className="speed-card-header">
        <div className="logo_label">
        
          {label==='Speed' && <div className="logo"><SpeedIcon sx={{fontSize:30}}/></div>
          }

          {label==='Distance' && <div className="logo"><CallMadeIcon sx={{fontSize:30}}/></div>}

          {label==='Location' && <div className="logo"><LocationOnIcon sx={{fontSize:30}}/></div>}

          {label==='Road_Type' && <div className="logo"><ReorderIcon sx={{fontSize:30, marginRight:'2px'}}/></div>}

          <span className="label" style={{marginTop:'10px'}}>{label.toUpperCase()}</span>

        </div>
        <div className="speed-value">{value}</div>
         
      </div>
      
    </div>
  );
};

export default Card;
