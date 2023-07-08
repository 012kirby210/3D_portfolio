import React from "react";

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from "framer-motion";

import 'react-vertical-timeline-component/style.min.css'

import { style } from '../style.js';
import { SectionWrapper } from '../hoc';
import { experiences } from "../constants/index.js";
import { textVariant } from "../utils/motion.js";

const ExperienceCard = ( { experience } ) => {
    return (
        <VerticalTimelineElement
            contentStyle={{background: "#1d1836", color:"#fff"}}
            contentArrowStyle={{borderRight: '7px solid #232631'}}
            date={experience.date}
            iconStyle={{background: experience.iconBg}}
            icon={
                <span className="flex justify-center items-center w-full h-full">
                    <img src={experience.icon}
                         alt={experience.company_name}
                         className="w-full h-full object-contain" />
                </span>
            }
        >
            <div>
                <h3 className="text-white test-[24px] font-bold">{experience.title}</h3>
                <p className="text-secondary text-[16px] font-semibold" style={{margin:0}}>
                    {experience.company_name}
                </p>
            </div>

            <ul className="mt-5 list-disc ml-5 space-y-2">
                { experience.points.map( (point,index) => (
                  <li key={index}
                    className="text-white-100 text-[14px] pl-1 tracking-wider"
                  >
                      {point}
                  </li>
                ))}
            </ul>

        </VerticalTimelineElement>

    ) ;
}

const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={style.sectionSubText}>Experience</p>
                <h2 className={style.sectionHeadText}>Work Experience.</h2>
            </motion.div>
            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {experiences.map( (exp, index)=> (
                            <ExperienceCard key={index} experience={exp} />
                        )
                    )}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(Experience, 'work');