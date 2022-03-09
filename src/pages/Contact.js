import React from 'react'
import { useLocation } from 'react-router-dom'

export const Contact = () => {
    const queryString=useLocation().search
    console.log(queryString);


    const queryParams=new URLSearchParams(queryString)
    const name= queryParams.get('name')


  return (
    <div>
        <h2>Hey {name},Contact us here.....</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ut autem in enim natus. Harum, libero rerum?
            Eveniet perspiciatis ducimus doloremque non iure saepe magnam pariatur modi veniam, voluptatibus doloribus quos numquam fugit eius eaque minus voluptates perferendis quas suscipit! Recusandae, architecto distinctio. Odio, illum nemo.
            Vitae reiciendis laborum sed tempore quod animi 
            architecto maxime incidunt libero earum dolorem ex consectetur suscipit aut
            dolores, qui minima eaque velit adipisci exercitationem corporis perspiciatis explicabo voluptatem distinctio.
            Molestias nulla modi iusto deleniti quam.</p>
    </div>
  )
}
