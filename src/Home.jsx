import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button';

export default function Home(props) {

    const history = useHistory()
    const [cards, setCards] = useState([])
    const [comCard, setComCrad] =useState([])
    const [player, setPlayer] =useState()
    const [playerCards, setPlayerCards] =useState([])


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
const classes = useStyles();

//שני המשתנים האלו משמשים אותי להעברה של מידע ופעולות חשבון כי סטייט לא פועל כראוי
    var num = []
    var comCrards = []
    //פונקציה ליצירת חבילת קלפים כולל עירבוב שלהם וכולל חלוקה מדוייקת לשני שחקנים
    let cardFunc = () =>{
        for(let i = 1;i < 14;i++){
          for(let j = 0;j < 4 ;j++){
            num.push(i)
          }
        }
        //פעולת מיון שמערבבת נתונים במערך
        num.sort(() => Math.random() - 0.5);
        for(let i = 0;i < 26;i++){
          comCrards.push(num[i])
        }
        setComCrad(comCrards)
        for(let i = 0;i < 26 ;i++){
          num.splice(i,1)
        }
        setPlayerCards(num)
      }
      //פונקציה שמכניסה את שם השחקן לתוך סטייט 
      let playerName = (e) =>{
        let name = e.target.value
         setPlayer(name)
      }
      //פונקציה שבודק אם הוכנס ערך לשדה הכתיבה. במידה וכן שולחת פקודה ליצירת אובייקט משתמש חדש
      let validName = () =>{
        if(player == undefined){
          alert('bla bla bla')
        }else{
          props.infoFunc(player,comCrards,num)
          //היסטורי משמש אותי להעברה לערוץ אחר ללא צורך בלחיצה פיזית 
          history.push('/game')
        }
      }



    return (
      <div>
         <h1 className='rforw'>ReadY FoR WaR ? </h1>
          <form className={classes.root} noValidate autoComplete="off">
      <TextField onChange={playerName} id="filled-basic" label="Name" variant="filled" />
    </form>
      <Button  onClick={()=>{cardFunc();validName();}} variant="contained">start</Button>
        </div>
    )
}
