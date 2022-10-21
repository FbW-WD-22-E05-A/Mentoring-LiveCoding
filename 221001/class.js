class Instrument {
  constructor(type) {
    console.log("type argument is:", type);

    // `this` is an object
    this.type = type;

    // console.log(`"${type}"`, this, typeof this, this.isType);

    // return this
  }

  isType() {
    return this.type;
  }

  makeMusic() {
    console.log(`making ${this.type} music`);
  }
}

class Guitar extends Instrument {
  constructor() {
    super()
    console.log("this:", this);
  }

  makeMusic() {
    console.log(`making beautiful ${this.type} music`);
  }
}

// Create an instance of the instrument Class

const myGuitar = new Guitar("guitar");
console.log("myGuitar:", myGuitar);

const instrumentType = myGuitar.isType();
console.log("myGuitar.type:", myGuitar.type);

console.log("instrumentType variable is:", instrumentType);
myGuitar.makeMusic();

myGuitar.playChord()


Guitar.prototype.playChord = function(){
  console.log("")
}

// "guitar"
const newGuitar = new Guitar("guitar");
newGuitar.playChord()

const instrumentTwo = new Instrument("saxophone");
const instrument2Type = instrumentTwo.isType();
console.log("instrumentType.type:", instrumentTwo.type);

console.log("instrumentType variable is:", instrument2Type);
instrumentTwo.makeMusic();
