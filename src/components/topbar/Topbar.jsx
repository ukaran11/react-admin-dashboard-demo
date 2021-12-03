import React from 'react';
import "./topbar.css";
import  nextjs from  "../../assets/nextjs.png"
import {NotificationsNone, Language, Settings} from '@material-ui/icons';
export default function Topbar() {
    return (
        <div className="topbar">
          <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">Admin Dashboard</span>
            </div>
            <div className="topRight">
              <div className="topbarIconContainer">
                <NotificationsNone />
                <span className="topIconBadge">2</span>
              </div>
              <div className="topbarIconContainer">
                <Language />
                <span className="topIconBadge">2</span>
              </div>
              <div className="topbarIconContainer">
                <Settings /> 
              </div>
              <img src={nextjs} alt="" className="topAvatar" />
            </div>
          </div>
        </div>
    )
}