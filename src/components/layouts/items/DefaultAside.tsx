import React from 'react';
import { ResizablePanel } from '@/components/ui/resizable';
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import {
	Book,
	Bot,
	Code2,
	LifeBuoy,
	Settings2,
	SquareTerminal,
	SquareUser,
} from 'lucide-react';

function DefaultAside() {
	return (
		<ResizablePanel
			collapsible
			collapsedSize={5}
			defaultSize={5}
			minSize={10}
			maxSize={50}>
			<aside>
				<nav className='grid gap-1 p-2'>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								variant='ghost'
								size='icon'
								className='rounded-lg bg-muted'
								aria-label='Playground'>
								<SquareTerminal className='size-5' />
							</Button>
						</TooltipTrigger>
						<TooltipContent side='right' sideOffset={5}>
							Playground
						</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								variant='ghost'
								size='icon'
								className='rounded-lg'
								aria-label='Models'>
								<Bot className='size-5' />
							</Button>
						</TooltipTrigger>
						<TooltipContent side='right' sideOffset={5}>
							Models
						</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								variant='ghost'
								size='icon'
								className='rounded-lg'
								aria-label='API'>
								<Code2 className='size-5' />
							</Button>
						</TooltipTrigger>
						<TooltipContent side='right' sideOffset={5}>
							API
						</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								variant='ghost'
								size='icon'
								className='rounded-lg'
								aria-label='Documentation'>
								<Book className='size-5' />
							</Button>
						</TooltipTrigger>
						<TooltipContent side='right' sideOffset={5}>
							Documentation
						</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								variant='ghost'
								size='icon'
								className='rounded-lg'
								aria-label='Settings'>
								<Settings2 className='size-5' />
							</Button>
						</TooltipTrigger>
						<TooltipContent side='right' sideOffset={5}>
							Settings
						</TooltipContent>
					</Tooltip>
				</nav>
				<nav className='mt-auto grid gap-1 p-2'>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								variant='ghost'
								size='icon'
								className='mt-auto rounded-lg'
								aria-label='Help'>
								<LifeBuoy className='size-5' />
							</Button>
						</TooltipTrigger>
						<TooltipContent side='right' sideOffset={5}>
							Help
						</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								variant='ghost'
								size='icon'
								className='mt-auto rounded-lg'
								aria-label='Account'>
								<SquareUser className='size-5' />
							</Button>
						</TooltipTrigger>
						<TooltipContent side='right' sideOffset={5}>
							Account
						</TooltipContent>
					</Tooltip>
				</nav>
			</aside>
		</ResizablePanel>
	);
}

export default DefaultAside;
