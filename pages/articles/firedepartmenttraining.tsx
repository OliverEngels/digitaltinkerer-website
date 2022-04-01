import { Tag, List, ListItem, Container } from '@chakra-ui/react'
import Layout from '../../components/layout'
import {
    Meta,
    Picture,
    Title,
    Video,
    WebLink
} from '../../components/article/article-elm'
import P from '../../components/paragraph'
import Segment from '../../components/segments'

export default function Article() {
    return (
        <Layout title='Fire Department Training'>
            <Container pt={75}>
                <Title>
                    Fire Department Training{' '}
                    <Tag size='sm' colorScheme='teal'>
                        2020
                    </Tag>
                </Title>

                <Segment>
                    <P>
                        Familirize yourself with a number of different trucks in
                        this virtual reality training. The purpose of this
                        experience was to help stations with the familiarization
                        of new trucks. The idea was that familiarizing yourself
                        with the actual truck would be significantly reduced if
                        you had already worked with the truck in VR.
                    </P>
                </Segment>

                <Segment>
                    <P>
                        The project is build with in-experienced VR users in
                        mind and has features such as: hand-tracking, guidance
                        system and voice overstep explanations. This will
                        mitigate the use of controllers which could be hard for
                        new VR users to use.
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
                            <span>Quest 1 and 2</span>
                        </ListItem>
                        <ListItem textAlign='left'>
                            <Meta>Type</Meta>
                            <span>Virtual Reality Training</span>
                        </ListItem>
                        <ListItem textAlign='left'>
                            <Meta>Contribution</Meta>
                            <span>Producer / Technical Art</span>
                        </ListItem>
                    </List>
                </Segment>

                <Segment>
                    <Video
                        title='Fire Department Training'
                        src='https://www.youtube.com/embed/K-UbbsuuAW4'
                    />
                    <Picture
                        src='/images/experience/firedepartment-01.webp'
                        alt=''
                    />
                    <Picture
                        src='/images/experience/firedepartment-02.webp'
                        alt=''
                    />
                    <Picture
                        src='/images/experience/firedepartment-03.webp'
                        alt=''
                    />
                </Segment>
            </Container>
        </Layout>
    )
}
