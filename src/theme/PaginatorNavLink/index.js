import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function PaginatorNavLink(props) {
  const {permalink, title, subLabel, isNext} = props;
  const leftCaretLightMode = useBaseUrl("img/left_caret.svg");
  const leftCaretDarkMode = useBaseUrl("img/left_caret_dark.svg");
  const rightCaretLightMode = useBaseUrl("img/right_caret.svg");
  const rightCaretDarkMode = useBaseUrl("img/right_caret_dark.svg");
  return (
    <Link
      className={clsx(
        'pagination-nav__link',
        isNext ? 'pagination-nav__link--next' : 'pagination-nav__link--prev',
      )}
      to={permalink}>
      <div className={clsx(isNext ? 'next-button' : 'prev-button')}>
        {!isNext && <img src={leftCaretLightMode} className='left-caret-light-mode'/>}
        {!isNext && <img src={leftCaretDarkMode} className='left-caret-dark-mode'/>}
        <div className={clsx(isNext ? 'next-button-margin' : 'prev-button-margin')}>{subLabel && <div className="pagination-nav__sublabel">{subLabel}</div>}
        <div className="pagination-nav__label">{title}</div>
        </div>
        {isNext && <img src={rightCaretLightMode} className='right-caret-light-mode'/>}
        {isNext && <img src={rightCaretDarkMode} className='right-caret-dark-mode'/> }
      </div>
    </Link>
  );
}

