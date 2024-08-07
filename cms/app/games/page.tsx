"use client";
import { useEffect, useState } from "react";
import instance from "@/axios";
import GameCard from "@/components/games/GameCard";


export default function Games() {
  const [games, setGames] = useState([]);
  const [gamesDetails, setGamesDetails] = useState([]);

  const fetchGames = async () => {
    try {
      const response = await instance.get("/games");
      if (response.status === 200) {
        setGames(response.data);
      } else {
        console.error("Failed to fetch games");
      }
    } catch (error) {
      console.error("Failed to fetch games", error);
    }
  };

  const fetchGameDetails = async () => {
    try {
      const response = await instance.get("/gameDetails");
        if (response.status === 200) {
            setGamesDetails(response.data);
        } else {
            console.error("Failed to fetch game details");
        }
    } catch (error) {
        console.error("Failed to fetch game details", error);
    }
    };


  useEffect(() => {
    fetchGames();
    fetchGameDetails();
  }, []);

//   Spinner
    if (games.length === 0) {
        return (
        <div className="flex justify-center items-center h-screen">
            <svg
            className="animate-spin h-10 w-10 text-yellow-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            >
            <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
            ></circle>
            <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 014.709 4H2c1.727 0 3.287.7 4.414 1.828l1.414 1.414zm11.291-2A8.001 8.001 0 0120 12h4c0 4.418-3.582 8-8 8v-4zm-2-5.291l-1.414 1.414A6.002 6.002 0 0014 12h4c0-2.371-1.343-4.436-3.293-5.5z"
            ></path>
            </svg>
        </div>
        );
    }

  return (
    <div>
      <h1 className="text-5xl text-center font-bold my-5"
      >Explore all games</h1>
      <div className="grid grid-cols-4 gap-4">
        {gamesDetails.map((gameDetail, index) => {
          return <GameCard key={gameDetail?._id} gameData={gameDetail} />;
        }
        )}
      </div>
    </div>
  );
}
