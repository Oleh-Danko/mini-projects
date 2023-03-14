import {useState, useEffect} from 'react';

import { Collection } from './Collections';

import './index.scss';

function App() {
  const [collections, setConllections] = useState([])
  const [serchValue, setSearchValue] = useState('')
  const [categoryId, setCategoryId] = useState(0)
  const [isLoading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

  const categories =  [
    { "name": "Всі" },
    { "name": "Море" },
    { "name": "Гори" },
    { "name": "Архітектура" },
    { "name": "Міста" }
  ]
  useEffect(() => {
    const category = categoryId ? `category=${categoryId}` : ''

    setLoading(true)

    fetch(`https://640f4968cde47f68db46c131.mockapi.io/photo-collections?page=${page}&limit=3&${category}`)
      .then(res => res.json())
      .then(json => setConllections(json))
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [categoryId, page])

  return (
    <div className="App">
      <h1>Моя коллекція фотографій</h1>
      <div className="top">
        <ul className="tags">
          {/* <li className="active">Все</li> */}
          {categories.map((category, i) => {
            return (
              <li
                key={i}
                onClick={() => setCategoryId(i)}
                className={i === categoryId ? "active" : ""} >
                  {category.name}
              </li>
            )
          })}
        </ul>
        <input 
          value={serchValue} 
          onChange={e => setSearchValue(e.target.value)}
          className="search-input" 
          placeholder="Пошук по назві" />
      </div>
          {isLoading ? <h2>Загрузка...</h2> : <div className="content">
        {collections
          .filter(elem => elem.name.toLowerCase().includes(serchValue.toLowerCase()))
          .map((item, i) => (
            <Collection
              name={item.name}
              images={item.photos}/>
        ))}
      </div>}
      <ul className="pagination">
        {[...Array(4)].map((_, i) => {
          return <li 
                    className={page === i + 1 ? 'active' : ''}
                    onClick={() => setPage(i + 1)} >
                    {i + 1}
                  </li>
        })}
      </ul>
    </div>
  );
}

export default App
