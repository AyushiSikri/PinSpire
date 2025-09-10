import { useState } from 'react';
import Navbar from './NavBar';
import Explore from './Login';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import HomeFeed from './HomeFeed';

const CreatedPins = () => {

    const navigate = useNavigate();

    return (
        <>
            <div
                style={{
                    // backgroundColor: "pink",
                    display: "flex",
                    width:"100vw",
                    marginTop: "1.2rem",
                    justifyContent: "end",
                }}>
                <button
                    onClick={()=> navigate("/_addNewPins")}
                    style={{
                        marginRight: "1rem",
                        backgroundColor: "#c96bba",
                        borderRadius: "1rem",
                        padding: "0.6rem 0.8rem",
                        fontSize: 15,
                        color: "white",
                    }}>Create</button>
            </div>

            <div style={{
                // backgroundColor: "red",
                // marginTop: "0.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
            }}>
                <HomeFeed />
            </div>
        </>


    );
}

export default CreatedPins;