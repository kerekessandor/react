import React from 'react';
import NewsItemListing from '../presentation/NewsItemListing';

class News extends React.Component {
    render() {
        return (
            <div>
                <h2>News items</h2>
                <ul>
                    <li><NewsItemListing id="1" title="Mad owl torments drivers" teaser="An owl has been seen chasing cars in Bridlington"/></li>
                    <li><NewsItemListing id="2" title="Owl steals post" teaser="Letters have gone missing in Wigan. Owl suspected."/></li>
                </ul>
            </div>
        )
    }
}

export default News;