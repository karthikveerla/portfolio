import React, { useState } from "react";
import "./Project.css";
import Menu from "./Menu";
import { RiGithubLine } from "react-icons/ri";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"; // Added icons for buttons
// Removed motion and AnimatePresence imports

const Project = () => {
  const [index, setIndex] = useState(0);

  const project = Menu[index];

  // Function to handle moving to the next project
  const handleNext = () => {
    setIndex((prev) => (prev === Menu.length - 1 ? 0 : prev + 1));
  };

  // Function to handle moving to the previous project
  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? Menu.length - 1 : prev - 1));
  };

  // Removed transition variants

  return (
    <section className="project-container section" id="Project">
      <h2 className="section__title">Projects</h2>

      <div className="project__carousel-wrapper">
        
        {/* Previous Button */}
        <button className="carousel__button prev" onClick={handlePrev}>
            <FaAngleLeft />
        </button>

        <div className="project__carousel">
          {/* Using a standard div, no transitions */}
          <div
            key={project.id}
            className="project__card"
            // Removed onClick={handleCardClick}
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
          </div>
        </div>

        {/* Next Button */}
        <button className="carousel__button next" onClick={handleNext}>
            <FaAngleRight />
        </button>

      </div>

      <div className="project__pagination">
        {Menu.map((_, i) => (
          <button
            key={i}
            className={`pagination-dot ${i === index ? "active" : ""}`}
            onClick={() => {
              setIndex(i);
            }}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Project;