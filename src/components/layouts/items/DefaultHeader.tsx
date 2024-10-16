import React from 'react';

import { Button } from '@/components/ui/button';

function DefaultHeader() {
	return (
		<header className='flex justify-center border-b-[1px] p-1 align-middle'>
			<Button
				variant='outline'
				className='relative h-8 w-96 justify-center rounded-[0.5rem] bg-muted/50 align-middle text-sm font-normal text-muted-foreground shadow-none'
			>
				<span className='hidden lg:inline-flex'>Search documentation...</span>
				<span className='inline-flex lg:hidden'>Search...</span>
				<kbd className='pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex'>
					<span className='text-xs'>⌘</span>K
				</kbd>
			</Button>
		</header>
	);
}

export default DefaultHeader;
