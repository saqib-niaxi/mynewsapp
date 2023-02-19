import React, { useEffect, useState } from 'react'
import axios from 'axios';
function App() {
  

  const [news, setNews] = useState([])
  useEffect(() => {
    axios
    .get(" https://newsapi.org/v2/top-headlines?country=in&apiKey=7698789c567e424c83879002986c862e")
      .then((res) => {
        setNews(res.data.articles);
      })

  }, [])
  return (
    <>
      <div className='container my-5'>
        <div className='row text-center'>
          {
            news.map((val) => {
              return (
                <div className='col my-3'>
                  <div class="card" style={{ width: "18rem" }}>
                    <img src={val.urlToImage} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">{val.title}</h5>
                      <p class="card-text">{val.description}</p>
                      
                    </div>
                  </div>

                </div>

              )
            })
          }
        </div>
      </div>

    </>
  )
}
export default App;