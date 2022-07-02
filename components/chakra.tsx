import {
    ChakraProvider,
    extendTheme,
    cookieStorageManager,
    localStorageManager,
    type ThemeConfig
} from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false
}

export const theme = extendTheme({
    config,
    styles: {
        global: props => ({
            body: {
                bg: mode('#FDFDFD', '#1F232C')(props)
            }
        })
    }
})

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
