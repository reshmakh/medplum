import React from 'react';
import './Loading.css';

export function Loading() {
  return (
    <div className="medplum-loading">
      <div className="medplum-loading-container">
        <svg className="medplum-loading-spinner" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" />
        </svg>
      </div>
    </div>
  );
}
