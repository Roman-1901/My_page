let addText = 'addText'; 
let onChangeText = 'onChangeText';

export const DialogsReducer = (state, action) => {
    switch (action.type) {
        case addText:
            let newText = {
            id: 6,
            messageMy: state.newMessageText };
            state.messageItem.push (newText);
            state.newMessageText = "";
            return state;
        case onChangeText:
            state.newMessageText = action.newText;
            return state;
            default: return state;
    }
}

export const addTextCreator = () => ({type: addText});
export const onChangeTextCreator = (text) => ({type: onChangeText, newText:text});