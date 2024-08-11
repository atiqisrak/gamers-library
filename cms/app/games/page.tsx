"use client";
import { useState, useEffect } from "react";
import instance from "@/axios";
import GameCard from "@/components/games/GameCard";
export interface GameDetail {
  _id: string; // Unique identifier for the game
  title: string; // Title of the game
  description: string; // Description of the game
  price: number; // Price of the game
  discountedPrice: number; // Discounted price of the game, if any
  promoCode: string; // Promotional code for discounts
  genre: string[]; // Array of genres associated with the game
  platform: string[]; // Array of platforms (e.g., PS4, Xbox) where the game is available
  releaseDate: string; // Release date of the game in ISO format
  developer: string; // Developer of the game
  publisher: string; // Publisher of the game
  images: string[]; // Array of image URLs associated with the game
  videos?: string[]; // Optional array of video URLs
  additionalDetails?: string; // Optional additional details about the game
  createdAt: string; // Creation date of the game record in ISO format
  updatedAt: string; // Last updated date of the game record in ISO format
}


export default function Games() {
  // Type the state with the GameDetail interface
  const [games, setGames] = useState<GameDetail[]>([]);
  const [gamesDetails, setGamesDetails] = useState<GameDetail[]>([]);

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

  // Spinner
  if (games.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        {/* Spinner Code Here */}
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-5xl text-center font-bold my-5">Explore all games</h1>
      <div className="grid grid-cols-4 gap-4">
        {gamesDetails.map((gameDetail) => (
          <GameCard key={gameDetail._id} gameData={gameDetail} />
        ))}
      </div>
    </div>
  );
}
