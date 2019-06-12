import React, { useReducer, useEffect } from 'react';
import reducer, { initialState } from '../state/reducer';
import Context from '../context';
import PubSub from '../pubsub';
import PublishMessage from './PublishMessage';
import MessageBoard from './MessageBoard';
import SetUsername from './SetUsername';

const pubsub = new PubSub();

/*just to test publish works
setTimeout(() => {
  pubsub.publish({ type: 'foo', value: 'bar' });
}, 1000);*/

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    pubsub.addListener({
      message: messageObject => {
        const { channel, message } = messageObject;
        console.log('Received message', message, 'Channel', channel);
        dispatch(message);
      }
    });
  }, []);

  console.log('state', state);

  return (
    <Context.Provider value={{ state, dispatch, pubsub }}>
      <h2>Reaction</h2>
      <SetUsername />
      <hr />
      <PublishMessage />
      <hr />
      <MessageBoard />
    </Context.Provider>
  );
}

//if not using context you could pass them down as props
//<PublishMessage dispatch={dispatch} />
//<MessageBoard messages={state.messages} />

export default App;

/*THIS IS HOW CAN TEST DISPATCH
import React, { useReducer, useEffect } from 'react';
import { newMessage } from './state/actions';
  useEffect(() => {
    setInterval(
      () => dispatch(newMessage('foo')),
      3000
    );
  }, []);*/
