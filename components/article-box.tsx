import { Image, Box, Heading, Container, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Segment from '../components/segments'

const MotionBox = motion(Box)

export default function ArticleBox({ work, type = 'experience' }) {
    return (
        <Segment>
            <Link
                href={
                    work.link != null
                        ? work.link
                        : `/articles/${work.title
                              .replaceAll(' ', '-')
                              .toLowerCase()}`
                }
                passHref>
                <Box overflow={'hidden'}>
                    <MotionBox
                        dragConstraints={{ left: -100, right: 100 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 1 }}>
                        <Box cursor='pointer' position='relative'>
                            <Image
                                src={`/images/${type}/${work.img}`}
                                placeholder='blur'
                                alt='Experience Image'
                            />

                            <Container
                                position={'absolute'}
                                top={'50%'}
                                left={'50%'}
                                transform={'translate(-50%, -50%)'}>
                                <VStack spacing={2}>
                                    <Box as='button' bg='black' color='white'>
                                        <Heading
                                            textAlign='center'
                                            size='sm'
                                            p={3}>
                                            {work.title}
                                        </Heading>
                                    </Box>
                                </VStack>
                            </Container>
                        </Box>
                    </MotionBox>
                </Box>
            </Link>
        </Segment>
    )
}
