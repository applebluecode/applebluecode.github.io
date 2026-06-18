'use client';

import { useEffect, useReducer } from 'react';

interface TypingEffectProps {
  text: string;
  speed?: number;
  delayBetweenCycles?: number;
  className?: string;
}

interface State {
  displayedText: string;
  isDeleting: boolean;
  isWaiting: boolean;
}

type Action = 
  | { type: 'TYPE_CHAR' }
  | { type: 'DELETE_CHAR' }
  | { type: 'START_WAITING' }
  | { type: 'START_DELETING' }
  | { type: 'RESTART' };

export function TypingEffect({ 
  text, 
  speed = 50,
  delayBetweenCycles = 2000,
  className = ''
}: TypingEffectProps) {
  const initialState: State = {
    displayedText: '',
    isDeleting: false,
    isWaiting: false,
  };

  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case 'TYPE_CHAR':
        return {
          ...state,
          displayedText: text.slice(0, state.displayedText.length + 1),
        };
      case 'DELETE_CHAR':
        return {
          ...state,
          displayedText: state.displayedText.slice(0, -1),
        };
      case 'START_WAITING':
        return {
          ...state,
          isWaiting: true,
        };
      case 'START_DELETING':
        return {
          ...state,
          isWaiting: false,
          isDeleting: true,
        };
      case 'RESTART':
        return {
          ...state,
          isDeleting: false,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { displayedText, isDeleting, isWaiting } = state;

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isWaiting) {
      // 等待阶段
      timer = setTimeout(() => {
        dispatch({ type: 'START_DELETING' });
      }, delayBetweenCycles);
    } else if (!isDeleting) {
      // 打字阶段
      if (displayedText.length < text.length) {
        timer = setTimeout(() => {
          dispatch({ type: 'TYPE_CHAR' });
        }, speed);
      } else if (displayedText.length === text.length) {
        timer = setTimeout(() => {
          dispatch({ type: 'START_WAITING' });
        }, 50);
      }
    } else {
      // 删除阶段
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          dispatch({ type: 'DELETE_CHAR' });
        }, speed / 2);
      } else {
        timer = setTimeout(() => {
          dispatch({ type: 'RESTART' });
        }, 50);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, text, speed, isDeleting, isWaiting, delayBetweenCycles]);

  return (
    <span className={className}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

