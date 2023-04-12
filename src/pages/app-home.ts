import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';

import { styles } from '../styles/shared-styles';

@customElement('app-home')
export class AppHome extends LitElement {

  // For more information on using properties and state in lit
  // check out this link https://lit.dev/docs/components/properties/
  @property() message = 'Welcome to my personal page!';

  static get styles() {
    return [
      styles,
      css`
      #welcomeBar {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      #welcomeCard,
      #infoCard {
        padding: 18px;
        padding-top: 0px;
      }

      sl-card::part(footer) {
        display: flex;
        justify-content: flex-end;
      }

      @media(min-width: 750px) {
        sl-card {
          width: 70vw;
        }
      }


      @media (horizontal-viewport-segments: 2) {
        #welcomeBar {
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
        }

        #welcomeCard {
          margin-right: 64px;
        }
      }
    `];
  }

  constructor() {
    super();
  }


  async firstUpdated() {
    // this method is a lifecycle even in lit
    // for more info check out the lit docs https://lit.dev/docs/components/lifecycle/
    console.log('This is your home page');
  }

  share() {
    if ((navigator as any).share) {
      (navigator as any).share({
        title: 'PWABuilder pwa-starter',
        text: 'Check out the PWABuilder pwa-starter!',
        url: 'https://github.com/pwa-builder/pwa-starter',
      });
    }
  }

  render() {
    //const imgUrl = new URL('/images/makar.png').href
    return html`
      <app-header></app-header>

      <main>
        <div id="welcomeBar">
          <sl-card id="welcomeCard">
            <div slot="header">
              <h2>${this.message}</h2>
            </div>
            <img src="/src/pages/makar.jpg" alt="Main photo" style="width:200px">
            <p>
              Deal with development of ml-based technologies from researches and prototyping
              to a ready-to-use inference implementation. Most interested in computer vision, ML OPS and system design.
              Inspiring by design and building large systems for ETL, model training and evaluation.
              And I always get special pleasure when someone really needs a result.
            </p>
            <p>
              Graduated from MIREA with honors as BSc and MSc. My master's thesis was about assembling prototype of autonomous
              quadrocoter with navigation system based on computer vision and about researching how control system based on a
              fuzzy logic can improve flight capabilities in an unstable environment (wind or oscillating weight).
            </p>
            <p>
              In my spare time I enjoy windsurfing and diving.
            </p>

            ${'share' in navigator
              ? html`<sl-button slot="footer" variant="primary" @click="${this.share}">Share this page</sl-button>`
              : null}
          </sl-card>

          <sl-card id="infoCard">
            <h2>Contacts</h2>

            <ul>
              <li>
                <a href="https://www.linkedin.com/in/makariy-vasyuta/">linkedin</a>
              </li>

              <li>
                <a href="https://www.instagram.com/?hl=en">instagram</a>
              </li>
            </ul>
          </sl-card>


        </div>
      </main>
    `;
    //<sl-button href="${(import.meta as any).env.BASE_URL}about" variant="primary">Navigate to About</sl-button>
  }
}
