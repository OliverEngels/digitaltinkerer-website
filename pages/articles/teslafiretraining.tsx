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
        <Layout title='Tesla Fire Training'>
            <Container pt={75}>
                <Title>
                    Tesla Fire Training{' '}
                    <Tag size='sm' colorScheme='teal'>
                        2022
                    </Tag>
                </Title>

                <Segment>
                    <P>
                        Tesla Fire Training was created to teach and test
                        employee knowledge of fires within their sector. The
                        user will be able to take a guided mode where the
                        different fire extinquishers will be explained.
                        Afterwards they can take a test to see how much
                        knowledge they retained. After which they will be scored
                        from 0 to 100 on Response time and Correct handling of
                        the situation.
                    </P>
                    <P>
                        We also implementated a questionair in which the user
                        can simply talk to the system to awnser. With the
                        questionair being presented at the beginning and the end
                        of the experience.
                    </P>
                </Segment>

                <Segment>
                    <List ml={4} my={4}>
                        <ListItem textAlign='left'>
                            <Meta>Website</Meta>
                            <WebLink link='https://infinitylabs.nl/portfolio' />
                        </ListItem>
                        <ListItem textAlign='left'>
                            <Meta>Platform</Meta>
                            <span>Quest 1 and 2</span>
                        </ListItem>
                        <ListItem textAlign='left'>
                            <Meta>Genre</Meta>
                            <span>Virtual Reality Training</span>
                        </ListItem>
                        <ListItem textAlign='left'>
                            <Meta>Contribution</Meta>
                            <span>Producer / Project Owner</span>
                        </ListItem>
                    </List>
                </Segment>

                <Segment>
                    <Picture src='/images/experience/tesla-01.webp' alt='' />
                    <Picture src='/images/experience/tesla-02.webp' alt='' />
                    <Picture src='/images/experience/tesla-03.webp' alt='' />
                    <Picture src='/images/experience/tesla-04.webp' alt='' />
                    <Picture src='/images/experience/tesla-05.webp' alt='' />
                </Segment>
            </Container>
        </Layout>
    )
}
