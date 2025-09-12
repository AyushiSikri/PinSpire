import { NavLink, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
const TabNavigationHome = () => {

    return (
        <div style={{
            //   width:"100%",
            // backgroundColor:"red",
            // display: "flex",
            // flexDirection:"column",
            // justifyContent: "center"
        }}>
            <Navbar navIn="loggedIn" />
            <div style={{
                // width:"100vw",
                marginTop: "3rem",
                // backgroundColor:"yellow",
                display: "flex",
                flexDirection: "column",
                // alignItems:"center",
                // justifyContent: "center"
            }}>
                {/* tab navigation */}
                <div style={{
                    // width:"100%",
                    // backgroundColor:"blue",
                    display: "flex",
                    paddingLeft: "1.5rem",
                    alignItems: "center",
                    gap: "1.5rem",
                    // margin: "1rem 0",
                    marginTop: "3rem",
                    // justifyContent: "center"
                }}>
                    <NavLink
                        to="homeFeed"
                        style={({ isActive }) => ({
                            textDecorationLine: isActive ? "underline" : "none",
                            textUnderlineOffset: "0.5rem",
                            color: "black",
                            fontSize: "1rem",
                        })}
                    >
                        All
                    </NavLink>

                    <NavLink
                        to="saved1"
                        style={({ isActive }) => ({
                            textDecorationLine: isActive ? "underline" : "none",
                            color: "black",
                            textUnderlineOffset: "0.5rem",
                            fontSize: "1rem",
                        })}
                    >
                        Saved
                    </NavLink>
                    <NavLink
                        to="created1"
                        style={({ isActive }) => ({
                            textDecorationLine: isActive ? "underline" : "none",
                            color: "black",
                            textUnderlineOffset: "0.5rem",
                            fontSize: "1rem",
                        })}
                    >
                        Created
                    </NavLink>
                </div>

                {/* Content switches here */}
                <div style={{
                    marginTop: "1rem",
                    //  backgroundColor:"yellow",
                }}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
export default TabNavigationHome;