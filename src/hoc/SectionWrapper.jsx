import React from "react";

import { motion } from "framer-motion";
import { style } from '../style.js'

import { staggerContainer } from "../utils/motion.js";

const SectionWrapper = ( Component, idName) => {
    return function HOC() {

        return (
            <motion.section
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{once:true, amount: 0.25}}
                className={`${style.padding} max-w-7xl mx-auto relative z-0`}
            >
                <span className="hash-span" id={idName}>
                    &nbsp;
                </span>
                <Component />
            </motion.section>
        );
    };
}

export default SectionWrapper;