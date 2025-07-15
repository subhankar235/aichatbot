import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";

export const Main = () => {
  return (
    <div className="main">
      {/* Top navigation bar */}
      <div className="nav">
        <p className="brand">GEMINI</p>
        <img className="profile-img" src={assets.mine} alt="User Icon" />
      </div>

      {/* Main content */}
      <div className="main-container">
        <div className="greet">
          <p><span>Hello, Subhankar.</span></p>
          <p>How can I help you today?</p>
        </div>

        {/* Search suggestion cards */}
        <div className="cards">
          <div className="card">
            <p>Suggest some beautiful places to see on an upcoming road trip</p>
            <img src={assets.compass_icon} alt="Compass Icon" />
          </div>

          <div className="card">
            <p>Briefly summarize this concept: urban planning</p>
            <img src={assets.bulb_icon} alt="Bulb Icon" />
          </div>

          <div className="card">
            <p>🧠 What are the psychological effects of social media on teenagers?</p>
            <img src={assets.message_icon} alt="Message Icon" />
          </div>

          <div className="card">
            <p>Give me a quick 15-minute dinner recipe with ingredients I already have</p>
            <img src={assets.code_icon} alt="Code Icon" />
          </div>
        </div>

        {/* Bottom search input bar */}
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter a prompt here" />
            <div>
              <img src={assets.gallery_icon} alt="Gallery Icon" />
              <img src={assets.mic_icon} alt="Mic Icon" />
              <img src={assets.send_icon} alt="Send Icon" />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display info, including about people, so double-check its responses. Your privacy and Gemini apps.
          </p>
        </div>
      </div>
    </div>
  );
};
