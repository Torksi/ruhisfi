import { Fade } from "react-awesome-reveal";
import SkillsBadge from "../SkillsBadge";

const Skills = () => {
  return (
    <div className="content-section">
      <div className="row">
        <div className="col-md-12">
          <h2>Skills</h2>
          <Fade triggerOnce duration={1200}>
            <div className="row">
              <SkillsBadge
                name="Web Design"
                description="(HTML/CSS/JavaScript/Sass)"
                icon="fab fa-html5"
                iconClass="text-logo-html"
              />
              <SkillsBadge
                name="Java"
                description="(Spring/Spigot API)"
                icon="fab fa-java"
                iconClass="text-logo-java"
              />
              <SkillsBadge
                name="Backend Frameworks"
                description="(Node.js/Express.js/TypeORM)"
                icon="fab fa-node-js"
                iconClass="text-logo-node"
              />
              <SkillsBadge
                name="Frontend Frameworks"
                description="(React/Next.js)"
                icon="fab fa-react"
                iconClass="text-logo-react"
              />
              <SkillsBadge
                name="Relational Databases"
                description="(MySQL/MariaDB/Postgres)"
                icon="fas fa-database"
                iconClass="text-primary"
              />
              <SkillsBadge
                name="Query Languages"
                description="(SQL/GraphQL)"
                icon="fas fa-database"
                iconClass="text-warning"
              />
              <SkillsBadge
                name="Server Software"
                description="(Debian/Ubuntu/Windows Server)"
                icon="fas fa-terminal"
                iconClass="text-purple"
              />
              <SkillsBadge
                name="Server Software"
                description="(Debian/Ubuntu/Windows Server)"
                icon="fas fa-server"
                iconClass="text-warning"
              />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Skills;
