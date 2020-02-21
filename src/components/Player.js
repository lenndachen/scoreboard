import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './Context';
import Counter from './Counter';
import Icon from './Icon';  

class Player extends PureComponent {

  // isHighest = () => {
  //   const highScore = this.state.players.map(Math.max(score) => {
  //   )


  static propTypes = {
    index: PropTypes.number.isRequired,
    isHighScore: PropTypes.bool
  };

  render() {
    
    const { 
      index
    } = this.props;

    return (
      <div className="player">
        <Consumer>
          { ({ actions }) => (
            <span className="player-name">
              <button className="remove-player" onClick={() => actions.removePlayer(players[index].id)}>✖</button>
              <Icon />
              { players[index].name }
            </span> 
          )}
        </Consumer>
  
        <Counter 
          index={index}
        />
      </div>
    );
  }
}

export default Player;