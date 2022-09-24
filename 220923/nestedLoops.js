/**
 * Demo of nested loops, using the metaphor of
 * - a cleaner going from room to room in a school
 * - placing all the chairs upside down on the tables
 */


// Model the school as an object with 3 rooms.
// Each room has an array of chairs in the 0 position
// (standing on the floor)
const school = {
  room1: [0,0,0,0,0],
  room2: [0,0,0,0],
  room3: [0,0,0,0,0,0,0,0]
}


// Get an array of the names of the rooms
const rooms = Object.keys(school)

console.log("school:", school);
console.log("rooms:", rooms);


// Create a for loop to iterate through the names
// of the rooms
for ( let ii = 0; ii < rooms.length; ii += 1 ) {
  const roomName = rooms[ii]
  // console.log("roomName:", roomName);

  // Use the room name to get the array of chairs
  const chairsInRoom = school[roomName]

  // // Solution 1: use a nested for loop to switch each
  // // item in each array from 0 to 1

  // for ( let jj = 0; jj < chairsInRoom.length; jj += 1 ) {
  //   chairsInRoom[jj] = 1
  // }

  // Solution 2: use Array.prototype.forEach instead
  // of a for loop
  chairsInRoom.forEach(turnChairs)
  
  console.log("chairsInRoom:", roomName, chairsInRoom);

  function turnChairs(item, index, array) {
    array[index] = 1
  }
}



console.log("school:", school);
console.log("rooms:", rooms);