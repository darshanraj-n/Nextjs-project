import {server} from '../../config'
import MeetupDetail from '../../components/meetups/MeetupDetail'
import {useRouter} from 'next/router'

function MeetupDetails({meetupData}) {

    const router = useRouter()

    if(router.isFallback){
       return<h1>Loading</h1>
    }

    return (
        <MeetupDetail image={meetupData.image}
            title={meetupData.title}
            address={meetupData.address}
            description={meetupData.description} />

    )

}


export async function getStaticPaths(){

return{
    
   
  paths:  [
        {
            params:{
                meetupid:'m1'
            }
        },
        {
            params:{
                meetupid:'m2'
            }
        },
    ],
    fallback:true
}
}


export async function getStaticProps(context){
    const {params}=context
    
    const response= await fetch(`http://localhost:5000/comments/${params.meetupid}`)
    const data = await response.json()

    if(!data.id){
        return{
            notFound: true  // if there is no path it will set 404 page
        }
    }
    
    return{
        props:{
            meetupData:data
        },
        
    }
}
export default MeetupDetails