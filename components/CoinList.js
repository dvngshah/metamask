import Coins from "./Coins";

export default function CoinList({ coinsData }) {
  return (
    <div className="flex justify-center shadow shadow-pink-300 rounded-md overflow-auto">
      <table>
          <thead>
              
          </thead>
          <tbody>
        {coinsData.map((coin) => {
          return (
            <Coins
              name={coin.name}
              id={coin.id}
              price={coin.current_price}
              symbol={coin.symbol}
              marketcap={coin.market_cap}
              volume={coin.total_volume}
              image={coin.image}
              priceChange={coin.price_change_percentage_24h}
            />
          );
        })}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
}
