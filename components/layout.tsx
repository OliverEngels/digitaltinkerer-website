import { motion } from 'framer-motion'
import Head from 'next/head'
import { container } from './animation-setup'

const Layout = ({ children, title }) => (
    <motion.div
        style={{ overflow: 'hidden' }}
        initial='hidden'
        animate='show'
        exit='exit'
        variants={container}>
        {title && (
            <Head>
                <title>{title} - Oliver Engels</title>
                <meta property='og:title' content={title} />
            </Head>
        )}
        {children}
    </motion.div>
)

export default Layout
