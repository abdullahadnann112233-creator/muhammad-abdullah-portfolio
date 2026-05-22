import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Journey <span>&</span>
          <br /> Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>2nd Semester</h4>
                <h5>NUST</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              <h5>SMART HOME AUTOMATION SYSTEM :</h5>
              
              Developed a Smart Home Automation System that can be controlled via voice commands and a web interface, enabling remote control of household appliances.<br></br>
              <h5>QUADCOPTER DRONE :</h5>
              

Designed and built a basic Drone prototype, focusing on flight mechanics, motor control, and stability concepts, gaining hands-on experience in aerial system design and control.<br>
</br>
<h5>RECTIFIER-RLC FILTER :</h5>
Constructed a Rectifier circuit (AC to DC conversion) along with an RLC filter circuit to reduce noise and smooth output signal, demonstrating understanding of power electronics and signal filtering.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>1st Semester</h4>
                <h5>NUST</h5>
                {/* <h5>3.18 GPA</h5> */}
              </div>
              <h3>2025-26</h3>
            </div>
            <p>
              Designed and built a Line Follower Robot, implementing basic sensors and control logic for autonomous navigation.      
              Developed a Robot Gripper Mechanism in AutoCAD, focusing on mechanical design and motion simulation.
              Created a Grocery Price Prediction and Weekly Budget Planning tool, applying basic data analysis and predictive modeling to optimize household budgeting.
            </p>
          </div>

          {/* 
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Consultant</h4>
                <h5>Genpact Headstrong </h5>
              </div>
              <h3>2016–17</h3>
            </div>
            <p>
              Sep 2016 – Nov 2017. Developed and maintained WCF services consumed
              by the UI; deployment support across environments; NUnit tests and
              coverage; bug fixes from QA and users; database work.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sf Engineer</h4>
                <h5>Infogain</h5>
              </div>
              <h3>2013-16</h3>
            </div>
            <p>
              Software engineering across enterprise projects, contributing to
              design, development, and delivery of business applications.
            </p>
          </div>
          */}

        </div>
      </div>
    </div>
  );
};

export default Career;