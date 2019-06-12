import React from 'react';
import { useAppContext } from './hooks';
import CreateReaction from './CreateReaction';
import MessageReactions from './MessageReactions';

//could also do this if not using custom useAppContext - import React, { useContext } from 'react';
//could also do this if not using custom useAppContext - import Context from '../context';

function MessageBoard() {//if not using context could pass down function MessageBoard({ messages }) {
    const { state: { messages, reactionsMap } } = useAppContext();//if not using custom useAppContext do useContext(Context);
    return (
        <div>
            {
                messages.map(messageItem => {
                    const { id, text, username, timestamp } = messageItem;
                    return (
                        <div key={id}>
                            <h4>{new Date(timestamp).toLocaleString()}</h4>
                            <p>{text}</p>
                            <h4>- {username}</h4>
                            <CreateReaction messageId={id} />
                            <MessageReactions messageReactions={reactionsMap[id]} />
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MessageBoard;