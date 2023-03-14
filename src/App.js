import {useState, useEffect} from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

function App() {
  const [user, setUser] = useState([])
  const [invites, setInvites] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(res => res.json())
      .then(res => setUser(res.data))
      .catch(new Error('error'))
      .finally(setIsLoading(false))
  }, [])

  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites(invites => invites.filter(elem => elem !== id))
    } else {
      setInvites(invites => [...invites, id])
    }
  }

  return (
    <div className="App">
      {success ? <Success count={invites.length}/> : <Users 
        setSearchValue={setSearchValue}
        searchValue={searchValue} 
        items={user} 
        isLoading={isLoading}
        onClickInvite={onClickInvite}
        invites={invites}
        setSuccess={setSuccess} />}
    </div>
  );
}

export default App;
