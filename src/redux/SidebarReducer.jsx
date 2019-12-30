
let initialstate = {
    navBar: [
        {link: "/profile", title: "Profile"},
        {link: "/messages", title: "Messages"},
        {link: "/news", title: "News"},
        {link: "/music", title: "Music"},
        {link: "/settings", title: "Settings"}
    ]
};

export const SidebarReducer = (state = initialstate, action) => {
    return state;
}