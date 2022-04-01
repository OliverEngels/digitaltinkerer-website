import { Tag, List, ListItem, Container } from '@chakra-ui/react'
import Layout from '../../components/layout'
import {
    Meta,
    Picture,
    Title,
    WebLink
} from '../../components/article/article-elm'
import P from '../../components/paragraph'
import Segment from '../../components/segments'

export default function Article() {
    return (
        <Layout title='Shell Sandbox'>
            <Container pt={75}>
                <Title>
                    Shell Sandbox{' '}
                    <Tag size='sm' colorScheme='teal'>
                        2018
                    </Tag>
                </Title>
                <Segment>
                    <P>
                        In this project you can setup your own scenario, by
                        placing hazards, distractions, and objects. The player
                        will than need to adjust to the given situation and make
                        sure the correct procedures are followed.
                    </P>
                </Segment>
                <Segment>
                    <List ml={4} my={4}>
                        <ListItem textAlign='left'>
                            <Meta>Website</Meta>
                            <WebLink link='https://www.infinitylabs.nl/projects' />
                        </ListItem>
                        <ListItem textAlign='left'>
                            <Meta>Platform</Meta>
                            <span>Desktop / Oculus Rift</span>
                        </ListItem>
                        <ListItem textAlign='left'>
                            <Meta>Type</Meta>
                            <span>Virtual Reality Training</span>
                        </ListItem>
                        <ListItem textAlign='left'>
                            <Meta>Contribution</Meta>
                            <span>Producer</span>
                        </ListItem>
                    </List>
                </Segment>
                <Segment>
                    <Picture
                        src='/images/experience/shellsandbox-01.webp'
                        alt=''
                    />
                    <Picture
                        src='/images/experience/shellsandbox-02.webp'
                        alt=''
                    />
                    <Picture
                        src='/images/experience/shellsandbox-03.webp'
                        alt=''
                    />
                </Segment>
            </Container>
        </Layout>
    )
}
