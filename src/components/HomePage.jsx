// import { Link } from "react-router-dom";
// import './HomePage.css';

// function HomePage() {
//     document.title = "HomePage";
//     return (
//         <div className="home-container">
//             <h1 className="home-title">Welcome to BlogEase</h1>
            
//             <p className="home-description">
//                 BlogEase is a streamlined mobile app that lets users easily create, edit, and publish blog posts directly from their phones. 
//                 It offers simple tools for adding text and images, and allows for quick sharing to social media, making it perfect for anyone 
//                 who wants to manage their blog on the go and keep their content updated effortlessly.
//             </p>

//             <Link to="/blog">
//                 <button className="home-button">Go to Blog Page</button>
//             </Link>
//         </div>
//     );
// }

// export default HomePage;

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import './HomePage.css';

import banner1 from "../assets/Images/banner1.jpg";
import banner2 from "../assets/Images/banner2.jpg";
import banner3 from "../assets/Images/banner3.jpg";
import banner4 from "../assets/Images/banner4.jpg";

const images = [banner1, banner2, banner3, banner4];

function HomePage() {
    document.title = "HomePage";
    const [current, setCurrent] = useState(0);

    // Auto-swipe every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const prevSlide = () => setCurrent((current - 1 + images.length) % images.length);
    const nextSlide = () => setCurrent((current + 1) % images.length);

    return (
        <div className="home-container">
            <div className="carousel">
                <img src={images[current]} alt={`banner${current + 1}`} className="carousel-img" />
            </div>
            <h1 className="home-title">Welcome to BlogEase</h1>
            <p className="home-description">
                BlogEase is a streamlined mobile app that lets users easily create, edit, and publish blog posts directly from their phones. 
                It offers simple tools for adding text and images, and allows for quick sharing to social media, making it perfect for anyone 
                who wants to manage their blog on the go and keep their content updated effortlessly.
            </p>
            <Link to="/blog">
                <button className="home-button">Go to Blog Page</button>
            </Link>
        </div>
    );
}

export default HomePage;