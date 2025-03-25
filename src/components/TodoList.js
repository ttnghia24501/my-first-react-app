import React from 'react';
import Todo from './Todo';

export default function TodoList({ 
  todoList, 
  onDeleteBtnClick,
  onToggleComplete,
  onEditTodo,
  onUpdatePriority,
  onUpdateCategory,
  onUpdateDeadline
}) {
  return (
    <>
      {todoList.map((todo) => (
        <Todo 
          key={todo.id} 
          todo={todo} 
          onDeleteBtnClick={onDeleteBtnClick}
          onToggleComplete={onToggleComplete}
          onEditTodo={onEditTodo}
          onUpdatePriority={onUpdatePriority}
          onUpdateCategory={onUpdateCategory}
          onUpdateDeadline={onUpdateDeadline}
        />
      ))}
    </>
  );
}