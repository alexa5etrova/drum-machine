import Sound1 from './../assets/soundOne.wav';
import Sound2 from './../assets/soundTwo.wav';
import Sound3 from './../assets/soundThree.wav';
import Sound4 from './../assets/soundFour.wav';
import Sound5 from './../assets/soundFive.wav';
import Sound6 from './../assets/soundSix.wav';
import Sound7 from './../assets/soundSeven.wav';
import Sound8 from './../assets/soundEight.wav';
import Sound9 from './../assets/soundNine.wav';

let DISPLAY_SOUND_NAME = "drumMachine/drumMachinePage/DISPLAY_SOUND_NAME";




const initialState = {
    soundData: [{
            id: "Q",
            sound: Sound1,
            description: "Heater-1",
            numButton: 81
        },
        {
            id: "W",
            sound: Sound2,
            description: "Dsc-Oh",
            numButton: 87
        },
        {
            id: "E",
            sound: Sound3,
            description: "Kick_n_Hat",
            numButton: 69
        },
        {
            id: "A",
            sound: Sound4,
            description: "Chord_1",
            numButton: 65
        },
        {
            id: "S",
            sound: Sound5,
            description: "Give us a light",
            numButton: 83
        },
        {
            id: "D",
            sound: Sound6,
            description: "Dry_Ohh",
            numButton: 68
        },
        {
            id: "Z",
            sound: Sound7,
            description: "Bld_H1",
            numButton: 90
        },
        {
            id: "X",
            sound: Sound8,
            description: "Punchy_kick",
            numButton: 88
        },
        {
            id: "C",
            sound: Sound9,
            description: "side_stick_1",
            numButton: 67
        }
    ],
    currentSound: ""
};


const drumMachineReducer = (state = initialState, action) => {
    switch (action.type) {
        case DISPLAY_SOUND_NAME:
            return {
                ...state,
                currentSound: action.description
            }
            default:
                return state;
    }

};

export const displaySoundNameActionCreator = (description) => ({
    type: DISPLAY_SOUND_NAME,
    description
});

export default drumMachineReducer;