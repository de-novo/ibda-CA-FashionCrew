import React from "react";
import styled from "styled-components";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useMatch, useNavigate } from "react-router-dom";

const FullCalendarWrapper = styled.div`
    padding: 1.6rem;
    & td {
        height: 100px;
    }
`;

function PlanCalendar({ contents }) {
    const navigate = useNavigate();
    const macth = useMatch("/content/plan");
    return (
        <FullCalendarWrapper className="gdgd">
            {macth ? (
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    // events={props.contents}
                    eventColor="#CCCCCC"
                    events={[...contents]}
                    contentHeight="auto"
                    eventClick={function (event) {
                        console.log(event.event);
                        const id = event.event._def.extendedProps._id;

                        navigate(`/content/plan/${id}`);
                    }}
                ></FullCalendar>
            ) : null}
        </FullCalendarWrapper>
    );
}

export default PlanCalendar;
