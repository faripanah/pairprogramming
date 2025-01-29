import React from 'react'
import styles from './IdCard.module.css'
function IdCard(props) {
    return (
      <div  className={styles.card}>
        <div>
          <img src={props.picture} className={styles.img}alt="" width="100" />
        </div>
        <div>
          <p>First name: {props.firstName}</p>
          <p>Last Name: {props.lastName}</p>
          <p>Gender: {props.gender}</p>
          <p>Height: {props.height} cm</p>
          <p>Birth: {props.birth.toDateString()}</p>
        </div>
      </div>
    );
  }
  
  export default IdCard;
  