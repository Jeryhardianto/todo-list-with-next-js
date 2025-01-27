import Link from "next/link";

function PageNotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <Link href="/">Go back to home</Link>
    </div>
  );
}

export default PageNotFound;