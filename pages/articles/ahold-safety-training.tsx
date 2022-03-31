import { Tag, List, ListItem, Container } from '@chakra-ui/react'
import Layout from '../../components/layout'
import {
    Meta,
    Title,
    Video,
    WebLink
} from '../../components/article/article-elm'
import P from '../../components/paragraph'
import Segment from '../../components/segments'

export default function Article() {
    return (
        <Layout title='Ahold Safety Training'>
            <Container pt={75}>
                <Title>
                    Ahold Safety Training{' '}
                    <Tag size='sm' colorScheme='teal'>
                        2021
                    </Tag>
                </Title>

                <Segment>
                    <P>
                        In ahold safety training the player needs to avoid,
                        clean and indicate hazards inside a distribution center.
                        We worked closely with subject matter experts to get the
                        scenario as realistic as possible. Using real world
                        examples of hazardous situation to train existing and
                        new hires.
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
                            <span>HP Reverb G2 / Desktop</span>
                        </ListItem>
                        <ListItem textAlign='left'>
                            <Meta>Type</Meta>
                            <span>Virtual Reality Training</span>
                        </ListItem>
                        <ListItem textAlign='left'>
                            <Meta>Contribution</Meta>
                            <span>
                                Production triage to hand over to other producer
                                and moving on to other projects
                            </span>
                        </ListItem>
                    </List>
                </Segment>

                <Segment>
                    <Video
                        src='https://www.youtube.com/embed/qgJ_0Y1J0ws'
                        title='Ahold - Safety Training'
                    />
                </Segment>
            </Container>
        </Layout>
    )
}
