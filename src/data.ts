/**
 // Variable is numer 
	let myName = 44
	myName = 4789
	// Variable is string
	let myName2 = "Hello"
	myName2 = "Hello World"
*/
export enum ReportType {
	REST = "rest",
	INCOME = "income"
}
export const data: Data = {
	report: [
		{
			id: "uuid1",
			amount: 2500,
			source: "Summary",
			created_at: new Date(),
			updated_at: new Date(),
			type: ReportType.INCOME,
		}, 
		{
			id: "uuid2",
			amount: 7500,
			source: "Salary",
			created_at: new Date(),
			updated_at: new Date(),
			type: ReportType.INCOME,
		},
		{
			id: "uuid3",
			amount: 10000,
			source: "Food",
			created_at: new Date(),
			updated_at: new Date(),
			type: ReportType.REST,
		}
	],
};
interface Data {
	report: {
		id: string;
		type: ReportType;
		amount: number;
		source: string;
		created_at: Date;
		updated_at: Date;
	}[];
}
data.report.push({
	id: "uuid",
	amount: 7500,
	source: "Summary",
	created_at: new Date(),
	updated_at: new Date(),
	type: ReportType.INCOME,
});