import React from "react";
import SemiCircleProgressBar from "react-progressbar-semicircle";
import "./ViewProfile.css";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { GoMail } from "react-icons/go";
import { FaPerson } from "react-icons/fa6";
import { PiFirstAidKit } from "react-icons/pi";
import { GiLeg } from "react-icons/gi";
import { LiaFileMedicalAltSolid } from "react-icons/lia";
import patientData from '../../data/patientData.json';

const ViewProfile = () => {
  const percentage = 40;

  return (
    <div className="outer">
      <div className="view-profile-container">
        <div className="view">View Patient</div>
        <hr />
        <header className="profile-header">
          <div className="profile-info">
            <p className="name">{patientData.name}, {patientData.ageGender}</p>
            <p className="id">Patient ID: {patientData.patientId}</p>
          </div>
          <div className="profile-pic">
            <FaRegCircleUser className="pic-prof" />
          </div>
        </header>

        <section className="goal-section">
          <h3>Goal reached</h3>
          <div className="progress-section">
            <p className="percentage">50%</p>
            <div className="goal-indicators">
              <div className="indicator-emg">
                <p>EMG</p>
                <div className="emg-line"></div>
              </div>
              <div className="indicator-rom">
                <p>ROM</p>
                <div className="rom-line"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="details-section">
          <div className="detail-question"><strong>Phone no:</strong></div>
          <div className="detail-answer"><span><IoMdCall />  {patientData.phone}</span></div>

          <div className="detail-question"><strong>Mail ID:</strong></div>
          <div className="detail-answer"><span><GoMail />  {patientData.email}</span></div>

          <div className="detail-question"><strong>Affected side:</strong></div>
          <div className="detail-answer"><span><FaPerson />  {patientData.affectedSide}</span></div>

          <div className="detail-question"><strong>Condition:</strong></div>
          <div className="detail-answer"><span><GiLeg />  {patientData.condition}</span></div>

          <div className="detail-question"><strong>Speciality:</strong></div>
          <div className="detail-answer"><span><PiFirstAidKit />  {patientData.speciality}</span></div>
        </section>
        
        <hr />
        <div className="detail-section">
          <div className="detail-question"><strong><LiaFileMedicalAltSolid />  Medical history:</strong> <span>{patientData.medicalHistory}</span></div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default ViewProfile;
