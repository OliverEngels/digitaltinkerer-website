import ArticleBox from './article-box'

export default function Article({ data, start, end }) {
    return (
        <>
            {data.slice(start, end).map((work, i) => (
                <ArticleBox work={work} key={`article-${i}`} />
            ))}
        </>
    )
}
