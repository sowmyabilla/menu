import React from 'react';

const Categories = ({categories,filterItems}) => {
    return (
        <div className='btn-container'>
            {categories.map((category, id)=>{
                return(
                    <button type='button' className='filter-btn' key={id} onClick={()=>filterItems(category)}>
                        {category}       
                    </button>
                );
            })}
            {/* <button className='filter-btn'onClick={()=> filterItems('all')}>all</button>
            <button className='filter-btn'onClick={()=> filterItems('breakfast')}>breakfast</button> */}
        </div>
    );
};

export default Categories;
