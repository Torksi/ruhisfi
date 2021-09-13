import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader("Content-Type", "text/plain");
  res.write(
    "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCwa92rXNsHJWdcCrN8zshaVgQZ23f0IfWz1xnyda94grWsIoQhBCu+//AlRfD8e0LLQCTeLXfYMYRFnLVej2RXtHh3PJjK0shpoHHXJmY9zXWLMKkqlVkAke4TZM+AXoOAhGY+ixscXAvqNKlXJrcorUVmCERByxYcDqy55xgN49d1QLP9GhXExvMs4XhJmVY2wFssBM6o5GD23YtMfuWljQxAsULTpR8vNawr3DT4r3N/vUX3tKgzcqsTdWuBLMqQHEDET1SgP25RrSLi2ctr0miIQ4UgIZ3DbMcInv98AhlcUGg/N+od0yeuM+XaRp7334tAK96yThWFjxfxu4tboEZNUqBPwS5Bmx4dgtleemYy1zy7c9uarl3hCBSYmoBX2nRwJLIM2rdUeI74Q+cAHLCqQHKVeOBF8ie6qkXRgFlBqTbmsPMpwMV4TplMFYbV0lMn5nYh4DorYgVCTgvwV0IS0drSF23fHDKafyzCJy5kvnrrhnELQxrkZJcCMoc= toni@ruhis"
  );

  res.end();

  return {
    props: {},
  };
};

const SSHKeyPage: React.FC = () => {
  return null;
};

export default SSHKeyPage;
