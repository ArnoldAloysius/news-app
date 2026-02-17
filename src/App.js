import { useEffect, useState } from 'react';
import './App.css';
import News from './News';

function App() {


  let [articles,setArticles] = useState([]);
  let [category,setCategory] = useState('Latest')

useEffect (()=>{

  fetch(`https://newsapi.org/v2/everything?q=${category}&sortBy=publishedAt&apiKey=72f9812acade4be78f2f803873d51860`)
  .then((response)=>response.json())
  .then((news)=>{
    setArticles(news.articles);
    console.log(news)
  })

},[category])

  return (
    <div className="App">
      <header className='header'>       
      <u> <h1>Flash News </h1></u>
        <input type='search' onChange={(event)=>{
          if(event.target.value!=="")
          {
          setCategory(event.target.value);
          }
          else
          {
           setCategory('Latest')
          }
        }} placeholder='Search News'/>

      </header>

      <section className='newsarticles'>
        {
          articles.length!==0?
          articles.map((article)=>{
            return(
              <News article={article}/>
            )
          })
          :
          <h3>No News Found for the Searched Topic</h3>
        }
       </section>
    </div>
  );
}

export default App;
