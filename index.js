// setTimeout(function() {
//     try {
//       wecode; // try...catch handles the error!
//     } catch {
//       alert( "error is caught here!" );
//     }
//   }, 1000);

  let json = '{ "age": 30 }'; // incomplete data

try {

  let user = JSON.parse(json); // <-- no errors
  alert( user.name ); // no name!

} catch (err) {
  alert( "doesn't execute" );
}