import Header from "./components/Header";
import LinkRoutes from "./components/LinkRoutes";

function App() {
  const personalDetails = {
    name: "Colton Taylor-Ortiz",
    location: "Bellingham, WA",
    email: "colton1105@gmail.com",
    availability: "Open for work",
    brand: "Hey there! I'm currently enrolled in the Full Stack Web-developer program at the University of Washington and learning the ins and outs of web development. I've got a bunch of skills up my sleeve, like HTML, CSS, JavaScript, Bootstrap, and React, which allow me to create websites that not only look great but also work smoothly.",
    expertise: "When it comes to building back-end infrastructure, I'm your go-to person. I know my way around Node.js, OOP, Express, MongoDB, MySQL, Sequelize, and MERN stack apps, which help me create robust and intricate systems.",
    collaboration: "Throughout my career, I've worked on many different projects and collaborated with different teams. I'm a great team player, and I'm always happy to direct and collaborate with others to achieve shared goals."    
  };

  return (
    <>
      <Header />
      <LinkRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
