let addText = 'addText'; 
let onChangeText = 'onChangeText';

let initialstate = {
    newMessageText: "",
    dialogItem: [
        {id: 1, name: "Jenya", ava: "https://avatars.mds.yandex.net/get-pdb/992060/ecf58b1a-0607-4ef5-ab53-e42f6dc3c940/s1200"},
        {id: 2, name: "Anton", ava: "https://avatars.mds.yandex.net/get-pdb/1016500/1590a8d6-1327-407f-b5ad-e33f18b48ac6/s1200"},
        {id: 3, name: "Dima", ava: "https://avatars.mds.yandex.net/get-pdb/197794/a085408b-2a31-4469-a073-36b3d0f08b6f/s1200"},
        {id: 4, name: "Lecha", ava: "https://avatars.mds.yandex.net/get-pdb/770122/200f9305-aa1c-442b-af09-227346adaedf/s1200"},
        {id: 5, name: "Olga", ava: "https://avatars.mds.yandex.net/get-pdb/753890/572330fb-c49e-47c8-a9c7-c04582ace159/s1200"}
] ,
     messageItem: [
        {id: 1, messageMy: "Hi"},
        {id: 2, messageFriend: "Huy sosi"},
        {id: 3, messageFriend: "Вы можете использовать переменные для хранения элементов. Это может помочь вам по условию отрисовать часть компонента, в то время как остальная часть вывода не изменится."},
        {id: 4, messageMy: "Выравнивание текста по центру. Текст помещается по центру горизонтали окна браузера или контейнера, где расположен текстовый блок. Строки текста словно нанизываются на невидимую ось, которая проходит по центру веб-страницы. Подобный способ выравнивания активно используется в заголовках и различных подписях, вроде подрисуночных, он придает официальный и солидный вид оформлению текста. Во всех других случаях выравнивание по центру применяется редко по той причине, что читать большой объем такого текста неудобно."},
        {id: 5, messageFriend: "Guboy tryasi"}
] };

export const DialogsReducer = (state = initialstate, action) => {
    switch (action.type) {
        case addText:{
            let newText = {
            id: 6,
            messageMy: state.newMessageText };
            let stateCopy = {...state};
            stateCopy.messageItem = [...state.messageItem];
            stateCopy.messageItem.push (newText);
            stateCopy.newMessageText = "";
            return stateCopy; }
        case onChangeText: {
            let stateCopy = {...state};
            stateCopy.newMessageText = action.newText;
            return stateCopy; }
            default: return state;
    }
}

export const addTextCreator = () => ({type: addText});
export const onChangeTextCreator = (text) => ({type: onChangeText, newText:text});