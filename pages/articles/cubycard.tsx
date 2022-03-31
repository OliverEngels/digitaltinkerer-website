import { Tag, List, ListItem, SimpleGrid, Container } from '@chakra-ui/react'
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
        <Layout title='Cubycard'>
            <Container pt={75}>
                <Title>
                    Cubycard{' '}
                    <Tag size='sm' colorScheme='teal'>
                        2021
                    </Tag>
                </Title>
                <Segment>
                    <P>
                        Cubycard is a digital business card sharing app, in
                        which the user can also connect real cards to share with
                        customers. In the app the user can create their own
                        digital card and adjust it to their liking. After they
                        are done, they can just share it through a QR code,
                        link, mail, text or with a physical card.
                    </P>
                </Segment>
                <Segment>
                    <List ml={4} my={4}>
                        <ListItem textAlign='left'>
                            <Meta>Website</Meta>
                            <WebLink link='https://cubycard.com/' />
                        </ListItem>
                        <ListItem textAlign='left'>
                            <Meta>Platform</Meta>
                            <span>iOS / Android / Web</span>
                        </ListItem>
                        <ListItem textAlign='left'>
                            <Meta>Type</Meta>
                            <span>Digital Business Cards</span>
                        </ListItem>
                        <ListItem textAlign='left'>
                            <Meta>Stack</Meta>
                            <span>
                                Flutter / DotNet Core / Entity Framework Core
                            </span>
                        </ListItem>
                        <ListItem textAlign='left'>
                            <Meta>Contribution</Meta>
                            <span>Production / Design / Programming</span>
                        </ListItem>
                    </List>
                </Segment>
                <Segment>
                    <SimpleGrid columns={2} spacing={2}>
                        <Picture
                            src='/images/experience/cubycard-01.webp'
                            alt=''
                        />
                        <Picture
                            src='/images/experience/cubycard-02.webp'
                            alt=''
                        />
                        <Picture
                            src='/images/experience/cubycard-03.webp'
                            alt=''
                        />
                        <Picture
                            src='/images/experience/cubycard-04.webp'
                            alt=''
                        />
                    </SimpleGrid>
                </Segment>
            </Container>
        </Layout>
    )
}
