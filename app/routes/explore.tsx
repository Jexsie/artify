import { Navbar } from "~/components/navigation/navbar";
import type { Route } from "./+types/home";
import { Button } from "~/components/ui/button";
import heroBg from "../components/images/hero-bg.svg";
import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area";
import type { Asset } from "~/types";
import neonDreams from "~/components/images/neon-dreams.svg";
import cyberPunk from "~/components/images/cyberpunk.svg";
import fantasy from "~/components/images/fantasy.svg";
import abstractArt from "~/components/images/abstract-art.svg";
import character from "~/components/images/character.svg";
import landing from "~/components/images/landing.svg";
import pixel from "~/components/images/pixel.svg";
import AssetComponent from "~/components/asset";
import Footer from "~/components/ui/footer";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Artify" },
    { name: "description", content: "Welcome to Artify" },
  ];
}

const featured: Asset[] = [
  {
    title: "Neon Dreams",
    description: "Explore vibrant digital art",
    image: neonDreams,
  },
  {
    title: "Cyberpunk Cityscapes",
    description: "Discover futuristic cityscapes",
    image: cyberPunk,
  },
  {
    title: "Fantasy Realms",
    description: "Venture into magical realms",
    image: fantasy,
  },
  {
    title: "Neon Dreams",
    description: "Explore vibrant digital art",
    image: neonDreams,
  },
  {
    title: "Cyberpunk Cityscapes",
    description: "Discover futuristic cityscapes",
    image: cyberPunk,
  },
];

const trending: Asset[] = [
  {
    title: "Abstract Art #123",
    description: "By Artist A",
    image: abstractArt,
  },
  {
    title: "Cyberpunk Character #456",
    description: "By Artist B",
    image: character,
  },
  {
    title: "Fantasy Landscape #789",
    description: "By Artist C",
    image: landing,
  },
  {
    title: "Pixel Art Character #012",
    description: "By Artist D",
    image: pixel,
  },
  {
    title: "Fantasy Landscape #789",
    description: "By Artist C",
    image: landing,
  },
];

const filters = {
  category: {
    title: "Category",
    values: ["nfts", "art", "photos"],
  },
  priceRange: {
    title: "Price Range",
    values: ["50 - 100", "100 - 200", "200+"],
  },
  sortBy: { title: "Sort By", values: ["A-Z", "Z-A", "Recents"] },
};

export default function Home() {
  return (
    <>
      <h1 className="header text-[32px]">Explore assets</h1>
      <div className="flex gap-4 my-7">
        {Object.values(filters).map((f) => (
          <Select>
            <SelectTrigger className=" bg-inputs-light dark:bg-inputs-dark text-brand-dark dark:text-brand-light rounded-[12px] h-8">
              <SelectValue placeholder={f.title} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>{f.title}</SelectLabel>
                {f.values.map((v) => (
                  <SelectItem value="apple">{v}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        ))}
      </div>
      <div className="flex flex-wrap gap-4">
        {[...trending, ...featured].map((asset) => (
          <div className="mt-2">
            <AssetComponent asset={asset} minSize />
          </div>
        ))}
      </div>
    </>
  );
}
