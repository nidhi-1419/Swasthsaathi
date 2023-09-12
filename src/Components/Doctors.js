import React from "react";
import DoctorCard from "./DoctorCard";
import doctorData from "../Scripts/doctorsData";
import profile1 from "../Assets/profile-1.png";
import profile2 from "../Assets/profile-2.png";
import profile3 from "../Assets/profile-3.png";
import profile4 from "../Assets/profile-4.png";
import "../Styles/Doctors.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Doctors</span>
        </h3>

        <p className="dt-description">
          Meet our exceptional team of specialist doctors, dedicated to
          providing top-notch healthcare services at Health Plus. Trust in their
          knowledge and experience to lead you towards a healthier and happier
          life.
        </p>
      </div>

      <div className="dt-cards-content">
        {doctorData.map((doctor, index) => (
          <DoctorCard
            key={index}
            img={doctor.img}
            name={doctor.name}
            title={doctor.title}
            stars={doctor.stars}
            reviews={doctor.reviews}
          />
        ))}
      </div>
    </div>
  );
}

export default Doctors;
