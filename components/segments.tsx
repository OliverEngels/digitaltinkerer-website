import { chakra, shouldForwardProp } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { item } from './animation-setup'

const MotionDiv = chakra(motion.div, {
    shouldForwardProp: prop => {
        return shouldForwardProp(prop) || prop === 'transition'
    }
})

const Segment = ({ children }) => (
    <MotionDiv variants={item}>{children}</MotionDiv>
)

export default Segment
