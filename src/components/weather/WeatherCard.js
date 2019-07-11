import { PageHeader, Card } from 'antd';
import React from 'react';
import styled from 'styled-components';

const StyledPageHeader = styled(PageHeader)`
	border-radius: 0px !important;
	box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.1);
`;
const StyledCard = styled(Card)`
	border-radius: 0px !important;
	box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.1);
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
