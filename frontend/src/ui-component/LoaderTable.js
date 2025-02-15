import React from 'react';

function LoaderWithBackground({ loading, children }) {
  return (
    <div style={{ position: 'relative' }}>
      {loading && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent grey background
            zIndex: 9999 // Ensure it's on top of everything
          }}
        >
          {/* You can add your custom loader component here */}
          <div className="loader">Loading...</div>
        </div>
      )}
      {children}
    </div>
  );
}

export default LoaderWithBackground;
