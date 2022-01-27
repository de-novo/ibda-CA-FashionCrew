import React from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useNavigate } from "react-router-dom";



function Plans(props) {
    const navigate = useNavigate();

    // axios.get("/api/content/plan/:id/:title").then((data) => console.log(data, "gg"));

    console.log(props.contents, "plan");
    return (
        <div className="plan_box">
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                // events={props.contents}
                eventColor="gray"
                events={[...props.contents, ...props.projects]}
                contentHeight="auto"
                eventClick={function (event) {
                    console.log(event.event);
                    let id = event.event._def.extendedProps._id;
                    let title = event.event._def.title;

                    navigate.push(`/content/plan/${id}/${title}`);
                }}
            ></FullCalendar>
        </div>
    );
}

export default Plans;
