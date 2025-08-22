import type { Route } from "./+types/home";
import { Navbar} from "../navbar/navbar";
import { LandingPage } from "~/landingpage/landingpage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Artify" },
    { name: "description", content: "Welcome to Artify" },
  ];
}

export default function Home() {
  return (<>
  <Navbar />
  <LandingPage />
  </>
)
}
