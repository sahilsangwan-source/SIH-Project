

// import { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import image1 from "../assets/BID FEATURE.png";
// import image2 from "../assets/company farmer.png";
// import image3 from "../assets/logo gov.png";
// import image4 from "../assets/price transpirancy.png";

// const serviceTexts = [
//   "Crop Bidding on our platform transforms the way crops are bought and sold by allowing farmers to auction their produce to a pool of interested buyers. This competitive bidding process can drive up prices, potentially securing better deals for farmers while offering buyers access to high-quality crops. The streamlined bidding process enhances market reach and efficiency, making it easier for farmers to find buyers and for buyers to acquire their desired crops. This dynamic approach offers flexibility and ensures that transactions are optimized for both parties.",
//   "Our platform connects farmers with exclusive Offers from Companies and Startups, providing them with unique opportunities to benefit from innovative agricultural solutions. Companies can present tailored offers, such as advanced farming technologies, equipment leasing, or bulk purchase agreements, which can significantly improve farm productivity and efficiency. Startups may provide cutting-edge solutions, financial support, or special programs designed to address specific farming needs. These offers not only help farmers access the latest advancements and resources but also foster collaboration with companies and startups eager to invest in agricultural growth. By leveraging these offers, farmers can enhance their operations, achieve better yields, and stay competitive in a rapidly evolving market.",
//   "Our platform facilitates Legal Government Contracts, ensuring that both farmers and buyers can engage in transactions with a solid legal foundation. For farmers, this means access to secure, government-backed contracts that protect their rights and ensure fair terms. These contracts can provide stability and reliability, reducing the risk of disputes and fostering trust in the marketplace. For buyers, legal contracts offer assurance that their purchases are legitimate and comply with regulatory standards, safeguarding against potential legal issues and ensuring the integrity of the transaction. By streamlining the process of contract management and adhering to government regulations, our platform enhances the security and transparency of business dealings for all parties involved.",
//   "Our platform offers Price Transparency, which empowers both farmers and buyers with real-time price data. This visibility allows for well-informed decision-making, ensuring that transactions occur at fair market values. By reducing the risk of price manipulation and promoting competitive pricing, our service helps both parties plan their budgets more effectively. This transparency fosters a trustworthy marketplace where farmers and buyers can engage with confidence, knowing they are receiving or paying fair prices.",
// ];

// const images = [image1, image2, image3, image4];

// export default function Services() {
//     const containerStyle = {
//         height:"100vh",
//         overflowX: 'auto',
//         overflowY: 'scroll',
//         padding: '20px',
//         backgroundColor: '#f5f5f5',
//         marginBottom:"100px"
//     };

//     const rowStyle = {
//         display: 'flex',
//         justifyContent: 'space-evenly', // Distributes items evenly
//         flexWrap: 'wrap',
//     };

//     const itemStyle = {
//         display: 'inline-block',
//         width: '300px',
//         margin: '10px',
//         height:'300px'
//     };

//     const imageStyle = {
//         width: '100%',
//         borderRadius: '8px',
//         margin:"10px"
//     };

//     const textStyle = {
//         marginTop: '10px',
//         width:'300px',
//        overflow:"scroll",
//        height:"350px",
//        overflowX:"scroll"
//     };

//     return (
//         <div style={containerStyle}>
//             <h1 style={{textAlign:"center",fontSize:"4rem"}}>Our Services</h1>
//             <div style={rowStyle}>
                
//                 {images.map((image, index) => (
//                     <div key={index} style={itemStyle}>
//                         <img src={image} alt={`Service ${index}`} style={imageStyle} width="300px" height="300px"/>
//                         <p style={textStyle}>{serviceTexts[index]}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }



// import { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import image1 from "../assets/BID FEATURE.png";
// import image2 from "../assets/company farmer.png";
// import image3 from "../assets/logo gov.png";
// import image4 from "../assets/price transpirancy.png";

// const serviceTexts = [
//   "Crop Bidding transforms the way crops are bought and sold, allowing farmers to auction produce to interested buyers, enhancing market reach and efficiency.",
//   "Connects farmers with exclusive offers from companies and startups, providing opportunities for advanced technologies and bulk purchase agreements.",
//   "Facilitates legal government contracts, ensuring secure transactions with fair terms and compliance with regulatory standards.",
//   "Offers price transparency with real-time data, enabling informed decision-making and reducing the risk of price manipulation.",
// ];

// const images = [image1, image2, image3, image4];

// export default function Services() {
//   const containerStyle = {
//     height: "100vh",
//     padding: '20px',
//     backgroundColor: '#f5f5f5',
//     marginBottom: "100px",
//   };

//   const rowStyle = {
//     display: 'flex',
//     justifyContent: 'space-evenly',
//     flexWrap: 'wrap',
//   };

//   return (
//     <div style={containerStyle}>
//       <h1 style={{ textAlign: "center", fontSize: "4rem", padding:"70px 0px"  }}>Our Services</h1>
//       <div style={rowStyle}>
//         {images.map((image, index) => (
//           <div key={index} className="card" style={{ width: '18rem', margin: '10px', border: '4' }}>
//             <img src={image} className="card-img-top" alt={`Service ${index}`} />
//             <div className="card-body" style={{backgroundColor:"#e7e7e7", }}>
//               <p className="card-text" style={{ color: '#666666', fontSize: '1.2rem' }}>
//                 {serviceTexts[index]}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import image1 from "../assets/BID FEATURE.png";
import image2 from "../assets/company farmer.png";
import image3 from "../assets/logo gov.png";
import image4 from "../assets/price transpirancy.png";

const serviceTexts = [
  "Crop Bidding transforms the way crops are bought and sold, allowing farmers to auction produce to interested buyers, enhancing market reach and efficiency.",
  "Connects farmers with exclusive offers from companies and startups, providing opportunities for advanced technologies and bulk purchase agreements.",
  "Facilitates legal government contracts, ensuring secure transactions with fair terms and compliance with regulatory standards.",
  "Offers price transparency with real-time data, enabling informed decision-making and reducing the risk of price manipulation.",
];

const images = [image1, image2, image3, image4];

export default function Services() {
  const containerStyle = {
    padding: '20px',
    backgroundColor: '#f5f5f5',
    marginBottom: "100px",
  };

  const rowStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  };

  const cardStyle = {
    width: '18rem',
    margin: '10px',
    border: 'none',
    borderRadius: '12px', // Slightly rounded corners
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
    backgroundColor: '#ffffff', // White background
  };

  const imgStyle = {
    objectFit: 'cover',
    borderRadius: '12px 12px 0 0', // Rounded corners on top
  };

  const textStyle = {
    color: '#666666',
    fontSize: '1rem',
    lineHeight: '1.6',
  };

  const buttonStyle = {
    backgroundColor: '#28a745',
    borderColor: '#28a745',
    color: '#ffffff', // White text color for the button
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ textAlign: "center", fontSize: "4rem", padding: "70px 0" }}>Our Services</h1>
      <div style={rowStyle}>
        {images.map((image, index) => (
          <div key={index} className="card" style={cardStyle}>
            <img src={image} className="card-img-top" alt={`Service ${index}`} style={imgStyle} />
            <div className="card-body" style={{ backgroundColor: "#f7f7f7" }}>
              <p className="card-text" style={textStyle}>
                {serviceTexts[index]}
              </p>
              <a href="#" className="btn" style={buttonStyle}>Learn More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
