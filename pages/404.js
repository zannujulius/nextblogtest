import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();
  // useEffect(() => {
  //   setTimeout(() => {
  //     router.
  push("/");
  //   }, 3000);
  // }, []);
  return (
    <div className="not-found">
      <h1>Opps..</h1>
      <p>page not be found</p>
      <p>
        Go back the{" "}
        <Link href={"/"}>
          <a>Home page</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
