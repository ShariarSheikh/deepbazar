import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";

export default function Custom404() {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, [router]);
  return <h1>404 - Page Not Found</h1>;
}
