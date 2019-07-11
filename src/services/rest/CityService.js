import { AntUtilsService } from '../AntUtilsService';

export class CityService {
	static URL_SEARCH_CITY = '/5d26788a2f0000df95c10ea0';
	static URL_GET_MY_LIST = '/5d26b003320000610071b60c';
	static URL_ADD_IN_MY_LIST = '/5d26b24a320000590071b615';
	static URL_REMOVE_OF_MY_LIST = '/5d26b24a320000590071b615';

	static abortSearchCity;

	static async searchCity(query) {
		if (CityService.abortSearchCity) {
			CityService.abortSearchCity.abort();
		}
		CityService.abortSearchCity = new AbortController();
		return fetch(
			`${process.env.REACT_APP_API_URL}${
				CityService.URL_SEARCH_CITY
			}?q=${query}`,
			{
				method: 'GET',
				signal: CityService.abortSearchCity.signal
			}
		)
			.then(response => response.json())
			.then(AntUtilsService.prepareAutoCompleteData);
	}

	static async getMyList() {
		const response = await fetch(
			`${process.env.REACT_APP_API_URL}${CityService.URL_GET_MY_LIST}`,
			{
				method: 'GET'
			}
		);
		return await response.json();
	}

	static async addInMyList(data) {
		return fetch(
			`${process.env.REACT_APP_API_URL}${CityService.URL_ADD_IN_MY_LIST}`,
			{
				method: 'POST',
				body: JSON.stringify(data)
			}
		);
	}

	static async removeOfMyList(data) {
		return fetch(
			`${process.env.REACT_APP_API_URL}${CityService.URL_REMOVE_OF_MY_LIST}`,
			{
				method: 'DELETE',
				body: JSON.stringify(data)
			}
		);
	}

	static isValidToInsert(city, data) {
		const result = data.findIndex(d => d.id === city.id);
		return result < 0;
	}
}
