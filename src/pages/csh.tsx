import React from "react";
import routes from '../../sidebars';
import mismatchedGuidRoutes from '../../scripts/route-map.json';

export default function Csh() {
    let urlPattern = new URLSearchParams(window.location.search);
    let GUID = null;
    let TOPIC_NAME = null;
    if (urlPattern.get("context")) {
        GUID = window.location.search.split('=')[1].split('GUID-')[1] || null;
    }
    if (urlPattern.get("topicname")) {
        TOPIC_NAME = window.location.search.split('topicname')[1].split('=')[1] || null;
    }

    const iterate = (obj ) => {
        Object.keys(obj).forEach(key => {
            let extractedTopicName = '';
            try {
                const splitObj = obj[key].split('/');
                extractedTopicName = splitObj[splitObj.length - 1].split('_').slice(0, -1).join('_');
            }
            catch(e) {
                extractedTopicName = null;
            }

            if ((GUID && obj[key].includes && obj[key].includes(GUID)) || (extractedTopicName && TOPIC_NAME && obj[key].includes && extractedTopicName === TOPIC_NAME)) {
                const route = `/docs/${obj[key]}`;
                location.assign(route);
                return;
            } else if ((GUID && key.includes && key.includes(GUID)) || (TOPIC_NAME && key.includes && key === TOPIC_NAME)) {
                const route = `/docs/${key}`;
                location.assign(route);
                return;
            }

            if (typeof obj[key] === 'object' && obj[key] !== null) {
                iterate(obj[key])
            }
        });
    }

    if (mismatchedGuidRoutes[GUID]) {
        location.assign(mismatchedGuidRoutes[GUID]);
    }
    else {
        iterate(routes);
    }
    return (<p>Redirecting...</p>);
}