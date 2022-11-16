import './App.css';
import UserLogin from './UserLogin';
import SingleCard from './SingleCard';

function App() {

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

  // fetch("https://localhost:3000/api/v1")
  //   .then(response => {
  //     console.log(response.json());
  //   })
  //   .catch(error => {
  //     throw new Error("something went wrong")
  //   })

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
