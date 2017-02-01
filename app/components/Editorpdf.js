// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Editorpdf.css';
import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';
import Editor from 'react-medium-editor';

class Editorpdf extends Component {
  constructor(props){
    super(props);
    this.state = { text: ""}
  }

  render(){
    return (
      <div className={styles.container} id="editor">
        <Editor
          text={this.state.text}
          onChange={this.handleChange}
        />
      </div>
    )
  }

  handleChange(text, medium) {
    //change text in store.
  }
}


export default Editorpdf;
