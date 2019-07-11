import { Col, Row } from 'antd';
import React, { Component } from 'react';
import { WeatherService } from '../../services/rest/WeatherService';
import { DetailsCard } from './DetailsCard';
import { ForecastCard } from './ForecastCard';
import { TodayCard } from './TodayCard';

export class Details extends Component {
	state = {
		data: {},
		loaded: false,
		details: {}
	};

	componentWillMount = async () => {
		if (
			!!this.props.match &&
			!!this.props.match.params &&
			!!this.props.match.params.id
		) {
			const { id } = this.props.match.params;
			const data = await WeatherService.getWeather(id);
			data.today.selected = true;
			this.setState({ data, details: data.today });
		} else {
			this.setState({ data: null });
		}
		this.setState({ loaded: true });
	};

	handleSelectToday = d => {
		const data = this.state.data;
		data.today.selected = true;

		data.next.forEach((d, i) => {
			data.next[i].selected = false;
		});
		this.setState({ data, details: d });
	};

	handleSelectForecast = d => {
		const index = this.state.data.next.findIndex(item => item.dt === d.dt);
		const data = this.state.data;
		data.today.selected = false;
		data.next.forEach((d, i) => {
			if (index === i) {
				data.next[i].selected = true;
			} else {
				data.next[i].selected = false;
			}
		});
		this.setState({ data, details: d });
	};

	render() {
		return (
			<Row type={'flex'}>
				<Col xs={24} sm={10} md={8} lg={6} xl={5}>
					<TodayCard
						data={this.state.data.today}
						loading={!this.state.loaded}
						onBack={() => this.props.history.push('/')}
						onSelect={this.handleSelectToday}
					/>
				</Col>
				<Col xs={24} sm={14} md={16} lg={18} xl={19} style={{ flexFlow: 'column', display: 'flex' }}>
					<ForecastCard
						data={this.state.data.next}
						loading={!this.state.loaded}
						onSelect={this.handleSelectForecast}
					/>
					<DetailsCard
						data={this.state.details}
						loading={!this.state.loaded}
					/>
				</Col>
			</Row>
		);
	}
}
