import { initializeHeadlessEngine } from './Engine';
import { buildSearchEngine } from '@coveo/headless';

jest.mock('@coveo/headless', () => ({
  buildSearchEngine: jest.fn(),
}));

describe('initializeHeadlessEngine', () => {
  const CoveoOrgIdProd = 'prod-org-id';
  const CoveoOrgIdNonProd = 'nonprod-org-id';
  const CoveoAccessTokenProd = 'prod-access-token';
  const CoveoAccessTokenNonProd = 'nonprod-access-token';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should use production credentials when on production hostname', async () => {
    // Mock the hostname
    Object.defineProperty(window, 'location', {
      value: { hostname: 'help.boomi.com' },
      writable: true,
    });

    await initializeHeadlessEngine(
      CoveoOrgIdProd,
      CoveoOrgIdNonProd,
      CoveoAccessTokenProd,
      CoveoAccessTokenNonProd
    );

    expect(buildSearchEngine).toHaveBeenCalledWith({
      configuration: {
        platformUrl: 'https://platform.cloud.coveo.com',
        organizationId: CoveoOrgIdProd,
        accessToken: CoveoAccessTokenProd,
        search: {
          searchHub: 'BoomiKnowledgeHubGuest',
        },
      },
    });
  });

  it('should use non-production credentials when not on production hostname', async () => {
    // Mock the hostname
    Object.defineProperty(window, 'location', {
      value: { hostname: 'test.boomi.com' },
      writable: true,
    });

    await initializeHeadlessEngine(
      CoveoOrgIdProd,
      CoveoOrgIdNonProd,
      CoveoAccessTokenProd,
      CoveoAccessTokenNonProd
    );

    expect(buildSearchEngine).toHaveBeenCalledWith({
      configuration: {
        platformUrl: 'https://platform.cloud.coveo.com',
        organizationId: CoveoOrgIdNonProd,
        accessToken: CoveoAccessTokenNonProd,
        search: {
          searchHub: 'BoomiKnowledgeHubGuest',
        },
      },
    });
  });


  it('should throw an error if buildSearchEngine fails', async () => {
    Object.defineProperty(window, 'location', {
      value: { hostname: 'help.boomi.com' },
      writable: true,
    });

    buildSearchEngine.mockImplementation(() => {
      throw new Error('BuildSearchEngineError');
    });

    await expect(
      initializeHeadlessEngine(
        CoveoOrgIdProd,
        CoveoOrgIdNonProd,
        CoveoAccessTokenProd,
        CoveoAccessTokenNonProd
      )
    ).rejects.toThrow('BuildSearchEngineError');
  });
});
