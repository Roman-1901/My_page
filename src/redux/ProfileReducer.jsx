let addPost = 'addPost';
let onChangePost = 'onChangePost';

export const ProfileReducer = (state, action) => {
    switch (action.type) {
        case addPost:
            let newPost = {
                id: 3,
                message: state.newPostText,
                count: 0
            };
            if (state.newPostText != "") {
                state.postData.push (newPost);
                state.newPostText = "";
          } return state;
        case onChangePost:
            state.newPostText = action.newText;
            return state;
            default: return state;
    }
}

export const addPostCreator = () => ({type: addPost});
export const onChangePostCreator = (text) => ({type: onChangePost, newText:text});