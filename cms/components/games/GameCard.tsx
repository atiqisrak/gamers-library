"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { useRouter } from "next/navigation";

export default function GameCard({
  key,
  gameData,
}: {
  key: string;
  gameData: any;
}) {
  const router = useRouter();

  const handleCardClick = () => {{
    if (gameData?.gameId?._id) {
        router.push(`/games/${gameData?.gameId?._id}`);
      }
      console.log("gameData", gameData);
  }};

  return (
    <Card
      key={key}
      className="game-card mb-4 rounded-lg shadow-lg flex flex-col justify-between h-full cursor-pointer"
      onClick={handleCardClick}
    >
      <CardHeader className="flex flex-col items-center justify-center">
        { gameData?.images && gameData?.images.length > 0 ? (
            <Image
                src={gameData?.images[0]}
                alt={gameData?.gameId?.title}
                width={400}
                height={300}
                className="rounded-lg mb-4"
            />
            ) : (
            <Image
                src="/images/game_placeholder.jpg"
                alt={gameData?.gameId?.title}
                width={400}
                height={300}
                className="rounded-lg mb-4"
            />
            )}
        <CardTitle>{gameData?.gameId?.title}</CardTitle>
        <CardDescription>
          {gameData?.gameId?.description.slice(0, 80)}...
        </CardDescription>
      </CardHeader>
      <div className="flex flex-col justify-between h-full">
        {gameData?.gameId && (
          <>
            <CardContent>
              {gameData?.gameId?.genre.map((genre: string) => (
                <Badge key={genre} className="mr-2 bg-yellow-400 text-gray-800">
                  {genre}
                </Badge>
              ))}

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
                    className="rounded-lg w-8 h-8 mr-4 mt-5 object-contain shadow-lg flex items-center"
                  />
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button className="w-52 bg-yellow-400 text-black font-bold shadow-lg rounded-xl hover:bg-green-600">
                {gameData?.gameId?.discountedPrice < gameData?.gameId?.price ? (
                  <>
                    <span className="line-through pr-4 text-gray-500">
                      ৳ {gameData?.gameId?.price}
                    </span>{" "}
                    ৳ {gameData?.gameId?.discountedPrice}
                  </>
                ) : (
                  <>৳ {gameData?.gameId?.price}</>
                )}
              </Button>
            </CardFooter>
          </>
        )}
      </div>
    </Card>
  );
}
