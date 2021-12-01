import React from 'react';
import "./topbar.css";

export default function Topbar() {
    return (
        <div className="topbar">
          <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">Admin Dashboard</span>
            </div>
            <div className="topRight">Right</div>
          </div>
        </div>
    )
}