// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Sidebar.css';
import jsPDF from 'jspdf';

export default class Sidebar extends Component {
  constructor(){
		super();
		this.exportPdf = this.exportPdf.bind(this);
		this.doc = new jsPDF();
	}

	exportPdf(){
    this.doc.fromHTML(document.querySelector('#editor').innerHTML, 15, 15, {
      'width': 170,'elementHandlers': {
				'#bypassme': function (element, renderer) {
					return true;
				}
			}
    });
    this.doc.save('sample-file.pdf');
	}

  render(){
    return (
        <div className={styles.sidebar}>
          <div className={styles.backButton}>
            <Link to="/">
              <i className="fa fa-arrow-left fa-3x" />
            </Link>

				<a className={styles.btnExport} onClick={this.exportPdf}>
                <i className="fa fa-share-square-o" aria-hidden="true"></i>
                <span>pdf</span>
						</a>
          </div>
        </div>
    )
  }
}
