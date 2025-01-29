import '@generated/client-modules';
import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import "@boomi/exosphere/dist/styles.css";
export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();

    return (
        <>
            <Layout
                description="Description will go into a meta tag in <head />"
            >
                <main>
                    <HomepageFeatures/>
                </main>
            </Layout>
        </>
    );
}
