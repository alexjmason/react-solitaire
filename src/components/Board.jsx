import React, { Component } from "react";
import Card from "./card";
import { cards } from "./../cards"

export default class Board extends Component {
  cards = cards;

  render() {
    return (
      <div className="game-board">
        {
          this.cards.map(card => { 
            return <Card key={card.path} image={"card.path"}></Card>
          })
        }
      </div>
    );
  }
}
