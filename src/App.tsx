import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';

import AppRouting from './AppRouting';
import { store } from './store';
import themes from './themes';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={themes()}>
          <AppRouting />
        </ThemeProvider>
      </Provider>
    </>
  );
}
