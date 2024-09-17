import React from 'react';


const certificationsData = [
  {
    imgSrc: 'https://img.freepik.com/free-vector/leaf-green-award-ribbon_78370-1826.jpg',
    altText: 'IAF Logo',
    text: 'Member Of Multilateral recognition arrangement',
  },
  {
    imgSrc: 'https://img.freepik.com/premium-vector/black-white-logo-with-seal-it_1025827-121049.jpg',
    altText: 'ISO 9001:2015 Logo',
    text: 'ISO 9001:2015 Quality Management Systems',
  },
  {
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu6sa8nyvXMTRVmL4K2Ko_etBWA0w234X18wOifwR-I63GviNdXG1lVn-EsS9wz8bMQLA&usqp=CAU',
    altText: 'ISO 14001:2015 Logo',
    text: 'ISO 14001:2015 Environmental Management Systems',
  },
  {
    imgSrc: 'https://img.freepik.com/free-vector/leaf-green-award-ribbon_78370-1826.jpg',
    altText: 'OHSAS 18001:2007 Logo',
    text: 'OHSAS 18001:2007 Occupational Health and Safety Systems',
  },
  {
    imgSrc: 'https://img.freepik.com/free-vector/leaf-green-award-ribbon_78370-1826.jpg',
    altText: 'CB-005-MS Logo',
    text: 'CB-005-MS',
  },
  {
    imgSrc: 'https://img.freepik.com/free-vector/leaf-green-award-ribbon_78370-1826.jpg',
    altText: 'ADNOC Logo',
    text: 'ADNOC Abu Dhabi National Oil Company',
  },
  {
    imgSrc: 'https://img.freepik.com/free-vector/leaf-green-award-ribbon_78370-1826.jpg',
    altText: 'Bureau Veritas Logo',
    text: 'Bureau Veritas Testing, Inspection & Certification',
  },
];

const Certifications = () => {
  return (
    <div className="certifications-container">
      <h2 className="certifications-title">Certifications</h2>
      <div className="certifications-list">
        {certificationsData.map((cert, index) => (
          <div className="certification-item" key={index}>
            <img src={cert.imgSrc} alt={cert.altText} className="cert-logo" />
            <p>{cert.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;