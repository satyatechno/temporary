import React, { useRef, useState } from 'react';

interface DraggableProps {
  children: React.ReactNode;
}

const DraggableDemo: React.FC<DraggableProps> = ({ children }) => {
  const dragRef = useRef<HTMLDivElement | null>(null);
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const onMouseDown = () => {
    setDragging(true);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!dragging || !dragRef.current) return;
    setPosition({
      x: e.movementX + position.x,
      y: e.movementY + position.y,
    });
  };

  const onMouseUp = () => setDragging(false);

  React.useEffect(() => {
    if (dragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    } else {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [dragging]);

  return (
    <div
      ref={dragRef}
      onMouseDown={onMouseDown}
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        cursor: 'grab',
      }}
    >
      {children}
    </div>
  );
};

export default DraggableDemo;
