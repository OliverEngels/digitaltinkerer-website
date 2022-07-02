import {
    Image,
    Heading,
    Text,
    Container,
    Tag,
    Wrap,
    WrapItem,
    Button,
    chakra,
    SimpleGrid,
    VStack,
    HStack,
    Center
} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrain } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import data from '../data/_tinkering-data.json'
import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import P from '../components/paragraph'
import ArticleBox from '../components/article-box'
import Segment from '../components/segments'
import Layout from '../components/layout'

export default function Home() {
    return (
        <Layout title='Digital Tinkerer'>
            <Container pt={75}>
                <Segment>
                    <Center>
                        <Image
                            borderRadius='full'
                            boxSize='150px'
                            alt='Oliver Engels'
                            src='/images/avatar.webp'
                        />
                    </Center>
                    <Heading>Oliver Engels</Heading>
                    <Heading
                        as='h1'
                        color='teal'
                        letterSpacing={'tighter'}
                        size='4xl'
                        mt={1}>
                        Digital Tinkerer
                    </Heading>
                    <Text mt={4} mb={4} fontSize='sm'>
                        ( Producer / Developer / Designer )
                    </Text>

                    <Wrap spacing={2} justify='center' mb={2}>
                        <WrapItem>
                            <Link
                                href='https://fragmented.notion.site/Oliver-Engels-a487c5e34e9c4294b8e40b1def1f3526'
                                passHref>
                                <Tag
                                    variant='outline'
                                    colorScheme='gray'
                                    size='sm'
                                    cursor='pointer'>
                                    <Text>
                                        <FontAwesomeIcon icon={faBrain} />{' '}
                                        Notion
                                    </Text>
                                </Tag>
                            </Link>
                        </WrapItem>
                        <WrapItem>
                            <Link
                                href='https://github.com/OliverEngels?tab=repositories'
                                passHref>
                                <Tag
                                    variant='outline'
                                    colorScheme='gray'
                                    size='sm'
                                    cursor='pointer'>
                                    <Text>
                                        <FontAwesomeIcon icon={faGithubAlt} />{' '}
                                        Github
                                    </Text>
                                </Tag>
                            </Link>
                        </WrapItem>
                        <WrapItem>
                            <Link
                                href='https://se.linkedin.com/in/oliverengels?trk=people-guest_people_search-card'
                                passHref>
                                <Tag
                                    variant='outline'
                                    colorScheme='linkedin'
                                    size='sm'
                                    cursor='pointer'>
                                    <Text>
                                        <FontAwesomeIcon icon={faLinkedin} />{' '}
                                        Likedin
                                    </Text>
                                </Tag>
                            </Link>
                        </WrapItem>
                    </Wrap>
                </Segment>

                <Segment>
                    <Container>
                        <P>
                            Who am I? Of course, I prefer to tell this in a
                            personal conversation. But a small summary is in
                            order here: Colleagues call me eager to learn, I
                            will always be there for others and I like to
                            automate as much as possible. Keep my cool in
                            stressful situations and where others see obstacles
                            I think in solutions. In my opinion the strongest
                            teams are created by respect for each other, leaders
                            who trust their people and take responsibility. Some
                            call me a busy bee, why delay until tomorrow when
                            you can do it today? Or at least lay the foundation
                            stone.
                        </P>
                        <Link href='/experience' passHref>
                            <Button colorScheme='red' mt={5}>
                                <Text>
                                    Experience{' '}
                                    <FontAwesomeIcon icon={faCaretRight} />
                                </Text>
                            </Button>
                        </Link>
                    </Container>
                </Segment>

                <Segment>
                    <Container>
                        <Heading
                            as='h4'
                            size='md'
                            textAlign='left'
                            pb={2}
                            pt={5}>
                            Recreation
                        </Heading>
                        <P>
                            Playing Acoustic Guitar{' '}
                            <chakra.span color='tomato'>/</chakra.span>{' '}
                            Exercising{' '}
                            <chakra.span color='tomato'>/</chakra.span> Walks in
                            the Forest{' '}
                            <chakra.span color='tomato'>/</chakra.span> Creating
                            and Managing Software{' '}
                            <chakra.span color='tomato'>/</chakra.span> Learning
                            Development Techniques{' '}
                            <chakra.span color='tomato'>/</chakra.span>{' '}
                            Developing the Occasional Game here and there
                        </P>
                    </Container>
                </Segment>

                <Segment>
                    <Container pt={10}>
                        <Heading as='h4' size='md' textAlign='left' pb={2}>
                            Life History
                        </Heading>
                        <VStack alignItems='left'>
                            <HStack alignItems='left' textAlign='left'>
                                <Text as='samp' pr={2}>
                                    Early 1990
                                </Text>
                                <Text>Born in Goirle, The Netherlands.</Text>
                            </HStack>
                            <HStack alignItems='left' textAlign='left'>
                                <Text as='samp' pr={2}>
                                    2017
                                </Text>
                                <Text>
                                    Completed Master Degree at the NHTV in Game
                                    Technology.
                                </Text>
                            </HStack>
                            <HStack alignItems='left' textAlign='left'>
                                <Text as='samp' pr={2}>
                                    2017
                                </Text>
                                <Text>Worked at Studios.</Text>
                            </HStack>
                            <HStack alignItems='left' textAlign='left'>
                                <Text as='samp' flexBasis='4.5em'>
                                    2021 to Present
                                </Text>
                                <Text>Freelancer / Company Owner.</Text>
                            </HStack>
                        </VStack>
                    </Container>
                </Segment>

                <Segment>
                    <Container pt={10}>
                        <Heading as='h4' size='md' textAlign='left' pb={2}>
                            Latest Tinkerings
                        </Heading>
                        <SimpleGrid columns={2} spacing={2}>
                            {data.slice(0, 4).map((work, i) => (
                                <ArticleBox
                                    work={work}
                                    type='tinkerings'
                                    key={`article-${i}`}
                                />
                            ))}
                        </SimpleGrid>
                        <Link href='/tinkerings' passHref>
                            <Button colorScheme='red' mt={5}>
                                <Text>
                                    All <FontAwesomeIcon icon={faCaretRight} />
                                </Text>
                            </Button>
                        </Link>
                    </Container>
                </Segment>
            </Container>
        </Layout>
    )
}
