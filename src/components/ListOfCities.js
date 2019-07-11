import { Empty, List } from 'antd';
import { lighten } from 'polished';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledList = styled(List)`
	background-color: #fff;
`;
const RemoveLink = styled.a`
	color: #f5222d;
	&:hover {
		color: ${lighten(0.1, '#f5222d')};
	}
`;

export class ListOfCities extends React.Component {

	removeItem = async (item) => {
		if (!!this.props.onRemoveItem) {
			this.props.onRemoveItem(item);
		}
	}

	render() {
		return (
			<StyledList
				size="large"
				bordered
				dataSource={this.props.data}
				renderItem={item => (
					<List.Item
						actions={[
							<Link to={'/details/' + item.id}>Detalhes</Link>,
							<RemoveLink onClick={() => this.removeItem(item)}>Remover</RemoveLink>
						]}
					>
						{item.name}, {item.country}
					</List.Item>
				)}
				locale={{
					emptyText: (
						<Empty
							description={
								'Nenhuma cidade selecionada no momento.'
							}
						/>
					)
				}}
			/>
		);
	}
}
