interface SkillsProps {
  name: string;
  icon: string;
  iconClass: string;
  description: string;
}

const SkillsBadge: React.FC<SkillsProps> = ({
  name,
  description,
  icon,
  iconClass,
}) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="skills-badge">
        <div>
          <i className={`fa-2x ${icon} ${iconClass}`} />
        </div>
        <div className="skills-text">
          <h6 className="text-sm">{name}</h6>
          <h6 className="text-xs color-body">{description}</h6>
        </div>
      </div>
    </div>
  );
};

export default SkillsBadge;
