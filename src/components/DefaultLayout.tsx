import React from 'react';

function DefaultLayout() {
	return (
		<div className='flex h-screen w-screen flex-col'>
			<header className='flex flex-row'>Header</header>
			<div className='flex flex-1 flex-col overflow-hidden'>
				<div className='flex flex-1 flex-col overflow-hidden sm:flex-row'>
					<main className='flex-1 overflow-scroll border'>
						<div style={{ width: 10000, height: 10000 }}>main</div>
					</main>
				</div>
			</div>
			<footer className='flex flex-row'>Footer</footer>
		</div>
	);
}

export default DefaultLayout;
