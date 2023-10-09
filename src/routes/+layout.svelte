<script>
	import { init as initTheme } from '$lib/theme/index';
	import '../app.postcss';
	initTheme();
</script>

<div
	class="flex flex-col-reverse lg:flex-col max-h-[100dvh] h-[100dvh] pt-[env(safe-area-inset-top)] pr-[env(safe-area-inset-right)] pb-[env(safe-area-inset-bottom)] pl-[env(safe-area-inset-left)]"
>
	<slot />
</div>
