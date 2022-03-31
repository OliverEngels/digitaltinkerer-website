import { Box, Text } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Box align='center' pb={25} pt={25}>
            <Text fontSize='sm' color='gray.500'>
                &copy; {new Date().getFullYear()} Oliver Engels. All Rights
                Reserved.
            </Text>
        </Box>
    )
}

export default Footer
