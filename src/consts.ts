// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Gauthier BIENVENU – Portfolio';

import jobIconRaw from './assets/icons/job-title-icon.svg?raw';
import companyIconRaw from './assets/icons/company-icon.svg?raw';
import locationIconRaw from './assets/icons/location-icon.svg?raw';
import { sanitizeToOutline } from './lib/svg';

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
};