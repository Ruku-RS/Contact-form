import React, { useState } from 'react'
import ContactForm from './Components/ContactForm'

const App = () => {

const [notification, setNotification] = useState('');

  return (
    <div>
      <h1 className='bg-blue-200 min-h-screen flex justify-center items-center'>
        
        {/* Notification */}
        {
          notification && (
            <div className='absolute top-5 bg-green-600 text-white rounded-full px-5 py-2'>
              {
                notification
              }
            </div>
          )
        }
        <ContactForm 
        setNotification={setNotification}/>
      </h1>
    </div>
  )
}

export default App
