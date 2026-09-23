let anime = 'Cowboy Bebop';
let seasons = 1;
let movies = 1
let episodes = 26;
let avg_runtime = 25;
const ongoing = false;

let total_content = episodes + movies;
let ep_watch_time = episodes * avg_runtime;

let title = "watching: " + anime;    
let completed = "You watched all " + total_content + " entries in the franchise!";


console.log(title);
console.log('The anime is still airing:', ongoing);
console.log(completed);
console.log('It would take you', ep_watch_time, 'minutes to watch all 26 episodes.');

document.body.innerHTML += "<p>Episode length: " + avg_runtime + "</p>";
// the code above it basically saying that it belonds in the body with is being on the main page 