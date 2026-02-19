import React from "react";

const LeagueBadgeModal = ({ badge, loading, onClose, error, isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {error ? 'Error fetching badge!' :
          loading ? (
            <p>Loading badge...</p>
          ) : badge ? (
            <img src={badge} alt="Season Badge" />
          ) : (
            <p>No badge available</p>
          )}
      </div>
    </div>
  );
};

export default LeagueBadgeModal;
