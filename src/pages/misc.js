import React from 'react';
import { techmapping } from '_data/mappings';
import { projectdata } from '_data/projects';

const TechList = ({ technologies }) => {
  return (
    <>
      {
        technologies.map((tech) => {
          return (
            <div className="rounded-pill me-1 my-1 px-1" style={{ backgroundColor: techmapping[tech]['background'], borderRadius: "20px", border: "2px solid" + techmapping[tech]['border'] }}>
              <span style={{ color: techmapping[tech]['border'] }}>&#x2022;</span> {tech}
            </div>
          );
        })
      }
    </>
  )
}

const Misc = () => {
  return (
    <div className="hobbiesDiv container">
      <div className="mt-5 text-center pb-3">
        <h4>Some stuff from my free time</h4>
      </div>
      {
        projectdata.map((project) => {
          return (
            <div className="border border-3 p-4 flex" style={{ borderRadius: "10px", marginBottom: "1.5rem", marginTop: "1.5rem" }}>
              <div className="text-left mb-3">
                <div className="h4">{project['name']}</div>
                <div className="h5">
                  <a href={project['linkurl']} className="hover-underline-animation" style={{ textDecoration: "none", color: "#4d94ff", fontSize: "15.5px" }} target='__blank'>{project['link']}<i className="bi bi-link-45deg"></i></a>
                </div>
              </div>
              <div className='projectDescriptionFontSize'>{project['description']}</div>
              <div className="mt-3 d-flex flex-wrap projectDescriptionFontSize">
                <TechList technologies={project['technologies']} />
              </div>
            </div>
          );
        })
      }
    </div>
  )
}

export default Misc
