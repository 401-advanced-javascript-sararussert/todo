import React, { useState } from 'react';

export const SiteContext = React.createContext();

function SiteContextProvider(props) {

  const [showCompleted, setCompleted] = useState(true);
  const [toggleMsg, setToggleMsg] = useState('Hide Completed Tasks')
  const [listSize, setListSize] = useState(3);
  const [sortBy, setSortBy] = useState('difficulty');

  function toggleComplete(){
    if (showCompleted === true) {
      setCompleted(false);
      setToggleMsg('Show Completed Tasks');
    } else {
      setCompleted(true);
      setToggleMsg('Hide Completed Tasks');
    }
  }

  const state = {
    toggleMsg,
    showCompleted,
    setCompleted,
    listSize,
    setListSize,
    sortBy,
    toggleComplete,
  }



  return (
    <SiteContext.Provider value={state}>
      {props.children}
    </SiteContext.Provider>
  )

}

export default SiteContextProvider;
