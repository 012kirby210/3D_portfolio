import React from "react";

import { useState, useRef } from "react";

import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

import { style } from '../style.js';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from "../utils/motion.js";

const Contact = () => {
    const formRef  = useRef();
    const [ form, setForm ] = useState({
        name: '',
        email:'',
        message: '',
    });
    const [ loading, setLoading ] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm({...form, [name]: value});
    }

    const handleSubmit = (event) => {

        event.preventDefault();
        // setLoading(true);

        //

    }

    return (
        <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10
        overflow-hidden">
            <motion.div
                variants={slideIn('left','tween',0.2,1)}
                className="flex-[0.75] bg-black-100 rounded-2xl p-8"
            >
                <p className={`${style.sectionSubText}`}>
                    Get In Touch
                </p>
                <h3 className={`${style.sectionHeadText}`}>Contact.</h3>
                <form ref={formRef}
                    onSubmit={handleSubmit}
                      className="mt-12 flex flex-col gap-8"
                >
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your name</span>
                        <input type="text" name="name" value={form.name}
                            onChange={handleChange}
                               placeholder="What's your name"
                               className="bg-tertiary py-4 px-6 placeholder:text-secondary
                               text-white rounded-lg outlined-none border-none font-medium"

                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your name</span>
                        <input type="email" name="email" value={form.email}
                               onChange={handleChange}
                               placeholder="What's your email"
                               className="bg-tertiary py-4 px-6 placeholder:text-secondary
                               text-white rounded-lg outlined-none border-none font-medium"

                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your message</span>
                        <textarea
                            rows="7"
                            name="message" value={form.message}
                               onChange={handleChange}
                               placeholder="What's your message"
                               className="bg-tertiary py-4 px-6 placeholder:text-secondary
                               text-white rounded-lg outlined-none border-none font-medium"

                        />
                    </label>
                    <button
                        type="submit"
                        className="bg-tertiary py-3 px-8 outline-none w-fit font-bold
                        shadow-md shadow-primary rounded-xl"
                    >
                        { loading ? 'Sending...' : 'Send'}
                    </button>
                </form>
            </motion.div>
            <motion.div
                variants={slideIn('right','tween',0.2,1)}
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
            >
                <EarthCanvas />
            </motion.div>
        </div>
    );
};

export default SectionWrapper( Contact, 'contact');