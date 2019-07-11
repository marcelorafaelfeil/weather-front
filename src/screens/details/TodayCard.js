import React from 'react';
import { WeatherCard } from '../../components/weather/WeatherCard';
import { WeatherIcon } from '../../components/weather/WeatherIcon';
import { Skeleton, Empty } from 'antd';
import styled from 'styled-components';

const CityName = styled.h1`
	font-size: 3rem;
	font-weight: 600;
	margin: 20px 0;
	color: #262626;
	text-align: center;
`;
const Temperature = styled.div`
	font-size: 4.8rem;
	font-weight: 600;
	margin: 20px 0 0 0;
	color: #262626;
	line-height: 1;
	text-align: center;
`;
const WeatherDescription = styled.div`
	font-size: 1rem;
	font-weight: 600;
	color: #a3a3a3;
	text-transform: capitalize;
	text-align: center;
`;
const MinAndMax = styled.div`
	font-size: 1rem;
	font-weight: 600;
	color: #a3a3a3;
	text-transform: capitalize;
	text-align: center;
	display: flex;
	div {
		&.divider {
			width: 1px;
			background-color: #707070;
			margin: 0 15px;
		}
	}
`;

export class TodayCard extends React.Component {
	renderWeather = data => {
		return (
			<div>
				<MinAndMax>
					<div className="min">
						<span className="caret" />
						<span>28º</span>
					</div>
					<div className="divider" />
					<div className="max">
						<span className="caret" />
						<span>36º</span>
					</div>
				</MinAndMax>
				<CityName>Blumenau</CityName>
				<div style={{ textAlign: 'center', marginTop: 30 }}>
					<WeatherIcon
						height="200"
						name={data.weather[0].icon}
						alt={data.weather[0].description}
					/>
				</div>
				<Temperature>{data.temp.day}º</Temperature>
				<WeatherDescription>
					{data.weather[0].description}
				</WeatherDescription>
			</div>
		);
	};

	render() {
		const { data } = this.props;

		return (
			<WeatherCard
				primary
				title={'Detalhes'}
				subTitle={'Previsão do tempo'}
				onBack={() => null}
				extraText="Hoje"
			>
				{this.props.loading ? (
					<Skeleton active />
				) : !!data ? (
					this.renderWeather(data)
				) : (
					<Empty description="Não há informações disponíveis" />
				)}
			</WeatherCard>
		);
	}
}
