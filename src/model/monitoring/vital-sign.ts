import { Message, Entity } from "./../model";

class VitalSign implements Message{
  
  type: string;
  
  constructor(){
    console.log('VitalSIgn created');
  }

  sing(){
    alert('VitalSIgn is singing');
  }
}

export default VitalSign;
