import React from 'react';
import { WeatherCard } from '../../components/weather/WeatherCard';
import { WeatherIcon } from '../../components/weather/WeatherIcon';
import { Skeleton, Empty } from 'antd';
import styled from 'styled-components';
import { MinAndMax } from '../../components/weather/MinAndMax';
import { WeatherDetailsButton } from '../../components/weather/WeatherDetailsButton';

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

export class TodayCard extends React.Component {
	onClick = data => {
		if (!!this.props.onSelect) {
			this.props.onSelect(data);
		}
	};

	renderWeather = data => {
		return (
			<div>
				<CityName>{data.city.name}</CityName>
				<div style={{ textAlign: 'center', marginTop: 30 }}>
					<WeatherIcon
						style={{ maxHeight: 200, width: '100%' }}
						name={data.weather[0].icon}
						alt={data.weather[0].description}
					/>
				</div>
				<Temperature>{data.temp.day}º</Temperature>
				<WeatherDescription>
					{data.weather[0].description}
				</WeatherDescription>
				<MinAndMax min={26} max={32} />
				<WeatherDetailsButton
					onClick={() => this.onClick(data)}
					active={data.selected}
					style={{ textAlign: 'center' }}
				/>
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
				onBack={this.props.onBack}
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
