import './App.css';
import React, {useEffect, useState} from 'react';
import Table from './components/table';



function App() {
  
  const [results, setResults] = useState()

  useEffect (() => {
    let xhr = new XMLHttpRequest()
    
    xhr.open('GET', 'https://randomuser.me/api/')
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        let data = JSON.parse(xhr.responseText)
        setResults(data.results[0])
      }
    }
    xhr.send()
  }, [])

  if (!results) {
    return <div id="app">Loading...</div>;
  }
  else {
    return (
      <div id="app">
        <Table
          i11={results.name.first}
          i12={results.name.last}
          i13={results.location.country}
          i21={results.location.city}
          i22={results.location.state}
          i23={results.gender}
          i31={results.dob.age}
          i32={results.login.username}
          i33={results.login.password}
        />
      </div>
    )
  }
}

export default App