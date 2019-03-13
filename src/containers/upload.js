import React from 'react';
import firebase from '../services/storageManagement';

export default class Home extends React.Component {

  handleFileInput = e => {
    console.dir(e.target)
    const firstFile = e.target.files[0];
    const root = firebase.storage().ref();
  };

  render() {

    return (
      <div className='container'>
        <div className="input-group mb-3">
          <div className="custom-file">
            <input type="file" className="custom-file-input" accept="image/*" onChange={this.handleFileInput} />
            <label className="custom-file-label">Upload Image</label>
          </div>
        </div>
      </div>
    );
  }
}