import { useState, useEffect } from "react";
import axios from "axios";
import { Pet } from "../types/PetTypes"; // Assuming a Pet interface exists

export const usePets = () => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState<boolean>(false); // To track loading state
  const [error, setError] = useState<string>(""); // To track error messages
  const token = localStorage.getItem("token");

  // Fetch Pets
  const fetchPets = async () => {
    setLoading(true); // Start loading
    setError(""); // Clear previous errors

    try {
      const response = await axios.get("http://localhost:3002/pets/getPets", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response)
      // Assuming the response data is an array of pet objects
      const petsWithDateTime: Pet[] = response.data.map((pet: any) => ({
        pet_id: pet.pet_id, // Assuming pet_id exists in response
        pet_type: pet.pet_type, // Assuming pet_type exists in response
        pet_name: pet.pet_name, // Assuming pet_name exists in response
        pet_currency: pet.pet_currency || 0, // Default to 0 if not available
        pet_progress_bar: pet.pet_progress_bar || 0, // Default to 0 if not available
        pet_evolution_rank: pet.pet_evolution_rank || 1, // Default to 1 if not available
        pet_max_value: pet.pet_max_value || 150, // Default to 150 if not available
        created_date: pet.created_date || new Date().toISOString().split("T")[0], // Default current date if not available
        created_time: pet.created_time || new Date().toTimeString().split(" ")[0], // Default current time if not available
      }));

      console.log("Mapped pets:", petsWithDateTime); // Optional: log the mapped pets to check the data structure

      // Set the fetched data into state
      setPets(petsWithDateTime);

    } catch (error: any) {
      console.error("Error fetching pets:", error);
      setError("Failed to fetch pets. Please try again later.");
    } finally {
      setLoading(false); // End loading
    }
  };

  // Call fetchPets on initial render
  useEffect(() => {
    fetchPets();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Add Pet
  const addPet = async (newPet: Pet) => {
    if (!token) {
      console.error("User not authenticated. No token found.");
      setError("User not authenticated. No token found.");
      return;
    }
    try {
      const petWithUserId = {
        ...newPet,
      };

      console.log("Inserting pet data:", petWithUserId);
      
      await axios.post("http://localhost:3002/pets/insertPet", petWithUserId, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPets((prevPets) => [...prevPets, newPet]);
     
    } catch (error: any) {
      console.error("Error adding pet:", error);
      setError("Failed to add pet. Please try again later.");
    }
  };

  // Save Pet (Update Pet)
  const savePet = async (
    updatedPet: Pet,
    currentPets: Pet[],
    editingPetId: string
  ) => {
    if (!token) {
      console.error("User not authenticated. No token found.");
      setError("User not authenticated. No token found.");
      return;
    }

    try {
      await axios.patch(
        `http://localhost:3002/pets/updatePet/${editingPetId}`,
        updatedPet,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPets(currentPets); // Update the pets list after the save
    } catch (error: any) {
      console.error("Error saving pet:", error);
      setError("Failed to save pet. Please try again later.");
    }
  };

  // Delete Pet
  const deletePet = async (pet_id: string) => {
    setPets((prevPets) => prevPets.filter((pet) => pet.pet_id !== pet_id));

    try {
      await axios.delete(`http://localhost:3002/pets/deletePet/${pet_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error: any) {
      console.error("Error deleting pet:", error);
      setError("Failed to delete pet. Please try again later.");
    }
  };

  return {
    fetchPets,
    addPet,
    pets,
    setPets,
    savePet,
    deletePet,
    loading,
    error, // Return loading and error states
  };
};
