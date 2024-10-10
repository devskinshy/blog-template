import React from 'react';

import { ResizablePanel } from '@/components/ui/resizable';

function DefaultTerminal() {
	return (
		<ResizablePanel
			collapsible
			collapsedSize={0}
			defaultSize={0}
			minSize={10}
			maxSize={50}>
			<article>terminal</article>
		</ResizablePanel>
	);
}

export default DefaultTerminal;
