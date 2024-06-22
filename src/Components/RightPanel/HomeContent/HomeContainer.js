import { useEffect, useState } from "react";
import './HomeContainer.css'

const HomeContainer = () => {
    const positions = ["Full Stack Developer", "Coder", "Full-Time Code Maverick", "Tech Wizard"];
    const [post, setPost] = useState("");
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [adding, setAdding] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setPost((prevPost) => {
                if (adding) {
                    // Add characters one by one
                    if (charIndex < positions[index].length) {
                        setCharIndex(charIndex + 1);
                        return positions[index].slice(0, charIndex + 1);
                    } else {
                        setAdding(false);
                        return prevPost;
                    }
                } else {
                    // Remove characters one by one
                    if (charIndex > 0) {
                        setCharIndex(charIndex - 1);
                        return positions[index].slice(0, charIndex - 1);
                    } else {
                        setAdding(true);
                        setIndex((prevIndex) => (prevIndex + 1) % positions.length);
                        return "";
                    }
                }
            });
        }, 100);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [adding, charIndex, index, positions]);

    return (
        <div className="dp-home">
        <div className="dp-home-container">
            <div className="dp-home-container__my-name">Rishabh Kanathe</div>
            <div className="dp-home-container__my-post">I am {post}</div>
        </div>
        </div>
    );
};

export default HomeContainer;
