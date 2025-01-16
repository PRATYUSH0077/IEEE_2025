import React, { useState } from "react";
import venue_background from "../../assets/venue_background.jpg";
import "./RegistrationPage.css";

import Step_1 from "./Components/Step_1";
import Step_2 from "./Components/Step_2";
import Step_3 from "./Components/Step_3";
import Step_4 from "./Components/Step_4";
import Step_5 from "./Components/Step_5";
import Step_6 from "./Components/Step_6";
import Step_7 from "./Components/Step_7";

const RegistrationPage = () => {
  const [activeTab, setActiveTab] = useState("step_1");

  const tabs = [
    { id: "step_1", label: "Step 1: Registration Fees", component: <Step_1 /> },
    { id: "step_2", label: "Step 2: Payment Details", component: <Step_2 /> },
    { id: "step_3", label: "Step 3: Copyright Form", component: <Step_3 /> },
    { id: "step_4", label: "Step 4: Final Paper", component: <Step_4 /> },
    { id: "step_5", label: "Step 5: CRC Check", component: <Step_5 /> },
    { id: "step_6", label: "Step 6: CRC Upload", component: <Step_6 /> },
    { id: "step_7", label: "Step 7: Final Registration Form", component: <Step_7 /> },
  ];

  return (
    <div
      className="registration-venue-page"
      style={{ backgroundImage: `url(${venue_background})` }}
    >
      <div className="registration-page-container">
        <nav className="registration-tab-nav">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`registration-tab-button ${activeTab === tab.id ? "active" : ""
                }`}
              onClick={() => setActiveTab(tab.id)}
            // style={{ fontWeight: "bold" }}

            >
              {tab.label}
            </button>
          ))}
        </nav>
        <div className="registration-tab-content">
          {tabs.find((tab) => tab.id === activeTab)?.component}
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
