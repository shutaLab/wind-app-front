import React, { useRef, useEffect } from "react";

const AutoAdjustTextarea = ({ className = "", placeholder = "", ...props }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const baseClasses =
    "w-full resize-none transition-all duration-150 bg-white border borer-gray-400 outline-none";

  useEffect(() => {
    const handleResize = () => {
      if (textareaRef.current) {
        textareaRef.current.style.height = "0px";
        const scrollHeight = textareaRef.current.scrollHeight;
        textareaRef.current.style.height = `${Math.max(scrollHeight, 40)}px`;
      }
    };

    const textarea = textareaRef.current;
    if (textarea) {
      handleResize();
      textarea.addEventListener("input", handleResize);
    }

    return () => {
      if (textarea) {
        textarea.removeEventListener("input", handleResize);
      }
    };
  }, []);

  return (
    <textarea
      ref={textareaRef}
      className={`${baseClasses} ${className}`}
      rows={1}
      placeholder={placeholder} // placeholderを設定
      {...props}
    />
  );
};

export default AutoAdjustTextarea;
