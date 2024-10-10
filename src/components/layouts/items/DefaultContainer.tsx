import React from 'react';

import DefaultMain from '@/components/layouts/items/DefaultMain';
import DefaultTerminal from '@/components/layouts/items/DefaultTerminal';
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from '@/components/ui/resizable';

function DefaultContainer({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ResizablePanel defaultSize={90}>
			<ResizablePanelGroup direction='vertical'>
				<DefaultMain>{children}</DefaultMain>
				<ResizableHandle />
				<DefaultTerminal />
			</ResizablePanelGroup>
			<main>main</main>
		</ResizablePanel>
	);
}

export default DefaultContainer;
