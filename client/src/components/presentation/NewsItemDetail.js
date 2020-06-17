import React from 'react';

class NewsItemDetail extends React.Component{
    render(){
        return (
            <div>
                {console.log(this.props)}
                <h2>{this.props.data.title}</h2>
                <p>{ this.props.data.body}</p>
            </div>
        )
    }
}

export default NewsItemDetail;