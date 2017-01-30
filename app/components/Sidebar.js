// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Sidebar.css';

export default class Sidebar extends Component {


  render(){
    return (
        <div className={styles.sidebar}>
          <div className={styles.backButton}>
            <Link to="/">
              <i className="fa fa-arrow-left fa-3x" />
            </Link>

            <a className={styles.btnExport}>
                <i className="fa fa-share-square-o" aria-hidden="true"></i>
                <span>pdf</span>
            </a>
          </div>
        </div>
    )
  }
}
