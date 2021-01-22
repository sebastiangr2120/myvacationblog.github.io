class MiProgreso extends HTMLElement {
  conectedCallback(){
    this.innerHTML = /* html */
      `<progress max="100">Cargando....</progress>`;
  }
}
customElements.define(mi-progreso",MiProgreso);
