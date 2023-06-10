import React from "react";
import "./Portfolio.css";
 



function Portfolio() {
    return (
      <div>
        <section id="work" className="repository">
          <div className="flex-row">
            <h2 className="section-title secondary-border">Projects</h2>
          </div>
  
  
            <div className="repository">
              <div className="repositoryInfo">
                <div className="repositoryImg">
                  <a href="https://github.com/samhiga/emojify.git">
                    <img
                      src={Emojify}
                      className="my-2"
                      style={{ width: "100%" }}
                      alt="project"
                    />
                    <div className="overlay">
                      <h4>Emojify</h4>
                      <p>
                        With so many movies there is an often struggle to pick one
                      </p>
                    </div>
                  </a>
                </div>
                <div className="ProjectText">
                <ul>
                    <a className="portfolioButton"
                    href="https://samhiga.github.io/emojify/">Emojify Live Site</a>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>

    );
  }
  

export default Portfolio;