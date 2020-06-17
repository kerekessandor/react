import React from 'react';
import News from '../containers/News';


//class based component

class Home extends React.Component {
    render() {
        return (
            <div>
                <div>Welcome to news.com</div>
                <div>
                    <News />
                </div>
            </div>
        )
    }
}

export default Home;