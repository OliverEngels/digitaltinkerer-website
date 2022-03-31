import { Tag, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layout'
import { Meta, Picture, Title } from '../../components/article/article-elm'
import P from '../../components/paragraph'
import Segment from '../../components/segments'

export default function Article() {
    return (
        <Layout title='Musseum Madness'>
            <Title page='tinkerings'>
                Musseum Madness{' '}
                <Tag size='sm' colorScheme='teal'>
                    2016
                </Tag>
            </Title>
            <Segment>
                <P>
                    They always say don’t put school project on your website.
                    However, this project was an absolute blast to do, and I
                    love the way it turned out. The team consisted of 12
                    students and we where tasked to make a project for the
                    PlayStation Vita. We managed to get a fun little game
                    working on it, where the player needs to scare security
                    guards and make them leave the area. For this the player can
                    activate different objects within the world to make the
                    guard as scared as possible. In the end we got it working on
                    PS Vita as intended.
                </P>
            </Segment>
            <Segment>
                <List ml={4} my={4}>
                    <ListItem textAlign='left'>
                        <Meta>Tool(s)</Meta>
                        <span>Visual Studio</span>
                    </ListItem>
                    <ListItem textAlign='left'>
                        <Meta>Platform</Meta>
                        <span>Playstation Vita</span>
                    </ListItem>
                    <ListItem textAlign='left'>
                        <Meta>Contribution</Meta>
                        <span>Production / Programming</span>
                    </ListItem>
                </List>
            </Segment>
            <Segment>
                <Picture
                    src='/images/tinkerings/museummadness.webp'
                    alt='Gauntlet'
                />
            </Segment>
        </Layout>
    )
}
