import {
    Text,
    Image,
    BreadcrumbItem,
    Breadcrumb,
    Badge,
    AspectRatio,
    VStack,
    Link as ReactLink
} from '@chakra-ui/react'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export const Title = ({ children, page = 'experience' }) => (
    <Breadcrumb pb={5} textAlign={'left'}>
        <BreadcrumbItem>
            <Link href={`/${page}`}>
                {page.charAt(0).toUpperCase() + page.slice(1)}
            </Link>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
            <Text fontSize='2xl' letterSpacing={2}>
                {children}
            </Text>
        </BreadcrumbItem>
    </Breadcrumb>
)

export const Meta = ({ children }) => (
    <Badge colorScheme='teal' mr={2}>
        {children}
    </Badge>
)

export const MetaGray = ({ children }) => (
    <Badge colorScheme='red' mr={2}>
        {children}
    </Badge>
)

export const Picture = ({ src, alt }) => (
    <Image src={src} alt={alt} borderRadius={5} mb={5} />
)

export const WebLink = ({ link }) => (
    <ReactLink href={link}>
        <span>
            {link}{' '}
            <FontAwesomeIcon
                icon={faUpRightFromSquare}
                style={{ marginLeft: '5px' }}
            />
        </span>
    </ReactLink>
)

export const Video = ({ title, src }) => (
    <AspectRatio maxW='560px' ratio={16 / 9} mb={5}>
        <iframe title={title} src={src} allowFullScreen />
    </AspectRatio>
)

export const Stack = ({ children }) => (
    <VStack alignItems='left' spacing={0} pb={2} m={3}>
        {children}
    </VStack>
)
