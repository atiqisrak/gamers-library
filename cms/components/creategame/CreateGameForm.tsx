"use client";

import { useForm } from "react-hook-form";
import Router from "next/router";
import { useState } from "react";
import instance from "@/axios";

type GameFormData = {
  title: string;
  description: string;
  price: string;
  discountedPrice?: string;
  promoCode?: string;
  genre: string[];
  platform: string[];
  releaseDate: string;
  developer: string;
  publisher: string;
};

export default function CreateGameForm() {
    const router = Router;

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<GameFormData>();
  
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);

  const onSubmit = async (data: GameFormData) => {
    data.genre = selectedGenres; // Manually set genres
    data.platform = selectedPlatforms; // Manually set platforms
    
    console.log("Sending data:", data);
    try {
      const response = await instance.post("/games", data);
      if(response.status === 201) {
        console.log("Game created successfully:", response.data);
      alert("Game created successfully");
        router.push("/games");
        } else {
        console.error("Failed to create game:", response.data);
        alert("Failed to create game");
        }
    } catch (error) {
      console.error("Failed to create game:", error);
    }
  };

  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const options = Array.from(e.target.selectedOptions, option => option.value);
    setSelectedGenres(options);
    setValue("genre", options);
  };

  const handlePlatformChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const options = Array.from(e.target.selectedOptions, option => option.value);
    setSelectedPlatforms(options);
    setValue("platform", options);
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 p-8 bg-gray-800 rounded-lg shadow-md text-white">
      <h1 className="text-3xl font-bold mb-6">Create New Game</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-white mb-1">Title</label>
          <input
            {...register("title", { required: "Title is required" })}
            placeholder="Enter game title"
            className="w-full p-2 rounded-md bg-gray-700 text-white"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-white mb-1">Description</label>
          <textarea
            {...register("description")}
            placeholder="Enter game description"
            className="w-full p-2 rounded-md bg-gray-700 text-white"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-white mb-1">Price</label>
          <input
            type="number"
            {...register("price", { required: "Price is required" })}
            placeholder="Enter price"
            className="w-full p-2 rounded-md bg-gray-700 text-white"
          />
          {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-white mb-1">Discounted Price</label>
          <input
            type="number"
            {...register("discountedPrice")}
            placeholder="Enter discounted price"
            className="w-full p-2 rounded-md bg-gray-700 text-white"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-white mb-1">Promo Code</label>
          <input
            {...register("promoCode")}
            placeholder="Enter promo code"
            className="w-full p-2 rounded-md bg-gray-700 text-white"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-white mb-1">Genre</label>
          <select
            multiple
            value={selectedGenres}
            onChange={handleGenreChange}
            className="w-full p-2 rounded-md bg-gray-700 text-white"
          
            size={10}
          >
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Arcade">Arcade</option>
            <option value="Puzzle">Puzzle</option>
            <option value="Role Playing Games">Role Playing Games</option>
            <option value="Casual">Casual</option>
            <option value="Shooter">Shooter</option>
            <option value="Simulation">Simulation</option>
            <option value="Strategy">Strategy</option>
            <option value="Driving/Racing">Driving/Racing</option>
            <option value="Family">Family</option>
            <option value="Horror">Horror</option>
            <option value="Unique">Unique</option>
            <option value="Sport">Sport</option>
            <option value="Fighting">Fighting</option>
            <option value="Simulator">Simulator</option>
            <option value="Party">Party</option>
            <option value="Brain Training">Brain Training</option>
            <option value="Music/Rhythm">Music/Rhythm</option>
            <option value="Educational">Educational</option>
            <option value="Adult">Adult</option>
            <option value="Quiz">Quiz</option>
            <option value="Fitness">Fitness</option>
          </select>
          {errors.genre && <p className="text-red-500 text-sm mt-1">{errors.genre.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-white mb-1">Platform</label>
          <select
            multiple
            value={selectedPlatforms}
            onChange={handlePlatformChange}
            className="w-full p-2 rounded-md bg-gray-700 text-white"
            size={5}
          >
            <option value="PC">PC</option>
            <option value="PS4">PS4</option>
            <option value="PS5">PS5</option>
            <option value="Xbox">Xbox</option>
            <option value="Switch">Switch</option>
          </select>
          {errors.platform && <p className="text-red-500 text-sm mt-1">{errors.platform.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-white mb-1">Release Date</label>
          <input
            type="date"
            {...register("releaseDate", { required: "Release date is required" })}
            className="w-full p-2 rounded-md bg-gray-700 text-white"
          />
          {errors.releaseDate && <p className="text-red-500 text-sm mt-1">{errors.releaseDate.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-white mb-1">Developer</label>
          <input
            {...register("developer")}
            placeholder="Enter developer"
            className="w-full p-2 rounded-md bg-gray-700 text-white"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-white mb-1">Publisher</label>
          <input
            {...register("publisher")}
            placeholder="Enter publisher"
            className="w-full p-2 rounded-md bg-gray-700 text-white"
          />
        </div>

        <button type="submit" className="mt-4 w-full bg-yellow-500 text-black font-bold py-2 rounded-md">
          Create Game
        </button>
      </form>
    </div>
  );
}
