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
        <Layout title='KLM Preflight Checklist'>
            <Container pt={75}>
                <Title>
                    KLM Preflight Checklist{' '}
                    <Tag size='sm' colorScheme='teal'>
                        2018
                    </Tag>
                </Title>
                <Segment>
                    <P>
                        In KLM preflight checklist you can train in the
                        procedures that need to be performed before any
                        passengers are moved onto the plane. With a checklist in
                        hand, you must go through all the steps and make sure
                        the inner part of the plane is up to standard.
                    </P>
                </Segment>
                <Segment>
                    <List ml={4} my={4}>
                        <ListItem align='left'>
                            <Meta>Website</Meta>
                            <WebLink link='https://www.infinitylabs.nl/projects' />
                        </ListItem>
                        <ListItem align='left'>
                            <Meta>Platform</Meta>
                            <span>HTC Vive Pro / Desktop</span>
                        </ListItem>
                        <ListItem align='left'>
                            <Meta>Type</Meta>
                            <span>Virtual Reality Training</span>
                        </ListItem>
                        <ListItem align='left'>
                            <Meta>Contribution</Meta>
                            <span>Production / Programming</span>
                        </ListItem>
                    </List>
                </Segment>
                <Segment>
                    <Picture
                        src='/images/experience/klmequipment-01.webp'
                        alt=''
                    />
                    <Picture
                        src='/images/experience/klmequipment-02.webp'
                        alt=''
                    />
                </Segment>
            </Container>
        </Layout>
    )
}
