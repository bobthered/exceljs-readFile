// @ts-ignore
import { theme } from 'sveltewind/stores';
export const init = () => {
	{
		const ringColor = 'ring-gray-300 dark:ring-[#22262a]';
		theme.set({
			_ringColor: ringColor,
			a: 'shadow-none hover:shadow-none relative text-current transition duration-200 hover:text-white focus:text-white before:absolute before:content-[""] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px] before:transition-all before:duration-200 before:bg-primary-500 hover:before:h-full focus:before:h-full',
			button:
				'disabled:before:bg-gray-500 disabled:before:hover:bg-gray-500 disabled:before:focus:bg-gray-500 rounded before:rounded ring-0 relative bg-transparent hover:bg-transparent before:ring before:ring-transparent focus:before:ring-primary-500/[.3] focus:bg-transparent before:content-[""] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-primary-500 before:scale-100 before:transition before:duration-200 hover:before:scale-[1.1] focus:before:scale-[1.1] disabled:hover:before:scale-100 uppercase text-[.875rem] leading-[1.5em] font-semibold py-[.75rem] px-[2.5rem]',
			buttonIcon: 'px-[.75rem]',
			buttonLarge: 'text-[1.125rem]',
			buttonOutline:
				'before:ring-offset-2 before:ring-offset-gray-800 dark:before:ring-offset-white',
			buttonTransparent:
				'before:bg-transparent hover:bg-transparent focus:bg-transparent text-current hover:text-current before:ring-transparent before:focus:ring-gray-800/[.3] before:dark:focus:ring-white/[.3]',
			buttonWhite:
				'selection:bg-gray-800 selection:text-white/[.95] before:bg-white text-gray-800 hover:text-gray-800 focus:text-gray-800 focus:before:ring-white/[.3]',
			card: `shadow-none bg-white dark:bg-gray-800 dark:shadow-none ring-1 ${ringColor}`,
			cardRadialGradient:
				'bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] dark:bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))]',
			checkbox: `ring-offset-gray-300 dark:ring-offset-[#22262a] text-white group-hover:cursor-pointer group-hover:ring-primary-500/[.3] group-focus:ring-primary-500/[.3] group-hover:ring-offset-primary-500 group-focus:ring-offset-primary-500 peer-hover:ring-primary-500/[.3] peer-focus:ring-primary-500/[.3] peer-hover:ring-offset-primary-500 peer-focus:ring-offset-primary-500`,
			checkboxChecked: 'bg-primary-500 dark:bg-primary-500',
			header: `relative px-[1.5rem] py-[0rem] justify-start lg:flex-row pointer-events-auto`,
			icon: 'relative',
			input: 'py-[.5rem]',
			nav: 'flex-row',
			option: 'dark:bg-gray-800',
			overlay: 'fixed top-0 left-0 w-full h-full z-[1]',
			switch:
				'mr-[.5rem] transition duration-200 relative flex bg-gray-500 rounded-full h-[1.5rem] w-[2.5rem] ring ring-transparent peer-focus:ring-gray-500/[.3] before:transition before:duration-200 before:translate-x-0 before:content-[""] before:absolute before:rounded-full before:w-[1rem] before:h-[1rem] before:bg-white before:m-[.25rem]',
			switchChecked: 'bg-primary-500 before:translate-x-full peer-focus:ring-primary-500/[.3]',
			table: 'ring-1 ring-black/[.1] bg-transparent dark:bg-transparent',
			tfoot: 'ring-1 ring-black/[.1] dark:ring-white/[.05]',
			th: 'sticky top-0 border-none z-[1]',
			thead: 'ring-1 ring-black/[.1] dark:ring-white/[.05]',
			tr: 'even:bg-black/[.05] dark:even:bg-white/[.025] hover:bg-primary-500/[.1] hover:even:bg-primary-500/[.1] transition duration-200'
		});
	}
};
