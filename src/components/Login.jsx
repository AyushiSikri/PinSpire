import { React, useState, useEffect } from "react";
import pinterestBackground from "../assets/pinterestBackground.jpg";
import googleIcon from "../assets/googleIcon.png";
import Navbar from "./Navbar";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import MessageModal from "./MessageModal";
const Explore = () => {

    // const [showPassword, setShowPassword] = useState(false);
    // const [value, setValue] = useState("");
    // const [list, setList] = useState([]);
    // let count = 0;
    // const addItemOnClick = (value) => {
    //     setList((prevList) => [...list, {
    //         id: count,
    //         name: value
    //     }
    //     ]);
    //     setValue(value);
    // }

    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [modalType, setModalType] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token") 
                },
                body: JSON.stringify({ email: email, password: password })
            });

            const data = await res.json();
            
            if (res.ok && data.message === "Success") {
                // localStorage.clear();
                localStorage.setItem("token", data.token);
                setMessage(data.message);
                localStorage.setItem("userDetail", JSON.stringify(data.user));
                //setModalType("success");
                // hitProfileApi();
                // navigate("/_tabNavigationHome");
            } else if (res.status === 401) {
                setMessage(data.message);
                //setModalType("error");
                // alert(data.message);
            } else if (res.status === 500) {
                //setModalType("error");
                setMessage(data.message);
                // alert(data.message);
            } else {
                //setModalType("error");
                setMessage("Login Failed");
                // alert(data || "Login failed");
            }
            // alert(data);
            // if (res.ok && data === "Success") {
            //     setMessage("Success");
            //     //setModalType("success");
            //     // navigate("/_profile");
            // } else if (res.status === 401) {
            //     setMessage("Invalid email or password!");
            //     //setModalType("error");
            //     alert("Invalid email or password!");
            // } else if (res.status === 500) {
            //     //setModalType("Server error. Please try again later.");
            //     alert("Server error. Please try again later.");
            // } else {
            //     //setModalType(data || "Login failed");
            //     alert(data || "Login failed");
            // }

        } catch (e) {
            //setModalType("error");
            // setMessage(e.message);
            alert(e.message);
            console.log(e);
            // alert("Network error. Please check your connection.");
        }
        finally{
            hitProfileApi();
        }
    }

    const hitProfileApi = async () => {
        try {
        //    const res = await fetch("/api/get_user_profile", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({ email: email })
        // });

          const res = await fetch(`/api/get_user_profile?email=${encodeURIComponent(email)}`, {
            method: "POST",   // you can also make this GET, but POST will still work
            // headers: { "Content-Type": "application/json" }
            headers: { 
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token") 
            },
        });
            const data = await res.json();

            if (data.message === "Successful Profile Created") {
                
                // alert("Success " + JSON.stringify(data));
              
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
            }
            else if (!res.ok) {
                throw new Error("Profile Creation failed");
            }

        } catch (err) {
            // console.error("Error:", err);
            // alert("Profile Creation failed!");
            //  setMessage("error");
            //  //setModalType(err.message);
        }
    }

    return (


        <div style={{
            width: "100%",
            minHeight: "100vh",
        }}>
            <Navbar navIn="loggedOut" />

            <div style={{
                backgroundImage: `url(${pinterestBackground})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                overflow: "hidden",
                backgroundRepeat: "no-repeat",
                width: "100vw",
                height: "100vh",
                paddingTop: "3rem",
                width: "100vw",
                boxSizing: "border-box",
            }}>
                <div
                    style={{
                        paddingRight: "2rem",
                        paddingLeft: "2rem",
                        // width: "100vw",
                        height: "100%",
                        // backgroundColor:"orange",
                        backgroundColor: "rgba(105, 101, 101, 0.67)",// optional dark overlay
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <div style={{
                        // margin: 2, 
                        // padding: 1,
                        flex: 1,
                        display: "flex",
                        // backgroundColor:"blue",
                        flexDirection: "column",
                        justifyContent: "center",
                        paddingLeft: "5rem",
                        // alignItems: "center"
                    }}>

                        <p style={{
                            color: "white", fontWeight: 800, fontSize: 60,
                            // margin: "0.1rem", 
                            // marginBottom:"0rem",
                            margin: 0
                        }}>Log in to get</p>
                        <p style={{
                            color: "white", fontWeight: 800, fontSize: 60,
                            // margin:"0.1rem", 
                            // marginTop:"0.1rem",
                            margin: 0,
                        }}>your ideas</p>
                    </div>

                    <div style={{
                        display: "flex",
                        flex: 1,
                        flexDirection: "column",
                        boxSizing: "border-box",
                        marginLeft: "8rem",
                        marginRight: "8rem",
                        padding: "1rem 2.5rem",
                        backgroundColor: "white",
                        borderRadius: "2rem",
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

                        <div style={{
                            flex: 4,
                        }}>

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
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email"
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
                        </div>

                        <div style={{
                            // marginTop: "0rem",
                            alignContent: "center",
                            display: "flex",
                            flex: 1,
                            marginBottom: "0.5rem",
                            // backgroundColor: "firebrick",
                        }}>
                            <a href="#" style={{
                                fontSize: "13px",
                                fontWeight: "500",
                            }}>Forgot your password?</a>
                        </div>

                        <button
                            onClick={() => handleLogin()}
                            style={{
                                backgroundColor: "#c96bba",
                                color: "white",
                                flex: 1,
                                fontSize: 13,
                                // width: "100%", 
                                marginTop: "0.1rem",
                                marginBottom: "0.1rem",
                                borderRadius: "1rem"
                            }}>Log in</button>

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
                    </div>

                </div>
            </div>
            <MessageModal
                isOpen={!!modalType}
                onClose={() => {
                    modalType === "success" ? navigate("/_profile"):null;
                    //setModalType(null);
                }}
                type={modalType}
                message={
                  message
                }
            />
        </div>
    );

    // <>
    //          <h1>Todo</h1>
    //          <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
    //          <button onClick={()=>addItemOnClick(value)}>Add</button> 
    //          <ul>
    //            {
    //              list.map((item) =>(
    //                         <li key={item.id}>{item.name}</li>
    //             ))
    //            }
    //             </ul>
    //  </>
}
export default Explore;