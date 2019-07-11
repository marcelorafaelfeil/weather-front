import React, { Component } from 'react';
import styled from 'styled-components';

const Head = styled.header`
	display: flex;
	justify-content: center;
	.appLogo {
		.appHeaderSmallText {
			font-family: 'Segoe UI';
			font-size: 20px;
			color: #707070;
		}
		.appHeaderBigText {
			font-family: 'Segoe UI';
			font-size: 72px;
			font-weight: bold;
			line-height: 46px;
			padding-bottom: 24px;
			color: #707070;
		}
	}
`;

export class Header extends Component {
	render() {
		return (
			<Head className="appHeader">
				<div className="appLogo">
					<div className="appHeaderSmallText">Previsão do</div>
					<div className="appHeaderBigText">Tempo</div>
				</div>
			</Head>
		);
	}
}
