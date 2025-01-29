import React from 'react';
import "./CategoryTiles.css";
import TilesLayout from './TilesLayout/TilesLayout';
function CategoryTiles() {
    return (
        <div className="category-tiles-wrapper" data-testid="category-tiles-wrapper">
            <p className='header' role='heading'>
                Documentation by service
            </p>
            <div className="ex-container">
                <div className="ex-row">
                <div className="ex-col-xs-12 ex-col-sm-12 ex-col-md-12 ex-col-lg-12 row-container">
                    <div className="ex-row outer-content-wrapper">
                        <div className="ex-col-xs-12 ex-col-sm-12 ex-col-md-12 ex-col-lg-6 tiles-container tiles-container-padding-right">
                            <div className="ex-box-row column-left">
                                <TilesLayout
                                    title="Integration"
                                    content="Connect applications and data"
                                    iconName="Integration"
                                    redirectLink="docs/Atomsphere/Integration/Getting%20started/c-atm-Integration_and_iPaaS_257fcf2c-7e93-48d0-be67-bd53fb444930"
                                />
                                <TilesLayout
                                    title="API Management"
                                    content="Create, deploy, and manage APIs"
                                    iconName="API Management"
                                    redirectLink="docs/Atomsphere/API%20Management/Topics/c-api-Getting_Started_f06ad982-c0d9-4c67-ab0f-7a19db534868"
                                />
                                <TilesLayout
                                    title="Data Catalog and Preparation"
                                    content="Discover, catalog, and prepare data"
                                    iconName="DCP"
                                    redirectLink="https://help.boomi-dcp.com/#/"
                                />
                            </div>
                        </div>
                        <div className="ex-col-xs-12 ex-col-sm-12 ex-col-md-12 ex-col-lg-6 tiles-container tiles-container-padding-left">
                            <div className="ex-box-row column-right" data-testid="tiles-layout">
                                <TilesLayout
                                    title="DataHub"
                                    content="Synchronize data to keep it consistent and accurate"
                                    iconName="Hub"
                                    redirectLink="docs/Atomsphere/Master%20Data%20Hub/Getting%20started/c-mdm-Getting_started_8f98c194-2f50-4949-b42d-d3925b210d2b"
                                />
                                <TilesLayout
                                    title="Flow"
                                    content="Build apps and automate workflows"
                                    iconName="Flow"
                                    redirectLink="docs/Atomsphere/Flow/topics/c-flo-Getting_Started_f26280db-5b73-46dd-b087-4423f5dc6774"
                                />
                                <TilesLayout
                                    title="Event Streams"
                                    content="Create real-time event-driven integrations"
                                    iconName="Event Streams"
                                    redirectLink="/docs/Atomsphere/Event Streams/es-getting_started_4264b227-9e7a-4705-add9-2bfda9327306"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ex-col-xs-1 ex-col-sm-1 ex-col-md-1 ex-col-lg-1">
                </div>
            </div>
            </div>
        </div>
    );
}
export default CategoryTiles;

// TODO: Make object for data, iterate to populate the page