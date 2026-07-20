export function initShareToast() {
  const shareToast = document.getElementById('share-toast');

  if (!shareToast) {
    return;
  }

  const shareButtons = document.querySelectorAll('.share-button');

  function toggleToast() {
    shareToast.hidden = !shareToast.hidden;

    shareButtons.forEach((button) => {
      button.ariaExpanded = String(!shareToast.hidden);
    });
  }

  function closeToast() {
    shareToast.hidden = true;
    shareButtons.forEach((button) => (button.ariaExpanded = 'false'));
  }

  shareButtons.forEach((button) => button.addEventListener('click', toggleToast));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeToast();
    }
  });

  document.addEventListener('click', (e) => {
    if (
      shareToast.hidden ||
      e.target.closest('.share-toast') ||
      e.target.closest('.share-button')
    ) {
      return;
    }

    closeToast();
  });
}
