import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";
import "./VisaForm.css";
import PayPalButton from "./PayPalButton"; // Assuming your PayPalButton component is in the same directory

const visaFees = {
  Afghanistan: "0",
  Albania: "60",
  Algeria: "50",
  Andorra: "68",
  Angola: "2",
  AntiguaAndBarbuda: "75",
  Argentina: "50",
  Armenia: "40",
  Australia: "70",
  Austria: "80",
  Azerbaijan: "30",
  Bahamas: "100",
  Bahrain: "60",
  Bangladesh: "50",
  Barbados: "80",
  Belarus: "60",
  Belgium: "70",
  Belize: "85",
  Benin: "60",
  Bhutan: "30",
  Bolivia: "50",
  BosniaAndHerzegovina: "60",
  Botswana: "40",
  Brazil: "55",
  Brunei: "50",
  Bulgaria: "70",
  BurkinaFaso: "50",
  Burundi: "40",
  CaboVerde: "60",
  Cambodia: "30",
  Cameroon: "50",
  Canada: "170",
  CentralAfricanRepublic: "60",
  Chad: "50",
  Chile: "50",
  China: "70",
  Colombia: "50",
  Comoros: "40",
  CongoDemocraticRepublic: "60",
  CongoRepublic: "50",
  CostaRica: "60",
  Croatia: "70",
  Cuba: "30",
  Cyprus: "70",
  CzechRepublic: "80",
  Denmark: "80",
  Djibouti: "60",
  Dominica: "75",
  DominicanRepublic: "60",
  Ecuador: "40",
  Egypt: "50",
  ElSalvador: "60",
  EquatorialGuinea: "50",
  Eritrea: "40",
  Estonia: "70",
  Eswatini: "50",
  Ethiopia: "50",
  Fiji: "50",
  Finland: "80",
  France: "70",
  Gabon: "50",
  Gambia: "40",
  Georgia: "30",
  Germany: "70",
  Ghana: "60",
  Greece: "70",
  Grenada: "80",
  Guatemala: "60",
  Guinea: "50",
  GuineaBissau: "40",
  Guyana: "60",
  Haiti: "50",
  Honduras: "60",
  Hungary: "70",
  Iceland: "70",
  India: "50",
  Indonesia: "60",
  Iran: "50",
  Iraq: "50",
  Ireland: "70",
  Israel: "60",
  Italy: "70",
  Jamaica: "60",
  Japan: "60",
  Jordan: "50",
  Kazakhstan: "30",
  Kenya: "50",
  Kiribati: "40",
  KoreaNorth: "50",
  KoreaSouth: "60",
  Kuwait: "70",
  Kyrgyzstan: "30",
  Laos: "40",
  Latvia: "70",
  Lebanon: "50",
  Lesotho: "40",
  Liberia: "50",
  Libya: "50",
  Liechtenstein: "70",
  Lithuania: "70",
  Luxembourg: "80",
  Madagascar: "40",
  Malawi: "40",
  Malaysia: "60",
  Maldives: "50",
  Mali: "50",
  Malta: "70",
  MarshallIslands: "50",
  Mauritania: "50",
  Mauritius: "60",
  Mexico: "50",
  Micronesia: "50",
  Moldova: "60",
  Monaco: "70",
  Mongolia: "40",
  Montenegro: "60",
  Morocco: "50",
  Mozambique: "40",
  Myanmar: "50",
  Namibia: "40",
  Nauru: "50",
  Nepal: "30",
  Netherlands: "80",
  NewZealand: "70",
  Nicaragua: "60",
  Niger: "50",
  NorthMacedonia: "60",
  Norway: "80",
  Oman: "70",
  Pakistan: "50",
  Palau: "50",
  Panama: "50",
  PapuaNewGuinea: "40",
  Paraguay: "50",
  Peru: "50",
  Philippines: "50",
  Poland: "70",
  Portugal: "70",
  Qatar: "70",
  Romania: "70",
  Russia: "60",
  Rwanda: "50",
  SaintKittsAndNevis: "75",
  SaintLucia: "80",
  SaintVincentAndTheGrenadines: "80",
  Samoa: "50",
  SanMarino: "70",
  SaoTomeAndPrincipe: "40",
  SaudiArabia: "70",
  Senegal: "50",
  Serbia: "60",
  Seychelles: "60",
  SierraLeone: "50",
  Singapore: "60",
  Slovakia: "70",
  Slovenia: "70",
  SolomonIslands: "50",
  Somalia: "40",
  SouthAfrica: "60",
  SouthSudan: "50",
  Spain: "70",
  SriLanka: "50",
  Sudan: "50",
  Suriname: "50",
  Sweden: "80",
  Switzerland: "80",
  Syria: "50",
  Taiwan: "60",
  Tajikistan: "30",
  Tanzania: "50",
  Thailand: "60",
  TimorLeste: "40",
  Togo: "40",
  Tonga: "50",
  TrinidadAndTobago: "75",
  Tunisia: "50",
  Turkey: "50",
  Turkmenistan: "30",
  Tuvalu: "50",
  Uganda: "50",
  Ukraine: "60",
  UnitedArabEmirates: "70",
  UnitedKingdom: "150",
  UnitedStates: "160",
  Uruguay: "50",
  Uzbekistan: "30",
  Vanuatu: "50",
  VaticanCity: "70",
  Venezuela: "50",
  Vietnam: "60",
  Yemen: "50",
  Zambia: "50",
  Zimbabwe: "66",
};

const VisaApplicationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    surname: "",
    sex: "",
    age: "",
    occupation: "",
    email: "",
    placeOfBirth: "",
    nationality: "",
    contactAddress: "",
    passportType: "",
    passportNumber: "",
    dateOfIssue: "",
    expirationDate: "",
    placeOfIssue: "",
    expectedArrival: "",
    contactAddressInNigeria: "",
    durationOfStay: "",
    lastThreeCountries: "",
    visaType: "",
  });
  const [visaFee, setVisaFee] = useState(0);
  const [totalAmount, setTotalAmount] = useState(500);
  const [dataPageFile, setDataPageFile] = useState(null);
  const [photoFile, setPhotoFile] = useState(null);
  const [dataPagePreview, setDataPagePreview] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "nationality") {
      const fee = parseFloat(visaFees[value] || 0);
      setVisaFee(fee);
      setTotalAmount(fee + 500); // Always include the fixed amount of 500
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const form = new FormData();

    for (const key in formData) {
      form.append(key, formData[key]);
    }

    form.append("dataPage", dataPageFile);
    form.append("passportPhoto", photoFile);

    for (let pair of form.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }

    try {
      const response = await fetch(
        "https://db.eneyiclothings.com/visa-application",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: form,
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      console.log("Visa application submitted successfully:", responseData);
      alert("Visa application submitted successfully");

      navigate("/");
    } catch (err) {
      console.error("Error submitting visa application:", err);
    }
  };

  const handleFileDrop = (acceptedFiles, setFile, setPreview) => {
    const file = acceptedFiles[0];
    setFile(file);

    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const {
    getRootProps: getDataPageRootProps,
    getInputProps: getDataPageInputProps,
  } = useDropzone({
    onDrop: (acceptedFiles) =>
      handleFileDrop(acceptedFiles, setDataPageFile, setDataPagePreview),
    accept: {
      "application/pdf": [],
      "image/*": [],
    },
  });

  const { getRootProps: getPhotoRootProps, getInputProps: getPhotoInputProps } =
    useDropzone({
      onDrop: (acceptedFiles) =>
        handleFileDrop(acceptedFiles, setPhotoFile, setPhotoPreview),
      accept: {
        "application/pdf": [],
        "image/*": [],
      },
    });

  const onPaymentSuccess = (details) => {
    console.log("Payment successful:", details);
    // Perform any additional actions after successful payment
  };

  return (
    <div className="visa-application-container">
      <h2>Visa Application Form</h2>
      <form onSubmit={handleSubmit} className="visa-application-form">
        <div className="section-heading">Personal Details</div>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Middle Name</label>
          <input
            type="text"
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Surname</label>
          <input
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Sex</label>
          <select
            name="sex"
            value={formData.sex}
            onChange={handleChange}
            required
          >
            <option value="">Select Sex</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Occupation</label>
          <input
            type="text"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Place of Birth</label>
          <input
            type="text"
            name="placeOfBirth"
            value={formData.placeOfBirth}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Nationality</label>
          <select
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            required
          >
            <option value="">Select Nationality</option>
            {Object.entries(visaFees).map(([country, fee]) => (
              <option key={country} value={country}>
                {country} - ${fee}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Contact Address</label>
          <input
            type="text"
            name="contactAddress"
            value={formData.contactAddress}
            onChange={handleChange}
            required
          />
        </div>

        <div className="section-heading">Passport Details</div>
        <div className="form-group">
          <label>Type of Passport</label>
          <select
            name="passportType"
            value={formData.passportType}
            onChange={handleChange}
            required
          >
            <option value="">Select Passport Type</option>
            <option value="Ordinary">Ordinary</option>
            <option value="Diplomatic">Diplomatic</option>
            <option value="Official">Official</option>
            <option value="Service">Service</option>
          </select>
        </div>
        <div className="form-group">
          <label>Passport Number</label>
          <input
            type="text"
            name="passportNumber"
            value={formData.passportNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Upload Passport Data Page</label>
          <div {...getDataPageRootProps()} className="dropzone">
            <input {...getDataPageInputProps()} />
            {dataPagePreview ? (
              <img
                src={dataPagePreview}
                alt="Data Page Preview"
                className="preview-image"
              />
            ) : (
              <p>Drag & drop a file here, or click to select file</p>
            )}
          </div>
        </div>
        <div className="form-group">
          <label>Upload Passport Size Photograph</label>
          <div {...getPhotoRootProps()} className="dropzone">
            <input {...getPhotoInputProps()} />
            {photoPreview ? (
              <img
                src={photoPreview}
                alt="Passport Photo Preview"
                className="preview-image"
              />
            ) : (
              <p>Drag & drop a file here, or click to select file</p>
            )}
          </div>
        </div>
        <div className="form-group">
          <label>Date of Issue</label>
          <input
            type="date"
            name="dateOfIssue"
            value={formData.dateOfIssue}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Expiration Date</label>
          <input
            type="date"
            name="expirationDate"
            value={formData.expirationDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Place of Issue</label>
          <input
            type="text"
            name="placeOfIssue"
            value={formData.placeOfIssue}
            onChange={handleChange}
            required
          />
        </div>

        <div className="section-heading">Travel Information</div>
        <div className="form-group">
          <label>Expected Date of Arrival in Nigeria</label>
          <input
            type="date"
            name="expectedArrival"
            value={formData.expectedArrival}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Contact Address in Nigeria</label>
          <input
            type="text"
            name="contactAddressInNigeria"
            value={formData.contactAddressInNigeria}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Duration of Stay in Nigeria</label>
          <input
            type="text"
            name="durationOfStay"
            value={formData.durationOfStay}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Three Countries Visited</label>
          <input
            type="text"
            name="lastThreeCountries"
            value={formData.lastThreeCountries}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Type of Visa</label>
          <select
            name="visaType"
            value={formData.visaType}
            onChange={handleChange}
            required
          >
            <option value="">Select Visa Type</option>
            <option value="Tourist Visa">Tourist Visa</option>
            <option value="Business Visa">Business Visa</option>
            <option value="Transit Visa">Transit Visa</option>
            <option value="Student Visa">Student Visa</option>
            <option value="Diplomatic Visa">Diplomatic Visa</option>
          </select>
        </div>

        <p>Visa Fee: ${visaFee}</p>
        <p>Total Fee: ${totalAmount}</p>
        {/* <PayPalButton amount={totalAmount} onSuccess={onPaymentSuccess} /> */}
        <PayPalButton
          amount={visaFee.toFixed(2)}
          onSuccess={onPaymentSuccess}
        />

        <button type="submit" className="submit-button">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default VisaApplicationForm;
