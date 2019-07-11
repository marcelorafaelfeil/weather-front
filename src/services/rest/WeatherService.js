export class WeatherService {
	static URL_GET_CITY_DETAILS = '/5d275ab0320000682a71bada';

	static async getWeather(cityId) {
		return fetch(
			`${process.env.REACT_APP_API_URL}${
				WeatherService.URL_GET_CITY_DETAILS
			}?cityId=${cityId}`,
			{
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
						case '02d' || '02n':
							newIcon = 'party-cloudy-weather';
							break;
						case '03d' || '03n':
							newIcon = 'scattered-clouds';
							break;
						case '04d' || '04n':
							newIcon = 'cloudy-weather';
							break;
						case '09d' || '09n':
							newIcon = 'weather-heavy-rain';
							break;
						case '10d' || '10n':
							newIcon = 'rain';
							break;
						case '11d' || '11n':
							newIcon = 'strom-weather';
							break;
						case '13d' || '13n':
							newIcon = 'snow-fall';
							break;
						case '50d' || '50n':
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
			}
			data.list.splice(0,1);
			next = data.list;
		}
		return { today, next };
	}
}
