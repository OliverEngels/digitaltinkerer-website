import { Tag, List, ListItem, Container } from '@chakra-ui/react'
import Layout from '../../components/layout'
import { Meta, Picture, Title } from '../../components/article/article-elm'
import P from '../../components/paragraph'
import Segment from '../../components/segments'

export default function Article() {
    return (
        <Layout title='Gauntlet 1985'>
            <Container pt={75}>
                <Title page='tinkerings'>
                    Gauntlet 1985{' '}
                    <Tag size='sm' colorScheme='teal'>
                        2015
                    </Tag>
                </Title>
                <Segment>
                    <P>
                        Gauntlet is a fantasy hack-and-slash arcade game from
                        the 1980. The game is played from top down and in third
                        person. The player needs to find its way through several
                        mazes to a designated exit, while enemies can attack
                        from any direction. The original game was built for
                        coop, where 4 players could play together and choose 1
                        of 4 characters. Each character has its own unique
                        strengths and weaknesses.
                    </P>
                </Segment>
                <Segment>
                    <P>
                        It was a fun little project I did back in the day. For
                        the levels I created a Generator that would allow you to
                        build level quickly. This was very useful as there where
                        a ton of levels that could be played in the game. In the
                        end I never got it to work on the platform it was
                        intended to (PlayStation), however, I did get it to work
                        on PC. It was a fun little experiment.
                    </P>
                </Segment>
                <Segment>
                    <List ml={4} my={4}>
                        <ListItem align='left'>
                            <Meta>Tool(s)</Meta>
                            <span>
                                Visual Studio / Game Maker (for the map editor)
                            </span>
                        </ListItem>
                        <ListItem align='left'>
                            <Meta>Language</Meta>
                            <span>C#</span>
                        </ListItem>
                        <ListItem align='left'>
                            <Meta>Platform</Meta>
                            <span>Playstation / Desktop</span>
                        </ListItem>
                    </List>
                </Segment>
                <Segment>
                    <Picture
                        src='/images/tinkerings/gauntlet.webp'
                        alt='Gauntlet'
                    />
                </Segment>
            </Container>
        </Layout>
    )
}
