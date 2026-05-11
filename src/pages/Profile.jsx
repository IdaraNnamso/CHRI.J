import Navbar from "../components/Navbar";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaEdit,
} from "react-icons/fa";

export default function Profile() {
  return (
    <div>
      <Navbar />

      <section className="profile">
        <div className="profile-card">

          <div className="profile-top">
            <img
              src="https://i.pravatar.cc/300"
              alt="profile"
            />

            <h1>Chris John</h1>

            <p>Fashion Seller</p>

            <button>
              <FaEdit />
              Edit Profile
            </button>
          </div>

          <div className="profile-info">

            <div className="info-box">
              <FaEnvelope />
              <span>chrisj@gmail.com</span>
            </div>

            <div className="info-box">
              <FaPhone />
              <span>+234 000 000 0000</span>
            </div>

            <div className="info-box">
              <FaMapMarkerAlt />
              <span>Lagos, Nigeria</span>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}