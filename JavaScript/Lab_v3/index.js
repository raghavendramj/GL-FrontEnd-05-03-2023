const api = {
  key: "7e3f21edee540e6110af347b55eb1ab2",
  base: "https://api.openweathermap.org/data/2.5/",
};

function getResults(query) {
  let url = `${api.base}weather?q=${query}&units=metric&appid=${api.key}`;
  //https://api.openweathermap.org/data/2.5/weather?q=Bengaluru&units=metric&appid=7e3f21edee540e6110af347b55eb1ab2
  //   console.log(url);

  fetch(url)
    .then((weather) => weather.json())
    .then((resp) => displayResults(resp));
}
function displayResults(weather) {
  console.clear();
  console.log("displayResults -> ", weather);
  let cityHTML = document.querySelector(".city");
  cityHTML.innerHTML = `${weather.name}`;

  let now = new Date();
  let dateHTML = document.querySelector(".location .date");
}

getResults("New Delhi");
