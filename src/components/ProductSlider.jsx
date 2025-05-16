    import { useState, useEffect, useRef } from "react";
    import Bhimesemi_100gm from "../assets/1 Bhimesemi 100gm.png";
    import bhimeseni_50_gm from "../assets/bhimeseni_50_gm.png";
    import Regular_100_gm_pouch from "../assets/Regular_100_gm_pouch.png";
    import Regular_10_gm from "../assets/Regular_10_gm.png";
    import regular_130_tablets from "../assets/regular_130_tablets.png";
    import Regular_200_gm_and_250_gm_pouch from "../assets/Regular_200_gm_and_250_gm_pouch.png";
    import Regular_20_gm_ from "../assets/Regular_20_gm_.png";
    import Regular_20_tablets from "../assets/Regular_20_tablets.png";
    import Regular_40gm_and_50_gm from "../assets/Regular_40gm_and_50_gm.png";
    import Regular_5_gm from "../assets/Regular_5_gm.png";
    import Regular_60_tablets from "../assets/Regular_60_tablets.png";
    import Regular_60_tablets_1 from "../assets/Regular_60_tablets_1.png";
    import regular_dabbi_15_gm from "../assets/regular_dabbi_15_gm.png";
    import regular_dabbi_5_gm from "../assets/regular_dabbi_5_gm.png";
    import  "./ProductSlider.css";

    const ProductSlider = () => {
    const [isPaused, setIsPaused] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const sliderRef = useRef(null);

    useEffect(() => {
        const checkMobile = () => {
        setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const slides = [
        { image: Bhimesemi_100gm, title: "Bhimesemi 100gm", description: "99.9% pure pharmaceutical grade camphor" },
        { image: bhimeseni_50_gm, title: "Bhimeseni 50gm", description: "State-of-the-art manufacturing facility" },
        { image: Regular_100_gm_pouch, title: "Regular 100gm Pouch", description: "Advanced quality control measures" },
        { image: regular_130_tablets, title: "Regular 130 Tablets", description: "Airtight and moisture-resistant packaging" },
        { image: Regular_10_gm, title: "Regular 10gm", description: "Sourced from premium suppliers" },
        { image: Regular_200_gm_and_250_gm_pouch, title: "Regular 200gm & 250gm Pouch", description: "Sourced from premium suppliers" },
        { image: Regular_20_gm_, title: "Regular 20gm", description: "Sourced from premium suppliers" },
        { image: Regular_20_tablets, title: "Regular 20 Tablets", description: "Sourced from premium suppliers" },
        { image: Regular_40gm_and_50_gm, title: "Regular 40gm & 50gm", description: "Sourced from premium suppliers" },
        { image: Regular_5_gm, title: "Regular 5gm", description: "Sourced from premium suppliers" },
        { image: Regular_60_tablets, title: "Regular 60 Tablets", description: "Sourced from premium suppliers" },
        { image: Regular_60_tablets_1, title: "Regular 60 Tablets", description: "Sourced from premium suppliers" },
        { image: regular_dabbi_15_gm, title: "Regular Dabbi 15gm", description: "Sourced from premium suppliers" },
        { image: regular_dabbi_5_gm, title: "Regular Dabbi 5gm", description: "Sourced from premium suppliers" },
    ];

    return (
        <div className="sliderOuterContainer">
        <div className="container">
            <div className="header">
            <h2>OUR PRODUCTS</h2>
            </div>
            <div className="sliderContainer">
            <div
                ref={sliderRef}
                className={`sliderTrack ${isPaused ? "paused" : ""} ${isMobile ? "mobile" : "desktop"}`}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
            >
                {[...slides, ...slides, ...slides].map((slide, index) => (
                <div key={index} className="slide" onClick={() => setSelectedImage(slide.image)}>
                    <div className="slideInner">
                    <img src={slide.image} alt={slide.title} className="slideImage" />
                    </div>
                </div>
                ))}
            </div>
            </div>
        </div>

        {selectedImage && (
            <div className="modalOverlay" onClick={() => setSelectedImage(null)}>
            <div className="modalContent" onClick={(e) => e.stopPropagation()}>
                <button className="closeButton" onClick={() => setSelectedImage(null)}>×</button>
                <img src={selectedImage} alt="Enlarged view" className="modalImage" />
            </div>
            </div>
        )}
        </div>
    );
    };

    export default ProductSlider;