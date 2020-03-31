import React from 'react';

const Pager = (props) => {
    return (<div>
        {props.maxPageNo > 1 && (<div className="paging"> 
        {props.pageNo > 1 && <span onClick={() => props.goToPage(props.pageNo - 1)} className="pointer">Previous</span>}
        <span className="page-number">{props.pageNo}</span>
        {props.pageNo < props.maxPageNo && <span onClick={() => props.goToPage(props.pageNo + 1)} className="pointer">Next</span>}
      </div>)}
      </div>);
  };
  
  export default Pager;
  