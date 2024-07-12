import BackgroundBeams from "./components/BacgroundBeams";
import MovingCards from "./components/MovingCards";
import StickyScrollReveal from "./components/StickyScrollReveal";
import "./global.css";

function HeroSection() {
  const testimonials = [
    {
      name: "Sarah, Project Manager",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur dolor eget neque semper, et sagittis velit fermentum. Sed et erat et purus malesuada faucibus.",
      title: "Worked together at Acme web Agency",
    },
    {
      name: "Mark, CEO",
      quote:
        "Proin faucibus, quam vel tristique pellentesque, enim velit dignissim lectus, non consectetur risus velit ut felis. Nullam nec ipsum vel nulla dignissim sollicitudin.",
      title: "Founder of 123 Design Studio",
    },
    {
      name: "Lisa, Lead Developer",
      quote:
        "Proin faucibus, quam vel tristique pellentesque, enim velit dignissim lectus, non consectetur risus velit ut felis. Nullam nec ipsum vel nulla dignissim sollicitudin.",
      title: "Worked together at XYZ Tech Firm",
    },
    {
      name: "James, CTO",
      quote:
        "Proin faucibus, quam vel tristique pellentesque, enim velit dignissim lectus, non consectetur risus velit ut felis. Nullam nec ipsum vel nulla dignissim sollicitudin.",
      title: "Hired Christ at ABC Web Services",
    },
    {
      name: "Emma, Web Developer",
      quote:
        "Proin faucibus, quam vel tristique pellentesque, enim velit dignissim lectus, non consectetur risus velit ut felis. Nullam nec ipsum vel nulla dignissim sollicitudin.",
      title: "Worked with Christ at Startup Hub",
    },
  ];

  return (
    <div className="w-full h-screen bg-black bg-grid-white/[0.1] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center, transparent_1%,black)]"></div>
      <div className="w-full h-full flex flex-col items-center justify-center gap-32">
        <div className="w-full max-w-5xl h-1/2 flex flex-col-reverse sm:flex-row items-center gap-8 md:gap-16 text-left">
          <div className="w-full h-1/2 sm:h-full flex flex-col items-center sm:px-6">
            <p className="text-4xl sm:text-7xl font-bold reletive z-20 py-8">
              Hello Friend!
            </p>
            <p className="text-zinc-500 font-semibold text-center sm:text-left z-30">
              I'm a passionate Full-stack web developer with over a year of
              experience bulding stunning, responsives websites and web
              applications. Originally from Ivory Cost.
            </p>
          </div>

          <div className="w-full sm:w-full h-1/2 sm:h-full flex items-center justify-center px-12 sm:px-6">
            <p className="text-4xl sm:text-7xl font-bold relative z-20">
              I'm Christ
            </p>
          </div>
        </div>

        <div className="w-full max-w-5xl h-1/2 flex gap-4 flex-col items-center">
          <h3 className="font-bold text-2xl sm:text-4xl text-center">
            {" "}
            What did my collegues say ?
          </h3>
          <MovingCards items={testimonials} speed="slow" className="w-full" />
        </div>
      </div>
    </div>
  );
}

function ProjectsSection() {
  const content = [
    {
      title: "To-Do Web Application",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur dolor eget neque semper, et sagittis velit fermentum. Sed et erat et purus malesuada faucibus.",
    },
    {
      title: "Weather Dashboard",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur dolor eget neque semper, et sagittis velit fermentum. Sed et erat et purus malesuada faucibus.",
    },
    {
      title: "Book Library Manager",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur dolor eget neque semper, et sagittis velit fermentum. Sed et erat et purus malesuada faucibus.",
    },
    {
      title: "Travel Planner Web App",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur dolor eget neque semper, et sagittis velit fermentum. Sed et erat et purus malesuada faucibus.",
    },
    {
      title: "Recipe Box",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur dolor eget neque semper, et sagittis velit fermentum. Sed et erat et purus malesuada faucibus.",
    },
    {
      title: "Social Network",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur dolor eget neque semper, et sagittis velit fermentum. Sed et erat et purus malesuada faucibus.",
    },
  ];

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center gap-16">
      <h2 className="text-5xl font-bold">My Projects</h2>
      <StickyScrollReveal content={content} />
    </div>
  );
}

function ContactSection() {
  return (
    <div className="h-screen w-full bg-black rekative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 flex flex-col gap-2">
        <h2 className="relative z-10 text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Contact Me
        </h2>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Do you have an exciting project, want to hire me, or maybe just chat?
          Feel free to leave an email down below!
        </p>
        <input
          type="text"
          placeholder="example@email.com"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-blue-500 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700 p-2"
        />
      </div>
      <BackgroundBeams />
    </div>
  );
}

function App() {
  return (
    <div className="h-fit w-full text-white">
      <HeroSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

export default App;
