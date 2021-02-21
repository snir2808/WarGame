import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import useSound from 'use-sound';
import sound from './media/WhatsApp Audio 2021-02-21 at 12.53.08.mp4'
import card_2 from './media/nicubunu_Ornamental_deck_2_of_spades (1).svg'
import card_3 from './media/nicubunu_Ornamental_deck_3_of_spades.svg'
import card_4 from './media/nicubunu_Ornamental_deck_4_of_spades.svg'
import card_5 from './media/nicubunu_Ornamental_deck_5_of_spades.svg'
import card_6 from './media/nicubunu_Ornamental_deck_6_of_spades.svg'
import card_7 from './media/nicubunu_Ornamental_deck_7_of_spades.svg'
import card_8 from './media/nicubunu_Ornamental_deck_8_of_spades.svg'
import card_9 from './media/nicubunu_Ornamental_deck_9_of_spades.svg'
import card_10 from './media/nicubunu_Ornamental_deck_10_of_spades.svg'
import card_11 from './media/nicubunu_Ornamental_deck_Jack_of_spades.svg'
import card_12 from './media/nicubunu_Ornamental_deck_Queen_of_spades.svg'
import card_13 from './media/nicubunu_Ornamental_deck_King_of_spades.svg'
import card_14 from './media/nicubunu_Ornamental_deck_Ace_of_spades.svg'
import card from './media/nicubunu_Card_backs_grid_red_preview_3d99.png'


export default function Game(props) {
    const [play] = useSound(sound);

    //סטייט שאחרי להסתרת הקלפים עד ללחיצה ראשונית
    const [secStyle, setSecStyle] =useState({display:'block'})
    //סטייט שמציג את הקלפים לאחר לחיצה ראשונית
    const [ style, setStyle] = useState({display: 'none'})
    //סטייס שמחזיק את מערך השחקן בפעם הראשונה שמשחק
    const [player, setPlayer] = useState(props.newPlayer)
    // סטייט שמחזיק את מערך הקלפים של המשתמש
    const [playerCards, setPlayerCards] = useState(0)
    // סטייט שמחזיק את מערך הקלפים של המחשב
    const [comCards, setComCards] = useState(props.newCom)
    // סטייט שסופר את מספר הסיבובים שנעשו במשחק (הוא גם משמש לעבור על כל תא במערך לפי הסדר)
    const [cunter, setCunter] = useState(0)
    // סטייט שמחשב כמות נקודות בכל פעם שמחשב מנצח בסיבוב
    const [comScore, setComScore] = useState(0)
    //סטייט שמחשב כמות נקודות בכל פעם שהמשתמש מנצח
    const [playerScore, setPlayerScore] = useState(0)
    // סטייט שמחזיק את תמונות הקלפים
    const [aIcardDisplay, setAIcardDisplay]= useState(card)
    const [palyercardDisplay, setPlayercardDisplay]= useState(card)
    const [open, setOpen] = useState(false);



    const history = useHistory()
// הכנסת חבילת קלפים חדשה למחשב (קורה רק מהמשחק השני כדי לא לקבל שגיאה שיש ערך ריק)
    let cardForCom = props.newCom
//תנאי שמציל את הקוד במקרה שמגיע מערך ריק מהסיבוב השני
        if(props.newCom == 0){
            cardForCom = props.computer
        }
        let openModal = ()=>{
            setOpen(true)
            play()
            // setTimeout(() => {
            //     setOpen(false)
            // }, 5000);
        }

        //פונקציה שאחראית לניהול המשחק 
    let next = () => {
        console.log(props.newCom)
        setSecStyle({display: 'none'})
        setStyle({display:'block'})
        //תנאי שפעיל מהסיבוב השני מכיוון שסטייט מתאפס ברינדור אז אני נותן לו ערך המשכי 
        if(player == 0){
            setPlayer(props.player)
        }
        //משתנה שמשמש אותי לשמור תוצאות המשחק במקום להיסתבך עם עריכת סטייט
        let result = 0
        //הכנסת קליפים אחד אחד למשחק למשתמש ולמחשב
        setPlayerCards( props.player.cards[cunter])
        setComCards(cardForCom[cunter])
        switch (cardForCom[cunter]) {
            case 1:
                setAIcardDisplay(card_2)
                break;
              case 2:
                setAIcardDisplay(card_3)
                break;
              case 3:
                setAIcardDisplay(card_4)
                break;
              case 4:
                setAIcardDisplay(card_5)
                break;
              case 5:
                setAIcardDisplay(card_6)
                break;
              case 6:
                setAIcardDisplay(card_7)
                break;
              case  7:
                setAIcardDisplay(card_8)
                break;
              case  8:
                setAIcardDisplay(card_9)
                break;
              case  9:
                setAIcardDisplay(card_10)
                break;
              case  10:
                setAIcardDisplay(card_11)
                break;
              case  11:
                setAIcardDisplay(card_12)
                break;
              case  12:
                setAIcardDisplay(card_13)
                break;
              case  13:
                setAIcardDisplay(card_14)
                break;
        }

        switch (props.player.cards[cunter]) {
            case 1:
                setPlayercardDisplay(card_2)
                break;
              case 2:
                setPlayercardDisplay(card_3)
                break;
              case 3:
                setPlayercardDisplay(card_4)
                break;
              case 4:
                setPlayercardDisplay(card_5)
                break;
              case 5:
                setPlayercardDisplay(card_6)
                break;
              case 6:
                setPlayercardDisplay(card_7)
                break;
              case  7:
                setPlayercardDisplay(card_8)
                break;
              case  8:
                setPlayercardDisplay(card_9)
                break;
              case  9:
                setPlayercardDisplay(card_10)
                break;
              case  10:
                setPlayercardDisplay(card_11)
                break;
              case  11:
                setPlayercardDisplay(card_12)
                break;
              case  12:
                setPlayercardDisplay(card_13)
                break;
              case  13:
                setPlayercardDisplay(card_14)
                break;
        }

        //תנאי שבודק מי ניצח בסיבוב הנוכחי
        if(comCards > playerCards){
            
            setComScore(comScore +1)
            
        }else if(comCards < playerCards){
            
            setPlayerScore(playerScore +1)
        }
        if(props.player.cards[cunter] == cardForCom[cunter] && comCards !== 0){
          console.log(playerCards[cunter])
          console.log(comCards[cunter])
            openModal()
        }
        setCunter(cunter +1)
        // משתנה שיעזור לי לערוך את האובייקט בצורה נוחה כולל היסטוריה משחקים 
        var newPlayer = player
        //חלק זה אחראי על בדיקת מנצח בכל משחק ומעדכן את אובייקט המשתמש בהתאם
        if(cunter >= 25){
            if(playerScore > comScore ){
                result = {
                    name: props.player.name,
                    numberOfWin: newPlayer.numberOfWin +1,
                    numberOfLose: newPlayer.numberOfLose, numberOfGame:newPlayer.numberOfGame +1,
                    cards: props.player.cards
                }
            }else if(playerScore < comScore){
                result = {
                    name: newPlayer.name, 
                    numberOfWin: newPlayer.numberOfWin,
                    numberOfLose: newPlayer.numberOfLose +1,
                    numberOfGame:newPlayer.numberOfGame +1,
                    cards: props.player.cards
                }
            }else{
                //חלק זה אחראי על כמות ניצחונות זהה בין השחקן למחשב. במקרה כזה השחקן עדיין הפסיד
                result = {
                    name: newPlayer.name, 
                    numberOfWin: newPlayer.numberOfWin, 
                    numberOfLose: newPlayer.numberOfLose +1, numberOfGame: newPlayer.numberOfGame +1,
                    cards: props.player.cards
                }
            }
            //דגל לוודא שאכן עודכן המערך של השחקן 
            if(result != 0){
            props.score(result)
            history.push('/end')
           }
        }
    }
    return (
        <div className = 'game'>
            <h1 className='gameName'>AI</h1>
            <p style={secStyle}></p>
            
            <p  style={style}><img src={aIcardDisplay}/></p>
            <p style={style}><img src={palyercardDisplay}/></p>
            <p style={secStyle}></p>
            <h1 className='gameName'>{props.player.name}</h1>
            <Button onClick={next} variant="contained">GO!</Button>
            <Popup open={open} closeOnDocumentClick >
        <div>

        <h1 className= 'rforw1'>WAR!</h1>
        </div>
      </Popup>
        </div>
    )
}
