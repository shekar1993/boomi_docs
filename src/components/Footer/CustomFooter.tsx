import React from 'react';
import "./CustomFooter.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

function CustomFooter() {
  return (
    <footer className="footer-wrapper" aria-label='footer content' role="footer">
      <div className="ex-row" data-testid="footer-wrapper">
        <div className="ex-col-xs-offset-2 ex-col-xs-10 footer-container">
          <div className="ex-row ex-p-standard ex-mt-medium">
            <div className="ex-col-xs-12 ex-col-sm-4 ex-col-md-2 ex-col-lg-2">
              <img src={useBaseUrl("img/boomi_logo.svg")} alt="Boomi Logo" className='boomi-logo-footer-light-mode'/>
              <img src={useBaseUrl("img/boomi_logo_dark.svg")} alt="Boomi Logo" className='boomi-logo-footer-dark-mode'/>
            </div>
            <div className="ex-col-xs-12 ex-col-sm-4 ex-col-md-2 ex-col-lg-2 platform-wrapper">
                <div className="footer-links footer-link-header">Platform</div>
                <div className="ex-pt-standard footer-link">
                <a href="https://status.boomi.com/" target="_blank" rel="noopener noreferrer" aria-label="footer-platform-status-link">
                  Platform Status
                </a>
                </div>
                <div className="ex-pt-standard footer-link">
                <a href="https://platform.boomi.com/" target="_blank" rel="noopener noreferrer" aria-label="footer-platform-status-link">
                  Sign In
                </a>
                </div>
                <div className="ex-pt-standard footer-link">
                <a href="https://community.boomi.com/s/support" target="_blank" rel="noopener noreferrer" aria-label="footer-platform-status-link">
                  Support
                </a>
                </div>
            </div>
            <div className="ex-col-xs-12 ex-col-sm-4 ex-col-md-2 ex-col-lg-2 company-wrapper">
              <div className="footer-links footer-link-header">Company</div>
                <div className="ex-pt-standard footer-link">
                <a href="https://www.boomi.com" target="_blank" rel="noopener noreferrer" aria-label="footer-platform-status-link">
                  Boomi.com
                </a>
                </div>
                <div className="ex-pt-standard footer-link">
                <a href="https://boomi.com/blog/" target="_blank" rel="noopener noreferrer" aria-label="footer-platform-status-link">
                  Company Blog
                </a>
                </div>
                <div className="ex-pt-standard footer-link">
                <a href="https://boomi.com/privacy/" target="_blank" rel="noopener noreferrer" aria-label="footer-platform-status-link">
                  Privacy Policy
                </a>
                </div>
                <div className="ex-pt-standard footer-link">
                <a href="https://boomi.com/legal/service/" target="_blank" rel="noopener noreferrer" aria-label="footer-platform-status-link">
                  Terms of Service
                </a>
                </div>
            </div>
          </div>
          <div className="ex-row copyright-container">
            <p className="footer-copyright">
            © 2025 Copyright Boomi, LP. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default CustomFooter;