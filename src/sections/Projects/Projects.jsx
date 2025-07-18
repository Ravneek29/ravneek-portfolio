import styles from './ProjectsStyles.module.css';
import dashboard from '../../assets/dashboard.png';
import todo from '../../assets/to-do.png';
import lens from '../../assets/code.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={todo}
          link="https://Ravneek29.github.io/todo-app"
          h3="To-Do"
          p="To-Do App"
        />
        <ProjectCard
          src={dashboard}
          link="https://ravneek29.github.io/WinHacks2021/"
          h3="Dashboard"
          p="Dashboard App"
        />
        <ProjectCard
          src={lens}
          link="https://snapchat.com/t/0VvywJ1p"
          h3="AR Lens"
          p="Mom's Kitchen"
        />
      </div>
    </section>
  );
}

export default Projects;
