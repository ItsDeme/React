import "./App.css";
import Card from "./card.jsx";

const characters = [
  {
    name: "Sasuke",
    clan: "Uchiha",
    anime: "Naruto",
    img: "https://cdna.artstation.com/p/assets/images/images/059/500/400/large/anasxart-untitled34-20220723170548.jpg?1676516078",
  },
  {
    name: "Itachi",
    clan: "Uchiha",
    anime: "Naruto",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqY_VEBTjhSB6gS2eVTQv9KXJgzGOZJ85jwpO7kzg90A&s&ec=72940543",
  },
  {
    name: "Madara",
    clan: "Uchiha",
    anime: "Naruto",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwS0SMou6Ggei4F5app7eEsXyl6h1rPFB5EzRCDaYa4A&s&ec=72940543",
  },
];
function App() {
  return (
    <>
    <div className="container">
      {characters.map((character, i) => (
        <Card
          key={i}
          name={character.name}
          clan={character.clan}
          anime={character.anime}
          img={character.img}
        />
      ))}
      </div>
    </>
  );
}

export default App;
