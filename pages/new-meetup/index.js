import NewMeetupForm from "../../components/meetups/NewMeetupForm"
import { useRouter } from 'next/router'
import {server} from '../../config'

function NewMeetupPage() {
    const router = useRouter()

    async function addMeetupHandler(enteredMeetupData) {
        const response = await fetch(`${server}/api/new-meetup`, {
            
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
       console.log(enteredMeetupData);
        router.push('/')
    }

    return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}
export default NewMeetupPage