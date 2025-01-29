import React, {useState} from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import { useHomePageRoute } from "@docusaurus/theme-common/internal";
import { useSidebarBreadcrumbs } from "@docusaurus/plugin-content-docs/client";
import Link from '@docusaurus/Link';
import {translate} from '@docusaurus/Translate';
import HomeBreadcrumbItem from '@theme/DocBreadcrumbs/Items/Home';
import styles from './styles.module.css';

function BreadcrumbsItemLink({children, href, isLast}) {
  const className = 'breadcrumbs__link';
  if (isLast) {
    return (
      <span className={className} itemProp="name">
        {children}
      </span>
    );
  }
  return href ? (
    <Link className={className} href={href} itemProp="item">
      <span itemProp="name">{children}</span>
    </Link>
  ) : (
    // Google search console doesn't like breadcrumb items without href.
    // The schema doesn't seem to require `id` for each `item`, although Google
    // insist to infer one, even if it's invalid. Removing `itemProp="item
    // name"` for now, since I don't know how to properly fix it.
    // See https://github.com/facebook/docusaurus/issues/7241
    <span className={className}>{children}</span>
  );
}

function BreadcrumbsItem({children, active, index, addMicrodata}) {
  return (
    <li
      {...(addMicrodata && {
        itemScope: true,
        itemProp: 'itemListElement',
        itemType: 'https://schema.org/ListItem',
      })}
      className={clsx('breadcrumbs__item', {
        'breadcrumbs__item--active': active,
      })}>
      {children}
      <meta itemProp="position" content={String(index + 1)} />
    </li>
  );
}
export default function DocBreadcrumbs() {
  const breadcrumbs = useSidebarBreadcrumbs();
  const [showFullBreadCrumbs, setShowFullBreadCrumbs] = useState(breadcrumbs && breadcrumbs.length>3 ? false : true);
  const breadcrumbLength = breadcrumbs && breadcrumbs.length - 1;
  const homePageRoute = useHomePageRoute();


  if (!breadcrumbs) {
    return null;
  }

  const handleExpandBreadcrumbClick = () => {
    setShowFullBreadCrumbs(true);
  };

  return (
    <nav
      className={clsx(
        ThemeClassNames.docs.docBreadcrumbs,
        styles.breadcrumbsContainer,
      )}
      id="docs-breadcrumbs-wrapper"
      aria-label={translate({
        id: 'theme.docs.breadcrumbs.navAriaLabel',
        message: 'Breadcrumbs',
        description: 'The ARIA label for the breadcrumbs',
      })}>
      <ul
        className="breadcrumbs"
        itemScope
        itemType="https://schema.org/BreadcrumbList">
        {homePageRoute && <HomeBreadcrumbItem />}
        {showFullBreadCrumbs? breadcrumbs.map((item, idx) => {
          const isLast = idx === breadcrumbs.length - 1;
   
          return (
            <BreadcrumbsItem
              key={item.label}
              active={isLast}
              index={idx}
              addMicrodata={!!item.href}>
              <BreadcrumbsItemLink href={item.href} isLast={isLast}>
                {item.label}
              </BreadcrumbsItemLink>
            </BreadcrumbsItem>
          );
        }) : 
        <> <BreadcrumbsItem
              key={0}
              active={false}
              index={0}
              addMicrodata={!!breadcrumbs[0].href}>
              <BreadcrumbsItemLink href={breadcrumbs[0].href} isLast={false}>
                {breadcrumbs[0].label}
              </BreadcrumbsItemLink>
            </BreadcrumbsItem>

             <span onClick={handleExpandBreadcrumbClick} className="breadcrumbElipsis">...</span>

            <BreadcrumbsItem
              key={breadcrumbLength}
              active={true}
              index={breadcrumbLength}
              addMicrodata={!!breadcrumbs[breadcrumbLength].href}>
              <BreadcrumbsItemLink href={breadcrumbs[breadcrumbLength].href} isLast={true}>
                {breadcrumbs[breadcrumbLength].label}
              </BreadcrumbsItemLink>
            </BreadcrumbsItem>
            </>}
      </ul>
    </nav>
  );
}
