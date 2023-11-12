import {v4 as uuid} from "uuid";
import {Injectable} from "@nestjs/common";
import {ReportType, data} from "src/data";
interface Report {
	amount: number;
	source: string;
}
@Injectable()
export class AppService {
	getAllReports(type: ReportType){
		return data.report.filter((report) => report.type === type);
	}
	getReportById(type: ReportType, id: string){
		return data.report.filter((report) => report.type === type).find((report) => report.id === id);
	}
	createReport(type: ReportType, {amount, source}: Report) {
		const newReport = {
			source,
			amount,
			id: uuid(),
			created_at: new Date(),
			updated_at: new Date(),
			type,
		};
		data.report.push(newReport);
		return newReport;
	}
	updateReport(type: ReportType, id: string, body: Report) {
		const reportToupdate = data.report.filter((report) => report.type === type).find((report) => report.id === id);
		if (!reportToupdate) return;
		const reportIndex = data.report.findIndex((report) => report.id === reportToupdate.id);
		data.report[reportIndex] = {
			...data.report[reportIndex],
			...body,
			updated_at: new Date(),
		};
		return data.report[reportIndex];
	}	deleteReport(id: string){
		const reportIndex = data.report.findIndex((report) => report.id === id);
		if(reportIndex === -1){
      return;
    }
		data.report.splice(reportIndex, 1);
		return;
	}
}