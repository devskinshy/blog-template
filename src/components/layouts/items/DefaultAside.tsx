import React from 'react';
import { ResizablePanel } from '@/components/ui/resizable';

function DefaultAside() {
	return (
		<ResizablePanel
			collapsible
			collapsedSize={5}
			defaultSize={5}
			minSize={10}
			maxSize={50}>
			<aside>aside</aside>
		</ResizablePanel>
	);
}

export default DefaultAside;
