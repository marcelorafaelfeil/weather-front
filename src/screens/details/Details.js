import { Col, Row } from 'antd';
import React, { Component } from 'react';
import { WeatherService } from '../../services/rest/WeatherService';
import { TodayCard } from './TodayCard';

export class Details extends Component {
	state = {
		data: {},
		loaded: false
	};

	componentWillMount = async () => {
		if (
			!!this.props.match &&
			!!this.props.match.params &&
			!!this.props.match.params.id
		) {
			const { id } = this.props.match.params;
			const data = await WeatherService.getWeather(id);
			this.setState({ data });
		} else {
			this.setState({ data: null });
		}
		this.setState({ loaded: true });
	};

	render() {
		return (
			<Row>
				<Col span={8}>
					<TodayCard data={this.state.data.today} loading={!this.state.loaded} />
				</Col>
			</Row>
		);
	}
}
