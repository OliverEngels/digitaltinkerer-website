import { Tag, List, ListItem, Container } from '@chakra-ui/react'
import Layout from '../../components/layout'
import { Meta, Picture, Title } from '../../components/article/article-elm'
import P from '../../components/paragraph'
import Segment from '../../components/segments'

export default function Article() {
    return (
        <Layout title='Jumping Lillies'>
            <Container pt={75}>
                <Title>
                    Jumping Lillies{' '}
                    <Tag size='sm' colorScheme='teal'>
                        2014
                    </Tag>
                </Title>
                <Segment>
                    <P>
                        A fun and playful way to keep up to date with your
                        typing skills. Build for children ages 12 to 14, this
                        web application will randomly assign a keyboard key to a
                        water lily. The user than must press it before the timer
                        is done, with the time going vaster with every key
                        press. Do you have what it takes to get to the final
                        level?
                    </P>
                </Segment>
                <Segment>
                    <List ml={4} my={4}>
                        <ListItem align='left'>
                            <Meta>Platform</Meta>
                            <span>Web</span>
                        </ListItem>
                        <ListItem align='left'>
                            <Meta>Type</Meta>
                            <span>Web Game</span>
                        </ListItem>
                        <ListItem align='left'>
                            <Meta>Contribution</Meta>
                            <span>Programming / Art</span>
                        </ListItem>
                    </List>
                </Segment>
                <Segment>
                    <Picture
                        src='/images/experience/jumpinglillies-01.webp'
                        alt=''
                    />
                    <Picture
                        src='/images/experience/jumpinglillies-02.webp'
                        alt=''
                    />
                </Segment>
            </Container>
        </Layout>
    )
}
