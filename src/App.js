import React from 'react';
import TextField from '@atlaskit/textfield';
import Button from '@atlaskit/button';
import AddIcon from '@atlaskit/icon/glyph/add';
import TodoList from './components/TodoList';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Select from '@atlaskit/select';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import styled from 'styled-components';

const AppContainer = styled.div`
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    background-color: ${props => props.isDarkMode ? '#1a1a1a' : '#ffffff'};
    min-height: 100vh;
    transition: background-color 0.3s ease;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

const Title = styled.h3`
    color: ${props => props.isDarkMode ? '#ffffff' : '#000000'};
    margin: 0;
`;

const TodoCount = styled.div`
    color: ${props => props.isDarkMode ? '#999999' : '#666666'};
`;

const ThemeButton = styled(Button)`
    display: flex;
    align-items: center;
    gap: 8px;
    
    &::before {
        content: '🌙';
        font-size: 1.2em;
    }
    
    ${props => props.isDarkMode && `
        &::before {
            content: '☀️';
        }
    `}
`;

function AppContent() {
    const { isDarkMode, toggleTheme } = useTheme();
    // Khởi tạo todoList từ localStorage nếu có
    const [todoList, setTodoList] = useState(() => {
        const savedTodoList = localStorage.getItem('todoList');
        return savedTodoList ? JSON.parse(savedTodoList) : [];
    });
    const [textInput, setTextInput] = useState("");
    const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'
    const [searchText, setSearchText] = useState("");
    const [deadline, setDeadline] = useState("");

    // Lưu todoList vào localStorage mỗi khi có thay đổi
    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(todoList));
    }, [todoList]);

    const onTextInputChange = (e) => {
        setTextInput(e.target.value);
    }

    const onDeadlineChange = (e) => {
        setDeadline(e.target.value);
    }

    const onAddBtnClick = () => {
        if (textInput.trim() !== "") {
            setTodoList([...todoList, { 
                id: uuidv4(), 
                text: textInput,
                isCompleted: false,
                createdAt: new Date().toISOString(),
                deadline: deadline || null,
                priority: 'medium',
                category: 'personal'
            }]);
            setTextInput("");
            setDeadline("");
        }
    }

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            onAddBtnClick();
        }
    }

    const onDeleteBtnClick = (id) => {
        setTodoList(todoList.filter(item => item.id !== id));
    }

    const onToggleComplete = (id) => {
        setTodoList(todoList.map(item => 
            item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
        ));
    }

    const onEditTodo = (id, newText) => {
        setTodoList(todoList.map(item =>
            item.id === id ? { ...item, text: newText } : item
        ));
    }

    const onUpdatePriority = (id, priority) => {
        setTodoList(todoList.map(item =>
            item.id === id ? { ...item, priority } : item
        ));
    }

    const onUpdateCategory = (id, category) => {
        setTodoList(todoList.map(item =>
            item.id === id ? { ...item, category } : item
        ));
    }

    const onUpdateDeadline = (id, newDeadline) => {
        setTodoList(todoList.map(item =>
            item.id === id ? { ...item, deadline: newDeadline } : item
        ));
    }

    const filteredTodos = todoList
        .filter(todo => {
            if (filter === 'active') return !todo.isCompleted;
            if (filter === 'completed') return todo.isCompleted;
            return true;
        })
        .filter(todo => 
            todo.text.toLowerCase().includes(searchText.toLowerCase())
        );

    const filterOptions = [
        { label: 'Tất cả', value: 'all' },
        { label: 'Chưa hoàn thành', value: 'active' },
        { label: 'Đã hoàn thành', value: 'completed' }
    ];

    return (
        <AppContainer isDarkMode={isDarkMode}>
            <Header>
                <Title isDarkMode={isDarkMode}>Danh sách cần làm</Title>
                <ThemeButton
                    appearance="subtle"
                    onClick={toggleTheme}
                    isDarkMode={isDarkMode}
                >
                    {isDarkMode ? 'Chế độ sáng' : 'Chế độ tối'}
                </ThemeButton>
            </Header>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <TextField
                    name="todo"
                    placeholder="Nhập công việc cần làm"
                    value={textInput}
                    onChange={onTextInputChange}
                    onKeyPress={onKeyPress}
                    style={{ flex: 1 }}
                />
                <input
                    type="datetime-local"
                    value={deadline}
                    onChange={onDeadlineChange}
                    style={{ 
                        padding: '8px', 
                        borderRadius: '4px', 
                        border: '1px solid #dfe1e6',
                        backgroundColor: isDarkMode ? '#333333' : '#ffffff',
                        color: isDarkMode ? '#ffffff' : '#000000'
                    }}
                />
                <Button
                    appearance="primary"
                    iconAfter={<AddIcon label="add" />}
                    onClick={onAddBtnClick}
                >
                    Thêm
                </Button>
            </div>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <TextField
                    name="search"
                    placeholder="Tìm kiếm..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    style={{ flex: 1 }}
                />
                <Select
                    options={filterOptions}
                    value={filterOptions.find(option => option.value === filter)}
                    onChange={(option) => setFilter(option.value)}
                    placeholder="Lọc theo trạng thái"
                    styles={{
                        container: (base) => ({
                            ...base,
                            width: '200px'
                        })
                    }}
                />
            </div>
            <TodoList 
                todoList={filteredTodos} 
                onDeleteBtnClick={onDeleteBtnClick}
                onToggleComplete={onToggleComplete}
                onEditTodo={onEditTodo}
                onUpdatePriority={onUpdatePriority}
                onUpdateCategory={onUpdateCategory}
                onUpdateDeadline={onUpdateDeadline}
            />
            <TodoCount isDarkMode={isDarkMode}>
                {filteredTodos.length} công việc
            </TodoCount>
        </AppContainer>
    );
}

function App() {
    return (
        <ThemeProvider>
            <AppContent />
        </ThemeProvider>
    );
}

export default App;
