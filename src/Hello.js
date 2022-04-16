import React,{Component} from 'react';
import './Hello.css';

class Hello extends Component{
	render(){
		return(
			<div className='f1 tc'>
			<h1>Hello World</h1>
			<p>{this.props.greeting}</p>
			</div>
		);
	}
}
/* Above class runs same as bellow function,that we used mostly in JS
	bellow fun take a argument props and it returns something.
const Hello = (props)=>{
	return(
		<div className='f1 tc'>
		<h1>Hello World</h1>
		<p>{props.greeting}</p>  we don't use 'this' bcoz now it is not woking as react props 
		</div>		
	);
}
*/
export default Hello;