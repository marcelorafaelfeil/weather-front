import { PageHeader, Card } from 'antd';
import React from 'react';
import styled from 'styled-components';

const StyledPageHeader = styled(PageHeader)`
	border-radius: 0px !important;
	box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.1);
	margin: 0 8px !important;
	@media (max-width: 1610px) {
		.ant-page-header-heading-sub-title {
			display: none;
		}
	}
	@media (max-width: 1200px) {
		margin: 0px !important;
	}
`;
const StyledCard = styled(Card)`
	border-radius: 0px !important;
	box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.1);
	margin: 0 8px !important;
	height: 100%;
	.ant-card-head {
		border-bottom: 0px;
		text-align: center;
		color: #a3a3a3;
		@media (max-width: 991px) {
			padding: 0px 0px 0px 15px;
			width: 30%;
			height: 100%;
			text-align: left;
		}
	}
	.ant-card-body {
		margin-top: 0px;
		padding-top: 0px;
		@media (max-width: 991px) {
			padding: 0px;
			width: 70%;
		}
	}
	@media (max-width: 1200px) {
		margin: 0px !important;
	}
`;
const StyledDay = styled.span`
	font-size: 16px;
	color: #a3a3a3;
	font-weight: 600;
`;

export class WeatherCard extends React.Component {
	render() {
		return this.props.primary ? (
			<StyledPageHeader
				{...this.props}
				extra={[<StyledDay key={1}>{this.props.extraText}</StyledDay>]}
			/>
		) : (
			<StyledCard bordered={false} {...this.props} />
		);
	}
}
