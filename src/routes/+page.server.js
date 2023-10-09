import Exceljs from 'exceljs';

export const actions = {
	default: async ({ request }) => {
		const { file } = Object.fromEntries(await request.formData());

		try {
			console.log(file);
			const workbook = new Exceljs.Workbook();
			await workbook.xlsx.load(file);
		} catch (error) {
			console.error(error);
		}

		return { success: true };
	}
};
