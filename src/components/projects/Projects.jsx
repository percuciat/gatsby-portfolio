import React from "react"
import { Title, Project, ProjectFilter } from '../../components'
import "../../styled/projects.scss"
import AniLink from "gatsby-plugin-transition-link/AniLink";


const Projects = ({ projects, title, showLink }) => {
  const [categoryName, setCategoryName] = React.useState(0);
  const filterCategory = (type) => {
    setCategoryName(type);
  };
  const filtredProjects =  projects
    .filter(elemProject => {
      return categoryName === 0
        ? elemProject
        : elemProject.categorySite === categoryName
    });
  return (
    <section className="section projects">
      <div className="container">
      <Title title={title} />
      {
        !showLink && <ProjectFilter activeCategory={categoryName}
                                    changeCategory={filterCategory}/>
      }
      <ul className="projects__wrapper">
          {
            filtredProjects.length > 0
              ?
              filtredProjects.map((project, index) => {
                return (
                  <li key={project.id}>
                      <Project index={index} {...project} />
                  </li>
                  )
              })
              : <li>Проекты еще не добавлены</li>
          }
      </ul>
      {
          showLink && <AniLink swipe direction="left" to="/projects" className="btn center-btn">
            Смотреть больше
          </AniLink>
      }
      </div>
    </section>
  )
};


export default Projects
