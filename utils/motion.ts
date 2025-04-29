import { Variants } from "motion/react"

export const containerVariants: Variants = {
    initial: {
        opacity: 0,
        scale: .8,
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            staggerChildren: 0.2,
            when: "beforeChildren",
        },
    },
    exit: {
        opacity: 0,
        y: 20,
    },
}

export const childVariants: Variants = {
    initial: {
        opacity: 0,
        scale:0.8,
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            duration: 0.8,
            bounce:0.25
        }
    },
    exit: {
        opacity: 0,
        y: 20,
    },
}

export const fadeInUpVariants: Variants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8
        }
    }
}
