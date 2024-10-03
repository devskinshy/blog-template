import React from 'react';
import {
	ResizableHandle,
	ResizablePanelGroup,
} from '@/components/ui/resizable';
import DefaultHeader from '@/components/layouts/items/DefaultHeader';
import DefaultFooter from '@/components/layouts/items/DefaultFooter';
import DefaultNav from '@/components/layouts/items/DefaultNav';
import DefaultAside from '@/components/layouts/items/DefaultAside';
import DefaultContainer from '@/components/layouts/items/DefaultContainer';

function DefaultLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className='flex h-screen w-screen flex-col'>
			<DefaultHeader />
			<ResizablePanelGroup direction='horizontal'>
				<DefaultNav />
				<ResizableHandle />
				<DefaultContainer>{children}</DefaultContainer>
				<ResizableHandle />
				<DefaultAside />
			</ResizablePanelGroup>
			<DefaultFooter />
		</div>
	);
}

export default DefaultLayout;
