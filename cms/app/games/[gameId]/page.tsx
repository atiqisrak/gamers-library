"use client";

import instance from "@/axios";
import GameDetails from "@/components/games/GameDetails";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";

export default function GameDetailsPage({params}) {

  const [gameDetails, setGameDetails] = useState({});

  const fetchGameDetails = async () => {
    try {
      const response = await instance.get(`/gameDetails/${params.gameId}`);
      if (response.status === 200) {
        setGameDetails(response.data);
      } else {
        console.error("Failed to fetch game details");
      }
    } catch (error) {
      console.error("Failed to fetch game details", error);
    }
  };

  useEffect(() => {
    fetchGameDetails();
  }, []);

  console.log("Game Details: ", gameDetails);

  return (
    <div>
      <GameDetails gameData={gameDetails} />
    </div>
  );
}
