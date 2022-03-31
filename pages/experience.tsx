import Layout from '../components/layout'
import ArticleList from './articles'
import { data } from './static/_experience-data'

export default function Experience() {
    return (
        <Layout title='Experience'>
            <ArticleList data={data} />
        </Layout>
    )
}
