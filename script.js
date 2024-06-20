function togglePopup() {
	document.getElementById("popup-1").classList.toggle("active")
}


/******************************************/



const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'b7289b0801msh95e688dbaa3fdd1p12c2f1jsn16dbe0000c38',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	}
}
const getWeather = (city) => {
	cityName.innerHTML = city
	fetch(url + city, options)
		.then(response => response.json())
		.then(response => {

			console.log(response)
			temp.innerHTML = response.current.temp_c
			temp2.innerHTML = response.current.temp_c
			feels_like.innerHTML = response.current.feelslike_c
			humidity.innerHTML = response.current.humidity
			humidity2.innerHTML = response.current.humidity
			heatindex.innerHTML = response.current.heatindex_c
			dewpoint.innerHTML = response.current.dewpoint_c
			visibility.innerHTML = response.current.vis_km
			wind_speed.innerHTML = response.current.wind_kph
			wind_speed2.innerHTML = response.current.wind_kph
			wind_degree.innerHTML = response.current.wind_degree
			region.innerHTML = response.location.region

		})
		.catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Mumbai")




const getWeather2 = (city) => {
	cityName.innerHTML = city
	fetch(url + city, options)
		.then(response => response.json())
		.then(response => {

			console.log(response)
			temp.innerHTML = response.current.temp_c
			temp2.innerHTML = response.current.temp_c
			feels_like.innerHTML = response.current.feelslike_c
			humidity.innerHTML = response.current.humidity
			humidity2.innerHTML = response.current.humidity
			heatindex.innerHTML = response.current.heatindex_c
			dewpoint.innerHTML = response.current.dewpoint_c
			visibility.innerHTML = response.current.vis_km
			wind_speed.innerHTML = response.current.wind_kph
			wind_speed2.innerHTML = response.current.wind_kph
			wind_degree.innerHTML = response.current.wind_degree
			region.innerHTML = response.location.region

		})
		.catch(err => console.error(err));
}

click1.addEventListener("click", (e) => {
	getWeather2("London")
})

const getWeather3 = (city) => {
	cityName.innerHTML = city
	fetch(url + city, options)
		.then(response => response.json())
		.then(response => {

			console.log(response)
			temp.innerHTML = response.current.temp_c
			temp2.innerHTML = response.current.temp_c
			feels_like.innerHTML = response.current.feelslike_c
			humidity.innerHTML = response.current.humidity
			humidity2.innerHTML = response.current.humidity
			heatindex.innerHTML = response.current.heatindex_c
			dewpoint.innerHTML = response.current.dewpoint_c
			visibility.innerHTML = response.current.vis_km
			wind_speed.innerHTML = response.current.wind_kph
			wind_speed2.innerHTML = response.current.wind_kph
			wind_degree.innerHTML = response.current.wind_degree
			region.innerHTML = response.location.region

		})
		.catch(err => console.error(err));
}

click2.addEventListener("click", (e) => {
	getWeather3("New York")
})

const getWeather4 = (city) => {
	cityName.innerHTML = city
	fetch(url + city, options)
		.then(response => response.json())
		.then(response => {

			console.log(response)
			temp.innerHTML = response.current.temp_c
			temp2.innerHTML = response.current.temp_c
			feels_like.innerHTML = response.current.feelslike_c
			humidity.innerHTML = response.current.humidity
			humidity2.innerHTML = response.current.humidity
			heatindex.innerHTML = response.current.heatindex_c
			dewpoint.innerHTML = response.current.dewpoint_c
			visibility.innerHTML = response.current.vis_km
			wind_speed.innerHTML = response.current.wind_kph
			wind_speed2.innerHTML = response.current.wind_kph
			wind_degree.innerHTML = response.current.wind_degree
			region.innerHTML = response.location.region

		})
		.catch(err => console.error(err));
}

click3.addEventListener("click", (e) => {
	getWeather4("Los Angeles")
})

const getWeather5 = (city) => {
	cityName.innerHTML = city
	fetch(url + city, options)
		.then(response => response.json())
		.then(response => {

			console.log(response)
			temp.innerHTML = response.current.temp_c
			temp2.innerHTML = response.current.temp_c
			feels_like.innerHTML = response.current.feelslike_c
			humidity.innerHTML = response.current.humidity
			humidity2.innerHTML = response.current.humidity
			heatindex.innerHTML = response.current.heatindex_c
			dewpoint.innerHTML = response.current.dewpoint_c
			visibility.innerHTML = response.current.vis_km
			wind_speed.innerHTML = response.current.wind_kph
			wind_speed2.innerHTML = response.current.wind_kph
			wind_degree.innerHTML = response.current.wind_degree
			region.innerHTML = response.location.region

		})
		.catch(err => console.error(err));
}

click4.addEventListener("click", (e) => {
	getWeather5("Tokyo")
})






const url3 = 'https://weatherapi-com.p.rapidapi.com/current.json?q=Goa';
const options3 = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'b7289b0801msh95e688dbaa3fdd1p12c2f1jsn16dbe0000c38',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	}
}
fetch(url3, options3)
	.then(response => response.json())
	.then(response => {

		console.log(response)
		temp3.innerHTML = response.current.temp_c
		feels_like3.innerHTML = response.current.feelslike_c
		humidity3.innerHTML = response.current.humidity
		heatindex3.innerHTML = response.current.heatindex_c
		dewpoint3.innerHTML = response.current.dewpoint_c
		visibility3.innerHTML = response.current.vis_km
		wind_speed3.innerHTML = response.current.wind_kph
		wind_degree3.innerHTML = response.current.wind_degree
		region3.innerHTML = response.location.region
	})
	.catch(err => console.error(err));


const url5 = 'https://weatherapi-com.p.rapidapi.com/current.json?q=Pune';
const options5 = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'b7289b0801msh95e688dbaa3fdd1p12c2f1jsn16dbe0000c38',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	}
}
fetch(url5, options5)
	.then(response => response.json())
	.then(response => {

		console.log(response)
		temp5.innerHTML = response.current.temp_c
		feels_like5.innerHTML = response.current.feelslike_c
		humidity5.innerHTML = response.current.humidity
		heatindex5.innerHTML = response.current.heatindex_c
		dewpoint5.innerHTML = response.current.dewpoint_c
		visibility5.innerHTML = response.current.vis_km
		wind_speed5.innerHTML = response.current.wind_kph
		wind_degree5.innerHTML = response.current.wind_degree
		region5.innerHTML = response.location.region
	})
	.catch(err => console.error(err));


const url6 = 'https://weatherapi-com.p.rapidapi.com/current.json?q=Bangalore';
const options6 = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'b7289b0801msh95e688dbaa3fdd1p12c2f1jsn16dbe0000c38',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	}
}
fetch(url6, options6)
	.then(response => response.json())
	.then(response => {

		console.log(response)
		temp6.innerHTML = response.current.temp_c
		feels_like6.innerHTML = response.current.feelslike_c
		humidity6.innerHTML = response.current.humidity
		heatindex6.innerHTML = response.current.heatindex_c
		dewpoint6.innerHTML = response.current.dewpoint_c
		visibility6.innerHTML = response.current.vis_km
		wind_speed6.innerHTML = response.current.wind_kph
		wind_degree6.innerHTML = response.current.wind_degree
		region6.innerHTML = response.location.region
	})
	.catch(err => console.error(err));


const url7 = 'https://weatherapi-com.p.rapidapi.com/current.json?q=Kolkata';
const options7 = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'b7289b0801msh95e688dbaa3fdd1p12c2f1jsn16dbe0000c38',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	}
}
fetch(url7, options7)
	.then(response => response.json())
	.then(response => {

		console.log(response)
		temp7.innerHTML = response.current.temp_c
		feels_like7.innerHTML = response.current.feelslike_c
		humidity7.innerHTML = response.current.humidity
		heatindex7.innerHTML = response.current.heatindex_c
		dewpoint7.innerHTML = response.current.dewpoint_c
		visibility7.innerHTML = response.current.vis_km
		wind_speed7.innerHTML = response.current.wind_kph
		wind_degree7.innerHTML = response.current.wind_degree
		region7.innerHTML = response.location.region
	})
	.catch(err => console.error(err));


const url8 = 'https://weatherapi-com.p.rapidapi.com/current.json?q=ahmedabad';
const options8 = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'b7289b0801msh95e688dbaa3fdd1p12c2f1jsn16dbe0000c38',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	}
}
fetch(url8, options8)
	.then(response => response.json())
	.then(response => {

		console.log(response)
		temp8.innerHTML = response.current.temp_c
		feels_like8.innerHTML = response.current.feelslike_c
		humidity8.innerHTML = response.current.humidity
		heatindex8.innerHTML = response.current.heatindex_c
		dewpoint8.innerHTML = response.current.dewpoint_c
		visibility8.innerHTML = response.current.vis_km
		wind_speed8.innerHTML = response.current.wind_kph
		wind_degree8.innerHTML = response.current.wind_degree
		region8.innerHTML = response.location.region
	})
	.catch(err => console.error(err));


