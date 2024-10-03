import React from 'react';
import { ResizablePanel } from '@/components/ui/resizable';

function DefaultMain({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ResizablePanel defaultSize={100}>
			<main>{children}</main>
		</ResizablePanel>
	);
}

export default DefaultMain;
