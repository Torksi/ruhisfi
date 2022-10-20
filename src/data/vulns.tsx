const getTotalVulns = () => {
  const commits = {
    hackrfi: 4,
    internal: 18,
    lh_hackday: 3,
    cert_fi: 3,
    misc: 22,
  };
  return Object.values(commits).reduce((a, b) => a + b, 0);
};

export default getTotalVulns;
