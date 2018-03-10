import React from 'react';
import './Submit.css';

class Submit extends React.Component{
	render(){
		return(

			<form className='Submit'>
			<label className = 'SubmitForm'>
			<p>Title</p>
			<input className='Title' type="text" />
			</label>
			<label className = 'SubmitForm'>
			<p>Description</p>
			<input className='Description' type="text" />
			</label>
			<label className = 'SubmitForm'>
			<p>Rating</p>
			<select>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
				<option value="6">6</option>
				<option value="7">7</option>
				<option value="8">8</option>
				<option value="9">9</option>
				<option value="10">10</option>
			</select>
			</label>
			<button className='submit'>SUBMIT</button>
			</form>

		)
	}
}

export default Submit;