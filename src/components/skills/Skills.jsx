import React from 'react';
import './Skills.css';
import { SiSwagger } from 'react-icons/si';
import { SiHtml5,SiDjango,SiCss3,SiAngular,SiJunit5,SiMysql,SiPostgresql,SiMongodb,SiAmazonaws,SiMicrosoftazure,
    SiJira,SiTypescript,SiPython, SiJavascript, SiReact, SiNodedotjs, SiJava, SiSpringboot, SiDocker,SiC,SiCsharp, 
    SiPostman,SiKubernetes,SiJenkins,SiGit,SiOracle} from "react-icons/si";

const skills = [
    { id: 1, icon: <SiJava size={50} color="#f89820"/>, name: 'Java' },
    { id: 2, icon: <SiReact size={50} color="#61dbfb"/>, name: 'React' },
    { id: 3, icon: <SiNodedotjs size={50} color="#68A063" />, name: 'Node.js' },
    { id: 4, icon: <SiJavascript size={50} color="#F0DB4F"/>, name: 'JavaScript'},
    { id: 5, icon: <SiSpringboot size={50} color="#6DB33F"/>, name: 'Spring Boot' },
    { id: 6, icon: <SiDocker size={50} color="#1D63ED"/>, name: 'Docker' },
    { id: 7, icon: <SiC size={50} color="#555555"/>, name:'C'},
    { id: 8, icon: <SiCsharp size={50} color="#9179E4"/>, name:'CSharp'},
    { id: 9, icon: <SiPython size={50} color="#ffde57"/>, name:'Python'},
    { id: 10, icon: <SiTypescript size={50} color="#3178C6"/>, name:'TypeScript'},
    { id: 11, icon: <SiHtml5 size={50} color="#00FF00"/>, name:'HTML'},
    { id: 12, icon: <SiCss3 size={50} color="#2965f1"/>, name:'CSS3'},
    { id: 13, icon: <SiDjango size={50} color="#092E20"/>, name:'Django'},
    { id: 14, icon: <SiAngular size={50} color="#C3002F"/>, name:'Angular'},
    { id: 15, icon: <SiJunit5 size={50} color="#ED8B00"/>, name:'Junit5'},
    { id: 16, icon: <SiMysql size={50} color="#00758f"/>, name:'Mysql'},
    { id: 17, icon: <SiPostgresql size={50} color="#0064A5"/>, name:'Postgresql'},
    { id: 18, icon: <SiMongodb size={50} color="#00ed64"/>, name:'Mongodb'},
    { id: 19, icon: <SiAmazonaws size={50} color="#FF9900"/>, name:'Amazonaws'},
    { id: 20, icon: <SiMicrosoftazure size={50} color="#007FFF"/>, name:'Azure'},
    { id: 21, icon: <SiJira size={50} color="#0052CC"/>, name:'Jira'},
    { id: 22, icon: <SiPostman size={50} color="#EF5B25"/>, name:'Postman'},
    { id: 23, icon: <SiDocker size={50} color="#2496ED"/>, name:'Docker'},
    { id: 24, icon: <SiKubernetes size={50} color="#326CE5"/>, name:'Kubernetes'},
    { id: 25, icon: <SiJenkins size={50} color="#D24939" />, name: 'Jenkins' },
    { id: 26, icon: <SiGit size={50} color="#F05032" />, name: 'Git' },
    { id: 27, icon: <SiSwagger size={50} color="#85EA2D" />, name: 'REST API' },
    { id: 52, icon: <SiOracle size={50} color="#F80000" />, name: 'Oracle SQL' },
];

const Skills = () => {
    return (
        <section className="skills container section" id="skills">
            <h2 className="section__title">Skills</h2>

            <div className="skills__container grid">
                {skills.map(({ id, icon, name }) => (
                    <div className="skills__card" key={id}>
                        <div className="skills__icon">{icon}</div>
                        <h3 className="skills__title">{name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;