import React from 'react';
import ReactDOM from 'react-dom';

/* JSX Infos */

// on ne peut pas faire de conditions if en JSX mais on peut utiliser ces 2 types de conditions : ternary operator et && operator

// ternary operator qui revient à dire "if (x){y} else {z}"
x ? y : z 
// && operator
const age = 20;
{ age > 15 && <li>Brussels Sprouts</li> } // return true donc affichage de Brussels Sprouts
{ age > 25 && <li>Brussels Sprouts</li> } // return false donc pas affichage de Brussels Sprouts

// Create component
class RedPanda extends React.Component {
  render() {
    return (
// insert content here
    	);
    }
}

// Render Element
const test = 2 + 3;

ReactDOM.render(<h1> test </h1>, document.getElementById('app'));

// Importer une variable d'un autre fichier JS
import { NavBar } from './NavBar.js';
// il faut aussi exporter pour que ca fonctionne : c'est très simple, il suffit d'ajouter export devant la classe (ou la variable ?) qu'on veut importer
export class NavBar extends React.Component {
  render(){
  	return();
  }
  	
}

// Exemple : faire communiquer deux classes
class Buttonned extends React.Component {
  render() {
    return (
      <button onClick={this.props.dick}>
        Click me!
      </button>
    );
  }
}

class Talker extends React.Component {
  talk() {
    alert("test");
  }
  
  render() {
    return <Buttonned dick={this.talk} />;
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);

// Exemple de Constructor
class Mood extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'good' };
    this.toggleMood = this.toggleMood.bind(this); // à faire à chaque fois qu'on définit un Event Handler. On fait ça pour que le this associé soit bien le constructor et pas le render. Ca prend effet au niveau du onClick plus bas
  }

  toggleMood() {
    const newMood = this.state.mood == 'good' ? 'bad' : 'good';
    this.setState({ mood: newMood });
  }

  render() {
    return (
      <div>
        <h1>I'm feeling {this.state.mood}!</h1>
        <button onClick={this.toggleMood}> 
          Click Me
        </button>
      </div>
    );
  }
}