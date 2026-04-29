import React, { useEffect, useState } from "react";
import { useAuth } from "../../AuthProvider";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";
import "./UserProfile.css";

const UserDetails = () => {
  const [user, setUser] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null);
  const [file, setFile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [uploadLoading, setUploadLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

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
    setIsEditing(true);
    setErrorMsg("");
    setSuccessMsg("");

    const reader = new FileReader();
    reader.onload = () => {
      setProfilePicture(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploadLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

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
        setSuccessMsg("Profile picture updated successfully!");
        setProfilePicture(`https://db.eneyiclothings.com/${data.filePath}`);
        setFile(null);
        setIsEditing(false);
      } else {
        setErrorMsg("Error uploading file");
      }
    } catch (error) {
      setErrorMsg("Error uploading file. Check connection.");
      console.error("Error uploading file:", error);
    } finally {
      setUploadLoading(false);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: { "image/*": [] },
  });

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!isAuthenticated) {
    return (
      <div className="auth-page animate-fade-in">
        <div className="container text-center">
          <h2 className="text-gold mb-4">Access Denied</h2>
          <p className="text-white-muted mb-4">Please log in to view your profile.</p>
          <button className="btn-primary" onClick={() => navigate("/login")}>Go to Login</button>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-page animate-fade-in">
      <div className="container section-padding">
        <div className="profile-wrapper glass-card">
          <div className="profile-header">
            <h2>Account Profile</h2>
            <button className="btn-outline logout-btn" onClick={handleLogout}>Log Out</button>
          </div>

          {errorMsg && (
            <div className="inline-message error">
              <span>⚠️</span>
              <p>{errorMsg}</p>
            </div>
          )}
          
          {successMsg && (
            <div className="inline-message success">
              <span>✓</span>
              <p>{successMsg}</p>
            </div>
          )}

          {user ? (
            <div className="profile-content">
              <div className="profile-sidebar">
                <div className="profile-picture-container" {...getRootProps()} style={{ pointerEvents: uploadLoading ? 'none' : 'auto', opacity: uploadLoading ? 0.6 : 1 }}>
                  <input {...getInputProps()} />
                  {profilePicture ? (
                    <img
                      src={profilePicture}
                      alt="Profile"
                      className="profile-picture"
                    />
                  ) : (
                    <div className="upload-placeholder">
                      <span className="upload-icon">📷</span>
                      <p>Click or drag to upload</p>
                    </div>
                  )}
                  <div className="profile-picture-overlay">
                    <span>Change Photo</span>
                  </div>
                </div>
                
                {isEditing && (
                  <button className="btn-primary upload-btn mt-4" onClick={handleUpload} disabled={uploadLoading}>
                    {uploadLoading ? <span className="spinner spinner-sm"></span> : "Save New Photo"}
                  </button>
                )}
              </div>

              <div className="profile-details">
                <div className="detail-group">
                  <label>First Name</label>
                  <p>{user.first_name || "Not provided"}</p>
                </div>
                <div className="detail-group">
                  <label>Last Name</label>
                  <p>{user.last_name || "Not provided"}</p>
                </div>
                <div className="detail-group">
                  <label>Email Address</label>
                  <p>{user.email}</p>
                </div>
                <div className="detail-group">
                  <label>Account Status</label>
                  <p className="status-badge">Active</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-5">
              <p className="text-white-muted">Loading your profile data...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
