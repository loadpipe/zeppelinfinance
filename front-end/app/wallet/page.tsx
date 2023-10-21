"use client";
import "./wallet.css";
import CardRow, { RowItem } from "@/Components/CardRow/CardRow";
import RowLayout from "@/Components/RowLayout/RowLayout";
import OptionButton from "@/Components/OptionButton/OptionButton";
import { products } from "@/Domain/products";
import Image from "next/image";
import Heading from "@/Components/Heading/Heading";
import SecondaryButton from "@/Components/SecondaryButton/SecondaryButton";
import PostCard from "@/Components/PostCard/PostCard";
import imageArt from "@/images/art.png";
import avatar1 from "@/images/avatar1.png";
import ethereumIcon from "@/images/Ethereum.svg";
import twitterIcon from "@/images/twitter.svg";
import facebookIcon from "@/images/facebook.svg";
import backgroundImage from "@/images/background-header.jpg";

import CounterSocial from "@/Components/CounterSocial/CounterSocial";
import { useRef, useEffect, useState } from "react";
import Wallet from "@/Web3/Wallet";
import imgCollection1 from "@/images/imgCollection1.png";
import imgCollection2 from "@/images/imgCollection2.png";
import { ethers } from "ethers";

export default function Home() {
  interface WalletRefType {
    getAmountsOwed: () => Promise<any[]>;
  }
  
  const walletRef = useRef<WalletRefType | null>(null);
  const [nfts, setNfts] = useState<any[]>([]);

  const convertNfts = (nftArray: any[]) => {
    let output: any[] = [];
    if (nftArray) {
      nftArray.forEach((nft, i) => {
        try {  }
        catch { }
      });
    }

    return nftArray;
  }; 

  const getNfts = async () => {
    if (walletRef && walletRef.current) {
      const nftArray: any[] = convertNfts(await walletRef.current.getAmountsOwed());
      console.log(nftArray);
      nftArray[0].amountOwed = 1;
      setNfts(nftArray);
    }
  };

  useEffect(() => {
    getNfts();
  }, []);
  
  return (
    <main className="flex flex-col items-center justify-center">
      <Wallet ref={walletRef}/>
      <div className="bg-wallet">
        <Image
          src={backgroundImage}
          alt="background header page"
          height={362}
        ></Image>
      </div>
      <RowLayout fit>
        <div>
          <div className="flex justify-between">
            <div className="max-w-[291px] max-h-[518px] transform-perfil">
              <Image
                className="rounded-full border-2 border-white"
                src={avatar1}
                alt="User Post"
                width={108}
                height={108}
              />
              <p className="text-black text-[28px] font-extrabold mt-[21px]">
                Waiano Akarana
              </p>
              <div>
                <button className="max-w-[155px] flex  gap-[10px]">
                  <Image src={ethereumIcon} alt="Icon Social" />
                  <span className="text-zinc-600 text-sm font-bold leading-[21px] ">
                    0x59485…82590
                  </span>
                </button>
              </div>
              <div>
                <div className="my-[28px]">
                  <div>
                    <p className="text-zinc-600 text-sm font-normal leading-[21px]">
                      I only deal in the finest product NFTs. I am a connoisseur, a curator, a purveyor of fancy.
                    </p>
                  </div>
                  <div className="mt-[12px] flex gap-[10px]">
                    <button className="max-w-[22px]">
                      <Image src={facebookIcon} alt="Facebook Icon" />
                    </button>
                    <button className="max-w-[22px]">
                      <Image src={twitterIcon} alt="Twitter Icon" />
                    </button>
                  </div>
                </div>

                <div className="flex justify-around border-y border-y-[#cbcbd8e6] py-[17px] ">
                  <CounterSocial number={96} text={"staked"} />
                  <CounterSocial number={64} text={"NFT owned"} />
                  <CounterSocial number={28} text={"Listed"} />
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="w-full] my-[41px] ">
                  <Heading text="RWS NFT Wallet" />
                </div>
                <div className=" max-w-[920px] max-h-[638px]">
                  <div className="w-full flex gap-[24px]">
                      <PostCard
                        title="Men's Drinking Flask Gift Set"
                        userName="waiano"
                        amountOwed={nfts[0]?.amountOwed}
                        nftAddress = {nfts[0]?.address}
                        image={imgCollection1}
                        avatar={avatar1}
                      ></PostCard>{" "}
                      <PostCard
                        title="Polishing Cloths"
                        userName="paola"
                        amountOwed={nfts[1]?.amountOwed}
                        nftAddress = {nfts[1]?.address}
                        image={imgCollection2}
                        avatar={avatar1}
                      ></PostCard>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RowLayout>
    </main>
  );
}
