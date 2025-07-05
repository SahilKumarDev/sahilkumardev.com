import React from "react";

const Spinner = () => {
  return (
    <>
      <style jsx>{`
        .loading-more {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          color: #6c757d;
        }

        .spinner {
          width: 24px;
          height: 24px;
          border: 3px solid #f3f3f3;
          border-top: 3px solid #007bff;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 10px;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .load-more-trigger {
          margin-top: 30px;
          margin-bottom: 20px;
        }

        .loading,
        .error,
        .no-videos {
          text-align: center;
          padding: 40px 20px;
          color: #6c757d;
        }

        .error {
          color: #dc3545;
        }
      `}</style>
      <div className="loading-more">
        <div className="spinner"></div>
        <p>Loading more videos...</p>
      </div>
    </>
  );
};

export default Spinner;