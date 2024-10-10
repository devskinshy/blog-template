import React from 'react';

import DefaultAside from '@/components/layouts/items/DefaultAside';
import DefaultContainer from '@/components/layouts/items/DefaultContainer';
import DefaultFooter from '@/components/layouts/items/DefaultFooter';
import DefaultHeader from '@/components/layouts/items/DefaultHeader';
import DefaultNav from '@/components/layouts/items/DefaultNav';
import {
	ResizableHandle,
	ResizablePanelGroup,
} from '@/components/ui/resizable';
import { TooltipProvider } from '@/components/ui/tooltip';

function DefaultLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className='flex h-screen w-screen flex-col'>
			<TooltipProvider>
				<DefaultHeader />
				<ResizablePanelGroup direction='horizontal'>
					<DefaultNav />
					<ResizableHandle />
					<DefaultContainer>{children}</DefaultContainer>
					<ResizableHandle />
					<DefaultAside />
				</ResizablePanelGroup>
				<DefaultFooter />
			</TooltipProvider>
		</div>
	);
}

export default DefaultLayout;
