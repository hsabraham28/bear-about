import React from 'react';
import { Component } from 'react';
import oski from './oski.png';

console.log(oski);

class Meet extends Component {
  render() {
    return (
      <div className="team">
      <h1>
      Meet The Team
      </h1>
      <div className="row">
  <div className="column">
    <img src={oski} class="rounded-circle" alt="Oski1" />
    <h3>
    Oski 1
    </h3>
    <h4>
    Intro
    </h4>
  </div>
  <div className="column">
    <img src={oski} class="rounded-circle" alt="Oski2" />
    <h3>
    Oski 2
    </h3>
    <h4>
    Intro
    </h4>
  </div>
  <div className="column">
    <img src={oski} class="rounded-circle" alt="Oski3" />
    <h3>
    Oski 3
    </h3>
    <h4>
    Intro
    </h4>
  </div>
</div>
    </div>
      );
  }
}


export default Meet;
