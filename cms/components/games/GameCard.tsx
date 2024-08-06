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

export default function GameCard({ key, gameData }) {
  console.log("Game details", gameData);

  return (
    <Card
      key={key}
      className="game-card mb-4 rounded-lg shadow-lg flex flex-col justify-between h-full"
    >
      <CardHeader className="flex flex-col items-center justify-center">
        <Image
            src="/images/game_placeholder.jpg"
            alt={gameData?.gameId?.title}
            width={400}
            height={300}
            className="rounded-lg mb-4"
            />

        <CardTitle>{gameData?.gameId && gameData?.gameId?.title}</CardTitle>
        <CardDescription>
          {gameData?.gameId && gameData?.gameId?.description.slice(0, 80)}...
        </CardDescription>
      </CardHeader>
      <div className="flex flex-col justify-between h-full">
        {gameData?.gameId && (
          <>
            <CardContent>
              <p>Discounted Price: {gameData?.gameId?.discountedPrice}</p>
              <p>Genre: {gameData?.gameId?.genre.join(", ")}</p>
              <p>Platform: {gameData?.gameId?.platform.join(", ")}</p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button className="w-52 bg-yellow-400 text-black font-bold shadow-lg rounded-xl hover:bg-green-600">
                {/* ৳ {gameData?.gameId?.price} */}
                {/* if discount is available, strike through the price and show discounted price */}
                {
                    gameData?.gameId?.discountedPrice < gameData?.gameId?.price ? (
                        <>
                        <span className="line-through pr-4 text-gray-500">৳ {gameData?.gameId?.price}</span> ৳ {gameData?.gameId?.discountedPrice}
                        </>
                    ) : (
                        <>৳ {gameData?.gameId?.price}</>
                    )
                }
              </Button>
            </CardFooter>
          </>
        )}
      </div>
    </Card>
  );
}
