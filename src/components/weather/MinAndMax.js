import React from 'react';
import styled from 'styled-components';

const MinAndMaxStyled = styled.div`
	font-size: 1rem;
	font-weight: 600;
	color: #a3a3a3;
	text-transform: capitalize;
	display: flex;
	justify-content: center;
	margin-top: 20px;
	margin-bottom: 20px;
	div {
		&.divider {
			width: 1px;
			background-color: #707070;
			margin: 0 15px;
		}
		.caret {
			display: inline-block;
		}
		&.min .caret {
			border-left: 7px solid transparent;
			border-right: 7px solid transparent;
			border-top: 7px solid #6A97E4;
			vertical-align: middle;
			margin-right: 5px;
		}
		&.max .caret {
			border-left: 7px solid transparent;
			border-right: 7px solid transparent;
			border-bottom: 7px solid #FF565B;
			vertical-align: middle;
			margin-left: 3px;
		}
	}
	@media (max-width: 1100px) {
		font-size: 0.8rem;
		div {
			&.min .caret {
				border-left: 4px solid transparent;
				border-right: 4px solid transparent;
				border-top: 4px solid #6A97E4;
				vertical-align: middle;
				margin-right: 5px;
			}
			&.max .caret {
				border-left: 4px solid transparent;
				border-right: 4px solid transparent;
				border-bottom: 4px solid #FF565B;
				vertical-align: middle;
				margin-left: 3px;
			}
		}
	}
`;

export class MinAndMax extends React.Component {
	render() {
		return (
			<MinAndMaxStyled className={this.props.className}>
				<div className="min">
					<span className="caret" />
					<span>{Math.round(this.props.min)}º</span>
				</div>
				<div className="divider" />
				<div className="max">
					<span>{Math.round(this.props.max)}º</span>
					<span className="caret" />
				</div>
			</MinAndMaxStyled>
		);
	}
}
