import { Link, Outlet } from "react-router-dom"
import { actions } from '../features/todos/todosSlice';
import { useDispatch, useSelector } from "react-redux";

const Layout = () => {
    const userInput = useSelector(state => state.todos.userInput);
    const dispatch = useDispatch();

    const handleCreateTodo = () => {
        dispatch(actions.createTodo())
    }

    const handleSetUserInput = (userInput) => {
        dispatch(actions.setUserInput({ userInput }))
    }

    return (
        <div>
            <div className="flex gap-2 p-2 ">
                <input 
                    type="text"
                    value={userInput}
                    onChange={(e) => handleSetUserInput(e.target.value)}
                    placeholder="Enter your todo message"
                    className="p-2 w-full border-cyan-400 border-solid border-2 rounded"
                />
                <button className="btn" onClick={handleCreateTodo}>Create</button>
            </div>
            <nav >
                <ul className="flex gap-2 p-2">
                    <li >
                        <Link to={"/"}>All</Link>
                    </li>
                    <li>
                        <Link to={"/active"}>Active</Link>
                    </li>
                    <li>
                        <Link to={"/completed"}>Completed</Link>
                    </li>
                </ul>
            </nav>
            <section className="p-2">
                <Outlet />
            </section>
        </div>
    )
}

export default Layout