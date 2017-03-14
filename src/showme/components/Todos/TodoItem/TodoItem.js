import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';
import TextInput from '../TextInput';

class TodoItem extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            editing: false
        };
    }

    render() {
        const {todo, completeTodo, deleteTodo} = this.props;

        let element;
        if (this.state.editing) {
            element = (
                <TextInput
                    text={todo.text}
                    editing={this.state.editing}
                />
            );
        } else {
            element = (
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => completeTodo(todo.id)}
                    />
                    <label htmlFor="input">
                        {todo.text}
                    </label>
                    <button
                        className="destroy"
                        onClick={() => deleteTodo(todo.id)}
                    />
                </div>
            );
        }
        return (
            <li
                className={classnames({
                    completed: todo.completed,
                    editing: this.state.editing
                })}>
                {element}
            </li>
        );
    }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  completeTodo: PropTypes.func,
  deleteTodo: PropTypes.func
};

export default TodoItem;