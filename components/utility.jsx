export const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
  
    const diff = Math.floor((now - date) / 1000); // Difference in seconds
  
    if (diff < 60) {
      return `${diff} seconds ago`;
    } else if (diff < 3600) {
      const minutes = Math.floor(diff / 60);
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (date.getFullYear() === now.getFullYear()) {
      return date.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
    } else {
      return date.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
    }
  };