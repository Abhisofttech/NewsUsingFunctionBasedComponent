import React from 'react'
import logo from '../logo.svg';

const NewsItem = (props) => {
    
        let { title, description , imageUrl , newsUrl , author , date} = props
        let demoImage = logo;
        return (
            <>
              <div className="card my-3" style={{ width: '18rem' }}>
                    <img src={imageUrl ? imageUrl : demoImage} className="card-img-top" alt="..." style={{ height: '10rem' }} />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description.slice(0,20)}...</p>
                        <p>By {author?author:'Unknown'} on {new Date(date).toGMTString()}</p>
                        <a href={newsUrl} target="_blank" rel="norefer" className="btn btn-primary">Read more...</a>
                    </div>
                </div>
            </>
        )
    
}

export default NewsItem
