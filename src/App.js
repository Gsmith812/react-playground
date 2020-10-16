import React, {Component} from 'react';
import Split from './composition/Split';
import './App.css';
import Tooltip from './composition/Tooltip';
import Messages from './Messages';
import TheDate from './state/TheDate';
import Counter from './state/Counter';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';

const firstTooltip = (
  <Tooltip color='hotpink' message='tooltip message'>
    ipsum
  </Tooltip>
)

const secondTooltip = (
  <Tooltip color='#126BCC' message='another tooltip message'>
    officiis
  </Tooltip>
)

class App extends Component {
  render () {
    return (
      <main className='App'>
        <div>
          <Messages name='Messages' unread={0} />
          <Messages name='Notifications' unread={10} />
          <TheDate />
          <Counter count={123} step={1}/>
          <HelloWorld />
          <Bomb />
          <RouletteGun />
        </div>
        <Split className='left' flexBasis={2}>
          Lorem {firstTooltip} dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?<br />
          <Tooltip message='one more tooltip message'>
            Necessitatibus?
          </Tooltip>
        </Split>
        <Split className='right'>
          Inventore aliquid cupiditate suscipit repellat. Quaerat quis {secondTooltip} quam fuga. Aliquid quo possimus id soluta aspernatur.
        </Split>
      </main>
    );
  }
}
    

export default App;