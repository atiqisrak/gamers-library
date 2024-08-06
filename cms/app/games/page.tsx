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

//   console.log("Game details", gamesDetails);

  return (
    <div>
      <h1 className="text-5xl text-center font-bold my-5"
      >Explore all games</h1>
      <div className="grid grid-cols-4 gap-4">
        {gamesDetails.map((gameDetails, index) => {
          return <GameCard key={index} gameData={gameDetails} />;
        }
        )}
      </div>
    </div>
  );
}
