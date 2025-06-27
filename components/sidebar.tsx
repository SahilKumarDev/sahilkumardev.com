"use client";

import Image from "next/image";
import { useState } from "react";
import {
  FaEnvelope as Mail,
  FaPhone as Smartphone,
  FaCloudDownloadAlt as ResumeDownload,
  FaMapMarkerAlt as MapPin,
  FaChevronDown as ChevronDown,
  FaGithub as Github,
  FaYoutube as Youtube,
  FaLinkedin as Linkedin,
} from "react-icons/fa";

const contacts = [
  {
    icon: Smartphone,
    title: "Phone",
    content: (
      <a href="tel:+918960973119" className="contact-link">
        +91 8960973119
      </a>
    ),
  },
  {
    icon: ResumeDownload,
    title: "Details",
    content: (
      <a
        href={"/resume.pdf"}
        download={"Resume-sahil-kumar-dev"}
        className="contact-link"
      >
        Resume
      </a>
    ),
  },
  {
    icon: Mail,
    title: "Email",
    content: (
      <a href="mailto:sahilkumar@outlook.com" className="contact-link">
        sahilkumardev.com@gmail.com
      </a>
    ),
  },
  {
    icon: MapPin,
    title: "Location",
    content: <address>Orai, Uttar Pradesh, India</address>,
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/sahil-kumar-dev/",
  },
  {
    icon: Youtube,
    href: "https://www.youtube.com/channel/UCqPVcx9LH-_MLxjMxqwDf3g",
  },
  {
    icon: Github,
    href: "https://github.com/SahilKumarDev",
  },
];

const Sidebar = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const toggleSidebar = () => setIsSidebarActive((prev) => !prev);

  return (
    <>
      <aside className={`sidebar ${isSidebarActive ? "active" : ""}`}>
        <div className="sidebar-info">
          <figure className="avatar-box">
            <Image
              src={"/profile.png"}
              alt="Sahil kumar"
              width={80}
              height={120}
            />
          </figure>
          <div className="info-content">
            <h1 className="name title-text-1" title="NSxVillan">
              Sahil Kumar
            </h1>
            <p className="title">Web developer</p>
          </div>
          <button className="info_more-btn" onClick={toggleSidebar}>
            <span>Show Details</span>
            <ChevronDown />
          </button>
        </div>

        <div className="sidebar-info_more">
          <div className="separator"></div>
          <ul className="contacts-list">
            {contacts.map(({ icon: Icon, title, content }, index) => (
              <li className="contact-item" key={index}>
                <div className="icon-box">
                  <Icon />
                </div>
                <div className="contact-info">
                  <p className="contact-title">{title}</p>
                  {content}
                </div>
              </li>
            ))}
          </ul>
          <div className="separator"></div>
          <ul className="social-list">
            {socialLinks.map(({ icon: Icon, href }, index) => (
              <li className="social-item" key={index}>
                <a href={href} target="_blank" className="social-link">
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
