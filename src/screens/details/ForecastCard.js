import { Col, Empty, Row } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { MinAndMax } from '../../components/weather/MinAndMax';
import { WeatherCard } from '../../components/weather/WeatherCard';
import { WeatherDetailsButton } from '../../components/weather/WeatherDetailsButton';
import { WeatherIcon } from '../../components/weather/WeatherIcon';
import { DateUtils } from '../../services/DateUtils';

const StyledRow = styled(Row)`
	height: 100%;
	margin-bottom: 16px;
	@media (max-width: 1200px) {
		margin: 0px !important;
	}
	@media (max-width: 991px) {
		flex-flow: column !important;
		.ant-card {
			display: flex;
		}
	}
`;

const StyledResponseDiv = styled.div`
	.content-weather-icon {
		text-align: 'center';
		height: 129px;
		.weather-icon {
			max-height: 140px;
			width: 100%;
		}
	}
	@media (max-width: 991px) {
		display: flex;
		max-height: none;
		width: 100%;
		height: 100%;
		align-items: center;
		justify-content: flex-end;

		.content-weather-icon {
			text-align: 'center';
			height: auto;
			width: 10%;
			.weather-icon {
				max-height: none;
				width: 100%;
			}
		}
		.minMax {
			width: 20%;
			margin: 0px !important;
			.divider {
				margin: 0 3px;
			}
		}
	}
`;

const Temperature = styled.div`
	font-size: 4rem;
	font-weight: 600;
	margin: 20px 0 0 0;
	color: #262626;
	line-height: 1;
	text-align: center;
	@media (max-width: 991px) {
		font-size: 0.9rem;
		width: 23%;
	}
`;
const WeatherDescription = styled.div`
	font-size: 1rem;
	font-weight: 600;
	color: #a3a3a3;
	text-transform: capitalize;
	text-align: center;
	@media (max-width: 991px) {
		width: 33%;
		font-size: 0.75rem;
	}
`;

export class ForecastCard extends React.Component {
	onClick = data => {
		if (!!this.props.onSelect) {
			this.props.onSelect(data);
		}
	};

	renderWeather = data => {
		return (
			<StyledResponseDiv>
				<div className="content-weather-icon">
					<WeatherIcon
						className="weather-icon"
						name={data.weather[0].icon}
						alt={data.weather[0].description}
					/>
				</div>
				<Temperature>{Math.round(data.temp.day)}º</Temperature>
				<WeatherDescription>
					{data.weather[0].description}
				</WeatherDescription>
				<MinAndMax className="minMax" round min={data.temp.min} max={data.temp.max} />
				<WeatherDetailsButton
					onClick={() => this.onClick(data)}
					active={data.selected}
					style={{ textAlign: 'center' }}
				/>
			</StyledResponseDiv>
		);
	};

	render() {
		const { data } = this.props;
		return (
			<StyledRow type={'flex'}>
				{!this.props.loading ? (
					data.map((item, index) => (
						<Col key={index} style={{ flex: 1 }}>
							<WeatherCard title={DateUtils.getWeekDay(item.dt)}>
								{this.renderWeather(item)}
							</WeatherCard>
						</Col>
					))
				) : (
					<div style={{ width: '100%', textAlign: 'center' }}>
						<Empty description={'Previsões não disponível'} />
					</div>
				)}
			</StyledRow>
		);
	}
}
