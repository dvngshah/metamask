import React from "react";
import CoinList from "../components/CoinList";

export default function Land({ coinsData }) {
  return (
    <div className="relative mb-10">
      <div className="flex flex-col lg:flex-row items-center gap-12 py-8">
        <div className="flex flex-1 flex-col items-center lg:items-start ">
          <div className="flex flex-wrap">
            <span className="inline-block bg-pink-200 rounded-full px-3 py-1 text-sm font-semibold text-pink-700 mr-2 mb-2">
              #Ethereum
            </span>
            <span className="inline-block bg-pink-200 rounded-full px-3 py-1 text-sm font-semibold text-pink-700 mr-2 mb-2">
              #IPFS
            </span>
          </div>
          <h2 className="text-pink-500 text-3xl md:text-4xl text-center lg:text-left my-6 font-bold">
            Discover, Sell and Create extraordinary NFTs
          </h2>

          <p className="text-gray-700 text-lg text-center lg:text-left mb-6">
            MetaOutlet is the world's first and largest NFT Marketplace.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <button type="button" className="btn btn-blue hover:bg-pink-800">
              Explore
            </button>
            <button type="button" className="btn btn-white hover:bg-gray-200">
              Create
            </button>
          </div>

          <a href="/" className="text-pink-500 font-bold mt-6">
            Learn more about NFTs and MetaOutlet
          </a>
        </div>

        <div className="flex flex-1 justify-end mb-8 md:mb-10 lg:mb-0">
          <div className="max-w-sm rounded overflow-hidden shadow-lg ">
            <img
              className="w-full"
              src="/images/nft_demo.png"
              alt="Mutantcats #014 NFT"
            />

            <div className="flex flex-row">
              <div className="flex flex-1 flex-col px-6 py-4">
                <div className="font-bold text-sm mb-2">The Mutantcats</div>
                <p className="text-xs text-gray-600">Mutantcat #01</p>
                {/* <p className="text-gray-700 text-base">
                An infectious disease has widespread on the Ethereum blockchain,
                causing 9999 cats to mutate and attract fish.
              </p> */}
              </div>
              <div className=" px-6 pt-4 pb-2 flex flex-1 flex-col justify-center items-end">
                <span className="inline-block bg-pink-200 rounded-full px-3 py-1 text-sm font-semibold text-pink-700">
                  1.0 ETH
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-center text-xl font-bold my-8 underline decoration-pink-500">
        Create &amp; Sell your NFTs
      </h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-8 justify-center">
          <div className="max-w-xs rounded-md overflow-hidden shadow-lg border border-1 border-pink-500">
            <div className="flex justify-center mt-5">
              <span className="inline-block bg-pink-200 rounded-full p-3">
                <img className="w-30" src="/images/sell.png" />
              </span>
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-center">Sell</div>
              <p className="text-gray-700 text-base text-center text-sm">
                List and Sell your NFT is no time with a seamless experience.
              </p>
            </div>
          </div>
          <div className="max-w-xs rounded-md overflow-hidden shadow-lg border border-1 border-green-500">
            <div className="flex justify-center mt-5">
              <span className="inline-block bg-green-200 rounded-full p-3">
                <img className="w-30" src="/images/buy.png" />
              </span>
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-center">Buy</div>
              <p className="text-gray-700 text-base text-center">
                Buy the rarest NFTs on the blockchain with just a few clicks.
              </p>
            </div>
          </div>
          <div className="max-w-xs rounded-md overflow-hidden shadow-lg border border-1 border-blue-500">
            <div className="flex justify-center mt-5">
              <span className="inline-block bg-blue-200 rounded-full p-3">
                <img className="w-30" src="/images/create.png" />
              </span>
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-center">Create</div>
              <p className="text-gray-700 text-base text-center">
                Create cool NFTs and list them on the marketplace.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-center text-xl font-bold mb-12 mt-8 underline decoration-pink-500">
        Keep track of prices
      </h2>
      <CoinList coinsData={coinsData} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
  );

  const coinsData = await res.json();
  return {
    props: {
      coinsData,
    },
  };
};
