import React from 'react'
import Nav from './components/Nav/Nav'
import TopSection from './components/CoinSelector'
import Chat from './components/MainSection/Chat'
import MainScreen from './components/MainSection'
import Footer from './components/Footer/Footer'

const App = () => {
    return (
        <div>
            <Nav />
            <MainScreen />
            <Chat />
            <Footer />
        </div>
    )
}

export default App
