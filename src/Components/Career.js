// src/components/CareerPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import log from '../vedio/BCC Logo.png'


const Career = () => {
  const styles = {
    header: {
      backgroundColor: '#f4f4f4',
      padding: '20px',
      textAlign: 'center',
    },
    section: {
      margin: '20px 0',
      padding: '0 20px',
    }
  };
  const steps = [
    { number: 1, title: 'Speak to Us', description: 'Our team will discuss the details of your requirements with you' },
    { number: 2, title: 'We Will Source', description: 'Using our extensive database we will source suitable workforce for your project' },
    { number: 3, title: 'Analyse', description: 'Our management team will meet face to face with the team to discuss skillset & experience' },
    { number: 4, title: 'Introductions', description: 'We will arrive on site to introduce our operatives to you on the 1st day' },
    { number: 5, title: 'Support', description: 'Throughout the project we will offer you our continued support and meet to discuss any further requirements' },
  ];
  return (
    <div>
    <div className="career-container">
       <div>
      <header style={styles.header}>
        <h1>Welcome to Our Careers Page</h1>
        <p>At BLUE CHIP COLOMBO , we believe in building a culture where every employee is valued and given the opportunity to grow. Join us in our journey of innovation and excellence.</p>
        <img src={log} height={50} width={50}></img>
      </header>
   
     
    </div>
      <h1 className="career-title">Explore Careers</h1>
      <div className="career-grid">
        <Link to="/ca">
          <div className="category">
            <img src="https://www.mahavirlabours.com/img/man-2.jpg" alt="Category 1" />
            <h2>Construction</h2>
          </div>
        </Link>
        <Link to="/category2">
          <div className="category">
            <img src="https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.jpg?s=612x612&w=0&k=20&c=EDqQ0oBcpFGV25p61vWUF5N-6lRJdbmZmQMe5kyuxyA=" alt="Category 2" />
            <h2>Restaurent</h2>
          </div>
        </Link>
        <Link to="/category3">
          <div className="category">
            <img src="https://blog.atdoorstep.ae/wp-content/uploads/2024/02/cleaning-services.jpg" alt="Category 3" />
            <h2>Cleaning Services</h2>
          </div>
        </Link>
        <Link to="/category4">
          <div className="category">
            <img src="https://media.gettyimages.com/id/1204025740/photo/portrait-fo-latino-employee-in-supermarket.jpg?s=612x612&w=gi&k=20&c=rNgeIF3Y13bRYjLbvhXEu2e9jV0Yrjr3psv7Wrfe-Co=" alt="Category 4" />
            <h2>Supermarket</h2>
          </div>
        </Link>
        <Link to="/category5">
          <div className="category">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwkNWvZqeGtFEJgFJT0ogrISS7clQJf1CEdg&s" alt="Category 5" />
            <h2>Retail</h2>
          </div>
        </Link>
        <Link to="/category6">
          <div className="category">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqilUsRQ724ObCxyOziA_VSvchrMtZDSU6qQ&s" alt="Category 6" />
            <h2>Transportation</h2>
          </div>
        </Link>
      </div>
      <h1 className="career-title">white collar jobs</h1>
      <div className="career-grid">
        <Link to="/ca">
          <div className="category">
            <img src="https://www.mahavirlabours.com/img/man-2.jpg" alt="Category 1" />
            <h2>Construction</h2>
          </div>
        </Link>
        <Link to="/category2">
          <div className="category">
            <img src="https://media.istockphoto.com/id/1307190527/photo/happy-waiter-serving-food-to-group-of-friends-in-a-pub.jpg?s=612x612&w=0&k=20&c=EDqQ0oBcpFGV25p61vWUF5N-6lRJdbmZmQMe5kyuxyA=" alt="Category 2" />
            <h2>Restaurent</h2>
          </div>
        </Link>
        <Link to="/category3">
          <div className="category">
            <img src="https://blog.atdoorstep.ae/wp-content/uploads/2024/02/cleaning-services.jpg" alt="Category 3" />
            <h2>Cleaning Services</h2>
          </div>
        </Link>
        <Link to="/category4">
          <div className="category">
            <img src="https://media.gettyimages.com/id/1204025740/photo/portrait-fo-latino-employee-in-supermarket.jpg?s=612x612&w=gi&k=20&c=rNgeIF3Y13bRYjLbvhXEu2e9jV0Yrjr3psv7Wrfe-Co=" alt="Category 4" />
            <h2>Supermarket</h2>
          </div>
        </Link>
        <Link to="/category5">
          <div className="category">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwkNWvZqeGtFEJgFJT0ogrISS7clQJf1CEdg&s" alt="Category 5" />
            <h2>Retail</h2>
          </div>
        </Link>
        <Link to="/category6">
          <div className="category">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqilUsRQ724ObCxyOziA_VSvchrMtZDSU6qQ&s" alt="Category 6" />
            <h2>Transportation</h2>
          </div>
        </Link>
      </div>
      <section style={styles.section}>
        <h2>Why Work With Us?</h2>
        <p>Blue Chip Colombo HR Consultancy is dedicated to creating an inclusive environment that fosters diversity, innovation, and growth. We offer competitive benefits, extensive training programs, and numerous opportunities for career advancement.</p>
      </section>
      <section style={styles.section}>
       
        <p>From past some years, UAE has witnessed a tremendous growth in various sectors. Earlier the economy of UAE was dominated by oil and petroleum industry but now UAE has become one of the rapidly growing economies which provide opportunities to a number of sectors. There is a huge demand for manpower in construction industry, but it is always tough to get skilled and quality manpower. We offer different types of construction labour supply services for short term and long term.</p>
      </section>
    
    </div>
    <section className="unique-career-section">
      <h2 className="unique-career-heading">WHERE CAN WE HELP YOU</h2>
      <h1 className="unique-career-title">Why should you choose us?</h1>
      
      <div className="unique-career-content">
        <div className="unique-career-card">
          <div className="unique-career-icon">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnaFebADwCaTpDDTx3sHOlbYv6OzJDh2WQzg&s" alt="Icon 1" />
          </div>
          <p>We guide you through the planning and setup phase. We make the process as simple as possible for you and maximize the effectiveness of your strategy.</p>
        </div>

        <div className="unique-career-card">
          <div className="unique-career-icon">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuxmh2S7ABbEtStT2cKKKKarm0xSBrQYKbgbWUXkpdOxP9glXyAeIC-ZNzqunSoxxZOx4&usqp=CAU" alt="Icon 2" />
          </div>
          <p>We guide you throughout the planning and setup phase, making the process as simple as possible for you, while maximizing the effectiveness of the strategy behind it.</p>
        </div>

        <div className="unique-career-card">
          <div className="unique-career-icon">
            <img src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2020/12/startup.jpg" alt="Icon 3" />
          </div>
          <p>We provide industry and role-specific research and engagement strategies to help you benefit from our technology and therefore, increasing your market visibility and brand value.</p>
        </div>

        <div className="unique-career-card">
          <div className="unique-career-icon">
            <img src="https://images.startups.co.uk/wp-content/uploads/2018/09/13123405/what-is-a-startup-business-1.jpg" alt="Icon 4" />
          </div>
          <p>We help leverage your USP – Unique Selling Point, to give you a competitive advantage.</p>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Career;