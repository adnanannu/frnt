import React from 'react';
import logose from '../images/business-recruitment-application.jpg'
import BackButton from './BackButton';
import SocialMediaIcons from './SocialMediaIcons';



const Services = () => {
  return (
    <div className="services">
      <h2 className="title">Our <span className="highlight">HR Services</span></h2>
      <p className="description">
      Welcome to Blue Chip Colombo HR Consultancy, your trusted partner in delivering tailored HR solutions designed to meet the unique needs of businesses of all sizes. Whether you're a startup looking to build your team or an established company seeking to optimize your HR processes, we are here to help.
      </p>

      <div className="services-grid">
        <div className="service-card">
          <img src="https://thrivetrm.com/wp-content/uploads/2024/01/assessing-candidates-1.jpg" alt="Organization Design" />
          <h3>Recruitment and Staffing</h3>
        </div>
        <div className="service-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8uQsdvSVBzMOHbjSPNVy0BuRx1W-vZD_i9Q&s" alt="HR Strategy & Transformation" />
          <h3>Employee Onboarding</h3>
        </div>
        <div className="service-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXWpTsCLLF6eMUAVclv1ub169VQCCmlH8ueA&s" alt="HR Policies / Employee Relations" />
          <h3>Payroll Management</h3>
        </div>
        <div className="service-card">
          <img src="https://fellow.app/wp-content/uploads/2022/03/performance-review-meeting.jpg" alt="Job Evaluation" />
          <h3>Performance Management</h3>
        </div>
        <div className="service-card">
          <img src="https://appstronauts.co/wp-content/uploads/2021/04/workshops.jpg" alt="Job Evaluation" />
          <h3>Training and Development</h3>
        </div>
        <div className="service-card">
          <img src="https://white-rhino.co.uk/wp-content/uploads/2022/02/Hands-on-team-building-activities.png" alt="Job Evaluation" />
          <h3>Employee Relations</h3>
        </div>
        <div className="service-card">
          <img src="https://wildaid.github.io/assets/images/ComplianceCharts.png" alt="Job Evaluation" />
          <h3>Compliance and Legal Services</h3>
        </div>
        <div className="service-card">
          <img src="https://blog.udemy.com/wp-content/uploads/2014/04/bigstock-Image-of-business-partners-dis-41296537.jpg" alt="Job Evaluation" />
          <h3>HR Consulting</h3>
        </div>
        <div className="service-card">
          <img src="https://assets.visme.co/templates/banners/thumbnails/i_Employee-Benefits-Bifold-Brochure-full_1.jpg" alt="Job Evaluation" />
          <h3>Workplace Health and Safety</h3>
        </div>
        <SocialMediaIcons/>
        
      </div>
     
    </div>
  );
};

export default Services;