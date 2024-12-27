import React, { useState, useEffect } from "react";
import axios from "axios";
import Sections from "./Sections";

const ProfileInfo = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [userData, setUserData] = useState({
    surname: "",
    name: "",
    middleName: "",
    phone: "",
    email: "",
    profileImage: null,
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/user/profile`);
        const data = response.data;

        // Если у пользователя есть изображение профиля
        if (data.profileImage) {
          setProfilePicture(data.profileImage);
        }

        setUserData({
          surname: data.surname,
          name: data.name,
          middleName: data.middleName,
          phone: data.phone,
          email: data.email,
          profileImage: data.profileImage,
        });
      } catch (error) {
        console.error("Ошибка при загрузке данных пользователя:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleFileChange = event => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePicture(imageUrl);
    }
  };

  return (
    <div className="profile-pages">
      <Sections />
      <div className="profile-info">
        <div className="profile-info-contact">
          <h2>Профиль</h2>
          <label htmlFor="inputSurname">Фамилия*</label>
          <input
            type="text"
            id="registrationInputSurname"
            placeholder="Мардасевич"
            value={userData.surname}
            onChange={e => setUserData({ ...userData, surname: e.target.value })}
          />
          <label htmlFor="inputName">Имя*</label>
          <input
            type="text"
            id="registrationInputName"
            placeholder="Егор"
            value={userData.name}
            onChange={e => setUserData({ ...userData, name: e.target.value })}
          />
          <label htmlFor="inputMiddleName">Отчество</label>
          <input
            type="text"
            id="registrationInputMiddleName"
            placeholder="Сергеевич"
            value={userData.middleName}
            onChange={e => setUserData({ ...userData, middleName: e.target.value })}
          />
          <label htmlFor="inputPhone">Номер телефона*</label>
          <input
            type="tel"
            id="registrationInputPhone"
            required
            placeholder="+375447622722"
            value={userData.phone}
            onChange={e => setUserData({ ...userData, phone: e.target.value })}
          />
          <label htmlFor="inputEmail">E-mail</label>
          <input
            type="email"
            id="registrationInputEmail"
            placeholder="egorelfbar@gmail.com"
            value={userData.email}
            onChange={e => setUserData({ ...userData, email: e.target.value })}
          />
          <button type="button">Редактировать профиль</button>
        </div>
        <div className="profile-info-photo">
          {profilePicture && (
            <img src={profilePicture} alt="Profile Preview" id="photo" />
          )}
          <label htmlFor="files">Измененить фото профиля</label>
          <input id="files" type="file" accept="image/*" onChange={handleFileChange} />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
