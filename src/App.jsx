import { useFetch } from "./hooks/useFetch"
import { Input } from "./components/forms/input"
import { useState } from "react"
import { createPortal } from "react-dom"

function App() {
  return <div style={{
      height: 300,
      overflowY: 'scroll',
      background: '#EEE',
      margin: 20,
      position: 'relative'
    }}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente veniam quia ipsa nihil nesciunt non officia doloremque quis, cupiditate fugiat voluptate adipisci corrupti veritatis rem vel ut quo quam neque!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente veniam quia ipsa nihil nesciunt non officia doloremque quis, cupiditate fugiat voluptate adipisci corrupti veritatis rem vel ut quo quam neque!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente veniam quia ipsa nihil nesciunt non officia doloremque quis, cupiditate fugiat voluptate adipisci corrupti veritatis rem vel ut quo quam neque!</p>
      <Modal/>
  </div>
}

function Modal(){
  return createPortal(<div style={{
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 10,
    border: 'solid 1px grey',
    background: '#FFF'
  }}>
    je suis une modale   
  </div>, document.body)
}

export default App
