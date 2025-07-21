import { Provider } from 'react-redux';
import RootNavigator from './navigation/RootNavigator';
import { store } from './redux/store';

const App = () => <Provider store={store}><RootNavigator /></Provider>;

export default App;

