import { useState, createContext } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Layout } from '../Layout/Layout'
import { SignUp } from '../../Auth/SignUp/SignUp'
import { Message } from '../Message/Message'
import { SignIn } from '../../Auth/SignIn/SignIn'
import { Home } from '../pokemon-tcg/Home/Home'
import { BuyBoosterPack } from '../pokemon-tcg/BoosterPack/BuyBoosterPack'

import './App.css'

export const AppContext = createContext(null)

function App() {
  const [user, setUser] = useState(null)
  const [messages, setMessages] = useState([])

  function handleAddMessage(message) {
    setMessages([...messages, message])
  }

  function handleDeleteMessage(id) {
    setMessages(messages.filter((message) => message.id !== id))
  }

  return (
    <AppContext.Provider value={{ messageContext: { handleAddMessage }, userContext: { user, setUser} }}>
      <Layout>
        <Routes>
          
          <Route path='/' element={user ? <Home /> : <SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/buy-pack' element={<BuyBoosterPack />} />
          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
        {messages.map((message) => (
          <Message
            key={message.id}
            message={message}
            onClose={() => handleDeleteMessage(message.id)}
          />
        ))}
      </Layout>
    </AppContext.Provider>
  )
}

export default App
