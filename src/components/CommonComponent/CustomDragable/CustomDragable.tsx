'use client';

import React, { useRef } from 'react';

interface CustomDraggableProps {
  children: React.ReactNode;
  axis?: 'x' | 'y' | 'both';
  defaultPosition?: { x: number; y: number };
  handle?: string;
}

const CustomDraggable: React.FC<CustomDraggableProps> = ({
  children,
  axis = 'both',
  defaultPosition = { x: 0, y: 0 },
  handle,
}) => {
  const draggableRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef<{ x: number; y: number }>(defaultPosition);

  const onDragStart = () => {
    const element = draggableRef.current;
    if (element) {
      const rect = element.getBoundingClientRect();
      positionRef.current = { x: rect.left, y: rect.top };
    }
  };

  const onDrag = (e: React.MouseEvent | React.TouchEvent) => {
    const element = draggableRef.current;
    if (element) {
      const deltaX = 'movementX' in e ? e.movementX : 0; // MouseEvent
      const deltaY = 'movementY' in e ? e.movementY : 0; // MouseEvent

      const translateX =
        axis === 'x' || axis === 'both'
          ? positionRef.current.x + deltaX
          : positionRef.current.x;
      const translateY =
        axis === 'y' || axis === 'both'
          ? positionRef.current.y + deltaY
          : positionRef.current.y;

      element.style.transform = `translate(${translateX}px, ${translateY}px)`;
    }
  };

  const onDragEnd = () => {
    const element = draggableRef.current;
    if (element) {
      const transform = window.getComputedStyle(element).transform;
      if (transform !== 'none') {
        const matrix = transform
          .replace('matrix(', '')
          .replace(')', '')
          .split(', ')
          .map(Number);

        positionRef.current = { x: matrix[4], y: matrix[5] };

        // Reset styles
        element.style.transform = 'none';
        element.style.left = `${positionRef.current.x}px`;
        element.style.top = `${positionRef.current.y}px`;
      }
    }
  };

  return (
    <div
      ref={draggableRef}
      style={{
        position: 'absolute',
        left: `${defaultPosition.x}px`,
        top: `${defaultPosition.y}px`,
      }}
      onMouseDown={onDragStart}
      onMouseMove={onDrag}
      onMouseUp={onDragEnd}
      onTouchStart={onDragStart}
      onTouchMove={onDrag}
      onTouchEnd={onDragEnd}
      className={handle}
    >
      {children}
    </div>
  );
};

export default CustomDraggable;
