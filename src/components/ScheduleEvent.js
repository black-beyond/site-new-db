import React from 'react'

function ScheduleEvent({ event }) {

  const getDateTime = date => date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  const time = getDateTime(new Date(event.fields.Date));

  return (
    <div key={event.id} className="schedule-event">
      <p className="time">{time}</p>
      <p className="title">{event.fields.Title}</p>
    </div>
  )
}

export default ScheduleEvent
