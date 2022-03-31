import {
    ChakraProvider,
    extendTheme,
    cookieStorageManager,
    localStorageManager
} from '@chakra-ui/react'

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true
}

const theme = extendTheme({ config })

export default function Chakra({ cookies, children }) {
    const colorModeManager =
        typeof cookies === 'string'
            ? cookieStorageManager(cookies)
            : localStorageManager

    return (
        <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
            {children}
        </ChakraProvider>
    )
}

export async function getServerSideProps({ req }) {
    return {
        props: {
            cookies: req.headers.cookie ?? ''
        }
    }
}
