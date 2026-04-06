import { useEffect, useState } from 'react';

const SavedPins = () => {

    let saved = JSON.parse(localStorage.getItem("savedPins")) || [];
    console.log(saved);
    return (

        <div style={{
            // backgroundColor: "red",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "5px",
        }}>
            {saved.length === 0 ? (
                <p style={{
                    display: "flex", justifyContent: "center", alignItems: "center",
                }}> No Saved Pins, Save Pins to see them here!!! </p>) : (
                saved.map((src, i) => {
                    return (
                        <img
                            key={i}
                            src={src}
                            style={{ width: "250px", height: "230px", margin: "10px", borderRadius: "12px" }}
                        />);
                })
            )}
        </div>
    );
}

export default SavedPins;