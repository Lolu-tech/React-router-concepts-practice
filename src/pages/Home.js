import React from 'react'
import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import './Home.css'

export const Home = () => {
    const {data:articles, isPending, error}=useFetch('http://localhost:3000/articles')
//useFetch custom hook destructured for use here



  return (
    <div className='home'>
        <h2>Articles</h2>
        {/* if articles are pending */}
        {isPending && <div>Loading...</div>}
        {/* if an error occurs */}
        {error && <div>{error}</div>}
        {/* displayin the articles if true */}
        {articles && articles.map((article)=>(
            <div key={article.id} className="card">
            <h3>{article.title}</h3>    
            <p>{article.author}</p>
            {/* link to open to the more robust description */}
            {/* Route step one */}
            <Link to={`/articles/${article.id}`}>Read more...</Link>   
            </div>
        ))}
    </div>
  )
}
