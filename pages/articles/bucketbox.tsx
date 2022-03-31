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
        <Layout title='Bucketbox'>
            <Container pt={75}>
                <Title>
                    Bucketbox{' '}
                    <Tag size='sm' colorScheme='teal'>
                        2019
                    </Tag>
                </Title>
                <Segment>
                    <P>
                        The bucket box is a virtual reality experience that
                        trains users in offloading procedures of dangerous
                        gases. It consists of 8 scenarios each containing a
                        different truck to train with.
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
                            <span>HTC Vive Pro / Desktop</span>
                        </ListItem>
                        <ListItem textAlign='left'>
                            <Meta>Type</Meta>
                            <span>Virtual Reality Training</span>
                        </ListItem>
                        <ListItem textAlign='left'>
                            <Meta>Contribution</Meta>
                            <span>Production / Programming</span>
                        </ListItem>
                    </List>
                </Segment>
                <Segment>
                    <Picture
                        src='/images/experience/messerbucketbox-01.webp'
                        alt=''
                    />
                    <Picture
                        src='/images/experience/messerbucketbox-02.webp'
                        alt=''
                    />
                    <Picture
                        src='/images/experience/messerbucketbox-03.webp'
                        alt=''
                    />
                </Segment>
            </Container>
        </Layout>
    )
}
