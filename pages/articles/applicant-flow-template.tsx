import { Tag, List, ListItem, UnorderedList, Container } from '@chakra-ui/react'
import Layout from '../../components/layout'
import {
    Meta,
    MetaGray,
    Picture,
    Title,
    WebLink
} from '../../components/article/article-elm'
import P from '../../components/paragraph'
import Segment from '../../components/segments'

export default function Article() {
    return (
        <Layout title='Applicant Flow Template'>
            <Container pt={75}>
                <Title page='tinkerings'>
                    Applicant Flow Template{' '}
                    <Tag size='sm' colorScheme='teal'>
                        2021
                    </Tag>
                </Title>
                <Segment>
                    <P>
                        Keeping track of applicants can be a difficult task and
                        you want to make sure that you respond in a timely and
                        correct order. Mistakes can reflect on the company and
                        lose potential applicants. For one of the companies, I
                        worked for as a freelancer I helped setup a flow that
                        was in our opinion pretty solid. We made sure that it
                        costed the least amount of time for any individual in
                        the company and that is was a good experience for the
                        applicant.
                    </P>
                </Segment>
                <Segment>
                    <List ml={4} my={4}>
                        <ListItem align='left'>
                            <Meta>Link</Meta>
                            <WebLink link='https://fragmented.notion.site/d847a432125a4e4f88e87beba79fedd5?v=78b2652188d6498baba018dff139d3f9' />
                        </ListItem>
                        <ListItem align='left'>
                            <Meta>Tool</Meta>
                            <span>Any management software</span>
                        </ListItem>
                        <ListItem align='left'>
                            <Meta>Reason</Meta>
                            <span>
                                Getting the right hires into the companie
                                without costing hours of interview time.
                            </span>
                        </ListItem>
                    </List>
                </Segment>
                <Segment>
                    <Picture
                        src='/images/tinkerings/applicant-flow-template.webp'
                        alt='Applicant Flow'
                    />
                </Segment>
                <Segment>
                    <UnorderedList my={4}>
                        <ListItem align='left'>
                            <MetaGray>Meet & Greet Interview</MetaGray>
                            <span>
                                An interview with HR or any other representative
                                of the companies. This is to weed out any
                                participants that may not be a good fit for the
                                company culture. It could be as simple as a
                                phone call or online meeting.
                            </span>
                        </ListItem>
                        <ListItem align='left'>
                            <MetaGray>Assignment</MetaGray>
                            <span>
                                Give the participant and assignment, make sure
                                that its not something that will take hours to
                                complete. The main instructions of the
                                assignment need to be doable within a couple of
                                hours. However, if the participant likes to show
                                off, then additional time could be added to it
                                to create something great.
                            </span>
                        </ListItem>
                        <ListItem align='left'>
                            <MetaGray>Expert Interview</MetaGray>
                            <span>
                                After the assignment has been handed in you can
                                start looking at it and plan in the Expert
                                Interview. Of course if the assignment is up to
                                snuff. In the interview the expert can than go
                                over the decisions made in the assignment. This
                                will give something to talk about and remove all
                                the boring standard learned from a book
                                questions.
                            </span>
                        </ListItem>
                        <ListItem align='left'>
                            <MetaGray>CEO Interview</MetaGray>
                            <span>
                                At this point this is more a formality, however,
                                it can still go sideways if the CEO believes the
                                candidate is not a good fit for his/her company.
                            </span>
                        </ListItem>
                        <ListItem align='left'>
                            <MetaGray>Contract Discusions</MetaGray>
                            <span>
                                Usually with HR and the CEO talking about
                                contract related stuff.
                            </span>
                        </ListItem>
                    </UnorderedList>
                </Segment>
                <Segment>
                    <P>
                        It speaks for itself that you must keep track of
                        applicants is some way shape or form. You can do this in
                        any management tool of your choosing. We used ClickUp
                        for it, setup a board with columns going through all the
                        steps. Participants came in and would move down the line
                        if everything went well. Some additional columns that
                        you could add: Not Relevant, Applicant Denied, Applicant
                        Signed and of course an Archive.
                    </P>
                </Segment>
                <Segment>
                    <P>
                        If your management tool allows it, you can automate the
                        input into this flow by checking mails. Its best to
                        create a separate mail for this such as jobs@[your
                        company].com. Than use python, JavaScript, power
                        automate or any other automation software to check all
                        mails coming in that mail account. Then move both the
                        content and the attachments into the flow, this way
                        everyone is updated and sees new participants and nobody
                        must do this manually.
                    </P>
                </Segment>
                <Segment>
                    <P>
                        Having a weekly meeting about participants is also not a
                        bad idea to make sure none slip through the cracks. You
                        can also combine this into an operational meeting or
                        management meeting.
                    </P>
                </Segment>
            </Container>
        </Layout>
    )
}
