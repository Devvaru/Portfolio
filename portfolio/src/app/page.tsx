import "../../public/styles/global.css";
import Navigation from "./navigation";
import Projects from "./projects";

export default function Home() {
  return (
    <div>
      <Navigation />
      <main>
        <Projects />
      </main>
      <footer>
      </footer>
    </div>
  );
}
