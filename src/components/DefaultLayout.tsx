import React from 'react';

function DefaultLayout() {
	return (
		<div className='flex h-screen w-screen flex-col'>
			<header className='flex flex-row'>Header</header>
			<div className='flex flex-1 flex-col overflow-hidden'>
				<div className='flex flex-1 flex-col overflow-hidden sm:flex-row'>
					<nav className='max-h-10 max-w-full flex-initial overflow-scroll border sm:max-h-full sm:max-w-40'>
						<div>
							<div style={{ width: 10000, height: 10000 }}>LeftSideBar</div>
							LeftSideBar
						</div>
					</nav>
					<main className='flex-1 overflow-scroll border'>
						<div style={{ width: 10000, height: 10000 }}>main</div>
					</main>
					<aside className='max-h-10 max-w-full flex-initial overflow-scroll border sm:max-h-full sm:max-w-40'>
						<div>
							<div style={{ width: 10000, height: 10000 }}>RightSideBar</div>
							RightSideBar
						</div>
					</aside>
				</div>
				<article className='max-h-10 max-w-full flex-initial overflow-scroll border'>
					<div>
						<div style={{ width: 10000, height: 10000 }}>terminal</div>
						terminal
					</div>
				</article>
			</div>
			<footer className='flex flex-row'>Footer</footer>
		</div>
	);
}

export default DefaultLayout;
