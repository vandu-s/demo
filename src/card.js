import React from 'react';

const Card = ({title,thumbnail,description,author,date}) => {
    return (<div className="blog-card">
    <img className="blog-img" src={thumbnail} alt="blog-img"/>
    <div className="blog-content">
        <h3 className="blog-head">{title}</h3>
        <div className="author-details"><span className="author-name">{author}</span ><span className="blog-date">| {date}</span>
        </div>
        <p className="description">{description}</p>
    </div>
  </div>);
}
 
export default Card;