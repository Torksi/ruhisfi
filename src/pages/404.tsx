import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="container-flex">
        <div className="jumbotron vertical-center">
          <div className="container">
            <h1 className="text-center section-header">404</h1>
            <h3 className="text-center">Page not found.</h3>
            <p className="text-center pt-2">
              <Link href="/">
                <a
                  style={{
                    textDecoration: "none",
                    color: "var(--color-text-highlight)",
                  }}
                >
                  Go back to home
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
