import React from 'react'
import { Button } from 'semantic-ui-react';

const LikeButton = props => {
  

  return(
    <div>
      <Button
        content=''
        icon='heart'
        label={{ as: 'a', basic: true, content: props.likes }}
        labelPosition='right'
        size='mini'
      />
    </div>
  );
}

export default LikeButton;