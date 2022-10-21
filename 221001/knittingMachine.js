class KnittingMachine {
  constructor(colour, limbCount) {
    this.colour = colour;
    this.limbCount = limbCount;
  }

  createSweater() {
    // // <<< ALTERNATIVE SOLUTIONS
    // // GENERIC SOLUTION FOR SLEEVES
    // let sleeves = new Array(this.limbCount).fill(0);

    // const pieces = sleeves.map((item, index) => {
    //   return this.createSleeve(index);
    // });

    // HARD-CODED SOLUTION FOR SLEEVES
    const pieces = []
    pieces.push(this.createSleeve(0))
    pieces.push(this.createSleeve(1))
    // END OF ALTERNATIVE SOLUTIONS >>>

    pieces.push(this.createBody());
    pieces.push(this.createCollar());

    // return pieces;
    const output = this.sewItTogether(pieces)

    return output
  }

  createSleeve(index) {
    const side = index % 2 ? "left" : "right";
    /// instructions go here
    return `${side} sleeve`;
  }
  
  createBody() {
    return `body`;
  }

  createCollar(){
    return `collar`
  }

  sewItTogether(pieces) {
    // [ ... ]
    return pieces.join(" and ")
  }
}

// To make a sweater
// * two sleeves
// * body
// * collar
// * Sew everything together

const knitter = new KnittingMachine("green", 2);
const result = knitter.createSweater();
console.log("result:", result);
