
import React from "react"
import CalendarFake from './CalendarFake'
import calendar from '../resources/calendar.PNG'
import buddies from '../resources/buddies.PNG'
import activity from '../resources/activity.PNG'

const Profile = () => {
    return (

        <div>
            <CalendarFake title="Workout Activity" imagesrc={activity}></CalendarFake>
            <CalendarFake title="Workout Calendar" imagesrc={calendar}></CalendarFake>
            <CalendarFake title="Workout Buddies" imagesrc={buddies}></CalendarFake>
        </div>
        
    )
}

export default Profile
