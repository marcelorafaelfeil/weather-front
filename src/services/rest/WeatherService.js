export class WeatherService {
	static URL_GET_CITY_DETAILS = '/openweather/forecast';

	static async getWeather(cityId) {
		return fetch(
			`${process.env.REACT_APP_API_URL}${
				WeatherService.URL_GET_CITY_DETAILS
			}?id=${cityId}`,
			{
				headers: {
					'Content-Type': 'application/json;charset=UTF-8'
				},
				method: 'GET'
			}
		)
			.then(response => response.json())
			.then(response => WeatherService.prepareData(response));
	}

	static prepareData(data) {
		let today, next;
		if (!!data && data.list) {
			data.list.forEach((d, index) => {
				if (!!d.weather && !!d.weather[0] && !!d.weather[0].icon) {
					const { icon } = d.weather[0];
					let newIcon;
					switch (icon) {
						case '01d':
							newIcon = 'clear-weather';
							break;
						case '01n':
							newIcon = 'clear-night';
							break;
						case '02d':
						case '02n':
							newIcon = 'party-cloudy-weather';
							break;
						case '03d':
						case '03n':
							newIcon = 'scattered-clouds';
							break;
						case '04d':
						case '04n':
							newIcon = 'cloudy-weather';
							break;
						case '09d':
						case '09n':
							newIcon = 'weather-heavy-rain';
							break;
						case '10d':
						case '10n':
							newIcon = 'rain';
							break;
						case '11d':
						case '11n':
							newIcon = 'strom-weather';
							break;
						case '13d':
						case '13n':
							newIcon = 'snow-fall';
							break;
						case '50d':
						case '50n':
							newIcon = 'snow-with-rain';
							break;
						default:
							newIcon = icon;
					}
					data.list[index].weather[0].icon = newIcon;
				}
				data.list[index].selected = false;
			});

			today = {
				selected: false,
				city: data.city,
				...data.list[0]
			};
			data.list.splice(0, 1);
			next = data.list;
		}
		return { today, next };
	}
}
