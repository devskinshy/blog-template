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
		<div className='grid h-screen w-screen grid-cols-[auto_1fr_auto] grid-rows-[auto_1fr_auto]'>
			<DefaultHeader />
			<nav>nav</nav>
			<main>
				<ResizablePanelGroup direction='vertical'>
					<ResizablePanel defaultSize={75}>
						<ResizablePanelGroup direction='horizontal'>
							<ResizablePanel
								collapsible
								collapsedSize={0}
								defaultSize={0}
								minSize={10}
								maxSize={50}>
								<nav>nav</nav>
							</ResizablePanel>
							<ResizableHandle />
							<ResizablePanel>
								<main>main</main>
							</ResizablePanel>
							<ResizableHandle />
							<ResizablePanel
								collapsible
								collapsedSize={0}
								defaultSize={0}
								minSize={10}
								maxSize={50}>
								<aside>aside</aside>
							</ResizablePanel>
						</ResizablePanelGroup>
					</ResizablePanel>
					<ResizableHandle />
					<ResizablePanel
						collapsible
						collapsedSize={0}
						defaultSize={25}
						minSize={10}
						maxSize={50}>
						<article>terminal</article>
					</ResizablePanel>
				</ResizablePanelGroup>
			</main>
			<aside>aside</aside>
			<DefaultFooter />
		</div>
	);
}

export default DefaultLayout;
