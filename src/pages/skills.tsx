import { Fade } from "react-awesome-reveal";
import SkillsBadge from "../components/SkillsBadge";
import Title from "../components/Title";

export default function SkillsPage() {
  return (
    <Fade direction="up">
      <Title />
      <h1>Skills</h1>
      <div className="row">
        <SkillsBadge
          name="Web Design"
          description="(HTML/CSS/JavaScript)"
          icon="fab fa-html5"
          iconClass="text-logo-html"
        />
        <SkillsBadge
          name="Java"
          description="Test"
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
          name="Server Software"
          description="(Debian/Ubuntu/Windows Server)"
          icon="fas fa-server"
          iconClass="text-warning"
        />
        <SkillsBadge
          name="Server Software"
          description="(Debian/Ubuntu/Windows Server)"
          icon="fas fa-server"
          iconClass="text-warning"
        />
        <SkillsBadge
          name="Server Software"
          description="(Debian/Ubuntu/Windows Server)"
          icon="fas fa-server"
          iconClass="text-warning"
        />
      </div>
    </Fade>
  );
}
