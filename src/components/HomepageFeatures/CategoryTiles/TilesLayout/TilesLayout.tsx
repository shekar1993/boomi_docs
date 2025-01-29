import React from 'react';
import "./TilesLayout.css";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

interface TilesLayoutProps {
    title: string;
    content: string;
    iconName: string;
    redirectLink: string;
}

const TilesLayout: React.FC<TilesLayoutProps> = (props) =>  {
    return (
        <div className="tiles-layout-wrapper" data-testid="tiles-layout-wrapper">
            <ex-tile target="_self" title="">
            <Link to={useBaseUrl(props.redirectLink)} aria-label="category-tiles-navigation-link">
                <div className='content-wrapper'>
                    <span className="inline-block">
                        <ex-icon icon={props.iconName} variant="default" class="icon-colored" role="presentation"></ex-icon>
                    </span>
                    <span className="text-container"> <h4 className="some-space">{props.title}</h4> 
                    <div className="text-body">
                        {props.content}
                    </div>
                    </span>
                </div>
                </Link>
            </ex-tile>
          
        </div>
    )
}
export default TilesLayout;