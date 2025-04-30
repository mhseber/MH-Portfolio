import About from "./About";
import Contact from "./Contact";
import MHIntro from "./MHIntro";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <div>
      <MHIntro></MHIntro>
      <Skills></Skills>
      <Projects></Projects>
      <About></About>
      <Contact></Contact>
    </div>
  );
};

export default Home;
