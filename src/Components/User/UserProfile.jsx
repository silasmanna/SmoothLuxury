import React, { useEffect, useState } from "react";
import { useAuth } from "../../AuthProvider";
import { useDropzone } from "react-dropzone";
import "./UserProfile.css";

const UserDetails = () => {
  const [user, setUser] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null);
  const [file, setFile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = localStorage.getItem("token");
      const response = await fetch("https://db.eneyiclothings.com/users/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
        setProfilePicture(
          userData.profile_picture
            ? `https://db.eneyiclothings.com/${userData.profile_picture}`
            : null
        );
      } else {
        console.error("Failed to fetch user details");
      }
    };

    if (isAuthenticated) {
      fetchUserDetails();
    }
  }, [isAuthenticated]);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setFile(file);

    const reader = new FileReader();
    reader.onload = () => {
      setProfilePicture(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("profilePicture", file);

    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        "https://db.eneyiclothings.com/users/me/picture",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        alert("Profile picture updated successfully!");
        setProfilePicture(`https://db.eneyiclothings.com/${data.filePath}`);
        setFile(null);
        setIsEditing(false);
      } else {
        console.error("Error uploading file:", response.statusText);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: "image/*",
  });

  if (!isAuthenticated) {
    return (
      <div id="LoginBtn" className="user-details-container">
        <h3>Please log in to see your details.</h3>
      </div>
    );
  }

  return (
    <div className="user-details-container">
      {user ? (
        <div className="user-details">
          <h1>User Information</h1>
          <div className="profile-picture-container" {...getRootProps()}>
            <input {...getInputProps()} />
            {profilePicture ? (
              <img
                src={profilePicture}
                alt="Profile"
                className="profile-picture"
              />
            ) : (
              <div className="upload-placeholder">
                <i className="cloud icon"></i>
                <p>Upload Profile Picture</p>
              </div>
            )}
          </div>
          <button onClick={isEditing ? handleUpload : () => setIsEditing(true)}>
            {isEditing ? "Change" : "Upload"}
          </button>
          <p>
            <strong>Name:</strong> {user.first_name} {user.last_name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default UserDetails;
