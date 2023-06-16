import Link from "next/link";
import Title from "../components/Title";

export default function NotFound() {
  return (
    <>
      <Title title="Page not found" />
      <div className="container-flex">
        <div className="jumbotron vertical-center">
          <div className="container">
            <h1 className="text-center section-header">404</h1>
            <h3 className="text-center">Page not found.</h3>
            <p className="text-center pt-2">
              <Link
                href="/"
                style={{
                  textDecoration: "none",
                  color: "var(--color-text-highlight)",
                }}
              >
                Go back to home
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
