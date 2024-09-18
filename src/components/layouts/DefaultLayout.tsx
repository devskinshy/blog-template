import React from 'react';
import DefaultHeader from '@/components/layouts/items/DefaultHeader';
import DefaultFooter from '@/components/layouts/items/DefaultFooter';
import DefaultNav from '@/components/layouts/items/DefaultNav';
import DefaultAside from '@/components/layouts/items/DefaultAside';
import DefaultTerminal from '@/components/layouts/items/DefaultTerminal';

function DefaultLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className='flex h-screen w-screen flex-col'>
			<DefaultHeader />
			<div className='flex flex-1 flex-col overflow-hidden'>
				<div className='flex flex-1 flex-row overflow-hidden'>
					<DefaultNav />
					<main className='flex-1 overflow-scroll border'>
						{/* <div style={{ width: 10000, height: 10000 }}>{children}</div> */}
						<div>{children}</div>
					</main>
					<DefaultAside />
				</div>
				<DefaultTerminal />
			</div>
			<DefaultFooter />
		</div>
	);
}

export default DefaultLayout;
