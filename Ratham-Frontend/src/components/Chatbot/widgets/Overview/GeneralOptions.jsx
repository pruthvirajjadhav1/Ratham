import React from 'react'
import Options from './Options/Options';

const GeneralOptions = (props) => {
    const options = [
        {
          name: "Got it!",
          handler: props.actionProvider.handleMessageParserDocs,
          id: 1,
        },
      ];
  return (
    <Options options={options} />
  )
}

export default GeneralOptions