import React from 'react'
import RouterInterno from './Router'
import Footer from './Components/Footer'
import Header from './Components/Header'
import { BrowserRouter } from 'react-router-dom'
function App(){
    return (
        <BrowserRouter>
            <Header/>
            <RouterInterno/>
            <Footer/>    
        </BrowserRouter>
        )
}
export default App;
