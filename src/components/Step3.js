// import React from "react";
// import "../Components.css";

// const Step3 = ({ formData, setFormData, prevStep, nextStep, submitForm }) => {
//   const handleCheckboxChange = (e) => {
//     const { name, checked } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       preferences: {
//         ...prevData.preferences,
//         [name]: checked,
//       },
//     }));
//   };

//   return (
//     <div>
//       <h1>Step 2</h1>
//       <h2>Your story is your brand. What’s it gonna be?</h2>
//       <p>
//         A brand is so much more than just a logo. When you have your mission and
//         vision figured out, move on to developing your company’s DNA.
//       </p>
//       <label>
//         <input
//           type="checkbox"
//           name="BrandIdentity"
//           checked={formData.preferences.BrandIdentity || false}
//           onChange={handleCheckboxChange}
//         />
//         Brand Identity
//       </label>
//       <label>
//         <input
//           type="checkbox"
//           name="LogoDesign"
//           checked={formData.preferences.LogoDesign || false}
//           onChange={handleCheckboxChange}
//         />
//         Logo Design
//       </label>
//       <label>
//         <input
//           type="checkbox"
//           name="BusinessCardDesign"
//           checked={formData.preferences.BusinessCardDesign || false}
//           onChange={handleCheckboxChange}
//         />
//         Business Card Design
//       </label>
//       <label>
//         <input
//           type="checkbox"
//           name="PresentationDesign"
//           checked={formData.preferences.PresentationDesign || false}
//           onChange={handleCheckboxChange}
//         />
//         Presentation Design
//       </label>
//       <label>
//         <input
//           type="checkbox"
//           name="PackingDesign"
//           checked={formData.preferences.PackingDesign || false}
//           onChange={handleCheckboxChange}
//         />
//         Packing Design
//       </label>
//       <label>
//         <input
//           type="checkbox"
//           name="BusinessStationaryDesign"
//           checked={formData.preferences.BusinessStationaryDesign || false}
//           onChange={handleCheckboxChange}
//         />
//         Business Stationary Design
//       </label>
//       <button onClick={prevStep}>Back</button>
//       <button onClick={nextStep}>Next</button>
//       {/* <button onClick={submitForm}>Submit</button> */}
//     </div>
//   );
// };

// export default Step3;

import React from "react";
import "../Components.css";

const Step3 = ({ formData, setFormData, nextStep, prevStep }) => {
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      branding: {
        ...prevData.branding,
        [name]: checked,
      },
    }));
  };

  return (
    <div>
      <h1>Step 3</h1>
      <h2>Branding & Identity</h2>
      <p>
        Define the look and feel of your brand to connect with your audience.
      </p>
      <label>
        <input
          type="checkbox"
          name="BrandIdentity"
          checked={formData.branding.BrandIdentity || false}
          onChange={handleCheckboxChange}
        />
        Brand Identity
      </label>
      <label>
        <input
          type="checkbox"
          name="LogoDesign"
          checked={formData.branding.LogoDesign || false}
          onChange={handleCheckboxChange}
        />
        Logo Design
      </label>
      <label>
        <input
          type="checkbox"
          name="BusinessCardDesign"
          checked={formData.branding.BusinessCardDesign || false}
          onChange={handleCheckboxChange}
        />
        Business Card Design
      </label>
      <label>
        <input
          type="checkbox"
          name="PresentationDesign"
          checked={formData.branding.PresentationDesign || false}
          onChange={handleCheckboxChange}
        />
        Presentation Design
      </label>
      <label>
        <input
          type="checkbox"
          name="PackingDesign"
          checked={formData.branding.PackingDesign || false}
          onChange={handleCheckboxChange}
        />
        Packing Design
      </label>
      <label>
        <input
          type="checkbox"
          name="BusinessStationaryDesign"
          checked={formData.branding.BusinessStationaryDesign || false}
          onChange={handleCheckboxChange}
        />
        Business Stationary Design
      </label>
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default Step3;
