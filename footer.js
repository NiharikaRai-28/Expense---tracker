class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: #1F2937;
          color: white;
          padding: 2rem 1rem;
          text-align: center;
          margin-top: 2rem;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        .footer-links {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 1rem;
        }
        .footer-links a {
          color: #D1D5DB;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-links a:hover {
          color: white;
        }
        .copyright {
          color: #9CA3AF;
          font-size: 0.875rem;
        }
        @media (min-width: 768px) {
          .footer-content {
            flex-direction: row;
            justify-content: space-between;
          }
        }
      </style>
      <footer>
        <div class="container">
          <div class="footer-content">
            <div class="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Contact Us</a>
            </div>
            <p class="copyright">&copy; ${new Date().getFullYear()} CoinKeeper. All rights reserved.</p>
          </div>
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);