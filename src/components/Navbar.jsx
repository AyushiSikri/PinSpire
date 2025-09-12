import React, { useState } from 'react';
import { useNavigate, useNavigation } from 'react-router-dom';
import MessageModal from './MessageModal';
// import './Navbar.css';
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
const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null; // don't render if closed

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0,0,0,0.5)", // dark backdrop
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1000,
            }}
        // onClick={onClose} // close modal when clicking outside
        >
            <div
                style={{
                    background: "white",
                    padding: "2rem",
                    borderRadius: "2rem",
                    width: "400px",
                    maxWidth: "90%",
                    position: "relative",
                }}
                onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
            >
                <button
                    style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        background: "transparent",
                        border: "none",
                        fontSize: "1.2rem",
                        cursor: "pointer",
                    }}
                    onClick={onClose}
                >
                    ✖
                </button>
                {children}
            </div>
        </div>
    );
};

const Navbar = (props) => {
    const { navIn } = props;
    const [isOpen, setIsOpen] = useState(false);
    const links = ['About', 'Businesses', 'Create', 'News'];
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const [modalType, setModalType] = useState(null);
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [userDetails, setUserDetails] = useState({});
    const [selectedTags, setSelectedTags] = useState([]);
    // const [profileDetail, setProfileDetail] = useState({});

    const toggleTag = (tag) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter((t) => t !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    }

    // fetch("/api/auth/hello")
    //     .then(res => res.text())
    //     .then(data => console.log(data));

    const hitAutoLogin = async (email, password) => {
        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json", },
                body: JSON.stringify({ email: email, password: password }),
            });

            const data = await res.json();

            if (res.ok && data.message === "Success") {

            } else if (res.status === 401) {

            }

            if (data === "Success") {
                navigate("/_profile");
            } else {
                alert("Failed to Login, try Logging in again");
            }
        } catch (e) {
            alert(e);
        }
    }

    const hitProfileApi = async () => {
        try {
            const user = JSON.parse(localStorage.getItem("userDetail"));
            const res = await fetch("/api/user_profile", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: user?.email, fullName: user?.name, tagsPreference: selectedTags, id: user?.id })
            });

            const data = await res.json();
            // console.log("profile success:", data);body: JSON.stringify({ email:"sikri.ayushi@gmail.com",name:"Ayushi Sikri",tagsPreference:selectedTags,id:1 })

            if (data.message === "Successful Profile Created") {
                alert("Success " + JSON.stringify(data));
                console.log("profile success:");
                localStorage.setItem("profileDetail", JSON.stringify({
                    "email": data?.profile?.email,
                    "fullName": data?.profile?.fullName,
                    "about": data?.profile?.about,
                    "profileImageUrl": data?.profile?.profileImageUrl,
                    "tagsPreference": data?.profile?.tagsPreference,
                }));
                const profileDetail = localStorage.getItem("profileDetail");
                console.log("Success " + profileDetail);
                navigate("/_tabNavigationHome");
                // sign up-> ask for preference(dummy) -> profile api hit ({"fullName","","","email","preference"})-> in actual profile({"fullName","profileImageUrl","about","email","preference","id"})
            }
            else if (!res.ok) {
                throw new Error("Profile Creation failed");
            }

        } catch (err) {
            // console.error("Error:", err);
            alert("Profile Creation failed!");
            //  setMessage("error");
            //  setModalType(err.message);
        }
    }

    const handleSignUp = async () => {

        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password, name })
            });

            const data = await res.json();
            console.log("Signup success:", data);

            if (data.message === "Successful Sign Up") {
                localStorage.clear();
                localStorage.setItem("token", data.token);
                localStorage.setItem("userDetail", JSON.stringify({
                    "email": data.user.email,
                    "name": data.user.name,
                    "id": data.user.id
                }));

                const user = JSON.parse(localStorage.getItem("userDetail"));

                // Now you can access properties like:
                console.log(user.email);
                console.log(user.name);
                console.log(user.id);
                // localStorage.setItem("userDetail", {"email":data.user.email,"name":data.user.name,"id":data.user.id});
                alert("Success");
                hitProfileApi();
                // sign up-> ask for preference(dummy) -> profile api hit ({"fullName","","","email","preference"})-> in actual profile({"fullName","profileImageUrl","about","email","preference"})
                // navigate("/_tabNavigationHome");
                // hitAutoLogin(data.user.email, data.user.password);
            }
            else if (!res.ok) {
                throw new Error("Signup failed");
            }

        } catch (err) {
            // console.error("Error:", err);
            alert("Signup failed!");
            //  setMessage("error");
            //  setModalType(err.message);

        }
    }


    // console.log("In Navbar " + isModalOpen);
    return (
        <>

            <nav style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                // zIndex: 1000,
                padding: "0.1rem 0.8rem 0.1rem 0.8rem",
                display: "flex",
                // backgroundColor: "#f0d8ec",
                backgroundColor: "white",
                borderBottom: "1px solid grey",
                alignItems: "center"
            }}>
                <p style={{
                    flex: 1,
                    display: "flex",
                    marginRight: "0.3rem",
                    marginLeft: "0.6rem",
                    color: "#c96bba",
                    // backgroundColor: "green",
                    fontWeight: 800,
                    //  fontSize: 20
                }}
                >PinSpire</p>

                {/* <input type="text" placeholder="Search for easy dinner, fashion, etc." style={{
                    // width:"50%", 
                    flex:1,
                    backgroundColor: "green",
                    display:"none",
                    fontSize:13, 
                    // padding:5,marginRight:"2%", borderRadius:15,backgroundColor:"lightgrey",borderColor:"plum"
                    }}/> */}

                {/* <ul style={{
                    display: "flex",
                    flex: 8,
                    marginRight: "0.6rem",
                    marginLeft: "0.3rem",
                    justifyContent: "flex-end",
                    // backgroundColor: "lightblue",
                    paddingRight: "0.8rem",
                    listStyle: "none",
                    gap: "1rem",
                    fontSize: 13
                }}
                    className={`nav-links ${isOpen ? 'active' : ''}`}
                >
                    {links.map(link => (
                        <li key={link} >
                            <a href={`#${link.toLowerCase()}`} style={{
                                color: "#266cf9ff",
                            }} onClick={() => setIsOpen(false)}>
                                {link}
                            </a>
                        </li>
                    ))}
                </ul> */}
                {navIn === "loggedOut" ?
                    (
                        <div style={{
                            // backgroundColor: "pink",
                            display: "flex",
                            flex: 2,
                            marginRight: "1rem",
                            justifyContent: "end",
                            gap: "0.5rem"
                        }}>
                            <button onClick={() => navigate("/")} style={{
                                backgroundColor: "#c96bba",
                                borderRadius: "1rem",
                                // padding: "0.7rem 1rem",
                                fontSize: 13,
                                color: "white",
                            }}>
                                Log in
                            </button>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                style={{
                                    backgroundColor: "lightgrey",
                                    borderRadius: "1rem",
                                    // padding: "0.7rem 1rem",
                                    fontSize: 13,
                                    color: "black"
                                }}>
                                Sign up
                            </button>
                        </div>
                    ) : (
                        <div style={{
                            // backgroundColor: "pink",
                            display: "flex",
                            flex: 2,
                            marginRight: "1rem",
                            justifyContent: "end",
                            gap: "0.5rem"
                        }}>

                            <button onClick={() => navigate("/_profile")} style={{
                                backgroundColor: "#c96bba",
                                borderRadius: "1rem",
                                // padding: "0.7rem 1rem",
                                fontSize: 13,
                                color: "white",
                            }}>
                                Profile
                            </button>
                            <button
                                onClick={() => {
                                    localStorage.removeItem("token");
                                    localStorage.clear();
                                    navigate("/");
                                }
                                }
                                style={{
                                    backgroundColor: "lightgrey",
                                    borderRadius: "1rem",
                                    // padding: "0.7rem 1rem",
                                    fontSize: 13,
                                    color: "black"
                                }}>
                                Log Out
                            </button>
                        </div>
                    )}
            </nav>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div style={{
                    display: "flex",
                    flex: 1,
                    flexDirection: "column",
                    boxSizing: "border-box",
                    // marginLeft: "8rem",
                    // marginRight: "8rem",
                    // padding: "1rem 2.5rem",
                    // backgroundColor: "red",
                    // borderRadius: "2rem",
                }}>
                    <p style={{
                        color: "#c96bba",
                        // backgroundColor: "yellow",
                        textAlign: "center",
                        flex: 1,
                        fontWeight: 800,
                        fontSize: 18,
                        marginTop: "0.1rem",
                        marginBottom: "0.2rem",
                    }}
                    >PinSpire</p>

                    <p style={{
                        color: "black",
                        flex: 1,
                        marginTop: "0.1rem",
                        marginBottom: "0.1rem",
                        // backgroundColor: "green",
                        textAlign: "center",
                        fontWeight: 700,
                        fontSize: 20
                    }}
                    >Welcome to PinSpire</p>

                    <p style={{
                        color: "black",
                        flex: 1,
                        marginTop: "0.05rem",
                        marginBottom: "0.5rem",
                        // backgroundColor: "green",
                        textAlign: "center",
                        // fontWeight: 700,
                        fontSize: 13
                    }}
                    >Find new ideas to try</p>

                    <div style={{
                        flex: 5,
                    }}>
                        <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
                            <label htmlFor="name" style={{
                                fontSize: "14px",
                                // marginBottom: "0.3rem",
                                // fontWeight: "500",
                                color: "black",
                                marginBottom: "0.2rem",
                            }}>Name</label>

                            <input
                                id="name"
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                style={{
                                    marginBottom: "0.5rem",
                                    boxSizing: "border-box",
                                    padding: "12px 10px",
                                    fontSize: "13px",
                                    border: "1px solid #aaa",
                                    borderRadius: "12px",
                                    outlineColor: "#266cf9ff",
                                }}
                            />
                        </div>

                        {/* Email Field */}
                        <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
                            <label htmlFor="email" style={{
                                fontSize: "14px",
                                // marginBottom: "0.3rem",
                                // fontWeight: "500",
                                color: "black",
                                marginBottom: "0.2rem",
                            }}>Email</label>

                            <input
                                id="email"
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{
                                    marginBottom: "0.5rem",
                                    boxSizing: "border-box",
                                    padding: "12px 10px",
                                    fontSize: "13px",
                                    border: "1px solid #aaa",
                                    borderRadius: "12px",
                                    outlineColor: "#266cf9ff",
                                }}
                            />
                        </div>

                        {/* Password Field */}
                        <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
                            <label htmlFor="password" style={{
                                fontSize: "14px",
                                marginBottom: "0.2rem",
                                // fontWeight: "500",
                                color: "#333",
                            }}>Password</label>

                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                style={{
                                    marginBottom: "0.5rem",
                                    boxSizing: "border-box",
                                    padding: "12px 10px",
                                    fontSize: "13px",
                                    border: "1px solid #aaa",
                                    borderRadius: "12px",
                                    outlineColor: "#266cf9ff",
                                }}
                            />
                        </div>

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
                        </div>
                    </div>

                    <button
                        onClick={() => handleSignUp()}
                        style={{
                            backgroundColor: "#c96bba",
                            color: "white",
                            flex: 1,
                            fontSize: 13,
                            // width: "100%", 
                            marginTop: "0.1rem",
                            marginBottom: "0.1rem",
                            borderRadius: "1rem"
                        }}>Sign Up</button>

                    {/* <p style={{
                            textAlign: "center",
                            // backgroundColor:"lightblue",
                            fontSize: 13,
                            flex: 1,
                            marginTop: "0.2rem",
                            marginBottom: "0.2rem",
                            fontWeight: "700",
                            //  margin: 5,
                        }}>OR</p>

                        <div style={{
                            // width: "100%",
                            flex: 1,
                            display: "flex",
                            marginTop: "0.1rem",
                            marginBottom: "0.2rem",
                            alignContent: "center",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "2px",
                            // backgroundColor: "orange",
                            border: "1px solid #ccc",
                            flexDirection: "row"
                        }}>
                            <div style={{
                                // flex: 1,
                                // backgroundColor: "purple",
                            }}>
                                <img src={googleIcon}
                                    style={{
                                        height: "15px",
                                        // backgroundColor: "red", 
                                        width: "15px",
                                        marginLeft: "15px"
                                    }}
                                />
                            </div>
                            <p style={{
                                // flex: 3,
                                marginLeft: "20px",
                                fontWeight: 700,
                                fontSize: "12px",

                            }}>Continue with Google</p>
                        </div> */}


                    <p style={{
                        textAlign: "center",
                        fontSize: "10px",
                        color: "grey",
                        flex: 3,
                        marginTop: "0.5rem",
                        marginBottom: "0.2rem",
                    }}>
                        By continuing, you agree to Pinterest's{" "}
                        <a href="#" style={{
                            textDecorationLine: "underline", color: "grey", fontWeight: 400
                        }}>Terms of Service</a> and acknowledge you've read our{" "}
                        <a href="#" style={{
                            textDecorationLine: "underline", color: "grey", fontWeight: 400
                        }}>Privacy Policy</a>. <a href="#" style={{ textDecorationLine: "underline", color: "grey", fontWeight: 400 }} >Notice at
                            collection</a>.
                    </p>

                    <div style={{
                        // marginTop: "0rem",
                        alignContent: "center",
                        display: "flex",
                        flex: 1,
                        justifyContent: "center",
                        fontSize: "13px",
                        marginBottom: "0.5rem",
                        // backgroundColor: "firebrick",
                    }}><p style={{ margin: 0 }}>Already a member?{"  "}
                            <a href="#" style={{
                                fontSize: "13px",
                                fontWeight: "500",
                                color: "black",
                            }}>Log in</a></p>
                    </div>
                </div>
            </Modal>

            <MessageModal
                isOpen={!!modalType}
                onClose={() => {
                    modalType === "success" ? navigate("/_profile") : null;
                    setModalType(null);
                }}
                type={modalType}
                message={
                    message
                }
            />
        </>

    );
};

export default Navbar;
