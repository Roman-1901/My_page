let addPost = 'addPost';
let onChangePost = 'onChangePost';

let initialstate = {
    newPostText: "",
    profileInfo: 'https://s1.1zoom.me/big0/994/260356-svetik.jpg',
    profileAvatar: "https://avatars.mds.yandex.net/get-pdb/1920338/5894aed1-7647-41b8-8e98-a988f22eb1ed/s1200",
    postData: [
        {id: 1, message: "My first post", count: 10},
        {id: 2, message: "My second post", count: 8} ]
   };

export const ProfileReducer = (state=initialstate, action) => {
    switch (action.type) {
        case addPost: {
            if (state.newPostText != '') {
            return {...state,
                postData: [...state.postData, {id: 3, message: state.newPostText, count: 0}],
                newPostText: "" }; };
        }
        case onChangePost: {
            return {...state,
            newPostText: action.newText };
            }
            default: return state; 
    }
}

export const addPostCreator = () => ({type: addPost});
export const onChangePostCreator = (text) => ({type: onChangePost, newText:text});