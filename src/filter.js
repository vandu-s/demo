import React from 'react';
const Filter = () => {
    return (     <div className="categories-container">
    <h2 className="category-head">Latest Posts
    </h2>

    <div className='filter-wrapper'><i class="fas fa-filter"></i>   <p className="filter">Filter by Category
    </p>
    </div>
    <span className=" active-category">All</span>
    <span className="small">Artificial Intelligence</span>
    <span className="small">Cloud Computing</span>
    <span className="small">DevOps
    </span>
    <span className="small">programming Language</span>
    <span className="small">Mobile Application Development</span>
    <span className="small">Technology and Tools
    </span>
    <span className="small">Get a Job in Tech Company
    </span>
    <span className="small ">Others</span>
</div>
);
}
 
export default Filter;