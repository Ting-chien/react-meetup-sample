import { useNavigate } from 'react-router-dom';

import NewMeetupForm from "../../components/NewMeetupForm"


const NewMeetupPage = () => {

    const navigate = useNavigate()

    // Add new meetup by calling api
    function addNewMeetupHandler(meetup) {
        fetch(
            "http://localhost:3000/meetups", {
                method: "POST",
                headers: {
                'Content-type': 'application/json'
                },
                body: JSON.stringify(meetup)
            }
        ).then(() => {
            navigate("/", { replace: true })
        })
    }

    return <div>
        <h1>New Meetup Page</h1>
        <NewMeetupForm addNewMeetup={addNewMeetupHandler} />
    </div>
}

export default NewMeetupPage;