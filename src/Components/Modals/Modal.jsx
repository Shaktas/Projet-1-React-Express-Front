import React from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="relative w-full max-w-md mx-auto my-6 z-50">
        <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg">
          {/* Header */}
          <div className="flex items-start justify-between p-5 border-b border-gray-200 rounded-t">
            <h3 className="text-xl font-semibold">{title}</h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-gray-600 hover:text-gray-900 text-2xl leading-none font-semibold"
              onClick={onClose}
            >
              ×
            </button>
          </div>
          {/* Content */}
          <div className="relative p-6 flex-auto">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
