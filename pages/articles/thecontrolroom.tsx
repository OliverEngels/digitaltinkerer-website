import { Tag, List, ListItem, Container } from '@chakra-ui/react'
import Layout from '../../components/layout'
import {
    Meta,
    Title,
    WebLink,
    Video
} from '../../components/article/article-elm'
import P from '../../components/paragraph'
import Segment from '../../components/segments'

export default function Article() {
    return (
        <Layout title='The Control Room'>
            <Container pt={75}>
                <Title>
                    The Control Room{' '}
                    <Tag size='sm' colorScheme='teal'>
                        2019
                    </Tag>
                </Title>
                <Segment>
                    <P>
                        The control room is an experience that standardized the
                        starting location of every petrochemical
                        training/experience that we would create. In the room
                        you must pick up the right equipment, select the correct
                        hazards and make you way through the rooms. Afterwards
                        we could start any scenario from this location, giving
                        the user always the same environment to play around in
                        before heading out.
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
                            <span>
                                HTC Vive Pro / Oculus Rift / HP Reverb / Desktop
                            </span>
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
                    <Video
                        title='The Control Room'
                        src='https://www.youtube.com/embed/8Wjt13l_MK8'
                    />
                </Segment>
            </Container>
        </Layout>
    )
}
