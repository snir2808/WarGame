import './App.css';
import React, {useState} from 'react'
import { HashRouter as Router, Switch, Route, Link} from "react-router-dom";
import Game from './Game'
import Home from './Home'
import End from './End'


function App() {
//סטייט לשימוש שמירה של קלפים למחשב
  const [comCard, setComCrad] =useState([]);
  //סטייט לשמירה של משתמש חדש(יש רק משתמש אחד)
  const [player, setPlayer] =useState();
  //סטייט לשמירה של משחק חוזר (מעגל זיכרון לשמירת תוצאות של משחקים)
  const [playerAfterGame, setPlayerAfterGame] =useState('');
  //משתנה לקבלת חבילת קלפים חדשה למחשב
  var newcomCrards = 0
  var newplayerCards = 0
  //משתנה להעברה של נתונים לקומפננטה מכיוון שסטייט לא אמין בהעברת מידע
  var results = 0
  //פונקציה חוזרת להבערת מידע להמשך משחקים 
  let getInfoFormHome = (player,comCard,playerCards) => {
    setPlayer({name: player, numberOfWin: 0, numberOfLose: 0, numberOfGame:0,cards: playerCards})
    setComCrad(comCard)
  }
//פונקציה שמעבירה את אובייקט המשתמש לאחר שמירה של נתונים מהמשחק האחרון 
  let takeInfo = (player) =>{
    results = player
  }
//פונקציה ששומרת קלפים חדשים למשחק הבא
  let keepPlay = (comCrards,playerCards) =>{
    newcomCrards = comCrards;
    newplayerCards = playerCards;
  }

  return (
    <div className="App">
    <Router>
        <Switch>
        <Route exact path = '/' >
           <Home infoFunc = {getInfoFormHome}/>
          </Route>
          <Route path = '/game' 
          component ={()=>{return(
          <Game
          newCom ={newcomCrards}
          newPlayer = {newplayerCards}
          score = {takeInfo} 
          player ={player}
          computer = {comCard}
          />)}}>
            </Route>
            <Route path='/end' component={()=>{return(<End keepPlay={keepPlay} player ={results}/>)}}></Route> 
        </Switch>
      </Router>

      
    </div>
  );
}

export default App;
