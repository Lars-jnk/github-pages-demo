import { LitElement, html } from 'lit-element';

class TodoView extends LitElement {
    render() {
        return html` 
      <p>todo-view</p>
    `;
    }
}

customElements.define('todo-view', TodoView);