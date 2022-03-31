import { data } from './static/_tinkering-data'
import ArticleList from './articles'
import Layout from '../components/layout'

export default function Tinkerings() {
    return (
        <Layout title='Tinkerings'>
            <ArticleList data={data} type='tinkerings' />
        </Layout>
    )
}
