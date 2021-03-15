//getRandomNumber();
async function getRandomNumber() {
    let promise = new Promise(resolve => {
        setTimeout(() =>
        {resolve(Math.random());},
         500);
    });
    let result = await promise; //wait until the promise resolve (*)
    alert(result); //"done!"
}
getRandomNumber();

async function city(cityName) {
    // create a variable that goes ahead and fetches the link  (sub value indicated through ${})
    const response = await fetch(`https://geocode.xyz/${cityName}?json=1`)
    // create a variable that awaits its conversion to a json file
    const info = await response.json();
    //print out a line that has text and coords
    console.log("\nThe latitude is: " + info.longt + ".\n\nThe longitude is: " + info.latt);
  }
  //input a city!
  city("omaha");
  