import Project from "../../components/Project"
import PageHeader from "../../components/PageHeader"

const Portfolio = () => {
    const ProjectList = () => 
    projectData.map((project, i) => (
        <Project 
        key={i}
        id={project.title}
        title={project.title}
        technology={project.technology}
        image={project.image}
        color={project.bcolor}
        github={project.github}
        deployed={project.deployed}
        description={project.description}
        />
    ));

    return (
        <section className="portfolio">
            <PageHeader title="Portfolio" description="My Work" />
            <div className="row">
                <ProjectList />
            </div>
        </section>
    );
};

export default Portfolio;