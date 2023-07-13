import './Navigation.css'
import { Clock } from "../Clock/Clock";

export const Navigation = ({routing}) => {

    const changeToList = (list) => {
        if (list === 1) {
            routing('list1');
        } else if (list === 2) {
            routing('list2');
        } else if (list === 3) {
            routing('list3');
        }
    }

    return (
        <div className="navigation">
            <header>
                <h1>My Lists</h1>
            </header>
            <div className="list1">
                <h2 onClick={() => {changeToList(1)}}>List #1</h2>
            </div>
            <div className="list2">
                <h2 onClick={() => {changeToList(2)}}>List #2</h2>
            </div>
            <div className="list3">
                <h2 onClick={() => {changeToList(3)}}>List #3</h2>
            </div>
            <div className="great">
                <h3>Your doing Great!</h3>
                <Clock />
            </div>
        </div>
    );
}