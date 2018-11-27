import { combineReducers } from 'redux'; 
import { TOGGLE_EMAIL_STAR, TOGGLE_EMAIL_CHECK, SET_SELECTED_FOLDER } from './actions';

const bmails = [
    {
        id: '12345',
        isStarred: false,
        isChecked: false,
        fromName: 'Brady Richmond',
        dateReceived: 'Nov 20',
        subject: 'This is a subject',
    },
    {
        id: '123456',
        isStarred: false,
        isChecked: false,
        fromName: 'Brady Richmond',
        dateReceived: 'Nov 20',
        subject: 'This is a subject',
    },
    {
        id: '123457',
        isStarred: true,
        isChecked: false,
        fromName: 'Brady Richmond',
        dateReceived: 'Nov 20',
        subject: 'This is a starred subject',
    },
    {
        id: '123458',
        isStarred: false,
        isChecked: false,
        fromName: 'Brady Richmond',
        dateReceived: 'Nov 20',
        subject: 'This is a subject',
    },
    {
        id: '123459',
        isStarred: false,
        isChecked: false,
        fromName: 'Brady Richmond',
        dateReceived: 'Nov 20',
        subject: 'This is a subject',
    },
    {
        id: '123460',
        isStarred: false,
        isChecked: false,
        fromName: 'Brady Richmond',
        dateReceived: 'Nov 20',
        subject: 'This is a subject',
    },
];

const folders = [
    {
        name: 'Inbox',
        emailCount: 20,
        id: 123456
    },
    {
        name: 'Starred',
        emailCount: 20,
        id: 123457
    },
    {
        name: 'Snoozed',
        emailCount: 20,
        id: 123458
    },
    {
        name: 'Important',
        emailCount: 20,
        id: 123459
    },
    {
        name: 'Sent',
        emailCount: 20,
        id: 123450
    },
]

const bmail = (state = {bmails}, action) => {
    switch (action.type) {
        case TOGGLE_EMAIL_STAR:
            return {
                ...state,
                bmails: state.bmails.map((item) => item.id === action.id ? {...item, isStarred: !item.isStarred} : item)
            }
        case TOGGLE_EMAIL_CHECK:
            return {
                ...state,
                bmails: state.bmails.map((item) => item.id === action.id ? {...item, isChecked: !item.isChecked} : item)
            }
        default:
            return state;
        }
}

const user = (state = {folders, selectedFolder: 123456}, action) => {
    switch (action.type) {
        case SET_SELECTED_FOLDER: 
            return {
                ...state,
                selectedFolder: action.id
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    bmail,
    user
});

export default rootReducer;