import NewMeetupForm from "../../components/meetups/NewMeetupForm"
import { useRouter } from 'next/router'
import {url} from '../../config'
import { useState, useEffect } from 'react'
import { getSession, signIn } from 'next-auth/react'

function NewMeetupPage() {
    const router = useRouter()
    
    const [loading, setLoading] = useState(true)

    async function addMeetupHandler(enteredMeetupData) {
        // const response = await fetch(`${url}/api/new-meetup`, {
            const response = await fetch(`http://localhost:5000/comments`, {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        .then(()=>{
            alert(`Meetuop has been added to the list`)
        })
        
       console.log(data);
        router.push('/')
    }
   
    useEffect(() => {
        const securePage = async () => {
          const session = await getSession()
          console.log({ session })
          if (!session) {
            signIn()
          } else {
            setLoading(false)
          }
        }
        securePage()
      }, [])

      if (loading) {
        return <h2>Loading@@...</h2>
      }
      
    return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}
export default NewMeetupPage




