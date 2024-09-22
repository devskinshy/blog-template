import React from 'react';
import DefaultHeader from '@/components/layouts/items/DefaultHeader';
import DefaultFooter from '@/components/layouts/items/DefaultFooter';
import DefaultNav from '@/components/layouts/items/DefaultNav';
import DefaultAside from '@/components/layouts/items/DefaultAside';
import DefaultTerminal from '@/components/layouts/items/DefaultTerminal';
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from '@/components/ui/resizable';

function DefaultLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className='flex h-screen w-screen flex-col'>
			<DefaultHeader />
			<ResizablePanelGroup
				direction='vertical'
				className='flex flex-1 flex-col overflow-hidden'>
				<ResizablePanel className='flex flex-1 flex-row overflow-hidden'>
					<DefaultNav />
					<main className='flex-1 overflow-scroll border'>
						{/* <div style={{ width: 10000, height: 10000 }}>{children}</div> */}
						{children}
					</main>
					<DefaultAside />
				</ResizablePanel>
				<ResizableHandle />
				<ResizablePanel>
					<DefaultTerminal />
				</ResizablePanel>
			</ResizablePanelGroup>
			<DefaultFooter />
		</div>
	);
}

export default DefaultLayout;
