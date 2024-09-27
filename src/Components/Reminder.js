import React, { useState } from 'react';
import './Reminder.css'

function Reminder(props) {

    const [reminder, setReminder] = useState([])
    const [newreminder, setNewReminder] = useState('')

    const handleInputChange = (event) => {
        setNewReminder(event.target.value)
    }
    const handleAddReminder = () => {

        if (newreminder.trim()) {
            setReminder([...reminder, newreminder])
            setNewReminder("")
        }
    }
    const handleDeleteReminder = (index) => {
        setReminder(reminder.filter((item, itemindex) => itemindex != index))
    }

    return (
        <div className='container'>
            <h1  >Reminder App</h1>
            <div className='inputcontainer'>
                <input type="text" placeholder='Enter a reminder' onChange={handleInputChange} value={newreminder} />
                <button className='addbtn' onClick={handleAddReminder}>Add Reminder</button>
            </div>
            {
                reminder.length > 0 ?(
                  <ul className='ullist'>
                  {
                      reminder.map((reminder, index) => (
                          <li key={index}>
                              {reminder}
                              <button className='delete' onClick={() => handleDeleteReminder(index)}>Delete</button>
                          </li>
                      ))
                  }
              </ul>):
              <p className='ppp'>&#128532; No Reminders found &#128532;</p>
            }
            
          
        </div>
    );
}

export default Reminder;