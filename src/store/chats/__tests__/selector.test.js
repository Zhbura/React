import { selectChats } from "../selectors";

it('should select chats from state obj', () => {
    const chats = [{ id: 1, name: 'chat 1' }];

    const result = selectChats({ chats });

    expect(result).toEqual(chats);
})