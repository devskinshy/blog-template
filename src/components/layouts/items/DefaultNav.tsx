import React from 'react';
import { ResizablePanel } from '@/components/ui/resizable';

function DefaultNav() {
	return (
		<ResizablePanel
			collapsible
			collapsedSize={5}
			defaultSize={5}
			minSize={10}
			maxSize={50}>
			<nav>nav</nav>
		</ResizablePanel>
	);
}

export default DefaultNav;
