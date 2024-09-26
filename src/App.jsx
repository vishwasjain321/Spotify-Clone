import React, { useContext } from 'react'
import Side from './components/Side'
import Player from './components/Player'
import Display from './components/Display'
import { PlayerContext } from './context/PlayerContest'

const App = () => {

  const {audioRef,track} = useContext(PlayerContext);

  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
         <Side/>
         <Display/>
      </div>
       <Player/>
       <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  )
}

export default App
