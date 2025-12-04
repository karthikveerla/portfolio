// Education.jsx
import React, { useState } from "react";
import "../resume/Resume.css"; // Reuse same styling
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Button from "../resume/Button";
import EducationData from "./EducationData";

const Education = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <section className="resume container section" id="education">
      <h2 className="section__title">Education</h2>

      <div className="resume__container">
        <Tabs
          className="tabs"
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
          selectedTabClassName={"is-active"}
          selectedTabPanelClassName={"is-active"}
        >
          <TabList className="tab__list">
            {EducationData.map((edu, index) => {
              const { id, institution } = edu;
              return (
                <Tab className="tab" key={`institution-${id}`}>
                  <Button>{institution}</Button>
                </Tab>
              );
            })}
          </TabList>

          {EducationData.map((edu) => {
            const { id, degree, institution, yearsActive, information } = edu;
            return (
              <TabPanel className="tab__panel" key={`panel-${id}`}>
                <h2 className="tab__panel-title">
                  {degree} @ {institution}
                </h2>
                <p className="tab__panel-subtitle">{yearsActive}</p>
                <ul className="tab__panel-list">
                  {information.map((info, index) => (
                    <li key={`edu-info-${index}`}>{info}</li>
                  ))}
                </ul>
              </TabPanel>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};

export default Education;