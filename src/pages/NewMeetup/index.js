import NewMeetupForm from "../../components/NewMeetupForm"


const NewMeetupPage = () => {

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
        )
    }

    return <div>
        <h1>New Meetup Page</h1>
        <NewMeetupForm addNewMeetup={addNewMeetupHandler} />
    </div>
}

export default NewMeetupPage;