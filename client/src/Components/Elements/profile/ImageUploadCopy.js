import React, { useState } from "react";
import axios from "axios";

import { StyledImageUpload } from "../../Styled-Components/StyledImageUpload";
import { useProfileFetch } from "../../../data/useProfileFetch";

const ImageUpload = (props) => {
  const { fetchUser } = useProfileFetch();
  const [selectedFile, setSelectedFile] = useState(null);

  // On file select (from the pop up)
  const onFileChange = (event) => {
    // Update the state
    setSelectedFile(event.target.files[0]);
  };

  // On file upload (click the upload button)
  const onFileUpload = () => {
    // Create an object of formData
    let formData = new FormData();

    // Update the formData object
    formData.append("userImage", selectedFile, selectedFile.name);

    axios.post(
      `http://localhost:3000/api/users/${props.id}/userImage`,
      formData
    );
    if (props.onClick) {
      props.onClick();
      fetchUser(props.id);
      props.setRefresh(!props.refresh);
    }
  };

  // File content to be displayed after
  // file upload is complete
  const fileData = () => {
    if (selectedFile) {
      return (
        <div class="fileInfo">
          <h2>File Details:</h2>
          <p>File Name: {selectedFile.name}</p>
          <p>File Type: {selectedFile.type}</p>
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

  return (
    <StyledImageUpload>
      <h3 className="title">Please Upload your Photo</h3>
      <input className="choose-a-file" type="file" onChange={onFileChange} />
      {fileData()}
      <button className="upload-btn" onClick={onFileUpload}>
        Upload!
      </button>
    </StyledImageUpload>
  );
};

export default ImageUpload;
