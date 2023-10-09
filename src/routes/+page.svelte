<script>
	import Exceljs from 'exceljs';
	// @ts-ignore
	import { Label, Textarea } from 'sveltewind/components';

	// handlers
	const changeHandler = (e) => {
		fileName = e.target.files[0].name;
		model = { loading: true };
		const workbook = new Exceljs.Workbook();
		const reader = new FileReader();

		reader.readAsArrayBuffer(e.target.files[0]);

		reader.onload = async () => {
			const buffer = reader.result;
			await workbook.xlsx.load(buffer);
			model = workbook.model;
		};
	};

	// props (internal)
	let fileName = undefined;
	let model = undefined;
</script>

<svelte:head>
	<title>Exceljs - ReadFile</title>
</svelte:head>

<div class="flex flex-grow flex-col p-[1rem] items-start space-y-[1rem] overflow-auto">
	<Label class="ring-1 ring-primary-500 rounded p-[1rem] cursor-pointer">
		<input
			accept="application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
			class="absolute top-0 left-0 opacity-0 w-0 h-0"
			name="file"
			on:change={changeHandler}
			type="file"
		/>
		<div>Upload file...</div>
	</Label>
	{#if fileName}
		<Textarea
			class="h-full flex flex-grow overflow-auto w-full resize-none"
			value={JSON.stringify(model, null, 2)}
		/>
	{/if}
</div>
