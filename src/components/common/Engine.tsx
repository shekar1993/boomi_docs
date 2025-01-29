import {buildSearchEngine} from '@coveo/headless';

export async function initializeHeadlessEngine(
  CoveoOrgIdProd,
  CoveoOrgIdNonProd,
  CoveoAccessTokenProd,
  CoveoAccessTokenNonProd
) {
  let organizationId: string;
  let accessToken: string;

  if (window.location.hostname === 'help.boomi.com') {
    organizationId = CoveoOrgIdProd;
    accessToken = CoveoAccessTokenProd;
  } else {
    organizationId = CoveoOrgIdNonProd;
    accessToken = CoveoAccessTokenNonProd;
  }

  return buildSearchEngine({
    configuration: {
      platformUrl: 'https://platform.cloud.coveo.com',
      organizationId: organizationId,
      accessToken: accessToken,
      search: {
        searchHub: "BoomiKnowledgeHubGuest"
      }
    },
  });
}