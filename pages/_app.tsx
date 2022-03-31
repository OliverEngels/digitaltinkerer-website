import { Box } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import Header from '../components/header'
import Footer from '../components/footer'
import Chakra from '../components/chakra'

function App({ Component, pageProps, router }) {
    return (
        <Chakra cookies={pageProps.cookies}>
            <Header />

            <AnimatePresence exitBeforeEnter>
                <Box align='center' pt={70}>
                    <Component {...pageProps} key={router.pathname} />
                </Box>
            </AnimatePresence>

            <Footer />
        </Chakra>
    )
}

export default App
