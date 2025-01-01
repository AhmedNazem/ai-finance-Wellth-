import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] px-4 text-center">
      <h1 className="text-8xl font-bold gradient-title mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4 shake ">Page Not Found</h2>
      <p className="text-violet-800 mb-8">
        Oops! The page you&apos;re looking for doesn&apos;t exist or has been
        moved.
      </p>
      <Link href="/">
        <Button className="text-violet-200">Return Home</Button>
      </Link>
    </div>
  );
}
