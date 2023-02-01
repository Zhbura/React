import { useCallback } from "react";

export const DeleteButton = ({ id, onClick }) => {
    const handleClick = useCallback(() => {
        onClick(id);
    }, [onClick, id]);

    return <div className="deleteButton" onClick={handleClick}>&#10060;</div>;
};