import Link from "next/link";
import Title from "../components/Title";

export default function NotFound() {
  return (
    <>
      <Title />
      <div className="container-flex">
        <div className="jumbotron vertical-center">
          <div className="container">
            <h1 className="text-center text-lg">404</h1>
            <h2 className="text-center color-body">Page not found.</h2>
            <p className="text-center">
              <Link href="/">
                <a>Go back to home</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
