// #region imports
import loadable from 'loadable-components';
// #endregion

export const Landing = loadable(() => import('../components/landingPage'));
export const Resources = loadable(() => import('../components/resources'));
export const AboutUs = loadable(() => import('../components/aboutus'));
export const ContactUs = loadable(() => import('../components/contactus'));
export const GenomicDatabase = loadable(() => import('../components/database/genomic/genomic.js'));
export const GenicDatabase = loadable(() => import('../components/database/genic/genic.js'));
export const Analysis = loadable(() => import('../components/analysis'));
export const Tutorial = loadable(() => import('../components/tutorial'));
