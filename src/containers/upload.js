import React from 'react';
import root from '../services/storageManagement';
import ImageService from '../services/images';

export default class Home extends React.Component {

  saveImage = (url) => {
    const date = new Date();
    ImageService.saveImage(url, date);
  };

  handleFileInput = e => {

    const firstFile = e.target.files[0];
    const newImageRef = root.child(firstFile.name);
    newImageRef.put(firstFile)
    .then( snapshot => {
      return snapshot.ref.getDownloadURL()
    })
    .then( url => {
      this.saveImage(url);
    })
    .catch( err => {
      console.log('error: ', err);
    })
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