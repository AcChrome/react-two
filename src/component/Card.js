import React from "react";
import pic from "../images/katie-zaferes.png";
import star from "../images/star.png";

// export default function Card() {
//   return (
//     <div className="card">
//       <img src={pic} className="card--image"></img>
//       <div className="card--stats">
//         <img src={star} className="card--star" />
//         <span>5.0</span>
//         <span className="gray">(6) . </span>
//         <span className="gray">USA</span>
//         <p>Life Lessons with Katie Zaferes</p>
//         <p>
//           <span className="bold">From $136 / person</span>
//         </p>
//       </div>
//     </div>
//   );
// }

export default function Card() {
  return (
    <div className="card">
      <img src={pic} className="card--image" />
      <div className="card--stats">
        <img src={star} className="card--star" />
        <span>5.0</span>
        <span className="gray">(6) • </span>
        <span className="gray">USA</span>
      </div>
      <p>Life Lessons with Katie Zaferes</p>
      <p>
        <span className="bold">From $136</span> / person
      </p>
    </div>
  );
}
