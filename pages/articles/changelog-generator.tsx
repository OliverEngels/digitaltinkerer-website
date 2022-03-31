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
        <Layout title='Changelog Generator'>
            <Container pt={75}>
                <Title page='tinkerings'>
                    Changelog Generator{' '}
                    <Tag size='sm' colorScheme='teal'>
                        2022
                    </Tag>
                </Title>
                <Segment>
                    <P>
                        Creating a changelog that is directly connected to a
                        build server is nice to have. Keeps the QA team up to
                        date with reason changes and with the notion to-do list
                        they can check off what is already done. The only
                        downside is that everybody first needs to learn how to
                        write correct commit messages. However, that can be
                        solved by using something like commit lint to force
                        message standardization. Connect this to a Jenkins
                        server and automatically generate this on every build.
                    </P>
                </Segment>
                <Segment>
                    <List ml={4} my={4}>
                        <ListItem align='left'>
                            <Meta>Link Code</Meta>
                            <WebLink link='https://github.com/OliverEngels/notion-changelog-generator' />
                        </ListItem>
                        <ListItem align='left'>
                            <Meta>Link Changelog</Meta>
                            <WebLink link='https://fragmented.notion.site/Changelog-5ab080445e3c45a792c1711393b77bc8' />
                        </ListItem>
                        <ListItem align='left'>
                            <Meta>Tool</Meta>
                            <span>Notion</span>
                        </ListItem>
                        <ListItem align='left'>
                            <Meta>Language</Meta>
                            <span>Python 3.7</span>
                        </ListItem>
                    </List>
                </Segment>
                <Segment>
                    <Picture
                        src='/images/tinkerings/notion-changelog.webp'
                        alt='Changelog'
                    />
                </Segment>
            </Container>
        </Layout>
    )
}
