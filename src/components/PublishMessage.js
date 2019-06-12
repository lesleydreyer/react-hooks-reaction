import React, { useState } from 'react';
import { useAppContext } from './hooks';
//could also do this if not using custom useAppContext - import React, { useState, useContext } from 'react';
//could also do this if not using custom useAppContext - import Context from '../context';
import { newMessage } from '../state/actions';

function PublishMessage() {
    const { state: { username }, pubsub: { publish } } = useAppContext();//destructure pubsub instead of dispatch
    //const { dispatch } = useAppContext();//would use useContext(Context) if not using custom useAppContext
    //const { dispatch } = useContext(Context);//if not using context function PublishMessage(props) at top and destructure here const { dispatch } = props;
    const [text, setText] = useState('');
    const updateText = event => {
        setText(event.target.value);
    }
    const publishMessage = () => {
        publish(newMessage({ text, username }));//dispatch(newMessage(text));
    }
    const handleKeyPress = event => {
        if (event.key === 'Enter') publishMessage();
    }
    return (
        <div>
            <h3>Got something to say?</h3>
            <input value={text} onChange={updateText} onKeyPress={handleKeyPress} />
            {' '}
            <button onClick={publishMessage}>Publish it!</button>
        </div>
    )
}

export default PublishMessage;