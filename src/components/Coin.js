import React from 'react';

// Bootstrap
import { Row, Col } from 'react-bootstrap'

// Style
import style from './Coin.module.css'

const coin = ({ data }) => {

     const { name, symbol, image, current_price, market_cap, price_change_percentage_24h } = data

     return (
          // <div className={style.container}>
          //      <Row>
          //           <Col>
          //                <img src={image} alt="icon" width='50' />
          //           </Col>
          //           <Col>
          //                <h5>{name}</h5>
          //           </Col>
          //           <Col>
          //                <span>{symbol.toUpperCase()}</span>
          //           </Col>
          //           <Col>
          //                <span>${current_price.toLocaleString()}</span>
          //           </Col>
          //           <Col>
          //                <span>{price_change_percentage_24h}</span>
          //           </Col>
          //           <Col>
          //                <span>${market_cap.toLocaleString()}</span>
          //           </Col>
          //      </Row>
          // </div>
          <div className={style.container}>
               <img src={image} alt="icon" width='50' />
               <h5>{name}</h5>
               <span>{symbol.toUpperCase()}</span>
               <span>${current_price.toLocaleString()}</span>
               <span>{price_change_percentage_24h}</span>
               <span>${market_cap.toLocaleString()}</span>
          </div>
     );
};

export default coin;