export class AntUtilsService {
	static prepareAutoCompleteData(data) {
		const value = [];
		data.forEach((d) => {
			value.push({
				id: d.id,
				text: `${d.name}, ${d.country}`,
				value: d
			});
		});
		return value;
	}
}