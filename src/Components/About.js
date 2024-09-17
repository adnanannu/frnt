import React from 'react';
import Certifications from './Certifications';




const About = () => {
  const styles = {
    section: {
      padding: '40px',
      textAlign: 'center',
      backgroundColor: '#f8f8f8',
    },
    title: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#002f6c', // dark blue color
    },
    subtitle: {
      fontSize: '18px',
      color: '#a0a0a0', // lighter color for the subtitle
      marginBottom: '40px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '20px',
    },
    card: {
      padding: '20px',
      backgroundColor: '#ffffff',
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      textAlign: 'left',
      fontSize: '16px',
    },
    quoteButton: {
      backgroundColor: '#00a0df',
      color: '#fff',
      padding: '12px 25px',
      fontSize: '16px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      marginRight: '15px',
    },
    contact: {
      marginTop: '15px',
      fontSize: '18px',
      color: '#002f6c',
    },
    phone: {
      color: '#002f6c',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
    mapContainer: {
      flex: 1,
      textAlign: 'right',
      minWidth: '300px',
    },
    mapImage: {
      maxWidth: '100%',
      height: 'auto',
    },
  };
  return (
    <div className="">
      <div className="container1">
      <div className="image-section">
        {/* Insert your image source below */}
        <img src="https://images.squarespace-cdn.com/content/v1/64cac6e7f41ccf1650ccc43b/1691537255531-J7BYDU9TJG1C1X1JPDQ9/Dubai-Skyline.jpg" alt="Profile" className="profile-img" />
      </div>
      <div className="text-section">
        <p>
        Welcome to Blue Chip Colombo HR Services – a leading HR consultancy dedicated to delivering tailored recruitment and human resource solutions to businesses across various industries. With a deep understanding of the dynamic needs of modern organizations, we bridge the gap between talent and opportunity, helping companies build a workforce that drives success. 
        </p>
       
        
        
      </div>
    </div>
       

      <section className="info-section">
        <div className="info-text">
          <p>
            We are a reputed manpower service provider headquartered in Dubai,
            providing unbeatable staffing solutions throughout the UAE (Dubai, Sharjah, Ajman, 
            Ras Al Khaimah, Fujairah, and Umm Al-Quwain , Abu Dhabi).
          </p>
          <p>
            As a registered manpower service provider in the UAE, we comply with established 
            standards and legislations of the UAE Ministry of Human Resources & Emiratisation. 
            Over the years, our performance has assisted hundreds of organizations to meet precise 
            skilled and unskilled workforce requirements across the UAE.
          </p>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-item">
          <h2>1500+</h2>
          <p>Projects Completed</p>
        </div>
        <div className="stats-item">
          <h2>15+</h2>
          <p>Years of Experience</p>
        </div>
        <div className="stats-item">
          <h2>4+</h2>
          <p>Offices in UAE</p>
        </div>
        <div className="stats-item">
          <h2>7000+</h2>
          <p>Manpower</p>
        </div>
        
        
      </section>
      <section style={styles.section}>
      <h2 style={styles.title}>Our Promise To You</h2>
      <h4 style={styles.subtitle}>Bond of Trust</h4>
      <div style={styles.grid}>
        <div style={styles.card}>
          <strong>We source</strong> candidates matching your job description.
        </div>
        <div style={styles.card}>
          <strong>We are experts</strong> delivering innovative workforce solutions.
        </div>
        <div style={styles.card}>
          <strong>We hire, train and retain</strong> the best talent.
        </div>
        <div style={styles.card}>
          <strong>We understand</strong> your business and industry.
        </div>
        <div style={styles.card}>
          <strong>We provide services tailored</strong> to your needs.
        </div>
        <div style={styles.card}>
          <strong>We manage your staffing needs</strong> while you focus on your business needs.
        </div>
        <div style={styles.card}>
          <strong>We promise to provide</strong>  customized HR solutions that are tailored to meet the unique needs of your business.
        </div>
        <div style={styles.card}>
          <strong>We guarantee the highest level of confidentiality</strong> in handling all sensitive information and data related to your organization and its employees.
        </div>
      </div>
    </section>
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.textContainer}>
          <p style={styles.text}>
            With a large <strong>pool of highly skilled workforce</strong>, we assure to meet all manpower requirements in the 
            <strong> shortest mobilization time</strong>, <strong>anywhere in the UAE</strong>.
          </p>
          <div style={styles.actions}>
            <button style={styles.quoteButton}>REQUEST A QUOTE</button>
            <p style={styles.contact}>
              Or Call <a href="tel:+971 54 323 2111" style={styles.phone}>+971 54 323 2111</a>
            </p>
          </div>
        </div>
        <div style={styles.mapContainer}>
          <img 
            src="https://dbdzm869oupei.cloudfront.net/img/sticker/preview/15683.png" 
            alt="UAE Map" 
            style={styles.mapImage}
          />
        </div>
      </div>
    </section>
      <section className="about-us">
            <div className="container">
                <div className="vision">
                    <h2>Our Vision</h2>
                    <p>"To be the leading HR consultancy that transforms organizations into workplaces where people thrive, driving exceptional growth and success through innovative and people-centric solutions.”</p>
                </div>
                <div className="mission">
                    <h2>Our Mission</h2>
                    <p>“Our mission is to empower organizations by providing expert HR consultancy services that enhance workforce performance, promote inclusive cultures, and align HR strategies with business goals. We are dedicated to delivering tailored solutions that foster sustainable success and drive positive organizational change.”</p>
                </div>
            </div>
        </section>
        


      <div className="container1">
      <div className="image-section">
        {/* Insert your image source below */}
        <img src="https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?s=612x612&w=0&k=20&c=NJSugBzNuZqb7DJ8ZgLfYKb3qPr2EJMvKZ21Sj5Sfq4=" alt="Profile" className="profile-img" />
      </div>
      <div className="text-section">
        <p>
          As a manpower service provider, we ensure to meet the latest manpower requirements, and all
          our services are <span className="highlight">tailor-made</span> according to client requirements.
        </p>
        <div className="person-info">
          <p><strong>Pradeep</strong></p>
          <p>Chairman, blue chip colombo</p>
        </div>
        
        
      </div>
    </div>
   
    <Certifications/>
    </div>
    
  );
};

export default About;