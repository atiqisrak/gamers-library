import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '../ui/button';

export default function GameDetails({ gameData } : { gameData: any }) {
    console.log("Game Details: ", gameData);
  return (
    <div className="game-details">
        <div className="game-details__content w-full"
        style={{
            height: "70vh",
            backgroundImage: `url(${gameData?.images && gameData?.images[1]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "grid",
            gridTemplateColumns: "3fr 3fr 2fr",
            alignItems: "end",
        }}>
            <div className="game-details__header rounded-lg bg-gray-800 text-white -mb-20 px-10 py-5 gap-8 ml-10"
            style={{
                height: "50vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                backdropFilter: "blur(10px)",
          background: "rgba(255, 255, 255, 0.1)",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
            }}>
                <h1 className="text-4xl font-medium">
                    {gameData?.gameId?.title}
                </h1>
                <div className="flex flex-col gap-3">
                <h3>
                    {gameData?.gameId?.publisher}
                </h3>
                <div className="flex items-center gap-3">
                {
                    gameData?.gameId?.genre.map((genre: string, index: number) => (
                        <Badge key={index}
                        className="bg-yellow-400 text-gray-800 flex items-center justify-center w-fit-content">
                            {genre}</Badge>
                    ))
                }
                </div>
                <div className="flex">
                {gameData?.gameId?.platform.map((platform: string) => (
                  <img
                    key={platform}
                    src={
                      platform === "PS4" || platform === "PlayStation"
                        ? "/images/platforms/ps4.png"
                        : platform === "PS5"
                        ? "/images/platforms/ps5.png"
                        : platform === "Xbox One" ||
                          platform === "Xbox Series X/S"
                        ? "/images/platforms/xbox.png"
                        : platform === "PC"
                        ? "/images/platforms/ms.png"
                        : platform === "Switch"
                        ? "/images/platforms/switch.png"
                        : "/images/platforms/xbox.png"
                    }
                    alt={platform}
                    className="rounded-lg w-10 h-10 mr-4 mt-5 object-contain shadow-lg flex items-center bg-white"
                  />
                ))}
              </div>
                </div>
                <h1 className="text-2xl font-bold">
                {
                    new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "BDT",
                        maximumFractionDigits: 0,
                    }).format(gameData?.gameId?.price * 118.5)
                }
                </h1>
                <Button className="bg-yellow-400 text-gray-800 w-full py-8 font-bold shadow-md rounded-lg text-2xl">
                    Add to Cart</Button>
            </div>
            <div></div>
            <div className="game-details__caution bg-gray-900 text-white gap-5 place-items-center rounded-md"
            style={{
                height: "20vh",
                display: "grid",
                gridTemplateColumns: "1fr 3fr",
                padding: "20px",
            }}>
                <Image
                    src="/images/t.png"
                    alt="Teen"
                    width={87}
                    height={130}
                />
                <div>
                    <p>Blood, Drug Reference, Language, Violence</p>
                    <p>In-Game Purchases</p>
                </div>
            </div>
        </div>
        <div className="h-40 bg-gray-900"
        ></div>
    </div>
  );
}
