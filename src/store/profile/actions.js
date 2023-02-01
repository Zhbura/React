// export const CHANGE_SHOW_NAME = "CHANGE_SHOW_NAME";
// export const CHANGE_NAME = "CHANGE_NAME";

// export const changeShowName = {
//     type: CHANGE_SHOW_NAME
// }
// export const changeName = (name) => ({
//     type: CHANGE_NAME,
//     payload: name,
// })

export const CHANGE_NAME = 'PROFILE::CHANGE_NAME';
export const CHANGE_SHOW_NAME = 'PROFILE::CHANGE_SHOW_NAME';

export const changeName = (name) => ({
    type: CHANGE_NAME,
    payload: name,
})

export const changeShowName = {
    type: CHANGE_SHOW_NAME
}