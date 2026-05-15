import Navbar from "../components/Navbar";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaEdit,
  FaInstagram,
  FaHeart,
  FaShoppingBag,
  FaStar,
} from "react-icons/fa";

export default function Profile() {
  return (
    <div className="profile-page">

      <Navbar />

      <section className="profile-section">

        {/* HERO */}

        <div className="profile-hero">

          <div className="profile-cover"></div>

          <div className="profile-content">

            <div className="profile-image-wrap">

              <img
                src="https://i.pravatar.cc/500"
                alt="profile"
                className="profile-image"
              />

              <div className="online-badge"></div>

            </div>

            <div className="profile-text">

              <span className="profile-tag">
                Luxury Fashion Seller
              </span>

              <h1>Emma Njoku</h1>

              <p>
                Curating premium luxury fashion pieces
                crafted for elegance, confidence and
                timeless style.
              </p>

              <div className="profile-actions">

                <button className="edit-btn">
                  <FaEdit />
                  Edit Profile
                </button>

                <button className="follow-btn">
                  Follow
                </button>

              </div>

            </div>

          </div>

        </div>

        {/* STATS */}

        <div className="stats-grid">

          <div className="stat-card">
            <FaShoppingBag />

            <h2>148</h2>

            <p>Products Sold</p>
          </div>

          <div className="stat-card">
            <FaHeart />

            <h2>12.4K</h2>

            <p>Followers</p>
          </div>

          <div className="stat-card">
            <FaStar />

            <h2>4.9</h2>

            <p>Seller Rating</p>
          </div>

        </div>

        {/* INFO */}

        <div className="profile-grid">

          {/* LEFT */}

          <div className="profile-card luxury-card">

            <div className="card-title">
              <h3>Personal Information</h3>
            </div>

            <div className="info-list">

              <div className="info-box">
                <div className="info-icon">
                  <FaEnvelope />
                </div>

                <div>
                  <span>Email Address</span>
                  <h4>emmanjoku@gmail.com</h4>
                </div>
              </div>

              <div className="info-box">
                <div className="info-icon">
                  <FaPhone />
                </div>

                <div>
                  <span>Phone Number</span>
                  <h4>+234 000 000 0000</h4>
                </div>
              </div>

              <div className="info-box">
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <span>Location</span>
                  <h4>Lagos, Nigeria</h4>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="profile-card luxury-card">

            <div className="card-title">
              <h3>Social Presence</h3>
            </div>

            <div className="social-card">

              <div className="social-row">

                <div className="social-icon">
                  <FaInstagram />
                </div>

                <div>
                  <span>Instagram</span>
                  <h4>@emmanjokuluxury</h4>
                </div>

              </div>

              <button>
                View Profile
              </button>

            </div>

            <div className="seller-note">

              <h4>About Seller</h4>

              <p>
                Passionate about delivering premium
                fashion experiences through elegant,
                modern and timeless collections.
              </p>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}