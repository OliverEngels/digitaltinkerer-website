import { Tag, List, ListItem, Container } from '@chakra-ui/react'
import Layout from '../../components/layout'
import { Meta, Picture, Title } from '../../components/article/article-elm'
import P from '../../components/paragraph'
import Segment from '../../components/segments'

export default function Article() {
    return (
        <Layout title='Control4Risk'>
            <Container>
                <Title>
                    Control4Risk{' '}
                    <Tag size='sm' colorScheme='teal'>
                        2022
                    </Tag>
                </Title>
                <Segment>
                    <P>
                        Getting a maintaining ISO certification can be a big
                        endeavor, however, with this tool it is as easy as
                        pressing assign and keeping track of progress. The
                        application is build with the majority of measures for
                        several different ISO certification already implemented.
                        With this the user does not have to read through all the
                        Certification to know how to get a certification. The
                        system will also track progression and gives you an
                        indication of how likely it is for your company to get
                        the certificate and keep the certficate on inspection.
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
                            <span>ISO Certification Tool</span>
                        </ListItem>
                        <ListItem align='left'>
                            <Meta>Stack</Meta>
                            <span>
                                React / Bootstrap / DotNet Core / Entity
                                Framework Core
                            </span>
                        </ListItem>
                        <ListItem align='left'>
                            <Meta>Contribution</Meta>
                            <span>Production / Design / Programming</span>
                        </ListItem>
                    </List>
                </Segment>
                <Segment>
                    <Picture
                        src='/images/experience/controlfourrisk-01.webp'
                        alt=''
                    />
                    <Picture
                        src='/images/experience/controlfourrisk-02.webp'
                        alt=''
                    />
                </Segment>
            </Container>
        </Layout>
    )
}
