import React from 'react';


export class WeatherIcon extends React.Component {
	render() {
		return <img src={require(`./assets/images/${this.props.name}.svg`)} alt={this.props.alt} {...this.props} />;
	}
}