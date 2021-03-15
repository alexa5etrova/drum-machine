import React, { useEffect } from 'react';
import s from './App.module.scss';
import {connect} from 'react-redux';
import {displaySoundNameActionCreator} from './redux-store/drum-machine-reducer';


const App = (props) => {

  useEffect(()=>{
    document.addEventListener('keydown', handleKeyPress);
  });

  let soundPlay =(id,description)=>{
    let sound = document.getElementById(id);
    sound.play();
    props.displaySoundNameActionCreator(description);
  }
  
  let handleKeyPress = (e) => {
    let soundIndex = props.soundData.findIndex(i=>i.numButton === e.keyCode);
    if(soundIndex >= 0){
      soundPlay(props.soundData[soundIndex].id, props.soundData[soundIndex].description);
    }
  }

  return <div className = {s.drumMachine} id = "drum-machine">
    <div id = "display" className={s.display}>
      <div className={s.displayText}>{props.currentSound}</div>
    </div>
    <div className={s.padsContainer}> 
      {props.soundData.map(i => <button className="drum-pad" id={i.description} onClick={()=>soundPlay(i.id, i.description)}>
        <audio className='clip' id={i.id} src={i.sound}  type="audio/wav" />
        {i.id}
      </button>)
      } 
    </div>
   
  </div>
}



let mapStateToProps = (state) => ({
  soundData: state.drum.soundData,
  currentSound: state.drum.currentSound
});


export default connect(mapStateToProps, {
  displaySoundNameActionCreator
})(App);