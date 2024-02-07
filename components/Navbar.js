import Link from "next/link";


export default function Navbar() {
  return (
    <nav className=" flex items-center py-8">
      <Link href="/">
        <a className="text-2xl font-bold underline decoration-pink-500">
          MetaOutlet
        </a>
      </Link>

      <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-blue text-gray-800 text-xs font-bold">
        {/* <Link href="/">
      <a className="hover:text-pink-500">Home</a>
    </Link> */}
        <Link href="/explore">
          <a className="hover:text-pink-500">Explore</a>
        </Link>
        <Link href="/create-nft">
          <a className="hover:text-pink-500">Create NFT</a>
        </Link>
        <Link href="/my-nfts">
          <a className="hover:text-pink-500">My NFTs</a>
        </Link>
      </ul>

      <div className="flex sm:hidden flex-1 justify-end">
        <i className="fas fa-bars text-2xl"> </i>
      </div>
    </nav>
  );
}
