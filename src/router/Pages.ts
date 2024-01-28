import Essence from '@/pages/Essence/Essence';
import Home from '@/pages/Home/Home';

export enum Page {
  Home = '/',
  Essence = 'Essence',
}

export const Pages = [
  { name: 'Home', page: Home, route: Page.Home },
  { name: 'Essence', page: Essence, route: Page.Essence },
];
