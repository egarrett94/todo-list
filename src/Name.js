// import React, {Component} from 'react';
import React from 'react';

// //this is a class component for 'stateful' component
// class Name extends Component {
// 	render () {
// 		return (
// 			<div>
// 				Name: {this.props.firstName} {this.props.lastName}
// 			</div>
// 		) 
// 	}
// }



//this can be rewritten as a 'stateless' or 'functional' component
//so if you don't need to have a set state, or need any lifecycle methods,
//or need to use a ref

const Name = props => {
	return(
		<div>
			Name: {this.props.firstName} {this.props.lastName}
		</div>
	)
}

export default Name;