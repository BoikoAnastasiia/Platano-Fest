import './SideBar.scss';
import { useEffect } from 'react';

export default function Sidebar({ onClose, children }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <div className="Modal__backdrop" onClick={handleBackdropClick}>
      <div className="sidebarWrapper">sdcddvd</div>
    </div>
  );
}
