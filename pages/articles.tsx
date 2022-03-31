import { SimpleGrid } from '@chakra-ui/react'
import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Text } from '@chakra-ui/react'
import ArticleBox from '../components/article-box'

const amount = 10

function ArticleList({ data, type = 'experience' }) {
    const [posts, setPosts] = useState(data.slice(0, amount))

    const getMorePost = () => {
        setPosts(post => [
            ...post,
            ...data.slice(posts.length, posts.length + amount)
        ])
    }

    return (
        <InfiniteScroll
            style={{ overflow: 'hidden' }}
            dataLength={posts.length + amount}
            next={getMorePost}
            hasMore={true}
            loader={<Text></Text>}
            endMessage={<Text></Text>}>
            <SimpleGrid columns={[1, 1, 2, 2, 3]} minH='full'>
                {posts.map((work, i) => {
                    return (
                        <ArticleBox
                            work={work}
                            type={type}
                            key={`article-${i}`}
                        />
                    )
                })}
            </SimpleGrid>
        </InfiniteScroll>
    )
}

export default ArticleList
