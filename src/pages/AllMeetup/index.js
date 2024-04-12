import { useState, useEffect } from "react";

import MeetupList from "../../components/MeetupList";


const AllMeetupPage = () => {
    // Initial state
    const [isLoading, setIsLoading] = useState(true)
    const [meetups, setMeetups] = useState([])
    // Get all meetups
    useEffect(() => {
        fetch("http://localhost:3000/meetups")
        .then((res) => {
            return res.json()
        }).then((data) => {
            setIsLoading(false)
            setMeetups(data)
        })
    }, [])

    return <div>
        <h1>All Meetup Page</h1>
        {isLoading ? "Is loading ..." : <MeetupList meetups={meetups} />}
    </div>
}

export default AllMeetupPage;