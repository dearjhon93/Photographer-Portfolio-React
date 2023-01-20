import React from 'react';

export const Tabs = ({filterCategory, tabsData}) => {
    return(
        <>
        <div className="filters">
        {/* <span>Todos</span> */}
        {
            tabsData.map((category, index)=>{
                return (
                    <button type="button" class="btn info" onClick={()=> filterCategory(category)} key={index}>{category}</button>
                )
            })
        }
        </div>
        

        </>
    )
}
export default Tabs;