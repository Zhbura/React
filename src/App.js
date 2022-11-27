import { Message } from './components/Message';

export function App() {
  const text = 'Это мой первый компонент в React!';
  return (
    <>
      <Message text={text} />
    </>
  );
}
