import React, { useState } from "react";
import "./Project.css";
import Menu from "./Menu";
import { RiGithubLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

const Project = () => {
  const [index, setIndex] = useState(0);
  const project = Menu[index];

  const handleCardClick = (e) => {
    const clickX = e.nativeEvent.offsetX;
    const cardWidth = e.currentTarget.offsetWidth;
    if (clickX < cardWidth / 2) {
      setIndex((prev) => (prev === 0 ? Menu.length - 1 : prev - 1));
    } else {
      setIndex((prev) => (prev === Menu.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <section className="project-container section" id="Project">
      <h2 className="section__title">Projects</h2>
      <div className="project__carousel-wrapper">
        <div className="project__carousel">
        <AnimatePresence mode="wait">
  <motion.div
    key={project.id}
    initial={{ opacity: 0, y: 50 }} // Start slightly below
    animate={{ opacity: 1, y: 0 }}  // Slide to the normal position
    exit={{ opacity: 0, y: -50 }}   // Slide back when exiting
    transition={{
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96],
    }}
    className="project__card"
    onClick={handleCardClick}
  >

              <div className="project__thumbnail">
                <img src={project.image} alt={project.title} className="project__img" />
                <div className="project__mask"></div>
              </div>
              <div className="project__content">
                <h3 className="project__title">{project.title}</h3>
                <p className="project__description">{project.description}</p>
                <div className="project__links">
                  <a href={project.repositoryUrl} target="_blank" rel="noreferrer" className="project__github-button">
                    <RiGithubLine className="project__button-icon" />
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="project__pagination">
        {Menu.map((_, i) => (
          <button
            key={i}
            className={`pagination-dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to project ${i + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Project;