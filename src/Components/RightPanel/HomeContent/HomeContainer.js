import { useEffect, useState, useMemo } from "react";
import './HomeContainer.css';

const HomeContainer = () => {
    const [post, setPost] = useState("");
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [adding, setAdding] = useState(true);

    const positions = useMemo(() => ["Full Stack Developer", "Coder", "Full-Time Code Maverick", "Tech Wizard"], []);

    useEffect(() => {
        const interval = setInterval(() => {
            setPost((prevPost) => {
                if (adding) {
                    if (charIndex < positions[index].length) {
                        setCharIndex(charIndex + 1);
                        return positions[index].slice(0, charIndex + 1);
                    } else {
                        setAdding(false);
                        return prevPost;
                    }
                } else {
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
        }, 150);

        return () => clearInterval(interval);
    }, [adding, charIndex, index, positions]);

    return (
        <div className="dp-home">
            <div className="dp-home-container">
                <div className="dp-home-container__my-name">Rishabh Kanathe</div>
                <div className="dp-home-container__my-post">
                    I am <span>{post}</span>
                </div>
            </div>
        </div>
    );
};

export default HomeContainer;
