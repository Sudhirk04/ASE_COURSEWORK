function RTW_SidParentMap() {
    this.sidParentMap = new Array();
    this.sidParentMap["PID_CONTROLLER:1"] = "PID_CONTROLLER";
    this.sidParentMap["PID_CONTROLLER:2"] = "PID_CONTROLLER";
    this.sidParentMap["PID_CONTROLLER:13"] = "PID_CONTROLLER";
    this.sidParentMap["PID_CONTROLLER:3"] = "PID_CONTROLLER";
    this.sidParentMap["PID_CONTROLLER:4"] = "PID_CONTROLLER";
    this.sidParentMap["PID_CONTROLLER:11"] = "PID_CONTROLLER";
    this.sidParentMap["PID_CONTROLLER:5"] = "PID_CONTROLLER";
    this.sidParentMap["PID_CONTROLLER:6"] = "PID_CONTROLLER";
    this.sidParentMap["PID_CONTROLLER:7"] = "PID_CONTROLLER";
    this.sidParentMap["PID_CONTROLLER:12"] = "PID_CONTROLLER";
    this.sidParentMap["PID_CONTROLLER:14"] = "PID_CONTROLLER";
    this.sidParentMap["PID_CONTROLLER:9"] = "PID_CONTROLLER";
    this.sidParentMap["PID_CONTROLLER:10"] = "PID_CONTROLLER";
    this.getParentSid = function(sid) { return this.sidParentMap[sid];}
}
    RTW_SidParentMap.instance = new RTW_SidParentMap();
