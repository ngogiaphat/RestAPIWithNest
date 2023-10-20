import {v4 as uuid} from "uuid";
import {ReportType} from "src/data";
import {AppService} from "./app.service";
import {
	Get,
	Put,
	Post,
	Delete,
	Controller,
	Param,
	Body,
	HttpCode,
	ParseIntPipe,
} from "@nestjs/common";
@Controller("report/:type")
export class AppController {
  getHello(): any {
    throw new Error("Method not implemented.");
  }
	// @Get()
	// getAllIncomeReports(){
	// 	return [];
	// };
	// @Get(':id')
	// getIncomeReportById(){
	// 	return {};
	// };
	constructor(private readonly appService: AppService){}
	@Get()
	getAllReports(@Param("type") type: string){
		const reportType = type === "income" ? ReportType.INCOME : ReportType.REST;
		return this.appService.getAllReports(reportType);
	}
	@Get(":id")
	getReportById(@Param("type") type: string, @Param("id", ParseIntPipe) id: string){
		console.log(id, typeof id);
		const reportType = type === "income" ? ReportType.INCOME : ReportType.REST;
		return this.appService.getReportById(reportType, id);
	}
	@Post()
	createReport(
		@Body()
		{
			amount,
			source,
		}: {
			amount: number;
			source: string;
		},
		@Param("type") type: string,
	) {
		const reportType = type === "income" ? ReportType.INCOME : ReportType.REST;
		return this.appService.createReport(reportType, {
      amount, source,
    });
	}
	@Put(":id")
	updateReport(
		@Param("id") id: string,
		@Param("type") type: string,
		@Body()
		body: {
			amount: number;
			source: string;
		},
	){
		const reportType = type === "income" ? ReportType.INCOME : ReportType.REST;
		return this.appService.updateReport(reportType, id, body);
	}
	@HttpCode(204)
	@Delete(":id")
	deleteReport(@Param("id") id: string){
		return this.appService.deleteReport(id);
	}
}
// http://localhost:3000/report/income
// http://localhost:3000/report/RestAPI