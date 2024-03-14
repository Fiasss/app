import './App.css';
import React, { useEffect } from 'react';



function App() {

    useEffect(() => {

      for(let i = 0; i < 3; i++) {
        let selector = document.getElementById('selector')
        let xhr = new XMLHttpRequest()

        xhr.open('GET', 'https://randomuser.me/api/')
        xhr.onreadystatechange = function () {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            let data = JSON.parse(xhr.responseText)
            changeSelector(selector, data.results)
          }
        }

        xhr.send()

        function changeSelector(selector, options) {
          options.forEach(
            function (option) {
              let optionElement = document.createElement('option')
              optionElement.text = option.gender
              selector.appendChild(optionElement)
            }
          )
        }
      }
    }, [])



  return (
    <div className="app">
      <select id = "selector"></select>
    </div>
  )
}

export default App