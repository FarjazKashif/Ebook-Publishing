import { useState } from 'react';

export const ChatFab = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`chat-fab ${isOpen ? 'is-open' : ''}`}>
      <div className="chat-fab__menu">
        <a href="https://wa.me/18135370226" target="_blank" rel="noopener noreferrer" className="chat-fab__option chat-fab__option--whatsapp">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.2-.6.9-.8 1-.1.2-.3.2-.5.1-1.5-.6-2.5-1.4-3.5-3-.1-.2 0-.4.1-.5.2-.2.4-.5.6-.7.1-.2.1-.4 0-.5-.1-.2-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9 1-.9 2.3 0 1.4 1 2.7 1.1 2.9.1.2 1.9 3 4.7 4.1 2.3.9 2.7.7 3.2.7.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.1.1-1.2-.1-.1-.2-.1-.4-.2Z"/><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18.2c-1.6 0-3.1-.4-4.5-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2Z"/></svg>
          <span>WhatsApp Us</span>
        </a>
        <a href="https://m.me/infusionpublishing" target="_blank" rel="noopener noreferrer" className="chat-fab__option chat-fab__option--messenger">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.1 2 11.2c0 2.9 1.4 5.4 3.7 7.1.2.1.3.4.3.6l.1 1.9c0 .6.6 1 1.2.8l2.1-1c.2-.1.4-.1.6 0 .7.2 1.4.3 2 .3 5.5 0 10-4.1 10-9.2C22 6.1 17.5 2 12 2Zm5.9 6.9-2.9 4.6c-.3.4-.8.6-1.3.4l-.1-.1-2.3-1.7c-.2-.1-.4-.1-.5 0l-3.1 2.3c-.4.3-.9-.2-.6-.6l2.9-4.6c.3-.4.8-.6 1.3-.4l.1.1 2.3 1.7c.2.1.4.1.5 0l3.1-2.3c.4-.3.9.2.6.6Z"/></svg>
          <span>Messenger</span>
        </a>
        <a href="tel:18135370226" className="chat-fab__option chat-fab__option--call">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.7 3.6.7.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.5 21 3 13.5 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.7 3.6.1.3.1.7-.2 1l-2.4 2.2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>
          <span>Call Us</span>
        </a>
      </div>
      <button className="chat-fab__toggle" aria-label="Open chat options" aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <svg className="chat-fab__icon-chat" width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M4 12a8 8 0 1 1 3.2 6.4L4 19.5l1.2-3A7.96 7.96 0 0 1 4 12Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/></svg>
        <svg className="chat-fab__icon-close" width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
      </button>
    </div>
  );
};