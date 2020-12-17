import { create } from '@storybook/theming/create';
import RidecellLogo from './RClogo.svg';

export default create({
  base: 'light',
  brandTitle: 'Ridecell component library',
  brandUrl: 'https://google.com',
  brandImage: RidecellLogo,
  barSelectedColor: 'rgba(108,192,74,1.0)',
  barBg: 'hotpink'
});