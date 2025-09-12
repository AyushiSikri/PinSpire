import { useState } from 'react';
import Navbar from './Navbar';
import Explore from './Login';
import { Link, NavLink, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import HomeFeed from './HomeFeed';
import { useDropzone } from 'react-dropzone';
const Profile = () => {

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        multiple: false,
        accept: { "image/*": [], "video/*": [] },
        onDrop: (files) => console.log(files),
    });

    const navigate = useNavigate();
    const profileDetail = JSON.parse(localStorage.getItem("profileDetail"));

    console.log("profileDetail  ", profileDetail);

    return (

        <div style={{
            width: "100%",
            minHeight: "100vh",
            // backgroundColor:"yellow", 
            // overflow:"hidden"
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            paddingTop: "4.4rem",
        }}>
            {/* <div style={{
                // marginTop:"7rem",
                backgroundColor:"red", 
                // width: "100vw",
                display: "flex",
                flex:1,
                    // alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
paddingTop: "4rem",
            }}> */}
            <Navbar navIn="loggedIn" />
            <div style={{
                // backgroundColor:"beige", 

                marginTop: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
            }}>
                {/* <button style={{
                        backgroundColor: "#c96bba",
                        color: "white",
                        textAlign: "center",
                        padding: "1.5rem 2.5rem 1.5rem 2.5rem",
                        fontSize: "2.5rem",
                        borderRadius: "3rem"
                    }}>S</button> */}

                <div style={{
                    // backgroundColor: "red",
                    backgroundColor: "#c96bba",
                    display: "flex",
                    color: "white",
                    height: "90px",
                    width: "90px",
                    borderRadius: "50%",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                    textAlign: "center",
                }}  {...getRootProps()}
                >
                    <input {...getInputProps()} />

                    {acceptedFiles.length === 0 ? (
                        <>
                            <p style={{ fontSize: "1.7rem", fontWeight: 700 }}>S</p>
                        </>
                    ) : (
                        acceptedFiles.map(file => (
                            <img
                                key={file.name}
                                src={URL.createObjectURL(file)}
                                alt={file.name}
                                style={{
                                    width: "100%",      // fills width
                                    height: "100%",     // fills heighT
                                    objectFit: "cover", // keeps aspect ratio & fills
                                    // borderRadius: "2rem"
                                }}
                            />
                        )))}
                </div>

                <p style={{
                    // fontSize: "2.2rem",
                    margin: 0,
                    marginTop: "0.5rem",
                    textAlign: "center",
                    fontWeight: 700,
                    fontSize: "1.7rem"
                    // fontWeight: "700"
                }}>{profileDetail?.fullName}</p>

                 <p style={{
                    // fontSize: "2.2rem",
                    margin: 0,
                    marginTop: "0.3rem",
                    textAlign: "center",
                    fontSize: "1rem"
                    // fontWeight: "700"
                }}>{profileDetail?.email}</p>

                {/* <div
                    style={{
                        // backgroundColor: "pink",
                        display: "flex",
                        // width:"100vw",
                        marginTop: "1.2rem",
                        justifyContent: "center",
                    }}>
                    <button
                        onClick={() =>
                            navigate("/_editProfile")
                        }
                        style={{
                            // marginRight: "1rem",
                            backgroundColor: "lightgrey",
                            borderRadius: "0.8rem",
                            padding: "0.6rem 0.8rem",
                            fontSize: 13,
                            color: "black",
                        }}>Edit Profile</button>
                </div> */}
                {/* <p style={{
                        margin: 0,
                        marginTop: "0.5rem",
                        color: "grey",
                        fontSize: 13
                    }}>@sikriayushi</p>
                    <p style={{
                        margin: 0,
                        fontSize: 13,
                        marginTop: "0.2rem",
                    }}>0 following</p> */}
            </div>


            {/* tab navigation */}
            <div style={{
                display: "flex",
                gap: "1rem",
                margin: "1.2rem 0 0 0",
                // marginTop: "1.2rem",
                justifyContent: "center"
            }}>
                <NavLink
                    to="created"
                    style={({ isActive }) => ({
                        textDecorationLine: isActive ? "underline" : "none",
                        textUnderlineOffset: "0.5rem",
                        color: "black",
                        fontSize: "1rem",
                    })}
                >
                    Created
                </NavLink>

                <NavLink
                    to="saved"
                    style={({ isActive }) => ({
                        textDecorationLine: isActive ? "underline" : "none",
                        color: "black",
                        textUnderlineOffset: "0.5rem",
                        fontSize: "1rem",
                    })}
                >
                    Saved
                </NavLink>
            </div>

            {/* Content switches here */}
            <div style={{ marginTop: "1rem" }}>
                <Outlet />
            </div>
        </div>
        // </div>
    );
}

export default Profile;