import React from "react";
import "../styles.css";

const TimelineItem = ({ data }) => {
return(
<div>
  <div className="timeline-item">
    <div className="timeline-item-content">
      <span className="tag" style={{ background: data.category.color}}>
        {data.category.tag}
      </span>
        <time>{data.time}</time>
        <p>{data.text}</p>
        {data.link &&(<a href={data.link.url} target="_blank" 
        rel="noopener noreferrer">
          {data.link.text}
        </a>)}
        <span className="circle"></span>
    </div>
  </div>
</div>
)
};

export default TimelineItem;