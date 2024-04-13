import React, { useContext } from 'react'
import { PageData } from '../app-data'

/* COMPONENTS */
import ScheduleEvent from './ScheduleEvent'

function Schedule() {

  const { state } = useContext(PageData)

  const getDateTime = date => [
    date.toLocaleDateString('default', { month: "long", day: "numeric" }),
    date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  ]

  const compare = (event1, event2) => {
    let date1 = new Date(event1.fields.Date)
    let date2 = new Date(event2.fields.Date)
    return date1 - date2;
  }

  return (
    <div id="schedule">
      <h2>schedule</h2>
      <p className="p-small">All times are in Eastern Time (ET)</p>
      {
        state.schedule && 
        state.schedule.sort(compare).map((event, index) => {

          const [prevDate] = (state.schedule[index - 1]) ? getDateTime(new Date(state.schedule[index - 1].fields.Date)) : "";
          const [date] = getDateTime(new Date(event.fields.Date))
          
          return (
            <React.Fragment>
            { date !== prevDate && <h3 key={`dateh2${index}`}>{date.toLowerCase()}</h3> }
            <ScheduleEvent key={index} event={event} />
            </React.Fragment>
            )
        })
      }
    </div>
  )
}

export default Schedule
