import React from 'react'
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

export default function End(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      button: {
        color:'#73706C',
      },
    },
  }));
  const classes = useStyles();

    const history = useHistory()

    //שוב פונקציה ומשתנים שאחראים על חילוק הקלפים מחדש ושליחת השחקן למשחק נוסף
    var num = []
    var comCrards = []
    let cardFunc = () =>{
        for(let i = 1;i < 14;i++){
          for(let j = 0;j < 4 ;j++){
            num.push(i)
          }
        }
        num.sort(() => Math.random() - 0.5);
        for(let i = 0;i < 26;i++){
          comCrards.push(num[i])
        }
        for(let i = 0;i < 26 ;i++){
          num.splice(i,1)
        }
        props.player.cards = num
        props.keepPlay(comCrards, props.player)
        console.log(comCrards)
        console.log(num)
          history.push('/game')
      }

    return (
        <div>
            <h1><span className='lose'>LOSE</span><span className='win' style ={{color: 'black'}}> \</span>  <span className='win'>WIN</span></h1>
            <h2 style={{color: 'white'}}>{props.player.numberOfLose}  -  {props.player.numberOfWin}</h2>
            <Button className={classes.button} onClick={cardFunc} variant="contained">Again?</Button>
        </div>
    )
}
