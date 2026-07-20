import './scss/main.scss';
import { initShareToast } from './share-toast.js';

const destroyShareToast = initShareToast();
window.addEventListener('pagehide', destroyShareToast);
