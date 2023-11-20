import { useFetch } from "./hooks/useFetch"
import { useIncrement } from "./hooks/useIncrement"
import { useToggle } from "./hooks/useToggle"
import { useState } from "react"

function App() {
  const {loading, data, errors} = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=10&delay=5000')
    
  return <div className="container my-2">
      {loading && <div className="spinner-border" role="status">
        <span className="visualy-hidden">Chargement...</span>
    </div>}
    {errors && <div className="alert alert-danger">{errors.toString()}</div>}
    {data && <div>
          <ul>
            {data.map(post => (<li key={post.id}>{post.title}</li>))}
          </ul>
      </div>}
  </div>
 
}

export default App
