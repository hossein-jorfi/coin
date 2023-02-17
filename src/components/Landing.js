import React, { useEffect, useState } from 'react';

// API
import { getData } from '../services/api';

// Components
import Loading from './Loading';
import Coin from './Coin';

// Bootstrap
import { Container, Form } from 'react-bootstrap';

// Style
import style from './Landing.module.css'

const Landing = () => {

     const [data, setData] = useState([])
     const [search, setSearch] = useState('')

     useEffect(() => {
          const fetchAPI = async () => {
               const data = await getData()
               setData(data);
          }

          fetchAPI()
     }, [])

     const changeHandler = event => {
          setSearch(event.target.value)
     }

     const searchedCoins = data.filter(coin => (coin.name).toUpperCase().includes(search.toUpperCase()))

     return (
          <>
               <Container className={style.container}>
                    <br /><br />
                    <Form.Control className={style.input} type="text" placeholder='search' value={search} onChange={changeHandler} />
                    <br />
                    {
                         data.length ?
                              searchedCoins.map(coin => <Coin key={coin.id} data={coin} />)
                              :
                              <Loading />
                    }
                    {
                         !searchedCoins.length && data.length && <h4>Nothing math with '{search}'</h4>
                    }
               </Container>
          </>
     );
};

export default Landing;