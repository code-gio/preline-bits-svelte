<script lang="ts">
	import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';
	import * as AlertDialog from './index.js';
	import { cn, flyAndScale } from '$lib/utils.js';

	type $$Props = AlertDialogPrimitive.ContentProps;

	let className: $$Props['class'] = undefined;
	export let transition: $$Props['transition'] = flyAndScale;
	export let transitionConfig: $$Props['transitionConfig'] = undefined;
	export { className as class };
</script>

<AlertDialog.Portal>
	<AlertDialog.Overlay />
	<AlertDialogPrimitive.Content
		{transition}
		{transitionConfig}
		class={cn('fixed z-50 w-full  ', className)}
		{...$$restProps}
	>
		<div class="sm:max-w-lg sm:w-full m-3 sm:mx-auto">
			<div
				class="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70"
			>
				<slot />
			</div>
		</div>
	</AlertDialogPrimitive.Content>
</AlertDialog.Portal>
