import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddDestination() {
  const [name, setName] = useState("");
  const [category, setcategory] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [openOnWeekends, setOpenOnWeekends] = useState(false);
  const [rating, setRating] = useState("");
  const nav = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  async function handleAddNewDestination(e) {
    e.preventDefault();
    setIsLoading(true);
    const newDestination = {
      name,
      category,
      description,
      location,
      image,
      openOnWeekends,
      rating,
    };
    try {
      const response = await axios.post(
        "http://localhost:5005/destinations",
        newDestination
      );
      console.log("Destination added:", response.data);
      setName("");
      setcategory("");
      setDescription("");
      setLocation("");
      setImage("");
      setOpenOnWeekends(false);
      setRating("");
      nav("/all-destinations");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  const isFormValid =
    name.trim() !== "" &&
    category.trim() !== "" &&
    description.trim() !== "" &&
    location.trim() !== "" &&
    rating.trim() !== "";

  return (
    <div>
      <form onSubmit={handleAddNewDestination}>
        <label>
          Name:
          <input
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Category:
          <select
            name="category"
            value={category}
            onChange={(e) => setcategory(e.target.value)}
          >
            <option value="" disabled>
              --Select Category--
            </option>
            <option value="landmark">Landmark</option>
            <option value="nature">Nature</option>
            <option value="shopping">Shopping</option>
            <option value="sports">Sports</option>
          </select>
        </label>

        <label>
          Description:
          <input
            name="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        <label>
          Location:
          <input
            name="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label>
          Image
          <input
            name="image"
            type="text"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </label>
        <label>
          Open on weekends
          <input
            name="OpenOnWeekends"
            type="checkbox"
            checked={openOnWeekends}
            onChange={(e) => setOpenOnWeekends(e.target.checked)}
          />
        </label>
        <label>
          Rating:
          <input
            name="rating"
            type="number"
            value={rating}
            min="0"
            max="5"
            step="1"
            onChange={(e) => setRating(e.target.value)}
          />
        </label>
        <button type="submit" disabled={!isFormValid || isLoading}>
          {isLoading ? "Adding..." : "Add Destination"}
        </button>
      </form>
    </div>
  );
}

export default AddDestination;
