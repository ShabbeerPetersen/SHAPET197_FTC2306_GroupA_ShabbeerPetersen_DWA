import { html, css, LitElement } from "../node_modules/lit";

class CounterApp extends LitElement {
  static styles = css`
    .counter {
      background: var(--color-dark-grey);
    }

    .counter___button:disabled {
      opacity: 0.2;
      background: red;
    }

    .counter__value {
      width: 100%;
      height: 15rem;
      text-align: center;
      font-size: 10rem;
      font-weight: 900;
      background: none;
      color: var(--color-white);
      border-width: 0;
      border-bottom: 1px solid var(--color-light-grey);
    }

    .counter__actions {
      display: flex;
    }

    .counter__button {
      background: none;
      width: 50%;
      border-width: 0;
      color: rgb(0, 255, 0);
      font-size: 3rem;
      height: 10 rem;
      border-bottom: 1px solid var(--color-light-grey);
      transition: transform 0.1s;
      transform: translateY(0);
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
    }

    .counter__button:active {
      background: rgb(9, 255, 0);
      transform: translateY(2%);
      -webkit-transform: translateY(2%);
      -moz-transform: translateY(2%);
      -ms-transform: translateY(2%);
      -o-transform: translateY(2%);
    }

    .counter__button_first {
      color: #ff0000;
      font-size: 4rem;
      border-right: 1px solid var(--color-light-grey);
    }

    .counter__button_first:active {
      background-color: #ff0000;
    }
  `;

  static properties = {
    count: { type: Number },
  };

  constructor() {
    super();
    this.count = 0;
  }

  increment() {
    this.count += 1;
  }

  decrement() {
    if (this.count > 0) {
      this.count -= 1;
    }
  }

  reset() {
    this.count = 0;
  }

  render() {
    return html`
      <div class="counter">
        <sl-input
          class="counter__value"
          .value="${this.count}"
          readonly
        ></sl-input>
        <div class="counter__actions">
          <sl-button
            class="counter__button__subtract"
            @click="${this.decrement}"
            >-</sl-button
          >
          <sl-button class="counter__button__add" @click="${this.increment}"
            >+</sl-button
          >
          <sl-button class="counter__button__rest" @click="${this.reset}"
            >Reset</sl-button
          >
        </div>
      </div>
    `;
  }
}

customElements.define("counter-app", CounterApp);
