function News(props)
{
    return(
        <div className="News">
            <div className="news-img">
            <img src={props.article.urlToImage}alt="news"/>
            </div>
            <h1>{props.article.title}</h1>

            <p>{props.article.description?.substring(0,100).concat('...')}<a href={props.article.url}>Read more</a></p>

            

            <div className="source">
            <p> Author: {props.article.author}</p>
            <p>{props.article.source.name}</p>

            </div>

        </div>
    )
}
export default News;