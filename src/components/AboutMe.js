import { motion } from "framer-motion";
import SocialIcons from "../components/SocialIcons";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import resume from "../pages/about/RESUME2023v3.docx.pdf"

const AboutMe = ({ name, email, location, availability, brand, expertise, collaboration}) => {
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    const [downloading, setDownloading] = useState(false);

    useEffect(() => {
        setDownloading(false);
    }, [downloading]);

    const handleDownload = () => {
        setDownloading(true);
        const link = document.createElement("a");
        link.href = resume;
        link.download = "RESUME2023v3.docx.pdf";
        link.onload = () => {
            link.remove();
            setDownloading(false);
        };
        document.body.appendChild(link);
        link.click();
    };

    return (
        <div className="aboutContainer container">
            <div className="row">
                <motion.div 
                className="personalInfo col-12 col-lg-8"
                ref={ref}
                initial={{ x: "10vw", opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                    <div className="contentContainer">
                        <h4>Hello there!</h4>
                        <h5>Full stack web developer that creates digital masterpieces!</h5>
                        <div className="contentDescription">
                            <p>{brand}</p>
                            <p className="space"></p>
                            <p>{expertise}</p>
                            <p className="space"></p>
                            <p>{collaboration}</p>
                        </div>
                        <div className="infoContainer">
                            <div className="row">
                                <div className="col-12 col-md-6 info">
                                    <span>Email:</span>
                                    <p>
                                        <a href={`mailto:${email}`}>{email}</a>
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-6 info">
                                    <span>Location:</span>
                                    <p>{location}</p>
                                </div>
                                <div className="col-12 col-md-6 availability info">
                                    <span>availability:</span>
                                    <p>{availability}</p>
                                </div>
                            </div>
                        </div>
                        <div className="buttonContainer">
                            <button className="btn downloadCV" onClick={handleDownload} disabled={downloading}>
                                {downloading ? "Downloading..." : "Download Resume"}
                            </button>{" "}
                            <SocialIcons />
                        </div>
                    </div>
                </motion.div>
            </div>

        </div>
    );
};

export default AboutMe;