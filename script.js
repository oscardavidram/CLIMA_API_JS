// let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
// let api_key = '6c6d556ad3bd60cba8d9005e0e8a96bc'
// let ciudad = 'São Paulo'

// fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
// .then(data => data.json())
// .then(data => console.log(data))

let urlBase = "https://api.openweathermap.org/data/2.5/weather";
let apiKey = "6c6d556ad3bd60cba8d9005e0e8a96bc";
let difKelvin = 275.15;

document.getElementById("botonBusqueda").addEventListener("click", () => {
  const ciudad = document.getElementById("ciudadEntrada").value;
  if (ciudad) {
    fetchDatosClima(ciudad);
  }
});

function fetchDatosClima(ciudad) {
  if (
    ciudad == "sao paulo" ||
    ciudad == "sau paulo" ||
    ciudad == "SAO PAULO" ||
    ciudad == "SAU PAULO" ||
    ciudad == "Sao paulo"
  ) {
    fetch(`${urlBase}?q=São Paulo&appid=${apiKey}`)
      .then((data) => data.json())
      .then((data) => mostrarDatosClima(data));
  } else {
    fetch(`${urlBase}?q=${ciudad}&appid=${apiKey}`)
      .then((data) => data.json())
      .then((data) => mostrarDatosClima(data));
  }
}

function mostrarDatosClima(data) {
  const divdDatosClima = document.getElementById("datosClima");
  divdDatosClima.innerHTML = "";

  // const ciudadNombre = data.name
  // const paisNombre = data.sys.country
  // const temperatura = data.main.temp
  // const descripcion = data.weather[0].description

  const {
    name: ciudadNombre,
    sys: { country: paisNombre },
    main: { temp: temperatura },
    weather,
  } = data;
  const descripcion = weather[0].description;

  const ciudadTitulo = document.createElement("h2");
  ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`;

  const temperaturaInfo = document.createElement("p");
  temperaturaInfo.textContent = `La temperataura es: ${Math.floor(
    temperatura - difKelvin
  )}°C`;

  const descripcionInfo = document.createElement("p");
  descripcionInfo.textContent = `La descripcion meteorologica es: ${descripcion}`;

  divdDatosClima.appendChild(ciudadTitulo);
  divdDatosClima.appendChild(temperaturaInfo);
  divdDatosClima.appendChild(descripcionInfo);
}
