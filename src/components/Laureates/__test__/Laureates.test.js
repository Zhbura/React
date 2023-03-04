import { render } from "@testing-library/react";
import { Laureates } from "../Laureates";
import * as reduxHooks from "react-redux";
import * as actions from "../../../store/laureates/actions";
// import { useSelector } from "react-redux";

jest.mock("react-redux");

const laureatesList = [
    { id: 1, name: 'George' },
    { id: 2, name: 'William' }
]
const mockedUserSelector = jest.spyOn(reduxHooks, 'useSelector');
const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch');

describe('Laureates test', () => {
    it('should create LaureatesList with empty list', async () => {
        mockedUserSelector.mockReturnValue([])

        const component = render(<Laureates />)

        expect(component).toMatchSnapshot();
    })

    it('should create LaureatesList with list items', () => {
        mockedUserSelector.mockReturnValue(laureatesList)

        const component = render(<Laureates />);

        expect(component).toMatchSnapshot()
    })

    it('should create Laureates', () => {
        mockedDispatch.mockReturnValue(jest.fn());

        const component = render(<Laureates />)

        expect(component).toMatchSnapshot()
    })
})

// describe('Laureates test', () => {
//     it('should create LaureatesList with empty list', async () => {
//         useSelector.mockReturnValue([]);

//         const component = render(<Laureates />)

//         expect(component).toMatchSnapshot();
//     })

//     it('should create LaureatesList with list items', () => {
//         useSelector.mockReturnValue(laureatesList);

//         const component = render(<Laureates />);

//         expect(component).toMatchSnapshot()
//     })
// })