import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
    if (window.OneTrust === undefined) {
        const head = document.getElementsByTagName('head')[0];

        const otAutoBlockScript = document.createElement('script');
        otAutoBlockScript.type = 'text/javascript';
        otAutoBlockScript.src = 'https://cdn.cookielaw.org/consent/4300d728-460e-4df8-aa7b-3a77aaf3659b/OtAutoBlock.js';
        head.appendChild(otAutoBlockScript);

        const otSDKStubScript = document.createElement('script');
        otSDKStubScript.src = 'https://cdn.cookielaw.org/scripttemplates/otSDKStub.js';
        otSDKStubScript.type = 'text/javascript';
        otSDKStubScript.charSet = 'UTF-8';
        otSDKStubScript.dataset.domainScript = '4300d728-460e-4df8-aa7b-3a77aaf3659b';
        head.appendChild(otSDKStubScript);

        const optanonWrapperScript = document.createElement('script');
        optanonWrapperScript.type = 'text/javascript';
        optanonWrapperScript.textContent = 'function OptanonWrapper() {}';
        head.appendChild(optanonWrapperScript);
    }
}