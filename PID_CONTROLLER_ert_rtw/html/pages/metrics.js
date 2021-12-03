function CodeMetrics() {
	 this.metricsArray = {};
	 this.metricsArray.var = new Array();
	 this.metricsArray.fcn = new Array();
	 this.metricsArray.var["PID_CONTROLLER_DW"] = {file: "G:\\matlab\\ASE_COURSEWORK\\PID_CONTROLLER_ert_rtw\\PID_CONTROLLER.c",
	size: 16};
	 this.metricsArray.var["PID_CONTROLLER_U"] = {file: "G:\\matlab\\ASE_COURSEWORK\\PID_CONTROLLER_ert_rtw\\PID_CONTROLLER.c",
	size: 8};
	 this.metricsArray.var["PID_CONTROLLER_Y"] = {file: "G:\\matlab\\ASE_COURSEWORK\\PID_CONTROLLER_ert_rtw\\PID_CONTROLLER.c",
	size: 8};
	 this.metricsArray.fcn["PID_CONTROLLER_initialize"] = {file: "G:\\matlab\\ASE_COURSEWORK\\PID_CONTROLLER_ert_rtw\\PID_CONTROLLER.c",
	stack: 0,
	stackTotal: 0};
	 this.metricsArray.fcn["PID_CONTROLLER_step"] = {file: "G:\\matlab\\ASE_COURSEWORK\\PID_CONTROLLER_ert_rtw\\PID_CONTROLLER.c",
	stack: 0,
	stackTotal: 0};
	 this.metricsArray.fcn["PID_CONTROLLER_terminate"] = {file: "G:\\matlab\\ASE_COURSEWORK\\PID_CONTROLLER_ert_rtw\\PID_CONTROLLER.c",
	stack: 0,
	stackTotal: 0};
	 this.getMetrics = function(token) { 
		 var data;
		 data = this.metricsArray.var[token];
		 if (!data) {
			 data = this.metricsArray.fcn[token];
			 if (data) data.type = "fcn";
		 } else { 
			 data.type = "var";
		 }
	 return data; }; 
	 this.codeMetricsSummary = '<a href="javascript:void(0)" onclick="return postParentWindowMessage({message:\'gotoReportPage\', pageName:\'PID_CONTROLLER_metrics\'});">Global Memory: 32(bytes) Maximum Stack: 0(bytes)</a>';
	}
CodeMetrics.instance = new CodeMetrics();
