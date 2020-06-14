import Tone from '../node_modules/tone/Tone/core/Tone'

const ac = new window.AudioContext()

Tone.setContext(ac)


window.ToneCopy = function(){
    this.tone = Tone

}


