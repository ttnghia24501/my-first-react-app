import Button from '@atlaskit/button';
import React, { useState } from 'react';
import styled from 'styled-components';
import TrashIcon from '@atlaskit/icon/glyph/trash';
import Checkbox from '@atlaskit/checkbox';
import Select from '@atlaskit/select';
import TextField from '@atlaskit/textfield';
import CalendarIcon from '@atlaskit/icon/glyph/calendar';
import { useTheme } from '../context/ThemeContext';

const TodoItem = styled.div`
    display: flex;
    align-items: center;
    margin: 8px 0;
    padding: 8px;
    border-radius: 3px;
    border: 1px solid ${props => props.isDarkMode ? '#404040' : '#dfe1e6'};
    background: ${props => props.isDarkMode ? '#2d2d2d' : '#ffffff'};
    opacity: ${props => props.isCompleted ? 0.7 : 1};
    transition: all 0.3s ease;
`;

const TodoContent = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 12px;
`;

const TodoText = styled.span`
    flex: 1;
    text-decoration: ${props => props.isCompleted ? 'line-through' : 'none'};
    color: ${props => props.isDarkMode ? '#ffffff' : '#000000'};
`;

const TodoActions = styled.div`
    display: flex;
    gap: 8px;
`;

const DeadlineText = styled.span`
    color: ${props => {
        if (!props.deadline) return props.isDarkMode ? '#999999' : '#666666';
        const deadline = new Date(props.deadline);
        const now = new Date();
        if (deadline < now) return '#F44336';
        if (deadline - now < 24 * 60 * 60 * 1000) return '#FFC107';
        return '#4CAF50';
    }};
    font-size: 0.9em;
    display: flex;
    align-items: center;
    gap: 4px;
`;

const priorityOptions = [
    { label: 'Thấp', value: 'low' },
    { label: 'Trung bình', value: 'medium' },
    { label: 'Cao', value: 'high' }
];

const categoryOptions = [
    { label: 'Cá nhân', value: 'personal' },
    { label: 'Công việc', value: 'work' },
    { label: 'Học tập', value: 'study' },
    { label: 'Khác', value: 'other' }
];

const priorityColors = {
    low: '#4CAF50',
    medium: '#FFC107',
    high: '#F44336'
};

export default function Todo({ 
    todo, 
    onDeleteBtnClick,
    onToggleComplete,
    onEditTodo,
    onUpdatePriority,
    onUpdateCategory,
    onUpdateDeadline
}) {
    const { isDarkMode } = useTheme();
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);
    const [isEditingDeadline, setIsEditingDeadline] = useState(false);
    const [editDeadline, setEditDeadline] = useState(todo.deadline || '');

    const handleEdit = () => {
        if (isEditing) {
            onEditTodo(todo.id, editText);
        }
        setIsEditing(!isEditing);
    };

    const handleDeadlineEdit = () => {
        if (isEditingDeadline) {
            onUpdateDeadline(todo.id, editDeadline || null);
        }
        setIsEditingDeadline(!isEditingDeadline);
    };

    const formatDeadline = (deadline) => {
        if (!deadline) return 'Không có deadline';
        const date = new Date(deadline);
        return date.toLocaleString('vi-VN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <TodoItem isCompleted={todo.isCompleted} isDarkMode={isDarkMode}>
            <TodoContent>
                <Checkbox
                    isChecked={todo.isCompleted}
                    onChange={() => onToggleComplete(todo.id)}
                />
                <div style={{ flex: 1 }}>
                    {isEditing ? (
                        <TextField
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            style={{ width: '100%' }}
                        />
                    ) : (
                        <TodoText isCompleted={todo.isCompleted} isDarkMode={isDarkMode}>
                            {todo.text}
                        </TodoText>
                    )}
                    {isEditingDeadline ? (
                        <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
                            <input
                                type="datetime-local"
                                value={editDeadline}
                                onChange={(e) => setEditDeadline(e.target.value)}
                                style={{ 
                                    padding: '4px', 
                                    borderRadius: '4px', 
                                    border: '1px solid #dfe1e6',
                                    backgroundColor: isDarkMode ? '#333333' : '#ffffff',
                                    color: isDarkMode ? '#ffffff' : '#000000'
                                }}
                            />
                            <Button
                                appearance="subtle"
                                onClick={handleDeadlineEdit}
                            >
                                Lưu
                            </Button>
                        </div>
                    ) : (
                        <DeadlineText deadline={todo.deadline} isDarkMode={isDarkMode}>
                            <CalendarIcon label="calendar" />
                            {formatDeadline(todo.deadline)}
                        </DeadlineText>
                    )}
                </div>
            </TodoContent>
            <TodoActions>
                <Select
                    options={priorityOptions}
                    value={priorityOptions.find(option => option.value === todo.priority)}
                    onChange={(option) => onUpdatePriority(todo.id, option.value)}
                    styles={{
                        container: (base) => ({
                            ...base,
                            width: '120px'
                        }),
                        singleValue: (base) => ({
                            ...base,
                            color: priorityColors[todo.priority]
                        }),
                        menu: (base) => ({
                            ...base,
                            backgroundColor: isDarkMode ? '#2d2d2d' : '#ffffff',
                            color: isDarkMode ? '#ffffff' : '#000000'
                        }),
                        option: (base, state) => ({
                            ...base,
                            backgroundColor: state.isFocused ? (isDarkMode ? '#404040' : '#f4f5f7') : 'transparent',
                            color: isDarkMode ? '#ffffff' : '#000000',
                            '&:hover': {
                                backgroundColor: isDarkMode ? '#404040' : '#f4f5f7'
                            }
                        })
                    }}
                />
                <Select
                    options={categoryOptions}
                    value={categoryOptions.find(option => option.value === todo.category)}
                    onChange={(option) => onUpdateCategory(todo.id, option.value)}
                    styles={{
                        container: (base) => ({
                            ...base,
                            width: '120px'
                        }),
                        menu: (base) => ({
                            ...base,
                            backgroundColor: isDarkMode ? '#2d2d2d' : '#ffffff',
                            color: isDarkMode ? '#ffffff' : '#000000'
                        }),
                        option: (base, state) => ({
                            ...base,
                            backgroundColor: state.isFocused ? (isDarkMode ? '#404040' : '#f4f5f7') : 'transparent',
                            color: isDarkMode ? '#ffffff' : '#000000',
                            '&:hover': {
                                backgroundColor: isDarkMode ? '#404040' : '#f4f5f7'
                            }
                        })
                    }}
                />
                <Button
                    appearance="subtle"
                    onClick={handleEdit}
                >
                    {isEditing ? 'Lưu' : 'Sửa'}
                </Button>
                <Button
                    appearance="subtle"
                    onClick={handleDeadlineEdit}
                >
                    {isEditingDeadline ? 'Hủy' : 'Sửa deadline'}
                </Button>
                <Button
                    appearance="subtle"
                    iconBefore={<TrashIcon label="delete" />}
                    onClick={() => onDeleteBtnClick(todo.id)}
                />
            </TodoActions>
        </TodoItem>
    );
}