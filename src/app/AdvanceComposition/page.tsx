"use client";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { cn } from "@/utils/cn";
import { IconBoxAlignRightFilled } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "../../components/ui/bento-grid";

const page =()=> {
    return (
        <AuroraBackground>
            <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-4 h-auto"
            >
            <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] lg:mt-96 md:mt-96">
                {items.map((item, i) => (
                    <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    className={cn("[&>p:text-lg]", item.className)}
                    icon={item.icon}
                    />
                ))}
            </BentoGrid>
        </motion.div>
        </AuroraBackground>
    );
}

export default page;



const SkeletonOne = () => {
    const variants = {
        initial: {
        x: 0,
        },
        animate: {
        x: 10,
        rotate: 5,
        transition: {
            duration: 0.2,
        },
        },
    };
    const variantsSecond = {
        initial: {
        x: 0,
        },
        animate: {
        x: -10,
        rotate: -5,
        transition: {
            duration: 0.2,
        },
        },
    };

    return (
        <motion.div
        initial="initial"
        whileHover="animate"
        className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
        >
        <motion.div
            variants={variants}
            className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
        >
            <Image
            src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D"
            alt="avatar"
            height="100"
            width="100"
            className="rounded-2xl h-10 w-10"
            />
            <p className="text-md text-neutral-500">
                Which are advanced Harmonic Concepts?
            </p>
        </motion.div>
        <motion.div
            variants={variantsSecond}
            className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-4/4 ml-auto bg-white dark:bg-black"
        >
            <p className="text-md text-neutral-500">
            Extended Chords, Altered Chords, Chromaticism
            </p>
            <div className="h-6 w-6 rounded-2xl bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        </motion.div>
        </motion.div>
        
    );
};
const SkeletonTwo = () => {
    const variants = {
        initial: {
        x: 0,
        },
        animate: {
        x: 10,
        rotate: 5,
        transition: {
            duration: 0.2,
        },
        },
    };
    const variantsSecond = {
        initial: {
        x: 0,
        },
        animate: {
        x: -10,
        rotate: -5,
        transition: {
            duration: 0.2,
        },
        },
    };

    return (
        <motion.div
        initial="initial"
        whileHover="animate"
        className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
        >
        <motion.div
            variants={variants}
            className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
        >
            <Image
            src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D"
            alt="avatar"
            height="100"
            width="100"
            className="rounded-2xl h-10 w-10"
            />
            <p className="text-md text-neutral-500">
                Types of modulation?
            </p>
        </motion.div>
        <motion.div
            variants={variantsSecond}
            className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-4/4 ml-auto bg-white dark:bg-black"
        >
            <p className="text-md text-neutral-500">
            Direct Modulation, Pivot Chord Modulation, Enharmonic Modulation
            </p>
            <div className="h-6 w-6 rounded-2xl bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        </motion.div>
        </motion.div>
        
    );
};
const SkeletonThree = () => {
    const variants = {
        initial: {
        x: 0,
        },
        animate: {
        x: 10,
        rotate: 5,
        transition: {
            duration: 0.2,
        },
        },
    };
    const variantsSecond = {
        initial: {
        x: 0,
        },
        animate: {
        x: -10,
        rotate: -5,
        transition: {
            duration: 0.2,
        },
        },
    };

    return (
        <motion.div
        initial="initial"
        whileHover="animate"
        className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
        >
        <motion.div
            variants={variants}
            className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
        >
            <Image
            src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D"
            alt="avatar"
            height="100"
            width="100"
            className="rounded-2xl h-10 w-10"
            />
            <p className="text-md text-neutral-500">
                Types of Counterpoint?
            </p>
        </motion.div>
        <motion.div
            variants={variantsSecond}
            className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-4/4 ml-auto bg-white dark:bg-black"
        >
            <p className="text-md text-neutral-500">
            Species Counterpoint, Imitative Counterpoint, Contrapuntal Forms:
            </p>
            <div className="h-6 w-6 rounded-2xl bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        </motion.div>
        </motion.div>
        
    );
};
const SkeletonFour = () => {
    const variants = {
        initial: {
        x: 0,
        },
        animate: {
        x: 10,
        rotate: 5,
        transition: {
            duration: 0.2,
        },
        },
    };
    const variantsSecond = {
        initial: {
        x: 0,
        },
        animate: {
        x: -10,
        rotate: -5,
        transition: {
            duration: 0.2,
        },
        },
    };

    return (
        <motion.div
        initial="initial"
        whileHover="animate"
        className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
        >
        <motion.div
            variants={variants}
            className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
        >
            <Image
            src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D"
            alt="avatar"
            height="100"
            width="100"
            className="rounded-2xl h-10 w-10"
            />
            <p className="text-md text-neutral-500">
            Tell types of Form and Structure?
            </p>
        </motion.div>
        <motion.div
            variants={variantsSecond}
            className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-4/4 ml-auto bg-white dark:bg-black"
        >
            <p className="text-md text-neutral-500">
            Sonata Form, Rondo Form, Through-Composed:
            </p>
            <div className="h-6 w-6 rounded-2xl bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        </motion.div>
        </motion.div>
    );
};
const SkeletonFive = () => {
    const variants = {
        initial: {
        x: 0,
        },
        animate: {
        x: 10,
        rotate: 5,
        transition: {
            duration: 0.2,
        },
        },
    };
    const variantsSecond = {
        initial: {
        x: 0,
        },
        animate: {
        x: -10,
        rotate: -5,
        transition: {
            duration: 0.2,
        },
        },
    };

    return (
        <motion.div
        initial="initial"
        whileHover="animate"
        className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
        >
        <motion.div
            variants={variants}
            className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
        >
            <Image
            src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D"
            alt="avatar"
            height="100"
            width="100"
            className="rounded-2xl h-10 w-10"
            />
            <p className="text-md text-neutral-500">
                which are Types of Advanced Rhythm and Meter?
            </p>
        </motion.div>
        <motion.div
            variants={variantsSecond}
            className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-4/4 ml-auto bg-white dark:bg-black"
        >
            <p className="text-md text-neutral-500">
            Polyrhythms, Mixed Meter, Syncopation:
            </p>
            <div className="h-6 w-6 rounded-2xl bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        </motion.div>
        </motion.div>
        
    );
};
const SkeletonSix = () => {
    const variants = {
        initial: {
        x: 0,
        },
        animate: {
        x: 10,
        rotate: 5,
        transition: {
            duration: 0.2,
        },
        },
    };
    const variantsSecond = {
        initial: {
        x: 0,
        },
        animate: {
        x: -10,
        rotate: -5,
        transition: {
            duration: 0.2,
        },
        },
    };

    return (
        <motion.div
        initial="initial"
        whileHover="animate"
        className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
        >
        <motion.div
            variants={variants}
            className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
        >
            <Image
            src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D"
            alt="avatar"
            height="100"
            width="100"
            className="rounded-2xl h-10 w-10"
            />
            <p className="text-md text-neutral-500">
            Which are techniques of melody?
            </p>
        </motion.div>
        <motion.div
            variants={variantsSecond}
            className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-4/4 ml-auto bg-white dark:bg-black"
        >
            <p className="text-md text-neutral-500">
                Thematic Developmen,
                Motivic Development,
                Non-Western Scales
            </p>
            <div className="h-6 w-6 rounded-2xl bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        </motion.div>
        </motion.div>
        
    );
};


const items = [
    {
        title: "Harmonium",
        description: (
        <span className="text-sm">
            Advanced Harmonic Concepts
        </span>
        ),
        header: <SkeletonOne />,
        className: "md:col-span-1",
        icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },{
        title: "Modulation",
        description: (
        <span className="text-sm">
            Modulation and Key Changes.
        </span>
        ),
        header: <SkeletonTwo />,
        className: "md:col-span-1",
        icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },{
        title: "Counterpoint",
        description: (
        <span className="text-sm">
            Deatailed Counterpoint.
        </span>
        ),
        header: <SkeletonThree />,
        className: "md:col-span-1",
        icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },{
        title: "Visualization",
        description: (
        <span className="text-sm">
            Form and Structure.
        </span>
        ),
        header: <SkeletonFour />,
        className: "md:col-span-1",
        icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },{
        title: "Rhythm",
        description: (
        <span className="text-sm">
            Advanced Rhythm and Meter.
        </span>
        ),
        header: <SkeletonFive />,
        className: "md:col-span-1",
        icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },{
        title: "Melody",
        description: (
        <span className="text-sm">
            Advanced Melodic Techniques.
        </span>
        ),
        header: <SkeletonSix />,
        className: "md:col-span-1",
        icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
];




