import React from 'react'
import './Features.css'

function Features({title, text}) {
  return (
    <div className="gpt_features_container_feature">
        <div className="gpt_features_container_feature_title">
          <div/>
          <h1>{title}</h1>
        </div>
        <div className="gpt_features_container_feature_text">
         <p>{text}</p>
        </div>
    </div>
  )
}

export default Features