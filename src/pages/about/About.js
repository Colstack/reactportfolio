import AboutMe from "../../components/AboutMe";
import PageHeader from "../../components/PageHeader";

const About = ({ name, location, brand, expertise, collaboration, email, availability }) => {
  return (
    <section className="about">
      <PageHeader title="About Me" description="Let me introduce myself" />
      <AboutMe name={name} location={location} brand={brand} expertise={expertise} collaboration={collaboration} email={email} availability={availability} />
    </section>
  );
};

export default About;
