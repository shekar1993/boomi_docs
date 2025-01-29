import React from "react";
import "./OtherBoomiResources.css";

const OtherBoomiResources: React.FC = () => {
    return (
        <div className="other-boomi-resources-wrapper" data-testid="other-boomi-resources-wrapper">
            <p className="header" role="heading">Other Boomi Resources</p>
            <div className="ex-container">
                <div className="ex-row outer-container-wrapper">
                <div className="ex-col-xs-12 ex-col-sm-12 ex-col-md-12 ex-col-lg-12">
                    <div className="ex-row">
                        <div className="ex-col-xs-12 ex-col-sm-12 ex-col-md-12 ex-col-lg-4 align-item-center">
                            <div className="card-wrapper">
                            <div className="image-container"><a href="https://community.boomi.com/s/" target="_blank" rel="noopener noreferrer" aria-label="other-resources-community-link-image">
                                <img src="img/1-light.svg" alt="Community" className='icon-light-mode'/>
                                <img src="img/1-dark.svg" alt="Community" className='icon-dark-mode'/>
                                </a>
                            </div>

                            <div className="resource-link"><a href="https://community.boomi.com/s/" target="_blank" rel="noopener noreferrer" aria-label="other-resources-community-link-image">Community</a></div>
                            <p className="content">Discover the power of the Boomi community. View knowledge articles, collaborate with Boomi users, join user groups and forums.</p>
                            </div>
                        </div>
                        
                        <div className="ex-col-xs-12 ex-col-sm-12 ex-col-md-12 ex-col-lg-4 align-item-center">
                        <div className="card-wrapper">
                            <div className="image-container"><a href="https://community.boomi.com/s/training?tabset-8ac8c=1e87d" target="_blank" rel="noopener noreferrer" aria-label="other-resources-community-link-image">
                                <img src="img/2-light.svg" alt="Training" className='icon-light-mode'/>
                                <img src="img/2-dark.svg" alt="Training" className='icon-dark-mode'/>
                                </a>
                            </div>
                            <div className="resource-link"><a href="https://community.boomi.com/s/training?tabset-8ac8c=1e87d" target="_blank" rel="noopener noreferrer" aria-label="other-resources-community-link-image">Training</a></div>
                            <p className="content">Develop core competencies. Earn badges, get hands-on training and certifications with on-demand and self guided training.</p>
                            </div>
                        </div>

                        <div className="ex-col-xs-12 ex-col-sm-12 ex-col-md-12 ex-col-lg-4 align-item-center">
                        <div className="card-wrapper">
                            <div className="image-container"><a href="https://resources.boomi.com/" target="_blank" rel="noopener noreferrer" aria-label="other-resources-community-link-image">
                                <img src="img/3-light.svg" alt="Resources" className='icon-light-mode'/>
                                <img src="img/3-dark.svg" alt="Resources" className='icon-dark-mode'/>
                            </a>
                            </div>
                            <div className="resource-link"><a href="https://resources.boomi.com/" target="_blank" rel="noopener noreferrer" aria-label="other-resources-community-link-image">Resource Center</a></div>
                            <p className="content">Explore articles, e-books, webinars, whitepapers, videos, reports, and fresh Boomi news.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default OtherBoomiResources;

