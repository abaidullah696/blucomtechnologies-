import React from "react";
import "../Components.css";

const Step4 = ({ formData, setFormData, nextStep, prevStep }) => {
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      onlinePresence: {
        ...prevData.onlinePresence,
        [name]: checked,
      },
    }));
  };

  return (
    <div>
      <h1>Step 3</h1>
      <h2>Say hi to the world! Build your online home.</h2>
      <p>
        These days, the reality is simple - if your brand is not online, it
        doesn’t exist. So where will you start?
      </p>
      <div className="flex">
        <div className="left">
          <label>
            <input
              type="checkbox"
              name="FullWebsiteDesign"
              checked={formData.onlinePresence.FullWebsiteDesign || false}
              onChange={handleCheckboxChange}
            />
            Full Website Design
          </label>
          <label>
            <input
              type="checkbox"
              name="WebsiteCopy"
              checked={formData.onlinePresence.WebsiteCopy || false}
              onChange={handleCheckboxChange}
            />
            Website Copy
          </label>
          <label>
            <input
              type="checkbox"
              name="LandingPageMockup"
              checked={formData.onlinePresence.LandingPageMockup || false}
              onChange={handleCheckboxChange}
            />
            Landing Page Mockup
          </label>
          <label>
            <input
              type="checkbox"
              name="BlogManagement"
              checked={formData.onlinePresence.BlogManagement || false}
              onChange={handleCheckboxChange}
            />
            Blog Management
          </label>
          <label>
            <input
              type="checkbox"
              name="CookiePrivacyPolicy"
              checked={formData.onlinePresence.CookiePrivacyPolicy || false}
              onChange={handleCheckboxChange}
            />
            Cookie & Privacy Policy
          </label>
        </div>
        <div className="right">
          <label>
            <input
              type="checkbox"
              name="WebsiteDevelopment"
              checked={formData.onlinePresence.WebsiteDevelopment || false}
              onChange={handleCheckboxChange}
            />
            Website Development
          </label>
          <label>
            <input
              type="checkbox"
              name="WebsiteImagery"
              checked={formData.onlinePresence.WebsiteImagery || false}
              onChange={handleCheckboxChange}
            />
            Website Imagery
          </label>
          <label>
            <input
              type="checkbox"
              name="SEOOptimization"
              checked={formData.onlinePresence.SEOOptimization || false}
              onChange={handleCheckboxChange}
            />
            SEO Optimization
          </label>
          <label>
            <input
              type="checkbox"
              name="GoogleAnalytics"
              checked={formData.onlinePresence.GoogleAnalytics || false}
              onChange={handleCheckboxChange}
            />
            Google Analytics
          </label>
          <label>
            <input
              type="checkbox"
              name="AppDevelopment"
              checked={formData.onlinePresence.AppDevelopment || false}
              onChange={handleCheckboxChange}
            />
            App Development
          </label>
        </div>
      </div>
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default Step4;
