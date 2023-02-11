import { useCallback } from "react";

export const DeleteButton = ({ id, onClick }) => {
    const handleClick = useCallback(() => {
        onClick(id);
    }, [onClick, id]);

    return <button className="deleteButton" onClick={handleClick}>x</button>;
};