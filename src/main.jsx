import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async () => {
        const response = await fetch(
          'https://raw.githubusercontent.com/ikennarichard/mpox-flexisaf/main/owid-monkeypox-data.json'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch countries');
        }
        return response.json();
      },
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CssBaseline/>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
