import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { defaultTheme } from '../../styles/themes';

const Providers = ({ children }: PropsWithChildren) => {
    const client = new QueryClient();

    return (
        <QueryClientProvider client={client}>
            <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
        </QueryClientProvider>
    )
}

export default Providers;