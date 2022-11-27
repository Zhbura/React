import './Message.css';

export function Message(props) {
    return (
        <div className="Message">
            Привет! {props.text}
        </div>
    );
}
