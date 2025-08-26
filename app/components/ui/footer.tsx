import { Github, Instagram, Linkedin, Slack, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-40 pb-10 text flex flex-col w-full gap-6">
      <div className="flex justify-around px-20">
        <span className="text text-[16px]">About</span>
        <span className="text text-[16px]">Contact</span>
        <span className="text text-[16px]">Help</span>
        <span className="text text-[16px]">Terms of Service</span>
        <span className="text text-[16px]">Privacy Policy</span>
      </div>
      <div className="flex justify-center items-center gap-8">
        <Twitter strokeWidth={1.5} />
        <Github strokeWidth={1.5} />
        <Instagram strokeWidth={1.5} />
        <Linkedin strokeWidth={1.5} />
        <Slack strokeWidth={1.5} />
      </div>
      <div>
        <p className="text-center">@2025 ARTIFY. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
