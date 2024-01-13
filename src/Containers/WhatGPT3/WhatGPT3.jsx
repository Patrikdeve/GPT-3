import React from 'react'
import './WhatGPT3.css'
import { Features } from '../../Components'

function WhatGPT3() {
  return (
    <div className='gpt_whatgpt section_margin' id = 'wgpt3'>
        <div className="gpt_whatgpt_feature">
            <Features title = 'What is GPT-3' text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
        </div>
        <div className="gpt_whatgpt_heading">
            <h1 className='gradient_text'>The Possibilities are Beyond Your Imagination</h1>
            <p>Explore the Library</p>
        </div>
        <div className="gpt_whatgpt_container">
                <Features title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
                <Features title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
                <Features title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
        </div>
    </div>
  )
}

export default WhatGPT3