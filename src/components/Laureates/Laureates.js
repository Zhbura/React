import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getLaureates } from "../../store/laureates/actions";
import { selectLaureatesData, selectLaureatesError, selectLaureatesLoading } from "../../store/laureates/selectors";

export const Laureates = () => {
    const dispatch = useDispatch();

    const laureates = useSelector(selectLaureatesData);
    const isLoading = useSelector(selectLaureatesLoading)
    const error = useSelector(selectLaureatesError);

    const getData = async () => {
        dispatch(getLaureates());
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <h1>Nobel laureates</h1>
            {error && <h3>ERROR {error.message}</h3>}
            <button onClick={getData}>Update</button>
            {isLoading ? (
                <CircularProgress />
            ) : (<ul>

                {laureates.map((men) => (
                    <li key={men.id} >{men.fullName.en}</li>
                ))}
            </ul>)}
        </>
    )
}