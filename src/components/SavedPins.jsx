import { useState } from 'react';
import Navbar from './NavBar';
import Explore from './Login';
import { Link, Route, Routes } from 'react-router-dom';
import HomeFeed from './HomeFeed';

const SavedPins = () => {

    return (
        
            <div style={{
                // backgroundColor:"red", 
                // marginTop: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
            }}>
                {/* <p style={{
                    fontSize: "2.2rem",
                    margin: 0,
                    fontWeight: "700"
                }}> Saved Pins Sikri Ayushi</p> */}
                <HomeFeed/>
            </div>
    );
}

export default SavedPins;