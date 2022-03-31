export const container = {
    hidden: { opacity: 0, y: 50 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.05,
            duration: .1,
            type: 'spring',
            stiffness: 150
        }
    },
    exit: { 
        opacity: 0,
        transition:{ duration: 0.25 }
    },
}

export const item = {
    hidden: { opacity: 0,  y: 50 },
    show: { opacity: 1, y: 0 },
    exit: { opacity: 0 },
}