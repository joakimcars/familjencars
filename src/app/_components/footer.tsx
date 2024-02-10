import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left">
      <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
        <p className="text-neutral-800 dark:text-neutral-400">
          © 2024 Copyright:Släkten Cars
        </p>
      </div>
    </footer>
  );
}

export default Footer;
