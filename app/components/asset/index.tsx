import React from "react";
import type { Asset } from "~/types";

interface AssetComponentProps {
  minSize?: boolean;
  asset: Asset;
}

const AssetComponent: React.FC<AssetComponentProps> = ({ minSize, asset }) => {
  return minSize ? <MinSize {...asset} /> : <div>Asset page</div>;
};

export default AssetComponent;

function MinSize(asset: Asset) {
  return (
    <div>
      <img src={asset.image} className="h-[240px] w-[240px] rounded-[12px]" />
      <p className="sub-header text-[16px]">{asset.title}</p>
      <p className="text">{asset.description}</p>
    </div>
  );
}
