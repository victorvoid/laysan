// @flow
import React, { Component } from 'react';
import Editorpdf from '../components/Editorpdf';
import Sidebar from '../components/Sidebar';

export default class EditorPage extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <Editorpdf />
      </div>
    );
  }
}
