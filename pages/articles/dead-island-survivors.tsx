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
        <Layout title='Dead Island Survivors'>
            <Container pt={75}>
                <Title>
                    Dead Island Survivors{' '}
                    <Tag size='sm' colorScheme='teal'>
                        2018
                    </Tag>
                </Title>

                <Segment>
                    <P>
                        Dead Island: Suvivors is based on the popular Dead
                        Island franchise. Bringing it to mobile and iPad, defend
                        your base from a zombie horde by fortifying it and
                        sending your heroes out to fight.
                    </P>
                </Segment>

                <Segment>
                    <List ml={4} my={4}>
                        <ListItem align='left'>
                            <Meta>Website</Meta>
                            <WebLink link='https://www.dsfishlabs.com/' />
                        </ListItem>
                        <ListItem align='left'>
                            <Meta>Platform</Meta>
                            <span>Tablet / Mobile / iOS / Android</span>
                        </ListItem>
                        <ListItem align='left'>
                            <Meta>Genre</Meta>
                            <span>Tower Defence</span>
                        </ListItem>
                        <ListItem align='left'>
                            <Meta>Contribution</Meta>
                            <span>VFX / Optimization Tools</span>
                        </ListItem>
                    </List>
                </Segment>

                <Segment>
                    <Video
                        title='Dead Island Survivors'
                        src='https://www.youtube.com/embed/NqBfd7zlJF8'
                    />
                </Segment>

                <Segment>
                    <Video
                        title='Survivors Gameplay'
                        src='https://www.youtube.com/embed/E48h2CphyY0'
                    />
                </Segment>

                <Segment>
                    <Picture
                        src='/images/experience/deadisland-survivors-01.webp'
                        alt=''
                    />
                    <Picture
                        src='/images/experience/deadisland-survivors-02.webp'
                        alt=''
                    />
                </Segment>
            </Container>
        </Layout>
    )
}
