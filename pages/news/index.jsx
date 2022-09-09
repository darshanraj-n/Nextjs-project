import { useRouter } from "next/router"

function News({ articles }) {

    const router = useRouter()
    function sports() {
        router.push('/news'+'/sports')
      }
      function politics() {
        router.push('/news'+'/politics')
      }

    return (
      <>
        <h1>List of News Articles</h1>
        
        <div style={{cursor:'pointer'}}>
        <a onClick={sports}>Sports</a> | <a onClick={politics}>Politics</a>
        </div>
        
        {articles.map(article => {
          return (
            <div key={article.id}>
              <h2>
                {article.id} {article.title} | {article.category}
              </h2>
              <hr />
            </div>
          )
        })}
      </>
    )
  }
  
  export default News
  
  export async function getServerSideProps() {
    console.log(' NewsArticleList') //build
    const response = await fetch('http://localhost:5000/news')
    const data = await response.json()
  
    return {
      props: {
        articles: data
      }
    }
  }