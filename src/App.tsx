import AppNavigation from './router/index';
import { Provider as SidebarProvider } from './store/sidebar.reducer';

function App() {
  return (
    <SidebarProvider>
      <AppNavigation />
    </SidebarProvider>
  );
}

export default App;
