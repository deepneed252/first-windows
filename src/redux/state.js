let rerenderEntireTree = () => console.log('State is chaned');
let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 15 },
            { id: 2, message: 'I\'m fine!', likesCount: 20 }
        ],
        newPostText: 'REDUX',
    },
    messagesPage: {
        dialogs: [
            { id: 1, name: 'Dimych' },
            { id: 2, name: 'Sveta' },
            { id: 3, name: 'Egor' },
            { id: 4, name: 'Misha' },
            { id: 5, name: 'Viktor' },
            { id: 6, name: 'Вася' },
        ],
        messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How are you?' },
            { id: 3, message: 'Im fine' },
            { id: 4, message: 'Im fine' },
            { id: 5, message: 'Im fine' },
            { id: 6, message: 'Привет' },
        ]
    }
}
// window.state=state;
export const addPost = () => {
    let newPost = {
        id: 6,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText='';
    rerenderEntireTree();
}
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree();
}
export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;