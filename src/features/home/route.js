import { HomePage } from './';
import PersonDetail from './components/PersonDetail';

export default {
  path: '',
  childRoutes: [
    { path: '', component: HomePage, isIndex: true },
    { path: '/detail', component: PersonDetail},
  ],
};
