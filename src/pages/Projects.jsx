import { Link } from "react-router-dom";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import { coder } from "../assets/images";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text items-center">
        My{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Projects!
        </span>
        📜
      </h1>

      <div className="text-slate-600 mt-2 leading-relaxed">
        I've embarked on numerous projects throughout the years, but these are
        some of the closest to my heart. Many of them are public and
        open-source, so if you come across something that diminishes your
        interest, feel free to explore the codebase and contribute your ideas
        for further enhancements. Your collaboration is highly valued!
        <p className="mt-2 text-xs">
          All projects are hosted on{" "}
          <span className="underline">Vercel free tier!</span> So, some actions
          can cause response time errors (e.g. Video generation on Genius).
        </p>
      </div>

      <div className="flex flex-wrap mt-20 mb-14 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <Link
                to={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-front rounded-xl flex justify-center items-center"
              >
                <img
                  src={project.iconUrl}
                  alt="threads"
                  className="w-5/6 h-5/6 object-contain rounded-xl"
                />
              </Link>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-600">{project.description}</p>
              <p className="mt-2 text-slate-600">
                <strong>Features: </strong>
                {project.features}
              </p>
              <div className="mt-3 flex items-center gap-2 font-poppins ">
                <Link
                  to={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:blue-gradient_text drop-shadow hover:font-semibold hover:scale-105"
                >
                  Code
                </Link>
                {project?.intro && (
                  <Link
                    to={project.intro}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:blue-gradient_text drop-shadow hover:font-semibold hover:scale-105 ml-4"
                  >
                    Intro
                  </Link>
                )}
                <div className="flex items-center justify-center gap-2 ml-4">
                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:blue-gradient_text drop-shadow hover:font-semibold"
                  >
                    Live Link
                  </Link>
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="h-[280px] md:h-[350px] mb-8">
        <img
          src={coder}
          className="w-[280px] md:w-[350px] h-full shrink-0 m-auto  rounded-full border-[1px] border-black/70 text-transparent animate-custom-bounce transition-all"
        />
      </div>
      <hr className="border-slate-400" />
      <CTA />
    </section>
  );
};

export default Projects;
