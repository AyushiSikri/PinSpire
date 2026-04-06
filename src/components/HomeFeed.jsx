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
    // background: clickSave ? rgba(255,255,255,0.95): rgba(219, 32, 32, 0.95);
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

  const [images, setImages] = useState([{ src: "", saved: false }]);
  const [category, setCategory] = useState([]);
  const [clickSave, setCLickSave] = useState(false);


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
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
          },
          body: JSON.stringify(category)
        });
        const data = await res.json();
        console.log("Categories:", category);
        console.log("Images from API:", data);
        //console.log("Sucessful List get", data);
        setImages(data.map((url, i) => ({
          id: i,
          src: url,
          saved: false
        })));
        // setImages(data);
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
            .filter(src => !brokenImages.has(src)).map((img, idx) => {
              const sizeClass = idx % 2 === 0 ? "short" : "tall";
              return (
                <div
                  className={`masonry-item ${sizeClass}`}
                  key={idx}
                >
                  <img src={img.src} alt={`masonry-${idx}`}
                    onError={() => handleImageError(img.src)} />
                  <div className="overlay">
                    <button style={{
                      background: img.saved ? "#c96bba" : "rgba(255,255,255,0.95)", color: img.saved ? "rgba(255,255,255,0.95)" : "black"
                    }} className="hover-btn" onClick={() => {
                      //chhecck  logic of save button
                      setImages(prev =>
                        prev.map(item =>
                          item.id === img.id ? { ...item, saved: !item.saved } : item
                        )
                      );

                      let savedPins = JSON.parse(localStorage.getItem("savedPins")) || [];
                      savedPins.push(img.src);
                      localStorage.removeItem("savedPins");
                      localStorage.setItem("savedPins", JSON.stringify(savedPins));
                      console.log(img.src + " saved" + " " + img.saved);

                    }}>Save</button>
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