import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  useEffect(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[
            {
              name: "Ficokart",
              category: "E-commerce",
              tools: "html, html5, css, javascript, node.js, Firebase",
              image: "/images/project1.png"
            },
            {
              name: "Trade Mastery",
              category: "Trading Course",
              tools: "html, css, js, firebase, gsap",
              image: "/images/project2.png"
            },
            {
              name: "Trade Well",
              category: "Trading Application",
              tools: "React, firebase",
              image: "/images/project3.png"
            },
            {
              name: "bolt999",
              category: "gambling application",
              tools: "React, firebase",
              image: "/images/project4.png"
            },
            {
              name: "Project Name",
              category: "Category",
              tools: "Javascript, TypeScript, React, Threejs",
              image: "/images/placeholder.webp"
            },
            {
              name: "Project Name",
              category: "Category",
              tools: "Javascript, TypeScript, React, Threejs",
              image: "/images/placeholder.webp"
            }
          ].map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
