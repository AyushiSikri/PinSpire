import { React, useState } from "react";
import Masonry from "react-masonry-css";
import Navbar from "./NavBar";
import { NavLink, Outlet } from "react-router-dom";
const HomeFeed = () => {

    // const images = Array.from({ length: 50 }, (_, i) => 
    //   `https://picsum.photos/id/${100 + i}/300/${200 + (i % 5) * 70}`
    // );
    const breakpointColumnsObj = {
        default: 5,
        1100: 4,
        700: 3,
        500: 1,
    };

    const images = [
        "https://picsum.photos/id/1015/300/200",
        "https://picsum.photos/id/1016/300/350",
        "https://picsum.photos/id/1018/300/400",
        "https://picsum.photos/id/1019/300/250",
        "https://picsum.photos/id/1020/300/500",
        "https://picsum.photos/id/1021/300/300",
        "https://picsum.photos/id/1024/300/450",
        "https://picsum.photos/id/1025/300/370",
        "https://picsum.photos/id/1027/300/280",
        "https://picsum.photos/id/1031/300/420",
        "https://picsum.photos/id/1033/300/260",
        "https://picsum.photos/id/1035/300/390",
        "https://picsum.photos/id/1036/300/470",
        "https://picsum.photos/id/1037/300/320",
        "https://picsum.photos/id/1040/300/410",
        "https://picsum.photos/id/1041/300/360",
        "https://picsum.photos/id/1042/300/280",
        "https://picsum.photos/id/1043/300/500",
        "https://picsum.photos/id/1044/300/230",
        "https://picsum.photos/id/1045/300/450",
        "https://picsum.photos/id/1036/300/470",
        "https://picsum.photos/id/1021/300/300",
        "https://picsum.photos/id/1035/300/390",
        "https://picsum.photos/id/1042/300/280",
        "https://picsum.photos/id/1018/300/400",
        "https://picsum.photos/id/1036/300/470",
        "https://picsum.photos/id/1041/300/360",
        "https://picsum.photos/id/1037/300/320",
        "https://picsum.photos/id/1040/300/410",
        "https://picsum.photos/id/1043/300/500",
    ];

    const styles = `
    .my-masonry-grid {
    display: flex;
    // margin-left: -16px;
    margin:10px;
    gap:5px;
    // background-color:red;
    width: auto;
    }
    .my-masonry-grid_column {
    // padding-left:0px;
    background-clip: padding-box;
    } 
    .my-masonry-grid_column img {
    width:98%; 
    // background-color:blue;
    // padding-top:5px;
    margin-top:10px;
    display: block;
    border-radius: 20px;
    }`;

    // The background paints only inside the padding box.
    // That means: 
    // It does not cover the border area.
    // It does cover the padding + content area.

    return (

        <>
            {/* <Navbar navIn="loggedIn" /> */}

            <div style={{
                // backgroundColor: "pink", 
                // width: "100vw",
                // marginLeft:"2rem",
                // marginRight:"2rem",
                // height:"100vh", 
                marginTop: "0.3rem"
            }}>

                <style>{styles}</style>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    {images.map((src, index) => (
                        <div key={index}>
                            <img src={src} alt={`masonry-${index}`} />
                        </div>
                    ))}
                </Masonry>
            </div>
        </>
    );
}
export default HomeFeed;