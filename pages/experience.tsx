import Layout from '../components/layout'
import ArticleList from './articles'
import data from '../data/_experience-data.json'

export default function Experience() {
    return (
        <Layout title='Experience'>
            <ArticleList data={data} />
        </Layout>
    )
}
