export default function Coins({
  name,
  marketcap,
  volume,
  symbol,
  price,
  priceChange,
  image,
  key,
}) {
  return (
    <tr className="whitespace-nowrap">
      <td>
        <img className="h-5 w-auto" src={image} />
      </td>
      <td className="px-4 py-2 md:px-6 py-3">
        <div className="text-sm hidden md:inline-flex">{name}</div>
      </td>
      <td className="px-4 py-2 md:px-6 py-3">
        <div className="text-sm ">{symbol}</div>
      </td>
      <td className="px-4 py-2 md:px-6 py-3">
        <div className="text-sm">{price}</div>
      </td>
      <td className="px-4 py-2 md:px-6 py-3 hidden lg:inline-flex">
        <div className="text-sm">{marketcap}</div>
      </td>
      <td className="px-4 py-2 md:px-6 py-3 hidden lg:inline-flex">
        <div className="text-sm">{volume}</div>
      </td>

      <td className="px-4 py-2 md:px-6 py-3 text-sm text-gray-500 font-bold">
        {priceChange < 0 ? (
          <p className="text-red-500">{priceChange.toFixed(2)}</p>
        ) : (
          <p className="text-green-500">{priceChange.toFixed(2)}</p>
        )}
      </td>
    </tr>
  );
}
