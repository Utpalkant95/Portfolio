import React from "react";
import zomato from "../assets/zomato.png";
import imdb from "../assets/imdb.png";
import getInspirred from "../assets/get-inspirred.png";
import ecommerce from "../assets/ecommerce.png";

const Projects = () => {
    const projects = [
        {
          img: imdb,
          title: "IMDB",
          desc: " IMDB Clone. Built with React Js, Tailwind CSS, IMDB Api.User can view Popular, Top Rated, Upcoming Movies. ",
          live: "https://imdb-clone-ten-nu.vercel.app/",
          code: "https://github.com/Utpalkant95/imdb_Clone",
        },
        {
          img: ecommerce,
          title: "Ecommerce",
          desc: "Ecommerce Website made with React js, Tailwind Css.User can Add product to card and remove it also.",
          live: "https://imdb-clone-ten-nu.vercel.app/",
          code: "https://github.com/Utpalkant95/imdb_Clone",
        },
        {
          img: zomato,
          title: "Zomato",
          desc: "Zomato Frontend clone made with React Js, Tailwind CSS, Firebase.Use can also Login and Sign Up.",
          live: "https://zomato2-0-utpalkant95.vercel.app/",
          code: "https://github.com/Utpalkant95/Zomato2.0",
        }
      ]; 

  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>

          <p className="pb-5">
            These are some of my best projects. I have built these with React, CSS, Tailwind CSS, Firebase. Check them out.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative max-[768px]:py-4" key={i}>
              <img src={project.img} alt={project.title} className="h-[115%]"/>
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white text-sm">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.live}
                    className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
