import { React, useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import Navbar from "./Navbar";
import { NavLink, Outlet } from "react-router-dom";
const HomeFeed = () => {

    const breakpointColumnsObj = {
        default: 5,
        1100: 4,
        700: 3,
        500: 1,
    };

    const [images, setImages] = useState([]);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        const profile = JSON.parse(localStorage.getItem("profileDetail"));
        if (profile?.tagsPreference) {
            setCategory(profile.tagsPreference);
        }
    }, []);

    useEffect(() => {
        if (category.length === 0) return;

        const fetchImages = async () => {
            try {
                const res = await fetch("/api/feed", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(category)
                });
                const data = await res.json();
                console.log("Sucessful List get", data);
                setImages(data);
            } catch (err) {
                console.error("Error fetching images:", err);
            }
        };
        fetchImages();
    }, [category]);

    const [brokenImages, setBrokenImages] = useState(new Set());

    const handleImageError = (src) => {
        setBrokenImages(prev => new Set([...prev, src]));
    };

   
    const styles = `
    /* very specific selectors to avoid overrides */
  .my-masonry-grid .my-masonry-grid_column .masonry-item {
    position: relative;
    break-inside: avoid;
    border-radius: 12px;
    overflow: hidden;
  }

  .my-masonry-grid .my-masonry-grid_column .masonry-item img {
    display:block;
    width:100%;
    // height:auto;
    // width:auto;
    transition: transform 0.35s ease;
    position: relative;
    z-index: 1;
  }

  .my-masonry-grid .my-masonry-grid_column .masonry-item .overlay {
    position: absolute;
    inset: 0;
    display:flex;
    align-items:flex-end;
    justify-content:center;
    padding:12px;
    gap:8px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease, background 0.2s ease;
    z-index: 9999; /* very high to beat any stacking contexts */
    background: linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.45) 100%);
  }

  .my-masonry-grid .my-masonry-grid_column .masonry-item:hover .overlay {
    opacity: 1;
    pointer-events: auto;    
  }

  .my-masonry-grid .my-masonry-grid_column .masonry-item:hover img {
    // transform: scale(1.04);
    transform: scale(1.02);
  }

  .hover-btn {
    padding: 8px 14px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    font-weight: 600;
    background: rgba(255,255,255,0.95);
  }

  .hover-btn.secondary {
    background: rgba(0,0,0,0.6);
    color: white;
  }

  /* Masonry grid base */
  .my-masonry-grid {
    display:flex;
    margin:10px;
    gap:12px;
  }
  .my-masonry-grid_column { background-clip: padding-box; }
  .my-masonry-grid_column img {
    // width:100%;
    margin-top:10px;
    display: block;
    border-radius: 20px;
    }
    .masonry-item.short img {
  height: 220px;   /* short cards */
  object-fit: cover;
}

.masonry-item.tall img {
  height: 350px;   /* tall cards */
  object-fit: cover;
}

  `;

    // The background paints only inside the padding box.
    // That means: 
    // It does not cover the border area.
    // It does cover the padding + content area.

    return (

        <>
            <div style={{ marginTop: "0.5rem" }}>
                <style>{styles}</style>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    {images
                        .filter(src => !brokenImages.has(src)).map((src, idx) => {
                            const sizeClass = idx % 2 === 0 ? "short" : "tall";
                            return(
                                <div
                                className={`masonry-item ${sizeClass}`}
                                key={idx}
                            >
                                <img src={src} alt={`masonry-${idx}`}
                                    onError={() => handleImageError(src)} />
                                <div className="overlay">
                                    <button className="hover-btn" onClick={() => alert("Save " + idx)}>Save</button>
                                    <button className="hover-btn secondary" onClick={() => alert("Like " + idx)}>Like</button>
                                </div>
                            </div>
                            );
                            })}
                </Masonry>
            </div>
        </>
    );
}
export default HomeFeed;