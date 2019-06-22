import React from 'react';
import styles from './icon.module.css';

export default ({ ...props }) => (
	<svg
		className={`${styles.icon} ${styles.w18} ${
			props.className ? props.className : ''
		}`}
		viewBox="0 0 256 512"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fill="currentColor"
			d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z"
		/>
	</svg>
);
