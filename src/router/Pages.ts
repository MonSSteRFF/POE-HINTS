import Essence from '@/pages/Essence/Essence';
import Home from '@/pages/Home/Home';
import ListOfFeatures from '@/pages/ListOfFeatures/ListOfFeatures';

export enum Page {
  Home = '/',
  Essence = '/Essence',
  ListOfFeatures = '/ListOfFeatures',
}

export const Pages = [
  { name: 'Home', page: Home, route: Page.Home },
  { name: 'Essence', page: Essence, route: Page.Essence },
  { name: 'ListOfFeatures', page: ListOfFeatures, route: Page.ListOfFeatures },
];
