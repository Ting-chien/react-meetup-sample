import { useRef } from "react";

import Card from "./Card"
import classes from "./NewMeetupForm.module.css"


const NewMeetupForm = (props) => {

    // Add DOM ref
    const titleInputRef = useRef()
    const imageInputRef = useRef()
    const addressInputRef = useRef()
    const descriptionInputRef = useRef()

    // Add new meetup handler
    function addNewMeetup(event) {
        event.preventDefault();
        // Get current value
        const title = titleInputRef.current.value;
        const image = imageInputRef.current.value;
        const address = addressInputRef.current.value;
        const description = descriptionInputRef.current.value;
        // action
        const newMeetup = {
            title: title,
            image: image,
            address: address,
            description: description
        }
        props.addNewMeetup(newMeetup);
    }

    return <Card>
        <form className={classes.form} onSubmit={addNewMeetup}>
            <div className={classes.control}>
                <label htmlFor="title">Title</label>
                <input type="text" required id="title" ref={titleInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor="image">Image</label>
                <input type="url" required id="image" ref={imageInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor="address">Address</label>
                <input type="text" required id="address" ref={addressInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor="description">Description</label>
                <textarea required id="description" rows="5" ref={descriptionInputRef} />
            </div>
            <div className={classes.actions}>
                <button>Add meetup</button>
            </div>
        </form>
    </Card>
}

export default NewMeetupForm;