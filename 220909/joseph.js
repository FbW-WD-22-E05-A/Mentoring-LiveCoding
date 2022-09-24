// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }

// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
//   for(var x = 0; x < array1.length; x++){
//     const word = array1[x] // the
//     const initial = word.charAt(0) // t
//     const upper = initial.toUpperCase() // T
//     const rest  = word.slice(1) // he
//     const Capitalized = upper+rest
    
//     newarray1.push(Capitalized);
//   }
//   return newarray1.join(' ');
// }

function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
  for(var x = 0; x < array1.length; x++){
    newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(1, uppercase("the quick brown fox"));

// character = kar







