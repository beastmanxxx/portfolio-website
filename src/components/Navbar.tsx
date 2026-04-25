import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";
import HireModal from "./HireModal";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          if (section) {
            const target = document.querySelector(section) as HTMLElement;
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
            }
          }
        }
      });
    });
  }, []);
  return (
    <>
      <div className="header">
        <button
          className="navbar-hire-btn"
          onClick={() => setIsModalOpen(true)}
          data-cursor="disable"
        >
          Hire Me!
        </button>
        <a
          href="mailto:moghaeashu@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          moghaeashu@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>

      <HireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Navbar;
