'use client';

import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
	Command,
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from '@/components/ui/command';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';

function DefaultHeader() {
	const [toggle, setToggle] = useState(false);

	return (
		<header className='flex justify-center border-b-[1px] p-1 align-middle'>
			<Popover open={toggle} onOpenChange={setToggle}>
				<PopoverTrigger asChild>
					<Button
						variant='outline'
						role='combobox'
						aria-expanded={toggle}
						className='relative h-8 w-96 justify-center rounded-[0.5rem] bg-muted/50 align-middle text-sm font-normal text-muted-foreground shadow-none'
					>
						<span className='hidden lg:inline-flex'>
							Search documentation...
						</span>
						<span className='inline-flex lg:hidden'>Search...</span>
						<kbd className='pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex'>
							<span className='text-xs'>⌘</span>K
						</kbd>
					</Button>
				</PopoverTrigger>
				<PopoverContent className='w-[200px] p-0'>
					<Command>
						<CommandInput placeholder='Search framework...' />
						<CommandList>
							<CommandEmpty>No framework found.</CommandEmpty>
							<CommandGroup>
								{/* {frameworks.map(framework => ( */}
								{/* 	<CommandItem */}
								{/* 		key={framework.value} */}
								{/* 		value={framework.value} */}
								{/* 		onSelect={currentValue => { */}
								{/* 			setValue(currentValue === value ? '' : currentValue); */}
								{/* 			setOpen(false); */}
								{/* 		}} */}
								{/* 	> */}
								{/* 		<Check */}
								{/* 			className={cn( */}
								{/* 				'mr-2 h-4 w-4', */}
								{/* 				value === framework.value ? 'opacity-100' : 'opacity-0', */}
								{/* 			)} */}
								{/* 		/> */}
								{/* 		{framework.label} */}
								{/* 	</CommandItem> */}
								{/* ))} */}
							</CommandGroup>
						</CommandList>
					</Command>
				</PopoverContent>
			</Popover>
		</header>
	);
}

export default DefaultHeader;
