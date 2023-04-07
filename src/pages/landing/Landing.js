import Typewriter from "typewriter-effect";
import SocialIcons from "../../components/SocialIcons";

const Landing = ({ name }) => {
    const styles = {
        landing: {
            height: "calc(100% - 93px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },

        textContainer: {
            display: "flex",
            flexDirection: "column",
            letterSpacing: "1px",
            textAlign: "center",
            color: "#fff",
            textShadow: "1px 1px 3px #000"
        },

        name: {
            color: "#fff",
            fontWeight: "700",
            marginTop: "-100px",
            paddingBottom: "25px",
        },
    };

    return (
        <section className="landing" style={styles.landing}>
            <div className="textContainer" style={styles.textContainer}>
                <h1 className="name" style={styles.name}>
                    {name}
                </h1>
                <div className="description">
                    <Typewriter 
                    className="description"
                    onInit={(typewriter) => {
                        typewriter 
                        .typeString("I'm a web developer")
                        .pauseFor(1500)
                        .deleteChars(13)
                        .typeString("Software Engineer")
                        .pauseFor(1500)
                        .deleteAll()
                        .typeString("Turning your ideas into reality!")
                        .start();
                    }}
                    />
                </div>
            </div>
            <SocialIcons />
        </section>
    );
};

export default Landing;