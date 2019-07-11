import { Button } from 'antd';
import React from 'react';

export class WeatherDetailsButton extends React.Component {
	render() {
		const {active} = this.props;
		return (
			<div style={this.props.style} onClick={this.onClick}> 
				<Button type={active ? 'primary': 'link'} onClick={this.props.onClick}>
					Detalhes
				</Button>
			</div>
		);
	}
}
