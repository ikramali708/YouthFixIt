import React from 'react';
import { BallTriangle } from 'react-loader-spinner';

const SpinnerLoader = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(1000px)',
      }}
    >
      <h1>Loading...</h1>
      <BallTriangle
        color="#00BFFF"
        height={100}
        width={100}
      />
    </div>
  );
};

export default SpinnerLoader;
