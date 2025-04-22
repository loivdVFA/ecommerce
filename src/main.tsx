import { createRoot } from 'react-dom/client';
import './assets/styles/index.scss'
import { RouterProvider } from 'react-router';
import router from './routes';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const queryClient = new QueryClient()
createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={router} />
    </QueryClientProvider>
)
