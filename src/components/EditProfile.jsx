import { useState } from "react";
import Navbar from "./NavBar";
import { useDropzone } from 'react-dropzone';
const allTags = [
    "FOOD",
    "TRAVEL",
    "ART",
    "TECHNOLOGY",
    "MUSIC",
    "SPORTS",
    "FASHION",
    "NATURE",
    "EDUCATION",
    "HEALTH",
];
const EditProfile = () => {

    const [fullName, setFullName] = useState("");
    const [about, setAbout] = useState("");
    const [username, setUsername] = useState("");
    // const [fullName, setFullName] = useState("");

    const [selectedTags, setSelectedTags] = useState([]);
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        multiple: false,
        accept: { "image/*": [], "video/*": [] },
        onDrop: (files) => console.log(files),
    });

    const toggleTag = (tag) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter((t) => t !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    }

    return (
        <div style={{
            // width: "100%",
            // minHeight: "100vh",
            // display: "flex",
            // alignItems: "center",
        }}>

            <Navbar navIn="loggedIn" />
            <div style={{
                paddingTop: "2rem",
                marginTop: "3.8rem",
                // backgroundColor: "red",
                width: "100vw",
                paddingBottom: "2rem",
                minHeight: "100vh",       // full screen height
                display: "flex",          // enable flexbox
                justifyContent: "center", // center horizontally
                alignItems: "center",     // center vertically
            }}>
                <div style={{
                    // backgroundColor: "#dcdadad5",
                    padding: "2rem",
                    border: "1px solid #dcdadad5",
                    borderRadius: "1rem",
                    width: "65%",       // or a fixed width like "600px"
                    maxWidth: "700px",
                }}
                >


                    <div>
                        <p style={{
                            fontSize: "2rem",
                            margin: 0,
                            fontWeight: "650",
                            // backgroundColor: "pink",
                        }}>Edit profile</p>
                    </div>
                    <div>
                        <p style={{
                            fontSize: "1rem",
                            margin: 0,
                        }}>Keep your personal details private. Information you add here is visible to anyone who can view your profile.</p>
                    </div>
                    <div style={{
                        // backgroundColor: "red",
                        // marginLeft:"1rem",  
                        marginTop: "1rem",
                        marginBottom: "1rem",
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                    }}>
                        <label style={{
                            color: "#080808ff",
                            marginBottom: "0.7rem",
                            fontSize: "0.85rem",
                        }} htmlFor="fullName">Photo</label>
                        <div
                            style={{
                                // backgroundColor: "yellow",
                                flexDirection: "row",
                                display: "flex",

                            }}>
                            <div style={{
                                backgroundColor: "#c96bba",
                                display: "flex",
                                color: "white",
                                height: "80px",
                                width: "80px",
                                borderRadius: "50%",
                                justifyContent: "center",
                                alignItems: "center",
                                overflow: "hidden",
                                textAlign: "center",
                                marginRight: "1.5rem",
                            }} >
                                <input {...getInputProps()} />

                                {acceptedFiles.length === 0 ? (
                                    <>
                                        <p style={{ fontSize: "1.9rem", fontWeight: 600 }}>S</p>
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
                                            }}
                                        />
                                    )))}
                            </div>
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }} {...getRootProps()} >
                                <button
                                    onClick={() => hitCreatePinApi()}
                                    style={{
                                        backgroundColor: "#dfdfdfff",
                                        color: "black",
                                        // flex: 1,
                                        borderRadius: "0.8rem",
                                        padding: "0.6rem 0.8rem",
                                        fontSize: 13,
                                        borderRadius: "15px"
                                    }}>Change</button>
                            </div>
                        </div>
                    </div>
                    <div style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                    }}>
                        <label style={{
                            color: "#080808ff",
                            marginBottom: "0.7rem",
                            fontSize: "0.85rem",
                        }} htmlFor="fullName">Full Name</label>
                        <input type="text" id="fullName" value={fullName} placeholder="Add your Full Name" onChange={(e) => setFullName(e.target.value)} required style={{
                            marginBottom: "1rem",
                            boxSizing: "border-box",
                            padding: "12px 10px",
                            fontSize: "0.9rem",
                            border: "1px solid #aaa",
                            borderRadius: "12px",
                            outlineColor: "#266cf9ff",
                        }} />
                    </div>

                    <div style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                    }}>
                        <label style={{
                            color: "black",
                            marginBottom: "0.7rem",
                            fontSize: "0.85rem",
                        }} htmlFor="about">About</label>
                        <textarea type="text" id="about" value={about} onChange={(e) => setAbout(e.target.value)} placeholder="Tell your story"
                            rows={3}
                            required style={{
                                padding: "12px 10px",
                                marginBottom: "1rem",
                                fontFamily: "sans-serif",
                                fontSize: "13px",
                                fontSize: "0.9rem",
                                border: "1px solid #aaa",
                                borderRadius: "12px",
                                outlineColor: "#266cf9ff",
                            }} />
                    </div>

                    <div style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                    }}>
                        <label style={{
                            color: "#080808ff",
                            marginBottom: "0.7rem",
                            fontSize: "0.85rem",
                        }} htmlFor="username">Username</label>
                        <input disabled type="text" id="username" value={username} placeholder="Add your Username" onChange={(e) => setUsername(e.target.value)} required style={{
                            marginBottom: "1rem",
                            boxSizing: "border-box",
                            padding: "12px 10px",
                            fontSize: "0.9rem",
                            border: "1px solid #dcdadad5",
                            borderRadius: "12px",
                            backgroundColor: "#dcdadad5",
                            // outlineColor: "#266cf9ff",
                        }} />
                    </div>

                    <div style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                    }}>
                        <label style={{
                            color: "black",
                            marginBottom: "0.7rem",
                            fontSize: "0.85rem",
                        }} htmlFor="taggedTopics">Tagged topics</label>

                        <div style={{
                            // backgroundColor: "pink",
                            flex: 2,
                            marginRight: "1rem",
                            marginTop: "0.5rem",
                            marginBottom: "0.5rem",
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "0.95rem",
                        }}>
                            {
                                allTags.map((tag) => (
                                    <div key={tag} onClick={() => toggleTag(tag)} style={{
                                        // backgroundColor: "lightgrey",
                                        // border: "1px solid #aaa",
                                        border: selectedTags.includes(tag)
                                            ? "2px solid #c96bba"
                                            : "1px solid #aaa",
                                        borderRadius: "1rem",
                                        padding: "0.4rem 1rem",
                                        fontSize: "0.9rem",
                                        color: "#797777ff",
                                        color: "black"
                                    }}>
                                        {tag}
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div style={{
                        marginTop: "1rem",
                    }}>
                        <button
                            onClick={() => hitCreatePinApi()}
                            style={{
                                backgroundColor: "#c96bba",
                                color: "white",
                                flex: 1,
                                borderRadius: "15px"
                            }}>Save</button>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default EditProfile;