function pauseAllMedia() {
    document.querySelectorAll('.js-youtube').forEach((video) => {
      video.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
    });
    document.querySelectorAll('.js-vimeo').forEach((video) => {
      video.contentWindow.postMessage('{"method":"pause"}', '*');
    });
    document.querySelectorAll('video').forEach((video) => video.pause());
    document.querySelectorAll('product-model').forEach((model) => {
      if (model.modelViewerUI) model.modelViewerUI.pause();
    });
  }
  
  class ModalOpener extends HTMLElement {
    constructor() {
      super();
  
      const button = this.querySelector('button');
  
      if (!button) return;
      button.addEventListener('click', () => {
        const modal = document.querySelector(this.getAttribute('data-modal'));
        if (modal) modal.show(button);
      });
    }
  }
  customElements.define('modal-opener', ModalOpener);
  
  class DeferredMedia extends HTMLElement {
    constructor() {
      super();
      const poster = this.querySelector('[id^="Deferred-Poster-"]');
      if (!poster) return;
      poster.addEventListener('click', this.loadContent.bind(this));
    }
  
    loadContent(focus = true) {
      window.pauseAllMedia();
      if (!this.getAttribute('loaded')) {
        const content = document.createElement('div');
        content.appendChild(this.querySelector('template').content.firstElementChild.cloneNode(true));
  
        this.setAttribute('loaded', true);
        const deferredElement = this.appendChild(content.querySelector('video, model-viewer, iframe'));
        if (focus) deferredElement.focus();
        if (deferredElement.nodeName == 'VIDEO' && deferredElement.getAttribute('autoplay')) {
          // force autoplay for safari
          deferredElement.play();
        }
      }
    }
  }
  
  customElements.define('deferred-media', DeferredMedia);