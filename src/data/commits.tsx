const getTotalCommits = () => {
  const commits = {
    github_24: 144,
    github_23: 463,
    github_22: 421,
    github_21: 326,
    github_old: 78,
    gitlab: 376,
    gitlab_private: 647,
  };
  return Object.values(commits).reduce((a, b) => a + b, 0);
};

export default getTotalCommits;
