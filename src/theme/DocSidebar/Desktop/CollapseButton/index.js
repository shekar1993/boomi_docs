import React from 'react';
import clsx from 'clsx';
import {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';
import useBaseUrl from "@docusaurus/useBaseUrl";
export default function CollapseButton({onClick}) {
  return (
    <button
      type="button"
      title={translate({
        id: 'theme.docs.sidebar.collapseButtonTitle',
        message: 'Collapse sidebar',
        description: 'The title attribute for collapse button of doc sidebar',
      })}
      aria-label={translate({
        id: 'theme.docs.sidebar.collapseButtonAriaLabel',
        message: 'Collapse sidebar',
        description: 'The title attribute for collapse button of doc sidebar',
      })}
      className={clsx(
        'button button--secondary button--outline',
        styles.collapseSidebarButton,
      )}
      onClick={onClick}>
      <div className={styles.collapseSidebarButtonIcon}>
        <img src={useBaseUrl("img/Move_left.svg")} alt="Collapse Icon" className={styles.collapselightIcon}/>
        <img src={useBaseUrl("img/Move_left_dark.svg")} alt="Collapse Icon" className={styles.collapsedarkIcon}/>
        <label className={clsx(
        'collapse-text',
        styles.collapsecontent 
      )}>Collapse</label>
      </div>  

    </button>
  );
}
