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
        <Layout title='Straigth Jacket'>
            <Container pt={75}>
                <Title>
                    Straigth Jacket{' '}
                    <Tag size='sm' colorScheme='teal'>
                        2016
                    </Tag>
                </Title>
                <Segment>
                    <P>
                        straitjacket was brought to life to provide the NTHV
                        with an web application for their new way of teaching
                        and learning. The challenge was to add all the different
                        game development disciplines into one app, from their
                        students can choose them own path of study. The system
                        gives updates and suggestions about where to go next
                        together with assistance from the teachers.
                    </P>
                </Segment>
                <Segment>
                    <P>
                        The app would also keep track of students work and
                        grades and everything else that is needed to usefully
                        complete the education. Because of time constraints we
                        were not able to implement all of the features that were
                        wanted.
                    </P>
                </Segment>
                <Segment>
                    <List ml={4} my={4}>
                        <ListItem textAlign='left'>
                            <Meta>Website</Meta>
                            <WebLink link='https://www.buas.nl/' />
                        </ListItem>
                        <ListItem textAlign='left'>
                            <Meta>Platform</Meta>
                            <span>Web</span>
                        </ListItem>
                        <ListItem textAlign='left'>
                            <Meta>Type</Meta>
                            <span>Student Community Application</span>
                        </ListItem>
                        <ListItem textAlign='left'>
                            <Meta>Contribution</Meta>
                            <span>Design</span>
                        </ListItem>
                    </List>
                </Segment>
                <Segment>
                    <Picture
                        src='/images/experience/straightjacket-01.webp'
                        alt=''
                    />
                </Segment>
            </Container>
        </Layout>
    )
}
