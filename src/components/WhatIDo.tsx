import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>

      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>

          {/* First Active Block */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>Robotics</h3>
              <h4>Turning Ideas into Functional Robots & Mechanisms</h4>
              <p>
                Building projects in robotics, automation, and electronics while learning mechanical design and programming to solve practical engineering problems.
              </p>
              <h5>Skillset & Tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Arduino &amp; Microcontrollers</div>
                <div className="what-tags">Sensors</div>
                <div className="what-tags">Robotics</div>
                <div className="what-tags">Programming (Python, C++, C, Embedded C)</div>
                {/* <div className="what-tags">Electronics</div> */}
                <div className="what-tags">AutoCAD</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          {/* Second Block Commented Out */}
          
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>AUTOMATION</h3>
              {/* <h4>Automation</h4> */}
              <p>
                I have a strong foundation in electrical circuit analysis, object-oriented programming in C++, and embedded systems programming. I am proficient in using SolidWorks for mechanical design and simulation, enabling me to create efficient and functional designs for various applications.

              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Electric Circuit Analysis</div>
                <div className="what-tags">OOPS C++</div>
                {/* <div className="what-tags">REST &amp; real-time APIs</div> */}
                <div className="what-tags">Embedded C</div>
                <div className="what-tags">SolidWorks</div>
                {/* <div className="what-tags">React</div> */}
                {/* <div className="what-tags">Cloud &amp; infra</div> */}
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
         

        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}