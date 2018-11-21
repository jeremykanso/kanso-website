import React from 'react';

var buttonStyle = {backgroundColor:"black"};
var buttonText = "error";

const defaultButtonStyle = {
  padding:"8px 20px",
  borderRadius:7,
  fontSize: "0.8em",
  color:"#ffffff",
  textAlign:"center"
}

export class Button extends React.Component {

render(){

  switch (this.props.buttonType){
    case "valider" :
      buttonStyle = {backgroundColor:"#1AA9BF"}
      buttonText = "Valider";
      break;

    case "signaler" :
      buttonStyle = {backgroundColor:"#FC3277"}
      buttonText = "Signaler un problème";
      break;

    case "ajouter" :
      buttonStyle = {backgroundColor:"#1AA9BF"}
      buttonText = "Ajouter une station ?";
      break;

    case "nofollow" :
      buttonStyle = {backgroundColor:"#ffffff", color:"#727272", border:"1px solid #727272"}
      buttonText = "Ne plus suivre cette station ?";
      break;
}


  var totalButtonStyle = {
    ...defaultButtonStyle, ...buttonStyle
  }

  return(
    <button onClick={this.props.onClick} style={totalButtonStyle} >{buttonText}</button>
  );

}
}
