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



//............Pre rendering (shallow routing)+ Client side Data Fetching......

// import { useState } from 'react'
// import { useRouter } from 'next/router'

// function EventList({ eventList }) {
//   const [events, setEvents] = useState(eventList)
//   const router = useRouter()

//   const fetchSportsEvents = async () => {
//     const response = await fetch('http://localhost:5000/news?category=sports')
//     const data = await response.json()
//     setEvents(data)
//     router.push('/news?category=sports', undefined, { shallow: true })
//   }
//   return (
//     <>
//       <button onClick={fetchSportsEvents}>Sports Events</button>
//       <h1>List of events</h1>
//       {events.map(event => {
//         return (
//           <div key={event.id}>
//             <h2>
//               {event.id} {event.title} {event.date} | {event.category}
//             </h2>
//             <p>{event.description}</p>
//             <hr />
//           </div>
//         )
//       })}
//     </>
//   )
// }

// export default EventList

// export async function getServerSideProps(context) {
//   const { query } = context
//   const { category } = query
//   const queryString = category ? 'category=sports' : ''
//   const response = await fetch(`http://localhost:5000/news?${queryString}`)
//   const data = await response.json()

//   return {
//     props: {
//       eventList: data
//     }
//   }
// }