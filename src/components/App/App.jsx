import { useState, createContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import useWindowDimensions from './useWindowDimensions'


import { SignUp } from '../../Auth/SignUp/SignUp'
import { Message } from '../Message/Message'
import { SignIn } from '../../Auth/SignIn/SignIn'

import { standard } from '../shared/styles'
import { Header } from '../shared/Header'


import './App.css'
import { BuyCardsHome } from '../pokemon-tcg/BuyCards/BuyCardsHome'
import { BuyDecksHome } from '../pokemon-tcg/BuyCards/BuyDecks/BuyDecksHome'
import { BuyDeckShow } from '../pokemon-tcg/BuyCards/BuyDecks/BuyDeckShow'
import { BuyBoosterPackHome } from '../pokemon-tcg/BuyCards/BuyBoosterPacks/BuyBoosterPackHome'
import { BuyBoosterPackShow } from '../pokemon-tcg/BuyCards/BuyBoosterPacks/BuyBoosterPackShow'
import { OwnedCardsHome } from '../pokemon-tcg/OwnedCards/OwnedCardsHome'

// revamp
import Layout from '../Layout/Layout'
import Home from '../pokemon-tcg/Home/Home'

export const AppContext = createContext(null)

function App() {
  const [user, setUser] = useState(null)
  const [messages, setMessages] = useState([])
  const [mainHeight, setMainHeight] = useState(0)
  const { height, width } = useWindowDimensions()

  function handleAddMessage(message) {
    setMessages([...messages, message])
  }

  function handleDeleteMessage(id) {
    setMessages(messages.filter((message) => message.id !== id))
  }

  return (
    <AppContext.Provider value={
      {
        messageContext: { handleAddMessage },
        userContext: { user, setUser },
        windowDimensions: { totalHeight: height - 20, width, mainHeight, setMainHeight }
      }}>
        {/* margin top and bottom of 10px - is where the 20 is coming from */}
      <Layout theme={standard} height={height - 20}>
        <Routes>
          <Route path='/' element={<Home mainHeight={mainHeight}/>} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/buy' element={<BuyCardsHome />} />
          <Route path='/buy/decks' element={<BuyDecksHome />} />
          <Route path='/buy/decks/:deckName' element={<BuyDeckShow />} />
          <Route path='/buy/booster-packs' element={<BuyBoosterPackHome />} />
          <Route path='/buy/booster-packs/:packName' element={<BuyBoosterPackShow />} />
          <Route path='/owned-cards' element={<OwnedCardsHome />} />
          {/* <Route path='/buy-pack' element={<BuyBoosterPack />} />
          <Route path='/binder' element={<Binder />} />
          <Route path='/deck' element={<DeckHome />} />
          <Route path='/deck/create' element={<h1>Create a deck</h1>} />
          <Route path='/deck/pre-built' element={<PreBuiltIndex />} />
          <Route path='/deck/pre-built/:deckName' element={<PreBuiltShow />} /> */}
          <Route path='*' element={<Header>Not Found</Header>} />
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
