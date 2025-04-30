import About from "./About";
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
    </div>
  );
};

export default Home;
