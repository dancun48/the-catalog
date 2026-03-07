import React from 'react';

const AccordionItem = ({ id, title, content, activeId, onToggle }) => {
  const isOpen = activeId === id; // Check if this item is the active one

  return (
    <div className="accordion-item">
      <button
        className="accordion-title"
        onClick={() => onToggle(id)} // Call the parent's handler
        aria-expanded={isOpen}
      >
        {title}
        <span>{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="accordion-content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
