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

const AddNewPins = () => {
    const [show, setShow] = useState(true);
    const [replace, setReplace] = useState(true);
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        multiple: false,
        accept: { "image/*": [], "video/*": [] },
        onDrop: (files) => {
            setFile(files[0]);
            console.log(files[0]);
            console.log(files);
        }
    });

    const [selectedTags, setSelectedTags] = useState([]);
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [previewUrl, setPreviewUrl] = useState(null);

    const toggleTag = (tag) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter((t) => t !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    }

    // console.log(ize );
    console.log("Debug:", file, selectedTags, title, description);

    const hitCreatePinApi = async () => {
        if (!file) {
            alert("Please select a file before publishing");
            return;
        } else if (!title) {
            alert("Please write a title for the pin");
        }

        const formData = new FormData();
        formData.append("file", file);
        formData.append("title", title);
        formData.append("description", description);
        //  formData.append("tags", JSON.stringify(selectedTags));
    const userId = "1"; // Default to user ID 1 for testing
    
        // append each tag separately
        selectedTags.forEach((tag) => formData.append("tags", tag));
formData.append("userId", userId);
        try {
            const res = await fetch("/api/create_pin", {
                method: "POST",
                // headers: {
                //     Authorization: "Bearer " + localStorage.getItem("token"),
                // },
                body: formData,
            });
            if (!res.ok) {
                throw new Error("Failed to create pin");
            }

            const data = await res.text();
            console.log("Pin created:", data);
            alert("Pin published successfully!");
            setFile(null);
            setTitle("");
            setDescription("");
            setSelectedTags([]);
        } catch (e) {
            console.error(e);
            alert("Something went wrong");
        }
    }
    return (
        <div style={{
            width: "100%",
            minHeight: "100vh",
            display: "flex",
            // flexDirection: "row",
            // alignItems:"center",
            // justifyContent:"center"
        }}>

            <Navbar navIn="loggedIn" />
            <div style={{
                paddingTop: "2rem",
                // marginTop: "4rem",
                // backgroundColor: "red",
                width: "100vw",
                boxSizing: "border-box",
                display: "flex",
                // flexDirection: "row",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <div style={{
                    flex: show ? 9 : 6,
                    // backgroundColor: "lightblue",
                    display: "flex",
                    justifyContent: "center",
                }}
                >
                    <div style={{
                        flex: 1,
                        // backgroundColor: "beige",
                        borderRadius: "1rem",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignContent: "center",
                    }}>

                        <div
                            {...getRootProps()}
                            style={{
                                flex: 1,
                                margin: "1rem",
                                backgroundColor: "#e6e5e1",
                                borderRadius: "2.5rem",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                alignSelf: "center",
                                height: "200px",
                                width: "330px",
                                fontSize: 13,
                                flexDirection: "column",
                                textAlign: "center",
                                color: "grey",
                                border: "2px dashed #ccc",
                            }}>
                            <input {...getInputProps()} />

                            {
                                // acceptedFiles.length === 0 ? (
                                //     <>
                                //         <p>Choose a file or drag and drop it here</p>
                                //         <p style={{ padding: "2rem" }}>We recommend using high quality .jpg files less than 20 MB or .mp4 files less than 200 MB.</p>
                                //     </>
                                // ) : (
                                //     acceptedFiles.map(file => (
                                //         <img
                                //             key={file.name}
                                //             src={URL.createObjectURL(file)}
                                //             alt={file.name}
                                //             style={{
                                //                 width: "100%",      // fills width
                                //                 height: "100%",     // fills heighT
                                //                 objectFit: "cover", // keeps aspect ratio & fills
                                //                 borderRadius: "2rem"
                                //             }}
                                //         />
                                //     )))
                            }

                            {file ? (
                                <img
                                    src={URL.createObjectURL(file)}
                                    alt={file.name}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        borderRadius: "2rem"
                                    }}
                                />
                            ) : (
                                <>
                                    <p>Choose a file or drag and drop it here</p>
                                    <p style={{ padding: "2rem" }}>We recommend using high quality .jpg files less than 20 MB or .mp4 files less than 200 MB.</p>
                                </>
                            )}
                        </div>

                    </div>
                    <div style={{
                        flex: 1.2,
                        flexDirection: "column",
                        // backgroundColor: "lightpink",
                        borderRadius: "1rem",
                        padding: "0.7rem",
                        paddingRight: "2rem",
                        paddingLeft: "2rem",
                        fontSize: 15,
                        color: "white",
                    }}>
                        <div style={{
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                        }}>
                            <label style={{
                                color: "#080808ff",
                                marginBottom: "0.7rem",
                            }} htmlFor="title">Title</label>
                            <input type="text" id="title" value={title} placeholder="Add a title" onChange={(e) => setTitle(e.target.value)} required style={{
                                marginBottom: "1rem",
                                boxSizing: "border-box",
                                padding: "12px 10px",
                                fontSize: "13px",
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
                            }} htmlFor="description">Description</label>
                            <textarea type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Add a detailed description"
                                rows={4}
                                required style={{
                                    padding: "12px 10px",
                                    marginBottom: "1rem",
                                    fontSize: "13px",
                                    border: "1px solid #aaa",
                                    borderRadius: "12px",
                                    outlineColor: "#266cf9ff",
                                }} />
                        </div>

                        {/* <div style={{
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                        }}>
                            <label style={{
                                color: "black",
                                marginBottom: "0.7rem",
                            }} htmlFor="link">Link</label>
                            <input type="text" id="link" placeholder="Add a Link" required style={{
                                marginBottom: "1rem",
                                padding: "12px 10px",
                                fontSize: "13px",
                                border: "1px solid #aaa",
                                borderRadius: "12px",
                                outlineColor: "#266cf9ff",
                            }} /> </div> */}

                        <div style={{
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                        }}>
                            <label style={{
                                color: "black",
                                marginBottom: "0.7rem",
                            }} htmlFor="taggedTopics">Tagged topics</label>
                            {/* <input type="text" id="taggedTopics" placeholder="Add a tag" required style={{
                                marginBottom: "1rem",
                                padding: "12px 10px",
                                fontSize: "13px",
                                border: "1px solid #aaa",
                                borderRadius: "12px",
                                outlineColor: "#266cf9ff",
                            }} /> */}
                            <div style={{
                                // backgroundColor: "pink",
                                flex: 2,
                                marginRight: "1rem",
                                marginTop: "0.5rem",
                                marginBottom: "0.5rem",
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "1rem",
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
                                            fontSize: 13,
                                            color: "#797777ff",
                                        }}>
                                            {tag}
                                        </div>
                                    ))
                                }

                                {/* <div style={{
                                    // backgroundColor: "yellow",
                                    display: "flex",
                                    flex: 1,
                                    // justifyContent: "center",
                                    gap: "1rem"
                                }}>
                                    <div onClick={() => navigate("/")} style={{
                                        // backgroundColor: "lightgrey",
                                        border: "1px solid black",
                                        borderRadius: "1rem",
                                        outlineColor: "#c96bba",
                                        // padding: "0.7rem 1rem",
                                        fontSize: 13,
                                        color: "black",
                                    }}>
                                        FOOD
                                    </div>
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        style={{
                                            // backgroundColor: "lightgrey",
                                            border: "1px solid black",
                                            borderRadius: "1rem",
                                            // padding: "0.7rem 1rem",
                                            fontSize: 13,
                                            outlineColor: "#c96bba",
                                            color: "black",
                                        }}>
                                        TRAVEL
                                    </button>
                                    <button onClick={() => navigate("/")} style={{
                                        // backgroundColor: "lightgrey",
                                        border: "1px solid black",
                                        borderRadius: "1rem",
                                        // padding: "0.7rem 1rem",
                                        fontSize: 13,
                                        outlineColor: "#c96bba",
                                        color: "black",
                                    }}>
                                        FASHION
                                    </button>
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        style={{
                                            // backgroundColor: "lightgrey",
                                            border: "1px solid black",
                                            borderRadius: "1rem",
                                            // padding: "0.7rem 1rem",
                                            fontSize: 13,
                                            color: "black",
                                            outlineColor: "#c96bba",
                                        }}>
                                        TECHNOLOGY
                                    </button>
                                    <button onClick={() => navigate("/")} style={{
                                        // backgroundColor: "lightgrey",
                                        border: "1px solid black",
                                        borderRadius: "1rem",
                                        // padding: "0.7rem 1rem",
                                        fontSize: 13,
                                        outlineColor: "#c96bba",
                                        color: "black",
                                    }}>
                                        MUSIC
                                    </button>
                                </div>
                                <div style={{
                                    // backgroundColor: "orange",
                                    display: "flex",
                                    flex: 1,
                                    // justifyContent: "center",
                                    gap: "1rem"
                                }}>
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        style={{
                                            // backgroundColor: "lightgrey",
                                            border: "1px solid black",
                                            borderRadius: "1rem",
                                            // padding: "0.7rem 1rem",
                                            fontSize: 13,
                                            outlineColor: "#c96bba",
                                            color: "black",
                                        }}>
                                        SPORTS
                                    </button>
                                    <button onClick={() => navigate("/")} style={{
                                        // backgroundColor: "lightgrey",
                                        border: "1px solid black",
                                        borderRadius: "1rem",
                                        // padding: "0.7rem 1rem",
                                        fontSize: 13,
                                        outlineColor: "#c96bba",
                                        color: "black",
                                    }}>
                                        ART
                                    </button>
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        style={{
                                            // backgroundColor: "lightgrey",
                                            border: "1px solid black",
                                            borderRadius: "1rem",
                                            // padding: "0.7rem 1rem",
                                            fontSize: 13,
                                            outlineColor: "#c96bba",
                                            color: "black",
                                        }}>
                                        NATURE
                                    </button>
                                    <button onClick={() => navigate("/")} style={{
                                        // backgroundColor: "lightgrey",
                                        border: "1px solid black",
                                        borderRadius: "1rem",
                                        // padding: "0.7rem 1rem",
                                        fontSize: 13,
                                        outlineColor: "#c96bba",
                                        color: "black",
                                    }}>
                                        EDUCATION
                                    </button>
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        style={{
                                            // backgroundColor: "lightgrey",
                                            border: "1px solid black",
                                            borderRadius: "1rem",
                                            outlineColor: "#c96bba",
                                            // padding: "0.7rem 1rem",
                                            fontSize: 13,
                                            color: "black",
                                        }}>
                                        HEALTH
                                    </button>
                                </div> */}
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
                                }}>Publish</button>
                        </div>
                    </div>
                </div>

                {/* {show &&
                        (<div style={{
                            flex: 1,
                            // backgroundColor: "orange",
                            display: "flex",
                            justifyContent: "center",
                            // padding: "0.7rem 1rem",
                        }}>
                            <button
                                onClick={() =>
                                    setShow(!show)
                                }
                                style={{
                                    // marginRight: "1rem",
                                    backgroundColor: "pink",

                                    borderRadius: "1rem",
                                    // padding: "0.8rem 1rem",
                                    // fontSize: 15,
                                    color: "white",
                                }}>
                                Hide
                            </button>
                        </div>)
                    } */}

                {!show &&

                    (<div style={{
                        flex: 3,
                        backgroundColor: "yellow",
                        padding: "0.7rem 1rem",
                    }}>
                        <button
                            onClick={() =>
                                setShow(!show)
                            }
                            style={{
                                marginRight: "1rem",
                                backgroundColor: "pink",
                                borderRadius: "1rem",
                                padding: "0.8rem 1rem",
                                fontSize: 15,
                                color: "white",
                            }}>Show</button>
                    </div>)
                }
            </div>

        </div>
    );
}
export default AddNewPins;