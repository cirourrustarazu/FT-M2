import React from "react";
// eslint-disable-next-line no-unused-vars
import Animals from "../Animals/Animals";
// eslint-disable-next-line no-unused-vars
import Species from "../Species/Species";
// import styledZoo from "./Zoo.module.css";

export default function Zoo() {
  /* Escribe acá tu código */
  const [zoo, setZoo] = React.useState({
    zooName: '',
    animals: [],
    species: [],
    allAnimals: [],
  })

  const handleInputChange = (event) => {
    setZoo({ ...zoo, zooName: event.target.value });
  }

  const handleSpecies = (selectedSpecies)=>{
      // Filtra los animales por la especie seleccionada
    const filteredAnimals = zoo.allAnimals.filter(animal => animal.specie === selectedSpecies);
    setZoo({ ...zoo, animals: filteredAnimals });
  }
  
  const handleAllSpecies = ()=>{
    // Muestra todos los animales
    setZoo({ ...zoo, animals: zoo.allAnimals })
  }

  React.useEffect(() => {
    // Realiza la petición al servidor db.json y actualiza el estado zoo
    fetch('http://localhost:3001/zoo')
      .then((res) => res.json())
      .then((data) =>
        setZoo({
          ...zoo,
          animals: data.animals,
          species: data.species,
          allAnimals: data.animals,
        })
      )
      .catch((error) => console.log(error));
  }, []); // El segundo argumento [] significa que este efecto se ejecuta solo una vez al montar el componente

  return (
    <div>
      <label>Zoo Name:</label>
      <input type="text" value={zoo.zooName} onChange={handleInputChange} />
      <h1>{zoo.zooName}</h1>
      <Species species={zoo.species} handleSpecies={handleSpecies} handleAllSpecies={handleAllSpecies}/>
      <Animals animals={zoo.animals}/>
    </div>
  );
}
