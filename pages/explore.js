/* pages/index.js */
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from "web3modal";

import { marketplaceAddress } from "../config";

import NFTMarketplace from "../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json";

export default function Home() {
  const [nfts, setNfts] = useState([]);
  const [loadingState, setLoadingState] = useState("not-loaded");
  useEffect(() => {
    loadNFTs();
  }, []);
  async function loadNFTs() {
    /* create a generic provider and query for unsold market items */
    const provider = new ethers.providers.JsonRpcProvider();
    const contract = new ethers.Contract(
      marketplaceAddress,
      NFTMarketplace.abi,
      provider
    );
    const data = await contract.fetchMarketItems();

    /*
     *  map over items returned from smart contract and format
     *  them as well as fetch their token metadata
     */
    const items = await Promise.all(
      data.map(async (i) => {
        const tokenUri = await contract.tokenURI(i.tokenId);
        const meta = await axios.get(tokenUri);
        let price = ethers.utils.formatUnits(i.price.toString(), "ether");
        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          image: meta.data.image,
          name: meta.data.name,
          description: meta.data.description,
        };
        return item;
      })
    );
    setNfts(items);
    setLoadingState("loaded");
  }
  async function buyNft(nft) {
    /* needs the user to sign the transaction, so will use Web3Provider and sign it */
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      marketplaceAddress,
      NFTMarketplace.abi,
      signer
    );

    /* user will be prompted to pay the asking proces to complete the transaction */
    const price = ethers.utils.parseUnits(nft.price.toString(), "ether");
    const transaction = await contract.createMarketSale(nft.tokenId, {
      value: price,
    });
    await transaction.wait();
    loadNFTs();
  }
  if (loadingState === "loaded" && !nfts.length)
    return (
      <div className="flex justify-center m-20">
        <span className="inline-block bg-pink-200 rounded-full px-8 py-2 text-md font-semibold text-pink-700 text-center md:text-lg">
          No items available on the Marketplace.
        </span>
      </div>
    );
  return (
    <div className="flex justify-center mb-20 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {nfts.map((nft, i) => (
          <div key={i} className="max-w-xs rounded overflow-hidden shadow-lg">
            <img src={nft.image} className="w-full" />
            <div className="flex flex-wrap">
              <div className="flex flex-1 flex-col justify-center p-4">
                <div className="font-bold text-xs md:text-sm"> {nft.name}</div>
                {/* <p className="text-xs text-gray-600">{nft.description}</p> */}
              </div>

              <div className=" flex flex-1 flex-col justify-end  items-end p-4">
                <span className="inline-block bg-pink-200 rounded-full px-3 py-1 text-xs md:text-sm font-semibold text-pink-700">
                  {nft.price} ETH
                </span>
              </div>
            </div>
            <div
              className="flex justify-center bg-pink-500 py-3 text-white overflow-hidden hover:bg-pink-800 cursor-pointer text-xs md:text-sm"
              onClick={() => buyNft(nft)}
            >
              <button>Buy Now</button>
            </div>
            </div>
  
        ))}
      </div>
    </div>
  );
}
