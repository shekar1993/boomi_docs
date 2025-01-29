/**
 * The purpose of this script is to generate a route-map.json that contains GUIDs mismatch
 * in the filename and the embedded GUID.
 * GUIDs are embedded in .md files as meta tags. Example:
 * <meta name="context" content="GUID-3e5c39ce-d73b-42b2-a6fd-c8393c931229"/>
 * GUIDs are also part of the file name without 'GUID-' prefix. Example:
 * .../int-API_versioning_and_deprecation_policy_3e5c39ce-d73b-42b2-a6fd-c8393c931229.md
 * These GUIDs are used to redirect to the route of the above .md file. Example:
 * /csh?context=GUID-3e5c39ce-d73b-42b2-a6fd-c8393c931229 -> should redirect to
 * Atomsphere/Integration/AtomSphere API/int-API_versioning_and_deprecation_policy_3e5c39ce-d73b-42b2-a6fd-c8393c931229
 */
const { resolve } = require('path');
const fs = require('fs');
const { readdir } = require('fs').promises;
let path = require('path');

async function* getFiles(dir) {
    const dirents = await readdir(dir, { withFileTypes: true });
    for (const dirent of dirents) {
        const res = resolve(dir, dirent.name);
        if (dirent.isDirectory()) {
            yield* getFiles(res);
        } else {
            yield res;
        }
    }
};


const mapOfFoldersAndUrls = {
    '/docs/Atomsphere/Integration/Connectors': ['bundle/connectors/page/'],
    '/docs/Atomsphere/Platform': ['bundle/atomsphere_platform/page/'],
    '/docs/Atomsphere/Spaces': ['bundle/boomi_spaces/page/'],
    '/docs/Atomsphere/Flow/topics': ['bundle/flow/page/'],
    '/docs/Atomsphere/Event Streams': ['bundle/event_streams/page/'],
    '/docs/Atomsphere/Release Notes/Apr2023': ['bundle/release-notes/page/atm-Whats_new_in_Apr_2023.html'],
    '/docs/Atomsphere/Release Notes/Aug2023': ['bundle/release-notes/page/atm-Whats_new_in_Aug_2023.html'],
    '/docs/Atomsphere/Release Notes/Feb2023': ['bundle/release-notes/page/atm-Whats_new_in_Feb_2023.html'],
    '/docs/Atomsphere/Release Notes/Jul2023': ['bundle/release-notes/page/atm-Whats_new_in_Jul_2023.html'],
    '/docs/Atomsphere/Release Notes/Jun2023': ['bundle/release-notes/page/atm-Whats_new_in_Jun_2023.html'],
    '/docs/Atomsphere/Release Notes/Mar2023': ['bundle/release-notes/page/atm-Whats_new_in_Mar_2023.html'],
    '/docs/Atomsphere/Release Notes/May2023': ['bundle/release-notes/page/atm-Whats_new_in_May_2023.html'],
    '/docs/Atomsphere/Release Notes/Oct2023': ['bundle/release-notes/page/atm-Whats_new_in_Oct_2023.html'],
    '/docs/Atomsphere/Release Notes/Sep2023': ['bundle/release-notes/page/atm-Whats_new_in_Sep_2023.html'],
    '/docs/Atomsphere/Integration/Atom, Molecule, and Atom Cloud setup': ['bundle/integration/page/'],
    '/docs/Atomsphere/Integration/AtomSphere API': ['bundle/integration/page/'],
    '/docs/Atomsphere/Integration/Connectors': ['bundle/integration/page/'],
    '/docs/Atomsphere/Integration/Deployment': ['bundle/integration/page/'],
    '/docs/Atomsphere/Integration/Event-based integration': ['bundle/integration/page/'],
    '/docs/Atomsphere/Integration/Getting started': ['bundle/integration/page/'],
    '/docs/Atomsphere/Integration/Integration management': ['bundle/integration/page/'],
    '/docs/Atomsphere/Integration/Integration packs': ['bundle/integration/page/'],
    '/docs/Atomsphere/Integration/Process building': ['bundle/integration/page/'],
    '/docs/Atomsphere/Master Data Hub/Deployment': ['bundle/hub/page/'],
    '/docs/Atomsphere/Master Data Hub/Getting started': ['bundle/hub/page/'],
    '/docs/Atomsphere/Master Data Hub/Governance': ['bundle/hub/page/'],
    '/docs/Atomsphere/Master Data Hub/Hub system': ['bundle/hub/page/'],
    '/docs/Atomsphere/Master Data Hub/Maps': ['bundle/hub/page/'],
    '/docs/Atomsphere/Master Data Hub/Menu': ['bundle/hub/page/'],
    '/docs/Atomsphere/Master Data Hub/Modeling': ['bundle/hub/page/'],
    '/docs/Atomsphere/Master Data Hub/REST APIs': ['bundle/hub/page/'],
    '/docs/Atomsphere/Master Data Hub/Stewardship': ['bundle/hub/page/'],
    '/docs/Atomsphere/Master Data Hub/Synchronization': ['bundle/hub/page/'],
    '/docs/Atomsphere/Integration/AtomSphere API': ['bundle/developer_apis/page/'],
    '/docs/Atomsphere/Master Data Hub/REST APIs': ['bundle/developer_apis/page/'],
    '/docs/Atomsphere/API Management/Topics': ['bundle/developer_apis/page/'],
    '/docs/Atomsphere/Event Streams': ['bundle/developer_apis/page/'],
};
let numberOfRedirects = 0;
const generateRedirects = (fileName) => {
    const actualRoute = fileName.split('boomi_docs')[1].split('.md')[0];
    const folderPath = fileName.split('boomi_docs')[1].split('/').slice(0, -1).join('/');
    const topicNameHtml = fileName.split('/')[fileName.split('/').length - 1].split('_').slice(0, -1).join('_') + '.html';

    if (!folderPath.includes('Release Notes') && mapOfFoldersAndUrls[folderPath]) {
        console.log(mapOfFoldersAndUrls[folderPath][0] + topicNameHtml, encodeURI(actualRoute), ' 301!');
        numberOfRedirects++;
    }
    else if (folderPath.includes('Release Notes') && mapOfFoldersAndUrls[folderPath] && fileName.includes('Whats_new_in_')) {
        console.log(mapOfFoldersAndUrls[folderPath][0], encodeURI(actualRoute), ' 301!');
        numberOfRedirects++;
    }
}

(async () => {
    let totalMdFiles = 0;
    let mismatchCount = 0;
    const GUIDMap = {};
    for await (const fileName of getFiles(path.join(__dirname,'../docs'))) {
        if (fileName.endsWith(".md")) {
            totalMdFiles++;
            const fileNameSplit = fileName.split('_');

            generateRedirects(fileName);

            const fileGUID = fileNameSplit[fileNameSplit.length -1];
            try {
                const data = fs.readFileSync(fileName, 'utf8');
                const embeddedGUID = data.match(/name="context" content="(.*?)"/)[1].split("GUID-")[1];
                if (fileGUID.split(".md")[0].toLowerCase() !== embeddedGUID) {
                    GUIDMap[embeddedGUID] = fileName.split("/boomi_docs")[1].split(".md")[0];
                    mismatchCount++;
                }
            } catch (err) {}
        }
    }

    fs.writeFile('scripts/route-map.json', JSON.stringify(GUIDMap), 'utf8', (data, err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(`${mismatchCount} routes dumped to route-map.json`);
            console.log(`${numberOfRedirects} redirects generated`);
        }
    });
})();