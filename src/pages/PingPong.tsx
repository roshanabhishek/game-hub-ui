import React, { useEffect, useRef, useState } from 'react';
import Paddle from '../components/ping-pong/Paddle';
// import Ball from '../components/ping-pong/Ball';
import io, { Socket } from 'socket.io-client';

import '../components/ping-pong/ping-pong.css';

const SOCKET_SERVER_URL = 'http://localhost:4008';

const PingPong = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [player, setPlayer] = useState(null);
  const paddle1Ref = useRef<SVGRectElement>(null);
  const paddle2Ref = useRef<SVGRectElement>(null);

  console.info('Player info', player);
  useEffect(() => {
    const newSocket = io(SOCKET_SERVER_URL);
    setSocket(newSocket);

    newSocket.on('assignPlayer', (socketID) => {
      console.log('Socket-ID', socketID)
      setPlayer(socketID);
    });


    // paddleMoved listens updates right paddle
    newSocket.on('paddleMoved', (data) => {
      console.info('Paddle moved', data);
      if (paddle2Ref.current) {
        paddle2Ref.current?.setAttribute('y', data.paddleY.toString());
      }
    });

    return () => {
      newSocket.close();
    }
  }, []);


  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      let paddleY: number = parseInt(paddle1Ref.current?.getAttribute('y') || '0'); // Adjust paddle position
      if (e.key === 'ArrowUp') {
        paddleY = Math.max(paddleY - 20, 0);
      } else if (e.key === 'ArrowDown') {
        paddleY = Math.min(paddleY + 20, 500);
      }
      paddle1Ref.current?.setAttribute('y', paddleY.toString());

      if (socket) {
        socket.emit('movePaddle', { paddleY });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [socket]);

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div>
        <svg width="810" height="610" className="border-2 border-white">
          <Paddle x={10} ref={paddle1Ref} />
          <Paddle x={790} ref={paddle2Ref} />
          {/* <Ball x={10} y={20} /> */}
        </svg>
      </div>
    </div>
  );
};

export default PingPong;
