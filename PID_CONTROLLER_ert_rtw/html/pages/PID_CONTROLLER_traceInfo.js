function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/ek */
	this.urlHashMap["PID_CONTROLLER:1"] = "PID_CONTROLLER.c:38,41,56,60,64,66&PID_CONTROLLER.h:39";
	/* <Root>/Derivative_Gain */
	this.urlHashMap["PID_CONTROLLER:2"] = "msg=rtwMsg_CodeGenerationReducedBlock&block=PID_CONTROLLER:2";
	/* <Root>/Gain1 */
	this.urlHashMap["PID_CONTROLLER:13"] = "msg=rtwMsg_CodeGenerationReducedBlock&block=PID_CONTROLLER:13";
	/* <Root>/Intregal_Gain */
	this.urlHashMap["PID_CONTROLLER:3"] = "PID_CONTROLLER.c:36,41";
	/* <Root>/Proportional_Gain */
	this.urlHashMap["PID_CONTROLLER:4"] = "PID_CONTROLLER.c:55,60";
	/* <Root>/Sat_I */
	this.urlHashMap["PID_CONTROLLER:11"] = "PID_CONTROLLER.c:43,44,46,47,49,52";
	/* <Root>/Sum */
	this.urlHashMap["PID_CONTROLLER:5"] = "PID_CONTROLLER.c:35,41,45,46,48,49";
	/* <Root>/Sum1 */
	this.urlHashMap["PID_CONTROLLER:6"] = "PID_CONTROLLER.c:57,60,61";
	/* <Root>/Sum2 */
	this.urlHashMap["PID_CONTROLLER:7"] = "msg=rtwMsg_CodeGenerationReducedBlock&block=PID_CONTROLLER:7";
	/* <Root>/Time */
	this.urlHashMap["PID_CONTROLLER:12"] = "PID_CONTROLLER.c:37,41";
	/* <Root>/Unit Delay */
	this.urlHashMap["PID_CONTROLLER:14"] = "PID_CONTROLLER.c:39,58,61&PID_CONTROLLER.h:33";
	/* <Root>/Unit_Delay_D */
	this.urlHashMap["PID_CONTROLLER:9"] = "PID_CONTROLLER.c:63,66&PID_CONTROLLER.h:34";
	/* <Root>/Con_Output */
	this.urlHashMap["PID_CONTROLLER:10"] = "PID_CONTROLLER.c:54,60&PID_CONTROLLER.h:44";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "PID_CONTROLLER"};
	this.sidHashMap["PID_CONTROLLER"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<Root>/ek"] = {sid: "PID_CONTROLLER:1"};
	this.sidHashMap["PID_CONTROLLER:1"] = {rtwname: "<Root>/ek"};
	this.rtwnameHashMap["<Root>/Derivative_Gain"] = {sid: "PID_CONTROLLER:2"};
	this.sidHashMap["PID_CONTROLLER:2"] = {rtwname: "<Root>/Derivative_Gain"};
	this.rtwnameHashMap["<Root>/Gain1"] = {sid: "PID_CONTROLLER:13"};
	this.sidHashMap["PID_CONTROLLER:13"] = {rtwname: "<Root>/Gain1"};
	this.rtwnameHashMap["<Root>/Intregal_Gain"] = {sid: "PID_CONTROLLER:3"};
	this.sidHashMap["PID_CONTROLLER:3"] = {rtwname: "<Root>/Intregal_Gain"};
	this.rtwnameHashMap["<Root>/Proportional_Gain"] = {sid: "PID_CONTROLLER:4"};
	this.sidHashMap["PID_CONTROLLER:4"] = {rtwname: "<Root>/Proportional_Gain"};
	this.rtwnameHashMap["<Root>/Sat_I"] = {sid: "PID_CONTROLLER:11"};
	this.sidHashMap["PID_CONTROLLER:11"] = {rtwname: "<Root>/Sat_I"};
	this.rtwnameHashMap["<Root>/Sum"] = {sid: "PID_CONTROLLER:5"};
	this.sidHashMap["PID_CONTROLLER:5"] = {rtwname: "<Root>/Sum"};
	this.rtwnameHashMap["<Root>/Sum1"] = {sid: "PID_CONTROLLER:6"};
	this.sidHashMap["PID_CONTROLLER:6"] = {rtwname: "<Root>/Sum1"};
	this.rtwnameHashMap["<Root>/Sum2"] = {sid: "PID_CONTROLLER:7"};
	this.sidHashMap["PID_CONTROLLER:7"] = {rtwname: "<Root>/Sum2"};
	this.rtwnameHashMap["<Root>/Time"] = {sid: "PID_CONTROLLER:12"};
	this.sidHashMap["PID_CONTROLLER:12"] = {rtwname: "<Root>/Time"};
	this.rtwnameHashMap["<Root>/Unit Delay"] = {sid: "PID_CONTROLLER:14"};
	this.sidHashMap["PID_CONTROLLER:14"] = {rtwname: "<Root>/Unit Delay"};
	this.rtwnameHashMap["<Root>/Unit_Delay_D"] = {sid: "PID_CONTROLLER:9"};
	this.sidHashMap["PID_CONTROLLER:9"] = {rtwname: "<Root>/Unit_Delay_D"};
	this.rtwnameHashMap["<Root>/Con_Output"] = {sid: "PID_CONTROLLER:10"};
	this.sidHashMap["PID_CONTROLLER:10"] = {rtwname: "<Root>/Con_Output"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
