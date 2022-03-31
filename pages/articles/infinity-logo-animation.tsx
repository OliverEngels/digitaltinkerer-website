import { Tag, List, ListItem, Container } from '@chakra-ui/react'
import Layout from '../../components/layout'
import { Meta, Picture, Title } from '../../components/article/article-elm'
import P from '../../components/paragraph'
import Segment from '../../components/segments'

export default function Article() {
    return (
        <Layout title='Infinity Logo Animation'>
            <Container pt={75}>
                <Title>
                    Infinity Logo Animation{' '}
                    <Tag size='sm' colorScheme='teal'>
                        2022
                    </Tag>
                </Title>
                <Segment>
                    <P>
                        Infinity was making a number of different trailers for
                        their project and asked me to quickly setup a logo
                        animation. This would create a nice starting point for
                        every trailer they would make in the future. Its a
                        simple quick animation that get the logo into view and
                        later it can be faded away if needed.
                    </P>
                </Segment>
                <Segment>
                    <List ml={4} my={4}>
                        <ListItem align='left'>
                            <Meta>Tools</Meta>
                            <span>After Effect / Illustrator</span>
                        </ListItem>
                        <ListItem align='left'>
                            <Meta>Contribution</Meta>
                            <span>Design / Editing</span>
                        </ListItem>
                    </List>
                </Segment>
                <Segment>
                    <Picture
                        src='/images/experience/infinity-logo.webp'
                        alt=''
                    />
                </Segment>
            </Container>
        </Layout>
    )
}
