import Calendar from 'react-calendar';
import React, { useState } from 'react';
import Moment from 'react-moment';
import 'react-calendar/dist/Calendar.css';
import TimePicker from 'react-time-picker';
import './App.css';
import data from './data/data.json'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList';

function App() {

  const [date, setDate] = useState(new Date())
  const [value, onChange] = useState('10:00');
  const [todo, setTodo] = useState(data)

  const changeDate = (e) => {
    setDate(e)
  }

  const handleToggle = (id) => {
    let mapped = todo.map(meet => {
      return meet.id === Number(id) ? { ...meet, complete: !meet.complete } : { ...meet }
    })
    setTodo(mapped)
  }

  const handleFilter = () => {
    let filtered = todo.filter(meet => {
      return !meet.complete
    })
    setTodo(filtered)
  }

  const addAppointment = (meetingTitle, meetingDesc, date, rtime) => {
    let copy = [...todo]
    copy = [...copy, { id: todo.length + 1, title: meetingTitle, desc: meetingDesc, date: date, rtime: rtime, complete: false }]
    setTodo(copy)
  }

  let datetext = <Moment format="D MMM YYYY" withTitle>{date}</Moment>
  datetext = datetext.props.children.toString().slice(0, 15)

  return (
    <div className="App">
      <h2 className="header">A Calender App for making appointments</h2>
      <p className="header">You can send email to your email-id</p>
      <div className="calend-time">
        <Calendar
          value={date}
          onChange={changeDate}
        />
        <span style={{ height: "1em" }}></span>
        <TimePicker
          value={value}
          onChange={onChange}
        />
      </div>
      <p className="para">Current selected date is <Moment format="D MMM YYYY" withTitle>{date}</Moment> and time is {value} hrs</p>
      <div>
        <TodoForm addAppointment={addAppointment} d={<Moment format="D MMM YYYY" withTitle>{date}</Moment>} t={value} datetext={datetext} />
        <hr />
        <h3 className="header">List of Scheduled Meetings</h3>
        <TodoList todo={todo} handleToggle={handleToggle} handleFilter={handleFilter} />
      </div>
    </div>
  );
}

export default App;
