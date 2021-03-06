import React, {Component} from 'react';

// class ListItem extends Component {
// 	render() {
// 		return(
// 			<div>
// 				<li> {this.props.doThis} <span><button onClick={this.props.deleteItem}> Delete </button></span></li>
// 			</div>
// 		)
// 	}
// }

const ListItem = props => {
	return(
		<div>
			<li> {props.doThis} <span><button onClick={props.deleteItem}> Delete </button></span></li>
		</div>
	) 
}

export default ListItem;