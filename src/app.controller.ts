import {v4 as uuid} from 'uuid';
import {ReportType, data} from 'src/data';
import {Get, Put, Post, Delete, Controller, Param, Body, HttpCode} from '@nestjs/common';
@Controller('report/:type')
export class AppController {
	// @Get()
	// getAllIncomeReports(){
	// 	return [];
	// };
	// @Get(':id')
	// getIncomeReportById(){
	// 	return {};
	// };
	@Get()
	getAllReports(@Param('type') type: string){
		const reportType = type === "income" ? ReportType.INCOME : ReportType.REST;
		return data.report.filter((report) => report.type === reportType);
	};
	@Get(':id')
	getReportById(@Param('type') type: string, @Param('id') id: string){
		const reportType = type === "income" ? ReportType.INCOME : ReportType.REST;
		return data.report.filter((report) => report.type === reportType).find(report => report.id === id);
	};
	@Post()
	createReport(@Body() {amount, source}: {
		amount: number; 
		source: string;
	}, @Param('type') type: string){
		const newReport = {
			source,
			amount,
			id: uuid(),
			created_at: new Date(),
			updated_at: new Date(),	
			type: type === "income" ? ReportType.INCOME : ReportType.REST,
		};
		data.report.push(newReport);
		return newReport;
	};
	@Put(':id')
	updateReport(
		@Param('id') id: string,
		@Param('type') type: string,
		@Body() body: {
			amount: number; 
			source: string;
		}
	){
		const reportType = type === 'income' ? ReportType.INCOME : ReportType.REST;
		const reportToupdate = data.report.filter((report) => report.type === reportType).find((report) => report.id === id);
		if(!reportToupdate)
			return;
		const reportIndex = data.report.findIndex((report) => report.id === reportToupdate.id);
		data.report[reportIndex] = {
			...data.report[reportIndex],
			...body,
		};
		return data.report[reportIndex];
	};
	@HttpCode(204)
	@Delete(':id')
	deleteReport(@Param('id') id: string){
		const reportIndex = data.report.findIndex((report) => report.id === id);
		if(reportIndex === -1)
			return;
		data.report.splice(reportIndex, 1);
		return;
	};
};

// http://localhost:3000/report/income
// http://localhost:3000/report/RestAPI