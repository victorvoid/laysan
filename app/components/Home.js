// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';


export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <h2>Laysan</h2>
          <Link to= "/counter">to create a pdf</Link>
        </div>
      </div>
    );
  }
}
