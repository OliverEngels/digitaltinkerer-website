import {
    Tag,
    List,
    ListItem,
    Heading,
    Center,
    UnorderedList,
    Container
} from '@chakra-ui/react'
import Layout from '../../components/layout'
import {
    Meta,
    Picture,
    Title,
    MetaGray,
    WebLink
} from '../../components/article/article-elm'
import P from '../../components/paragraph'
import Segment from '../../components/segments'

export default function Article() {
    return (
        <Layout title='Van Gogh Experience'>
            <Container pt={75}>
                <Title>
                    Van Gogh Experience{' '}
                    <Tag size='sm' colorScheme='teal'>
                        2016
                    </Tag>
                </Title>
                <Segment>
                    <P>
                        In Vincent 360 you can experience a panicle moment in
                        the life of Vincent van Gogh. The moment he had a big
                        fallout with his parent, in which the 28-year-old
                        Vincent informed his parents he wanted to become an
                        artist. The fallout was enough for him to decide to
                        leave Etten on Christmas night and follow his dreams.
                    </P>
                </Segment>
                <Segment>
                    <List ml={4} my={4}>
                        <ListItem align='left'>
                            <Meta>Website</Meta>
                            <WebLink link='https://www.vangoghbrabant.com/nl/home/etten-leur' />
                        </ListItem>
                        <ListItem align='left'>
                            <Meta>Platform</Meta>
                            <span>Desktop / Oculus Rift</span>
                        </ListItem>
                        <ListItem align='left'>
                            <Meta>Type</Meta>
                            <span>Virtual Reality Experience</span>
                        </ListItem>
                        <ListItem align='left'>
                            <Meta>Contribution</Meta>
                            <span>Programming / Art</span>
                        </ListItem>
                    </List>
                </Segment>
                <Segment>
                    <Heading as='h4' fontSize={16} my={6}>
                        <Center>Press coverage</Center>
                    </Heading>
                </Segment>
                <Segment>
                    <UnorderedList my={4}>
                        <ListItem align='left'>
                            <MetaGray>Stappen-Shoppen</MetaGray>
                            <WebLink link='https://ettenleur.stappen-shoppen.nl/nieuws/vincent-360-een-ontmoeting-met-van-gogh-in-virtual-reality-585401152a5ab06947b2f587' />
                        </ListItem>
                        <ListItem align='left'>
                            <MetaGray>Researchgate</MetaGray>
                            <WebLink link='https://www.researchgate.net/figure/The-launch-of-the-virtual-experience-in-the-church-in-Etten-Leur-in-Dec-2016-Photo_fig4_323210826' />
                        </ListItem>
                    </UnorderedList>
                </Segment>
                <Segment>
                    <Picture
                        src='/images/experience/becomingvincent-01.webp'
                        alt=''
                    />
                    <Picture
                        src='/images/experience/becomingvincent-02.webp'
                        alt=''
                    />
                </Segment>
            </Container>
        </Layout>
    )
}
