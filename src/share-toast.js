export function initShareToast() {
  const shareToast = document.getElementById('share-toast');

  if (!shareToast) {
    return;
  }

  const shareButtons = document.querySelectorAll('.share-button');
  let lastTrigger = null;

  function syncExpanded(expanded) {
    const value = String(expanded);
    shareButtons.forEach((button) => button.setAttribute('aria-expanded', value));
  }

  function openToast(trigger) {
    lastTrigger = trigger;
    shareToast.hidden = false;
    syncExpanded(true);
    const firstFocusable = shareToast.querySelector('a, button, [tabindex]');
    firstFocusable?.focus();
  }

  function closeToast() {
    if (shareToast.hidden) {
      return;
    }

    shareToast.hidden = true;
    syncExpanded(false);
    lastTrigger?.focus();
  }

  function toggleToast(event) {
    if (shareToast.hidden) {
      openToast(event.currentTarget);
    } else {
      closeToast();
    }
  }

  function onKeydown(e) {
    if (e.key === 'Escape') {
      closeToast();
    }
  }

  function onClick(e) {
    if (shareToast.hidden) {
      return;
    }

    if (e.target.closest('.share-toast')) {
      return;
    }

    if (e.target.closest('.share-button')) {
      return;
    }

    closeToast();
  }

  shareButtons.forEach((button) => {
    button.addEventListener('click', toggleToast);
  });

  document.addEventListener('keydown', onKeydown);
  document.addEventListener('click', onClick);

  return function destroy() {
    shareButtons.forEach((button) => {
      button.removeEventListener('click', toggleToast);
    });
    document.removeEventListener('keydown', onKeydown);
    document.removeEventListener('click', onClick);
  };
}
