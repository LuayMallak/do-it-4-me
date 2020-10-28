import React, { Component } from "react";
import axios from "axios";
import { StyledImageUpload } from "../../Styled-Components/StyledImageUpload";

export default class ImageUpload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Initially, no file is selected
      selectedFile: null,
    };
  }
  // On file select (from the pop up)
  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  };

  // On file upload (click the upload button)
  onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append(
      "userImage",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
    //Click handler from parent
    /*     handleClick = () => {
      this.props.onClick();
      this.onFileUpload();
    }; */
    // Details of the uploaded file

    // Request made to the backend api
    // Send formData object
    axios
      .post(
        `http://localhost:3000/api/users/${this.props.id}/userImage`,
        formData
      )
      .then(() => this.props.fetchUser(this.props.id));
    if (this.props.onClick) {
      this.props.onClick();

      /*      setTimeout(() => {
        useProfileFetch().fetchUser(this.props.id);
      }, 3000); */
    }
  };

  // File content to be displayed after
  // file upload is complete
  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div className="fileInfo">
          <h2>File Details:</h2>
          <p>File Name: {this.state.selectedFile.name}</p>
          <p>File Type: {this.state.selectedFile.type}</p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          {/* <h4>No File Chosen</h4> */}
        </div>
      );
    }
  };

  render() {
    return (
      <StyledImageUpload>
        <h3 className="title">Please Upload your Photo</h3>
        <input
          className="choose-a-file"
          type="file"
          onChange={this.onFileChange}
        />
        {this.fileData()}
        <button className="upload-btn" onClick={this.onFileUpload}>
          Upload!
        </button>
      </StyledImageUpload>
    );
  }
}
