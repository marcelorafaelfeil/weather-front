import React from 'react';
import { WeatherCard } from '../../components/weather/WeatherCard';
import { Col, Row, Skeleton } from 'antd';
import { WeatherIcon } from '../../components/weather/WeatherIcon';
import styled from 'styled-components';
import { DateUtils } from '../../services/DateUtils';

const WeatherPeriod = styled.div`
	.icon {
		height: 76px;
	}
	.period {
		font-weight: 600;
	}
`;

const Divider = styled.div`
	width: 1px;
	background-color: #efefef;
`;
const WeatherDescription = styled.span`
	text-transform: capitalize;
`;

const PeriodsRow = styled(Row)`
	@media (max-width: 810px) {
		flex-flow: column !important;
		> div > div {
			display: flex;
			align-items: center;
			> div {
				flex: 1;
			}
		}
	}
`;

const WindRow = styled.div`
	@media (max-width: 810px) {
		display: flex;
		height: 100%;
		align-items: center;
		justify-content: center;
		flex-flow: column;
	}
`;

export class DetailsCard extends React.Component {
	renderInformation = data => {
		return (
			<div>
				<div>Umidade: {data.humidity}%</div>
				<div>Pressão: {data.pressure}hPa</div>
				<div>
					Situação: <WeatherDescription>{data.weather[0].description}</WeatherDescription>
				</div>
			</div>
		);
	};

	renderPeriods = data => {
		return (
			<PeriodsRow
				type={'flex'}
				style={{
					marginTop: -26,
					textAlign: 'center'
				}}
			>
				<Col style={{ flex: 1 }}>
					<WeatherPeriod>
						<div className="icon">
							<WeatherIcon name="clear-weather" />
						</div>
						<div className="period">Manhã</div>
						<div>{Math.round(data.temp.morn)}°</div>
					</WeatherPeriod>
				</Col>
				<Col style={{ flex: 1 }}>
					<WeatherPeriod>
						<div className="icon">
							<WeatherIcon name="clear-weather" />
						</div>
						<div className="period">Tarde</div>
						<div>{Math.round(data.temp.eve)}°</div>
					</WeatherPeriod>
				</Col>
				<Col style={{ flex: 1 }}>
					<WeatherPeriod>
						<div className="icon">
							<WeatherIcon name="cloudy-night" />
						</div>
						<div className="period">Noite</div>
						<div>{Math.round(data.temp.night)}°</div>
					</WeatherPeriod>
				</Col>
			</PeriodsRow>
		);
	};

	renderWind = data => {
		return (
			<WindRow>
				<div>
					<WeatherIcon name="windy" />
				</div>
				<div style={{fontWeight: 600}}>{Math.round(data.speed * 60 * 60 / 1000)} Km/h</div>
			</WindRow>
		);
	};

	render() {
		const { data } = this.props;
		return this.props.loading ? (
			<Skeleton />
		) : (
			<Row>
				<Col>
					<WeatherCard
						primary
						title="Detalhes"
						subTitle={DateUtils.getWeekDay(data.dt)}
						style={{ flex: 1 }}
					>
						<Row type={'flex'}>
							<Col style={{ flex: 1, display: 'flex', alignItems: 'center'}}>
								{this.renderInformation(data)}
							</Col>
							<Divider />
							<Col style={{ flex: 2 }}>
								{this.renderPeriods(data)}
							</Col>
							<Divider />
							<Col style={{ flex: 1, textAlign: 'center' }}>
								{this.renderWind(data)}
							</Col>
						</Row>
					</WeatherCard>
				</Col>
			</Row>
		);
	}
}
