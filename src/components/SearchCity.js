import { AutoComplete, Input, Icon } from 'antd';
import React from 'react';
import { CityService } from '../services/rest/CityService';

export class SearchCity extends React.Component {
	state = {
		dataSource: [],
		searchFinished: true,
		loaded: true,
		searchValueText: ''
	};

	handleSearch = async $event => {
		this.setState({
			searchFinished: false,
			loaded: false
		});
		const data = await CityService.searchCity($event);
		this.setState({
			dataSource: !!data ? data : [],
			searchFinished: true,
			loaded: true
		});
		return data;
	};

	resultOptionItem = item => {
		const { Option } = AutoComplete;
		return (
			<Option key={item.text} data={item.value}>
				<div className="global-search-item">
					<span className="global-search-item-desc">{item.text}</span>
				</div>
			</Option>
		);
	};

	handleSelect = (data, opt) => {
		this.setState({
			searchValueText: ''
		});
		if (!!this.props.onSelectCity) {
			this.props.onSelectCity(
				!!opt && !!opt.props && !!opt.props.data ? opt.props.data : null
			);
		}
	};

	render() {
		const { dataSource } = this.state;
		return (
			<AutoComplete
				className="certain-category-search"
				dropdownClassName="certain-category-search-dropdown"
				dropdownMatchSelectWidth={false}
				dropdownStyle={{ width: 300 }}
				size="large"
				style={{ width: '100%' }}
				dataSource={dataSource.map(this.resultOptionItem)}
				onSelect={this.handleSelect}
				onSearch={this.handleSearch}
				onChange={v => this.setState({ searchValueText: v })}
				placeholder="Adicionar cidade"
				value={this.state.searchValueText}
				optionLabelProp="text"
			>
				<Input
					suffix={
						this.state.loaded ? (
							<Icon
								type="search"
								className="certain-category-icon"
							/>
						) : (
							<Icon
								type="loading"
								className="certain-category-icon"
								spin
							/>
						)
					}
				/>
			</AutoComplete>
		);
	}
}
