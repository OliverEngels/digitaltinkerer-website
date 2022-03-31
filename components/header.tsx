import {
    Text,
    Flex,
    Heading,
    useColorMode,
    Button,
    Spacer,
    Hide,
    Box,
    Container,
    MenuButton,
    IconButton,
    Menu,
    MenuItem,
    MenuList
} from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLeaf,
    faBars,
    faSun,
    faMoon
} from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'

function header(props) {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Box position={'fixed'} zIndex={5} width={'100%'} height={70}>
            <Box
                position={'absolute'}
                backgroundColor={useColorModeValue('white', 'gray.800')}
                opacity={0.25}
                height={70}
                width={'100vw'}
            />
            <Box
                position={'absolute'}
                backgroundColor={useColorModeValue('white', 'gray.800')}
                height={70}
                width={'100vw'}
                bg='none'
                backdropFilter='auto'
                backdropBlur='10px'
            />

            <Container maxW='container.xl'>
                <Flex as='nav' wrap='wrap' padding={4} {...props}>
                    <Link href='/'>
                        <Flex align='center' mr={4} cursor='pointer' zIndex={5}>
                            <Heading
                                as='h1'
                                size='md'
                                letterSpacing={'tighter'}>
                                <Text>
                                    <FontAwesomeIcon icon={faLeaf} /> Oliver
                                    Engels
                                </Text>
                            </Heading>
                        </Flex>
                    </Link>

                    <Hide below='md'>
                        <Link href='/experience'>
                            <Button variant='ghost' mr={2}>
                                Experience
                            </Button>
                        </Link>
                        <Link href='/tinkerings'>
                            <Button variant='ghost' mr={2}>
                                Tinkerings
                            </Button>
                        </Link>
                        <Link href='https://github.com/OliverEngels/digitaltinkerer-website'>
                            <Button variant='ghost' colorScheme='red'>
                                <Text>
                                    <FontAwesomeIcon icon={faGithubAlt} />{' '}
                                    Source
                                </Text>
                            </Button>
                        </Link>
                    </Hide>

                    <Spacer />

                    <Button
                        onClick={toggleColorMode}
                        colorScheme={useColorModeValue('blue', 'orange')}
                        alignSelf='self-end'
                        mr='2'
                        height={35}
                        width={35}>
                        <FontAwesomeIcon
                            icon={useColorModeValue(faMoon, faSun)}
                            color={useColorModeValue('white', 'black')}
                        />
                    </Button>

                    <Menu>
                        <MenuButton
                            height={35}
                            width={35}
                            display={{ base: 'block', md: 'none' }}
                            as={IconButton}
                            aria-label='Options'
                            icon={
                                <FontAwesomeIcon
                                    icon={faBars}
                                    inverse={colorMode == 'dark'}
                                />
                            }
                            variant='outline'
                        />

                        <MenuList>
                            <Link href='/'>
                                <MenuItem>About</MenuItem>
                            </Link>
                            <Link href='/experience'>
                                <MenuItem>Experience</MenuItem>
                            </Link>
                            <Link href='/tinkerings'>
                                <MenuItem>Tinkerings</MenuItem>
                            </Link>
                            <Link href='https://github.com/OliverEngels/digitaltinkerer-website'>
                                <MenuItem>Source Code</MenuItem>
                            </Link>
                        </MenuList>
                    </Menu>
                </Flex>
            </Container>
        </Box>
    )
}

export default header
