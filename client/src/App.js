import './App.css';
import UserLogin from './UserLogin';
import SingleCard from './SingleCard';
import CardSlot from './CardSlot';

function App() {

  const randomCard = "http://localhost:3000/api/v1/spreads/random_card";

  // fetch("https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=10")
  // .then(function (response) {
  //   return response.json()
  // })
  // .then(function (response) {
  //   // handle ten random cards
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   // handle what went wrong
  // });

  //randomCard, {mode: "no-cors"}

  

  return (
   <div>
    <h1 className="header">Tarot Reading~</h1>
    <div className="buttonDiv">
    <SingleCard></SingleCard>
    </div>
    </div>
  );
}

export default App;
