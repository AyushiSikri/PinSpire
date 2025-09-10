import React, { useState } from "react";

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
      onClick={onClose} // close modal when clicking outside
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

const SignUp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div style={{ padding: "2rem" }}>
      {/* <h1>React Modal Example</h1>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button> */}

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

            <button
                onClick={() => navigate("/_profile")}
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

             <div style={{
                // marginTop: "0rem",
                alignContent: "center",
                display: "flex",
                flex: 1,
                justifyContent:"center",
                fontSize: "13px",
                marginBottom: "0.5rem",
                // backgroundColor: "firebrick",
            }}><p style={{margin:0}}>Already a member?{"  "}
                <a href="#" style={{
                    fontSize: "13px",
                    fontWeight: "500",
                    color:"black",
                }}>Log in</a></p>
            </div>
        </div>
      </Modal>
    </div>
  );
};

export default SignUp;