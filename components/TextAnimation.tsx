/* eslint-disable @typescript-eslint/no-require-imports */

import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

// Utility to split text into spans
const splitText = (element: HTMLElement) => {
    console.log("sss");
    const text = element.textContent || "";
    element.textContent = ""; // Clear original text

    // Split text into words
    const words = text.split(" ").map((word) => {
        const wordDiv = document.createElement("div");
        wordDiv.classList.add("word");

        // Split word into characters and wrap each in a span
        const chars = word.split("").map((char) => {
            const span = document.createElement("span");
            span.textContent = char;
            return span;
        });

        // Append character spans to the word div
        chars.forEach((char) => wordDiv.appendChild(char));
        return wordDiv;
    });

    // Append word divs to the element
    words.forEach((wordDiv, index) => {
        element.appendChild(wordDiv);
        if (index < words.length - 1) {
            const space = document.createTextNode(" "); // Preserve spaces
            element.appendChild(space);
        }
    });

    return element.querySelectorAll(".word span");
};

interface TextAnimationProps {
    classname?: string;
    paragraph: string;
    owner: string;
    ownerDesignation: string;
}

const TextAnimation: React.FC<TextAnimationProps> = ({ paragraph, owner, ownerDesignation, classname }) => {
    const sectionRefs = useRef<HTMLDivElement[]>([]);

    const addToRefs = (el: HTMLDivElement) => {
        if (el && !sectionRefs.current.includes(el)) {
            sectionRefs.current.push(el);
        }
    };


    useEffect(() => {
        if (typeof window !== "undefined") {
            const { gsap } = require("gsap");
            const { ScrollTrigger } = require("gsap/ScrollTrigger");

            if (gsap && ScrollTrigger) {
                gsap.registerPlugin(ScrollTrigger);
            }
        }
    }, []);

    useEffect(() => {
        if (!gsap || !ScrollTrigger) return;

        const createSplitAnimation = () => {
            sectionRefs.current.forEach((section) => {
                const textWrapper = section.querySelector(".custom-container");
                const pElements = textWrapper?.querySelectorAll("h2");

                pElements?.forEach((p) => {
                    const chars = splitText(p);

                    // Create GSAP animation
                    const timeline = gsap.timeline({
                        scrollTrigger: {
                            trigger: section,
                            start: "top 60%",
                            end: "+=30%",
                            scrub: 0.75,
                        },
                    });

                    timeline.to(chars, {
                        color: "#FFFFFF",
                        stagger: 0.9,
                        duration: 1.25,
                    });
                });
            });
        };

        createSplitAnimation();

        const debouncer = gsap.delayedCall(0.2, createSplitAnimation).pause();

        const handleResize = () => {
            debouncer.restart(true);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            gsap.killTweensOf(".text-animation-block .animated-text span");
            debouncer.kill();
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <section ref={addToRefs} className={`text-animation-block ${classname}`} id="section1">
            <Container fluid="xl" className='custom-container'>
                <h2 className="animated-text">
                    {paragraph}
                </h2>
                <div className="owner-info">
                    <h4 className="name">{owner}</h4>
                    <p className="designation">{ownerDesignation}</p>
                </div>
            </Container>
        </section>
    );
};

export default TextAnimation;


// Animation with Framer Motion
// import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
// import React, { useRef } from 'react';
// import { Container } from 'react-bootstrap';

// interface TextAnimationProps {
//     classname?: string;
//     paragraph: string;
//     owner: string;
//     ownerDesignation: string;
// }

// interface WordProps {
//     children: string;
//     progress: MotionValue<number>; // or better: ScrollYProgress type from framer-motion
//     range: [number, number];
// }

// interface CharProps {
//     children: string;
//     progress: MotionValue<number>; // or better: ScrollYProgress type from framer-motion
//     range: [number, number];
// }

// const Word = ({ children, progress, range }: WordProps) => {
//     const amount = range[1] - range[0];
//     const step = amount / children.length;
//     return (
//         <span className="word">
//             {
//                 children.split("").map((char, i) => {
//                     const start = range[0] + (i * step);
//                     const end = range[0] + ((i + 1) * step);
//                     return <Char key={`c_${i}`} progress={progress} range={[start, end]}>{char}</Char>;
//                 })
//             }
//         </span>
//     );
// };

// const Char = ({ children, progress, range }: CharProps) => {
//     const opacity = useTransform(progress, range, [0, 1]);
//     return (
//         <span>
//             <span className="default">{children}</span>
//             <motion.span style={{ opacity: opacity }}>{children}</motion.span>
//         </span>
//     );
// };

// const TextAnimation: React.FC<TextAnimationProps> = ({ paragraph, owner, ownerDesignation, classname }) => {
//     const container = useRef(null);
//     const { scrollYProgress } = useScroll({
//         target: container,
//         offset: ["start 0.8", "start 0.2"]
//     });

//     const words = paragraph.split(" ");
//     return (
//         <section className={`text-animation-block ${classname}`}>
//             <Container fluid="xl" className='custom-container'>
//                 <h2
//                     ref={container}
//                     className="animated-text"
//                 >
//                     {
//                         words.map((word, i) => {
//                             const start = i / words.length;
//                             const end = start + (1 / words.length);
//                             return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>;
//                         })
//                     }
//                 </h2>
//                 <div className="owner-info">
//                     <h4 className="name">{owner}</h4>
//                     <p className="designation">{ownerDesignation}</p>
//                 </div>
//             </Container>
//         </section>
//     );
// }

// export default TextAnimation;
