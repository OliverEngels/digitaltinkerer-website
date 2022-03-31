import { Tag, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layout'
import { Meta, Picture, Title } from '../../components/article/article-elm'
import P from '../../components/paragraph'
import Segment from '../../components/segments'

export default function Article() {
    return (
        <Layout title='Robotron 2084'>
            <Title page='tinkerings'>
                Robotron 2084{' '}
                <Tag size='sm' colorScheme='teal'>
                    2015
                </Tag>
            </Title>
            <Segment>
                <P>
                    Robotron 2084 is a classic arcade game, it was designed by
                    Eugene Jarvis back in the day. The player needs to defend
                    itself from hordes of killer robots. It required quick
                    reflexes, the game allows players to shoot and move in
                    different directions at the same time. This allows the
                    player to move away for danger while they keep firing at the
                    enemy.
                </P>
            </Segment>
            <Segment>
                <P>
                    I tried to rebuild the game as close to the original as
                    possible. Only this time moving away from arcade centers and
                    into your living room. Making the entire thing for
                    PlayStation. However, I never got to the point of moving it
                    to the PlayStation itself.
                </P>
            </Segment>
            <Segment>
                <List ml={4} my={4}>
                    <ListItem textAlign='left'>
                        <Meta>Tool(s)</Meta>
                        <span>Visual Studio</span>
                    </ListItem>
                    <ListItem textAlign='left'>
                        <Meta>Language</Meta>
                        <span>C#</span>
                    </ListItem>
                    <ListItem textAlign='left'>
                        <Meta>Platform</Meta>
                        <span>Playstation / Desktop</span>
                    </ListItem>
                </List>
            </Segment>
            <Segment>
                <Picture
                    src='/images/tinkerings/robotron.webp'
                    alt='Gauntlet'
                />
            </Segment>
        </Layout>
    )
}
