import React from "react";

export default class Comment extends React.Component {
	render(){
		return (
			<div className='comment'>
				<div className='comment-author'>
					<b>
						{this.props.author}
					</b>
				</div>
				<div className='comment-body'>
					{this.props.children}
				</div>
			</div>
		)
	}
}