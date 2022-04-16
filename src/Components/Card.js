import React from 'react';
import 'tachyons';
const Card = ({name , email ,id}) => {
	//const {name , email ,id}=props;
	return(
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-2'>
			<img alt='robots' src={`https://robohash.org/${id}?200x200`} />
			<div>
				<h2>{name}</h2>
				<h2>{email}</h2>
			</div>
		</div>
	);
}

export default Card;