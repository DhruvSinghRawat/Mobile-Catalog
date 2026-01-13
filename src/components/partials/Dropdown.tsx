import React from 'react';
import Item from './DropdownItem.tsx';
import DropdownButton from './DropdownButton.tsx';
interface DropdownProps {
    isOpen: boolean;
    onClose: () => void;
    toggleDarkMode: () => void; // Add toggleDarkMode prop
}

const Dropdown: React.FC<DropdownProps> = ({ isOpen, onClose, toggleDarkMode }) => {
    return (
        <div
            className={`absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-10 dark:bg-gray-600 dark:text-white ${isOpen && ''}`}
        >
            <Item to="/">home</Item>
            <Item to="https://www.linkedin.com/in/dhruv-singh-rawat-61b109252/" target="_blank">LinkedIn</Item>
            <DropdownButton onClick={toggleDarkMode}>dark mode</DropdownButton>
            <DropdownButton onClick={onClose}>close</DropdownButton>
        </div>
    );
};

export default Dropdown;
