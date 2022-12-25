import * as types from '../profile/types'

export const changeName = (data) => ({
    type: types.CHANGE_NAME,
    payload: data
})

export const changeShowName = {
    type: types.CHANGE_SHOW_NAME,
  };