import './SideBar.scss';
import { useEffect } from 'react';
import Logo from '../../Views/HomePage/images/sideBarLogo.svg';
import Close from '../../Views/HomePage/images/close.svg';
export default function Sidebar({ onClose }) {
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
      <div className="sidebarWrapper">
        <div className="close-wrapper">
          <Close className="close-btn" />
        </div>
        <Logo className="logo-sidebar" />
      </div>
    </div>
  );
}
