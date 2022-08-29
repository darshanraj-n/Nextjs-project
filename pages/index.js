import MeetupList from "../components/meetups/MeetupList"
import {url} from '../config'


function HomePage({meetups}) {
    return (
        
            <MeetupList meetups={meetups} />
       
    )
}
export async function getStaticProps(){
    const res = await fetch(`${url}/api/new-meetup`)
    const articles = await res.json()
    
    return{
        props:{
            meetups: articles
        },
        // revalidate:1
    }
}


export default HomePage

