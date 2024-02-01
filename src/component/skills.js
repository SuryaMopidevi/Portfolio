import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faPython } from '@fortawesome/free-brands-svg-icons';
import './skills.css'

function tech() {
  return (
    <div>
      <div>
        <h1 className="heading0">My  <span>Skills</span></h1>
      </div>
      <section>
        <div className="'container1" id='skills'>
          <h1 className="heading1">Technical skills</h1>
          <div className="Techincal-bars">
            <div className="bar"><FontAwesomeIcon className="html" icon={faHtml5} />
              <div className="info">
                <span>Html</span>
              </div>
              <div className="progress-line html">
                <span></span>
              </div>
            </div>
            <div className="bar"><FontAwesomeIcon className="python" icon={faPython} />
              <div className="info">
                <span>python</span>
              </div>
              <div className="progress-line python">
                <span></span>
              </div>
            </div>
            <div className="bar"><FontAwesomeIcon className="css" icon={faCss3} />
              <div className="info">
                <span>css</span>
              </div>
              <div className="progress-line css">
                <span></span>
              </div>
            </div>
            <div className="bar"><FontAwesomeIcon className="javascript" icon={faJs} />
              <div className="info">
                <span>javascript</span>
              </div>
              <div className="progress-line javascript">
                <span></span>
              </div>
            </div>
            <div className="bar"><FontAwesomeIcon className="react" icon={faReact} />
              <div className="info">
                <span>react</span>
              </div>
              <div className="progress-line react">
                <span></span>
              </div>
            </div>
          </div>
        </div>
          <div className="contanier1">
            <h1 className="heading1"> Professsional skills</h1>
            <div className="radial-bars">
              <div className="radial-bar">
                      <svg x='0px' y='0px' viewBox='0 0 200 200'>
                        <circle class='progress-bar' cx='100' cy='100' r='80'></circle>
                        <circle class='path path-1' cx='100' cy='100' r='80'></circle>
                      </svg>
                    <div className="percentage">90%</div>
                      <div className="text">creativity</div>
                    </div>
                <div className="radial-bar">
                      <svg x='0px' y='0px' viewBox='0 0 200 200'>
                        <circle class='progress-bar' cx='100' cy='100' r='80'></circle>
                        <circle class='path path-1' cx='100' cy='100' r='80'></circle>
                      </svg>
                    <div className="percentage">65%</div>
                      <div className="text">communication</div>
                  </div>
                  <div className="radial-bar">
                      <svg x='0px' y='0px' viewBox='0 0 200 200'>
                        <circle class='progress-bar' cx='100' cy='100' r='80'></circle>
                        <circle class='path path-1' cx='100' cy='100' r='80'></circle>
                      </svg>
                    <div className="percentage">75%</div>
                      <div className="text">problem solving</div>
                    </div>
                    <div className="radial-bar">
                      <svg x='0px' y='0px' viewBox='0 0 200 200'>
                        <circle class='progress-bar' cx='100' cy='100' r='80'></circle>
                        <circle class='path path-1' cx='100' cy='100' r='80'></circle>
                      </svg>
                    <div className="percentage">85%</div>
                      <div className="text">Teamwork</div>
                    </div>
              </div>
              </div>
      </section>
    </div>);


  {/* //   <div>
    //   <h1 className="heading0">My  <span>Skills</span></h1>
    //   </div>
    // <div className="complete">
    //     <div className="'container" >
    //       <h1 className="heading1">Technical skills</h1>
    //       <div className="Techincal-bars">
    //         <div className="bar"><FontAwesomeIcon className="html"  icon={faHtml5} />
    //           <div className="info">
    //           </div>
    //           <div className="progress-line.html">
    //             <span></span>
    //           </div>
    //         </div>
    //         <div className="bar"><FontAwesomeIcon className="css" icon={faCss3} />
    //           <div className="info">
    //           </div>
    //           <div className="progress-line css">
    //             <span></span>
    //           </div>
    //         </div>
    //         <div className="bar"><FontAwesomeIcon className="react" icon={faReact} />
    //           <div className="info">
    //           </div>
    //           <div className="progress-line react">
    //             <span></span>
    //           </div>
    //         </div>
    //         <div className="bar"><FontAwesomeIcon className="javascript" icon={faJs} />
    //           <div className="info">
    //           </div>
    //           <div className="progress-line javascript">
    //             <span></span>
    //           </div>
    //         </div>
    //         <div className="bar"><FontAwesomeIcon className="python" icon={faPython} />
    //           <div className="info">
    //           </div>
    //           <div className="progress-line python">
    //             <span></span>
    //           </div>
    //         </div>
    //       </div>
    //         <div className="contanier1">
    //           <h1 className="heading1"> Professsional skills</h1>
    //           <div className="radial-bars">
    //             <svg x='0px' y='0px' viewBox='0 0 200 200'>
    //               <circle class='progress-bar' cx='100' cy='100' r='80'></circle>
    //               <circle class='path path-1' cx='100' cy='100' r='80'></circle>
    //             </svg>
    //             <div className="percentage">90%</div>
    //             <div className="text">creativity</div>
    //           </div>
    //           <div className="radial-bars">
    //             <svg x='0px' y='0px' viewBox='0 0 200 200'>
    //               <circle class='progress-bar' cx='100' cy='100' r='80'></circle>
    //               <circle class='path path-1' cx='100' cy='100' r='80'></circle>
    //             </svg>
    //             <div className="percentage">70%</div>
    //             <div className="text">communication</div>
    //           </div>
    //           <div className="radial-bars">
    //             <svg x='0px' y='0px' viewBox='0 0 200 200'>
    //               <circle class='progress-bar' cx='100' cy='100' r='80'></circle>
    //               <circle class='path path-1' cx='100' cy='100' r='80'></circle>
    //             </svg>
    //             <div className="percentage">50%</div>
    //             <div className="text">problem solving</div>
    //           </div>
    //           <div className="radial-bars">
    //             <svg x='0px' y='0px' viewBox='0 0 200 200'>
    //               <circle class='progress-bar' cx='100' cy='100' r='80'></circle>
    //               <circle class='path path-1' cx='100' cy='100' r='80'></circle>
    //             </svg>
    //             <div className="percentage">40%</div>
    //             <div className="text">Teamwork</div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     </div> */}

};

export default tech;