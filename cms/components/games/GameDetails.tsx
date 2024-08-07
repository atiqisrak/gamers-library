import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '../ui/button';

export default function GameDetails({ gameData }: { gameData: any }) {
    console.log("Game Details: ", gameData);
  return (
    <div className="game-details">
        {/* <ul>
            <li>{gameData?.gameId?.title}</li>
            <li>{gameData?.gameId?.description}</li>
            <li>{gameData?.gameId?.developer}</li>
            <li>{gameData?.gameId?.discountedPrice}</li>
            <li>{gameData?.gameId?.price}</li>
            <li>{gameData?.gameId?.publisher}</li>
            {
                gameData?.gameId?.genre.map((genre, index) => (
                    <li key={index}>{genre}</li>
                ))
            }
            {
                gameData?.gameId?.platform.map((platform, index) => (
                    <li key={index}>{platform}</li>
                ))
            }
        </ul> */}
        <div
      className="game-details__content w-full p-10 grid grid-cols-5 align-bottom"
      style={{
        height: "70vh",
        backgroundImage: `url(${gameData?.images && gameData?.images[1]})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="game-details__header p-10 rounded-sm bg-gray-800 text-white col-span-1 flex flex-col justify-end"
        style={{
          height: "40vh",
        }}
      >
        <h1>{gameData?.gameId?.title}</h1>
        <h3>{gameData?.gameId?.publisher}</h3>
        <div className="flex items-center gap-3">
          {gameData?.gameId?.genre.map((genre: string, index: number) => (
            <Badge
              key={index}
              className="bg-yellow-400 text-black flex items-center justify-center w-fit-content"
            >
              {genre}
            </Badge>
          ))}
        </div>
        <h1>{gameData?.gameId?.price}</h1>
        <Button className="bg-yellow-400 text-black w-full py-3 font-bold shadow-md">
          Add to Cart
        </Button>
      </div>
      <div
        className="game-details__caution bg-black text-white gap-5 grid place-items-center col-span-4 flex flex-col justify-end"
        style={{
          height: "20vh",
        }}
      >
        <Image src="/images/t.png" alt="Teen" width={87} height={130} />
        <div>
          <p>Blood, Drug Reference, Language, Violence</p>
          <p>In-Game Purchases</p>
        </div>
      </div>
    </div>
    </div>
  );
}
