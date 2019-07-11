export class DateUtils {
	date = null;

	static getWeekDay(d) {
		const date = new Date(d * 1000);
		const now = new Date();
		let weekDay;
		if (date.getDay() === now.getDay()) {
			weekDay = 'Hoje';
		} else {
			switch (date.getDay()) {
				case 0:
					weekDay = 'Domingo';
					break;
				case 1:
					weekDay = 'Segunda-feira';
					break;
				case 2:
					weekDay = 'Terça-feira';
					break;
				case 3:
					weekDay = 'Quarta-feira';
					break;
				case 4:
					weekDay = 'Quinta-feira';
					break;
				case 5:
					weekDay = 'Sexta-feira';
					break;
				case 6:
					weekDay = 'Sábado';
					break;
				default:
					weekDay = 'Erro';
			}
		}
		return weekDay;
	}
}
