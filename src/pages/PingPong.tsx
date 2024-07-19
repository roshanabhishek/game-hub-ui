import React, { useEffect, useRef, useState } from 'react';
import Paddle from '../components/ping-pong/Paddle';
import Ball from '../components/ping-pong/Ball';

import '../components/ping-pong/ping-pong.css';

const PingPong: React.FC = () => {
  const [paddle1Y, setPaddle1Y] = useState<number>(250);
  const [paddle2Y, setPaddle2Y] = useState<number>(250);
 
  const canvasRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') {
        setPaddle2Y(prevY => Math.max(prevY - 20, 0));
      } else if (e.key === 'ArrowDown') {
        setPaddle2Y(prevY => Math.min(prevY + 20, 500));
      } else if(e.key.toLocaleLowerCase() === 'w') {
        setPaddle1Y(prevY => Math.max(prevY - 20, 0));
      } else if (e.key.toLocaleLowerCase() === 's') {
        setPaddle1Y(prevY => Math.min(prevY + 20, 500));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div>
        <svg ref={canvasRef} width="810" height="610" className="border-2 border-white">
          <Paddle x={10} y={paddle1Y} />
          <Paddle x={790} y={paddle2Y} />
          <Ball x={10} y={10} />
        </svg>
      </div>
    </div>
  );
};

export default PingPong;
