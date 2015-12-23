import Conditional from './Conditional';

export default class State
{
  // public functions
  get name(){return _name};
  thing : (input : number) => void;
}

var _name : number;
var _condtional : Conditional;


function shhh()
{
  console.log("Be quiet");
}

State.prototype.constructor = function()
{
  _condtional.bigBooty = 2;
  var thing : string = _condtional.doTheThing();
}

State.prototype.thing = function( input : number )
{
  function someHorseShit()
  {
      console.log("this is some horse shit.");
  }

  shhh();

  someHorseShit();
}
