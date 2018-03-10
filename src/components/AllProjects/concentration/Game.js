import React, { Component } from 'react';
import './game.css';
const rootUrl = 'https://raw.githubusercontent.com/alejo4373/concentration_web_game-ReactJS-/master/medieval_theme/'
const cardNames = [ 'backpack', 'book', 'bottle', 'bow',
                    'helmet', 'map', 'shield', 'sword' ]

function shuffleArr(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
  return array
}

class Card extends React.Component {

  handleClick = e => {
    this.props.handler(e)
  }

  render(){
    const { name, id, flipped } = this.props
    let src;

    //Set src based on flipped flag
    if (flipped) {
      src =  rootUrl + name + '.png'
    } else {
      src = rootUrl + 'back.png'
    }


    return(
     <img
       name={name}
       className='card'
       id={id}
       src={src}
       alt={ 'A ' + name + ' drawing/image'}
       onClick={this.handleClick}
     />
    )

  }
}


class Game extends React.Component {
  constructor() {
    super();
    //Shuflle the cards and double them
    this.cards = shuffleArr(cardNames.concat(cardNames))
    this.flipBackCardsTimer = 0; //To hold the timer id that will flip
                             //cards when not a match
    this.state = {
      clickedCards: [], //Ex. clickedCards: ['key', 'heart'],
      ids: [],          //Ex. indexes: [4, 11],
      matches: []
    }
  }

  attemptFlipCard = (e) => {
    const { clickedCards, ids, matches } = this.state
    const card = e.target.name
    const id = e.target.id
    //Clear previous timeout
    clearTimeout(this.flipBackCardsTimer)

    // Check if we have clicked two cards already
    if (clickedCards.length === 2) {
      //Reset clicked cards putting only latest click
      let newClickedCards = [card]
      let newIds = [id]
      this.setState({
        clickedCards: newClickedCards,
        ids: newIds
      })
    } else {
      let newClickedCards = [...clickedCards, card]
      let newIds = [...ids, id]
      this.setState({
        clickedCards: newClickedCards,
        ids: newIds,
      })

      //Check for match where we have same card at two different places
      if(newClickedCards[0] === newClickedCards[1] && newIds[0] !== newIds[1]) {
        const newMatches = [...matches, card]
        this.setState({
          matches: newMatches
        })
     // If there was not a match set timeout to flip back cards
     } else {
       this.flipBackCardsTimer = setTimeout(()=>{this.setState({clickedCards:[], ids:[]})}, 2000)
     }
    }
  }

  render(){
    //console.log(this.state)
    const { clickedCards, ids, matches } = this.state
    return (
      <div className='board'>
        {this.cards.map( (card, index) => (
          <Card
            name={card}
            id={index}
            flipped={ matches.includes(card) || (clickedCards.includes(card) && ids.includes(index.toString())) }
            handler={this.attemptFlipCard}
          />))}
      </div>
    )
  }

};

export default Game;
