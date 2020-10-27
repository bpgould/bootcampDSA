import React from 'react';
import ReactDom from 'react-dom'

//css
import './index.css';

//component requires capital letter name
function BookList(){
  return (
    <section className='bookList'> 
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return <article>
    Here is the book
    <Image></Image>
    <Title />
  </article>;
}
const Image = () => (
<img src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg" alt=''/> 
);

const Title = () => <h1>Title</h1>;


//Similar to appendTo
ReactDom.render(<BookList />,document.getElementById('root'));