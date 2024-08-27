import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

const Skills = () => {
  return (
    <div className={styles.skillsContainer} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.skills}>
        {skills.map((skill, id) => (
          <div key={id} className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
            </div>
            <p>{skill.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const ExperienceHistory = () => {
  return (
    <div className={styles.historyContainer}>
      <h2 className={styles.title}>Experience</h2>
      <ul className={styles.history}>
        {history.map((historyItem, id) => (
          <li key={id} className={styles.historyItem}>
            <img
              src={getImageUrl(historyItem.imageSrc)}
              alt={`${historyItem.organisation} Logo`}
            />
            <div className={styles.historyItemDetails}>
              <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
              <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
              <ul>
                {historyItem.experiences.map((experience, id) => (
                  <li key={id}>{experience}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <Skills />
      <ExperienceHistory />
    </section>
  );
};
