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

export default function Home() {
  return (
    <div className="flex flex-col gap-12 justify-center items-center ">
      <div className="relative flex justify-center items-center h-[480px] w-[960px] rounded-[12px] mx-4">
        <img src={heroBg} />
        <div className="absolute flex flex-col justify-center items-center top-[116px]">
          <h1 className="text-brand-light text-6xl text-center mb-5 font-bold">
            Discover, Collect, and Trade Digital Assets
          </h1>
          <p className="text-brand-light text-[16px] font-normal mb-10">
            Create, Explore and Transfer digital art to collectibles, all
            powered by the Hedera network.
          </p>
          <Button className="btn h-12">Get Started</Button>
        </div>
      </div>
      <div>
        <p className="header mb-8">Featured Collections</p>
        <ScrollArea className="max-w-default whitespace-nowrap scrollbar-hide">
          <div className="flex w-max space-x-4">
            {featured.map((asset, i) => (
              <AssetComponent key={i} asset={asset} minSize />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
      <div>
        <p className="header mb-8">Trending Collections</p>
        <ScrollArea className="max-w-default whitespace-nowrap scrollbar-hide">
          <div className="flex w-max space-x-4">
            {trending.map((asset, i) => (
              <AssetComponent key={i} asset={asset} minSize />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
}
