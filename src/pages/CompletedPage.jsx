import { useDispatch, useSelector } from "react-redux";
import { actions } from "../features/todos/todosSlice"

const CompletedPage = () => {
    const todos = useSelector(state => state.todos.todos);
    const dispatch = useDispatch();

    const completedTodos = todos.filter(todo => todo.completed)

    const handleToggle = (id) => {
        dispatch(actions.toggleTodo({ id }))
    }

    const handleRemoveTodo = (id) => {
        dispatch(actions.deleteTodo({ id }))
    }

    return (
        <div>
            {
                completedTodos.map((todo, index) => (
                    <div key={index} className="flex justify-between p-2 bg-slate-300 rounded mb-4 items-center">
                        <p>{todo.content}</p>
                        <div className="flex gap-1 items-center">
                            <input
                                type="checkbox"
                                name="completed"
                                checked={todo.completed}
                                onChange={() => handleToggle(todo.id)}
                            />
                            <label htmlFor="completed">Completed</label>
                            <div></div>
                            <button className="btn" onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
                        </div>

                    </div>
                ))
            }
        </div>
    );
}

export default CompletedPage