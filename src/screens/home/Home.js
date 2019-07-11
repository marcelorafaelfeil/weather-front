import { Col, Layout, Row, Spin, notification } from 'antd';
import React, { Component } from 'react';
import { SearchCity } from '../../components/SearchCity';
import { ListOfCities } from '../../components/ListOfCities';
import { CityService } from '../../services/rest/CityService';

export class Home extends Component {
	state = {
		cities: [],
		loaded: false
	};

	componentWillMount = async () => {
		const cities = await CityService.getMyList();
		this.setState({
			cities,
			loaded: true
		});
	};

	handleSelectCity = data => {
		const cities = this.state.cities;
		if (CityService.isValidToInsert(data, cities)) {
			cities.push(data);
			this.setState({ cities });
			CityService.addInMyList(data);
			this.openNotificationWithIcon('success', 'A cidade foi adicionada com sucesso à sua lista.');
		} else {
			this.openNotificationWithIcon('warning', 'A cidade selecionada já se encontra na lista de cidades.');
		}
	};

	handleRemoveCity = data => {
		const cities = this.state.cities;
		const index = cities.findIndex(c => c.id === data.id);
		cities.splice(index, 1);
		this.setState({ cities });
		CityService.removeOfMyList(data);
		this.openNotificationWithIcon('success', 'A cidade foi removida com sucesso da sua lista.');
	};

	openNotificationWithIcon = (type, text) => {
		notification[type]({
			message: 'Lista de cidades',
			description: text
		});
	};

	render() {
		return (
			<Layout.Content style={{ padding: '0 50px' }}>
				<Row type="flex" justify="center" align="top">
					<Col xs={24} md={20} lg={16} xl={12}>
						<SearchCity onSelectCity={this.handleSelectCity} />
					</Col>
				</Row>
				<Row type="flex" justify="center" style={{ marginTop: 15 }}>
					<Col xs={24} md={20} lg={16} xl={12}>
						<Spin spinning={!this.state.loaded}>
							<ListOfCities data={this.state.cities} onRemoveItem={this.handleRemoveCity} />
						</Spin>
					</Col>
				</Row>
			</Layout.Content>
		);
	}
}
