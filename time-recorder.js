var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Data;
        (function (Data) {
            (function (EPlatform) {
                EPlatform[EPlatform["Android"] = 0] = "Android";
                EPlatform[EPlatform["iOS"] = 1] = "iOS";
                EPlatform[EPlatform["WindowsPhone"] = 2] = "WindowsPhone";
            })(Data.EPlatform || (Data.EPlatform = {}));
            var EPlatform = Data.EPlatform;
            (function (EFieldType) {
                EFieldType[EFieldType["Number"] = 1] = "Number";
                EFieldType[EFieldType["String"] = 2] = "String";
                EFieldType[EFieldType["Boolean"] = 3] = "Boolean";
                EFieldType[EFieldType["DateTime"] = 4] = "DateTime";
            })(Data.EFieldType || (Data.EFieldType = {}));
            var EFieldType = Data.EFieldType;
            (function (EThresholdType) {
                EThresholdType[EThresholdType["DailyDone"] = 0] = "DailyDone";
                EThresholdType[EThresholdType["TotalMonthDone"] = 1] = "TotalMonthDone";
            })(Data.EThresholdType || (Data.EThresholdType = {}));
            var EThresholdType = Data.EThresholdType;
            (function (ETimeBookingRule) {
                ETimeBookingRule[ETimeBookingRule["OvertimeRule"] = 0] = "OvertimeRule";
                ETimeBookingRule[ETimeBookingRule["NightWorkRule"] = 1] = "NightWorkRule";
                ETimeBookingRule[ETimeBookingRule["SaturdayWorkRule"] = 2] = "SaturdayWorkRule";
                ETimeBookingRule[ETimeBookingRule["SundayWorkRule"] = 3] = "SundayWorkRule";
            })(Data.ETimeBookingRule || (Data.ETimeBookingRule = {}));
            var ETimeBookingRule = Data.ETimeBookingRule;
            (function (EEffortType) {
                EEffortType[EEffortType["Work"] = 0] = "Work";
                EEffortType[EEffortType["Additional"] = 1] = "Additional";
                EEffortType[EEffortType["Absence"] = 2] = "Absence";
            })(Data.EEffortType || (Data.EEffortType = {}));
            var EEffortType = Data.EEffortType;
            (function (ETimeBookingState) {
                ETimeBookingState[ETimeBookingState["Open"] = 0] = "Open";
                ETimeBookingState[ETimeBookingState["Unconfirmed"] = 1] = "Unconfirmed";
                ETimeBookingState[ETimeBookingState["Confirmed"] = 2] = "Confirmed";
                ETimeBookingState[ETimeBookingState["Complete"] = 3] = "Complete";
                ETimeBookingState[ETimeBookingState["Faulted"] = 4] = "Faulted";
            })(Data.ETimeBookingState || (Data.ETimeBookingState = {}));
            var ETimeBookingState = Data.ETimeBookingState;
            (function (EInvoiceType) {
                EInvoiceType[EInvoiceType["Regie"] = 0] = "Regie";
                EInvoiceType[EInvoiceType["Pauschal"] = 1] = "Pauschal";
            })(Data.EInvoiceType || (Data.EInvoiceType = {}));
            var EInvoiceType = Data.EInvoiceType;
            (function (EProjectFlag) {
                EProjectFlag[EProjectFlag["Bookable"] = 1] = "Bookable";
                EProjectFlag[EProjectFlag["Explicit"] = 2] = "Explicit";
                EProjectFlag[EProjectFlag["PlanningUnit"] = 4] = "PlanningUnit";
            })(Data.EProjectFlag || (Data.EProjectFlag = {}));
            var EProjectFlag = Data.EProjectFlag;
            (function (EWorkReportState) {
                EWorkReportState[EWorkReportState["Open"] = 0] = "Open";
                EWorkReportState[EWorkReportState["Closed"] = 1] = "Closed";
            })(Data.EWorkReportState || (Data.EWorkReportState = {}));
            var EWorkReportState = Data.EWorkReportState;
            (function (ESaldoType) {
                ESaldoType[ESaldoType["DefaultCh"] = 0] = "DefaultCh";
                ESaldoType[ESaldoType["DefaultDe"] = 1] = "DefaultDe";
                ESaldoType[ESaldoType["Enzler"] = 2] = "Enzler";
            })(Data.ESaldoType || (Data.ESaldoType = {}));
            var ESaldoType = Data.ESaldoType;
            (function (EAppUserType) {
                EAppUserType[EAppUserType["WebOnly"] = 0] = "WebOnly";
                EAppUserType[EAppUserType["Terminal"] = 1] = "Terminal";
                EAppUserType[EAppUserType["Personal"] = 2] = "Personal";
            })(Data.EAppUserType || (Data.EAppUserType = {}));
            var EAppUserType = Data.EAppUserType;
            (function (EStampType) {
                EStampType[EStampType["Start"] = 1] = "Start";
                EStampType[EStampType["Stop"] = 2] = "Stop";
                EStampType[EStampType["StartError"] = 3] = "StartError";
                EStampType[EStampType["StopError"] = 4] = "StopError";
            })(Data.EStampType || (Data.EStampType = {}));
            var EStampType = Data.EStampType;
            (function (EAuftragVerificationStatus) {
                EAuftragVerificationStatus[EAuftragVerificationStatus["Success"] = 0] = "Success";
                EAuftragVerificationStatus[EAuftragVerificationStatus["ArbeitsgangNotValid"] = 1] = "ArbeitsgangNotValid";
                EAuftragVerificationStatus[EAuftragVerificationStatus["AuftragNotValid"] = 2] = "AuftragNotValid";
                EAuftragVerificationStatus[EAuftragVerificationStatus["PositionNotValid"] = 4] = "PositionNotValid";
                EAuftragVerificationStatus[EAuftragVerificationStatus["ArbeitsgangNotExist"] = 8] = "ArbeitsgangNotExist";
                EAuftragVerificationStatus[EAuftragVerificationStatus["AuftragNotExist"] = 16] = "AuftragNotExist";
                EAuftragVerificationStatus[EAuftragVerificationStatus["PositionNotExist"] = 32] = "PositionNotExist";
                EAuftragVerificationStatus[EAuftragVerificationStatus["CommunicationError"] = -1] = "CommunicationError";
            })(Data.EAuftragVerificationStatus || (Data.EAuftragVerificationStatus = {}));
            var EAuftragVerificationStatus = Data.EAuftragVerificationStatus;
            ;
            var VersionResource = (function () {
                function VersionResource($requestSender) {
                    this.$requestSender = $requestSender;
                }
                VersionResource.prototype.getLatestPlistRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Version/GetLatestPlist";
                    if (angular.isDefined(params.versionCode1)) {
                        url = Triarc.Data.appendUrlParameter(url, "versionCode1", encodeURIComponent(params.versionCode1));
                    }
                    if (angular.isDefined(params.versionCode2)) {
                        url = Triarc.Data.appendUrlParameter(url, "versionCode2", encodeURIComponent(params.versionCode2));
                    }
                    if (angular.isDefined(params.versionCode3)) {
                        url = Triarc.Data.appendUrlParameter(url, "versionCode3", encodeURIComponent(params.versionCode3));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Version", "any", false);
                    return dataRequest;
                };
                VersionResource.prototype.getLatestPlist = function (params) {
                    var request = this.getLatestPlistRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                VersionResource.prototype.getLatestVersionNumberRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Version/GetLatestVersionNumber";
                    if (angular.isDefined(params.includeBetas)) {
                        url = Triarc.Data.appendUrlParameter(url, "includeBetas", encodeURIComponent(params.includeBetas));
                    }
                    if (angular.isDefined(params.platform)) {
                        url = Triarc.Data.appendUrlParameter(url, "platform", encodeURIComponent(params.platform));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Version", "IVersionVm", false);
                    return dataRequest;
                };
                VersionResource.prototype.getLatestVersionNumber = function (params) {
                    var request = this.getLatestVersionNumberRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                VersionResource.prototype.getServerVersionRequest = function () {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Version/GetServerVersion";
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Version", "string", false);
                    return dataRequest;
                };
                VersionResource.prototype.getServerVersion = function () {
                    var request = this.getServerVersionRequest();
                    return this.$requestSender.requestValue(request);
                };
                VersionResource.prototype.getVersionsMultipleRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Version/GetVersions";
                    if (angular.isDefined(params.$skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "$skip", encodeURIComponent(params.$skip));
                    }
                    if (angular.isDefined(params.$top)) {
                        url = Triarc.Data.appendUrlParameter(url, "$top", encodeURIComponent(params.$top));
                    }
                    if (angular.isDefined(params.$orderBy)) {
                        url = Triarc.Data.appendUrlParameter(url, "$orderBy", encodeURIComponent(params.$orderBy));
                    }
                    if (angular.isDefined(params.$filter)) {
                        url = Triarc.Data.appendUrlParameter(url, "$filter", encodeURIComponent(params.$filter));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Version", "IVersionVm[]", false);
                    return dataRequest;
                };
                VersionResource.prototype.getVersionsMultiple = function (params) {
                    var request = this.getVersionsMultipleRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                VersionResource.prototype.newVersionVm = function () {
                    return {};
                };
                return VersionResource;
            })();
            Data.VersionResource = VersionResource;
            ;
            var ImageResource = (function () {
                function ImageResource($requestSender) {
                    this.$requestSender = $requestSender;
                }
                ImageResource.prototype.getRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Image/Get";
                    if (angular.isDefined(params.id)) {
                        url = Triarc.Data.appendUrlParameter(url, "id", encodeURIComponent(params.id));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Image", "any", false);
                    return dataRequest;
                };
                ImageResource.prototype.get = function (params) {
                    var request = this.getRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                return ImageResource;
            })();
            Data.ImageResource = ImageResource;
            ;
            var EmployeeResource = (function () {
                function EmployeeResource($requestSender) {
                    this.$requestSender = $requestSender;
                }
                EmployeeResource.prototype.getEmployeeByIdRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Employee/GetEmployeeById";
                    if (angular.isDefined(params.id)) {
                        url = Triarc.Data.appendUrlParameter(url, "id", encodeURIComponent(params.id));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Employee", "IEmployeeCm", false);
                    return dataRequest;
                };
                EmployeeResource.prototype.getEmployeeById = function (params) {
                    var request = this.getEmployeeByIdRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                EmployeeResource.prototype.getEmployeesByIdMultipleRequest = function (params, data) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Employee/GetEmployeesById";
                    if (angular.isDefined(params.$skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "$skip", encodeURIComponent(params.$skip));
                    }
                    if (angular.isDefined(params.$top)) {
                        url = Triarc.Data.appendUrlParameter(url, "$top", encodeURIComponent(params.$top));
                    }
                    if (angular.isDefined(params.$orderBy)) {
                        url = Triarc.Data.appendUrlParameter(url, "$orderBy", encodeURIComponent(params.$orderBy));
                    }
                    if (angular.isDefined(params.$filter)) {
                        url = Triarc.Data.appendUrlParameter(url, "$filter", encodeURIComponent(params.$filter));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, data, "Employee", "IEmployeeCm[]", true);
                    return dataRequest;
                };
                EmployeeResource.prototype.getEmployeesByIdMultiple = function (params, data) {
                    var request = this.getEmployeesByIdMultipleRequest(params, data);
                    return this.$requestSender.requestValue(request);
                };
                EmployeeResource.prototype.getMultipleRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Employee/Get";
                    if (angular.isDefined(params.$skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "$skip", encodeURIComponent(params.$skip));
                    }
                    if (angular.isDefined(params.$top)) {
                        url = Triarc.Data.appendUrlParameter(url, "$top", encodeURIComponent(params.$top));
                    }
                    if (angular.isDefined(params.$orderBy)) {
                        url = Triarc.Data.appendUrlParameter(url, "$orderBy", encodeURIComponent(params.$orderBy));
                    }
                    if (angular.isDefined(params.$filter)) {
                        url = Triarc.Data.appendUrlParameter(url, "$filter", encodeURIComponent(params.$filter));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Employee", "IEmployeeCm[]", false);
                    return dataRequest;
                };
                EmployeeResource.prototype.getMultiple = function (params) {
                    var request = this.getMultipleRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                EmployeeResource.prototype.searchMultipleRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Employee/Search";
                    if (angular.isDefined(params.search)) {
                        url = Triarc.Data.appendUrlParameter(url, "search", encodeURIComponent(params.search));
                    }
                    if (angular.isDefined(params.skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "skip", encodeURIComponent(params.skip));
                    }
                    if (angular.isDefined(params.take)) {
                        url = Triarc.Data.appendUrlParameter(url, "take", encodeURIComponent(params.take));
                    }
                    if (angular.isDefined(params.$skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "$skip", encodeURIComponent(params.$skip));
                    }
                    if (angular.isDefined(params.$top)) {
                        url = Triarc.Data.appendUrlParameter(url, "$top", encodeURIComponent(params.$top));
                    }
                    if (angular.isDefined(params.$orderBy)) {
                        url = Triarc.Data.appendUrlParameter(url, "$orderBy", encodeURIComponent(params.$orderBy));
                    }
                    if (angular.isDefined(params.$filter)) {
                        url = Triarc.Data.appendUrlParameter(url, "$filter", encodeURIComponent(params.$filter));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, {}, "Employee", "IEmployeeCm[]", false);
                    return dataRequest;
                };
                EmployeeResource.prototype.searchMultiple = function (params) {
                    var request = this.searchMultipleRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                EmployeeResource.prototype.putRequest = function (data) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Employee/Put";
                    var dataRequest = new Triarc.Data.DataRequest("PUT", url, data, "Employee", "any", true);
                    return dataRequest;
                };
                EmployeeResource.prototype.put = function (data) {
                    var request = this.putRequest(data);
                    return this.$requestSender.requestValue(request);
                };
                EmployeeResource.prototype.deleteRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Employee/Delete";
                    if (angular.isDefined(params.id)) {
                        url = Triarc.Data.appendUrlParameter(url, "id", encodeURIComponent(params.id));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("DELETE", url, {}, "Employee", "any", false);
                    return dataRequest;
                };
                EmployeeResource.prototype.delete = function (params) {
                    var request = this.deleteRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                EmployeeResource.prototype.newEmployeeCm = function () {
                    return {};
                };
                EmployeeResource.prototype.newSearchIdSet = function () {
                    return {};
                };
                EmployeeResource.prototype.newFeatureClaimVm = function () {
                    return {};
                };
                return EmployeeResource;
            })();
            Data.EmployeeResource = EmployeeResource;
            ;
            var AddressResource = (function () {
                function AddressResource($requestSender) {
                    this.$requestSender = $requestSender;
                }
                AddressResource.prototype.searchAddressesMultipleRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Address/SearchAddresses";
                    if (angular.isDefined(params.searchString)) {
                        url = Triarc.Data.appendUrlParameter(url, "searchString", encodeURIComponent(params.searchString));
                    }
                    if (angular.isDefined(params.$skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "$skip", encodeURIComponent(params.$skip));
                    }
                    if (angular.isDefined(params.$top)) {
                        url = Triarc.Data.appendUrlParameter(url, "$top", encodeURIComponent(params.$top));
                    }
                    if (angular.isDefined(params.$orderBy)) {
                        url = Triarc.Data.appendUrlParameter(url, "$orderBy", encodeURIComponent(params.$orderBy));
                    }
                    if (angular.isDefined(params.$filter)) {
                        url = Triarc.Data.appendUrlParameter(url, "$filter", encodeURIComponent(params.$filter));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, {}, "Address", "IAddressCm[]", false);
                    return dataRequest;
                };
                AddressResource.prototype.searchAddressesMultiple = function (params) {
                    var request = this.searchAddressesMultipleRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                AddressResource.prototype.getMultipleRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Address/Get";
                    if (angular.isDefined(params.$skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "$skip", encodeURIComponent(params.$skip));
                    }
                    if (angular.isDefined(params.$top)) {
                        url = Triarc.Data.appendUrlParameter(url, "$top", encodeURIComponent(params.$top));
                    }
                    if (angular.isDefined(params.$orderBy)) {
                        url = Triarc.Data.appendUrlParameter(url, "$orderBy", encodeURIComponent(params.$orderBy));
                    }
                    if (angular.isDefined(params.$filter)) {
                        url = Triarc.Data.appendUrlParameter(url, "$filter", encodeURIComponent(params.$filter));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Address", "IAddressCm[]", false);
                    return dataRequest;
                };
                AddressResource.prototype.getMultiple = function (params) {
                    var request = this.getMultipleRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                AddressResource.prototype.getRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Address/Get";
                    if (angular.isDefined(params.id)) {
                        url = Triarc.Data.appendUrlParameter(url, "id", encodeURIComponent(params.id));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Address", "IAddressCm", false);
                    return dataRequest;
                };
                AddressResource.prototype.get = function (params) {
                    var request = this.getRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                AddressResource.prototype.newAddressCm = function () {
                    return {};
                };
                return AddressResource;
            })();
            Data.AddressResource = AddressResource;
            ;
            var TimesheetResource = (function () {
                function TimesheetResource($requestSender) {
                    this.$requestSender = $requestSender;
                }
                TimesheetResource.prototype.getTimesheetRequest = function (data) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Timesheet/GetTimesheet";
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, data, "Timesheet", "ITimesheetCm", true);
                    return dataRequest;
                };
                TimesheetResource.prototype.getTimesheet = function (data) {
                    var request = this.getTimesheetRequest(data);
                    return this.$requestSender.requestValue(request);
                };
                TimesheetResource.prototype.syncAbsencesRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Timesheet/SyncAbsences";
                    if (angular.isDefined(params.badgeId)) {
                        url = Triarc.Data.appendUrlParameter(url, "badgeId", encodeURIComponent(params.badgeId));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Timesheet", "any", false);
                    return dataRequest;
                };
                TimesheetResource.prototype.syncAbsences = function (params) {
                    var request = this.syncAbsencesRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                TimesheetResource.prototype.syncAllAbsencesRequest = function () {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Timesheet/SyncAllAbsences";
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Timesheet", "any", false);
                    return dataRequest;
                };
                TimesheetResource.prototype.syncAllAbsences = function () {
                    var request = this.syncAllAbsencesRequest();
                    return this.$requestSender.requestValue(request);
                };
                TimesheetResource.prototype.newTimesheetCm = function () {
                    return {};
                };
                TimesheetResource.prototype.newTimesheetSearchCriteria = function () {
                    return {};
                };
                return TimesheetResource;
            })();
            Data.TimesheetResource = TimesheetResource;
            ;
            var PdfGeneratorResource = (function () {
                function PdfGeneratorResource($requestSender) {
                    this.$requestSender = $requestSender;
                }
                PdfGeneratorResource.prototype.generatePdfRequest = function (data) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/PdfGenerator/GeneratePdf";
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, data, "PdfGenerator", "any", true);
                    return dataRequest;
                };
                PdfGeneratorResource.prototype.generatePdf = function (data) {
                    var request = this.generatePdfRequest(data);
                    return this.$requestSender.requestValue(request);
                };
                PdfGeneratorResource.prototype.newPdfGeneratorCriteria = function () {
                    return {};
                };
                return PdfGeneratorResource;
            })();
            Data.PdfGeneratorResource = PdfGeneratorResource;
            ;
            var TimeBookingResource = (function () {
                function TimeBookingResource($requestSender) {
                    this.$requestSender = $requestSender;
                }
                TimeBookingResource.prototype.searchMultipleRequest = function (params, data) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/TimeBooking/Search";
                    if (angular.isDefined(params.$skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "$skip", encodeURIComponent(params.$skip));
                    }
                    if (angular.isDefined(params.$top)) {
                        url = Triarc.Data.appendUrlParameter(url, "$top", encodeURIComponent(params.$top));
                    }
                    if (angular.isDefined(params.$orderBy)) {
                        url = Triarc.Data.appendUrlParameter(url, "$orderBy", encodeURIComponent(params.$orderBy));
                    }
                    if (angular.isDefined(params.$filter)) {
                        url = Triarc.Data.appendUrlParameter(url, "$filter", encodeURIComponent(params.$filter));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, data, "TimeBooking", "ITimeBookingCm[]", true);
                    return dataRequest;
                };
                TimeBookingResource.prototype.searchMultiple = function (params, data) {
                    var request = this.searchMultipleRequest(params, data);
                    return this.$requestSender.requestValue(request);
                };
                TimeBookingResource.prototype.saveMultipleRequest = function (params, data) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/TimeBooking/Save";
                    if (angular.isDefined(params.$skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "$skip", encodeURIComponent(params.$skip));
                    }
                    if (angular.isDefined(params.$top)) {
                        url = Triarc.Data.appendUrlParameter(url, "$top", encodeURIComponent(params.$top));
                    }
                    if (angular.isDefined(params.$orderBy)) {
                        url = Triarc.Data.appendUrlParameter(url, "$orderBy", encodeURIComponent(params.$orderBy));
                    }
                    if (angular.isDefined(params.$filter)) {
                        url = Triarc.Data.appendUrlParameter(url, "$filter", encodeURIComponent(params.$filter));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, data, "TimeBooking", "ITimeBookingCm[]", true);
                    return dataRequest;
                };
                TimeBookingResource.prototype.saveMultiple = function (params, data) {
                    var request = this.saveMultipleRequest(params, data);
                    return this.$requestSender.requestValue(request);
                };
                TimeBookingResource.prototype.deleteRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/TimeBooking/Delete";
                    if (angular.isDefined(params.id)) {
                        url = Triarc.Data.appendUrlParameter(url, "id", encodeURIComponent(params.id));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, {}, "TimeBooking", "any", false);
                    return dataRequest;
                };
                TimeBookingResource.prototype.delete = function (params) {
                    var request = this.deleteRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                TimeBookingResource.prototype.getTimeEntryTypesMultipleRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/TimeBooking/GetTimeEntryTypes";
                    if (angular.isDefined(params.$skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "$skip", encodeURIComponent(params.$skip));
                    }
                    if (angular.isDefined(params.$top)) {
                        url = Triarc.Data.appendUrlParameter(url, "$top", encodeURIComponent(params.$top));
                    }
                    if (angular.isDefined(params.$orderBy)) {
                        url = Triarc.Data.appendUrlParameter(url, "$orderBy", encodeURIComponent(params.$orderBy));
                    }
                    if (angular.isDefined(params.$filter)) {
                        url = Triarc.Data.appendUrlParameter(url, "$filter", encodeURIComponent(params.$filter));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "TimeBooking", "ITimeEntryTypeCm[]", false);
                    return dataRequest;
                };
                TimeBookingResource.prototype.getTimeEntryTypesMultiple = function (params) {
                    var request = this.getTimeEntryTypesMultipleRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                TimeBookingResource.prototype.getForMultipleRequest = function (params, data) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/TimeBooking/GetFor";
                    if (angular.isDefined(params.$skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "$skip", encodeURIComponent(params.$skip));
                    }
                    if (angular.isDefined(params.$top)) {
                        url = Triarc.Data.appendUrlParameter(url, "$top", encodeURIComponent(params.$top));
                    }
                    if (angular.isDefined(params.$orderBy)) {
                        url = Triarc.Data.appendUrlParameter(url, "$orderBy", encodeURIComponent(params.$orderBy));
                    }
                    if (angular.isDefined(params.$filter)) {
                        url = Triarc.Data.appendUrlParameter(url, "$filter", encodeURIComponent(params.$filter));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, data, "TimeBooking", "ITimeBookingCm[]", true);
                    return dataRequest;
                };
                TimeBookingResource.prototype.getForMultiple = function (params, data) {
                    var request = this.getForMultipleRequest(params, data);
                    return this.$requestSender.requestValue(request);
                };
                TimeBookingResource.prototype.getUnBilledCompletedBookingsMultipleRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/TimeBooking/GetUnBilledCompletedBookings";
                    if (angular.isDefined(params.employeeId)) {
                        url = Triarc.Data.appendUrlParameter(url, "employeeId", encodeURIComponent(params.employeeId));
                    }
                    if (angular.isDefined(params.projectId)) {
                        url = Triarc.Data.appendUrlParameter(url, "projectId", encodeURIComponent(params.projectId));
                    }
                    if (angular.isDefined(params.$skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "$skip", encodeURIComponent(params.$skip));
                    }
                    if (angular.isDefined(params.$top)) {
                        url = Triarc.Data.appendUrlParameter(url, "$top", encodeURIComponent(params.$top));
                    }
                    if (angular.isDefined(params.$orderBy)) {
                        url = Triarc.Data.appendUrlParameter(url, "$orderBy", encodeURIComponent(params.$orderBy));
                    }
                    if (angular.isDefined(params.$filter)) {
                        url = Triarc.Data.appendUrlParameter(url, "$filter", encodeURIComponent(params.$filter));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "TimeBooking", "ITimeBookingCm[]", false);
                    return dataRequest;
                };
                TimeBookingResource.prototype.getUnBilledCompletedBookingsMultiple = function (params) {
                    var request = this.getUnBilledCompletedBookingsMultipleRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                TimeBookingResource.prototype.getBilledTimeBookingsMultipleRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/TimeBooking/GetBilledTimeBookings";
                    if (angular.isDefined(params.id)) {
                        url = Triarc.Data.appendUrlParameter(url, "id", encodeURIComponent(params.id));
                    }
                    if (angular.isDefined(params.$skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "$skip", encodeURIComponent(params.$skip));
                    }
                    if (angular.isDefined(params.$top)) {
                        url = Triarc.Data.appendUrlParameter(url, "$top", encodeURIComponent(params.$top));
                    }
                    if (angular.isDefined(params.$orderBy)) {
                        url = Triarc.Data.appendUrlParameter(url, "$orderBy", encodeURIComponent(params.$orderBy));
                    }
                    if (angular.isDefined(params.$filter)) {
                        url = Triarc.Data.appendUrlParameter(url, "$filter", encodeURIComponent(params.$filter));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "TimeBooking", "ITimeBookingCm[]", false);
                    return dataRequest;
                };
                TimeBookingResource.prototype.getBilledTimeBookingsMultiple = function (params) {
                    var request = this.getBilledTimeBookingsMultipleRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                TimeBookingResource.prototype.getCorrispondingUnvisumedTimeBookingsForCriteriaMultipleRequest = function (params, data) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/TimeBooking/GetCorrispondingUnvisumedTimeBookingsForCriteria";
                    if (angular.isDefined(params.$skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "$skip", encodeURIComponent(params.$skip));
                    }
                    if (angular.isDefined(params.$top)) {
                        url = Triarc.Data.appendUrlParameter(url, "$top", encodeURIComponent(params.$top));
                    }
                    if (angular.isDefined(params.$orderBy)) {
                        url = Triarc.Data.appendUrlParameter(url, "$orderBy", encodeURIComponent(params.$orderBy));
                    }
                    if (angular.isDefined(params.$filter)) {
                        url = Triarc.Data.appendUrlParameter(url, "$filter", encodeURIComponent(params.$filter));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, data, "TimeBooking", "ITimeBookingCm[]", true);
                    return dataRequest;
                };
                TimeBookingResource.prototype.getCorrispondingUnvisumedTimeBookingsForCriteriaMultiple = function (params, data) {
                    var request = this.getCorrispondingUnvisumedTimeBookingsForCriteriaMultipleRequest(params, data);
                    return this.$requestSender.requestValue(request);
                };
                TimeBookingResource.prototype.newTimeBookingCm = function () {
                    return {};
                };
                TimeBookingResource.prototype.newTimeEntryTypeCm = function () {
                    return {};
                };
                TimeBookingResource.prototype.newTimeBookingSearchParams = function () {
                    return {};
                };
                TimeBookingResource.prototype.newIdsContainer = function () {
                    return {};
                };
                return TimeBookingResource;
            })();
            Data.TimeBookingResource = TimeBookingResource;
            ;
            var AdminResource = (function () {
                function AdminResource($requestSender) {
                    this.$requestSender = $requestSender;
                }
                AdminResource.prototype.seedDatabaseRequest = function () {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Admin/SeedDatabase";
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Admin", "any", false);
                    return dataRequest;
                };
                AdminResource.prototype.seedDatabase = function () {
                    var request = this.seedDatabaseRequest();
                    return this.$requestSender.requestValue(request);
                };
                AdminResource.prototype.webServiceEnabledRequest = function () {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Admin/WebServiceEnabled";
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Admin", "boolean", false);
                    return dataRequest;
                };
                AdminResource.prototype.webServiceEnabled = function () {
                    var request = this.webServiceEnabledRequest();
                    return this.$requestSender.requestValue(request);
                };
                AdminResource.prototype.webServiceAvailableRequest = function () {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Admin/WebServiceAvailable";
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Admin", "boolean", false);
                    return dataRequest;
                };
                AdminResource.prototype.webServiceAvailable = function () {
                    var request = this.webServiceAvailableRequest();
                    return this.$requestSender.requestValue(request);
                };
                AdminResource.prototype.triggerPersonImportRequest = function () {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Admin/TriggerPersonImport";
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, {}, "Admin", "boolean", false);
                    return dataRequest;
                };
                AdminResource.prototype.triggerPersonImport = function () {
                    var request = this.triggerPersonImportRequest();
                    return this.$requestSender.requestValue(request);
                };
                AdminResource.prototype.triggerProjectImportRequest = function () {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Admin/TriggerProjectImport";
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, {}, "Admin", "boolean", false);
                    return dataRequest;
                };
                AdminResource.prototype.triggerProjectImport = function () {
                    var request = this.triggerProjectImportRequest();
                    return this.$requestSender.requestValue(request);
                };
                AdminResource.prototype.getServerVersionRequest = function () {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Admin/GetServerVersion";
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Admin", "string", false);
                    return dataRequest;
                };
                AdminResource.prototype.getServerVersion = function () {
                    var request = this.getServerVersionRequest();
                    return this.$requestSender.requestValue(request);
                };
                AdminResource.prototype.getConfigsMultipleRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Admin/GetConfigs";
                    if (angular.isDefined(params.$skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "$skip", encodeURIComponent(params.$skip));
                    }
                    if (angular.isDefined(params.$top)) {
                        url = Triarc.Data.appendUrlParameter(url, "$top", encodeURIComponent(params.$top));
                    }
                    if (angular.isDefined(params.$orderBy)) {
                        url = Triarc.Data.appendUrlParameter(url, "$orderBy", encodeURIComponent(params.$orderBy));
                    }
                    if (angular.isDefined(params.$filter)) {
                        url = Triarc.Data.appendUrlParameter(url, "$filter", encodeURIComponent(params.$filter));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Admin", "IKeyVaulePair[]", false);
                    return dataRequest;
                };
                AdminResource.prototype.getConfigsMultiple = function (params) {
                    var request = this.getConfigsMultipleRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                AdminResource.prototype.echoServiceRequest = function () {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Admin/EchoService";
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Admin", "boolean", false);
                    return dataRequest;
                };
                AdminResource.prototype.echoService = function () {
                    var request = this.echoServiceRequest();
                    return this.$requestSender.requestValue(request);
                };
                AdminResource.prototype.newKeyVaulePair = function () {
                    return {};
                };
                return AdminResource;
            })();
            Data.AdminResource = AdminResource;
            ;
            var GlobalMessageResource = (function () {
                function GlobalMessageResource($requestSender) {
                    this.$requestSender = $requestSender;
                }
                GlobalMessageResource.prototype.getDailyGlobalMessageRequest = function () {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/GlobalMessage/GetDailyGlobalMessage";
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "GlobalMessage", "IGlobalMessageVm", false);
                    return dataRequest;
                };
                GlobalMessageResource.prototype.getDailyGlobalMessage = function () {
                    var request = this.getDailyGlobalMessageRequest();
                    return this.$requestSender.requestValue(request);
                };
                GlobalMessageResource.prototype.getMultipleRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/GlobalMessage/Get";
                    if (angular.isDefined(params.$skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "$skip", encodeURIComponent(params.$skip));
                    }
                    if (angular.isDefined(params.$top)) {
                        url = Triarc.Data.appendUrlParameter(url, "$top", encodeURIComponent(params.$top));
                    }
                    if (angular.isDefined(params.$orderBy)) {
                        url = Triarc.Data.appendUrlParameter(url, "$orderBy", encodeURIComponent(params.$orderBy));
                    }
                    if (angular.isDefined(params.$filter)) {
                        url = Triarc.Data.appendUrlParameter(url, "$filter", encodeURIComponent(params.$filter));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "GlobalMessage", "IGlobalMessageVm[]", false);
                    return dataRequest;
                };
                GlobalMessageResource.prototype.getMultiple = function (params) {
                    var request = this.getMultipleRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                GlobalMessageResource.prototype.putRequest = function (data) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/GlobalMessage/Put";
                    var dataRequest = new Triarc.Data.DataRequest("PUT", url, data, "GlobalMessage", "any", true);
                    return dataRequest;
                };
                GlobalMessageResource.prototype.put = function (data) {
                    var request = this.putRequest(data);
                    return this.$requestSender.requestValue(request);
                };
                GlobalMessageResource.prototype.deleteRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/GlobalMessage/Delete";
                    if (angular.isDefined(params.id)) {
                        url = Triarc.Data.appendUrlParameter(url, "id", encodeURIComponent(params.id));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("DELETE", url, {}, "GlobalMessage", "any", false);
                    return dataRequest;
                };
                GlobalMessageResource.prototype.delete = function (params) {
                    var request = this.deleteRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                GlobalMessageResource.prototype.newGlobalMessageVm = function () {
                    return {};
                };
                GlobalMessageResource.prototype.newPostedImage = function () {
                    return {};
                };
                return GlobalMessageResource;
            })();
            Data.GlobalMessageResource = GlobalMessageResource;
            ;
            var PersonResource = (function () {
                function PersonResource($requestSender) {
                    this.$requestSender = $requestSender;
                }
                PersonResource.prototype.getPersonByIdRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Person/GetPersonById";
                    if (angular.isDefined(params.id)) {
                        url = Triarc.Data.appendUrlParameter(url, "id", encodeURIComponent(params.id));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Person", "IEmployeeCm", false);
                    return dataRequest;
                };
                PersonResource.prototype.getPersonById = function (params) {
                    var request = this.getPersonByIdRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                PersonResource.prototype.getMultipleRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Person/Get";
                    if (angular.isDefined(params.$skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "$skip", encodeURIComponent(params.$skip));
                    }
                    if (angular.isDefined(params.$top)) {
                        url = Triarc.Data.appendUrlParameter(url, "$top", encodeURIComponent(params.$top));
                    }
                    if (angular.isDefined(params.$orderBy)) {
                        url = Triarc.Data.appendUrlParameter(url, "$orderBy", encodeURIComponent(params.$orderBy));
                    }
                    if (angular.isDefined(params.$filter)) {
                        url = Triarc.Data.appendUrlParameter(url, "$filter", encodeURIComponent(params.$filter));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Person", "IEmployeeCm[]", false);
                    return dataRequest;
                };
                PersonResource.prototype.getMultiple = function (params) {
                    var request = this.getMultipleRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                PersonResource.prototype.searchClientsMultipleRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Person/SearchClients";
                    if (angular.isDefined(params.searchString)) {
                        url = Triarc.Data.appendUrlParameter(url, "searchString", encodeURIComponent(params.searchString));
                    }
                    if (angular.isDefined(params.$skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "$skip", encodeURIComponent(params.$skip));
                    }
                    if (angular.isDefined(params.$top)) {
                        url = Triarc.Data.appendUrlParameter(url, "$top", encodeURIComponent(params.$top));
                    }
                    if (angular.isDefined(params.$orderBy)) {
                        url = Triarc.Data.appendUrlParameter(url, "$orderBy", encodeURIComponent(params.$orderBy));
                    }
                    if (angular.isDefined(params.$filter)) {
                        url = Triarc.Data.appendUrlParameter(url, "$filter", encodeURIComponent(params.$filter));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, {}, "Person", "IClientCm[]", false);
                    return dataRequest;
                };
                PersonResource.prototype.searchClientsMultiple = function (params) {
                    var request = this.searchClientsMultipleRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                PersonResource.prototype.getClientRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Person/GetClient";
                    if (angular.isDefined(params.clientId)) {
                        url = Triarc.Data.appendUrlParameter(url, "clientId", encodeURIComponent(params.clientId));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Person", "IClientCm", false);
                    return dataRequest;
                };
                PersonResource.prototype.getClient = function (params) {
                    var request = this.getClientRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                PersonResource.prototype.getClientsMultipleRequest = function (params, data) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Person/GetClients";
                    if (angular.isDefined(params.$skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "$skip", encodeURIComponent(params.$skip));
                    }
                    if (angular.isDefined(params.$top)) {
                        url = Triarc.Data.appendUrlParameter(url, "$top", encodeURIComponent(params.$top));
                    }
                    if (angular.isDefined(params.$orderBy)) {
                        url = Triarc.Data.appendUrlParameter(url, "$orderBy", encodeURIComponent(params.$orderBy));
                    }
                    if (angular.isDefined(params.$filter)) {
                        url = Triarc.Data.appendUrlParameter(url, "$filter", encodeURIComponent(params.$filter));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, data, "Person", "IClientCm[]", true);
                    return dataRequest;
                };
                PersonResource.prototype.getClientsMultiple = function (params, data) {
                    var request = this.getClientsMultipleRequest(params, data);
                    return this.$requestSender.requestValue(request);
                };
                PersonResource.prototype.getContactsForClientMultipleRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Person/GetContactsForClient";
                    if (angular.isDefined(params.clientId)) {
                        url = Triarc.Data.appendUrlParameter(url, "clientId", encodeURIComponent(params.clientId));
                    }
                    if (angular.isDefined(params.$skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "$skip", encodeURIComponent(params.$skip));
                    }
                    if (angular.isDefined(params.$top)) {
                        url = Triarc.Data.appendUrlParameter(url, "$top", encodeURIComponent(params.$top));
                    }
                    if (angular.isDefined(params.$orderBy)) {
                        url = Triarc.Data.appendUrlParameter(url, "$orderBy", encodeURIComponent(params.$orderBy));
                    }
                    if (angular.isDefined(params.$filter)) {
                        url = Triarc.Data.appendUrlParameter(url, "$filter", encodeURIComponent(params.$filter));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Person", "IContactCm[]", false);
                    return dataRequest;
                };
                PersonResource.prototype.getContactsForClientMultiple = function (params) {
                    var request = this.getContactsForClientMultipleRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                PersonResource.prototype.getContactRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Person/GetContact";
                    if (angular.isDefined(params.id)) {
                        url = Triarc.Data.appendUrlParameter(url, "id", encodeURIComponent(params.id));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Person", "IContactCm", false);
                    return dataRequest;
                };
                PersonResource.prototype.getContact = function (params) {
                    var request = this.getContactRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                PersonResource.prototype.saveContactRequest = function (data) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Person/SaveContact";
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, data, "Person", "IContactCm", true);
                    return dataRequest;
                };
                PersonResource.prototype.saveContact = function (data) {
                    var request = this.saveContactRequest(data);
                    return this.$requestSender.requestValue(request);
                };
                PersonResource.prototype.newEmployeeCm = function () {
                    return {};
                };
                PersonResource.prototype.newClientCm = function () {
                    return {};
                };
                PersonResource.prototype.newContactCm = function () {
                    return {};
                };
                PersonResource.prototype.newIdsNumberContainer = function () {
                    return {};
                };
                return PersonResource;
            })();
            Data.PersonResource = PersonResource;
            ;
            var PlanningResource = (function () {
                function PlanningResource($requestSender) {
                    this.$requestSender = $requestSender;
                }
                PlanningResource.prototype.importPlanningRequest = function () {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Planning/ImportPlanning";
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Planning", "any", false);
                    return dataRequest;
                };
                PlanningResource.prototype.importPlanning = function () {
                    var request = this.importPlanningRequest();
                    return this.$requestSender.requestValue(request);
                };
                return PlanningResource;
            })();
            Data.PlanningResource = PlanningResource;
            ;
            var ProjectResource = (function () {
                function ProjectResource($requestSender) {
                    this.$requestSender = $requestSender;
                }
                ProjectResource.prototype.getAllPersonsMultipleRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Project/GetAllPersons";
                    if (angular.isDefined(params.$skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "$skip", encodeURIComponent(params.$skip));
                    }
                    if (angular.isDefined(params.$top)) {
                        url = Triarc.Data.appendUrlParameter(url, "$top", encodeURIComponent(params.$top));
                    }
                    if (angular.isDefined(params.$orderBy)) {
                        url = Triarc.Data.appendUrlParameter(url, "$orderBy", encodeURIComponent(params.$orderBy));
                    }
                    if (angular.isDefined(params.$filter)) {
                        url = Triarc.Data.appendUrlParameter(url, "$filter", encodeURIComponent(params.$filter));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Project", "IProjectPersonVm[]", false);
                    return dataRequest;
                };
                ProjectResource.prototype.getAllPersonsMultiple = function (params) {
                    var request = this.getAllPersonsMultipleRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                ProjectResource.prototype.searchPersonsMultipleRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Project/SearchPersons";
                    if (angular.isDefined(params.search)) {
                        url = Triarc.Data.appendUrlParameter(url, "search", encodeURIComponent(params.search));
                    }
                    if (angular.isDefined(params.$skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "$skip", encodeURIComponent(params.$skip));
                    }
                    if (angular.isDefined(params.$top)) {
                        url = Triarc.Data.appendUrlParameter(url, "$top", encodeURIComponent(params.$top));
                    }
                    if (angular.isDefined(params.$orderBy)) {
                        url = Triarc.Data.appendUrlParameter(url, "$orderBy", encodeURIComponent(params.$orderBy));
                    }
                    if (angular.isDefined(params.$filter)) {
                        url = Triarc.Data.appendUrlParameter(url, "$filter", encodeURIComponent(params.$filter));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Project", "IProjectPersonVm[]", false);
                    return dataRequest;
                };
                ProjectResource.prototype.searchPersonsMultiple = function (params) {
                    var request = this.searchPersonsMultipleRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                ProjectResource.prototype.getAllLocationsMultipleRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Project/GetAllLocations";
                    if (angular.isDefined(params.$skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "$skip", encodeURIComponent(params.$skip));
                    }
                    if (angular.isDefined(params.$top)) {
                        url = Triarc.Data.appendUrlParameter(url, "$top", encodeURIComponent(params.$top));
                    }
                    if (angular.isDefined(params.$orderBy)) {
                        url = Triarc.Data.appendUrlParameter(url, "$orderBy", encodeURIComponent(params.$orderBy));
                    }
                    if (angular.isDefined(params.$filter)) {
                        url = Triarc.Data.appendUrlParameter(url, "$filter", encodeURIComponent(params.$filter));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Project", "IProjectLocationVm[]", false);
                    return dataRequest;
                };
                ProjectResource.prototype.getAllLocationsMultiple = function (params) {
                    var request = this.getAllLocationsMultipleRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                ProjectResource.prototype.searchLocationsMultipleRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Project/SearchLocations";
                    if (angular.isDefined(params.search)) {
                        url = Triarc.Data.appendUrlParameter(url, "search", encodeURIComponent(params.search));
                    }
                    if (angular.isDefined(params.$skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "$skip", encodeURIComponent(params.$skip));
                    }
                    if (angular.isDefined(params.$top)) {
                        url = Triarc.Data.appendUrlParameter(url, "$top", encodeURIComponent(params.$top));
                    }
                    if (angular.isDefined(params.$orderBy)) {
                        url = Triarc.Data.appendUrlParameter(url, "$orderBy", encodeURIComponent(params.$orderBy));
                    }
                    if (angular.isDefined(params.$filter)) {
                        url = Triarc.Data.appendUrlParameter(url, "$filter", encodeURIComponent(params.$filter));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Project", "IProjectLocationVm[]", false);
                    return dataRequest;
                };
                ProjectResource.prototype.searchLocationsMultiple = function (params) {
                    var request = this.searchLocationsMultipleRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                ProjectResource.prototype.getProjectsForEmployeeMultipleRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Project/GetProjectsForEmployee";
                    if (angular.isDefined(params.employeeId)) {
                        url = Triarc.Data.appendUrlParameter(url, "employeeId", encodeURIComponent(params.employeeId));
                    }
                    if (angular.isDefined(params.$skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "$skip", encodeURIComponent(params.$skip));
                    }
                    if (angular.isDefined(params.$top)) {
                        url = Triarc.Data.appendUrlParameter(url, "$top", encodeURIComponent(params.$top));
                    }
                    if (angular.isDefined(params.$orderBy)) {
                        url = Triarc.Data.appendUrlParameter(url, "$orderBy", encodeURIComponent(params.$orderBy));
                    }
                    if (angular.isDefined(params.$filter)) {
                        url = Triarc.Data.appendUrlParameter(url, "$filter", encodeURIComponent(params.$filter));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Project", "IProjectCm[]", false);
                    return dataRequest;
                };
                ProjectResource.prototype.getProjectsForEmployeeMultiple = function (params) {
                    var request = this.getProjectsForEmployeeMultipleRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                ProjectResource.prototype.searchProjectsMultipleRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Project/SearchProjects";
                    if (angular.isDefined(params.searchValue)) {
                        url = Triarc.Data.appendUrlParameter(url, "searchValue", encodeURIComponent(params.searchValue));
                    }
                    if (angular.isDefined(params.skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "skip", encodeURIComponent(params.skip));
                    }
                    if (angular.isDefined(params.take)) {
                        url = Triarc.Data.appendUrlParameter(url, "take", encodeURIComponent(params.take));
                    }
                    if (angular.isDefined(params.$skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "$skip", encodeURIComponent(params.$skip));
                    }
                    if (angular.isDefined(params.$top)) {
                        url = Triarc.Data.appendUrlParameter(url, "$top", encodeURIComponent(params.$top));
                    }
                    if (angular.isDefined(params.$orderBy)) {
                        url = Triarc.Data.appendUrlParameter(url, "$orderBy", encodeURIComponent(params.$orderBy));
                    }
                    if (angular.isDefined(params.$filter)) {
                        url = Triarc.Data.appendUrlParameter(url, "$filter", encodeURIComponent(params.$filter));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, {}, "Project", "IProjectCm[]", false);
                    return dataRequest;
                };
                ProjectResource.prototype.searchProjectsMultiple = function (params) {
                    var request = this.searchProjectsMultipleRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                ProjectResource.prototype.getRootProjectsMultipleRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Project/GetRootProjects";
                    if (angular.isDefined(params.search)) {
                        url = Triarc.Data.appendUrlParameter(url, "search", encodeURIComponent(params.search));
                    }
                    if (angular.isDefined(params.skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "skip", encodeURIComponent(params.skip));
                    }
                    if (angular.isDefined(params.take)) {
                        url = Triarc.Data.appendUrlParameter(url, "take", encodeURIComponent(params.take));
                    }
                    if (angular.isDefined(params.$skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "$skip", encodeURIComponent(params.$skip));
                    }
                    if (angular.isDefined(params.$top)) {
                        url = Triarc.Data.appendUrlParameter(url, "$top", encodeURIComponent(params.$top));
                    }
                    if (angular.isDefined(params.$orderBy)) {
                        url = Triarc.Data.appendUrlParameter(url, "$orderBy", encodeURIComponent(params.$orderBy));
                    }
                    if (angular.isDefined(params.$filter)) {
                        url = Triarc.Data.appendUrlParameter(url, "$filter", encodeURIComponent(params.$filter));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Project", "IProjectVm[]", false);
                    return dataRequest;
                };
                ProjectResource.prototype.getRootProjectsMultiple = function (params) {
                    var request = this.getRootProjectsMultipleRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                ProjectResource.prototype.getChildrenMultipleRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Project/GetChildren";
                    if (angular.isDefined(params.projectId)) {
                        url = Triarc.Data.appendUrlParameter(url, "projectId", encodeURIComponent(params.projectId));
                    }
                    if (angular.isDefined(params.$skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "$skip", encodeURIComponent(params.$skip));
                    }
                    if (angular.isDefined(params.$top)) {
                        url = Triarc.Data.appendUrlParameter(url, "$top", encodeURIComponent(params.$top));
                    }
                    if (angular.isDefined(params.$orderBy)) {
                        url = Triarc.Data.appendUrlParameter(url, "$orderBy", encodeURIComponent(params.$orderBy));
                    }
                    if (angular.isDefined(params.$filter)) {
                        url = Triarc.Data.appendUrlParameter(url, "$filter", encodeURIComponent(params.$filter));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Project", "IProjectVm[]", false);
                    return dataRequest;
                };
                ProjectResource.prototype.getChildrenMultiple = function (params) {
                    var request = this.getChildrenMultipleRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                ProjectResource.prototype.putProjectDescriptionRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Project/PutProjectDescription";
                    if (angular.isDefined(params.description)) {
                        url = Triarc.Data.appendUrlParameter(url, "description", encodeURIComponent(params.description));
                    }
                    if (angular.isDefined(params.projectId)) {
                        url = Triarc.Data.appendUrlParameter(url, "projectId", encodeURIComponent(params.projectId));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, {}, "Project", "any", false);
                    return dataRequest;
                };
                ProjectResource.prototype.putProjectDescription = function (params) {
                    var request = this.putProjectDescriptionRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                ProjectResource.prototype.putPersonAssignmentRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Project/PutPersonAssignment";
                    if (angular.isDefined(params.projectId)) {
                        url = Triarc.Data.appendUrlParameter(url, "projectId", encodeURIComponent(params.projectId));
                    }
                    if (angular.isDefined(params.personId)) {
                        url = Triarc.Data.appendUrlParameter(url, "personId", encodeURIComponent(params.personId));
                    }
                    if (angular.isDefined(params.value)) {
                        url = Triarc.Data.appendUrlParameter(url, "value", encodeURIComponent(params.value));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, {}, "Project", "any", false);
                    return dataRequest;
                };
                ProjectResource.prototype.putPersonAssignment = function (params) {
                    var request = this.putPersonAssignmentRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                ProjectResource.prototype.getProjectByIdRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Project/GetProjectById";
                    if (angular.isDefined(params.projectId)) {
                        url = Triarc.Data.appendUrlParameter(url, "projectId", encodeURIComponent(params.projectId));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, {}, "Project", "IProjectCm", false);
                    return dataRequest;
                };
                ProjectResource.prototype.getProjectById = function (params) {
                    var request = this.getProjectByIdRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                ProjectResource.prototype.getProjectByExternalIdRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Project/GetProjectByExternalId";
                    if (angular.isDefined(params.externalId)) {
                        url = Triarc.Data.appendUrlParameter(url, "externalId", encodeURIComponent(params.externalId));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Project", "IProjectCm", false);
                    return dataRequest;
                };
                ProjectResource.prototype.getProjectByExternalId = function (params) {
                    var request = this.getProjectByExternalIdRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                ProjectResource.prototype.getProjectsByIdMultipleRequest = function (params, data) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Project/GetProjectsById";
                    if (angular.isDefined(params.$skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "$skip", encodeURIComponent(params.$skip));
                    }
                    if (angular.isDefined(params.$top)) {
                        url = Triarc.Data.appendUrlParameter(url, "$top", encodeURIComponent(params.$top));
                    }
                    if (angular.isDefined(params.$orderBy)) {
                        url = Triarc.Data.appendUrlParameter(url, "$orderBy", encodeURIComponent(params.$orderBy));
                    }
                    if (angular.isDefined(params.$filter)) {
                        url = Triarc.Data.appendUrlParameter(url, "$filter", encodeURIComponent(params.$filter));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, data, "Project", "IProjectCm[]", true);
                    return dataRequest;
                };
                ProjectResource.prototype.getProjectsByIdMultiple = function (params, data) {
                    var request = this.getProjectsByIdMultipleRequest(params, data);
                    return this.$requestSender.requestValue(request);
                };
                ProjectResource.prototype.putLocationAssignmentRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Project/PutLocationAssignment";
                    if (angular.isDefined(params.projectId)) {
                        url = Triarc.Data.appendUrlParameter(url, "projectId", encodeURIComponent(params.projectId));
                    }
                    if (angular.isDefined(params.locationId)) {
                        url = Triarc.Data.appendUrlParameter(url, "locationId", encodeURIComponent(params.locationId));
                    }
                    if (angular.isDefined(params.value)) {
                        url = Triarc.Data.appendUrlParameter(url, "value", encodeURIComponent(params.value));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, {}, "Project", "any", false);
                    return dataRequest;
                };
                ProjectResource.prototype.putLocationAssignment = function (params) {
                    var request = this.putLocationAssignmentRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                ProjectResource.prototype.setFlagsRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Project/SetFlags";
                    if (angular.isDefined(params.projectId)) {
                        url = Triarc.Data.appendUrlParameter(url, "projectId", encodeURIComponent(params.projectId));
                    }
                    if (angular.isDefined(params.flags)) {
                        url = Triarc.Data.appendUrlParameter(url, "flags", encodeURIComponent(params.flags));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, {}, "Project", "any", false);
                    return dataRequest;
                };
                ProjectResource.prototype.setFlags = function (params) {
                    var request = this.setFlagsRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                ProjectResource.prototype.searchForExternalWorkReportsMultipleRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Project/SearchForExternalWorkReports";
                    if (angular.isDefined(params.searchString)) {
                        url = Triarc.Data.appendUrlParameter(url, "searchString", encodeURIComponent(params.searchString));
                    }
                    if (angular.isDefined(params.skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "skip", encodeURIComponent(params.skip));
                    }
                    if (angular.isDefined(params.take)) {
                        url = Triarc.Data.appendUrlParameter(url, "take", encodeURIComponent(params.take));
                    }
                    if (angular.isDefined(params.$skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "$skip", encodeURIComponent(params.$skip));
                    }
                    if (angular.isDefined(params.$top)) {
                        url = Triarc.Data.appendUrlParameter(url, "$top", encodeURIComponent(params.$top));
                    }
                    if (angular.isDefined(params.$orderBy)) {
                        url = Triarc.Data.appendUrlParameter(url, "$orderBy", encodeURIComponent(params.$orderBy));
                    }
                    if (angular.isDefined(params.$filter)) {
                        url = Triarc.Data.appendUrlParameter(url, "$filter", encodeURIComponent(params.$filter));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, {}, "Project", "IExternalWorkReportCreationProjectCm[]", false);
                    return dataRequest;
                };
                ProjectResource.prototype.searchForExternalWorkReportsMultiple = function (params) {
                    var request = this.searchForExternalWorkReportsMultipleRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                ProjectResource.prototype.getProjectTypesMultipleRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Project/GetProjectTypes";
                    if (angular.isDefined(params.$skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "$skip", encodeURIComponent(params.$skip));
                    }
                    if (angular.isDefined(params.$top)) {
                        url = Triarc.Data.appendUrlParameter(url, "$top", encodeURIComponent(params.$top));
                    }
                    if (angular.isDefined(params.$orderBy)) {
                        url = Triarc.Data.appendUrlParameter(url, "$orderBy", encodeURIComponent(params.$orderBy));
                    }
                    if (angular.isDefined(params.$filter)) {
                        url = Triarc.Data.appendUrlParameter(url, "$filter", encodeURIComponent(params.$filter));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Project", "IProjectTypeCm[]", false);
                    return dataRequest;
                };
                ProjectResource.prototype.getProjectTypesMultiple = function (params) {
                    var request = this.getProjectTypesMultipleRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                ProjectResource.prototype.newProjectPersonVm = function () {
                    return {};
                };
                ProjectResource.prototype.newProjectLocationVm = function () {
                    return {};
                };
                ProjectResource.prototype.newProjectCm = function () {
                    return {};
                };
                ProjectResource.prototype.newProjectVm = function () {
                    return {};
                };
                ProjectResource.prototype.newExternalWorkReportCreationProjectCm = function () {
                    return {};
                };
                ProjectResource.prototype.newProjectTypeCm = function () {
                    return {};
                };
                ProjectResource.prototype.newSearchIdSet = function () {
                    return {};
                };
                return ProjectResource;
            })();
            Data.ProjectResource = ProjectResource;
            ;
            var ExpensesResource = (function () {
                function ExpensesResource($requestSender) {
                    this.$requestSender = $requestSender;
                }
                ExpensesResource.prototype.addOrUpdateExpenseRequest = function (data) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Expenses/AddOrUpdateExpense";
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, data, "Expenses", "IExpenseCm", true);
                    return dataRequest;
                };
                ExpensesResource.prototype.addOrUpdateExpense = function (data) {
                    var request = this.addOrUpdateExpenseRequest(data);
                    return this.$requestSender.requestValue(request);
                };
                ExpensesResource.prototype.searchMultipleRequest = function (params, data) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Expenses/Search";
                    if (angular.isDefined(params.$skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "$skip", encodeURIComponent(params.$skip));
                    }
                    if (angular.isDefined(params.$top)) {
                        url = Triarc.Data.appendUrlParameter(url, "$top", encodeURIComponent(params.$top));
                    }
                    if (angular.isDefined(params.$orderBy)) {
                        url = Triarc.Data.appendUrlParameter(url, "$orderBy", encodeURIComponent(params.$orderBy));
                    }
                    if (angular.isDefined(params.$filter)) {
                        url = Triarc.Data.appendUrlParameter(url, "$filter", encodeURIComponent(params.$filter));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, data, "Expenses", "IExpenseCm[]", true);
                    return dataRequest;
                };
                ExpensesResource.prototype.searchMultiple = function (params, data) {
                    var request = this.searchMultipleRequest(params, data);
                    return this.$requestSender.requestValue(request);
                };
                ExpensesResource.prototype.getRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Expenses/Get";
                    if (angular.isDefined(params.id)) {
                        url = Triarc.Data.appendUrlParameter(url, "id", encodeURIComponent(params.id));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, {}, "Expenses", "IExpenseCm", false);
                    return dataRequest;
                };
                ExpensesResource.prototype.get = function (params) {
                    var request = this.getRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                ExpensesResource.prototype.deleteRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Expenses/Delete";
                    if (angular.isDefined(params.id)) {
                        url = Triarc.Data.appendUrlParameter(url, "id", encodeURIComponent(params.id));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, {}, "Expenses", "any", false);
                    return dataRequest;
                };
                ExpensesResource.prototype.delete = function (params) {
                    var request = this.deleteRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                ExpensesResource.prototype.getExpenseTypesMultipleRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Expenses/GetExpenseTypes";
                    if (angular.isDefined(params.$skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "$skip", encodeURIComponent(params.$skip));
                    }
                    if (angular.isDefined(params.$top)) {
                        url = Triarc.Data.appendUrlParameter(url, "$top", encodeURIComponent(params.$top));
                    }
                    if (angular.isDefined(params.$orderBy)) {
                        url = Triarc.Data.appendUrlParameter(url, "$orderBy", encodeURIComponent(params.$orderBy));
                    }
                    if (angular.isDefined(params.$filter)) {
                        url = Triarc.Data.appendUrlParameter(url, "$filter", encodeURIComponent(params.$filter));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, {}, "Expenses", "IExpenseTypeCm[]", false);
                    return dataRequest;
                };
                ExpensesResource.prototype.getExpenseTypesMultiple = function (params) {
                    var request = this.getExpenseTypesMultipleRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                ExpensesResource.prototype.targetExpensesRequest = function (data) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Expenses/TargetExpenses";
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, data, "Expenses", "any", true);
                    return dataRequest;
                };
                ExpensesResource.prototype.targetExpenses = function (data) {
                    var request = this.targetExpensesRequest(data);
                    return this.$requestSender.requestValue(request);
                };
                ExpensesResource.prototype.newExpenseCm = function () {
                    return {};
                };
                ExpensesResource.prototype.newExpenseTypeCm = function () {
                    return {};
                };
                ExpensesResource.prototype.newExpensesSearchCm = function () {
                    return {};
                };
                ExpensesResource.prototype.newExpenseTargetingCm = function () {
                    return {};
                };
                return ExpensesResource;
            })();
            Data.ExpensesResource = ExpensesResource;
            ;
            var ConfigResource = (function () {
                function ConfigResource($requestSender) {
                    this.$requestSender = $requestSender;
                }
                ConfigResource.prototype.getRequest = function () {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Config/Get";
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Config", "IConfigVm", false);
                    return dataRequest;
                };
                ConfigResource.prototype.get = function () {
                    var request = this.getRequest();
                    return this.$requestSender.requestValue(request);
                };
                ConfigResource.prototype.putRequest = function (data) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Config/Put";
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, data, "Config", "any", true);
                    return dataRequest;
                };
                ConfigResource.prototype.put = function (data) {
                    var request = this.putRequest(data);
                    return this.$requestSender.requestValue(request);
                };
                ConfigResource.prototype.newConfigVm = function () {
                    return {};
                };
                ConfigResource.prototype.newSaveConfigVm = function () {
                    return {};
                };
                return ConfigResource;
            })();
            Data.ConfigResource = ConfigResource;
            ;
            var ConfigurationProfileResource = (function () {
                function ConfigurationProfileResource($requestSender) {
                    this.$requestSender = $requestSender;
                }
                ConfigurationProfileResource.prototype.getConfigsMultipleRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/ConfigurationProfile/GetConfigs";
                    if (angular.isDefined(params.$skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "$skip", encodeURIComponent(params.$skip));
                    }
                    if (angular.isDefined(params.$top)) {
                        url = Triarc.Data.appendUrlParameter(url, "$top", encodeURIComponent(params.$top));
                    }
                    if (angular.isDefined(params.$orderBy)) {
                        url = Triarc.Data.appendUrlParameter(url, "$orderBy", encodeURIComponent(params.$orderBy));
                    }
                    if (angular.isDefined(params.$filter)) {
                        url = Triarc.Data.appendUrlParameter(url, "$filter", encodeURIComponent(params.$filter));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "ConfigurationProfile", "IProfileConfigVm[]", false);
                    return dataRequest;
                };
                ConfigurationProfileResource.prototype.getConfigsMultiple = function (params) {
                    var request = this.getConfigsMultipleRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                ConfigurationProfileResource.prototype.deleteRequest = function (data) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/ConfigurationProfile/Delete";
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, data, "ConfigurationProfile", "any", true);
                    return dataRequest;
                };
                ConfigurationProfileResource.prototype.delete = function (data) {
                    var request = this.deleteRequest(data);
                    return this.$requestSender.requestValue(request);
                };
                ConfigurationProfileResource.prototype.saveRequest = function (data) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/ConfigurationProfile/Save";
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, data, "ConfigurationProfile", "any", true);
                    return dataRequest;
                };
                ConfigurationProfileResource.prototype.save = function (data) {
                    var request = this.saveRequest(data);
                    return this.$requestSender.requestValue(request);
                };
                ConfigurationProfileResource.prototype.newProfileConfigVm = function () {
                    return {};
                };
                return ConfigurationProfileResource;
            })();
            Data.ConfigurationProfileResource = ConfigurationProfileResource;
            ;
            var WorkReportResource = (function () {
                function WorkReportResource($requestSender) {
                    this.$requestSender = $requestSender;
                }
                WorkReportResource.prototype.getRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/WorkReport/Get";
                    if (angular.isDefined(params.externalWorkReportId)) {
                        url = Triarc.Data.appendUrlParameter(url, "externalWorkReportId", encodeURIComponent(params.externalWorkReportId));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "WorkReport", "IWorkReportCm", false);
                    return dataRequest;
                };
                WorkReportResource.prototype.get = function (params) {
                    var request = this.getRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                WorkReportResource.prototype.saveRequest = function (data) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/WorkReport/Save";
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, data, "WorkReport", "IExternalWorkReportCm", true);
                    return dataRequest;
                };
                WorkReportResource.prototype.save = function (data) {
                    var request = this.saveRequest(data);
                    return this.$requestSender.requestValue(request);
                };
                WorkReportResource.prototype.searchMultipleRequest = function (params, data) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/WorkReport/Search";
                    if (angular.isDefined(params.$skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "$skip", encodeURIComponent(params.$skip));
                    }
                    if (angular.isDefined(params.$top)) {
                        url = Triarc.Data.appendUrlParameter(url, "$top", encodeURIComponent(params.$top));
                    }
                    if (angular.isDefined(params.$orderBy)) {
                        url = Triarc.Data.appendUrlParameter(url, "$orderBy", encodeURIComponent(params.$orderBy));
                    }
                    if (angular.isDefined(params.$filter)) {
                        url = Triarc.Data.appendUrlParameter(url, "$filter", encodeURIComponent(params.$filter));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, data, "WorkReport", "IExternalWorkReportCm[]", true);
                    return dataRequest;
                };
                WorkReportResource.prototype.searchMultiple = function (params, data) {
                    var request = this.searchMultipleRequest(params, data);
                    return this.$requestSender.requestValue(request);
                };
                WorkReportResource.prototype.getIdForRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/WorkReport/GetIdFor";
                    if (angular.isDefined(params.employeeId)) {
                        url = Triarc.Data.appendUrlParameter(url, "employeeId", encodeURIComponent(params.employeeId));
                    }
                    if (angular.isDefined(params.projectId)) {
                        url = Triarc.Data.appendUrlParameter(url, "projectId", encodeURIComponent(params.projectId));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "WorkReport", "string", false);
                    return dataRequest;
                };
                WorkReportResource.prototype.getIdFor = function (params) {
                    var request = this.getIdForRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                WorkReportResource.prototype.newWorkReportCm = function () {
                    return {};
                };
                WorkReportResource.prototype.newExternalWorkReportCm = function () {
                    return {};
                };
                WorkReportResource.prototype.newExternalWorkReportSearchCriteria = function () {
                    return {};
                };
                return WorkReportResource;
            })();
            Data.WorkReportResource = WorkReportResource;
            ;
            var ClaimResource = (function () {
                function ClaimResource($requestSender) {
                    this.$requestSender = $requestSender;
                }
                ClaimResource.prototype.getClaimsMultipleRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Claim/GetClaims";
                    if (angular.isDefined(params.$skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "$skip", encodeURIComponent(params.$skip));
                    }
                    if (angular.isDefined(params.$top)) {
                        url = Triarc.Data.appendUrlParameter(url, "$top", encodeURIComponent(params.$top));
                    }
                    if (angular.isDefined(params.$orderBy)) {
                        url = Triarc.Data.appendUrlParameter(url, "$orderBy", encodeURIComponent(params.$orderBy));
                    }
                    if (angular.isDefined(params.$filter)) {
                        url = Triarc.Data.appendUrlParameter(url, "$filter", encodeURIComponent(params.$filter));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Claim", "IFeatureClaimVm[]", false);
                    return dataRequest;
                };
                ClaimResource.prototype.getClaimsMultiple = function (params) {
                    var request = this.getClaimsMultipleRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                ClaimResource.prototype.newFeatureClaimVm = function () {
                    return {};
                };
                return ClaimResource;
            })();
            Data.ClaimResource = ClaimResource;
            ;
            var SaldoResource = (function () {
                function SaldoResource($requestSender) {
                    this.$requestSender = $requestSender;
                }
                SaldoResource.prototype.getByIdRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Saldo/GetById";
                    if (angular.isDefined(params.employeeId)) {
                        url = Triarc.Data.appendUrlParameter(url, "employeeId", encodeURIComponent(params.employeeId));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Saldo", "ISaldo", false);
                    return dataRequest;
                };
                SaldoResource.prototype.getById = function (params) {
                    var request = this.getByIdRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                SaldoResource.prototype.newSaldo = function () {
                    return {};
                };
                return SaldoResource;
            })();
            Data.SaldoResource = SaldoResource;
            ;
            var WorkObjectResource = (function () {
                function WorkObjectResource($requestSender) {
                    this.$requestSender = $requestSender;
                }
                WorkObjectResource.prototype.getProjectsForLocationMultipleRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/WorkObject/GetProjectsForLocation";
                    if (angular.isDefined(params.locationId)) {
                        url = Triarc.Data.appendUrlParameter(url, "locationId", encodeURIComponent(params.locationId));
                    }
                    if (angular.isDefined(params.$skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "$skip", encodeURIComponent(params.$skip));
                    }
                    if (angular.isDefined(params.$top)) {
                        url = Triarc.Data.appendUrlParameter(url, "$top", encodeURIComponent(params.$top));
                    }
                    if (angular.isDefined(params.$orderBy)) {
                        url = Triarc.Data.appendUrlParameter(url, "$orderBy", encodeURIComponent(params.$orderBy));
                    }
                    if (angular.isDefined(params.$filter)) {
                        url = Triarc.Data.appendUrlParameter(url, "$filter", encodeURIComponent(params.$filter));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "WorkObject", "IWorkObjectViewModel[]", false);
                    return dataRequest;
                };
                WorkObjectResource.prototype.getProjectsForLocationMultiple = function (params) {
                    var request = this.getProjectsForLocationMultipleRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                WorkObjectResource.prototype.newWorkObjectViewModel = function () {
                    return {};
                };
                return WorkObjectResource;
            })();
            Data.WorkObjectResource = WorkObjectResource;
            ;
            var AccountResource = (function () {
                function AccountResource($requestSender) {
                    this.$requestSender = $requestSender;
                }
                AccountResource.prototype.getAppUserRequest = function () {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Account/GetAppUser";
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Account", "IAppUser", false);
                    return dataRequest;
                };
                AccountResource.prototype.getAppUser = function () {
                    var request = this.getAppUserRequest();
                    return this.$requestSender.requestValue(request);
                };
                AccountResource.prototype.loginRequest = function (data) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Account/Login";
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, data, "Account", "any", true);
                    return dataRequest;
                };
                AccountResource.prototype.login = function (data) {
                    var request = this.loginRequest(data);
                    return this.$requestSender.requestValue(request);
                };
                AccountResource.prototype.getUsersMultipleRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Account/GetUsers";
                    if (angular.isDefined(params.$skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "$skip", encodeURIComponent(params.$skip));
                    }
                    if (angular.isDefined(params.$top)) {
                        url = Triarc.Data.appendUrlParameter(url, "$top", encodeURIComponent(params.$top));
                    }
                    if (angular.isDefined(params.$orderBy)) {
                        url = Triarc.Data.appendUrlParameter(url, "$orderBy", encodeURIComponent(params.$orderBy));
                    }
                    if (angular.isDefined(params.$filter)) {
                        url = Triarc.Data.appendUrlParameter(url, "$filter", encodeURIComponent(params.$filter));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Account", "IUserVm[]", false);
                    return dataRequest;
                };
                AccountResource.prototype.getUsersMultiple = function (params) {
                    var request = this.getUsersMultipleRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                AccountResource.prototype.searchMultipleRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Account/Search";
                    if (angular.isDefined(params.search)) {
                        url = Triarc.Data.appendUrlParameter(url, "search", encodeURIComponent(params.search));
                    }
                    if (angular.isDefined(params.skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "skip", encodeURIComponent(params.skip));
                    }
                    if (angular.isDefined(params.take)) {
                        url = Triarc.Data.appendUrlParameter(url, "take", encodeURIComponent(params.take));
                    }
                    if (angular.isDefined(params.$skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "$skip", encodeURIComponent(params.$skip));
                    }
                    if (angular.isDefined(params.$top)) {
                        url = Triarc.Data.appendUrlParameter(url, "$top", encodeURIComponent(params.$top));
                    }
                    if (angular.isDefined(params.$orderBy)) {
                        url = Triarc.Data.appendUrlParameter(url, "$orderBy", encodeURIComponent(params.$orderBy));
                    }
                    if (angular.isDefined(params.$filter)) {
                        url = Triarc.Data.appendUrlParameter(url, "$filter", encodeURIComponent(params.$filter));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Account", "IUserVm[]", false);
                    return dataRequest;
                };
                AccountResource.prototype.searchMultiple = function (params) {
                    var request = this.searchMultipleRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                AccountResource.prototype.createUserRequest = function (data) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Account/CreateUser";
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, data, "Account", "any", true);
                    return dataRequest;
                };
                AccountResource.prototype.createUser = function (data) {
                    var request = this.createUserRequest(data);
                    return this.$requestSender.requestValue(request);
                };
                AccountResource.prototype.editUserRequest = function (data) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Account/EditUser";
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, data, "Account", "any", true);
                    return dataRequest;
                };
                AccountResource.prototype.editUser = function (data) {
                    var request = this.editUserRequest(data);
                    return this.$requestSender.requestValue(request);
                };
                AccountResource.prototype.resetPasswordRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Account/ResetPassword";
                    if (angular.isDefined(params.userId)) {
                        url = Triarc.Data.appendUrlParameter(url, "userId", encodeURIComponent(params.userId));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Account", "any", false);
                    return dataRequest;
                };
                AccountResource.prototype.resetPassword = function (params) {
                    var request = this.resetPasswordRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                AccountResource.prototype.deleteRequest = function (data) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Account/Delete";
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, data, "Account", "any", true);
                    return dataRequest;
                };
                AccountResource.prototype.delete = function (data) {
                    var request = this.deleteRequest(data);
                    return this.$requestSender.requestValue(request);
                };
                AccountResource.prototype.pingRequest = function () {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Account/Ping";
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Account", "any", false);
                    return dataRequest;
                };
                AccountResource.prototype.ping = function () {
                    var request = this.pingRequest();
                    return this.$requestSender.requestValue(request);
                };
                AccountResource.prototype.logoutRequest = function () {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Account/Logout";
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, {}, "Account", "any", false);
                    return dataRequest;
                };
                AccountResource.prototype.logout = function () {
                    var request = this.logoutRequest();
                    return this.$requestSender.requestValue(request);
                };
                AccountResource.prototype.getUserInfoRequest = function () {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Account/GetUserInfo";
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Account", "IUserInfoViewModel", false);
                    return dataRequest;
                };
                AccountResource.prototype.getUserInfo = function () {
                    var request = this.getUserInfoRequest();
                    return this.$requestSender.requestValue(request);
                };
                AccountResource.prototype.getManageInfoRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Account/GetManageInfo";
                    if (angular.isDefined(params.returnUrl)) {
                        url = Triarc.Data.appendUrlParameter(url, "returnUrl", encodeURIComponent(params.returnUrl));
                    }
                    if (angular.isDefined(params.generateState)) {
                        url = Triarc.Data.appendUrlParameter(url, "generateState", encodeURIComponent(params.generateState));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Account", "IManageInfoViewModel", false);
                    return dataRequest;
                };
                AccountResource.prototype.getManageInfo = function (params) {
                    var request = this.getManageInfoRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                AccountResource.prototype.changePasswordRequest = function (data) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Account/ChangePassword";
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, data, "Account", "any", true);
                    return dataRequest;
                };
                AccountResource.prototype.changePassword = function (data) {
                    var request = this.changePasswordRequest(data);
                    return this.$requestSender.requestValue(request);
                };
                AccountResource.prototype.setPasswordRequest = function (data) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Account/SetPassword";
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, data, "Account", "any", true);
                    return dataRequest;
                };
                AccountResource.prototype.setPassword = function (data) {
                    var request = this.setPasswordRequest(data);
                    return this.$requestSender.requestValue(request);
                };
                AccountResource.prototype.addExternalLoginRequest = function (data) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Account/AddExternalLogin";
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, data, "Account", "any", true);
                    return dataRequest;
                };
                AccountResource.prototype.addExternalLogin = function (data) {
                    var request = this.addExternalLoginRequest(data);
                    return this.$requestSender.requestValue(request);
                };
                AccountResource.prototype.removeLoginRequest = function (data) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Account/RemoveLogin";
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, data, "Account", "any", true);
                    return dataRequest;
                };
                AccountResource.prototype.removeLogin = function (data) {
                    var request = this.removeLoginRequest(data);
                    return this.$requestSender.requestValue(request);
                };
                AccountResource.prototype.getExternalLoginRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Account/GetExternalLogin";
                    if (angular.isDefined(params.provider)) {
                        url = Triarc.Data.appendUrlParameter(url, "provider", encodeURIComponent(params.provider));
                    }
                    if (angular.isDefined(params.error)) {
                        url = Triarc.Data.appendUrlParameter(url, "error", encodeURIComponent(params.error));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Account", "any", false);
                    return dataRequest;
                };
                AccountResource.prototype.getExternalLogin = function (params) {
                    var request = this.getExternalLoginRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                AccountResource.prototype.getExternalLoginsMultipleRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Account/GetExternalLogins";
                    if (angular.isDefined(params.returnUrl)) {
                        url = Triarc.Data.appendUrlParameter(url, "returnUrl", encodeURIComponent(params.returnUrl));
                    }
                    if (angular.isDefined(params.generateState)) {
                        url = Triarc.Data.appendUrlParameter(url, "generateState", encodeURIComponent(params.generateState));
                    }
                    if (angular.isDefined(params.$skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "$skip", encodeURIComponent(params.$skip));
                    }
                    if (angular.isDefined(params.$top)) {
                        url = Triarc.Data.appendUrlParameter(url, "$top", encodeURIComponent(params.$top));
                    }
                    if (angular.isDefined(params.$orderBy)) {
                        url = Triarc.Data.appendUrlParameter(url, "$orderBy", encodeURIComponent(params.$orderBy));
                    }
                    if (angular.isDefined(params.$filter)) {
                        url = Triarc.Data.appendUrlParameter(url, "$filter", encodeURIComponent(params.$filter));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Account", "IExternalLoginViewModel[]", false);
                    return dataRequest;
                };
                AccountResource.prototype.getExternalLoginsMultiple = function (params) {
                    var request = this.getExternalLoginsMultipleRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                AccountResource.prototype.registerRequest = function (data) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Account/Register";
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, data, "Account", "any", true);
                    return dataRequest;
                };
                AccountResource.prototype.register = function (data) {
                    var request = this.registerRequest(data);
                    return this.$requestSender.requestValue(request);
                };
                AccountResource.prototype.registerExternalRequest = function (data) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Account/RegisterExternal";
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, data, "Account", "any", true);
                    return dataRequest;
                };
                AccountResource.prototype.registerExternal = function (data) {
                    var request = this.registerExternalRequest(data);
                    return this.$requestSender.requestValue(request);
                };
                AccountResource.prototype.newAppUser = function () {
                    return {};
                };
                AccountResource.prototype.newUserVm = function () {
                    return {};
                };
                AccountResource.prototype.newUserInfoViewModel = function () {
                    return {};
                };
                AccountResource.prototype.newManageInfoViewModel = function () {
                    return {};
                };
                AccountResource.prototype.newExternalLoginViewModel = function () {
                    return {};
                };
                AccountResource.prototype.newLoginViewModel = function () {
                    return {};
                };
                AccountResource.prototype.newChangePasswordBindingModel = function () {
                    return {};
                };
                AccountResource.prototype.newSetPasswordBindingModel = function () {
                    return {};
                };
                AccountResource.prototype.newAddExternalLoginBindingModel = function () {
                    return {};
                };
                AccountResource.prototype.newRemoveLoginBindingModel = function () {
                    return {};
                };
                AccountResource.prototype.newRegisterVm = function () {
                    return {};
                };
                AccountResource.prototype.newRegisterExternalBindingModel = function () {
                    return {};
                };
                AccountResource.prototype.newEmployeeCm = function () {
                    return {};
                };
                AccountResource.prototype.newLocationVm = function () {
                    return {};
                };
                AccountResource.prototype.newAppConfig = function () {
                    return {};
                };
                return AccountResource;
            })();
            Data.AccountResource = AccountResource;
            ;
            var PersonalMessageResource = (function () {
                function PersonalMessageResource($requestSender) {
                    this.$requestSender = $requestSender;
                }
                PersonalMessageResource.prototype.getLatestMessagesMultipleRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/PersonalMessage/GetLatestMessages";
                    if (angular.isDefined(params.employeeId)) {
                        url = Triarc.Data.appendUrlParameter(url, "employeeId", encodeURIComponent(params.employeeId));
                    }
                    if (angular.isDefined(params.$skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "$skip", encodeURIComponent(params.$skip));
                    }
                    if (angular.isDefined(params.$top)) {
                        url = Triarc.Data.appendUrlParameter(url, "$top", encodeURIComponent(params.$top));
                    }
                    if (angular.isDefined(params.$orderBy)) {
                        url = Triarc.Data.appendUrlParameter(url, "$orderBy", encodeURIComponent(params.$orderBy));
                    }
                    if (angular.isDefined(params.$filter)) {
                        url = Triarc.Data.appendUrlParameter(url, "$filter", encodeURIComponent(params.$filter));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "PersonalMessage", "IMessage[]", false);
                    return dataRequest;
                };
                PersonalMessageResource.prototype.getLatestMessagesMultiple = function (params) {
                    var request = this.getLatestMessagesMultipleRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                PersonalMessageResource.prototype.saveMessageRequest = function (data) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/PersonalMessage/SaveMessage";
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, data, "PersonalMessage", "any", true);
                    return dataRequest;
                };
                PersonalMessageResource.prototype.saveMessage = function (data) {
                    var request = this.saveMessageRequest(data);
                    return this.$requestSender.requestValue(request);
                };
                PersonalMessageResource.prototype.markAsReadRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/PersonalMessage/MarkAsRead";
                    if (angular.isDefined(params.messageId)) {
                        url = Triarc.Data.appendUrlParameter(url, "messageId", encodeURIComponent(params.messageId));
                    }
                    if (angular.isDefined(params.personId)) {
                        url = Triarc.Data.appendUrlParameter(url, "personId", encodeURIComponent(params.personId));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, {}, "PersonalMessage", "any", false);
                    return dataRequest;
                };
                PersonalMessageResource.prototype.markAsRead = function (params) {
                    var request = this.markAsReadRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                PersonalMessageResource.prototype.getSentMessagesMultipleRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/PersonalMessage/GetSentMessages";
                    if (angular.isDefined(params.personId)) {
                        url = Triarc.Data.appendUrlParameter(url, "personId", encodeURIComponent(params.personId));
                    }
                    if (angular.isDefined(params.$skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "$skip", encodeURIComponent(params.$skip));
                    }
                    if (angular.isDefined(params.$top)) {
                        url = Triarc.Data.appendUrlParameter(url, "$top", encodeURIComponent(params.$top));
                    }
                    if (angular.isDefined(params.$orderBy)) {
                        url = Triarc.Data.appendUrlParameter(url, "$orderBy", encodeURIComponent(params.$orderBy));
                    }
                    if (angular.isDefined(params.$filter)) {
                        url = Triarc.Data.appendUrlParameter(url, "$filter", encodeURIComponent(params.$filter));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "PersonalMessage", "ISentMessage[]", false);
                    return dataRequest;
                };
                PersonalMessageResource.prototype.getSentMessagesMultiple = function (params) {
                    var request = this.getSentMessagesMultipleRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                PersonalMessageResource.prototype.newMessage = function () {
                    return {};
                };
                PersonalMessageResource.prototype.newSentMessage = function () {
                    return {};
                };
                PersonalMessageResource.prototype.newSaveMessage = function () {
                    return {};
                };
                return PersonalMessageResource;
            })();
            Data.PersonalMessageResource = PersonalMessageResource;
            ;
            var TimeEntryTypeResource = (function () {
                function TimeEntryTypeResource($requestSender) {
                    this.$requestSender = $requestSender;
                }
                TimeEntryTypeResource.prototype.searchMultipleRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/TimeEntryType/Search";
                    if (angular.isDefined(params.searchValue)) {
                        url = Triarc.Data.appendUrlParameter(url, "searchValue", encodeURIComponent(params.searchValue));
                    }
                    if (angular.isDefined(params.skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "skip", encodeURIComponent(params.skip));
                    }
                    if (angular.isDefined(params.take)) {
                        url = Triarc.Data.appendUrlParameter(url, "take", encodeURIComponent(params.take));
                    }
                    if (angular.isDefined(params.$skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "$skip", encodeURIComponent(params.$skip));
                    }
                    if (angular.isDefined(params.$top)) {
                        url = Triarc.Data.appendUrlParameter(url, "$top", encodeURIComponent(params.$top));
                    }
                    if (angular.isDefined(params.$orderBy)) {
                        url = Triarc.Data.appendUrlParameter(url, "$orderBy", encodeURIComponent(params.$orderBy));
                    }
                    if (angular.isDefined(params.$filter)) {
                        url = Triarc.Data.appendUrlParameter(url, "$filter", encodeURIComponent(params.$filter));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, {}, "TimeEntryType", "ITimeEntryTypeCm[]", false);
                    return dataRequest;
                };
                TimeEntryTypeResource.prototype.searchMultiple = function (params) {
                    var request = this.searchMultipleRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                TimeEntryTypeResource.prototype.getTypesByIdMultipleRequest = function (params, data) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/TimeEntryType/GetTypesById";
                    if (angular.isDefined(params.$skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "$skip", encodeURIComponent(params.$skip));
                    }
                    if (angular.isDefined(params.$top)) {
                        url = Triarc.Data.appendUrlParameter(url, "$top", encodeURIComponent(params.$top));
                    }
                    if (angular.isDefined(params.$orderBy)) {
                        url = Triarc.Data.appendUrlParameter(url, "$orderBy", encodeURIComponent(params.$orderBy));
                    }
                    if (angular.isDefined(params.$filter)) {
                        url = Triarc.Data.appendUrlParameter(url, "$filter", encodeURIComponent(params.$filter));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, data, "TimeEntryType", "ITimeEntryTypeCm[]", true);
                    return dataRequest;
                };
                TimeEntryTypeResource.prototype.getTypesByIdMultiple = function (params, data) {
                    var request = this.getTypesByIdMultipleRequest(params, data);
                    return this.$requestSender.requestValue(request);
                };
                TimeEntryTypeResource.prototype.newTimeEntryTypeCm = function () {
                    return {};
                };
                TimeEntryTypeResource.prototype.newSearchIdSet = function () {
                    return {};
                };
                return TimeEntryTypeResource;
            })();
            Data.TimeEntryTypeResource = TimeEntryTypeResource;
            ;
            var FileResource = (function () {
                function FileResource($requestSender) {
                    this.$requestSender = $requestSender;
                }
                FileResource.prototype.downloadRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/File/Download";
                    if (angular.isDefined(params.fileName)) {
                        url = Triarc.Data.appendUrlParameter(url, "fileName", encodeURIComponent(params.fileName));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "File", "any", false);
                    return dataRequest;
                };
                FileResource.prototype.download = function (params) {
                    var request = this.downloadRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                return FileResource;
            })();
            Data.FileResource = FileResource;
            ;
            var LocationResource = (function () {
                function LocationResource($requestSender) {
                    this.$requestSender = $requestSender;
                }
                LocationResource.prototype.getLocationByIdRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Location/GetLocationById";
                    if (angular.isDefined(params.id)) {
                        url = Triarc.Data.appendUrlParameter(url, "id", encodeURIComponent(params.id));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Location", "ILocationVm", false);
                    return dataRequest;
                };
                LocationResource.prototype.getLocationById = function (params) {
                    var request = this.getLocationByIdRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                LocationResource.prototype.getMultipleRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Location/Get";
                    if (angular.isDefined(params.$skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "$skip", encodeURIComponent(params.$skip));
                    }
                    if (angular.isDefined(params.$top)) {
                        url = Triarc.Data.appendUrlParameter(url, "$top", encodeURIComponent(params.$top));
                    }
                    if (angular.isDefined(params.$orderBy)) {
                        url = Triarc.Data.appendUrlParameter(url, "$orderBy", encodeURIComponent(params.$orderBy));
                    }
                    if (angular.isDefined(params.$filter)) {
                        url = Triarc.Data.appendUrlParameter(url, "$filter", encodeURIComponent(params.$filter));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Location", "ILocationVm[]", false);
                    return dataRequest;
                };
                LocationResource.prototype.getMultiple = function (params) {
                    var request = this.getMultipleRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                LocationResource.prototype.putRequest = function (data) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Location/Put";
                    var dataRequest = new Triarc.Data.DataRequest("PUT", url, data, "Location", "any", true);
                    return dataRequest;
                };
                LocationResource.prototype.put = function (data) {
                    var request = this.putRequest(data);
                    return this.$requestSender.requestValue(request);
                };
                LocationResource.prototype.deleteRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Location/Delete";
                    if (angular.isDefined(params.id)) {
                        url = Triarc.Data.appendUrlParameter(url, "id", encodeURIComponent(params.id));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("DELETE", url, {}, "Location", "any", false);
                    return dataRequest;
                };
                LocationResource.prototype.delete = function (params) {
                    var request = this.deleteRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                LocationResource.prototype.newLocationVm = function () {
                    return {};
                };
                return LocationResource;
            })();
            Data.LocationResource = LocationResource;
            ;
            var TimeEntryResource = (function () {
                function TimeEntryResource($requestSender) {
                    this.$requestSender = $requestSender;
                }
                TimeEntryResource.prototype.postSingleRequest = function (data) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/TimeEntry/PostSingle";
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, data, "TimeEntry", "any", true);
                    return dataRequest;
                };
                TimeEntryResource.prototype.postSingle = function (data) {
                    var request = this.postSingleRequest(data);
                    return this.$requestSender.requestValue(request);
                };
                TimeEntryResource.prototype.postMultipleRequest = function (data) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/TimeEntry/PostMultiple";
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, data, "TimeEntry", "any", true);
                    return dataRequest;
                };
                TimeEntryResource.prototype.postMultiple = function (data) {
                    var request = this.postMultipleRequest(data);
                    return this.$requestSender.requestValue(request);
                };
                TimeEntryResource.prototype.createOrUpdateTimeEntryRequest = function (data) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/TimeEntry/CreateOrUpdateTimeEntry";
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, data, "TimeEntry", "ITimeEntryCm", true);
                    return dataRequest;
                };
                TimeEntryResource.prototype.createOrUpdateTimeEntry = function (data) {
                    var request = this.createOrUpdateTimeEntryRequest(data);
                    return this.$requestSender.requestValue(request);
                };
                TimeEntryResource.prototype.getUnbookedTimeEntriesMultipleRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/TimeEntry/GetUnbookedTimeEntries";
                    if (angular.isDefined(params.employeeId)) {
                        url = Triarc.Data.appendUrlParameter(url, "employeeId", encodeURIComponent(params.employeeId));
                    }
                    if (angular.isDefined(params.$skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "$skip", encodeURIComponent(params.$skip));
                    }
                    if (angular.isDefined(params.$top)) {
                        url = Triarc.Data.appendUrlParameter(url, "$top", encodeURIComponent(params.$top));
                    }
                    if (angular.isDefined(params.$orderBy)) {
                        url = Triarc.Data.appendUrlParameter(url, "$orderBy", encodeURIComponent(params.$orderBy));
                    }
                    if (angular.isDefined(params.$filter)) {
                        url = Triarc.Data.appendUrlParameter(url, "$filter", encodeURIComponent(params.$filter));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "TimeEntry", "ITimeEntryCm[]", false);
                    return dataRequest;
                };
                TimeEntryResource.prototype.getUnbookedTimeEntriesMultiple = function (params) {
                    var request = this.getUnbookedTimeEntriesMultipleRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                TimeEntryResource.prototype.validateUserRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/TimeEntry/ValidateUser";
                    if (angular.isDefined(params.persNr)) {
                        url = Triarc.Data.appendUrlParameter(url, "persNr", encodeURIComponent(params.persNr));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "TimeEntry", "ICheckUserResult", false);
                    return dataRequest;
                };
                TimeEntryResource.prototype.validateUser = function (params) {
                    var request = this.validateUserRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                TimeEntryResource.prototype.deleteRequest = function (data) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/TimeEntry/Delete";
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, data, "TimeEntry", "boolean", true);
                    return dataRequest;
                };
                TimeEntryResource.prototype.delete = function (data) {
                    var request = this.deleteRequest(data);
                    return this.$requestSender.requestValue(request);
                };
                TimeEntryResource.prototype.validateWorkObjectRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/TimeEntry/ValidateWorkObject";
                    if (angular.isDefined(params.objectNumber)) {
                        url = Triarc.Data.appendUrlParameter(url, "objectNumber", encodeURIComponent(params.objectNumber));
                    }
                    if (angular.isDefined(params.positionNumber)) {
                        url = Triarc.Data.appendUrlParameter(url, "positionNumber", encodeURIComponent(params.positionNumber));
                    }
                    if (angular.isDefined(params.personalNumber)) {
                        url = Triarc.Data.appendUrlParameter(url, "personalNumber", encodeURIComponent(params.personalNumber));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "TimeEntry", "EAuftragVerificationStatus", false);
                    return dataRequest;
                };
                TimeEntryResource.prototype.validateWorkObject = function (params) {
                    var request = this.validateWorkObjectRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                TimeEntryResource.prototype.upateLegacyEntriesRequest = function () {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/TimeEntry/UpateLegacyEntries";
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "TimeEntry", "any", false);
                    return dataRequest;
                };
                TimeEntryResource.prototype.upateLegacyEntries = function () {
                    var request = this.upateLegacyEntriesRequest();
                    return this.$requestSender.requestValue(request);
                };
                TimeEntryResource.prototype.assignUsersToLegacyEntriesRequest = function () {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/TimeEntry/AssignUsersToLegacyEntries";
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "TimeEntry", "any", false);
                    return dataRequest;
                };
                TimeEntryResource.prototype.assignUsersToLegacyEntries = function () {
                    var request = this.assignUsersToLegacyEntriesRequest();
                    return this.$requestSender.requestValue(request);
                };
                TimeEntryResource.prototype.assignLocationsToLegacyEntriesRequest = function () {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/TimeEntry/AssignLocationsToLegacyEntries";
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "TimeEntry", "any", false);
                    return dataRequest;
                };
                TimeEntryResource.prototype.assignLocationsToLegacyEntries = function () {
                    var request = this.assignLocationsToLegacyEntriesRequest();
                    return this.$requestSender.requestValue(request);
                };
                TimeEntryResource.prototype.createPastBookingsRequest = function () {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/TimeEntry/CreatePastBookings";
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "TimeEntry", "any", false);
                    return dataRequest;
                };
                TimeEntryResource.prototype.createPastBookings = function () {
                    var request = this.createPastBookingsRequest();
                    return this.$requestSender.requestValue(request);
                };
                TimeEntryResource.prototype.submitUnsubmittedEntriesForDayRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/TimeEntry/SubmitUnsubmittedEntriesForDay";
                    if (angular.isDefined(params.year)) {
                        url = Triarc.Data.appendUrlParameter(url, "year", encodeURIComponent(params.year));
                    }
                    if (angular.isDefined(params.month)) {
                        url = Triarc.Data.appendUrlParameter(url, "month", encodeURIComponent(params.month));
                    }
                    if (angular.isDefined(params.day)) {
                        url = Triarc.Data.appendUrlParameter(url, "day", encodeURIComponent(params.day));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "TimeEntry", "any", false);
                    return dataRequest;
                };
                TimeEntryResource.prototype.submitUnsubmittedEntriesForDay = function (params) {
                    var request = this.submitUnsubmittedEntriesForDayRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                TimeEntryResource.prototype.searchTimeEntriesMultipleRequest = function (params, data) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/TimeEntry/SearchTimeEntries";
                    if (angular.isDefined(params.$skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "$skip", encodeURIComponent(params.$skip));
                    }
                    if (angular.isDefined(params.$top)) {
                        url = Triarc.Data.appendUrlParameter(url, "$top", encodeURIComponent(params.$top));
                    }
                    if (angular.isDefined(params.$orderBy)) {
                        url = Triarc.Data.appendUrlParameter(url, "$orderBy", encodeURIComponent(params.$orderBy));
                    }
                    if (angular.isDefined(params.$filter)) {
                        url = Triarc.Data.appendUrlParameter(url, "$filter", encodeURIComponent(params.$filter));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, data, "TimeEntry", "ITimeEntryVm[]", true);
                    return dataRequest;
                };
                TimeEntryResource.prototype.searchTimeEntriesMultiple = function (params, data) {
                    var request = this.searchTimeEntriesMultipleRequest(params, data);
                    return this.$requestSender.requestValue(request);
                };
                TimeEntryResource.prototype.getAvailableBookingTypesMultipleRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/TimeEntry/GetAvailableBookingTypes";
                    if (angular.isDefined(params.$skip)) {
                        url = Triarc.Data.appendUrlParameter(url, "$skip", encodeURIComponent(params.$skip));
                    }
                    if (angular.isDefined(params.$top)) {
                        url = Triarc.Data.appendUrlParameter(url, "$top", encodeURIComponent(params.$top));
                    }
                    if (angular.isDefined(params.$orderBy)) {
                        url = Triarc.Data.appendUrlParameter(url, "$orderBy", encodeURIComponent(params.$orderBy));
                    }
                    if (angular.isDefined(params.$filter)) {
                        url = Triarc.Data.appendUrlParameter(url, "$filter", encodeURIComponent(params.$filter));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "TimeEntry", "string[]", false);
                    return dataRequest;
                };
                TimeEntryResource.prototype.getAvailableBookingTypesMultiple = function (params) {
                    var request = this.getAvailableBookingTypesMultipleRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                TimeEntryResource.prototype.createTimeEntryRequest = function (data) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/TimeEntry/CreateTimeEntry";
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, data, "TimeEntry", "any", true);
                    return dataRequest;
                };
                TimeEntryResource.prototype.createTimeEntry = function (data) {
                    var request = this.createTimeEntryRequest(data);
                    return this.$requestSender.requestValue(request);
                };
                TimeEntryResource.prototype.newTimeEntryCm = function () {
                    return {};
                };
                TimeEntryResource.prototype.newCheckUserResult = function () {
                    return {};
                };
                TimeEntryResource.prototype.newTimeEntryVm = function () {
                    return {};
                };
                TimeEntryResource.prototype.newTimeEntryModel = function () {
                    return {};
                };
                TimeEntryResource.prototype.newTimeEntryCollection = function () {
                    return {};
                };
                TimeEntryResource.prototype.newTimeEntrySearchVm = function () {
                    return {};
                };
                return TimeEntryResource;
            })();
            Data.TimeEntryResource = TimeEntryResource;
            var mod = angular.module("tlDataServices");
            mod.provider('$tr-proxy', function () {
                return {
                    $get: ['$requestSender', function ($requestSender) {
                        var proxy = {
                            Version: new VersionResource($requestSender),
                            Image: new ImageResource($requestSender),
                            Employee: new EmployeeResource($requestSender),
                            Address: new AddressResource($requestSender),
                            Timesheet: new TimesheetResource($requestSender),
                            PdfGenerator: new PdfGeneratorResource($requestSender),
                            TimeBooking: new TimeBookingResource($requestSender),
                            Admin: new AdminResource($requestSender),
                            GlobalMessage: new GlobalMessageResource($requestSender),
                            Person: new PersonResource($requestSender),
                            Planning: new PlanningResource($requestSender),
                            Project: new ProjectResource($requestSender),
                            Expenses: new ExpensesResource($requestSender),
                            Config: new ConfigResource($requestSender),
                            ConfigurationProfile: new ConfigurationProfileResource($requestSender),
                            WorkReport: new WorkReportResource($requestSender),
                            Claim: new ClaimResource($requestSender),
                            Saldo: new SaldoResource($requestSender),
                            WorkObject: new WorkObjectResource($requestSender),
                            Account: new AccountResource($requestSender),
                            PersonalMessage: new PersonalMessageResource($requestSender),
                            TimeEntryType: new TimeEntryTypeResource($requestSender),
                            File: new FileResource($requestSender),
                            Location: new LocationResource($requestSender),
                            TimeEntry: new TimeEntryResource($requestSender),
                        };
                        return proxy;
                    }]
                };
            });
        })(Data = Web.Data || (Web.Data = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var timeRecorder = angular.module("tl-time-recorder", [
    "tlDataServices",
    "tlAuth",
    "tlValidate",
    "tlModal",
    "ui.bootstrap",
    "ui.router",
    "ui.validate",
    "pascalprecht.translate",
    "ngCookies",
    "ngSanitize",
    "ngAnimate",
    "ui.select",
    "tlLocalization",
    "tlText",
    "tlKeyPresses",
    "tlUtils",
    "tlDisablers",
    "tlPageLock",
    "tmh.dynamicLocale",
    "infinite-scroll",
    "treeControl",
    "blockUI",
    "tlScroll",
    "tlSignature",
    "ng.group",
    "tlLayout",
    "tlTimepicker",
    "tlAutofocus",
    "tlAutoselect"
]);
var TimeRecorder;
(function (TimeRecorder) {
    TimeRecorder.routingParent = null;
})(TimeRecorder || (TimeRecorder = {}));
timeRecorder.config([
    "$compileProvider",
    function ($compileProvider) {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|itms-services):/);
    }
]);
timeRecorder.config([
    "$httpProvider",
    function ($httpProvider) {
        $httpProvider.defaults.withCredentials = true;
    }
]);
//app.config([
//	"tmhDynamicLocaleProvider", tmhDynamicLocaleProvider => {
//		tmhDynamicLocaleProvider.localeLocationPattern('Scripts/i18n/angular-locale_{{locale}}.js');
//		tmhDynamicLocaleProvider.useCookieStorage();
//	}
//]);
/*app.config(['$httpProvider', function ($httpProvider) {
    //initialize get if not there
    // from http://stackoverflow.com/a/19771501/607038
    if (!$httpProvider.defaults.headers.get) {
        $httpProvider.defaults.headers.get = {};
    }
    //disable IE ajax request caching
    $httpProvider.defaults.headers.get['If-Modified-Since'] = '0';
}]);*/
timeRecorder.config([
    "$stateProvider",
    "$urlRouterProvider",
    function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state("tr", {
            url: "/time",
            parent: TimeRecorder.routingParent,
            template: "<ui-view class='time-recorder'></ui-view>"
        });
        $stateProvider.state("tr.home", {
            url: "/home",
            templateUrl: "Client/Views/home.html"
        });
        $stateProvider.state("tr.login", {
            url: "/login",
            templateUrl: "Client/Views/Login.html",
        });
        $stateProvider.state("tr.start", {
            url: "/start",
            templateUrl: "Client/Views/start.html",
        });
        $stateProvider.state("tr.users", {
            url: "/users",
            templateUrl: "Client/Views/users.html",
        });
        $stateProvider.state("tr.persons", {
            url: "/persons",
            templateUrl: "Client/Views/persons.html",
        });
        $stateProvider.state("tr.locations", {
            url: "/locations",
            templateUrl: "Client/Views/locations.html",
        });
        $stateProvider.state("tr.roles", {
            url: "/roles",
            templateUrl: "Client/Views/roles.html",
        });
        $stateProvider.state("tr.downloads", {
            url: "/downloads",
            templateUrl: "Client/Views/downloads.html"
        });
        $stateProvider.state("tr.personalMessages", {
            url: "/personalMessages",
            templateUrl: "Client/Views/personalMessages.html",
        });
        $stateProvider.state("tr.globalMessages", {
            url: "/globalMessages",
            templateUrl: "Client/Views/globalMessages.html",
        });
        $stateProvider.state("tr.config", {
            url: "/config",
            templateUrl: "Client/Views/config.html",
        });
        $stateProvider.state("tr.entries", {
            url: "/bookings",
            templateUrl: "Client/Views/entries.html",
        });
        $stateProvider.state("tr.projects", {
            url: "/projects",
            templateUrl: "Client/Views/projects.html",
        });
        $stateProvider.state("tr.expenses", {
            url: "/expenses",
            params: {
                date: null
            },
            templateUrl: "Client/Views/expenses.html"
        });
        $stateProvider.state("tr.expenses.side", {
            templateUrl: "Client/Views/sidePage.html",
            controller: "TrExpensesSideController as side",
            abstract: true
        });
        $stateProvider.state("tr.expenses.side.add", {
            templateUrl: "Client/Views/expenses.form.html",
            params: {
                initialDate: new Date()
            }
        });
        $stateProvider.state("tr.expenses.side.edit", {
            url: "/expenses/edit/:id",
            templateUrl: "Client/Views/expenses.form.html"
        });
        $stateProvider.state("tr.timebookings", {
            url: "/timebookings",
            templateUrl: "Client/Views/timebooking/timebookings.html"
        });
        $stateProvider.state("tr.timebookings.side", {
            templateUrl: "Client/Views/sidePage.html",
            controller: "TrTimeBookingSideController as side",
            abstract: true
        });
        $stateProvider.state("tr.timebookings.side.add", {
            url: "/add/{date:[0-9]{2}\-[0-9]{2}\-[0-9]{4}}",
            templateUrl: "Client/Views/timebooking/timebookings.form.html",
        });
        $stateProvider.state("tr.timebookings.side.edit", {
            url: "/edit/:id/:mode",
            templateUrl: "Client/Views/timebooking/timebookings.form.html"
        });
        $stateProvider.state("tr.timebookings.add", {
            url: "/timebookings/add",
            templateUrl: "Client/Views/timebooking/timebookings.form.html"
        });
        $stateProvider.state("tr.timesheet", {
            url: "/timesheet",
            templateUrl: "Client/Views/timesheet/timesheet.html",
            onEnter: function () {
                var timeout = setTimeout(function () {
                    clearTimeout(timeout);
                    angular.element(".body-content").addClass("container-full-width");
                }, 100);
            },
            onExit: function () {
                var timeout = setTimeout(function () {
                    clearTimeout(timeout);
                    angular.element(".body-content").removeClass("container-full-width");
                }, 100);
            }
        });
        // work report states
        $stateProvider.state("tr.employeeWorkReport", {
            url: "/employeeWorkReport",
            template: "<ui-view></ui-view>",
            abstract: true
        });
        $stateProvider.state("tr.employeeWorkReport.add.side", {
            templateUrl: "Client/Views/sidePage.html",
            controller: "TrWorkReportSideController as side",
            abstract: true
        });
        $stateProvider.state("tr.employeeWorkReport.add.side.contactDetails", {
            url: "/contactDetails/:contactId?saveEvt?clientId",
            templateUrl: "Client/Views/employee/contactDetails.html"
        });
        $stateProvider.state("tr.employeeWorkReport.edit.side.contactDetails", {
            url: "/contactDetails/:contactId?saveEvt?clientId",
            templateUrl: "Client/Views/employee/contactDetails.html"
        });
        $stateProvider.state("tr.employeeWorkReport.search", {
            url: "/search:search?",
            templateUrl: "Client/Views/employee/employeeSearchWorkReport.html"
        });
        $stateProvider.state("tr.employeeWorkReport.search.side", {
            templateUrl: "Client/Views/sidePage.html",
            controller: "TrWorkReportSideController as side",
            abstract: true
        });
        $stateProvider.state("tr.employeeWorkReport.search.side.createExternalWorkReport", {
            url: "/createExternalWorkReport/",
            templateUrl: "Client/Views/employee/createExternalWorkReport.html"
        });
        $stateProvider.state("tr.employeeWorkReport.edit", {
            url: "/edit/:workReportId",
            templateUrl: "Client/Views/employee/employeeEditWorkReport.html",
            // parent: TimeRecorder.routingParent,
            controller: "TrEditWorkReportController as ctrl"
        });
        $stateProvider.state("tr.employeeWorkReport.edit.side", {
            templateUrl: "Client/Views/sidePage.html",
            controller: "TrWorkReportSideController as side",
            abstract: true
        });
        $stateProvider.state("tr.employeeWorkReport.add", {
            url: "/add/:projectId/",
            templateUrl: "Client/Views/employee/employeeEditWorkReport.html",
            //parent: TimeRecorder.routingParent,
            controller: "TrAddWorkReportController as ctrl"
        });
    }
]);
timeRecorder.directive("slimScroll", [
    function () {
        return {
            restrict: "A",
            link: function (scope, el, attr) {
                var top = el.offset().top;
                var height = attr.height ? attr.height : $(window).height() - top - 50;
                el.slimScroll({ height: height + 'px', distance: '-12px', color: '#aaaaaa', railColor: '#cccccc', railVisible: true });
            }
        };
    }
]);
timeRecorder.directive('clock', [
    "$timeout",
    "dateFilter",
    function ($timeout, dateFilter) {
        return function (scope, element, attrs) {
            var timeoutId; // timeoutId, so that we can cancel the time updates
            // schedule update in one second
            function updateLater() {
                // save the timeoutId for canceling
                timeoutId = $timeout(function () {
                    element.html(dateFilter(new Date(), 'dd.MM.yyyy') + '<br/>' + dateFilter(new Date(), 'HH:mm'));
                    updateLater(); // schedule another update
                }, 1000);
            }
            // listen on DOM destroy (removal) event, and cancel the next UI update
            // to prevent updating time ofter the DOM element was removed.
            element.bind('$destroy', function () {
                $timeout.cancel(timeoutId);
            });
            updateLater(); // kick off the UI update process.
        };
    }
]);
timeRecorder.directive("ngEnter", [
    function () {
        return function (scope, element, attrs) {
            element.bind("keydown keypress", function (e) {
                if (e.which === 13) {
                    scope.$apply(function () {
                        scope.$eval(attrs.ngEnter);
                    });
                    e.preventDefault();
                }
            });
        };
    }
]);
timeRecorder.filter('unsafe', ['$sce', function ($sce) {
    return $sce.trustAsHtml;
}]);
timeRecorder.directive('toSelect', [
    function () {
        var dir = {
            restrict: 'A',
            scope: {
                source: '=',
                model: '=',
                disabled: '='
            },
            templateUrl: "Client/Views/templates/toSelect.html",
            transclude: true,
            link: function (scope, el, attr) {
                scope.search = "";
                scope.filter = function (item) {
                    var search = scope.search.toLowerCase();
                    var index = item.value.toLowerCase().indexOf(search);
                    if (index > -1) {
                        item.htmlString = item.value.substring(0, index) + '<b>' + item.value.substring(index, index + search.length) + '</b>' + item.value.substring(index + search.length, item.value.length);
                        return true;
                    }
                    return false;
                };
                scope.addItem = function (item) {
                    scope.model.add(item);
                    scope.search = "";
                    focus();
                };
                scope.removeItem = function (item) {
                    for (var i = 0; i < scope.model.length; ++i) {
                        if (scope.model[i].id == item.id) {
                            scope.model.removeAt(i);
                            break;
                        }
                    }
                    focus();
                    scope.search = "";
                };
                scope.realign = function () {
                    var input = $(".toSelect-input", el);
                    var offset = input.offset();
                    $(".toSelect-matches", el).css({ top: (offset.top + 39) + "px", left: offset.left + "px" });
                    var w = $('.toSelect-container').width();
                    $('.toSelect-selected').css({ "max-width": (w - 50) + "px" });
                };
                var focus = function () {
                    $(".toSelect-input", el).focus();
                };
            },
        };
        return dir;
    }
]);
timeRecorder.filter('duration', function () { return function (from, to) {
    var duration = moment.duration(moment(to).diff(moment(from)));
    return moment(duration).format("h.m");
}; });
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Business;
        (function (Business) {
            var TimesheetEntryTypeVm = (function () {
                function TimesheetEntryTypeVm(cm) {
                    this.cm = cm;
                }
                Object.defineProperty(TimesheetEntryTypeVm.prototype, "id", {
                    get: function () {
                        return this.cm().id;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimesheetEntryTypeVm.prototype, "abbreviation", {
                    get: function () {
                        return this.cm().abbreviation;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimesheetEntryTypeVm.prototype, "name", {
                    get: function () {
                        return this.cm().name;
                    },
                    enumerable: true,
                    configurable: true
                });
                return TimesheetEntryTypeVm;
            })();
            Business.TimesheetEntryTypeVm = TimesheetEntryTypeVm;
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Business;
        (function (Business) {
            var TimesheetAvailabilityTimeEntryVm = (function () {
                function TimesheetAvailabilityTimeEntryVm(cm, entryType) {
                    this.cm = cm;
                    this.entryType = entryType;
                }
                Object.defineProperty(TimesheetAvailabilityTimeEntryVm.prototype, "entryTypeId", {
                    get: function () {
                        return this.cm().entryTypeId;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimesheetAvailabilityTimeEntryVm.prototype, "mins", {
                    get: function () {
                        return this.cm().mins;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimesheetAvailabilityTimeEntryVm.prototype, "abbreviation", {
                    get: function () {
                        return this.entryType().abbreviation;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimesheetAvailabilityTimeEntryVm.prototype, "name", {
                    get: function () {
                        return this.entryType().name;
                    },
                    enumerable: true,
                    configurable: true
                });
                return TimesheetAvailabilityTimeEntryVm;
            })();
            Business.TimesheetAvailabilityTimeEntryVm = TimesheetAvailabilityTimeEntryVm;
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Business;
        (function (Business) {
            var TimesheetTimeEntryVm = (function () {
                function TimesheetTimeEntryVm(cm, availabilityEntryTypes) {
                    var _this = this;
                    this.cm = cm;
                    this.availabilityEntryTypes = availabilityEntryTypes;
                    this._totalUnavalable = null;
                    this._availabilityTimeEntries = cm().availabilityTimeEntries.toEnumerable().select(function (te) {
                        return new Business.TimesheetAvailabilityTimeEntryVm(function () { return te; }, function () { return _this.availabilityEntryTypes().toEnumerable().firstOrDefault(function (t) { return t.id === te.entryTypeId; }); });
                    }).toArray();
                    // fill in the missing availability time entries for drawing
                    var entriesSet = this._availabilityTimeEntries.toEnumerable().select(function (te) { return te.entryTypeId; }).toArray();
                    var unsetEntries = this.availabilityEntryTypes().toEnumerable().where(function (et) { return !entriesSet.contains(et.id); }).toArray();
                    this._availabilityTimeEntries.addRange(unsetEntries.toEnumerable().select(function (e) { return new Business.TimesheetAvailabilityTimeEntryVm(function () {
                        return {
                            entryTypeId: e.id,
                            mins: null
                        };
                    }, function () { return e; }); }).toArray());
                }
                Object.defineProperty(TimesheetTimeEntryVm.prototype, "date", {
                    get: function () {
                        return this.cm().date;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimesheetTimeEntryVm.prototype, "planned", {
                    get: function () {
                        return this.cm().plannedMins;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimesheetTimeEntryVm.prototype, "done", {
                    get: function () {
                        // unavailabilities get added to the total done value
                        return this.cm().doneMins + this.totalAvailability;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimesheetTimeEntryVm.prototype, "availabilityTimeEntries", {
                    get: function () {
                        return this._availabilityTimeEntries;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimesheetTimeEntryVm.prototype, "totalAvailability", {
                    get: function () {
                        var _this = this;
                        if (Triarc.hasValue(this._totalUnavalable))
                            return this._totalUnavalable;
                        this._totalUnavalable = 0;
                        this.cm().availabilityTimeEntries.forEach(function (a) {
                            _this._totalUnavalable += angular.isNumber(a.mins) ? a.mins : 0;
                        });
                        return this._totalUnavalable;
                    },
                    enumerable: true,
                    configurable: true
                });
                return TimesheetTimeEntryVm;
            })();
            Business.TimesheetTimeEntryVm = TimesheetTimeEntryVm;
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
//    get sickLeave() {
//      return this.cm().sickLeave;
//    }
//
//    get sicknessWaitingPeriod() {
//      return this.cm().sicknessWaitingPeriod;
//    }
//
//    get dailySicknessAllowence() {
//      return this.cm().dailySicknessAllowence;
//    }
//
//    get accidentWaiting() {
//      return this.cm().accidentWaiting;
//    }
//
//    get accidentDailyAllowence() {
//      return this.cm().accidentDailyAllowence;
//    }
//
//    get holiday() {
//      return this.cm().holiday;
//    }
//
//    get maternityLeave() {
//      return this.cm().maternityLeave;
//    }
//
//    get absent() {
//      return this.cm().absent;
//    }
//
//
//    get absentWithoutPay() {
//      return this.cm().absentWithoutPay;
//    }
//
//    get regionalHoliday() {
//      return this.cm().regionalHoliday;
//    } 
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Business;
        (function (Business) {
            var TimesheetEmployeeVm = (function () {
                function TimesheetEmployeeVm(cm, availabilityEntryTypes) {
                    this.cm = cm;
                    this.availabilityEntryTypes = availabilityEntryTypes;
                    this._totalMonthPlanned = null;
                    this._totalMonthDone = null;
                    this._totalMonthUnAvailable = null;
                }
                Object.defineProperty(TimesheetEmployeeVm.prototype, "id", {
                    get: function () {
                        return this.cm().id;
                    },
                    set: function (id) {
                        this.cm().id = id;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimesheetEmployeeVm.prototype, "name", {
                    get: function () {
                        return this.firstName + " " + this.lastName;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimesheetEmployeeVm.prototype, "firstName", {
                    get: function () {
                        return this.cm().firstName;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimesheetEmployeeVm.prototype, "lastName", {
                    get: function () {
                        return this.cm().lastName;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimesheetEmployeeVm.prototype, "timeEntries", {
                    get: function () {
                        var _this = this;
                        if (angular.isArray(this._dayEntries))
                            return this._dayEntries;
                        this._dayEntries = [];
                        this._dayEntries = this.cm().timeEntries.toEnumerable().select(function (te) { return new TimeRecorder.Web.Business.TimesheetTimeEntryVm(function () { return te; }, function () { return _this.availabilityEntryTypes(); }); }).toArray();
                        return this._dayEntries;
                    },
                    enumerable: true,
                    configurable: true
                });
                TimesheetEmployeeVm.prototype.timeEntry = function (date) {
                    var _this = this;
                    var timeEntry = this.timeEntries.toEnumerable().firstOrDefault(function (te) { return moment(te.date).isSame(moment(date), "day"); });
                    if (Triarc.hasNoValue(timeEntry)) {
                        timeEntry = new TimeRecorder.Web.Business.TimesheetTimeEntryVm(function () { return {
                            plannedMins: 0,
                            doneMins: 0,
                            date: new Date(date.getTime()),
                            availabilityTimeEntries: []
                        }; }, function () { return _this.availabilityEntryTypes(); });
                        this.timeEntries.add(timeEntry);
                    }
                    return timeEntry;
                };
                Object.defineProperty(TimesheetEmployeeVm.prototype, "totalMonthPlanned", {
                    get: function () {
                        var _this = this;
                        if (Triarc.hasValue(this._totalMonthPlanned))
                            return this._totalMonthPlanned;
                        this._totalMonthPlanned = 0;
                        var timeEntries = this.timeEntries;
                        timeEntries.forEach(function (te) {
                            _this._totalMonthPlanned += angular.isNumber(te.planned) ? te.planned : 0;
                        });
                        return this._totalMonthPlanned;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimesheetEmployeeVm.prototype, "totalMonthDone", {
                    get: function () {
                        var _this = this;
                        if (Triarc.hasValue(this._totalMonthDone))
                            return this._totalMonthDone;
                        this._totalMonthDone = 0;
                        var timeEntries = this.timeEntries;
                        timeEntries.forEach(function (te) {
                            _this._totalMonthDone += angular.isNumber(te.done) ? te.done : 0;
                        });
                        return this._totalMonthDone;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimesheetEmployeeVm.prototype, "totalMonthAvailabilityEntries", {
                    get: function () {
                        var _this = this;
                        if (Triarc.hasValue(this._totalMonthUnAvailable))
                            return this._totalMonthUnAvailable;
                        this._totalMonthUnAvailable = 0;
                        var timeEntries = this.timeEntries;
                        timeEntries.forEach(function (te) {
                            _this._totalMonthUnAvailable += angular.isNumber(te.totalAvailability) ? te.totalAvailability : 0;
                        });
                        return this._totalMonthUnAvailable;
                    },
                    enumerable: true,
                    configurable: true
                });
                TimesheetEmployeeVm.prototype.totalMonthAvailabilityFor = function (availabilityEntryType) {
                    var totalUnAvailability = 0;
                    var timeEntries = this.timeEntries;
                    timeEntries.forEach(function (te) {
                        te.availabilityTimeEntries.forEach(function (unAvailability) {
                            if (unAvailability.entryTypeId === availabilityEntryType.id) {
                                totalUnAvailability += angular.isNumber(unAvailability.mins) ? unAvailability.mins : 0;
                            }
                        });
                    });
                    return totalUnAvailability;
                };
                TimesheetEmployeeVm.prototype.update = function (cm) {
                };
                TimesheetEmployeeVm.prototype.reset = function () {
                };
                TimesheetEmployeeVm.prototype.toCm = function () {
                    var cm = this.cm();
                    return cm;
                };
                return TimesheetEmployeeVm;
            })();
            Business.TimesheetEmployeeVm = TimesheetEmployeeVm;
            ;
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Business;
        (function (Business) {
            var TimesheetVm = (function () {
                function TimesheetVm(cm) {
                    this.cm = cm;
                }
                Object.defineProperty(TimesheetVm.prototype, "timeSheetEmployees", {
                    get: function () {
                        var _this = this;
                        if (angular.isArray(this._timeSheetEmployees))
                            return this._timeSheetEmployees;
                        this._timeSheetEmployees = [];
                        this._timeSheetEmployees.addRange(this.cm().timesheetEmployees.toEnumerable().select(function (e) { return new Business.TimesheetEmployeeVm(function () { return e; }, function () { return _this._availabilityEntryTypes; }); }).toArray());
                        return this._timeSheetEmployees;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimesheetVm.prototype, "thresholds", {
                    get: function () {
                        if (angular.isArray(this._thresholds))
                            return this._thresholds;
                        this._thresholds = [];
                        this._thresholds.addRange(this.cm().thresholds.toEnumerable().select(function (t) { return new Business.TimesheetThresholdVm(function () { return t; }); }).toArray());
                        return this._thresholds;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimesheetVm.prototype, "availabilityEntryTypes", {
                    get: function () {
                        if (angular.isArray(this._availabilityEntryTypes))
                            return this._availabilityEntryTypes;
                        this._availabilityEntryTypes = [];
                        this._availabilityEntryTypes.addRange(this.cm().timeEntryTypeCms.toEnumerable().select(function (t) { return new Business.TimesheetEntryTypeVm(function () { return t; }); }).toArray());
                        return this._availabilityEntryTypes;
                    },
                    enumerable: true,
                    configurable: true
                });
                TimesheetVm.prototype.update = function (cm) {
                };
                TimesheetVm.prototype.reset = function () {
                };
                TimesheetVm.prototype.toCm = function () {
                    var cm = this.cm();
                    return cm;
                };
                return TimesheetVm;
            })();
            Business.TimesheetVm = TimesheetVm;
            ;
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Business;
        (function (Business) {
            var TimesheetThresholdVm = (function () {
                function TimesheetThresholdVm(cm) {
                    this.cm = cm;
                }
                Object.defineProperty(TimesheetThresholdVm.prototype, "fromMins", {
                    get: function () {
                        return this.cm().fromMins;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimesheetThresholdVm.prototype, "toMins", {
                    get: function () {
                        return this.cm().toMins;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimesheetThresholdVm.prototype, "color", {
                    get: function () {
                        return this.cm().colorCode;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimesheetThresholdVm.prototype, "type", {
                    get: function () {
                        return this.cm().type;
                    },
                    enumerable: true,
                    configurable: true
                });
                return TimesheetThresholdVm;
            })();
            Business.TimesheetThresholdVm = TimesheetThresholdVm;
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
/// <reference path="timesheetimeentrytypevm.ts" />
/// <reference path="TimesheetAvailabilityTimeEntryVm.ts" />
/// <reference path="TimesheetEntryVm.ts" />
/// <reference path="timesheetemployeevm.ts" />
/// <reference path="timesheetvm.ts" />
/// <reference path="timesheetthreshold.ts" />
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Business;
        (function (Business) {
            var ExpenseVm = (function () {
                function ExpenseVm(cm) {
                    this.cm = cm;
                }
                ExpenseVm.prototype.getCm = function () {
                    return this.cm();
                };
                Object.defineProperty(ExpenseVm.prototype, "id", {
                    get: function () {
                        return this.cm().id;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExpenseVm.prototype, "description", {
                    get: function () {
                        return this.cm().description;
                    },
                    set: function (description) {
                        this.cm().description = description;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExpenseVm.prototype, "employeeId", {
                    get: function () {
                        return this.cm().employeeId;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExpenseVm.prototype, "value", {
                    get: function () {
                        return this.cm().value;
                    },
                    set: function (value) {
                        this.cm().value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExpenseVm.prototype, "date", {
                    get: function () {
                        return this.cm().date;
                    },
                    set: function (date) {
                        this.cm().date = date;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExpenseVm.prototype, "timestamp", {
                    get: function () {
                        return this.cm().timestamp;
                    },
                    set: function (timestamp) {
                        this.cm().timestamp = timestamp;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExpenseVm.prototype, "expenseTypeId", {
                    get: function () {
                        return this.cm().expenseTypeId;
                    },
                    set: function (expenseTypeId) {
                        this.cm().expenseTypeId = expenseTypeId;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExpenseVm.prototype, "visaEmployeeId", {
                    get: function () {
                        return this.cm().visaEmployeeId;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExpenseVm.prototype, "visaTimestamp", {
                    get: function () {
                        return this.cm().visaTimestamp;
                    },
                    enumerable: true,
                    configurable: true
                });
                ExpenseVm.prototype.update = function (entityCm) {
                    this.cm = function () { return entityCm; };
                };
                return ExpenseVm;
            })();
            Business.ExpenseVm = ExpenseVm;
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Business;
        (function (Business) {
            var ExpenseTypeVm = (function () {
                function ExpenseTypeVm(cm) {
                    this.cm = cm;
                }
                Object.defineProperty(ExpenseTypeVm.prototype, "id", {
                    get: function () {
                        return this.cm().id;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExpenseTypeVm.prototype, "name", {
                    get: function () {
                        return this.cm().name;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExpenseTypeVm.prototype, "description", {
                    get: function () {
                        return this.cm().description;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExpenseTypeVm.prototype, "validFrom", {
                    get: function () {
                        return this.cm().validFrom;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExpenseTypeVm.prototype, "validTo", {
                    get: function () {
                        return this.cm().validTo;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExpenseTypeVm.prototype, "amountBased", {
                    get: function () {
                        return this.cm().amountBased;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExpenseTypeVm.prototype, "timestamp", {
                    get: function () {
                        return this.cm().timestamp;
                    },
                    set: function (timestamp) {
                        this.cm().timestamp = timestamp;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExpenseTypeVm.prototype, "unitOfMeasure", {
                    get: function () {
                        return this.cm().unitOfMeasure;
                    },
                    enumerable: true,
                    configurable: true
                });
                return ExpenseTypeVm;
            })();
            Business.ExpenseTypeVm = ExpenseTypeVm;
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Bu;
        (function (Bu) {
            var PersonVm = (function () {
                function PersonVm(cm) {
                    this.cm = cm;
                }
                Object.defineProperty(PersonVm.prototype, "addressId", {
                    get: function () {
                        return this.cm().addressId;
                    },
                    set: function (val) {
                        this.cm().addressId = val;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PersonVm.prototype, "lastName", {
                    get: function () {
                        return this.cm().lastName;
                    },
                    set: function (val) {
                        this.cm().lastName = val;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PersonVm.prototype, "firstName", {
                    get: function () {
                        return this.cm().firstName;
                    },
                    set: function (val) {
                        this.cm().firstName = val;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PersonVm.prototype, "email", {
                    get: function () {
                        return this.cm().email;
                    },
                    set: function (val) {
                        this.cm().email = val;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PersonVm.prototype, "telephone", {
                    get: function () {
                        return this.cm().telephone;
                    },
                    set: function (val) {
                        this.cm().telephone = val;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PersonVm.prototype, "id", {
                    get: function () {
                        return this.cm().id;
                    },
                    set: function (val) {
                        this.cm().id = val;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PersonVm.prototype, "timestamp", {
                    get: function () {
                        return this.cm().timestamp;
                    },
                    set: function (val) {
                        this.cm().timestamp = val;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PersonVm.prototype, "city", {
                    //    get clientId() {
                    //      return this.cm().clientId;
                    //    }
                    //
                    //    set clientId(val) {
                    //      this.cm().clientId = val;
                    //    }
                    get: function () {
                        return this.cm().city;
                    },
                    set: function (val) {
                        this.cm().city = val;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PersonVm.prototype, "zipCode", {
                    get: function () {
                        return this.cm().zipCode;
                    },
                    set: function (val) {
                        this.cm().zipCode = val;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PersonVm.prototype, "country", {
                    get: function () {
                        return this.cm().country;
                    },
                    set: function (val) {
                        this.cm().country = val;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PersonVm.prototype, "countryCode", {
                    get: function () {
                        return this.cm().countryCode;
                    },
                    set: function (val) {
                        this.cm().countryCode = val;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PersonVm.prototype, "street", {
                    get: function () {
                        return this.cm().street;
                    },
                    set: function (val) {
                        this.cm().street = val;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PersonVm.prototype, "streetNumber", {
                    get: function () {
                        return this.cm().streetNumber;
                    },
                    set: function (val) {
                        this.cm().streetNumber = val;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PersonVm.prototype, "fullName", {
                    get: function () {
                        return (this.cm().firstName || "") + " " + (this.cm().lastName || "");
                    },
                    enumerable: true,
                    configurable: true
                });
                PersonVm.prototype.update = function (entityCm) {
                    this.reset();
                    this.cm = function () { return entityCm; };
                };
                PersonVm.prototype.reset = function () {
                };
                PersonVm.prototype.toCm = function () {
                    var cm = this.cm();
                    return cm;
                };
                return PersonVm;
            })();
            Bu.PersonVm = PersonVm;
        })(Bu = Web.Bu || (Web.Bu = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Business;
        (function (Business) {
            var PersonVm = TimeRecorder.Web.Bu.PersonVm;
            var EmployeeVm = (function (_super) {
                __extends(EmployeeVm, _super);
                function EmployeeVm(cm) {
                    _super.call(this, cm);
                    this.cm = cm;
                }
                EmployeeVm.prototype.update = function (entityCm) {
                    this.reset();
                    this.cm = function () { return entityCm; };
                };
                EmployeeVm.prototype.reset = function () {
                };
                EmployeeVm.prototype.toCm = function () {
                    var cm = this.cm();
                    return cm;
                };
                Object.defineProperty(EmployeeVm.prototype, "employeeId", {
                    get: function () {
                        return this.cm().employeeId;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(EmployeeVm.prototype, "profileId", {
                    get: function () {
                        return this.cm().profileId;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(EmployeeVm.prototype, "userId", {
                    get: function () {
                        return this.cm().userId;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(EmployeeVm.prototype, "userName", {
                    get: function () {
                        return this.cm().userName;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(EmployeeVm.prototype, "externalId", {
                    get: function () {
                        return this.cm().externalId;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(EmployeeVm.prototype, "bookingLock", {
                    get: function () {
                        return this.cm().bookingLock;
                    },
                    enumerable: true,
                    configurable: true
                });
                return EmployeeVm;
            })(PersonVm);
            Business.EmployeeVm = EmployeeVm;
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Business;
        (function (Business) {
            var ProjectTypeVm = (function () {
                function ProjectTypeVm(cm) {
                    this.cm = cm;
                }
                Object.defineProperty(ProjectTypeVm.prototype, "id", {
                    get: function () {
                        return this.cm().id;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ProjectTypeVm.prototype, "name", {
                    get: function () {
                        return this.cm().name;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ProjectTypeVm.prototype, "externalId", {
                    get: function () {
                        return this.cm().externalId;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ProjectTypeVm.prototype, "image", {
                    get: function () {
                        return this.cm().image;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ProjectTypeVm.prototype, "externalTypeString", {
                    get: function () {
                        return this.cm().externalTypeString;
                    },
                    enumerable: true,
                    configurable: true
                });
                return ProjectTypeVm;
            })();
            Business.ProjectTypeVm = ProjectTypeVm;
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Business;
        (function (Business) {
            var ProjectVm = (function () {
                function ProjectVm(cm, projectType) {
                    this.cm = cm;
                    this.projectType = projectType;
                }
                Object.defineProperty(ProjectVm.prototype, "id", {
                    get: function () {
                        return this.cm().id;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ProjectVm.prototype, "name", {
                    get: function () {
                        return this.cm().name;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ProjectVm.prototype, "parentId", {
                    get: function () {
                        return this.cm().parentId;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ProjectVm.prototype, "description", {
                    get: function () {
                        return this.cm().description;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ProjectVm.prototype, "bookable", {
                    get: function () {
                        return this.cm().bookable;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ProjectVm.prototype, "clientId", {
                    get: function () {
                        return this.cm().clientId;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ProjectVm.prototype, "externalNumber", {
                    get: function () {
                        return this.cm().externalNumber;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ProjectVm.prototype, "externalObjectName", {
                    get: function () {
                        return this.cm().externalObjectName;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ProjectVm.prototype, "projectTypeId", {
                    get: function () {
                        return this.cm().projectTypeId;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ProjectVm.prototype, "type", {
                    get: function () {
                        return this.projectType();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ProjectVm.prototype, "effortType", {
                    get: function () {
                        return this.cm().effortType;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ProjectVm.prototype, "anlageNr", {
                    get: function () {
                        return this.cm().anlageNr;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ProjectVm.prototype, "client", {
                    get: function () {
                        return this.associatedClient;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ProjectVm.prototype, "invocieType", {
                    get: function () {
                        return this.cm().invoiceType;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ProjectVm.prototype, "invoiceType", {
                    set: function (value) {
                        this.cm().invoiceType = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                ProjectVm.prototype.assignClient = function (client) {
                    this.associatedClient = client;
                };
                Object.defineProperty(ProjectVm.prototype, "additionalInformation", {
                    get: function () {
                        if (Triarc.hasNoValue(this.cm().additionalInformation) || Triarc.strIsEmpty(this.cm().additionalInformation))
                            return null;
                        return JSON.parse(this.cm().additionalInformation);
                    },
                    enumerable: true,
                    configurable: true
                });
                return ProjectVm;
            })();
            Business.ProjectVm = ProjectVm;
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Business;
        (function (Business) {
            var ClientVm = (function () {
                function ClientVm(cm) {
                    this.cm = cm;
                }
                Object.defineProperty(ClientVm.prototype, "id", {
                    get: function () {
                        return this.cm().id;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ClientVm.prototype, "name", {
                    get: function () {
                        return this.cm().name;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ClientVm.prototype, "mainContact", {
                    get: function () {
                        return null;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ClientVm.prototype, "mainContactId", {
                    get: function () {
                        return this.cm().mainContactId;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ClientVm.prototype, "mainAddress", {
                    get: function () {
                        return null;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ClientVm.prototype, "city", {
                    get: function () {
                        return this.cm().city;
                    },
                    enumerable: true,
                    configurable: true
                });
                return ClientVm;
            })();
            Business.ClientVm = ClientVm;
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Bu;
        (function (Bu) {
            var ContactVm = (function (_super) {
                __extends(ContactVm, _super);
                function ContactVm(cm) {
                    _super.call(this, cm);
                    this.cm = cm;
                }
                ContactVm.createCm = function () {
                    var cm = {
                        id: Triarc.generateGuid(),
                        clientId: null,
                        lastName: null,
                        firstName: null,
                        email: null,
                        telephone: null,
                        timestamp2: null,
                        timestamp: null,
                        addressId: null,
                        city: null,
                        country: null,
                        countryCode: null,
                        street: null,
                        streetNumber: null,
                        zipCode: null
                    };
                    return cm;
                };
                Object.defineProperty(ContactVm.prototype, "clientId", {
                    get: function () {
                        return this.cm().clientId;
                    },
                    set: function (val) {
                        this.cm().clientId = val;
                    },
                    enumerable: true,
                    configurable: true
                });
                ContactVm.prototype.update = function (entityCm) {
                    this.reset();
                    this.cm = function () { return entityCm; };
                };
                ContactVm.prototype.reset = function () {
                };
                return ContactVm;
            })(Bu.PersonVm);
            Bu.ContactVm = ContactVm;
        })(Bu = Web.Bu || (Web.Bu = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Business;
        (function (Business) {
            var ETimeBookingState = TimeRecorder.Web.Data.ETimeBookingState;
            var TimeBookingVm = (function () {
                function TimeBookingVm(cm, timeBookingDc) {
                    this.cm = cm;
                    this.timeBookingDc = timeBookingDc;
                    this._isSignedOff = null;
                    this._hasClosedReportPromise = null;
                }
                TimeBookingVm.fromDate = function (date, timeBookingDc) {
                    var cm = {
                        id: Triarc.generateGuid(),
                        employeeId: null,
                        parentId: null,
                        confirmed: null,
                        comment: null,
                        projectId: null,
                        timeEntryTypeId: null,
                        externalWorkReportId: null,
                        timestamp: null,
                        fromSourceId: null,
                        toSourceId: null,
                        start: date,
                        stop: date,
                        errorMesssage: null,
                        isDeleted: false
                    };
                    return new TimeBookingVm(function () { return cm; }, function () { return timeBookingDc; });
                };
                TimeBookingVm.prototype.clone = function () {
                    var copiedCm = angular.copy(this.toCm());
                    copiedCm.id = null;
                    return new TimeBookingVm(function () { return copiedCm; }, this.timeBookingDc);
                };
                TimeBookingVm.prototype.toCm = function () {
                    return this.cm();
                };
                Object.defineProperty(TimeBookingVm.prototype, "id", {
                    get: function () {
                        return this.cm().id;
                    },
                    set: function (value) {
                        this.cm().id = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeBookingVm.prototype, "employeeId", {
                    get: function () {
                        return this.cm().employeeId;
                    },
                    set: function (value) {
                        this.cm().employeeId = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeBookingVm.prototype, "isSignedOff", {
                    get: function () {
                        var _this = this;
                        if (this._isSignedOff !== null)
                            return this._isSignedOff;
                        if (angular.isString(this.externalWorkReportId) && this._hasClosedReportPromise === null) {
                            this._hasClosedReportPromise = this.timeBookingDc().container.externalWorkReportDc.hasCloseStateCriteriaById(this.externalWorkReportId);
                            this._hasClosedReportPromise.then(function (e) { return _this._isSignedOff = e; });
                        }
                        return false;
                    },
                    enumerable: true,
                    configurable: true
                });
                TimeBookingVm.prototype.isAdditionalBooking = function () {
                    return Triarc.hasValue(this.parentId);
                };
                Object.defineProperty(TimeBookingVm.prototype, "projectId", {
                    get: function () {
                        return this.cm().projectId;
                    },
                    set: function (value) {
                        this.cm().projectId = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeBookingVm.prototype, "start", {
                    get: function () {
                        return this.cm().start;
                    },
                    set: function (value) {
                        this.cm().start = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeBookingVm.prototype, "stop", {
                    get: function () {
                        return this.cm().stop;
                    },
                    set: function (value) {
                        this.cm().stop = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                TimeBookingVm.prototype.addDuration = function (duration) {
                    this.cm().stop = moment(this.cm().stop).add(duration.as("minutes"), "minutes").toDate();
                };
                Object.defineProperty(TimeBookingVm.prototype, "state", {
                    get: function () {
                        if (this.stop == null)
                            return 0 /* Open */;
                        if (!this.confirmed)
                            return 1 /* Unconfirmed */;
                        if (angular.isString(this.cm().errorMesssage))
                            return 4 /* Faulted */;
                        if (angular.isString(this.externalWorkReportId))
                            return 3 /* Complete */;
                        return 2 /* Confirmed */;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeBookingVm.prototype, "typeId", {
                    get: function () {
                        return this.cm().timeEntryTypeId;
                    },
                    set: function (value) {
                        this.cm().timeEntryTypeId = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeBookingVm.prototype, "fromSourceId", {
                    get: function () {
                        return this.cm().fromSourceId;
                    },
                    set: function (val) {
                        this.cm().fromSourceId = val;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeBookingVm.prototype, "toSourceId", {
                    get: function () {
                        return this.cm().toSourceId;
                    },
                    set: function (val) {
                        this.cm().toSourceId = val;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeBookingVm.prototype, "externalWorkReportId", {
                    get: function () {
                        return this.cm().externalWorkReportId;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeBookingVm.prototype, "isDeleted", {
                    get: function () {
                        return this.cm().isDeleted;
                    },
                    set: function (val) {
                        this.cm().isDeleted = val;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeBookingVm.prototype, "type", {
                    get: function () {
                        if (Triarc.hasValue(this._type))
                            return this._type;
                        this._type = this.timeBookingDc().container.timeEntryTypeDc.getTimeEntryTypesMap().get(this.cm().timeEntryTypeId);
                        return this._type;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeBookingVm.prototype, "comment", {
                    get: function () {
                        return this.cm().comment;
                    },
                    set: function (value) {
                        this.cm().comment = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeBookingVm.prototype, "confirmed", {
                    get: function () {
                        return this.cm().confirmed;
                    },
                    set: function (value) {
                        this.cm().confirmed = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeBookingVm.prototype, "parentId", {
                    get: function () {
                        return this.cm().parentId;
                    },
                    set: function (value) {
                        this.cm().parentId = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                TimeBookingVm.prototype.update = function (cm) {
                    this.cm = function () { return cm; };
                    this._isSignedOff = null;
                    this._hasClosedReportPromise = null;
                    this._type = null;
                };
                TimeBookingVm.prototype.checkUnConfirmedExtraBookings = function () {
                    var params = {
                        person: "",
                        parentId: this.cm().id
                    };
                    return this.timeBookingDc().search(params).then(function (extraTimeBookings) {
                        return extraTimeBookings.toEnumerable().any(function (t) { return !t.confirmed; });
                    }, angular.noop);
                };
                return TimeBookingVm;
            })();
            Business.TimeBookingVm = TimeBookingVm;
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Business;
        (function (Business) {
            var TimeEntryTypeVm = (function () {
                function TimeEntryTypeVm(cm) {
                    this.cm = cm;
                }
                Object.defineProperty(TimeEntryTypeVm.prototype, "id", {
                    get: function () {
                        return this.cm().id;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeEntryTypeVm.prototype, "name", {
                    get: function () {
                        return this.cm().name;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeEntryTypeVm.prototype, "timeBookingRule", {
                    get: function () {
                        return this.cm().timeBookingRule;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeEntryTypeVm.prototype, "abbreviation", {
                    get: function () {
                        return this.cm().abbreviation;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeEntryTypeVm.prototype, "effortType", {
                    get: function () {
                        return this.cm().effortType;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeEntryTypeVm.prototype, "externalId", {
                    get: function () {
                        return this.cm().externalId;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeEntryTypeVm.prototype, "isPause", {
                    get: function () {
                        return false;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeEntryTypeVm.prototype, "isWork", {
                    get: function () {
                        return false;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeEntryTypeVm.prototype, "isTravel", {
                    get: function () {
                        return false;
                    },
                    enumerable: true,
                    configurable: true
                });
                return TimeEntryTypeVm;
            })();
            Business.TimeEntryTypeVm = TimeEntryTypeVm;
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Business;
        (function (Business) {
            var ExternalWorkReport;
            (function (ExternalWorkReport) {
                function parseData(dataStr) {
                    var workItems = {
                        items: []
                    };
                    var jsonData = JSON.parse(dataStr);
                    for (var i = 0; i < jsonData.items.length; i++) {
                        workItems.items.add({
                            sequence: jsonData.items[i].sequence,
                            name: jsonData.items[i].name,
                            selected: jsonData.items[i].selected
                        });
                    }
                    return workItems;
                }
                ExternalWorkReport.parseData = parseData;
                function createNewWorkItems() {
                    var workItems = {
                        items: []
                    };
                    workItems.items.add({ sequence: 1, name: "1. System auf Dichtheit geprüft", selected: false });
                    workItems.items.add({ sequence: 17, name: "17. Kälteträger nachgefüllt", selected: false });
                    workItems.items.add({ sequence: 33, name: "33. Kältemittelpumpe ersetzt", selected: false });
                    workItems.items.add({ sequence: 2, name: "2. Ölniveau kontrolliert", selected: false });
                    workItems.items.add({ sequence: 18, name: "18. System entlüftet, evakuiert", selected: false });
                    workItems.items.add({ sequence: 34, name: "34. Kupplung kontrolliert/ersetzt", selected: false });
                    workItems.items.add({ sequence: 3, name: "3. Kältemittelstand kontrolliert", selected: false });
                    workItems.items.add({ sequence: 19, name: "19. Motor geschmiert", selected: false });
                    workItems.items.add({ sequence: 35, name: "35. Keilriemen kontrolliert/ergänzt", selected: false });
                    workItems.items.add({ sequence: 4, name: "4. Drucksensoren kontrolliert", selected: false });
                    workItems.items.add({ sequence: 20, name: "20. Niveaumessung kontrolliert", selected: false });
                    workItems.items.add({ sequence: 36, name: "36. Steuergerät ersetzt", selected: false });
                    workItems.items.add({ sequence: 5, name: "5. Kälteträgernetz Druck kontrolliert", selected: false });
                    workItems.items.add({ sequence: 21, name: "21. Trocknerfilter ersetzt", selected: false });
                    workItems.items.add({ sequence: 37, name: "37. Wärmeaustauscher gereinigt", selected: false });
                    workItems.items.add({ sequence: 6, name: "6. Drucksensoren kontrolliert", selected: false });
                    workItems.items.add({ sequence: 22, name: "22. Parameter, Daten erfasst", selected: false });
                    workItems.items.add({ sequence: 38, name: "38. Lager ersetzt", selected: false });
                    workItems.items.add({ sequence: 7, name: "7. Sicherheits Druckwächter kontr.", selected: false });
                    workItems.items.add({ sequence: 23, name: "23. Wegtransmitter kalibriert/ersetzt", selected: false });
                    workItems.items.add({ sequence: 39, name: "39. Verdichter kontrolliert/repariert", selected: false });
                    workItems.items.add({ sequence: 8, name: "8. Expansionsorgan kontr./rep.", selected: false });
                    workItems.items.add({ sequence: 24, name: "24. Drucksensor ersetzt", selected: false });
                    workItems.items.add({ sequence: 40, name: "40. Verdichter Revision", selected: false });
                    workItems.items.add({ sequence: 9, name: "9. Rückschlagventil repariert/ersetzt", selected: false });
                    workItems.items.add({ sequence: 25, name: "25. Temperatursensor ersetzt", selected: false });
                    workItems.items.add({ sequence: 41, name: "41. Allgemeine Kontrolle", selected: false });
                    workItems.items.add({ sequence: 10, name: "10. Ventilstation kontrolliert", selected: false });
                    workItems.items.add({ sequence: 26, name: "26. Wellenabdichtung ersetzt", selected: false });
                    workItems.items.add({ sequence: 42, name: "42. Einsatz Spezialgerät", selected: false });
                    workItems.items.add({ sequence: 11, name: "11. Ölprobe entnommen", selected: false });
                    workItems.items.add({ sequence: 27, name: "27. Ölpumpe repariert/ersetzt", selected: false });
                    workItems.items.add({ sequence: 43, name: "43. Kein Kleinmaterial", selected: false });
                    workItems.items.add({ sequence: 12, name: "12. Motorausrichtung kontrolliert", selected: false });
                    workItems.items.add({ sequence: 28, name: "28. Ölfilter ersetzt", selected: false });
                    workItems.items.add({ sequence: 44, name: "44. R-Flaschen retour holen", selected: false });
                    workItems.items.add({ sequence: 13, name: "13. Ventilator kontrolliert/ersetzt", selected: false });
                    workItems.items.add({ sequence: 29, name: "29. Ölsieb gereinigt/ersetzt", selected: false });
                    workItems.items.add({ sequence: 45, name: "45. G-Flaschen retour holen", selected: false });
                    workItems.items.add({ sequence: 14, name: "14. Leckstelle behoben", selected: false });
                    workItems.items.add({ sequence: 30, name: "30. Ölrückführung kontrolliert/rep.", selected: false });
                    workItems.items.add({ sequence: 46, name: "46. Materialtransport", selected: false });
                    workItems.items.add({ sequence: 15, name: "15. Öl nachgefüllt/ersetzt", selected: false });
                    workItems.items.add({ sequence: 31, name: "31. Saugfilter gereinigt/ersetzt", selected: false });
                    workItems.items.add({ sequence: 47, name: "47. Arbeiten Magazin, Werkstatt", selected: false });
                    workItems.items.add({ sequence: 16, name: "16. Kältemittel nachgefüllt", selected: false });
                    workItems.items.add({ sequence: 32, name: "32. Sicherheitsventil ersetzt", selected: false });
                    return workItems;
                }
                ExternalWorkReport.createNewWorkItems = createNewWorkItems;
            })(ExternalWorkReport = Business.ExternalWorkReport || (Business.ExternalWorkReport = {}));
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Business;
        (function (Business) {
            var ExternalWorkReportVm = (function (_super) {
                __extends(ExternalWorkReportVm, _super);
                function ExternalWorkReportVm(cm, workReportDc) {
                    var _this = this;
                    _super.call(this, function (base) { return base; }, cm);
                    this.workReportDc = workReportDc;
                    this.$projectPromise = new Triarc.Vm.ViewModelPromise(function () { return _this.workReportDc.container.projectDc.getProjectById(_this.$cm.projectId, true); });
                    this.$clientPromise = new Triarc.Vm.ViewModelPromise(function () {
                        return _this.projectPromise.promise.then(function (project) {
                            return _this.workReportDc.container.peopleDc.getClient(project.clientId).then(function (signedClient) { return signedClient; });
                        });
                    });
                    this.$employeePromise = new Triarc.Vm.ViewModelPromise(function () { return _this.workReportDc.container.employeeDc.getByIds([_this.$cm.employeeId]).then(function (r) { return r.toEnumerable().firstOrDefault(); }); });
                }
                ExternalWorkReportVm.createNewCm = function () {
                    var cm = {
                        id: Triarc.generateGuid(),
                        from: null,
                        to: null,
                        employeeSignatureImage: null,
                        contactSignatureImage: null,
                        projectCompleted: false,
                        projectId: null,
                        html: "",
                        employeeId: null,
                        state: 0 /* Open */,
                        timestamp: new Date().getTime(),
                        comments: null,
                        materials: null,
                        warranty: false,
                        sendPdfToEmployee: false,
                        contactSignatureImageTimestamp: null,
                        signedContactId: null,
                        workItemsJson: JSON.stringify(Business.ExternalWorkReport.createNewWorkItems()),
                        workToDo: null,
                        sendPdfToProductOwner: false,
                        companyInternToReportTo: null,
                        customerToReportTo: null,
                        reportToCustomer: false,
                        workReportNumber: null,
                        pdfFileName: null,
                        getSignatureLater: false
                    };
                    return cm;
                };
                Object.defineProperty(ExternalWorkReportVm.prototype, "from", {
                    get: function () {
                        return this.$cm.from;
                    },
                    set: function (value) {
                        this.$cm.from = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExternalWorkReportVm.prototype, "to", {
                    get: function () {
                        return this.$cm.to;
                    },
                    set: function (value) {
                        this.$cm.to = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExternalWorkReportVm.prototype, "employeeSignatureImage", {
                    get: function () {
                        return this.$cm.employeeSignatureImage;
                    },
                    set: function (value) {
                        this.$cm.employeeSignatureImage = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExternalWorkReportVm.prototype, "contactSignatureImage", {
                    get: function () {
                        return this.$cm.contactSignatureImage;
                    },
                    set: function (value) {
                        if (Triarc.hasNoValue(this.$cm.contactSignatureImage) && Triarc.hasValue(value)) {
                            this.$cm.contactSignatureImageTimestamp = new Date();
                        }
                        else if (Triarc.hasNoValue(value)) {
                            this.$cm.contactSignatureImageTimestamp = null;
                        }
                        this.$cm.contactSignatureImage = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExternalWorkReportVm.prototype, "contactSignatureImageTimestamp", {
                    get: function () {
                        return this.$cm.contactSignatureImageTimestamp;
                    },
                    set: function (date) {
                        this.$cm.contactSignatureImageTimestamp = date;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExternalWorkReportVm.prototype, "pdfFileName", {
                    get: function () {
                        return this.$cm.pdfFileName;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExternalWorkReportVm.prototype, "projectCompleted", {
                    get: function () {
                        return this.$cm.projectCompleted;
                    },
                    set: function (value) {
                        this.$cm.projectCompleted = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExternalWorkReportVm.prototype, "projectPromise", {
                    get: function () {
                        return this.$projectPromise.resolve();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExternalWorkReportVm.prototype, "employeePromise", {
                    get: function () {
                        return this.$employeePromise.resolve();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExternalWorkReportVm.prototype, "employee", {
                    get: function () {
                        return this.$employeePromise.resolve().value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExternalWorkReportVm.prototype, "project", {
                    get: function () {
                        return this.$projectPromise.resolve().value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExternalWorkReportVm.prototype, "clientPromise", {
                    get: function () {
                        return this.$clientPromise.resolve();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExternalWorkReportVm.prototype, "client", {
                    get: function () {
                        return this.$clientPromise.resolve().value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExternalWorkReportVm.prototype, "signedContactId", {
                    get: function () {
                        return this.$cm.signedContactId;
                    },
                    set: function (id) {
                        this.$cm.signedContactId = id;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExternalWorkReportVm.prototype, "state", {
                    get: function () {
                        return this.$cm.state;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExternalWorkReportVm.prototype, "html", {
                    get: function () {
                        return this.$cm.html;
                    },
                    set: function (html) {
                        this.$cm.html = html;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExternalWorkReportVm.prototype, "materials", {
                    get: function () {
                        return this.$cm.materials;
                    },
                    set: function (value) {
                        this.$cm.materials = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExternalWorkReportVm.prototype, "comments", {
                    get: function () {
                        return this.$cm.comments;
                    },
                    set: function (value) {
                        this.$cm.comments = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExternalWorkReportVm.prototype, "warranty", {
                    get: function () {
                        return this.$cm.warranty;
                    },
                    set: function (value) {
                        this.$cm.warranty = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExternalWorkReportVm.prototype, "sendPdfToProductOwner", {
                    get: function () {
                        return this.$cm.sendPdfToProductOwner;
                    },
                    set: function (value) {
                        this.$cm.sendPdfToProductOwner = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExternalWorkReportVm.prototype, "workToDo", {
                    get: function () {
                        return this.$cm.workToDo;
                    },
                    set: function (value) {
                        this.$cm.workToDo = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExternalWorkReportVm.prototype, "companyInternToReportTo", {
                    get: function () {
                        return this.$cm.companyInternToReportTo;
                    },
                    set: function (value) {
                        this.$cm.companyInternToReportTo = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExternalWorkReportVm.prototype, "customerToReportTo", {
                    get: function () {
                        return this.$cm.customerToReportTo;
                    },
                    set: function (value) {
                        this.$cm.customerToReportTo = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExternalWorkReportVm.prototype, "reportToCustomer", {
                    get: function () {
                        return this.$cm.reportToCustomer;
                    },
                    set: function (value) {
                        this.$cm.reportToCustomer = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExternalWorkReportVm.prototype, "workItems", {
                    get: function () {
                        if (Triarc.hasValue(this.$workItems))
                            return this.$workItems;
                        this.$workItems = Business.ExternalWorkReport.parseData(this.workItemsJson);
                        return this.$workItems;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExternalWorkReportVm.prototype, "workItemsJson", {
                    get: function () {
                        // for existing work reports in the system!
                        if (Triarc.hasNoValue(this.$cm.workItemsJson)) {
                            this.$cm.workItemsJson = JSON.stringify(Business.ExternalWorkReport.createNewWorkItems());
                        }
                        return this.$cm.workItemsJson;
                    },
                    set: function (value) {
                        this.$cm.workItemsJson = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExternalWorkReportVm.prototype, "workReportNumber", {
                    get: function () {
                        return this.$cm.workReportNumber;
                    },
                    enumerable: true,
                    configurable: true
                });
                ExternalWorkReportVm.prototype.reset = function () {
                    this.resetLazies();
                    this.$projectPromise.clear();
                    this.$clientPromise.clear();
                    this.$employeePromise.clear();
                };
                ExternalWorkReportVm.prototype.clone = function () {
                    return new ExternalWorkReportVm(angular.copy(this.$cm), this.workReportDc);
                };
                ExternalWorkReportVm.prototype.updateCm = function (cm) {
                    this.reset();
                    this.$cm = cm;
                };
                ExternalWorkReportVm.prototype.toCm = function () {
                    var cm = this.$cm;
                    cm.workItemsJson = JSON.stringify(this.workItems);
                    return cm;
                };
                Object.defineProperty(ExternalWorkReportVm.prototype, "sendPdfToEmployee", {
                    get: function () {
                        return this.$cm.sendPdfToEmployee;
                    },
                    set: function (value) {
                        this.$cm.sendPdfToEmployee = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExternalWorkReportVm.prototype, "getSignatureLater", {
                    get: function () {
                        return this.$cm.getSignatureLater;
                    },
                    set: function (value) {
                        this.$cm.getSignatureLater = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                return ExternalWorkReportVm;
            })(Triarc.Vm.ViewModel);
            Business.ExternalWorkReportVm = ExternalWorkReportVm;
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
//module TimeRecorder.Web.Business {
//  export class SearchExternalWorkReportVm {
//
//
//    constructor(private cm: () => Data.ISearchExternalWorkReportCm) {
//    }
//
//
//    get id() {
//      return this.cm().id;
//    }
//
//    get from() {
//      return this.cm().from;
//    }
//
//    get to() {
//      return this.cm().to;
//    }
//
//    get projectCompleted() {
//      return this.cm().projectCompleted;
//    }
//
//    //projectId: number;
//    //employeeId: number;
//    //signedContactId?: number;
//    //signatureTimestamp?: Date;
//  }
//} 
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Business;
        (function (Business) {
            var WorkReportVm = (function () {
                function WorkReportVm($cm, externalWorkReportDc) {
                    var _this = this;
                    this.$cm = $cm;
                    this.externalWorkReportDc = externalWorkReportDc;
                    this.$timeBookingsPromise = new Triarc.Vm.ViewModelPromise(function () {
                        // get the unbilled time bookings for the report if its open
                        if (_this.$cm.externalWorkReport.state == 0 /* Open */) {
                            return _this.externalWorkReportDc.container.timeBookingDc.getUnBilledCompletedBookings(_this.$cm.externalWorkReport.employeeId, _this.$cm.externalWorkReport.projectId);
                        }
                        // if the work report is closed then get the associated time bookings
                        return _this.externalWorkReportDc.container.timeBookingDc.getForExternalWorkReport(_this.$cm.externalWorkReport.id);
                    });
                    /**
                     * These is bound to the view
                     */
                    this.totalWorkedMins = null;
                    this.calculateTotalWorkedMins();
                    this.calculateMaxTimeBookingDate();
                    this.calculateMinTimeBookingDate();
                }
                Object.defineProperty(WorkReportVm.prototype, "externalWorkReport", {
                    get: function () {
                        if (Triarc.hasValue(this._externalWorkReport))
                            return this._externalWorkReport;
                        this._externalWorkReport = new Business.ExternalWorkReportVm(this.$cm.externalWorkReport, this.externalWorkReportDc);
                        return this._externalWorkReport;
                    },
                    enumerable: true,
                    configurable: true
                });
                WorkReportVm.prototype.setExternalWorkReport = function (vm) {
                    this._externalWorkReport = vm;
                    // this._externalWorkReport.project = this.projectVm();
                };
                Object.defineProperty(WorkReportVm.prototype, "timeBookingsPromise", {
                    get: function () {
                        return this.$timeBookingsPromise.resolve();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(WorkReportVm.prototype, "timeBookings", {
                    get: function () {
                        return this.$timeBookingsPromise.resolve().value;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                  * View calculated values
                  * @returns {}
                  */
                WorkReportVm.prototype.calculateTotalWorkedMins = function () {
                    var _this = this;
                    this.timeBookingsPromise.promise.then(function (timeBookings) {
                        var totalMins = 0;
                        timeBookings.toEnumerable().where(function (tb) { return Triarc.hasNoValue(tb.parentId); }).toArray().forEach(function (tb) {
                            totalMins += _this.getWorkedMinutes(tb.start, tb.stop);
                        });
                        _this.totalWorkedMins = _this.formatDuration(totalMins);
                    });
                };
                /**
                  * View calculated values
                  * @returns {}
                  */
                WorkReportVm.prototype.calculateMinTimeBookingDate = function () {
                    var _this = this;
                    this.timeBookingsPromise.promise.then(function (timeBookings) {
                        _this.minTimeBookingDate = moment(timeBookings.toEnumerable().min(function (t) { return t.start.getTime(); })).toDate();
                    });
                };
                /**
                  * View calculated values
                  * @returns {}
                  */
                WorkReportVm.prototype.calculateMaxTimeBookingDate = function () {
                    var _this = this;
                    this.timeBookingsPromise.promise.then(function (timeBookings) {
                        _this.maxTimeBookingDate = moment.utc(timeBookings.toEnumerable().max(function (t) { return t.stop.getTime(); })).toDate();
                    });
                };
                /**
                 * View calculated values
                 * @returns {}
                 */
                WorkReportVm.prototype.getWorkedMinutes = function (from, to) {
                    var duration = moment.duration(moment.utc(to).startOf("minute").diff(moment.utc(from).startOf("minute")));
                    return duration.asMinutes();
                };
                /**
                 * View calculated values
                 * @returns {}
                 */
                WorkReportVm.prototype.getWorkedMins = function (from, to) {
                    return this.formatDuration(this.getWorkedMinutes(from, to));
                };
                /**
                 * View calculated values
                 * @returns {}
                 */
                WorkReportVm.prototype.getDailyTotalMins = function (dayContainer) {
                    var _this = this;
                    var totalMins = 0;
                    dayContainer.timeBookingGroups.forEach(function (tb) {
                        if (Triarc.hasValue(tb.timeBooking)) {
                            totalMins += _this.getWorkedMinutes(tb.timeBooking.start, tb.timeBooking.stop);
                        }
                    });
                    return this.formatDuration(totalMins);
                };
                /**
                 * View calculated values
                 * @returns {}
                 */
                WorkReportVm.prototype.formatDuration = function (totalMins) {
                    if (totalMins < 0)
                        return "00:00";
                    var hours = Math.floor(totalMins / 60);
                    var mins = (totalMins % 60);
                    var date = new Date();
                    date.setHours(hours);
                    //hours = date.getUTCHours();
                    var hoursStr = hours.toFixed(0);
                    var minsStr = mins.toFixed(0);
                    if (hoursStr.length === 1) {
                        hoursStr = "0" + hoursStr;
                    }
                    if (minsStr.length === 1) {
                        minsStr = "0" + minsStr;
                    }
                    return hoursStr + ":" + minsStr;
                };
                WorkReportVm.prototype.reset = function () {
                };
                WorkReportVm.prototype.clone = function () {
                    return new WorkReportVm({
                        externalWorkReport: angular.copy(this.$cm.externalWorkReport),
                        timeBookingIds: this.$cm.timeBookingIds
                    }, this.externalWorkReportDc);
                };
                WorkReportVm.prototype.updateCm = function () {
                };
                WorkReportVm.prototype.toCm = function () {
                    var cm = this.$cm;
                    cm.externalWorkReport = this.externalWorkReport.toCm();
                    if (Triarc.arrayHasValues(this.$timeBookingsPromise.resolve().value)) {
                        cm.timeBookingIds = this.$timeBookingsPromise.resolve().value.toEnumerable().select(function (tb) { return tb.id; }).toArray();
                    }
                    return cm;
                };
                return WorkReportVm;
            })();
            Business.WorkReportVm = WorkReportVm;
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Business;
        (function (Business) {
            var ExternalWorkReportCreationProjectVm = (function (_super) {
                __extends(ExternalWorkReportCreationProjectVm, _super);
                function ExternalWorkReportCreationProjectVm(cm, clientVm) {
                    _super.call(this, cm);
                    this.cm = cm;
                    this.clientVm = clientVm;
                }
                Object.defineProperty(ExternalWorkReportCreationProjectVm.prototype, "timeBookingFrom", {
                    get: function () {
                        return this.cm().timeBookingFrom;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExternalWorkReportCreationProjectVm.prototype, "timeBookingTo", {
                    get: function () {
                        return this.cm().timeBookingTo;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExternalWorkReportCreationProjectVm.prototype, "client", {
                    get: function () {
                        return this.clientVm();
                    },
                    enumerable: true,
                    configurable: true
                });
                return ExternalWorkReportCreationProjectVm;
            })(Business.ProjectVm);
            Business.ExternalWorkReportCreationProjectVm = ExternalWorkReportCreationProjectVm;
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
/// <reference path="data/workitemsdata.ts" />
/// <reference path="externalworkreportvm.ts" />
/// <reference path="searchexternalworkreportvm.ts" />
/// <reference path="workreportvm.ts" />
/// <reference path="externalworkreportcreationprojectvm.ts" />
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Business;
        (function (Business) {
            var TimeEntryVm = (function () {
                function TimeEntryVm(cm) {
                    this.cm = cm;
                }
                Object.defineProperty(TimeEntryVm.prototype, "id", {
                    get: function () {
                        return this.cm().id;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeEntryVm.prototype, "employeeId", {
                    get: function () {
                        return this.cm().employeeId;
                    },
                    set: function (value) {
                        this.cm().employeeId = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeEntryVm.prototype, "timeEntryTypeId", {
                    get: function () {
                        return this.cm().timeEntryTypeId;
                    },
                    set: function (value) {
                        this.cm().timeEntryTypeId = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeEntryVm.prototype, "simpleStampType", {
                    get: function () {
                        return this.cm().simpleStampType;
                    },
                    set: function (value) {
                        this.cm().simpleStampType = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeEntryVm.prototype, "bookedTime", {
                    get: function () {
                        return this.cm().bookedTime;
                    },
                    set: function (date) {
                        this.cm().bookedTime = date;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeEntryVm.prototype, "projectId", {
                    get: function () {
                        return this.cm().projectId;
                    },
                    set: function (value) {
                        this.cm().projectId = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeEntryVm.prototype, "hasBooking", {
                    get: function () {
                        return this.cm().hasBooking;
                    },
                    set: function (value) {
                        this.cm().hasBooking = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                TimeEntryVm.prototype.update = function (cm) {
                    this.cm = function () { return cm; };
                };
                TimeEntryVm.prototype.getCm = function () {
                    return this.cm();
                };
                return TimeEntryVm;
            })();
            Business.TimeEntryVm = TimeEntryVm;
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
/// <reference path="timesheet/_timesheet_vm_references.ts" />
/// <reference path="expensevm.ts" />
/// <reference path="expensetypevm.ts" />
/// <reference path="personvm.ts" />
/// <reference path="EmployeeVm.ts" />
/// <reference path="projecttypevm.ts" />
/// <reference path="projectvm.ts" />
/// <reference path="clientvm.ts" />
/// <reference path="contactvm.ts" />
/// <reference path="timebookingvm.ts" />
/// <reference path="timeentrytypevm.ts" />
/// <reference path="workreport/_work_report_references.ts" />
/// <reference path="timeentryvm.ts" />
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Business;
        (function (Business) {
            var ExpenseTypeRepository = (function () {
                function ExpenseTypeRepository($proxy, $q) {
                    this.$proxy = $proxy;
                    this.$q = $q;
                }
                ExpenseTypeRepository.prototype.getAllExpenses = function () {
                    return this.$proxy.Expenses.getExpenseTypesMultiple({}).then(function (res) { return res.data; });
                };
                ExpenseTypeRepository.$inject = [
                    "$tr-proxy",
                    "$q"
                ];
                ExpenseTypeRepository.serviceId = "$trExpenseTypeRepository";
                return ExpenseTypeRepository;
            })();
            Business.ExpenseTypeRepository = ExpenseTypeRepository;
            timeRecorder.service(ExpenseTypeRepository.serviceId, ExpenseTypeRepository);
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Business;
        (function (Business) {
            var ExpenseRepository = (function () {
                function ExpenseRepository($proxy, $q) {
                    this.$proxy = $proxy;
                    this.$q = $q;
                }
                ExpenseRepository.prototype.search = function (skip, take, from, to, employeeId) {
                    return this.$proxy.Expenses.searchMultiple({}, {
                        employeeId: employeeId,
                        from: from,
                        skip: skip,
                        take: take,
                        to: to
                    }).then(function (response) {
                        return response.data;
                    });
                };
                ExpenseRepository.prototype.addOrUpdate = function (expenseCm) {
                    return this.$proxy.Expenses.addOrUpdateExpense(expenseCm).then(function (response) { return response.data; });
                };
                ExpenseRepository.prototype.getExpenseById = function (id) {
                    return this.$proxy.Expenses.get({ id: id }).then(function (response) { return response.data; });
                };
                ExpenseRepository.prototype.delete = function (id) {
                    return this.$proxy.Expenses.delete({ id: id }).then(function () {
                    });
                };
                ExpenseRepository.prototype.targetExpenses = function (cms) {
                    var ids = cms.toEnumerable().select(function (e) { return e.id; }).toArray();
                    return this.$proxy.Expenses.targetExpenses({ ids: ids }).then(function () {
                    });
                };
                ExpenseRepository.$inject = [
                    "$tr-proxy",
                    "$q"
                ];
                ExpenseRepository.serviceId = "$trExpenseRepository";
                return ExpenseRepository;
            })();
            Business.ExpenseRepository = ExpenseRepository;
            timeRecorder.service(ExpenseRepository.serviceId, ExpenseRepository);
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Business;
        (function (Business) {
            var ProjectRepository = (function () {
                function ProjectRepository($proxy, $q) {
                    this.$proxy = $proxy;
                    this.$q = $q;
                }
                ProjectRepository.prototype.getProjectByExternalId = function (id) {
                    return this.$proxy.Project.getProjectByExternalId({ externalId: id }).then(function (p) {
                        return p.data;
                    });
                };
                ProjectRepository.prototype.getProjectById = function (id) {
                    return this.$proxy.Project.getProjectById({ projectId: id }).then(function (p) { return p.data; });
                };
                ProjectRepository.prototype.getProjectsById = function (ids) {
                    return this.$proxy.Project.getProjectsByIdMultiple({}, { ids: ids }).then(function (p) { return p.data; });
                };
                ProjectRepository.prototype.search = function (searchValue, skip, take) {
                    return this.$proxy.Project.searchProjectsMultiple({ searchValue: searchValue, skip: skip, take: take }).then(function (ret) { return ret.data; });
                };
                ProjectRepository.prototype.searchForExternalWorkReports = function (searchValue, skip, take) {
                    return this.$proxy.Project.searchForExternalWorkReportsMultiple({ searchString: searchValue, skip: skip, take: take }).then(function (ret) { return ret.data; });
                };
                ProjectRepository.prototype.getProjectTypes = function () {
                    return this.$proxy.Project.getProjectTypesMultiple({}).then(function (response) { return response.data; });
                };
                ProjectRepository.$inject = [
                    "$tr-proxy",
                    "$q"
                ];
                ProjectRepository.serviceId = "trProjectRepository";
                return ProjectRepository;
            })();
            Business.ProjectRepository = ProjectRepository;
            timeRecorder.service(ProjectRepository.serviceId, ProjectRepository);
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Business;
        (function (Business) {
            var PeopleRepository = (function () {
                function PeopleRepository($proxy) {
                    this.$proxy = $proxy;
                }
                PeopleRepository.prototype.getContactsForClient = function (clientId, isLiveData) {
                    return this.$proxy.Person.getContactsForClientMultiple({ clientId: clientId }).then(function (response) { return response.data; });
                };
                //    getPerson(id: string, isLiveData: boolean): ng.IPromise<Data.IContactCm> {
                //      return this.$proxy.Person.getContact({ contactId: id }).then(response => response.data);
                //    }
                //    searchPeople(searchString: string): ng.IPromise<Data.IPersonCm[]>{
                //      return this.$proxy.Person.searchPeopleMultiple({ searchString: searchString }).then(response => response.data);
                //    }
                PeopleRepository.prototype.getClient = function (id) {
                    return this.$proxy.Person.getClient({ clientId: id }).then(function (response) { return response.data; });
                };
                PeopleRepository.prototype.getContact = function (id) {
                    return this.$proxy.Person.getContact({ id: id }).then(function (response) { return response.data; });
                };
                PeopleRepository.prototype.saveContact = function (contact) {
                    return this.$proxy.Person.saveContact(contact).then(function (response) { return response.data; });
                };
                PeopleRepository.prototype.getClients = function (ids) {
                    return this.$proxy.Person.getClientsMultiple({}, { ids: ids }).then(function (response) { return response.data; });
                };
                PeopleRepository.$inject = [
                    "$tr-proxy"
                ];
                PeopleRepository.serviceId = "$trPeopleRepository";
                return PeopleRepository;
            })();
            Business.PeopleRepository = PeopleRepository;
            //  export class OfflinePeopleRepository extends PeopleRepository {
            //    getPerson(id: number, isLiveData: boolean): ng.IPromise<Data.IPersonCm> {
            //      return this.dbManager.personTable.getEntity(id);
            //    }
            //    getContactsForClient(clientId: number, isLiveData: boolean): ng.IPromise<Data.IPersonCm[]> {
            //      return this.dbManager.personTable.getEntities("_clientId = " + clientId);
            //    }
            //  }
            //  if (Config.isMobile) {
            //    dispoClientMod.service(OfflinePeopleRepository.serviceId, OfflinePeopleRepository );
            //  } else {
            //    dispoClientMod.service(PeopleRepository.serviceId, PeopleRepository );
            //  }
            timeRecorder.service(PeopleRepository.serviceId, PeopleRepository);
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Business;
        (function (Business) {
            var EmployeeRepository = (function () {
                function EmployeeRepository($proxy) {
                    this.$proxy = $proxy;
                }
                EmployeeRepository.prototype.getById = function (id) {
                    return this.$proxy.Employee.getEmployeeById({ id: id }).then(function (response) { return response.data; });
                };
                EmployeeRepository.prototype.getByIds = function (ids) {
                    var idSet = { ids: ids };
                    return this.$proxy.Employee.getEmployeesByIdMultiple({}, idSet).then(function (response) { return response.data; });
                };
                EmployeeRepository.prototype.getAllEmployees = function () {
                    return this.$proxy.Employee.getMultiple({}).then(function (response) { return response.data; });
                };
                EmployeeRepository.prototype.search = function (searchValue, skip, take) {
                    return this.$proxy.Employee.searchMultiple({ search: searchValue, skip: skip, take: take }).then(function (ret) { return ret.data; });
                };
                EmployeeRepository.$inject = [
                    "$tr-proxy"
                ];
                EmployeeRepository.serviceId = "$trEmployeeRepository";
                return EmployeeRepository;
            })();
            Business.EmployeeRepository = EmployeeRepository;
            timeRecorder.service(EmployeeRepository.serviceId, EmployeeRepository);
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Business;
        (function (Business) {
            var TimeEntryTypeRepository = (function () {
                function TimeEntryTypeRepository($proxy, $q) {
                    this.$proxy = $proxy;
                    this.$q = $q;
                }
                TimeEntryTypeRepository.prototype.search = function (searchValue, skip, take) {
                    return this.$proxy.TimeEntryType.searchMultiple({ searchValue: searchValue, skip: skip, take: take }).then(function (ret) { return ret.data; });
                };
                TimeEntryTypeRepository.prototype.loadTypes = function () {
                    return this.$proxy.TimeBooking.getTimeEntryTypesMultiple({}).then(function (reponse) { return reponse.data; });
                };
                TimeEntryTypeRepository.prototype.getTypesById = function (ids) {
                    return this.$proxy.TimeEntryType.getTypesByIdMultiple({}, { ids: ids }).then(function (t) { return t.data; });
                };
                TimeEntryTypeRepository.serviceId = "$trTimeEntryTypeRepository";
                TimeEntryTypeRepository.$inject = [
                    "$tr-proxy",
                    "$q"
                ];
                return TimeEntryTypeRepository;
            })();
            Business.TimeEntryTypeRepository = TimeEntryTypeRepository;
            timeRecorder.service(TimeEntryTypeRepository.serviceId, TimeEntryTypeRepository);
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Business;
        (function (Business) {
            var TimeBookingRepository = (function () {
                function TimeBookingRepository($proxy, $q) {
                    this.$proxy = $proxy;
                    this.$q = $q;
                }
                TimeBookingRepository.prototype.search = function (data) {
                    return this.$proxy.TimeBooking.searchMultiple({}, data).then(function (response) { return response.data; });
                };
                TimeBookingRepository.prototype.save = function (data) {
                    return this.$proxy.TimeBooking.saveMultiple({}, data).then(function (response) { return response.data; });
                };
                TimeBookingRepository.prototype.remove = function (id) {
                    return this.$proxy.TimeBooking.delete({ id: id }).then(function (response) { return response.data; });
                };
                TimeBookingRepository.prototype.resolveFor = function (ids) {
                    return this.$proxy.TimeBooking.getForMultiple({}, { ids: ids }).then(function (response) { return response.data; });
                };
                TimeBookingRepository.prototype.getUnBilledCompletedBookings = function (employeeId, projectId) {
                    return this.$proxy.TimeBooking.getUnBilledCompletedBookingsMultiple({ employeeId: employeeId, projectId: projectId }).then(function (response) { return response.data; });
                };
                TimeBookingRepository.prototype.getBilledTimeBookings = function (externalWorkReportId) {
                    return this.$proxy.TimeBooking.getBilledTimeBookingsMultiple({ id: externalWorkReportId }).then(function (response) { return response.data; });
                };
                TimeBookingRepository.prototype.getCorrispondingUnvisumedTimeBookingsForCriteria = function (timeBookingIds) {
                    return this.$proxy.TimeBooking.getCorrispondingUnvisumedTimeBookingsForCriteriaMultiple({}, { ids: timeBookingIds }).then(function (response) { return response.data; });
                };
                TimeBookingRepository.serviceId = "$trTimeBookingRepository";
                TimeBookingRepository.$inject = [
                    "$tr-proxy",
                    "$q"
                ];
                return TimeBookingRepository;
            })();
            Business.TimeBookingRepository = TimeBookingRepository;
            timeRecorder.service(TimeBookingRepository.serviceId, TimeBookingRepository);
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Business;
        (function (Business) {
            var ExternalWorkReportRepository = (function () {
                function ExternalWorkReportRepository($proxy, $q) {
                    this.$proxy = $proxy;
                    this.$q = $q;
                }
                ExternalWorkReportRepository.prototype.get = function (id) {
                    return this.$proxy.WorkReport.get({ externalWorkReportId: id }).then(function (response) { return response.data; });
                };
                ExternalWorkReportRepository.prototype.save = function (workReport) {
                    return this.$proxy.WorkReport.save(workReport).then(function (response) { return response.data; });
                };
                ExternalWorkReportRepository.prototype.search = function (skip, take, employeeId, from, to, projectId, state, includeOthers) {
                    return this.$proxy.WorkReport.searchMultiple({}, { skip: skip, take: take, employeeId: employeeId, from: from, to: to, projectId: projectId, state: state, includeOthers: includeOthers }).then(function (response) { return response.data; });
                };
                ExternalWorkReportRepository.prototype.getIdFor = function (employeeId, project) {
                    return this.$proxy.WorkReport.getIdFor({ employeeId: employeeId, projectId: project.id }).then(function (response) { return response.data; });
                };
                ////
                // Determins if the external work report has the correct criteria so that the state can be set to closed
                ////
                ExternalWorkReportRepository.prototype.hasCloseStateCriteria = function (externalWorkReport) {
                    return Triarc.hasValue(externalWorkReport.employeeSignatureImage) && Triarc.hasValue(externalWorkReport.contactSignatureImage) && Triarc.hasValue(externalWorkReport.signedContactId) && Triarc.hasValue(externalWorkReport.projectCompleted) && Triarc.strNotEmpty(externalWorkReport.materials);
                };
                ExternalWorkReportRepository.serviceId = "$trExternalWorkReportRepository";
                ExternalWorkReportRepository.$inject = [
                    "$tr-proxy",
                    "$q"
                ];
                return ExternalWorkReportRepository;
            })();
            Business.ExternalWorkReportRepository = ExternalWorkReportRepository;
            timeRecorder.service(ExternalWorkReportRepository.serviceId, ExternalWorkReportRepository);
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Business;
        (function (Business) {
            var TimeEntryRepository = (function () {
                function TimeEntryRepository($q, $proxy) {
                    this.$q = $q;
                    this.$proxy = $proxy;
                }
                TimeEntryRepository.prototype.createOrUpdateTimeEntry = function (timeStamp) {
                    return this.$proxy.TimeEntry.createOrUpdateTimeEntry(timeStamp).then(function (response) { return response.data; });
                };
                TimeEntryRepository.prototype.getUnbookedTimeEntries = function (employeeId) {
                    return this.$proxy.TimeEntry.getUnbookedTimeEntriesMultiple({ employeeId: employeeId }).then(function (response) { return response.data; });
                };
                TimeEntryRepository.serviceId = "$trTimeEntryRepository";
                TimeEntryRepository.$inject = ['$q', '$tr-proxy'];
                return TimeEntryRepository;
            })();
            Business.TimeEntryRepository = TimeEntryRepository;
            timeRecorder.service(TimeEntryRepository.serviceId, TimeEntryRepository);
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
/// <reference path="expensetyperepository.ts" />
/// <reference path="expenserepository.ts" />
/// <reference path="projectrepository.ts" />
/// <reference path="peoplerepository.ts" />
/// <reference path="employeerespository.ts" />
/// <reference path="timeentrytyperepository.ts" />
/// <reference path="timebookingrepository.ts" />
/// <reference path="externalworkreportrepository.ts" />
/// <reference path="timeentryrepository.ts" />
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Business;
        (function (Business) {
            var RuleBasedTimeBookingDataController = (function () {
                function RuleBasedTimeBookingDataController($q) {
                    this.$q = $q;
                    this.availableRules = [
                        new Business.OvertimeBookingRule(),
                        new Business.NightTimeBookingRule(),
                        new Business.NightTimeMorningBookingRule(),
                        new Business.SaturdayBookingRule(),
                        new Business.SundayBookingRule()
                    ];
                }
                RuleBasedTimeBookingDataController.prototype.ensureTimeEntryTypes = function () {
                    if (this.timeEntryTypes == null) {
                        var timeEntryTypeDataController = this.container.timeEntryTypeDc;
                        var timeEntryTypeMap = timeEntryTypeDataController.getTimeEntryTypesMap();
                        this.timeEntryTypes = timeEntryTypeMap.getValues().toEnumerable();
                    }
                };
                RuleBasedTimeBookingDataController.prototype.getRuleBasedTimeBookings = function (timeBooking) {
                    if (timeBooking == null)
                        return null;
                    var ruleBasedTimeBookings = [];
                    var rules = this.availableRules;
                    for (var key in rules) {
                        if (!rules.hasOwnProperty(key)) {
                            continue;
                        }
                        var rule = rules[key];
                        if (rule.match(timeBooking)) {
                            var booking = this.create(timeBooking, rule);
                            if (booking != null) {
                                ruleBasedTimeBookings.add(booking);
                            }
                        }
                    }
                    return ruleBasedTimeBookings;
                };
                RuleBasedTimeBookingDataController.prototype.getTimeEntryTypeForRule = function (rule) {
                    this.ensureTimeEntryTypes();
                    return this.timeEntryTypes.firstOrDefault(function (t) { return t.timeBookingRule === rule.rule; });
                };
                RuleBasedTimeBookingDataController.prototype.create = function (timeBooking, rule) {
                    var timeEntryType = this.getTimeEntryTypeForRule(rule);
                    return timeEntryType != null ? rule.create(timeBooking, timeEntryType) : null;
                };
                RuleBasedTimeBookingDataController.serviceId = "$trRuleBasedTimeBookingDataController";
                RuleBasedTimeBookingDataController.$inject = [
                    "$q"
                ];
                return RuleBasedTimeBookingDataController;
            })();
            Business.RuleBasedTimeBookingDataController = RuleBasedTimeBookingDataController;
            timeRecorder.service(RuleBasedTimeBookingDataController.serviceId, RuleBasedTimeBookingDataController);
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
// Update the most local relative references and declare this service.
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Business;
        (function (Business) {
            var TimeSheetDataController = (function () {
                function TimeSheetDataController($q, $proxy) {
                    this.$q = $q;
                    this.$proxy = $proxy;
                }
                TimeSheetDataController.serviceId = "$trTimeSheetDataController";
                TimeSheetDataController.$inject = ["$q", "$tr-proxy"];
                return TimeSheetDataController;
            })();
            Business.TimeSheetDataController = TimeSheetDataController;
            // declare correct angularjs module
            timeRecorder.service(TimeSheetDataController.serviceId, TimeSheetDataController);
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Business;
        (function (Business) {
            var ExpenseTypeDataController = (function () {
                function ExpenseTypeDataController($q, expenseTypeRepository) {
                    this.$q = $q;
                    this.expenseTypeRepository = expenseTypeRepository;
                }
                ExpenseTypeDataController.prototype.getAllExpenseTypes = function () {
                    return this.expenseTypeRepository.getAllExpenses().then(function (expenseTypes) { return expenseTypes.toEnumerable().select(function (et) { return new Business.ExpenseTypeVm(function () { return et; }); }).toArray(); });
                };
                ExpenseTypeDataController.serviceId = "$trExpenseTypeDataController";
                ExpenseTypeDataController.$inject = [
                    "$q",
                    Business.ExpenseTypeRepository.serviceId
                ];
                return ExpenseTypeDataController;
            })();
            Business.ExpenseTypeDataController = ExpenseTypeDataController;
            timeRecorder.service(ExpenseTypeDataController.serviceId, ExpenseTypeDataController);
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Business;
        (function (Business) {
            var ExpenseDataController = (function () {
                function ExpenseDataController($q, expenseRepository) {
                    this.$q = $q;
                    this.expenseRepository = expenseRepository;
                    this.referenceStore = new Business.ExpenseReferenceStore();
                }
                /**
             * Only used for cordova plugin
             */
                ExpenseDataController.inject = function (payload) {
                    Business.ViewModelReferenceStore.inject(payload, ExpenseDataController.serviceId);
                };
                ExpenseDataController.prototype.search = function (skip, take, from, to, employeeId) {
                    var _this = this;
                    return this.expenseRepository.search(skip, take, from, to, employeeId).then(function (expenses) {
                        return _this.referenceStore.attachMultipleAndGet(expenses, function (entityCm) { return _this.createVm(entityCm); });
                    });
                };
                ExpenseDataController.prototype.createVm = function (cm) {
                    return new Business.ExpenseVm(function () { return cm; });
                };
                ExpenseDataController.prototype.getExpenseById = function (id) {
                    var _this = this;
                    return this.expenseRepository.getExpenseById(id).then(function (e) { return _this.referenceStore.attachAndGet(e, function (entityCm) { return _this.createVm(entityCm); }); });
                };
                ExpenseDataController.prototype.addOrUpdateExpense = function (expenseVm) {
                    var _this = this;
                    return this.expenseRepository.addOrUpdate(expenseVm.getCm()).then(function (expenseCm) { return _this.referenceStore.attachAndGet(expenseCm, function (entityCm) { return _this.createVm(entityCm); }); });
                };
                ExpenseDataController.prototype.delete = function (id) {
                    return this.expenseRepository.delete(id);
                };
                ExpenseDataController.prototype.targetExpenses = function (vms) {
                    var cms = vms.toEnumerable().select(function (e) { return e.getCm(); }).toArray();
                    return this.expenseRepository.targetExpenses(cms);
                };
                ExpenseDataController.prototype.applyChangeSet = function (changeSet) {
                    var _this = this;
                    this.referenceStore.attachChangeSet(changeSet, function (e) { return _this.referenceStore.attachAndGet(e, function (entityCm) { return _this.createVm(entityCm); }); });
                };
                ExpenseDataController.serviceId = "$trExpenseDataController";
                ExpenseDataController.$inject = [
                    "$q",
                    Business.ExpenseRepository.serviceId
                ];
                return ExpenseDataController;
            })();
            Business.ExpenseDataController = ExpenseDataController;
            timeRecorder.service(ExpenseDataController.serviceId, ExpenseDataController);
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Business;
        (function (Business) {
            var ProjectDataController = (function () {
                function ProjectDataController($q, projectRepository) {
                    this.$q = $q;
                    this.projectRepository = projectRepository;
                    this.projectTypesMap = new Map();
                    this.projectMap = new Map();
                }
                ProjectDataController.prototype.loadProjectTypes = function () {
                    var _this = this;
                    var deffered = this.$q.defer();
                    this.projectRepository.getProjectTypes().then(function (projectTypes) {
                        _this.projectTypesMap.clear();
                        projectTypes.forEach(function (pt) {
                            _this.projectTypesMap.set(pt.id, new Business.ProjectTypeVm(function () { return pt; }));
                        });
                        deffered.resolve(_this.projectTypesMap.getValues());
                    });
                    return deffered.promise;
                };
                ProjectDataController.prototype.getProjectById = function (id, includeType) {
                    var _this = this;
                    if (includeType === void 0) { includeType = false; }
                    return this.projectRepository.getProjectById(id).then(function (p) {
                        var projectType = null;
                        if (includeType) {
                            projectType = _this.projectTypesMap.get(p.projectTypeId);
                        }
                        return new Business.ProjectVm(function () { return p; }, function () { return projectType; });
                    });
                };
                ProjectDataController.prototype.getProjectByExternalId = function (id) {
                    var q = this.$q.defer();
                    this.projectRepository.getProjectByExternalId(id).then(function (p) {
                        if (p === null)
                            q.resolve(null);
                        q.resolve(new Business.ProjectVm(function () { return p; }, null));
                    }, function () { return q.reject(); });
                    return q.promise;
                };
                ProjectDataController.prototype.getProjectsById = function (ids) {
                    var _this = this;
                    var notLoaded = [];
                    ids.forEach(function (id) {
                        if (!_this.projectMap.has(id)) {
                            notLoaded.add(id);
                        }
                    });
                    return this.projectRepository.getProjectsById(notLoaded).then(function (projects) {
                        var loadedProjects = projects.toEnumerable().select(function (p) { return new Business.ProjectVm(function () { return p; }); }).toArray();
                        loadedProjects.forEach(function (p) {
                            _this.projectMap.set(p.id, p);
                        });
                        return _this.projectMap.getValues().toEnumerable().where(function (p) { return ids.contains(p.id); }).toArray();
                    });
                };
                ProjectDataController.prototype.search = function (searchValue, skip, take) {
                    return this.projectRepository.search(searchValue, skip, take).then(function (projects) { return projects.toEnumerable().select(function (p) { return new Business.ProjectVm(function () { return p; }); }).toArray(); });
                };
                ProjectDataController.prototype.searchForExternalWorkReports = function (searchValue, skip, take) {
                    var _this = this;
                    return this.projectRepository.searchForExternalWorkReports(searchValue, skip, take).then(function (projects) {
                        var clientIds = projects.toEnumerable().select(function (p) { return p.clientId; }).toArray();
                        return _this.container.peopleDc.getClients(clientIds).then(function (clientCms) {
                            return projects.toEnumerable().select(function (p) { return new Business.ExternalWorkReportCreationProjectVm(function () { return p; }, function () { return clientCms.toEnumerable().firstOrDefault(function (c) { return c.id === p.clientId; }); }); }).toArray();
                        });
                    });
                };
                ProjectDataController.serviceId = "$TrProjectDataController";
                ProjectDataController.$inject = [
                    "$q",
                    Business.ProjectRepository.serviceId
                ];
                return ProjectDataController;
            })();
            Business.ProjectDataController = ProjectDataController;
            timeRecorder.service(ProjectDataController.serviceId, ProjectDataController);
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Business;
        (function (Business) {
            var PeopleDataController = (function () {
                function PeopleDataController($q, peopleRepository) {
                    this.$q = $q;
                    this.peopleRepository = peopleRepository;
                    this.referenceStore = new Business.PeopleReferenceStore();
                }
                PeopleDataController.prototype.getContactsForClient = function (clientId, isLiveData) {
                    var _this = this;
                    if (isLiveData === void 0) { isLiveData = false; }
                    return this.peopleRepository.getContactsForClient(clientId, isLiveData).then(function (cms) {
                        return _this.referenceStore.attachMultipleAndGet(cms, function (e) { return _this.createVm(e); });
                    });
                };
                PeopleDataController.prototype.createVm = function (cm) {
                    return new Web.Bu.ContactVm(function () { return cm; });
                };
                PeopleDataController.prototype.getPerson = function (id, isLiveData) {
                    var _this = this;
                    return this.peopleRepository.getContact(id).then(function (cm) { return _this.referenceStore.attachAndGet(cm, function (e) { return _this.createVm(e); }); });
                };
                PeopleDataController.prototype.getClient = function (id) {
                    return this.peopleRepository.getClient(id).then(function (cm) {
                        return new Business.ClientVm(function () { return cm; });
                    });
                };
                PeopleDataController.prototype.getClients = function (ids) {
                    return this.peopleRepository.getClients(ids).then(function (cms) {
                        return cms.toEnumerable().select(function (cm) { return new Business.ClientVm(function () { return cm; }); }).toArray();
                    });
                };
                PeopleDataController.prototype.getContact = function (id) {
                    var _this = this;
                    return this.peopleRepository.getContact(id).then(function (cm) { return _this.referenceStore.attachAndGet(cm, function (e) { return _this.createVm(e); }); });
                };
                PeopleDataController.prototype.saveContact = function (contact) {
                    var _this = this;
                    return this.peopleRepository.saveContact(contact.toCm()).then(function (cm) { return _this.referenceStore.attachAndGet(cm, function (e) { return _this.createVm(e); }); });
                };
                PeopleDataController.prototype.applyChangeSet = function (changeSet) {
                    var _this = this;
                    this.referenceStore.attachChangeSet(changeSet, function (e) { return _this.referenceStore.attachAndGet(e, function (entityCm) { return _this.createVm(entityCm); }); });
                };
                /**
             * Only used for cordova plugin
             */
                PeopleDataController.inject = function (payload) {
                    Business.ViewModelReferenceStore.inject(payload, PeopleDataController.serviceId);
                };
                PeopleDataController.serviceId = "$TrPersonDataController";
                PeopleDataController.$inject = [
                    "$q",
                    Business.PeopleRepository.serviceId
                ];
                return PeopleDataController;
            })();
            Business.PeopleDataController = PeopleDataController;
            timeRecorder.service(PeopleDataController.serviceId, PeopleDataController);
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
//    public searchPeople(searchString: string): ng.IPromise<PersonVm[]> {
//      return this.peopleRepository.searchPeople(searchString).then(people => {
//        return people.toEnumerable().select(p => new PersonVm(() => p)).toArray();
//      });
//    } 
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Business;
        (function (Business) {
            var EmployeeDataController = (function () {
                function EmployeeDataController($q, employeeRepository) {
                    this.$q = $q;
                    this.employeeRepository = employeeRepository;
                }
                EmployeeDataController.prototype.getAllPersons = function () {
                    return this.employeeRepository.getAllEmployees().then(function (employee) { return employee.toEnumerable().select(function (p) { return new Web.Business.EmployeeVm(function () { return p; }); }).toArray(); });
                };
                EmployeeDataController.prototype.getById = function (id) {
                    return this.employeeRepository.getById(id).then(function (p) { return new Business.EmployeeVm(function () { return p; }); });
                };
                EmployeeDataController.prototype.getByIds = function (ids) {
                    return this.employeeRepository.getByIds(ids).then(function (employees) { return employees.toEnumerable().select(function (p) { return new Business.EmployeeVm(function () { return p; }); }).toArray(); });
                };
                EmployeeDataController.prototype.search = function (searchValue, skip, take) {
                    return this.employeeRepository.search(searchValue, skip, take).then(function (types) { return types.toEnumerable().select(function (p) { return new Business.EmployeeVm(function () { return p; }); }).toArray(); });
                };
                EmployeeDataController.serviceId = "trEmployeeDataController";
                EmployeeDataController.$inject = [
                    "$q",
                    Business.EmployeeRepository.serviceId
                ];
                return EmployeeDataController;
            })();
            Business.EmployeeDataController = EmployeeDataController;
            timeRecorder.service(EmployeeDataController.serviceId, EmployeeDataController);
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Business;
        (function (Business) {
            var TimeBookingDataController = (function () {
                function TimeBookingDataController($q, repository) {
                    this.$q = $q;
                    this.repository = repository;
                    this.referenceStore = new Business.TimeBookingReferenceStore();
                }
                TimeBookingDataController.prototype.getCurrentOpenTimeBooking = function (employeeId, currentDay) {
                    var _this = this;
                    var q = this.$q.defer();
                    this.container.timeEntryDc.getUnbookedTimeEntries(employeeId).then(function (timeEntries) {
                        var latestStartEntry = null;
                        for (var i = 0; i < timeEntries.length; ++i) {
                            var entry = timeEntries[i];
                            if (entry.simpleStampType === 1 /* Start */) {
                                if (!angular.isObject(latestStartEntry) && _this.isOnDay(currentDay, entry)) {
                                    latestStartEntry = entry;
                                }
                                else if (_this.isOnDay(currentDay, entry) && _this.isAfter(latestStartEntry.bookedTime, entry)) {
                                    latestStartEntry = entry;
                                }
                            }
                        }
                        var pseudoBooking = null;
                        if (angular.isObject(latestStartEntry)) {
                            var pseudoCm = {
                                comment: '',
                                confirmed: false,
                                employeeId: employeeId,
                                externalWorkReportId: null,
                                fromSourceId: latestStartEntry.id,
                                id: null,
                                isDeleted: false,
                                parentId: null,
                                projectId: latestStartEntry.projectId,
                                start: latestStartEntry.bookedTime,
                                stop: null,
                                timeEntryTypeId: latestStartEntry.timeEntryTypeId,
                                timestamp: latestStartEntry.timestamp,
                                toSourceId: null,
                                errorMesssage: null
                            };
                            pseudoBooking = new Business.TimeBookingVm(function () { return pseudoCm; }, function () { return _this; });
                        }
                        q.resolve(pseudoBooking);
                    }, function () {
                        q.resolve(null);
                    });
                    return q.promise;
                };
                TimeBookingDataController.prototype.isOnDay = function (day, timeEntry) {
                    return moment(day).startOf('day').isSame(moment(timeEntry.bookedTime).startOf('day'));
                };
                TimeBookingDataController.prototype.isAfter = function (time, timeEntry) {
                    return moment(timeEntry.bookedTime).isAfter(moment(time));
                };
                TimeBookingDataController.prototype.getIsEditable = function (timeBooking) {
                    return timeBooking.externalWorkReportId == null;
                };
                TimeBookingDataController.prototype.getIsExtraBooking = function (timeBooking) {
                    return timeBooking.parentId != null;
                };
                TimeBookingDataController.prototype.getDetail = function (id) {
                    var timebooking = this.referenceStore.get(id);
                    if (timebooking != null) {
                        var q = this.$q.defer();
                        q.resolve(timebooking);
                        return q.promise;
                    }
                    return this.resolveFor([id]).then(function (cms) { return cms.first(); });
                };
                TimeBookingDataController.prototype.getAllExtraBookings = function (parentIds) {
                    var _this = this;
                    var extraTimeBookings = [];
                    var promises = [];
                    parentIds.forEach(function (parentId) {
                        var promise = _this.getExtraBookings(parentId).then(function (timeBookings) {
                            extraTimeBookings.addRange(timeBookings);
                            return timeBookings;
                        });
                        promises.add(promise);
                    });
                    return this.$q.all(promises).then(function () {
                        return extraTimeBookings;
                    });
                };
                TimeBookingDataController.prototype.getExtraBookings = function (parentId) {
                    return this.search({ parentId: parentId, person: "" });
                };
                TimeBookingDataController.prototype.getAllTimeBookingsForId = function (id) {
                    var _this = this;
                    var timeBookings = [];
                    return this.getDetail(id).then(function (timeBooking) {
                        if (!_this.getIsExtraBooking(timeBooking)) {
                            // load missing extra bookings
                            return _this.getExtraBookings(timeBooking.id).then(function (extraBookings) {
                                timeBookings.add(timeBooking);
                                timeBookings.addRange(extraBookings);
                                return timeBookings;
                            });
                        }
                        else {
                            // load parent booking and missing extra bookings
                            return _this.getDetail(timeBooking.parentId).then(function (parentBooking) {
                                return _this.getExtraBookings(parentBooking.id).then(function (extraBookings) {
                                    timeBookings.add(parentBooking);
                                    timeBookings.addRange(extraBookings);
                                    return timeBookings;
                                });
                            });
                        }
                    });
                };
                TimeBookingDataController.prototype.createVm = function (cm) {
                    var _this = this;
                    return new Business.TimeBookingVm(function () { return cm; }, function () { return _this; });
                };
                TimeBookingDataController.prototype.search = function (data) {
                    var _this = this;
                    return this.repository.search(data).then(function (cms) {
                        return _this.referenceStore.attachMultipleAndGet(cms, function (cm) {
                            return new Business.TimeBookingVm(function () { return cm; }, function () { return _this; });
                        });
                    });
                };
                TimeBookingDataController.prototype.saveMultiple = function (timeBookings, calculateExtraBookings) {
                    var _this = this;
                    var list = timeBookings.toEnumerable();
                    var additionalExtraBookingsToDelete = [];
                    var q = this.$q.defer();
                    // if we modify a parent booking..
                    // find all related extra bookings and flag them as deleted
                    if (calculateExtraBookings) {
                        var parentIds = list.where(function (t) { return t.parentId == null && t.id != null; }).select(function (t) { return t.id; }).toArray();
                        this.getAllExtraBookings(parentIds).then(function (extraBookings) {
                            extraBookings.forEach(function (timeBookingVm) {
                                var extraBookingToDelete = list.firstOrDefault(function (c) { return c.id === timeBookingVm.id; });
                                if (extraBookingToDelete == null) {
                                    extraBookingToDelete = timeBookingVm;
                                    additionalExtraBookingsToDelete.add(timeBookingVm);
                                }
                                extraBookingToDelete.isDeleted = true;
                            });
                            q.resolve();
                        });
                    }
                    else {
                        q.resolve();
                    }
                    // save data
                    return q.promise.then(function () {
                        var data = list.toArray();
                        data.addRange(additionalExtraBookingsToDelete);
                        var entities = data.toEnumerable().select(function (tb) { return tb.toCm(); }).toArray();
                        return _this.repository.save(entities).then(function (response) {
                            var extraTimeBookings = [];
                            if (!calculateExtraBookings)
                                return response;
                            response.forEach(function (timeBooking) {
                                if (timeBooking.parentId != null)
                                    return;
                                var ruleBasedTimeBookingDc = _this.container.ruleBasedTimeBookingDc;
                                var timeBookingVm = new Business.TimeBookingVm(function () { return timeBooking; }, function () { return _this.container.timeBookingDc; });
                                extraTimeBookings.addRange(ruleBasedTimeBookingDc.getRuleBasedTimeBookings(timeBookingVm));
                            });
                            // safty measure so that additional bookings 
                            extraTimeBookings = extraTimeBookings.toEnumerable().where(function (etb) { return !_this.isSameTime(etb); }).toArray();
                            extraTimeBookings = extraTimeBookings.toEnumerable().distinct(function (etb) { return etb.type; }).toArray();
                            if (extraTimeBookings.any()) {
                                var cms = extraTimeBookings.toEnumerable().select(function (tb) { return tb.toCm(); }).toArray();
                                return _this.repository.save(cms).then(function (extraTimeBookingsData) {
                                    // add previously saved time booking to the response
                                    extraTimeBookingsData.addRange(response);
                                    return extraTimeBookingsData;
                                });
                            }
                            else {
                                return response;
                            }
                        }).then(function (timeBookings) { return _this.referenceStore.attachMultipleAndGet(timeBookings, function (entityCm) { return _this.createVm(entityCm); }, true); });
                    });
                };
                TimeBookingDataController.prototype.isSameTime = function (timeBooking) {
                    return moment(timeBooking.start).format('DD/MM/YYYY hh:mm') === moment(timeBooking.stop).format('DD/MM/YYYY hh:mm');
                };
                TimeBookingDataController.prototype.remove = function (id) {
                    return this.repository.remove(id);
                };
                TimeBookingDataController.prototype.resolveFor = function (ids) {
                    var _this = this;
                    return this.repository.resolveFor(ids).then(function (cms) { return _this.referenceStore.attachMultipleAndGet(cms, function (cm) { return _this.createVm(cm); }); });
                };
                TimeBookingDataController.prototype.getUnBilledCompletedBookings = function (employeeId, projectId) {
                    var _this = this;
                    return this.repository.getUnBilledCompletedBookings(employeeId, projectId).then(function (cms) { return _this.referenceStore.attachMultipleAndGet(cms, function (cm) { return _this.createVm(cm); }); });
                    ;
                };
                TimeBookingDataController.prototype.getForExternalWorkReport = function (externalWorkReportId) {
                    var _this = this;
                    return this.repository.getBilledTimeBookings(externalWorkReportId).then(function (cms) { return _this.referenceStore.attachMultipleAndGet(cms, function (cm) { return _this.createVm(cm); }); });
                    ;
                    ;
                };
                /**
                 * Function that determins if the given time bookings will overlap with another time booking with the same criteria
                 * @param timeBooking
                 * @returns {}
                 */
                TimeBookingDataController.prototype.bookingOverlaps = function (timeBooking) {
                    // get all the time bookings for the employee for the same day
                    var sameTypeTypeBooking = this.referenceStore.getAll().toEnumerable().where(function (tb) { return tb.employeeId === timeBooking.employeeId && moment(tb.start).isSame(timeBooking.start, "day"); }).toArray();
                    // if there are no time bookings
                    if (!Triarc.arrayHasValues(sameTypeTypeBooking)) {
                        return false;
                    }
                    // check to see if the start and stop times overlap
                    return sameTypeTypeBooking.toEnumerable().any(function (tb) { return moment(timeBooking.start).isAfter(tb.start) && moment(timeBooking.start).isBefore(tb.stop) || moment(timeBooking.stop).isBefore(tb.stop) && moment(timeBooking.stop).isAfter(tb.start) || moment(timeBooking.start).isBefore(tb.start) && moment(timeBooking.stop).isAfter(tb.start); });
                };
                /**
                 *
                 * @param payload
                 * @returns {}
                 */
                TimeBookingDataController.prototype.getCorrispondingUnvisumedTimeBookingsForCriteria = function (timeBookingIds) {
                    var _this = this;
                    return this.repository.getCorrispondingUnvisumedTimeBookingsForCriteria(timeBookingIds).then(function (unVisumedTimeBookings) {
                        if (Triarc.arrayHasValues(unVisumedTimeBookings)) {
                            return unVisumedTimeBookings.toEnumerable().select(function (cm) { return _this.createVm(cm); }).toArray();
                        }
                        else {
                            return null;
                        }
                    });
                };
                /**
                * Only used for cordova plugin
                */
                TimeBookingDataController.inject = function (payload) {
                    Business.ViewModelReferenceStore.inject(payload, TimeBookingDataController.serviceId);
                };
                TimeBookingDataController.prototype.applyChangeSet = function (changeSet) {
                    var _this = this;
                    this.referenceStore.attachChangeSet(changeSet, function (e) { return _this.referenceStore.attachAndGet(e, function (entityCm) { return _this.createVm(entityCm); }); });
                };
                TimeBookingDataController.serviceId = "$trTimeBookingDataController";
                TimeBookingDataController.$inject = [
                    "$q",
                    Business.TimeBookingRepository.serviceId,
                ];
                return TimeBookingDataController;
            })();
            Business.TimeBookingDataController = TimeBookingDataController;
            timeRecorder.service(TimeBookingDataController.serviceId, TimeBookingDataController);
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Business;
        (function (Business) {
            var TimeEntryTypeDataController = (function () {
                function TimeEntryTypeDataController($q, repository) {
                    this.$q = $q;
                    this.repository = repository;
                }
                TimeEntryTypeDataController.prototype.ensureLoaded = function () {
                    var _this = this;
                    return this.repository.loadTypes().then(function (cms) {
                        _this.timeEntryTypesMap = new Map();
                        cms.forEach(function (cm) {
                            _this.timeEntryTypesMap.set(cm.id, _this.createTypeVm(cm));
                        });
                    });
                };
                TimeEntryTypeDataController.prototype.getTimeEntryTypeForAbbreviation = function (abbreviation) {
                    var _this = this;
                    var q = this.$q.defer();
                    this.ensureLoaded().then(function () {
                        var type = null;
                        _this.timeEntryTypesMap.getValues().forEach(function (t) {
                            if (t.abbreviation === abbreviation)
                                type = t;
                        });
                        q.resolve(type);
                    }, function () {
                        q.reject();
                    });
                    return q.promise;
                };
                TimeEntryTypeDataController.prototype.getTimeEntryTypesMap = function () {
                    return this.timeEntryTypesMap;
                };
                TimeEntryTypeDataController.prototype.search = function (searchValue, skip, take) {
                    var _this = this;
                    return this.repository.search(searchValue, skip, take).then(function (types) { return types.toEnumerable().select(function (p) { return _this.createTypeVm(p); }).toArray(); });
                };
                TimeEntryTypeDataController.prototype.getTypesById = function (ids) {
                    var _this = this;
                    return this.repository.getTypesById(ids).then(function (types) { return types.toEnumerable().select(function (t) { return _this.createTypeVm(t); }).toArray(); });
                };
                TimeEntryTypeDataController.prototype.getStateColor = function (state) {
                    switch (state) {
                        case 0 /* Open */:
                            return "#00FF00";
                        case 3 /* Complete */:
                            return "#333333";
                        case 4 /* Faulted */:
                            return "#FF0000";
                        default:
                            return "#000000";
                    }
                };
                TimeEntryTypeDataController.prototype.createTypeVm = function (p) {
                    return new Business.TimeEntryTypeVm(function () { return p; });
                };
                TimeEntryTypeDataController.serviceId = "$trTimeEntryTypeDataController";
                TimeEntryTypeDataController.$inject = [
                    "$q",
                    Business.TimeEntryTypeRepository.serviceId
                ];
                return TimeEntryTypeDataController;
            })();
            Business.TimeEntryTypeDataController = TimeEntryTypeDataController;
            timeRecorder.service(TimeEntryTypeDataController.serviceId, TimeEntryTypeDataController);
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Business;
        (function (Business) {
            var ExternalWorkReportDataController = (function () {
                function ExternalWorkReportDataController($q, repository, $timeout) {
                    var _this = this;
                    this.$q = $q;
                    this.repository = repository;
                    this.$timeout = $timeout;
                    this.referenceStore = new Triarc.Vm.ViewModelRefStore(function (entityCm) {
                        return new Business.ExternalWorkReportVm(entityCm, _this);
                    });
                }
                ExternalWorkReportDataController.prototype.getFullWorkReport = function (id) {
                    var _this = this;
                    return this.repository.get(id).then(function (cm) {
                        // if the report is still open get all unassigned time bookings that have not been associated to another report
                        if (cm.externalWorkReport.state === 0 /* Open */) {
                            return _this.container.timeBookingDc.getUnBilledCompletedBookings(cm.externalWorkReport.employeeId, cm.externalWorkReport.projectId).then(function (timeBookings) {
                                var workReportVm = _this.createWorkReportVm(cm);
                                if (Triarc.arrayHasValues(timeBookings)) {
                                    workReportVm.externalWorkReport.from = new Date(timeBookings.toEnumerable().min(function (tb) { return tb.start.getTime(); }));
                                    workReportVm.externalWorkReport.to = new Date(timeBookings.toEnumerable().max(function (tb) { return tb.stop.getTime(); }));
                                }
                                return workReportVm;
                            });
                        }
                        else {
                            return _this.container.timeBookingDc.getForExternalWorkReport(cm.externalWorkReport.id).then(function (timeBookings) {
                                return _this.createWorkReportVm(cm);
                            });
                        }
                    });
                };
                ////
                // Constructs a work report VM from the given criteria, only for use in the class!!
                ////
                ExternalWorkReportDataController.prototype.createWorkReportVm = function (workReportCm) {
                    var ewr = this.referenceStore.attachAndGet(workReportCm.externalWorkReport);
                    //      if (Triarc.arrayHasValues(timeBookings)) {
                    //        workReportCm: timeBookings.toEnumerable().select(tb => tb.id).toArray();
                    //      }
                    var workReport = new Business.WorkReportVm(workReportCm, this);
                    workReport.setExternalWorkReport(ewr);
                    return workReport;
                };
                ExternalWorkReportDataController.prototype.save = function (workReport) {
                    var _this = this;
                    return this.repository.save(workReport.toCm()).then(function (cm) {
                        var vm = _this.referenceStore.attachAndGet(cm, function (entityCm) {
                            return workReport.externalWorkReport;
                        }, true);
                        workReport.setExternalWorkReport(vm);
                    });
                };
                ExternalWorkReportDataController.prototype.search = function (skip, take, employeeId, from, to, projectId, state) {
                    var _this = this;
                    return this.repository.search(skip, take, employeeId, from, to, projectId, state, true).then(function (externalWorkReports) {
                        var openReports = externalWorkReports.toEnumerable().where(function (wr) { return wr.state === 0 /* Open */; }).toArray();
                        openReports.forEach(function (r) {
                            r.from = null;
                            r.to = null;
                            _this.container.timeBookingDc.getUnBilledCompletedBookings(r.employeeId, r.projectId).then(function (timeBookings) {
                                if (Triarc.arrayHasValues(timeBookings)) {
                                    r.from = new Date(timeBookings.toEnumerable().min(function (tb) { return tb.start.getTime(); }));
                                    r.to = new Date(timeBookings.toEnumerable().max(function (tb) { return tb.stop.getTime(); }));
                                }
                            });
                        });
                        return _this.referenceStore.attachMultipleAndGet(externalWorkReports, function (entityCm) {
                            return new Business.ExternalWorkReportVm(entityCm, _this);
                        });
                    });
                };
                ExternalWorkReportDataController.prototype.createNewWorkReport = function (employeeId, projectId) {
                    var _this = this;
                    return this.container.timeBookingDc.getUnBilledCompletedBookings(employeeId, projectId).then(function (timeBookings) {
                        var cm = {
                            externalWorkReport: Business.ExternalWorkReportVm.createNewCm()
                        };
                        _this.$timeout(function () {
                            cm.externalWorkReport.workReportNumber = _this.generateNewWorkReportNumber(employeeId).toUpperCase();
                        }, 2000);
                        cm.externalWorkReport.projectId = projectId;
                        cm.externalWorkReport.employeeId = employeeId;
                        if (Triarc.arrayHasValues(timeBookings)) {
                            cm.externalWorkReport.from = moment(timeBookings.toEnumerable().min(function (t) { return t.start.getTime(); })).toDate();
                            cm.externalWorkReport.to = moment(timeBookings.toEnumerable().max(function (t) { return t.stop.getTime(); })).toDate();
                            cm.timeBookingIds = timeBookings.toEnumerable().select(function (tb) { return tb.id; }).toArray();
                        }
                        return new Business.WorkReportVm(cm, _this);
                    });
                };
                ExternalWorkReportDataController.prototype.getIdFor = function (employeeId, selectedProject) {
                    return this.repository.getIdFor(employeeId, selectedProject);
                };
                ExternalWorkReportDataController.prototype.hasCloseStateCriteria = function (externalWorkReport) {
                    return this.repository.hasCloseStateCriteria(externalWorkReport.toCm());
                };
                ExternalWorkReportDataController.prototype.hasCloseStateCriteriaById = function (id) {
                    var _this = this;
                    var externalWorkReportVm = this.referenceStore.get(id);
                    if (externalWorkReportVm !== null) {
                        var defer = this.$q.defer();
                        defer.resolve(this.repository.hasCloseStateCriteria(externalWorkReportVm.toCm()));
                        return defer.promise;
                    }
                    return this.repository.get(id).then(function (cm) {
                        return _this.repository.hasCloseStateCriteria(cm.externalWorkReport);
                    });
                };
                /**
                * Only used for cordova plugin
                */
                ExternalWorkReportDataController.inject = function (payload) {
                    Business.ViewModelReferenceStore.inject(payload, ExternalWorkReportDataController.serviceId);
                };
                ExternalWorkReportDataController.prototype.applyChangeSet = function (changeSet) {
                    var _this = this;
                    // this forces the reference store to get a new version
                    changeSet.added.toEnumerable().concat(changeSet.updated).forEach(function (e) { return _this.getFullWorkReport(e.id); });
                };
                ExternalWorkReportDataController.prototype.generateNewWorkReportNumber = function (employeeId) {
                    var time = new Date().getTime();
                    var d = time.toString().substring(0, 10);
                    return this.hashCode((employeeId + d + (time % 10000)));
                };
                ExternalWorkReportDataController.prototype.hashCode = function (value) {
                    var i, l, hval = 0x811c9dc5;
                    for (i = 0, l = value.length; i < l; i++) {
                        hval ^= value.charCodeAt(i);
                        hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
                    }
                    // Convert to 8 digit hex string
                    return ("0000000" + (hval >>> 0).toString(16)).substr(-8);
                };
                ExternalWorkReportDataController.serviceId = "$TrExternalWorkReportDataController";
                ExternalWorkReportDataController.$inject = [
                    "$q",
                    Business.ExternalWorkReportRepository.serviceId,
                    "$timeout"
                ];
                return ExternalWorkReportDataController;
            })();
            Business.ExternalWorkReportDataController = ExternalWorkReportDataController;
            timeRecorder.service(ExternalWorkReportDataController.serviceId, ExternalWorkReportDataController);
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Business;
        (function (Business) {
            var TimeEntryDataController = (function () {
                function TimeEntryDataController($q, timeEntryRepo) {
                    this.$q = $q;
                    this.timeEntryRepo = timeEntryRepo;
                    this.referenceStore = new Business.TimeEntryReferenceStore();
                }
                TimeEntryDataController.prototype.getUnbookedTimeEntries = function (employeeId) {
                    return this.timeEntryRepo.getUnbookedTimeEntries(employeeId);
                };
                TimeEntryDataController.prototype.stop = function (employeeId, projectId) {
                    var _this = this;
                    if (!angular.isNumber(projectId))
                        throw new Error("tried to create stop time entry without a project");
                    var cm = {
                        id: Triarc.generateGuid(),
                        bookedTime: new Date(),
                        employeeId: employeeId,
                        projectId: projectId,
                        simpleStampType: 2 /* Stop */,
                        timeEntryTypeId: null,
                        hasBooking: false,
                        timestamp: null
                    };
                    return this.timeEntryRepo.createOrUpdateTimeEntry(cm).then(function (updatedCm) {
                        _this.referenceStore.attachAndGet(updatedCm, function (c) { return _this.createVm(c); });
                        return _this.triggerBookingCreation(employeeId);
                    }, function () {
                    });
                };
                TimeEntryDataController.prototype.createVm = function (cm) {
                    return new Business.TimeEntryVm(function () { return cm; });
                };
                TimeEntryDataController.prototype.start = function (employeeId, projectId, typeId) {
                    var _this = this;
                    if (!angular.isNumber(projectId))
                        throw new Error("tried to create start time entry without a project");
                    var cm = {
                        id: Triarc.generateGuid(),
                        bookedTime: new Date(),
                        employeeId: employeeId,
                        projectId: projectId,
                        simpleStampType: 1 /* Start */,
                        timeEntryTypeId: typeId,
                        hasBooking: false,
                        timestamp: null
                    };
                    return this.timeEntryRepo.createOrUpdateTimeEntry(cm).then(function (updatedCm) {
                        return _this.referenceStore.attachAndGet(updatedCm, function (c) { return _this.createVm(c); });
                    });
                };
                TimeEntryDataController.prototype.triggerBookingCreation = function (employeeId) {
                    var _this = this;
                    return this.timeEntryRepo.getUnbookedTimeEntries(employeeId).then(function (entries) {
                        var bookings = _this.generateBookingsFromTimeEntries(_this.referenceStore.attachMultipleAndGet(entries, function (c) { return _this.createVm(c); }));
                        console.log("created time bookings:");
                        console.log(bookings);
                        var validBookings = [];
                        var invalidBookings = [];
                        bookings.forEach(function (b) {
                            if (_this.hasValidDuration(b)) {
                                validBookings.push(b);
                            }
                            else {
                                invalidBookings.push(b);
                                b.isDeleted = true;
                            }
                        });
                        console.log(validBookings, invalidBookings);
                        return _this.container.timeEntryTypeDc.ensureLoaded().then(function () {
                            var promises = [];
                            if (invalidBookings.length > 0) {
                                //save the invalid bookings, don't create additional bookings
                                promises.add(_this.container.timeBookingDc.saveMultiple(invalidBookings.toEnumerable().select(function (cm) { return new Business.TimeBookingVm(function () { return cm; }, function () { return _this.container.timeBookingDc; }); }).toArray(), false));
                            }
                            if (validBookings.length > 0) {
                                //save the valid bookings
                                promises.add(_this.container.timeBookingDc.saveMultiple(validBookings.toEnumerable().select(function (cm) { return new Business.TimeBookingVm(function () { return cm; }, function () { return _this.container.timeBookingDc; }); }).toArray(), true));
                            }
                            return _this.$q.all(promises);
                        }, function () {
                        });
                    }, function () {
                    });
                };
                TimeEntryDataController.prototype.hasValidDuration = function (booking) {
                    var diff = moment(booking.stop).diff(moment(booking.start), 'seconds');
                    return diff / 60 > 1;
                };
                TimeEntryDataController.prototype.generateBookingsFromTimeEntries = function (unbookedEntries) {
                    var _this = this;
                    if (unbookedEntries.length === 0)
                        return [];
                    var bookings = [];
                    var openTimeEntries = [];
                    var currentStartEntry = null;
                    unbookedEntries.forEach(function (currentEntry) {
                        if (currentEntry.simpleStampType === 1 /* Start */) {
                            if (currentStartEntry != null && currentStartEntry.projectId === currentEntry.projectId) {
                                currentEntry.simpleStampType = 3 /* StartError */;
                                _this.updateEntry(currentEntry);
                                return;
                            }
                        }
                        else if (currentEntry.simpleStampType === 2 /* Stop */) {
                            if (currentStartEntry == null) {
                                currentEntry.simpleStampType = 4 /* StopError */;
                                _this.updateEntry(currentEntry);
                                return;
                            }
                        }
                        else {
                            return;
                        }
                        if (currentStartEntry != null) {
                            // create a complete booking (start and stop)
                            bookings.push(_this.createBooking(currentStartEntry, currentEntry));
                            currentStartEntry = null;
                        }
                        if (currentEntry.simpleStampType === 1 /* Start */) {
                            openTimeEntries.push(currentEntry);
                            currentStartEntry = currentEntry;
                        }
                    });
                    // create bookings for open time entries (tasks without stop date)
                    //var bookingsList = bookings.toEnumerable();
                    //for (var i = 0; i < openTimeEntries.length; i++) {
                    //  var timeEntry = openTimeEntries[i];
                    //  if (!bookingsList.any(t => t.fromSourceId === timeEntry.id || t.toSourceId === timeEntry.id)) {
                    //    bookings.push(this.createBooking(timeEntry, null));
                    //  }
                    //}
                    console.log('bookings before breaking up', bookings);
                    return this.breakMultidayBookings(bookings);
                };
                TimeEntryDataController.prototype.breakMultidayBookings = function (bookings) {
                    var _this = this;
                    var brokenBookings = [];
                    bookings.forEach(function (b) {
                        if (!_this.areOnSameDate(b.start, b.stop)) {
                            var currentBooking = b;
                            while (_this.isOnAPreviousDay(currentBooking.start, currentBooking.stop)) {
                                var nextBooking = _this.copyBooking(currentBooking);
                                nextBooking.stop = moment(nextBooking.start).startOf('day').add(86399000, 'ms').toDate();
                                brokenBookings.push(nextBooking);
                                currentBooking.start = moment(nextBooking.start).startOf('day').add(1, 'd').toDate();
                                if (currentBooking.fromSourceId != null) {
                                    nextBooking.fromSourceId = currentBooking.fromSourceId;
                                    currentBooking.fromSourceId = null;
                                }
                                console.log(nextBooking, currentBooking);
                            }
                            brokenBookings.push(currentBooking);
                        }
                        else {
                            brokenBookings.push(b);
                        }
                    });
                    return brokenBookings;
                };
                TimeEntryDataController.prototype.createBooking = function (startEntry, endEntry) {
                    startEntry.hasBooking = true;
                    var booking = {
                        id: Triarc.generateGuid(),
                        comment: "",
                        confirmed: false,
                        employeeId: startEntry.employeeId,
                        projectId: startEntry.projectId,
                        externalWorkReportId: null,
                        parentId: null,
                        start: startEntry.bookedTime,
                        timeEntryTypeId: startEntry.timeEntryTypeId,
                        timestamp: null,
                        fromSourceId: startEntry.id,
                        isDeleted: false,
                        errorMesssage: null
                    };
                    this.updateEntry(startEntry);
                    if (Triarc.hasValue(endEntry)) {
                        endEntry.hasBooking = true;
                        booking.stop = endEntry.bookedTime;
                        booking.toSourceId = endEntry.id;
                        this.updateEntry(endEntry);
                    }
                    return booking;
                };
                TimeEntryDataController.prototype.updateEntry = function (entry) {
                    this.timeEntryRepo.createOrUpdateTimeEntry(entry.getCm());
                };
                TimeEntryDataController.prototype.copyBooking = function (booking) {
                    return {
                        id: Triarc.generateGuid(),
                        comment: "",
                        confirmed: false,
                        employeeId: booking.employeeId,
                        projectId: booking.projectId,
                        externalWorkReportId: null,
                        parentId: null,
                        start: booking.start,
                        timeEntryTypeId: booking.timeEntryTypeId,
                        stop: booking.stop,
                        timestamp: null,
                        fromSourceId: null,
                        toSourceId: null,
                        isDeleted: booking.isDeleted,
                        errorMesssage: null
                    };
                };
                TimeEntryDataController.prototype.areOnSameDate = function (dateTime1, dateTime2) {
                    return moment(dateTime1).isSame(dateTime2, "day");
                };
                TimeEntryDataController.prototype.isOnAPreviousDay = function (dateTime1, dateTime2) {
                    return moment(dateTime1).isBefore(dateTime2, 'day');
                };
                /**
            * Only used for cordova plugin
            */
                TimeEntryDataController.inject = function (payload) {
                    Business.ViewModelReferenceStore.inject(payload, TimeEntryDataController.serviceId);
                };
                TimeEntryDataController.prototype.applyChangeSet = function (changeSet) {
                    var _this = this;
                    this.referenceStore.attachChangeSet(changeSet, function (e) { return _this.referenceStore.attachAndGet(e, function (entityCm) { return _this.createVm(entityCm); }); });
                };
                TimeEntryDataController.serviceId = "$trTimeEntryDataController";
                TimeEntryDataController.$inject = ['$q', Business.TimeEntryRepository.serviceId];
                return TimeEntryDataController;
            })();
            Business.TimeEntryDataController = TimeEntryDataController;
            timeRecorder.service(TimeEntryDataController.serviceId, TimeEntryDataController);
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Business;
        (function (Business) {
            var TimeBasedBookingRule = (function () {
                function TimeBasedBookingRule() {
                }
                TimeBasedBookingRule.prototype.getStartRange = function (moment) {
                    throw new Error("NotImplementedException");
                };
                TimeBasedBookingRule.prototype.getEndRange = function (moment) {
                    throw new Error("NotImplementedException");
                };
                TimeBasedBookingRule.prototype.getTime = function (moment) {
                    return moment.toDate().getTime();
                };
                TimeBasedBookingRule.prototype.match = function (timeBooking) {
                    var start = moment(timeBooking.start);
                    var end = moment(timeBooking.stop);
                    if (!start.isValid() || !end.isValid())
                        return false;
                    var rangeStartTime = this.getTime(this.getStartRange(start));
                    var rangeEndTime = this.getTime(this.getEndRange(start));
                    var startTime = start.toDate().getTime();
                    var endTime = end.toDate().getTime();
                    return startTime <= rangeEndTime && endTime >= rangeStartTime;
                };
                TimeBasedBookingRule.prototype.create = function (timeBooking, timeEntryType) {
                    var entity = timeBooking.clone();
                    entity.id = Triarc.generateGuid();
                    var start = moment(entity.start);
                    var end = moment(entity.stop);
                    entity.fromSourceId = null;
                    entity.toSourceId = null;
                    entity.comment = "";
                    entity.parentId = timeBooking.id;
                    entity.typeId = timeEntryType.id;
                    entity.confirmed = true;
                    entity.start = moment.max([start, this.getStartRange(start)]).toDate();
                    entity.stop = moment.min([end, this.getEndRange(start)]).toDate();
                    return entity;
                };
                return TimeBasedBookingRule;
            })();
            Business.TimeBasedBookingRule = TimeBasedBookingRule;
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Business;
        (function (Business) {
            var SundayBookingRule = (function (_super) {
                __extends(SundayBookingRule, _super);
                function SundayBookingRule() {
                    _super.apply(this, arguments);
                    this.rule = 3 /* SundayWorkRule */;
                    this.surchagePercentage = 50;
                }
                SundayBookingRule.prototype.getStartRange = function (moment) {
                    return moment.clone().startOf("day").hour(6).day(0);
                };
                SundayBookingRule.prototype.getEndRange = function (moment) {
                    return moment.clone().startOf("day").hour(21).day(0);
                };
                return SundayBookingRule;
            })(Business.TimeBasedBookingRule);
            Business.SundayBookingRule = SundayBookingRule;
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Business;
        (function (Business) {
            var NightTimeBookingRule = (function (_super) {
                __extends(NightTimeBookingRule, _super);
                function NightTimeBookingRule() {
                    _super.apply(this, arguments);
                    this.rule = 1 /* NightWorkRule */;
                    this.surchagePercentage = 50;
                }
                NightTimeBookingRule.prototype.getStartRange = function (moment) {
                    return moment.clone().startOf("day").hour(21);
                };
                NightTimeBookingRule.prototype.getEndRange = function (moment) {
                    return moment.clone().endOf("day");
                };
                return NightTimeBookingRule;
            })(Business.TimeBasedBookingRule);
            Business.NightTimeBookingRule = NightTimeBookingRule;
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Business;
        (function (Business) {
            var NightTimeMorningBookingRule = (function (_super) {
                __extends(NightTimeMorningBookingRule, _super);
                function NightTimeMorningBookingRule() {
                    _super.apply(this, arguments);
                    this.rule = 1 /* NightWorkRule */;
                    this.surchagePercentage = 50;
                }
                NightTimeMorningBookingRule.prototype.getStartRange = function (moment) {
                    return moment.clone().startOf("day");
                };
                NightTimeMorningBookingRule.prototype.getEndRange = function (moment) {
                    return moment.clone().startOf("day").hour(6);
                };
                return NightTimeMorningBookingRule;
            })(Business.TimeBasedBookingRule);
            Business.NightTimeMorningBookingRule = NightTimeMorningBookingRule;
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Business;
        (function (Business) {
            var OvertimeBookingRule = (function (_super) {
                __extends(OvertimeBookingRule, _super);
                function OvertimeBookingRule() {
                    _super.apply(this, arguments);
                    this.rule = 0 /* OvertimeRule */;
                    this.surchagePercentage = 25;
                }
                OvertimeBookingRule.prototype.match = function (timeBooking) {
                    var match = _super.prototype.match.call(this, timeBooking);
                    // there is no overtime on sunday..
                    var isSunday = moment(timeBooking.start).day() === 0 || moment(timeBooking.stop).day() === 0;
                    return match && !isSunday;
                };
                OvertimeBookingRule.prototype.getStartRange = function (moment) {
                    return moment.clone().startOf("day").hour(18);
                };
                OvertimeBookingRule.prototype.getEndRange = function (moment) {
                    return moment.clone().startOf("day").hour(21);
                };
                return OvertimeBookingRule;
            })(Business.TimeBasedBookingRule);
            Business.OvertimeBookingRule = OvertimeBookingRule;
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Business;
        (function (Business) {
            var SaturdayBookingRule = (function (_super) {
                __extends(SaturdayBookingRule, _super);
                function SaturdayBookingRule() {
                    _super.apply(this, arguments);
                    this.rule = 2 /* SaturdayWorkRule */;
                    this.surchagePercentage = 25;
                }
                SaturdayBookingRule.prototype.getStartRange = function (moment) {
                    return moment.clone().startOf("day").hour(6).day(6);
                };
                SaturdayBookingRule.prototype.getEndRange = function (moment) {
                    return moment.clone().startOf("day").hour(18).day(6);
                };
                return SaturdayBookingRule;
            })(Business.TimeBasedBookingRule);
            Business.SaturdayBookingRule = SaturdayBookingRule;
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
// Update the most local relative references and declare this service.
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Business;
        (function (Business) {
            var DataControllerContainer = (function () {
                function DataControllerContainer(expencesDc, expenceTypeDc, externalWorkReportDc, projectDc, ruleBasedTimeBookingDc, timeBookingDc, timeEntryTypeDc, timeSheetDc, employeeDc, peopleDc, timeEntryDc) {
                    this.expencesDc = expencesDc;
                    this.expenceTypeDc = expenceTypeDc;
                    this.externalWorkReportDc = externalWorkReportDc;
                    this.projectDc = projectDc;
                    this.ruleBasedTimeBookingDc = ruleBasedTimeBookingDc;
                    this.timeBookingDc = timeBookingDc;
                    this.timeEntryTypeDc = timeEntryTypeDc;
                    this.timeSheetDc = timeSheetDc;
                    this.employeeDc = employeeDc;
                    this.peopleDc = peopleDc;
                    this.timeEntryDc = timeEntryDc;
                }
                DataControllerContainer.prototype.initialize = function () {
                    this.expencesDc.container = this;
                    this.expenceTypeDc.container = this;
                    this.externalWorkReportDc.container = this;
                    this.projectDc.container = this;
                    this.ruleBasedTimeBookingDc.container = this;
                    this.timeBookingDc.container = this;
                    this.timeEntryTypeDc.container = this;
                    this.timeSheetDc.container = this;
                    this.employeeDc.container = this;
                    this.peopleDc.container = this;
                    this.timeEntryDc.container = this;
                };
                DataControllerContainer.serviceId = "$trDataControllerContainer";
                DataControllerContainer.$inject = [
                    Business.ExpenseDataController.serviceId,
                    Business.ExpenseTypeDataController.serviceId,
                    Business.ExternalWorkReportDataController.serviceId,
                    Business.ProjectDataController.serviceId,
                    Business.RuleBasedTimeBookingDataController.serviceId,
                    Business.TimeBookingDataController.serviceId,
                    Business.TimeEntryTypeDataController.serviceId,
                    Business.TimeSheetDataController.serviceId,
                    Business.EmployeeDataController.serviceId,
                    Business.PeopleDataController.serviceId,
                    Business.TimeEntryDataController.serviceId
                ];
                return DataControllerContainer;
            })();
            Business.DataControllerContainer = DataControllerContainer;
            // declare correct angularjs module
            timeRecorder.service(DataControllerContainer.serviceId, DataControllerContainer).run([DataControllerContainer.serviceId, function (container) { return container.initialize(); }]);
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
/// <reference path="rulebasedtimebookingdatacontroller.ts" />
/// <reference path="timesheetdatacontroller.ts" />
/// <reference path="expensetypedatacontroller.ts" />
/// <reference path="expensedatacontroller.ts" />
/// <reference path="projectdatacontroller.ts" />
/// <reference path="people/peopledatacontroller.ts" />
/// <reference path="people/employeedatacontroller.ts" />
/// <reference path="timebookingdatacontroller.ts" />
/// <reference path="timeentrytypedatacontroller.ts" />
/// <reference path="externalworkreportdatacontroller.ts" />
/// <reference path="timeentrydatacontroller.ts" />
/// <reference path="rulebasedtimebooking/itimebookingrule.ts" />
/// <reference path="rulebasedtimebooking/timebasedbookingrule.ts" />
/// <reference path="rulebasedtimebooking/sundaytimebookingrule.ts" />
/// <reference path="rulebasedtimebooking/nighttimebookingrule.ts" />
/// <reference path="rulebasedtimebooking/nighttimemorningbookingrule.ts" />
/// <reference path="rulebasedtimebooking/overtimebookingrule.ts" />
/// <reference path="rulebasedtimebooking/staturdaytimebookingrule.ts" />
// data controller container
// put all data controller references above this declaration or you will not be able to include it in the contiainer!
/// <reference path="datacontrollercontainer.ts" /> 
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Business;
        (function (Business) {
            var ViewModelReferenceStore = (function () {
                function ViewModelReferenceStore() {
                    this.referenceMap = new Map();
                }
                ViewModelReferenceStore.prototype.getTimestamp = function (entity) {
                    return entity.timestamp;
                };
                ViewModelReferenceStore.prototype.updateViewModel = function (entityCm, viewModel, createVmCallback) {
                    angular.extend(viewModel, createVmCallback(entityCm));
                };
                ViewModelReferenceStore.prototype.attachMultipleAndGet = function (entities, createVmCallback, isChanged) {
                    var _this = this;
                    var result = [];
                    if (angular.isArray(entities)) {
                        entities.forEach(function (e) { return result.add(_this.attachAndGet(e, createVmCallback, isChanged)); });
                    }
                    return result;
                };
                ViewModelReferenceStore.prototype.attachAndGet = function (entityCm, createVmCallback, isChanged, updateOnSameTimestamp) {
                    if (updateOnSameTimestamp === void 0) { updateOnSameTimestamp = false; }
                    var entityId = entityCm.id;
                    if (angular.isObject(isChanged)) {
                        isChanged.isChanged = true;
                    }
                    else {
                        isChanged = {
                            isChanged: true
                        };
                    }
                    var existingVm = this.referenceMap.get(entityId);
                    if (angular.isObject(existingVm)) {
                        var existingTimestamp = this.getTimestamp(existingVm);
                        var newTimestamp = this.getTimestamp(entityCm);
                        if (existingTimestamp == null || existingTimestamp < newTimestamp) {
                            console.log('override loaded entity:' + entityId + "   old:" + existingTimestamp + "   new:" + newTimestamp);
                            this.updateViewModel(entityCm, existingVm, createVmCallback);
                        }
                        else if (existingTimestamp === newTimestamp) {
                            if (updateOnSameTimestamp) {
                                this.updateViewModel(entityCm, existingVm, createVmCallback);
                            }
                            else {
                                isChanged.isChanged = false;
                            }
                        }
                        else {
                            console.warn("existing entity " + entityId + " is newer than new one, reject");
                            isChanged.isChanged = false;
                        }
                        return existingVm;
                    }
                    var newVm = createVmCallback(entityCm);
                    this.referenceMap.set(entityId, newVm);
                    return newVm;
                };
                ViewModelReferenceStore.prototype.attachChangeSet = function (changeSet, createVmCallback, filterUnchaged) {
                    var _this = this;
                    if (filterUnchaged === void 0) { filterUnchaged = true; }
                    var added = [];
                    if (angular.isArray(changeSet.added)) {
                        changeSet.added.forEach(function (t) {
                            var isChanged = {
                                isChanged: false
                            };
                            var attachClientModel = _this.attachAndGet(t, createVmCallback, isChanged);
                            if (isChanged.isChanged || !filterUnchaged)
                                added.add(attachClientModel);
                        });
                    }
                    var updated = [];
                    if (angular.isArray(changeSet.updated)) {
                        changeSet.updated.forEach(function (t) {
                            var isChanged = {
                                isChanged: false
                            };
                            var attachClientModel = _this.attachAndGet(t, createVmCallback, isChanged);
                            if (isChanged.isChanged || !filterUnchaged)
                                updated.add(attachClientModel);
                        });
                    }
                    changeSet.deleted.forEach(function (id) {
                        _this.referenceMap.delete(id);
                    });
                    return {
                        deleted: changeSet.deleted,
                        added: added,
                        updated: updated,
                    };
                };
                ViewModelReferenceStore.prototype.get = function (id) {
                    var vm = this.referenceMap.get(id);
                    if (angular.isObject(vm))
                        return vm;
                    return null;
                };
                ViewModelReferenceStore.prototype.has = function (id) {
                    return this.referenceMap.has(id);
                };
                // Returns all entities. Remember, that "With great power comes great responsibility"
                ViewModelReferenceStore.prototype.getAll = function () {
                    return this.referenceMap.getValues();
                };
                ViewModelReferenceStore.inject = function (payload, dataControllerId) {
                    var changeSet = angular.fromJson(payload);
                    Triarc.Data.convertDateStringsToDates(changeSet);
                    var injector = $("#app").injector();
                    if (!angular.isObject(injector))
                        return;
                    injector.invoke([
                        dataControllerId,
                        function (datadataController) {
                            datadataController.applyChangeSet(changeSet);
                        }
                    ]);
                };
                return ViewModelReferenceStore;
            })();
            Business.ViewModelReferenceStore = ViewModelReferenceStore;
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Business;
        (function (Business) {
            var ViewModelReferenceStore = TimeRecorder.Web.Business.ViewModelReferenceStore;
            var TimeBookingReferenceStore = (function (_super) {
                __extends(TimeBookingReferenceStore, _super);
                function TimeBookingReferenceStore() {
                    _super.apply(this, arguments);
                }
                TimeBookingReferenceStore.prototype.updateViewModel = function (entityCm, viewModel) {
                    viewModel.update(entityCm);
                };
                return TimeBookingReferenceStore;
            })(ViewModelReferenceStore);
            Business.TimeBookingReferenceStore = TimeBookingReferenceStore;
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Business;
        (function (Business) {
            var ViewModelReferenceStore = TimeRecorder.Web.Business.ViewModelReferenceStore;
            var ExpenseReferenceStore = (function (_super) {
                __extends(ExpenseReferenceStore, _super);
                function ExpenseReferenceStore() {
                    _super.apply(this, arguments);
                }
                ExpenseReferenceStore.prototype.updateViewModel = function (entityCm, viewModel) {
                    viewModel.update(entityCm);
                };
                return ExpenseReferenceStore;
            })(ViewModelReferenceStore);
            Business.ExpenseReferenceStore = ExpenseReferenceStore;
            var PeopleReferenceStore = (function (_super) {
                __extends(PeopleReferenceStore, _super);
                function PeopleReferenceStore() {
                    _super.apply(this, arguments);
                }
                PeopleReferenceStore.prototype.updateViewModel = function (entityCm, viewModel) {
                    viewModel.update(entityCm);
                };
                return PeopleReferenceStore;
            })(ViewModelReferenceStore);
            Business.PeopleReferenceStore = PeopleReferenceStore;
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Business;
        (function (Business) {
            var TimeEntryReferenceStore = (function (_super) {
                __extends(TimeEntryReferenceStore, _super);
                function TimeEntryReferenceStore() {
                    _super.apply(this, arguments);
                }
                TimeEntryReferenceStore.prototype.updateViewModel = function (entityCm, viewModel) {
                    viewModel.update(entityCm);
                };
                return TimeEntryReferenceStore;
            })(Business.ViewModelReferenceStore);
            Business.TimeEntryReferenceStore = TimeEntryReferenceStore;
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
/// <reference path="referencestore.ts" />
/// <reference path="timebookingreferencestore.ts" />
/// <reference path="expensereferencestore.ts" />
/// <reference path="timeentryreferencestore.ts" />
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var AuthenticationService = (function () {
            function AuthenticationService($proxy, $q) {
                var _this = this;
                this.$proxy = $proxy;
                this.$q = $q;
                this.getAppUser = function () {
                    var d = _this.$q.defer();
                    if (angular.isDefined(_this.appUser)) {
                        d.resolve(_this.appUser);
                        return d.promise;
                    }
                    _this.$proxy.Account.getAppUser().then(function (response) {
                        var au = response.data;
                        if (au) {
                            d.resolve(au);
                            _this.appUser = au;
                            _this.isAuthenticated = true;
                        }
                        else {
                            _this.isAuthenticated = false;
                            d.reject();
                        }
                    }, function () {
                        _this.isAuthenticated = false;
                        d.reject();
                    });
                    return d.promise;
                };
                this.login = function (password, userName, rememberMe) {
                    var d = _this.$q.defer();
                    var loginVm = { password: password, username: userName, rememberMe: rememberMe };
                    if (rememberMe) {
                    }
                    _this.$proxy.Account.login(loginVm).then(function () {
                        console.log(arguments);
                        _this.$proxy.Account.getAppUser().then(function (response) {
                            _this.appUser = response.data;
                            _this.isAuthenticated = true;
                            d.resolve();
                        }, function (err) {
                            d.reject();
                        });
                    }, function (error) {
                        console.log("login fail...");
                        d.reject();
                    });
                    return d.promise;
                };
                this.logout = function () {
                    _this.$proxy.Account.logout().then(function () {
                        _this.appUser = null;
                        _this.isAuthenticated = false;
                    }, function () {
                    });
                };
            }
            AuthenticationService.prototype.hasAnyClaimOf = function (claims) {
                if (!claims || claims.length === 0)
                    return true;
                if (!this.appUser)
                    return false;
                if (this.appUser.isAdmin)
                    return true;
                if (!this.appUser.person || !this.appUser.person.claimConfigurations)
                    return false;
                return this.containsAnyClaimOf(this.appUser.person.claimConfigurations, claims);
            };
            AuthenticationService.prototype.hasAnyClaimOfEnsureLoggedIn = function (claims) {
                var _this = this;
                var q = this.$q.defer();
                if (angular.isDefined(this.appUser)) {
                    if (angular.isDefined(this.appUser.person))
                        q.resolve(this.appUser.isAdmin || this.containsAnyClaimOf(this.appUser.person.claimConfigurations, claims));
                    else {
                        q.resolve(false);
                    }
                }
                else {
                    this.getAppUser().then(function (au) {
                        if (angular.isDefined(au.person))
                            q.resolve(au.isAdmin || _this.containsAnyClaimOf(au.person.claimConfigurations, claims));
                        else {
                            q.resolve(false);
                        }
                    }, function () {
                        q.resolve(false);
                    });
                }
                return q.promise;
            };
            AuthenticationService.prototype.hasClaimEnsureLoggedIn = function (claim) {
                var _this = this;
                var q = this.$q.defer();
                if (angular.isDefined(this.appUser)) {
                    if (angular.isDefined(this.appUser.person))
                        q.resolve(this.appUser.isAdmin || this.containsClaim(this.appUser.person.claimConfigurations, claim));
                    else {
                        q.resolve(false);
                    }
                }
                else {
                    this.getAppUser().then(function (au) {
                        if (angular.isDefined(au.person))
                            q.resolve(au.isAdmin || _this.containsClaim(au.person.claimConfigurations, claim));
                        else {
                            q.resolve(false);
                        }
                    }, function () {
                        q.resolve(false);
                    });
                }
                return q.promise;
            };
            AuthenticationService.prototype.hasClaim = function (claim) {
                if (!this.appUser)
                    return false;
                if (this.appUser.isAdmin)
                    return true;
                if (!this.appUser.person || !this.appUser.person.claimConfigurations)
                    return false;
                return this.containsClaim(this.appUser.person.claimConfigurations, claim);
            };
            AuthenticationService.prototype.containsAnyClaimOf = function (col, claims) {
                for (var i = 0; i < claims.length; i++) {
                    for (var j = 0; j < col.length; j++) {
                        if (claims[i] === col[j].featureClaim.claim)
                            return true;
                    }
                }
                return false;
            };
            AuthenticationService.prototype.containsClaim = function (col, claim) {
                for (var i = 0; i < col.length; i++) {
                    if (col[i].featureClaim.claim === claim)
                        return true;
                }
                return false;
            };
            AuthenticationService.$inject = ["$tr-proxy", "$q"];
            AuthenticationService.serviceId = "trAuthenticationService";
            return AuthenticationService;
        })();
        Web.AuthenticationService = AuthenticationService;
        timeRecorder.service(AuthenticationService.serviceId, AuthenticationService);
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var UserService = (function () {
            function UserService($proxy, $q) {
                var _this = this;
                this.$proxy = $proxy;
                this.$q = $q;
                this.skip = 0;
                this.take = 10;
                this.initialTake = 30;
                this.search = "";
                this.getUsers = function () {
                    var q = _this.$q.defer();
                    _this.$proxy.Account.getUsersMultiple({}).then(function (resp) {
                        q.resolve(resp.data);
                    }, function (e) {
                        q.reject(e);
                    });
                    return q.promise;
                };
                this.removeUser = function (user) {
                    var q = _this.$q.defer();
                    _this.$proxy.Account.delete(user).then(function () {
                        q.resolve(true);
                    }, function (e) {
                        q.reject(e);
                    });
                    return q.promise;
                };
                this.editUser = function (user) {
                    var q = _this.$q.defer();
                    _this.$proxy.Account.editUser(user).then(function (resp) {
                        q.resolve(true);
                    }, function (e) {
                        q.reject(e);
                    });
                    return q.promise;
                };
                this.createUser = function (user) {
                    var q = _this.$q.defer();
                    _this.$proxy.Account.createUser(user).then(function () {
                        q.resolve(true);
                    }, function (e) {
                        q.reject(e);
                    });
                    return q.promise;
                };
            }
            UserService.prototype.startSearch = function () {
                var _this = this;
                var q = this.$q.defer();
                if (this.isLoading)
                    q.resolve();
                this.isLoading = true;
                this.skip = 0;
                this.$proxy.Account.searchMultiple({ take: this.initialTake, skip: this.skip, search: this.search }).then(function (response) {
                    _this.users = response.data;
                    _this.skip = _this.initialTake;
                    _this.hasSearch = true;
                    _this.endReached = response.data.length < _this.initialTake;
                    _this.isLoading = false;
                    q.resolve();
                }, function () {
                    q.reject();
                });
                return q.promise;
            };
            UserService.prototype.loadMore = function () {
                var _this = this;
                if (!this.hasSearch || this.isLoading || this.endReached)
                    return;
                this.isLoading = true;
                this.$proxy.Account.searchMultiple({ take: this.take, skip: this.skip, search: this.search }).then(function (response) {
                    var l = response.data.length;
                    for (var i = 0; i < l; ++i)
                        _this.users.push(response.data[i]);
                    _this.skip += l;
                    _this.endReached = l < _this.take;
                    _this.isLoading = false;
                }, function () {
                });
            };
            UserService.prototype.resetPassword = function (userId) {
                var q = this.$q.defer();
                this.$proxy.Account.resetPassword({ userId: userId }).then(function () {
                    q.resolve(true);
                }, function () {
                    q.reject();
                });
                return q.promise;
            };
            UserService.serviceId = "trUserService";
            UserService.$inject = ["$tr-proxy", "$q"];
            return UserService;
        })();
        Web.UserService = UserService;
        timeRecorder.service(UserService.serviceId, UserService);
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var NotificationServce = (function () {
            function NotificationServce() {
                this.error = function (msg, title) {
                    toastr.error(msg, title);
                };
                this.info = function (msg, title) {
                    toastr.info(msg, title);
                };
                this.persistentInfo = function (msg, title) {
                    return toastr.info(msg, title, { timeOut: 0 });
                };
                this.clearToastr = function (toast) {
                    toastr.clear(toast);
                };
            }
            NotificationServce.$inject = [];
            NotificationServce.serviceId = "trNotification";
            return NotificationServce;
        })();
        Web.NotificationServce = NotificationServce;
        timeRecorder.service(NotificationServce.serviceId, NotificationServce);
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var RoleService = (function () {
            function RoleService($proxy, $q) {
                var _this = this;
                this.$proxy = $proxy;
                this.$q = $q;
                this.saveRole = function (role) {
                    var q = _this.$q.defer();
                    _this.$proxy.ConfigurationProfile.save(role).then(function () {
                        q.resolve(true);
                    }, function (e) {
                        q.reject(e);
                    });
                    return q.promise;
                };
                this.deleteRole = function (role) {
                    var q = _this.$q.defer();
                    _this.$proxy.ConfigurationProfile.delete(role).then(function () {
                        q.resolve(true);
                    }, function (e) {
                        q.reject(e);
                    });
                    return q.promise;
                };
                this.loadClaims = function () {
                    var q = _this.$q.defer();
                    _this.$proxy.Claim.getClaimsMultiple({}).then(function (response) {
                        q.resolve(response.data);
                    }, function (e) {
                        console.log(e);
                        q.reject();
                    });
                    return q.promise;
                };
                this.loadRoles = function () {
                    var q = _this.$q.defer();
                    _this.$proxy.ConfigurationProfile.getConfigsMultiple({}).then(function (response) {
                        q.resolve(response.data);
                    }, function (e) {
                        console.log(e);
                        q.reject();
                    });
                    return q.promise;
                };
            }
            RoleService.serviceId = "trRoleService";
            RoleService.$inject = ["$tr-proxy", "$q"];
            return RoleService;
        })();
        Web.RoleService = RoleService;
        timeRecorder.service(RoleService.serviceId, RoleService);
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var LocationService = (function () {
            function LocationService($proxy, $q) {
                var _this = this;
                this.$proxy = $proxy;
                this.$q = $q;
                this.loadLocations = function () {
                    var q = _this.$q.defer();
                    _this.$proxy.Location.getMultiple({}).then(function (response) {
                        q.resolve(response.data);
                    }, function () {
                        q.reject();
                    });
                    return q.promise;
                };
                this.saveLocation = function (location) {
                    var q = _this.$q.defer();
                    _this.$proxy.Location.put(location).then(function () {
                        q.resolve();
                    }, function (e) {
                        q.reject(e);
                    });
                    return q.promise;
                };
                this.deleteLocation = function (locationId) {
                    var q = _this.$q.defer();
                    _this.$proxy.Location.delete({ id: locationId }).then(function () {
                        q.resolve();
                    }, function (e) {
                        q.reject(e);
                    });
                    return q.promise;
                };
                this.loadLocations();
            }
            LocationService.serviceId = "trLocation";
            LocationService.$inject = ["$tr-proxy", "$q"];
            return LocationService;
        })();
        Web.LocationService = LocationService;
        timeRecorder.service(LocationService.serviceId, LocationService);
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var PersonService = (function () {
            function PersonService($proxy, $q, personController) {
                var _this = this;
                this.$proxy = $proxy;
                this.$q = $q;
                this.personController = personController;
                this.skip = 0;
                this.take = 10;
                this.initialTake = 30;
                this.search = "";
                this.savePerson = function (person) {
                    var q = _this.$q.defer();
                    _this.$proxy.Employee.put(person).then(function () {
                        q.resolve(true);
                    }, function (e) {
                        q.reject(e.data.Data);
                    });
                    return q.promise;
                };
                this.deletePerson = function (personId) {
                    var q = _this.$q.defer();
                    _this.$proxy.Employee.delete({ id: personId }).then(function () {
                        q.resolve();
                    }, function (e) {
                        q.reject(e);
                    });
                    return q.promise;
                };
            }
            PersonService.prototype.startSearch = function () {
                var _this = this;
                var q = this.$q.defer();
                if (this.isLoading)
                    q.resolve();
                this.isLoading = true;
                this.skip = 0;
                this.$proxy.Employee.searchMultiple({ take: this.initialTake, skip: this.skip, search: this.search }).then(function (response) {
                    _this.people = response.data;
                    _this.skip = _this.initialTake;
                    _this.hasSearch = true;
                    _this.endReached = response.data.length < _this.initialTake;
                    _this.isLoading = false;
                    q.resolve();
                }, function () {
                    q.reject();
                });
                return q.promise;
            };
            PersonService.prototype.loadMore = function () {
                var _this = this;
                if (!this.hasSearch || this.isLoading || this.endReached)
                    return;
                this.isLoading = true;
                this.$proxy.Employee.searchMultiple({ take: this.take, skip: this.skip, search: this.search }).then(function (response) {
                    var l = response.data.length;
                    for (var i = 0; i < l; ++i)
                        _this.people.push(response.data[i]);
                    _this.skip += l;
                    _this.endReached = l < _this.take;
                    _this.isLoading = false;
                }, function () {
                });
            };
            PersonService.prototype.loadPersons = function () {
                var q = this.$q.defer();
                this.personController.getAllPersons().then(function (people) {
                    q.resolve(people);
                }, function () {
                    q.reject();
                });
                return q.promise;
            };
            PersonService.serviceId = "trPersonService";
            PersonService.$inject = ["$tr-proxy", "$q", Web.Business.EmployeeDataController.serviceId];
            return PersonService;
        })();
        Web.PersonService = PersonService;
        timeRecorder.service(PersonService.serviceId, PersonService);
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var GlobalMessageService = (function () {
            function GlobalMessageService($q, $proxy) {
                var _this = this;
                this.$q = $q;
                this.$proxy = $proxy;
                this.loadMessages = function () {
                    var q = _this.$q.defer();
                    _this.$proxy.GlobalMessage.getMultiple({}).then(function (response) {
                        q.resolve(response.data);
                    }, function (e) {
                        q.reject();
                    });
                    return q.promise;
                };
                this.putMessage = function (msg) {
                    var q = _this.$q.defer();
                    _this.$proxy.GlobalMessage.put(msg).then(function () {
                        q.resolve();
                    }, function (e) {
                        q.reject(e);
                    });
                    return q.promise;
                };
                this.deleteMessage = function (id) {
                    var q = _this.$q.defer();
                    _this.$proxy.GlobalMessage.delete({ id: id }).then(function () {
                        q.resolve();
                    }, function (e) {
                        q.reject(e);
                    });
                    return q.promise;
                };
            }
            GlobalMessageService.serviceId = "TrglobalMessages";
            GlobalMessageService.$inject = ["$q", "$tr-proxy"];
            return GlobalMessageService;
        })();
        Web.GlobalMessageService = GlobalMessageService;
        timeRecorder.service(GlobalMessageService.serviceId, GlobalMessageService);
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var PersonalMessageService = (function () {
            function PersonalMessageService($proxy, $q) {
                var _this = this;
                this.$proxy = $proxy;
                this.$q = $q;
                this.saveMessage = function (message) {
                    return _this.$proxy.PersonalMessage.saveMessage(message);
                };
                this.getSentMessages = function (personId) {
                    return _this.$proxy.PersonalMessage.getSentMessagesMultiple({ personId: personId });
                };
            }
            PersonalMessageService.$inject = ["$tr-proxy", "$q"];
            PersonalMessageService.serviceId = "trPersonalMessages";
            return PersonalMessageService;
        })();
        Web.PersonalMessageService = PersonalMessageService;
        timeRecorder.service(PersonalMessageService.serviceId, PersonalMessageService);
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var SearchService = (function () {
            function SearchService($proxy, $q) {
                this.$proxy = $proxy;
                this.$q = $q;
                this.take = 10;
            }
            SearchService.prototype.getMore = function () {
                var _this = this;
                console.log("getting more");
                if (!this.hasSearch || this.isLoading || this.endreached)
                    return;
                this.isLoading = true;
                var params = this.generateParams();
                this.$proxy.TimeEntry.searchTimeEntriesMultiple({}, params).then(function (response) {
                    for (var i = 0; i < response.data.length; i++)
                        _this.currentResult.push(response.data[i]);
                    _this.skip += response.data.length;
                    if (response.data.length === 0)
                        _this.endreached = true;
                    _this.isLoading = false;
                }, function () {
                });
            };
            SearchService.prototype.search = function () {
                var _this = this;
                console.log("search triggered");
                if (this.isLoading)
                    return;
                this.isLoading = true;
                this.skip = 0;
                var params = this.generateParams();
                params.take = 20;
                this.currentResult = null;
                this.$proxy.TimeEntry.searchTimeEntriesMultiple({}, params).then(function (response) {
                    _this.currentResult = response.data;
                    _this.skip = response.data.length;
                    _this.hasSearch = true;
                    _this.isLoading = false;
                    _this.endreached = false;
                }, function () {
                });
            };
            SearchService.prototype.generateParams = function () {
                return {
                    personId: this.personId,
                    from: this.from,
                    to: this.to,
                    type: this.type,
                    skip: this.skip,
                    take: this.take,
                    personSearch: this.personSearch,
                    state: !this.state ? 0 : this.state === "Fehlgeschlagen" ? 2 : 1
                };
            };
            SearchService.serviceId = "trSearchService";
            SearchService.$inject = ["$tr-proxy", "$q"];
            return SearchService;
        })();
        Web.SearchService = SearchService;
        timeRecorder.service(SearchService.serviceId, SearchService);
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var ProjectService = (function () {
            function ProjectService($proxy, $q) {
                var _this = this;
                this.$proxy = $proxy;
                this.$q = $q;
                this.roots = [];
                this.skip = 0;
                this.take = 10;
                this.initialTake = 30;
                this.search = "";
                this.updateFlag = function (project, flag) {
                    var q = _this.$q.defer();
                    var flags = _this.handleFlag(project, flag);
                    _this.$proxy.Project.setFlags({ projectId: project.id, flags: flags }).then(function (response) {
                        q.resolve();
                    }, function () {
                        q.reject();
                    });
                };
            }
            ProjectService.prototype.init = function () {
                this.startSearch();
            };
            ProjectService.prototype.startSearch = function () {
                var _this = this;
                if (this.isLoading)
                    return;
                this.isLoading = true;
                this.skip = 0;
                this.$proxy.Project.getRootProjectsMultiple({ take: this.initialTake, skip: this.skip, search: this.search }).then(function (response) {
                    _this.roots = response.data;
                    _this.skip = _this.initialTake;
                    _this.hasSearch = true;
                    _this.endReached = response.data.length < _this.initialTake;
                    _this.isLoading = false;
                }, function () {
                });
            };
            ProjectService.prototype.loadMore = function () {
                var _this = this;
                if (!this.hasSearch || this.isLoading || this.endReached)
                    return;
                this.isLoading = true;
                this.$proxy.Project.getRootProjectsMultiple({ take: this.take, skip: this.skip, search: this.search }).then(function (response) {
                    var l = response.data.length;
                    for (var i = 0; i < l; ++i)
                        _this.roots.push(response.data[i]);
                    _this.skip += l;
                    _this.endReached = l < _this.take;
                    _this.isLoading = false;
                }, function () {
                });
            };
            ProjectService.prototype.searchProjectPersons = function (search) {
                return this.$proxy.Project.searchPersonsMultiple({ search: search }).then(function (response) { return response.data; });
            };
            ProjectService.prototype.searchProjectLocations = function (search) {
                return this.$proxy.Project.searchLocationsMultiple({ search: search }).then(function (response) { return response.data; });
            };
            ProjectService.prototype.loadProjectPersons = function () {
                var q = this.$q.defer();
                this.$proxy.Project.getAllPersonsMultiple({}).then(function (response) {
                    q.resolve(response.data);
                }, function () {
                    q.reject();
                });
                return q.promise;
            };
            ProjectService.prototype.loadProjectLocations = function () {
                var q = this.$q.defer();
                this.$proxy.Project.getAllLocationsMultiple({}).then(function (response) {
                    q.resolve(response.data);
                }, function () {
                    q.reject();
                });
                return q.promise;
            };
            ProjectService.prototype.changeDescription = function (projectId, description) {
                var q = this.$q.defer();
                this.$proxy.Project.putProjectDescription({ projectId: projectId, description: description }).then(function () {
                    q.resolve();
                }, function () {
                    q.reject();
                });
                return q.promise;
            };
            ProjectService.prototype.changePersonAssignement = function (projectId, personId, value) {
                this.$proxy.Project.putPersonAssignment({ personId: personId, projectId: projectId, value: value }).then(function () {
                }, function () {
                });
            };
            ProjectService.prototype.changeLocationAssignement = function (projectId, locationId, value) {
                this.$proxy.Project.putLocationAssignment({ locationId: locationId, projectId: projectId, value: value }).then(function () {
                }, function () {
                });
            };
            ProjectService.prototype.loadChildren = function (root) {
                var q = this.$q.defer();
                this.$proxy.Project.getChildrenMultiple({ projectId: root.id }).then(function (response) {
                    var children = response.data;
                    var childcount = children.length;
                    root.children = children;
                    for (var i = 0; i < childcount; ++i)
                        children[i].parent = root;
                    q.resolve();
                }, function () {
                    q.reject();
                });
                return q.promise;
            };
            //private loadRoots() {
            //	this.$proxy.Project.getRootProjectsMultiple({ search: "", take: 50, skip: 0 }).then((response) => {
            //		this.roots = response.data;
            //	},() => { });
            //}
            ProjectService.prototype.handleFlag = function (project, flag) {
                if (flag === 1) {
                    project.bookable = !project.bookable;
                }
                else if (flag === 2) {
                    project.explicit = !project.explicit;
                }
                else if (flag === 4) {
                    project.planningUnit = !project.planningUnit;
                }
                return (project.bookable ? 1 : 0) | (project.explicit ? 2 : 0) | (project.planningUnit ? 4 : 0);
            };
            ProjectService.serviceId = "trProjectService";
            ProjectService.$inject = ["$tr-proxy", "$q"];
            return ProjectService;
        })();
        Web.ProjectService = ProjectService;
        timeRecorder.service(ProjectService.serviceId, ProjectService);
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
// Update the most local relative references and declare this service.
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var ExternalWorkReportSearchServiceService = (function () {
            function ExternalWorkReportSearchServiceService() {
            }
            ExternalWorkReportSearchServiceService.serviceId = "$ExternalWorkReportSearchServiceService";
            ExternalWorkReportSearchServiceService.$inject = [];
            return ExternalWorkReportSearchServiceService;
        })();
        Web.ExternalWorkReportSearchServiceService = ExternalWorkReportSearchServiceService;
        // declare correct angularjs module
        timeRecorder.service(ExternalWorkReportSearchServiceService.serviceId, ExternalWorkReportSearchServiceService);
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var FileService = (function () {
            function FileService($q, $proxy) {
                this.$q = $q;
                this.$proxy = $proxy;
            }
            FileService.prototype.downloadFile = function (fileName) {
                var downloadRequest = this.$proxy.File.downloadRequest({ fileName: fileName });
                var link = document.createElement("a");
                //link.download = name;
                link.href = downloadRequest.url;
                link.target = "_blank";
                link.click();
            };
            FileService.serviceId = "FileService ";
            FileService.$inject = ["$q", "$tr-proxy"];
            return FileService;
        })();
        Web.FileService = FileService;
        timeRecorder.service(FileService.serviceId, FileService);
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var TrServiceContainer = (function () {
            function TrServiceContainer($q, $translate, $location, $anchorScroll, $state, $stateParams, $modal, $locale, $timeout, blockUi, pageLock, $auth, $proxy, $filter, $templateCache) {
                this.$q = $q;
                this.$translate = $translate;
                this.$location = $location;
                this.$anchorScroll = $anchorScroll;
                this.$state = $state;
                this.$stateParams = $stateParams;
                this.$modal = $modal;
                this.$locale = $locale;
                this.$timeout = $timeout;
                this.blockUi = blockUi;
                this.pageLock = pageLock;
                this.$auth = $auth;
                this.$proxy = $proxy;
                this.$filter = $filter;
                this.$templateCache = $templateCache;
            }
            TrServiceContainer.prototype.translate = function (value) {
                return this.$translate.instant(value);
            };
            TrServiceContainer.prototype.translateWith = function (value, params) {
                return this.$translate.instant(value, params);
            };
            TrServiceContainer.prototype.translateService = function () {
                return this.$translate;
            };
            TrServiceContainer.prototype.openConfirmModalLocalized = function (messageKey, titleKey, okKey, cancelKey) {
                if (titleKey === void 0) { titleKey = "_message"; }
                if (okKey === void 0) { okKey = "_ok"; }
                if (cancelKey === void 0) { cancelKey = "_cancel"; }
                // these values will be translated by the html translate filter
                return Triarc.Web.Modal.openConfirmModal(messageKey, this.$modal, titleKey, okKey, cancelKey);
            };
            TrServiceContainer.prototype.openInfoModal = function (message, title, ok) {
                return Triarc.Web.Modal.openConfirmModal(message, this.$modal, title, ok, "", false);
            };
            TrServiceContainer.prototype.shortDateFormat = function () {
                return this.$locale.DATETIME_FORMATS.shortDate;
            };
            TrServiceContainer.$inject = [
                '$q',
                '$translate',
                '$location',
                '$anchorScroll',
                '$state',
                '$stateParams',
                '$modal',
                "$locale",
                '$timeout',
                'blockUI',
                Triarc.PageLock.PageLockService.serviceId,
                Web.AuthenticationService.serviceId,
                '$tr-proxy',
                '$filter',
                "$templateCache"
            ];
            TrServiceContainer.serviceId = "$TrServiceContainer";
            return TrServiceContainer;
        })();
        Web.TrServiceContainer = TrServiceContainer;
        timeRecorder.service(TrServiceContainer.serviceId, TrServiceContainer);
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
/// <reference path="data/_data.ts" />
/// <reference path="services/iauthenticationservice.ts" />
/// <reference path="services/authenticationservice.ts" />
/// <reference path="services/userservice.ts" />
/// <reference path="services/notificationservice.ts" />
/// <reference path="services/roleservice.ts" />
/// <reference path="services/locationservice.ts" />
/// <reference path="services/personservice.ts" />
/// <reference path="services/globalmessageservice.ts" />
/// <reference path="services/personalmessageservice.ts" />
/// <reference path="services/searchservice.ts" />
/// <reference path="services/projectservice.ts" />
/// <reference path="services/externalworkreportsearchservice.ts" />
/// <reference path="services/fileservice.ts" />
/// <reference path="services/servicecontainer.ts" />
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var UserController = (function () {
            function UserController(authentication, $state, user, notification, person, location) {
                var _this = this;
                this.authentication = authentication;
                this.$state = $state;
                this.user = user;
                this.notification = notification;
                this.person = person;
                this.location = location;
                this.loading = false;
                this.newUser = false;
                this.editPassword = false;
                this.showForm = false;
                this.nameMaxLength = 20;
                this.idMaxLength = 10;
                this.passwordMaxLength = 20;
                this.loadPersons = function () {
                    _this.location.loadLocations().then(function (l) {
                        _this.locations = l;
                    }, function () {
                    });
                };
                this.loadLocations = function () {
                    _this.person.loadPersons().then(function (p) {
                        _this.persons = p;
                    }, function () {
                    });
                };
                this.loadUsers = function () {
                    _this.loading = true;
                    _this.showForm = false;
                    _this.selectedUser = null;
                    _this.user.startSearch().then(function () {
                    }, function () {
                    }).finally(function () {
                        _this.loading = false;
                    });
                };
                this.changePw = function () {
                    _this.editPassword = true;
                };
                this.stopChangePw = function () {
                    _this.editPassword = false;
                };
                this.create = function () {
                    _this.editPassword = false;
                    _this.newUser = true;
                    _this.selectedUser = { id: "", terminalid: "", userName: "Neues Terminal", oldPassword: "", password: "", passwordConfirm: "", userType: 1, email: "" };
                    _this.showForm = true;
                };
                this.delete = function () {
                    _this.user.removeUser(_this.selectedUser).then(function (success) {
                        if (success) {
                            _this.notification.info("Benutzer '" + _this.selectedUser.userName + "' entfernt");
                            _this.selectedUser = null;
                            _this.loadUsers();
                        }
                    }, function (e) {
                        _this.notification.error(e.Data);
                    });
                };
                this.save = function () {
                    if (!_this.validate()) {
                        return;
                    }
                    if (_this.newUser) {
                        _this.createUser(_this.selectedUser);
                    }
                    else {
                        _this.editUser(_this.selectedUser);
                    }
                };
                this.validate = function () {
                    if (!angular.isString(_this.selectedUser.userName) || _this.selectedUser.userName.length < 1) {
                        _this.notification.error("Das Feld 'Name' darf nicht leer sein");
                        return false;
                    }
                    if ((!angular.isString(_this.selectedUser.terminalid) || _this.selectedUser.terminalid.length < 1) && _this.selectedUser.userType !== 0) {
                        _this.notification.error("Das Feld 'Id' darf nicht leer sein");
                        return false;
                    }
                    if (_this.selectedUser.userType == 1 && (_this.selectedUser.locationId == 0 || !angular.isDefined(_this.selectedUser.locationId))) {
                        _this.notification.error("Das Feld 'Standort' darf nicht leer sein");
                        return false;
                    }
                    if (_this.selectedUser.userType == 2 && (_this.selectedUser.personId == 0 || !angular.isDefined(_this.selectedUser.personId))) {
                        _this.notification.error("Das Feld 'Person' darf nicht leer sein");
                        return false;
                    }
                    if (_this.editPassword) {
                        if (!angular.isString(_this.selectedUser.oldPassword) || _this.selectedUser.oldPassword.length < 1) {
                            _this.notification.error("Das Feld 'Altes Passwort' darf nicht leer sein");
                            return false;
                        }
                    }
                    if (_this.newUser || _this.editPassword) {
                        if (!angular.isString(_this.selectedUser.password || _this.selectedUser.password.length < 1)) {
                            _this.notification.error("Das Feld 'Passwort' darf nicht leer sein");
                            return false;
                        }
                        if (!angular.isString(_this.selectedUser.passwordConfirm || _this.selectedUser.passwordConfirm.length < 1)) {
                            _this.notification.error("Das Feld 'Bestätigen' darf nicht leer sein");
                            return false;
                        }
                        if (_this.selectedUser.password.length < 6) {
                            _this.notification.error("Das Passwort muss mindestens 6 Zeichen lang sein");
                            return false;
                        }
                        if (_this.selectedUser.password !== _this.selectedUser.passwordConfirm) {
                            _this.notification.error("Die Passwörter stimmen nicht überrein");
                            return false;
                        }
                    }
                    return true;
                };
                authentication.hasClaimEnsureLoggedIn("web_users").then(function (hasClaim) {
                    if (hasClaim)
                        _this.init();
                    else
                        _this.$state.transitionTo("tr.login");
                }, function () {
                    _this.$state.transitionTo("tr.login");
                });
            }
            UserController.prototype.init = function () {
                this.selectedUser = null;
                this.loadUsers();
                this.loadPersons();
                this.loadLocations();
            };
            UserController.prototype.select = function (user) {
                this.selectedUser = user;
                this.editPassword = false;
                this.newUser = false;
                this.showForm = true;
            };
            UserController.prototype.resetPw = function () {
                var _this = this;
                if (confirm("Wollen Sie das Passwort von " + this.selectedUser.userName + " zurücksetzen?")) {
                    this.user.resetPassword(this.selectedUser.id).then(function () {
                        _this.notification.info("Passwort erfolgreich zurückgesetzt");
                    }, function () {
                        _this.notification.error("Fehler beim zurücksetzen des Passworts");
                    });
                }
            };
            UserController.prototype.editUser = function (user) {
                var _this = this;
                this.user.editUser(user).then(function (success) {
                    if (success) {
                        _this.notification.info("Benutzer '" + user.userName + "' gespeichert");
                        _this.selectedUser.password = "";
                        _this.selectedUser.passwordConfirm = "";
                        _this.selectedUser.oldPassword = "";
                        _this.editPassword = false;
                    }
                }, function (e) {
                    console.log(e);
                    _this.notification.error("Benutzer editieren fehlgeschlagen");
                    _this.loadUsers();
                });
            };
            UserController.prototype.createUser = function (user) {
                var _this = this;
                this.user.createUser(user).then(function (success) {
                    if (success) {
                        _this.notification.info("Benutzer '" + user.userName + "' erstellt");
                        _this.loadUsers();
                        _this.selectedUser = null;
                    }
                }, function (e) {
                    console.log(e);
                    _this.notification.error(e.Data);
                });
            };
            UserController.controllerId = "TrUserController";
            UserController.$inject = ['trAuthenticationService', "$state", Web.UserService.serviceId, Web.NotificationServce.serviceId, Web.PersonService.serviceId, Web.LocationService.serviceId];
            return UserController;
        })();
        Web.UserController = UserController;
        timeRecorder.controller(UserController.controllerId, UserController);
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var RoleController = (function () {
            function RoleController(authentication, $state, role, notification) {
                var _this = this;
                this.authentication = authentication;
                this.$state = $state;
                this.role = role;
                this.notification = notification;
                this.loading = false;
                this.maxNameLength = 30;
                this.loadRoles = function () {
                    _this.loading = true;
                    _this.roles = [];
                    _this.selectedRole = null;
                    _this.role.loadRoles().then(function (r) {
                        _this.roles = r;
                    }, function () {
                    }).finally(function () {
                        _this.loading = false;
                    });
                };
                this.loadClaims = function () {
                    _this.claims = [];
                    _this.role.loadClaims().then(function (c) {
                        _this.claims = c;
                    }, function () {
                    });
                };
                this.create = function () {
                    _this.selectedRole = { name: "Neue Rolle", description: "", id: 0, featureConfigurations: [], userCount: 0 };
                    _this.newRole = true;
                    _this.activeClaims = [];
                    _this.inactiveClaims = [];
                    _this.selectedClaim = null;
                    for (var i = 0; i < _this.claims.length; i++) {
                        var claim = _this.claims[i];
                        _this.inactiveClaims.push(new FeatureClaim(claim.name, claim.id, claim.description, null, claim.fields));
                    }
                };
                this.save = function () {
                    if (!_this.validate()) {
                        return;
                    }
                    _this.selectedRole.featureConfigurations = [];
                    for (var i = 0; i < _this.activeClaims.length; i++)
                        _this.selectedRole.featureConfigurations.push(_this.activeClaims[i].convertToVm());
                    _this.role.saveRole(_this.selectedRole).then(function () {
                        _this.notification.info("Rolle '" + _this.selectedRole.name + "' gespeichert");
                        _this.loadRoles();
                        _this.selectedRole = null;
                    }, function (e) {
                        _this.notification.error("Update fehlgeschlagen");
                    });
                };
                this.delete = function () {
                    _this.role.deleteRole(_this.selectedRole).then(function () {
                        _this.notification.info("Rolle '" + _this.selectedRole.name + "' gelöscht");
                        _this.loadRoles();
                    }, function (e) {
                        _this.notification.error("Löschen fehlgeschalgen");
                    });
                };
                this.toggleClaim = function (claim) {
                    if (!_this.selectedRole)
                        return;
                    var claims = _this.selectedRole.featureConfigurations;
                    if (_this.hasClaim(claim)) {
                        for (var i = 0; i < claims.length; i++) {
                            if (claims[i].featureClaim.id == claim.id) {
                                claims.splice(i, 1);
                                return;
                            }
                        }
                    }
                    else {
                        claims.push({ id: 0, featureClaim: claim, configurationJson: null });
                    }
                };
                this.hasClaim = function (claim) {
                    if (!_this.selectedRole)
                        return false;
                    var claims = _this.selectedRole.featureConfigurations;
                    for (var i = 0; i < claims.length; i++) {
                        if (claims[i].featureClaim.id == claim.id) {
                            return true;
                        }
                    }
                    return false;
                };
                this.validate = function () {
                    if (!angular.isString(_this.selectedRole.name) || _this.selectedRole.name.length < 1) {
                        _this.notification.error("Das Feld 'Name' darf nicht leer sein");
                        return false;
                    }
                    return true;
                };
                authentication.hasClaimEnsureLoggedIn("web_roles").then(function (hasClaim) {
                    if (hasClaim)
                        _this.init();
                    else
                        _this.$state.transitionTo("tr.login");
                }, function () {
                    _this.$state.transitionTo("tr.login");
                });
            }
            RoleController.prototype.init = function () {
                this.selectedRole = null;
                this.loadClaims();
                this.loadRoles();
            };
            RoleController.prototype.select = function (role) {
                this.selectedRole = role;
                this.newRole = false;
                this.inactiveClaims = [];
                this.activeClaims = [];
                this.selectedClaim = null;
                for (var i = 0; i < this.claims.length; i++) {
                    var hasCurrent = false;
                    var claim = this.claims[i];
                    var config;
                    for (var j = 0; j < role.featureConfigurations.length; j++) {
                        if (claim.id === role.featureConfigurations[j].featureClaim.id) {
                            hasCurrent = true;
                            config = role.featureConfigurations[j];
                            break;
                        }
                    }
                    hasCurrent ? this.activeClaims.push(new FeatureClaim(claim.name, claim.id, claim.description, config.configurationJson, claim.fields)) : this.inactiveClaims.push(new FeatureClaim(claim.name, claim.id, claim.description, null, claim.fields));
                }
            };
            RoleController.prototype.selectClaim = function (claim, active) {
                this.selectedClaim = claim;
                this.isCurrentClaimActive = active;
            };
            RoleController.prototype.addClaim = function () {
                var removeIndex = -1;
                for (var i = 0; i < this.inactiveClaims.length; i++) {
                    if (this.inactiveClaims[i].id === this.selectedClaim.id) {
                        removeIndex = i;
                        break;
                    }
                }
                if (removeIndex >= 0) {
                    this.inactiveClaims.splice(removeIndex, 1);
                    this.activeClaims.push(this.selectedClaim);
                    this.isCurrentClaimActive = !this.isCurrentClaimActive;
                }
            };
            RoleController.prototype.removeClaim = function () {
                var removeIndex = -1;
                for (var i = 0; i < this.activeClaims.length; i++) {
                    if (this.activeClaims[i].id === this.selectedClaim.id) {
                        removeIndex = i;
                        break;
                    }
                }
                if (removeIndex >= 0) {
                    this.activeClaims.splice(removeIndex, 1);
                    this.inactiveClaims.push(this.selectedClaim);
                    this.isCurrentClaimActive = !this.isCurrentClaimActive;
                }
            };
            RoleController.controllerId = "TrRoleController";
            RoleController.$inject = ["trAuthenticationService", "$state", Web.RoleService.serviceId, Web.NotificationServce.serviceId];
            return RoleController;
        })();
        Web.RoleController = RoleController;
        var Field = (function () {
            function Field(name, value, type) {
                this.name = name;
                this.value = value;
                this.type = type;
            }
            return Field;
        })();
        Web.Field = Field;
        var FeatureClaim = (function () {
            function FeatureClaim(name, id, description, json, fileds) {
                this.name = name;
                this.id = id;
                this.description = description;
                this.fields = [];
                var obj = json ? JSON.parse(json) : null;
                for (var i = 0; i < fileds.length; i++) {
                    this.fields.push(new Field(fileds[i].name, obj ? obj[fileds[i].name] : null, fileds[i].fieldType));
                }
            }
            FeatureClaim.prototype.convertToVm = function () {
                var obj = {};
                for (var i = 0; i < this.fields.length; i++) {
                    obj[this.fields[i].name] = this.fields[i].value;
                }
                var json = JSON.stringify(obj);
                return { featureClaim: { name: this.name, description: this.description, id: this.id, claim: "", fields: [] }, id: this.id, configurationJson: json };
            };
            return FeatureClaim;
        })();
        Web.FeatureClaim = FeatureClaim;
        timeRecorder.controller(RoleController.controllerId, RoleController);
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var DownloadController = (function () {
            function DownloadController($proxy) {
                var _this = this;
                this.$proxy = $proxy;
                this.getVersions = function () {
                    _this.loading = true;
                    _this.$proxy.Version.getVersionsMultiple({}).then(function (v) {
                        _this.versions = v.data;
                    }, function () {
                    }).finally(function () {
                        _this.loading = false;
                    });
                };
                this.getVersions();
            }
            DownloadController.prototype.getIosDownloadLink = function (versionCode) {
                var url = window.location.protocol + "//" + window.location.host + "/" + (window.location.pathname.split('/').length > 2 ? window.location.pathname.split('/')[1] + "/" : "") + "api/version/TimeRecorder_" + versionCode + ".plist";
                console.log(url);
                return "itms-services://?action=download-manifest&url=" + url;
            };
            DownloadController.controllerId = "TrDownloadController";
            DownloadController.$inject = ["$tr-proxy"];
            return DownloadController;
        })();
        Web.DownloadController = DownloadController;
        timeRecorder.controller(DownloadController.controllerId, DownloadController);
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var LocationController = (function () {
            function LocationController(location, notification, authentication, $state) {
                var _this = this;
                this.location = location;
                this.notification = notification;
                this.authentication = authentication;
                this.$state = $state;
                this.showForm = false;
                this.selectedLocation = null;
                this.idMaxLength = 10;
                this.nameMaxLength = 30;
                this.pinMaxLength = 8;
                this.create = function () {
                    _this.selectedLocation = { locationId: "", name: "Neuer Standort", key: 0, userName: "", userId: "", emergencyPin: "" };
                    _this.showForm = true;
                };
                this.save = function () {
                    if (_this.validate()) {
                        _this.location.saveLocation(_this.selectedLocation).then(function () {
                            _this.notification.info(_this.selectedLocation.name + " gespreichert");
                            _this.loadLocations();
                        }, function (e) {
                            _this.notification.error(e);
                        });
                    }
                };
                this.delete = function () {
                    _this.location.deleteLocation(_this.selectedLocation.key).then(function () {
                        _this.notification.info(_this.selectedLocation.name + " gelöscht");
                        _this.loadLocations();
                    }, function (e) {
                        _this.notification.error("Löschen fehlgeschlagen");
                    });
                };
                this.validate = function () {
                    if (!angular.isString(_this.selectedLocation.name) || _this.selectedLocation.name.length < 1) {
                        _this.notification.error("Das Feld 'Name' darf nicht leer sein!");
                        return false;
                    }
                    if (!angular.isString(_this.selectedLocation.locationId) || _this.selectedLocation.locationId.length < 1) {
                        _this.notification.error("Das Feld 'Id' darf nicht leer sein!");
                        return false;
                    }
                    return true;
                };
                this.loadLocations = function () {
                    _this.loading = true;
                    _this.showForm = false;
                    _this.location.loadLocations().then(function (l) {
                        _this.locations = l;
                        _this.selectedLocation = null;
                    }, function () {
                    }).finally(function () {
                        _this.loading = false;
                    });
                };
                authentication.hasClaimEnsureLoggedIn("web_locations").then(function (hasClaim) {
                    if (hasClaim)
                        _this.init();
                    else
                        _this.$state.transitionTo("tr.login");
                }, function () {
                    _this.$state.transitionTo("tr.login");
                });
            }
            LocationController.prototype.init = function () {
                this.loadLocations();
            };
            LocationController.prototype.select = function (location) {
                this.selectedLocation = location;
                this.showForm = true;
            };
            LocationController.$inject = [Web.LocationService.serviceId, Web.NotificationServce.serviceId, "trAuthenticationService", "$state"];
            LocationController.controllerId = "TrLocationController";
            return LocationController;
        })();
        Web.LocationController = LocationController;
        timeRecorder.controller(LocationController.controllerId, LocationController);
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var PersonController = (function () {
            function PersonController(person, role, notification, authentication, $state, $proxy) {
                var _this = this;
                this.person = person;
                this.role = role;
                this.notification = notification;
                this.authentication = authentication;
                this.$state = $state;
                this.$proxy = $proxy;
                this.showForm = false;
                this.profiles = [];
                this.idMaxLength = 10;
                this.firstNameMaxLength = 30;
                this.lastNameMaxLength = 30;
                this.create = function () {
                    _this.selectedPerson = _this.$proxy.Employee.newEmployeeCm();
                    _this.showForm = true;
                };
                this.save = function () {
                    if (_this.validate()) {
                        console.log(_this.selectedPerson);
                        _this.person.savePerson(_this.selectedPerson).then(function () {
                            _this.notification.info(_this.selectedPerson.firstName + " " + _this.selectedPerson.lastName + " gespeichert");
                            _this.loadPersons();
                        }, function (e) {
                            console.log(e);
                            _this.notification.error(e);
                        });
                    }
                };
                this.delete = function () {
                    _this.person.deletePerson(_this.selectedPerson.id).then(function () {
                        _this.notification.info(_this.selectedPerson.firstName + " " + _this.selectedPerson.lastName + " gelöscht");
                        _this.loadPersons();
                    }, function (e) {
                        _this.notification.error("Löschen fehlgeschlagen!");
                    });
                };
                this.validate = function () {
                    if (!angular.isString(_this.selectedPerson.employeeId) || _this.selectedPerson.employeeId.length < 1) {
                        _this.notification.error("Das Feld 'Id' darf nicht leer sein!");
                        return false;
                    }
                    if (!angular.isString(_this.selectedPerson.firstName) || _this.selectedPerson.firstName.length < 1) {
                        _this.notification.error("Das Feld 'Vorname' darf nicht leer sein!");
                        return false;
                    }
                    if (!angular.isString(_this.selectedPerson.lastName) || _this.selectedPerson.lastName.length < 1) {
                        _this.notification.error("Das Feld 'Nachname' darf nicht leer sein!");
                        return false;
                    }
                    return true;
                };
                this.loadPersons = function () {
                    _this.loading = true;
                    _this.selectedPerson = null;
                    _this.showForm = false;
                    _this.person.startSearch().then(function () {
                    }, function () {
                    }).finally(function () {
                        _this.loading = false;
                    });
                };
                this.loadProfiles = function () {
                    _this.role.loadRoles().then(function (p) {
                        _this.profiles = p;
                    }, function () {
                    });
                };
                authentication.hasClaimEnsureLoggedIn("web_persons").then(function (hasClaim) {
                    if (hasClaim)
                        _this.init();
                    else
                        _this.$state.transitionTo("tr.login");
                }, function () {
                    _this.$state.transitionTo("tr.login");
                });
            }
            PersonController.prototype.init = function () {
                var _this = this;
                this.loadPersons();
                this.loadProfiles();
                this.$proxy.Admin.webServiceAvailable().then(function (response) {
                    _this.webServiceAvailable = response.data;
                }, function () {
                    _this.webServiceAvailable = false;
                });
            };
            PersonController.prototype.select = function (person) {
                this.selectedPerson = person;
                this.showForm = true;
            };
            PersonController.prototype.triggerPersonImport = function () {
                var _this = this;
                var toast = this.notification.persistentInfo("Personen werden importiert");
                this.$proxy.Admin.triggerPersonImport().then(function (response) {
                    if (response.data) {
                        _this.notification.info("Personalstamm aktualisiert");
                    }
                    else {
                        _this.notification.error("Fehler beim Aktualisieren des Personalstamms");
                    }
                }, function () {
                    _this.notification.error("Fehler beim Aktualisieren des Personalstamms");
                }).finally(function () {
                    _this.notification.clearToastr(toast);
                    _this.loadPersons();
                });
            };
            PersonController.prototype.getRole = function (person) {
                for (var i = 0; i < this.profiles.length; i++) {
                    if (this.profiles[i].id == person.profileId) {
                        return this.profiles[i].name;
                    }
                }
                return "Keine Rolle";
            };
            PersonController.$inject = [Web.PersonService.serviceId, Web.RoleService.serviceId, Web.NotificationServce.serviceId, "trAuthenticationService", "$state", "$tr-proxy"];
            PersonController.controllerId = "TrPersonController";
            return PersonController;
        })();
        Web.PersonController = PersonController;
        timeRecorder.controller(PersonController.controllerId, PersonController);
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var MessageController = (function () {
            function MessageController($q, globalMessages, notification, authentication, $state) {
                var _this = this;
                this.$q = $q;
                this.globalMessages = globalMessages;
                this.notification = notification;
                this.authentication = authentication;
                this.$state = $state;
                this.mode = 1;
                this.textMode = 1;
                this.maxTextLength = 340;
                this.maxBulletLength = 80;
                this.maxTitleLength = 20;
                this.maxBullets = 3;
                this.resetForm = function () {
                    _this.showForm = true;
                    _this.title = "";
                    _this.bullets = [{ str: '' }];
                    _this.rawHtml = '';
                    _this.textMode = 1;
                    _this.text = '';
                    _this.fileName = '';
                    _this.fileSize = 0;
                    _this.fileType = '';
                    _this.bytes = null;
                    _this.imgUrl = null;
                    _this.hasImage = false;
                    _this.uploadImage = false;
                    $("#fileUpload").replaceWith($("#fileUpload").clone());
                };
                this.select = function (msg) {
                    _this.resetForm();
                    _this.uploadImage = false;
                    _this.showForm = true;
                    _this.selectedMessage = msg;
                    _this.parseHtml(msg.message);
                };
                this.create = function () {
                    _this.resetForm();
                    _this.mode = 1;
                    _this.selectedMessage = { id: 0, title: "Unser heutiges Motto", message: "", date: null, image: null, hasImage: false };
                };
                this.delete = function () {
                    _this.globalMessages.deleteMessage(_this.selectedMessage.id).then(function () {
                        _this.notification.info("Nachricht gelöscht");
                        _this.loadMessages();
                    }, function (e) {
                        _this.notification.error(e);
                    });
                };
                this.loadMessages = function () {
                    _this.loading = true;
                    _this.showForm = false;
                    _this.selectedMessage = null;
                    _this.globalMessages.loadMessages().then(function (msgs) {
                        _this.messages = msgs;
                    }, function () {
                    }).finally(function () {
                        _this.loading = false;
                    });
                };
                this.switchMode = function (mode) {
                    _this.mode = mode;
                };
                this.switchTextMode = function (mode) {
                    _this.textMode = mode;
                };
                this.addBullet = function () {
                    if (!_this.bullets)
                        _this.bullets = [];
                    _this.bullets.push({ str: "" });
                };
                this.removeBullet = function (index) {
                    if (_this.bullets) {
                        _this.bullets.splice(index, 1);
                    }
                };
                this.preview = function () {
                    _this.renderedHtml = _this.renderHtml(false);
                    _this.showPreview = true;
                };
                this.hidePreview = function () {
                    _this.showPreview = false;
                };
                this.save = function () {
                    var html = _this.renderHtml(_this.uploadImage);
                    _this.selectedMessage.message = html;
                    _this.selectedMessage.title = _this.title;
                    if (_this.uploadImage && _this.mode === 2) {
                        var image = {
                            bytes: _this.bytes,
                            name: _this.fileName,
                            type: _this.fileType,
                            size: _this.fileSize
                        };
                        _this.selectedMessage.hasImage = true;
                        _this.selectedMessage.image = image;
                    }
                    else {
                        _this.selectedMessage.hasImage = false;
                    }
                    _this.globalMessages.putMessage(_this.selectedMessage).then(function () {
                        _this.notification.info("Nachricht gespeichert");
                        _this.loadMessages();
                    }, function (e) {
                        _this.notification.error(e);
                    });
                };
                this.fileSelected = function () {
                    var input = $('#fileUpload')[0];
                    if (input.files && input.files[0]) {
                        var file = input.files[0];
                        _this.fileName = file.name;
                        _this.fileSize = file.size;
                        _this.fileType = file.type;
                        var reader = new FileReader();
                        reader.onload = function (e) {
                            _this.imgUrl = e.target.result;
                            _this.hasImage = true;
                        };
                        reader.readAsDataURL(file);
                        var reader2 = new FileReader();
                        reader2.onload = function (e) {
                            var buffer = e.target.result;
                            var a = new Uint8Array(buffer);
                            var len = a.length;
                            var res = [];
                            for (var i = 0; i < len; i++) {
                                res.push(a[i]);
                            }
                            _this.bytes = res;
                            _this.uploadImage = true;
                        };
                        reader2.readAsArrayBuffer(file);
                    }
                };
                this.removeImage = function () {
                    _this.imgUrl = null;
                    _this.bytes = null;
                    _this.hasImage = false;
                    _this.fileSize = 0;
                    _this.fileName = '';
                    _this.fileType = '';
                    $("#fileUpload").replaceWith($("#fileUpload").clone());
                };
                this.parseHtml = function (html) {
                    _this.title = "";
                    _this.imgUrl = "";
                    _this.bullets = [];
                    _this.rawHtml = html || '';
                    _this.text = '';
                    _this.mode = 1;
                    _this.textMode = 1;
                    var context = $('#html-parser-hidden');
                    context.html(html);
                    var title = $('.tr-global-message-title', context).html() || $('.tr-global-message-title-dual', context).html();
                    if (title) {
                        _this.title = title.trim();
                        var text = $('.tr-global-message-text', context).html() || $('.tr-global-message-text-dual', context).html();
                        if (text) {
                            _this.text = text;
                        }
                        else {
                            var itemNodes = $('.tr-global-message-item', context);
                            if (!itemNodes.length)
                                itemNodes = $('.tr-global-message-item-dual', context);
                            if (itemNodes.length) {
                                for (var i = 0; i < itemNodes.length; i++) {
                                    var item = $(itemNodes[i]).html();
                                    _this.bullets.push({ str: item.trim() });
                                }
                                _this.textMode = 2;
                            }
                        }
                        var q = _this.$q.defer();
                        var imageNode = $(".tr-preview-image-vertical", context)[0] || $(".tr-preview-image-horizontal", context)[0];
                        if (imageNode) {
                            _this.mode = 2;
                            var image = $(imageNode).prop("src");
                            q.resolve(image);
                            _this.imgUrl = image;
                            _this.hasImage = true;
                        }
                        else {
                            _this.mode = 1;
                            q.reject();
                        }
                        q.promise.then(function (s) {
                            _this.imgUrl = s;
                        }, function () {
                            _this.imgUrl = "";
                        });
                    }
                    else {
                        _this.mode = 3;
                    }
                    context.html("");
                    if (!_this.bullets.length)
                        _this.bullets.push({ str: '' });
                };
                this.renderHtml = function (forUpload) {
                    return _this.mode === 1 ? _this.renderOneCol(forUpload) : _this.mode === 2 ? _this.renderTwoCol(forUpload) : _this.renderRaw();
                };
                this.renderBullets = function (forUpload) {
                    var bullets = '<ul>';
                    var cl = _this.mode === 1 ? "tr-global-message-item" : "tr-global-message-item-dual";
                    for (var i = 0; i < _this.bullets.length; ++i) {
                        bullets += '<li class="' + cl + '">' + _this.bullets[i].str + '</li>';
                    }
                    bullets += '</ul>';
                    return bullets;
                };
                this.renderText = function (forUpload) {
                    var cl = _this.mode === 1 ? "tr-global-message-text" : "tr-global-message-text-dual";
                    return '<div class="' + cl + '">' + _this.text + '</div>';
                };
                this.renderTitle = function (forUpload) {
                    var cl = _this.mode === 1 ? 'tr-global-message-title' : 'tr-global-message-title-dual';
                    return '<div class="' + cl + '">' + _this.title + '</div>';
                };
                this.renderImage = function (forUpload) {
                    if (!_this.hasImage)
                        return '';
                    var preview = $("#image-preview");
                    console.log(preview.height(), preview.width());
                    var vertical = preview.height() > 1.25 * preview.width();
                    console.log(vertical);
                    if (!forUpload)
                        return '<div class="tr-preview-image-background"><img class="tr-preview-image-' + (vertical ? 'vertical' : 'horizontal') + '" src="' + _this.imgUrl + '" alt=""/></div>';
                    return '<div class="tr-preview-image-background"><img class="tr-preview-image-' + (vertical ? 'vertical' : 'horizontal') + '" src="{{i}}"  alt=""/></div>';
                };
                this.renderOneCol = function (forUpload) {
                    return _this.renderTitle(forUpload) + (_this.textMode === 1 ? _this.renderText(forUpload) : _this.renderBullets(forUpload));
                };
                this.renderTwoCol = function (forUpload) {
                    var twoCol = '<div class="row"><div class="col-md-5">';
                    twoCol += _this.renderImage(forUpload);
                    twoCol += '</div><div class="col-md-7">';
                    twoCol += _this.renderOneCol(forUpload);
                    twoCol += '</div></div>';
                    return twoCol;
                };
                //clumsy method of removing all script tags
                this.renderRaw = function () {
                    var el = document.getElementById('html-parser-hidden');
                    //insert the raw html with potential script tags into dom (scripts inserted with innerhtml are not executed)
                    el.innerHTML = _this.rawHtml;
                    var context = $(el);
                    //find and remove all script tags within context
                    var scripts = $('script', context);
                    scripts.remove();
                    //load the html back now without the script tags 
                    var raw = context.html();
                    _this.rawHtml = raw;
                    return raw;
                };
                authentication.hasClaimEnsureLoggedIn("web_globalMessages").then(function (hasClaim) {
                    if (hasClaim)
                        _this.init();
                    else
                        _this.$state.transitionTo("tr.login");
                }, function () {
                    _this.$state.transitionTo("tr.login");
                });
            }
            MessageController.prototype.init = function () {
                this.loadMessages();
            };
            MessageController.controllerId = "TrMessageController";
            MessageController.$inject = ["$q", Web.GlobalMessageService.serviceId, Web.NotificationServce.serviceId, "trAuthenticationService", "$state"];
            return MessageController;
        })();
        Web.MessageController = MessageController;
        timeRecorder.controller(MessageController.controllerId, MessageController);
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
//<div class="tr-preview-image-background" >
//	<img class="tr-preview-image" src = "{{ctrl.imgUrl}}" alt ="" / >
//< / div> 
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var ExpensesSideController = (function () {
            function ExpensesSideController($state) {
                this.$state = $state;
            }
            ExpensesSideController.prototype.close = function () {
                this.$state.go('tr.expenses');
            };
            ExpensesSideController.$inject = ['$state'];
            ExpensesSideController.controllerId = "TrExpensesSideController";
            return ExpensesSideController;
        })();
        Web.ExpensesSideController = ExpensesSideController;
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
timeRecorder.controller(TimeRecorder.Web.ExpensesSideController.controllerId, TimeRecorder.Web.ExpensesSideController);
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var PersonalMessageController = (function () {
            function PersonalMessageController(personalMessages, person, authentication, notification, $state) {
                var _this = this;
                this.personalMessages = personalMessages;
                this.person = person;
                this.authentication = authentication;
                this.notification = notification;
                this.$state = $state;
                this.maxMsgLength = 190;
                this.init = function () {
                    _this.recipients = [];
                    _this.persons = [];
                    _this.loadSentMessages();
                    _this.person.loadPersons().then(function (response) {
                        _this.persons = response;
                        _this.selectOptions = ToSelectOption.convertToToSelectOptions(_this.persons, function (p) {
                            return new ToSelectOption(p.firstName + " " + p.lastName, p.id, false);
                        });
                    }, function () {
                    });
                };
                this.send = function () {
                    if (_this.validate()) {
                        var recipientIds = _this.recipients.map(function (r) {
                            return r.id;
                        });
                        _this.authentication.getAppUser().then(function (appUser) {
                            var authorId = appUser.person ? appUser.person.id : 0;
                            var message = {
                                head: _this.head,
                                body: _this.body,
                                authorId: authorId,
                                recipientIds: recipientIds
                            };
                            _this.personalMessages.saveMessage(message).then(function () {
                                _this.notification.info("Nachricht gesendet");
                                _this.loadSentMessages();
                                _this.recipients = [];
                                _this.showForm = false;
                                _this.body = "";
                                _this.head = "";
                            }, function () {
                            });
                        }, function () {
                        });
                    }
                };
                this.select = function (msg) {
                    _this.selectedId = msg.messageId;
                    _this.head = msg.head;
                    _this.body = msg.body;
                    _this.recipients = ToSelectOption.convertToToSelectOptions(msg.recipients, function (m) {
                        return new ToSelectOption(m.name, 0, m.messageRead);
                    });
                    _this.showForm = true;
                    _this.isNew = false;
                };
                this.create = function () {
                    _this.selectedId = 0;
                    _this.head = "";
                    _this.body = "";
                    _this.recipients = [];
                    _this.showForm = true;
                    _this.isNew = true;
                };
                this.loadSentMessages = function () {
                    _this.authentication.getAppUser().then(function (au) {
                        var userId = au.person ? au.person.id : null;
                        _this.personalMessages.getSentMessages(userId).then(function (response) {
                            _this.messages = response.data;
                        }, function () {
                        });
                    }, function () {
                    });
                };
                this.validate = function () {
                    return angular.isString(_this.head) && angular.isString(_this.body) && _this.head.length > 0 && _this.body.length > 0 && _this.recipients.length > 0;
                };
                authentication.hasClaimEnsureLoggedIn("web_personalMessages").then(function (hasClaim) {
                    if (hasClaim)
                        _this.init();
                    else
                        _this.$state.transitionTo("tr.login");
                }, function () {
                    _this.$state.transitionTo("tr.login");
                });
                this.init();
            }
            PersonalMessageController.$inject = [Web.PersonalMessageService.serviceId, Web.PersonService.serviceId, "trAuthenticationService", Web.NotificationServce.serviceId, "$state"];
            PersonalMessageController.controllerId = "TrPersonalMessageController";
            return PersonalMessageController;
        })();
        Web.PersonalMessageController = PersonalMessageController;
        var ToSelectOption = (function () {
            function ToSelectOption(value, id, read) {
                this.value = value;
                this.id = id;
                this.read = read;
                this.htmlString = "";
            }
            ToSelectOption.convertToToSelectOptions = function (source, convertFn) {
                var res = [];
                for (var i = 0; i < source.length; i++) {
                    res.push(convertFn(source[i]));
                }
                return res;
            };
            return ToSelectOption;
        })();
        Web.ToSelectOption = ToSelectOption;
        timeRecorder.controller(PersonalMessageController.controllerId, PersonalMessageController);
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var ConfigController = (function () {
            function ConfigController(notification, authentication, $state, $proxy, $scope, trWebApiUrl) {
                var _this = this;
                this.notification = notification;
                this.authentication = authentication;
                this.$state = $state;
                this.$proxy = $proxy;
                this.$scope = $scope;
                this.trWebApiUrl = trWebApiUrl;
                authentication.hasClaimEnsureLoggedIn("web_editConfig").then(function (hasClaim) {
                    if (hasClaim)
                        _this.init();
                    else
                        _this.$state.transitionTo("tr.login");
                }, function () {
                    _this.$state.transitionTo("tr.login");
                });
            }
            ConfigController.prototype.init = function () {
                this.loadConfig();
            };
            ConfigController.prototype.loadConfig = function () {
                var _this = this;
                this.$proxy.Config.get().then(function (response) {
                    _this.config = response.data;
                    if (response.data.imageId) {
                        _this.imgUrl = _this.trWebApiUrl + "/image/get/" + response.data.imageId;
                        _this.hasImage = true;
                    }
                }, function (e) {
                });
            };
            ConfigController.prototype.save = function () {
                var _this = this;
                if (!this.validate())
                    return;
                var data = { TimeOut: this.config.timeOut, FileName: '', FileType: '', Bytes: [], SaveImage: false };
                if (this.newImage) {
                    data.SaveImage = true;
                    data.Bytes = this.bytes;
                    data.FileName = this.fileName;
                    data.FileType = this.fileType;
                }
                this.$proxy.Config.put(data).then(function () {
                    _this.notification.info("Konfiguration gespeichert");
                }, function (e) {
                    _this.notification.error(e.data.Data);
                });
            };
            ConfigController.prototype.onImageSeleted = function () {
                var _this = this;
                var input = $('#logo')[0];
                console.log("file selected");
                if (input.files && input.files[0]) {
                    var file = input.files[0];
                    this.fileName = file.name;
                    this.fileSize = file.size;
                    this.fileType = file.type;
                    console.log(file);
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        console.log(e);
                        _this.$scope.$apply(function () {
                            _this.imgUrl = e.target.result;
                            _this.hasImage = true;
                        });
                    };
                    reader.readAsDataURL(file);
                    var reader2 = new FileReader();
                    reader2.onload = function (e) {
                        var buffer = e.target.result;
                        var a = new Uint8Array(buffer);
                        var len = a.length;
                        var res = [];
                        for (var i = 0; i < len; i++) {
                            res.push(a[i]);
                        }
                        _this.bytes = res;
                        _this.newImage = true;
                    };
                    reader2.readAsArrayBuffer(file);
                }
            };
            ConfigController.prototype.removeImage = function () {
                this.imgUrl = "";
                this.hasImage = false;
                this.bytes = [];
                this.newImage = false;
                this.fileName = '';
                this.fileSize = 0;
                this.fileType = '';
            };
            ConfigController.prototype.validate = function () {
                return true;
            };
            ConfigController.$inject = [Web.NotificationServce.serviceId, "trAuthenticationService", "$state", "$tr-proxy", "$scope", "trWebApiUrl"];
            ConfigController.controllerId = "TrConfigController";
            return ConfigController;
        })();
        Web.ConfigController = ConfigController;
        timeRecorder.controller(ConfigController.controllerId, ConfigController);
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var EntryController = (function () {
            function EntryController(search, authentication, $state, person, location, $proxy, notification) {
                var _this = this;
                this.search = search;
                this.authentication = authentication;
                this.$state = $state;
                this.person = person;
                this.location = location;
                this.$proxy = $proxy;
                this.notification = notification;
                this.persons = [];
                this.people = [];
                this.locations = [];
                this.dateFormat = 'dd.MM.yyyy';
                this.states = ["Fehlgeschlagen", "Erfolgreich"];
                this.datepickerOptions = { currentText: "Heute", clearText: "Löschen", closeText: "Schliessen" };
                authentication.hasClaimEnsureLoggedIn("web_entries").then(function (hasClaim) {
                    if (hasClaim)
                        _this.init();
                    else
                        _this.$state.transitionTo("tr.login");
                }, function () {
                    _this.$state.transitionTo("tr.login");
                });
            }
            EntryController.prototype.init = function () {
                var _this = this;
                this.$proxy.Admin.webServiceAvailable().then(function (response) {
                    _this.webServiceAvailable = response.data;
                }, function () {
                    _this.webServiceAvailable = false;
                });
                this.person.loadPersons().then(function (p) {
                    _this.persons = [];
                    _this.people = p;
                    for (var i = 0; i < p.length; i++)
                        _this.persons.push(new TypeAheadPerson(p[i].id, p[i].firstName + " " + p[i].lastName));
                }, function () {
                });
                this.location.loadLocations().then(function (l) {
                    _this.locations = l;
                }, function () {
                });
                this.$proxy.TimeEntry.getAvailableBookingTypesMultiple({}).then(function (response) {
                    _this.types = response.data;
                }, function () {
                });
            };
            EntryController.prototype.open = function (event, cal) {
                event.preventDefault();
                event.stopPropagation();
                if (cal == 1)
                    this.fromOpen = true;
                else if (cal == 2)
                    this.toOpen = true;
                else if (cal == 3)
                    this.editOpen = true;
            };
            EntryController.prototype.selected = function (item) {
                console.log(arguments);
                this.search.personId = item.id;
            };
            EntryController.prototype.selectEntry = function (entry) {
                this.selectedEntry = entry;
                this.editMode = true;
                this.newMode = false;
                this.personChanged();
            };
            EntryController.prototype.newEntry = function () {
                //			this.selectedEntry = {
                //				id: '', canEdit: true, badgeId: "", bookedTime: new Date(), employeeName: "", transmitted: false,
                //				type: "", objectId: "", terminalId: "", employeeId: 0, locationId: 0, locationName: "", errorCode: 0, errorMessage: ""
                //			};
                this.editMode = true;
                this.newMode = true;
            };
            EntryController.prototype.cancelEdit = function () {
                this.editMode = false;
                this.newMode = false;
                this.selectedEntry = null;
            };
            EntryController.prototype.personChanged = function () {
                var pid = this.selectedEntry.employeeId;
                for (var i = 0; i < this.people.length; i++) {
                    if (this.people[i].id == pid) {
                        this.minDate = this.people[i].bookingLock;
                        return;
                    }
                }
                this.minDate = null;
            };
            EntryController.prototype.save = function () {
                //console.log(this.selectedEntry.bookedTime);
                //if (!this.validate()) {
                //	return;
                //}
                //this.$proxy.TimeEntry.put(this.selectedEntry).then((response) => {
                //	if (response.data) {
                //		this.notification.info("Eintrag gespeichert");
                //		this.selectedEntry = null;
                //		this.newMode = false;
                //		this.editMode = false;
                //		this.search.search();
                //	} else {
                //		this.notification.error("Änderung fehlgeschlagen");
                //	}
                //},(e) => {
                //		this.notification.error("Änderung fehlgeschlagen");
                //});
            };
            EntryController.prototype.timechange = function () {
                console.log("time changed ", this.selectedEntry.bookedTime);
            };
            EntryController.prototype.canEdit = function () {
                if (this.newMode) {
                    return this.selectedEntry && this.selectedEntry.employeeId && this.minDate != null;
                }
                return this.webServiceAvailable && this.selectedEntry && this.selectedEntry.canEdit && this.selectedEntry.employeeId && this.minDate != null;
            };
            EntryController.prototype.delete = function () {
                var _this = this;
                this.$proxy.TimeEntry.delete(this.selectedEntry).then(function (response) {
                    if (response.data) {
                        _this.notification.info("Eintrag gelöscht");
                        _this.selectedEntry = null;
                        _this.newMode = false;
                        _this.editMode = false;
                        _this.search.search();
                    }
                    else {
                        _this.notification.error("Löschen fehlgeschlagen");
                    }
                }, function (e) {
                    _this.notification.error("Löschen fehlgeschlagen");
                });
            };
            EntryController.prototype.validate = function () {
                if (!angular.isDate(this.selectedEntry.bookedTime)) {
                    this.notification.error("Die Felder 'Datum' und 'Zeit' dürfen nicht leer sein.");
                    return false;
                }
                if (!angular.isString(this.selectedEntry.type) || this.selectedEntry.type.length < 1) {
                    this.notification.error("Das Feld 'Typ' darf nicht leer sein");
                    return false;
                }
                if (this.selectedEntry.locationId <= 0) {
                    this.notification.error("Das Feld 'Terminal' darf nicht leer sein");
                    return false;
                }
                if (this.selectedEntry.employeeId <= 0) {
                    this.notification.error("Das Feld 'Person' darf nicht leer sein");
                    return false;
                }
                return true;
            };
            EntryController.controllerId = "TrEntryController";
            EntryController.$inject = [Web.SearchService.serviceId, "trAuthenticationService", "$state", Web.PersonService.serviceId, Web.LocationService.serviceId, "$tr-proxy", Web.NotificationServce.serviceId];
            return EntryController;
        })();
        Web.EntryController = EntryController;
        var TypeAheadPerson = (function () {
            function TypeAheadPerson(id, label) {
                this.id = id;
                this.label = label;
            }
            return TypeAheadPerson;
        })();
        Web.TypeAheadPerson = TypeAheadPerson;
        timeRecorder.controller(EntryController.controllerId, EntryController);
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var TimeBookingController = (function () {
            function TimeBookingController($scope, $services, $dcc) {
                var _this = this;
                this.$scope = $scope;
                this.$services = $services;
                this.$dcc = $dcc;
                this.pendingConfirmedTimeBookings = [];
                this.weekdayDuration = [];
                // form values
                this.stateValue = null;
                this.typeValue = null;
                this.filterHeaderDate = {
                    targetingMode: false,
                    date: new Date()
                };
                this.filterHeaderGetEntryPerDay = function (day) {
                    var duration = "00:00";
                    if (_this.weekdayDuration != null && (day in _this.weekdayDuration))
                        duration = _this.weekdayDuration[day];
                    if (duration !== "00:00")
                        return duration;
                    return "0";
                };
                $services.$auth.hasClaimEnsureLoggedIn("web_timebookings").then(function (hasClaim) {
                    if (hasClaim) {
                        $services.$q.all([
                            _this.$dcc.timeEntryTypeDc.ensureLoaded()
                        ]).then(function () {
                            _this.isAdmin = $services.$auth.hasClaim("web_timebookings_admin");
                            _this.init();
                        });
                    }
                    else {
                        $services.$state.transitionTo("tr.login");
                    }
                }, function () {
                    $services.$state.transitionTo("tr.login");
                });
            }
            // initialize view
            TimeBookingController.prototype.init = function () {
                var _this = this;
                this.$scope.$on(Web.TimeBookingFormController.changeEventId, function () { return _this.search(true); });
                this.$scope.$watch("ctrl.filterHeaderDate.date", function () {
                    _this.search(false);
                }, true);
            };
            TimeBookingController.prototype.hasData = function () {
                return this.timeBookingsOfDay != null && this.timeBookingsOfDay.entries.length > 0;
            };
            TimeBookingController.prototype.filterHeaderAdd = function () {
                this.$services.$state.transitionTo("tr.timebookings.side.add", {
                    date: moment(this.filterHeaderDate.date).format("DD-MM-YYYY")
                });
            };
            TimeBookingController.prototype.filterHeaderShowConfirm = function () {
                this.pendingConfirmedTimeBookings = [];
            };
            TimeBookingController.prototype.filterHeaderConfirmCancel = function () {
                for (var i = 0; i < this.pendingConfirmedTimeBookings.length; i++) {
                    var timeBooking = this.pendingConfirmedTimeBookings[i];
                    timeBooking.confirmed = !timeBooking.confirmed;
                }
                this.pendingConfirmedTimeBookings = [];
            };
            TimeBookingController.prototype.filterHeaderConfirmSave = function () {
                var _this = this;
                // todo: save state and do not override children..
                var timeBookings = this.pendingConfirmedTimeBookings;
                // check to see if any time bookings have been selected
                if (!timeBookings.any()) {
                    toastr.warning("Keine Buchung ausgewählt");
                    return;
                }
                // check to see if they are actual visuming any time booking and not unchecking them
                if (timeBookings.toEnumerable().any(function (tb) { return tb.confirmed; })) {
                    var timeBookingIds = timeBookings.toEnumerable().select(function (tb) { return tb.id; }).toArray();
                    return this.$dcc.timeBookingDc.getCorrispondingUnvisumedTimeBookingsForCriteria(timeBookingIds).then(function (unVisumedTimeBookings) {
                        if (Triarc.arrayHasValues(unVisumedTimeBookings)) {
                            return _this.fetchAndResolveData(unVisumedTimeBookings).then(function (resolvedData) {
                                // remove the original timebookings from the list
                                unVisumedTimeBookings = unVisumedTimeBookings.toEnumerable().where(function (tb) { return !timeBookingIds.contains(tb.id); }).toArray();
                                Web.TimeBooking.Modal.openTimeBookingsNotVisumedModal(_this.$services.$modal, unVisumedTimeBookings).then(function (proceed) {
                                    if (proceed) {
                                        _this.saveVisumedTimeBookings(timeBookings);
                                    }
                                    else {
                                        return;
                                    }
                                });
                            });
                        }
                        else {
                            _this.saveVisumedTimeBookings(timeBookings);
                        }
                    });
                }
                else {
                    return this.saveVisumedTimeBookings(timeBookings);
                }
            };
            TimeBookingController.prototype.saveVisumedTimeBookings = function (timeBookings) {
                var _this = this;
                return this.$dcc.timeBookingDc.saveMultiple(timeBookings, false).then(function (timeBookings) {
                    toastr.success("Buchungen aktualisiert");
                    _this.filterHeaderDate.targetingMode = false;
                });
            };
            TimeBookingController.prototype.filterHeaderGetTotalEntries = function () {
                return this.totalDuration || "";
            };
            TimeBookingController.prototype.setConfirmed = function (timeBooking) {
                var alreadyModified = this.pendingConfirmedTimeBookings.toEnumerable().firstOrDefault(function (t) { return t.id === timeBooking.id; });
                if (timeBooking.confirmed) {
                    var timeBookingOfDay = this.getTimeBookingsForDay(this.timeBookingsOfWeek, moment(this.filterHeaderDate).weekday());
                    timeBookingOfDay.entries.toEnumerable();
                    if (timeBookingOfDay.entries.toEnumerable().all(function (tb) {
                        return !tb.entry.type.isPause;
                    })) {
                        this.$services.openInfoModal("Es wurden Heute noch keine Pausen erfasst.", "Keine Pausen");
                    }
                }
                if (alreadyModified != null) {
                    this.pendingConfirmedTimeBookings.remove(alreadyModified);
                }
                else {
                    this.pendingConfirmedTimeBookings.add(timeBooking);
                }
            };
            TimeBookingController.prototype.getDuration = function (timebooking) {
                var start = moment(timebooking.start).startOf("minute"); //.second(0);
                var end = moment(timebooking.stop).startOf("minute"); //.second(0);
                if (start === end || timebooking.start.getTime() >= timebooking.stop.getTime())
                    return "00:00";
                return moment.utc(end.diff(start)).format("HH:mm");
            };
            TimeBookingController.prototype.isEditable = function (timeBooking) {
                return this.$dcc.timeBookingDc.getIsEditable(timeBooking);
            };
            TimeBookingController.prototype.getStateById = function (state) {
                if (state == null)
                    return null;
                var key = state.toString();
                if (Web.Data.ETimeBookingState.hasOwnProperty(key)) {
                    switch (state) {
                        case 1 /* Unconfirmed */:
                            return "Nicht visiert";
                        case 2 /* Confirmed */:
                            return "Visiert";
                        case 3 /* Complete */:
                            return "Abgeschlossen";
                        case 4 /* Faulted */:
                            return "Fehlgeschlagen";
                        case 0 /* Open */:
                            return "Offen";
                    }
                }
                return "";
            };
            TimeBookingController.prototype.getStateColor = function (state) {
                return this.$dcc.timeEntryTypeDc.getStateColor(state);
            };
            TimeBookingController.prototype.getWeekRange = function () {
                // our first day of the week is monday not sunday
                var from = this.getStartOfWeek(this.filterHeaderDate.date);
                return {
                    from: from.toDate(),
                    to: from.clone().add("d", 7).toDate()
                };
            };
            TimeBookingController.prototype.getDayRange = function (weekday) {
                // sunday is our last day of the week and not the first one
                var date = moment(this.filterHeaderDate.date);
                if (date.day() === 0)
                    date.add(-1, "day");
                if (weekday === 0)
                    weekday = 7;
                date.day(weekday);
                return {
                    from: date.clone().startOf("day").toDate(),
                    to: date.clone().endOf("day").toDate()
                };
            };
            TimeBookingController.prototype.getSearchParams = function () {
                var timeRange = this.getWeekRange();
                return {
                    person: "",
                    state: this.stateValue,
                    timeEntryTypeId: this.typeValue,
                    from: timeRange.from,
                    to: timeRange.to
                };
            };
            TimeBookingController.prototype.getTimeBookingsForDay = function (result, weekday) {
                var dayRange = this.getDayRange(weekday);
                var rangeStartTime = dayRange.from.getTime();
                var rangeEndTime = dayRange.to.getTime();
                var entries = result.where(function (t) { return t.parentId == null && t.start.getTime() <= rangeEndTime && t.start.getTime() >= rangeStartTime; }).orderBy(function (t) { return t.start; }).select(function (t) { return {
                    entry: t,
                    related: result.where(function (r) { return r.parentId === t.id; }).orderBy(function (r) { return r.start; }).toArray()
                }; });
                return {
                    weekday: weekday,
                    entries: entries.toArray(),
                    duration: entries.sum(function (t) {
                        //ignore pause timebookings for totals
                        if (t.entry.type.externalId === 16090)
                            return 0;
                        var start = moment(t.entry.start).startOf("minute");
                        var stop = moment(t.entry.stop).startOf("minute");
                        return stop.toDate().getTime() - start.toDate().getTime();
                    })
                };
            };
            TimeBookingController.prototype.getDurationString = function (duration) {
                if (duration <= 0)
                    return "-";
                var secs = duration / 1000;
                var minutes = Math.round((secs / 60));
                return this.$services.$filter("minutesToHours")(minutes);
            };
            // search
            TimeBookingController.prototype.search = function (forceReload) {
                var _this = this;
                var currentDate = this.filterHeaderDate.date;
                var bookingPromise = this.getWeekTimeBookings(forceReload);
                var openBookingPromise = this.$services.$auth.getAppUser().then(function (u) {
                    if (u.person) {
                        return _this.getOpenTimeBookings(forceReload, u.person.id, currentDate);
                    }
                    else {
                        var q = _this.$services.$q.defer();
                        q.resolve(null);
                        return q.promise;
                    }
                });
                this.$services.$q.all([bookingPromise, openBookingPromise]).then(function (values) {
                    var timeBookings = values[0];
                    var openBooking = values[1];
                    _this.currentOpenBooking = openBooking;
                    var currentDay = currentDate.getDay();
                    _this.timeBookingsOfWeek = timeBookings;
                    var totalTime = 0;
                    var days = [1, 2, 3, 4, 5, 6, 0];
                    for (var i = 0; i < days.length; i++) {
                        var day = days[i];
                        var timeBookingsOfDay = _this.getTimeBookingsForDay(_this.timeBookingsOfWeek, day);
                        _this.weekdayDuration[day] = _this.getDurationString(timeBookingsOfDay.duration);
                        totalTime += timeBookingsOfDay.duration;
                        if (day === currentDay) {
                            _this.timeBookingsOfDay = timeBookingsOfDay;
                        }
                    }
                    _this.totalDuration = _this.getDurationString(totalTime);
                }, function () {
                });
                //this.getWeekTimeBookings(forceReload).then(timeBookings => {
                //  var currentDay = currentDate.getDay();
                //  this.timeBookingsOfWeek = timeBookings;
                //  var totalTime = 0;
                //  var days = [1, 2, 3, 4, 5, 6, 0];
                //  for (var i = 0; i < days.length; i++) {
                //    var day = days[i];
                //    var timeBookingsOfDay = this.getTimeBookingsForDay(this.timeBookingsOfWeek, day);
                //    this.weekdayDuration[day] = this.getDurationString(timeBookingsOfDay.duration);
                //    totalTime += timeBookingsOfDay.duration;
                //    if (day === currentDay) {
                //      this.timeBookingsOfDay = timeBookingsOfDay;
                //    }
                //  }
                //  this.totalDuration = this.getDurationString(totalTime);
                //});
            };
            TimeBookingController.prototype.getStartOfWeek = function (date) {
                var currentDate = moment(date);
                if (currentDate.day() === 0)
                    currentDate.add(-6, "day");
                return currentDate.startOf("day").day(1);
            };
            TimeBookingController.prototype.getWeekTimeBookingsAlreadyLoaded = function () {
                if (this.timeBookingsOfWeek == null || !this.timeBookingsOfWeek.any())
                    return false;
                var timeBooking = this.timeBookingsOfWeek.firstOrDefault();
                var timeBookingStart = this.getStartOfWeek(timeBooking.start);
                var timeBookingEnd = this.getStartOfWeek(timeBooking.stop);
                var currentDateTime = this.getStartOfWeek(this.filterHeaderDate.date);
                return currentDateTime.isSame(timeBookingStart) || currentDateTime.isSame(timeBookingEnd);
            };
            TimeBookingController.prototype.isDuplicable = function (timebooking) {
                return !this.$dcc.timeBookingDc.getIsExtraBooking(timebooking);
            };
            TimeBookingController.prototype.isSplittable = function (timebooking) {
                return !this.$dcc.timeBookingDc.getIsExtraBooking(timebooking) && !timebooking.isSignedOff;
            };
            TimeBookingController.prototype.getOpenTimeBookings = function (foreceReload, employeeId, currentDay) {
                return this.$dcc.timeBookingDc.getCurrentOpenTimeBooking(employeeId, currentDay);
            };
            TimeBookingController.prototype.getWeekTimeBookings = function (forceReload) {
                var _this = this;
                var q = this.$services.$q.defer();
                if (this.getWeekTimeBookingsAlreadyLoaded() && !forceReload) {
                    // data already loaded
                    q.resolve(this.timeBookingsOfWeek);
                    return q.promise;
                }
                // load data from repository
                this.isLoading = true;
                var params = this.getSearchParams();
                this.$dcc.timeBookingDc.search(params).then(function (data) {
                    _this.fetchAndResolveData(data).then(function (timeBookings) {
                        q.resolve(timeBookings);
                    });
                }, function () {
                    q.reject();
                });
                return q.promise;
            };
            TimeBookingController.prototype.fetchAndResolveData = function (timeBookings) {
                var _this = this;
                var enumerable = timeBookings.toEnumerable();
                var projectIds = enumerable.select(function (t) { return t.projectId; }).distinct();
                return this.$dcc.projectDc.getProjectsById(projectIds.toArray()).then(function (projects) {
                    var clientIds = projects.toEnumerable().select(function (t) { return t.clientId; }).toArray();
                    var clientsPromise = _this.$dcc.peopleDc.getClients(clientIds);
                    var employeeIds = enumerable.select(function (t) { return t.employeeId; });
                    var employeePromise = _this.$dcc.employeeDc.getByIds(employeeIds.toArray());
                    return _this.$services.$q.all([clientsPromise, employeePromise]).then(function (values) {
                        var clients = values[0];
                        var employees = values[1];
                        _this.resolveProjectData(projects, clients);
                        _this.isLoading = false;
                        return _this.resolveTimeBookingData(timeBookings, projects, employees);
                    });
                });
            };
            TimeBookingController.prototype.resolveProjectData = function (projects, clients) {
                projects.forEach(function (p) {
                    for (var i = 0; i < clients.length; ++i) {
                        if (clients[i].id === p.clientId) {
                            p.assignClient(clients[i]);
                            break;
                        }
                    }
                });
            };
            TimeBookingController.prototype.resolveTimeBookingData = function (data, projects, employees) {
                if (data != null && projects != null && employees != null) {
                    var typeMap = this.$dcc.timeEntryTypeDc.getTimeEntryTypesMap();
                    for (var i = 0; i < data.length; i++) {
                        var timeBooking = data[i];
                        var project = projects.toEnumerable().firstOrDefault(function (p) { return p.id === timeBooking.projectId; });
                        var employee = employees.toEnumerable().firstOrDefault(function (e) { return e.id === timeBooking.employeeId; });
                        var entryType = typeMap.get(timeBooking.typeId);
                        data[i].projectName = project.name;
                        data[i].employeeName = employee.firstName + " " + employee.lastName;
                        data[i].typeName = entryType.name;
                        data[i].anlageNr = project.anlageNr;
                        if (project.client) {
                            data[i].client = project.client.name;
                        }
                    }
                    return data.toEnumerable();
                }
                return null;
            };
            TimeBookingController.prototype.editTimebooking = function (timebooking) {
                this.$services.$state.go("tr.timebookings.side.edit", { id: timebooking.id, mode: 0 /* Edit */ });
            };
            TimeBookingController.prototype.duplicateTimebooking = function (timebooking) {
                this.$services.$state.go("tr.timebookings.side.edit", { id: timebooking.id, mode: 1 /* Duplicate */ });
            };
            TimeBookingController.prototype.splitTimebooking = function (timebooking) {
                this.$services.$state.go("tr.timebookings.side.edit", { id: timebooking.id, mode: 2 /* Split */ });
            };
            TimeBookingController.controllerId = "TrTimeBookingController";
            TimeBookingController.$inject = [
                "$scope",
                Web.TrServiceContainer.serviceId,
                Web.Business.DataControllerContainer.serviceId
            ];
            return TimeBookingController;
        })();
        Web.TimeBookingController = TimeBookingController;
        timeRecorder.controller(TimeBookingController.controllerId, TimeBookingController);
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        (function (ETimeBookingEditMode) {
            ETimeBookingEditMode[ETimeBookingEditMode["Edit"] = 0] = "Edit";
            ETimeBookingEditMode[ETimeBookingEditMode["Duplicate"] = 1] = "Duplicate";
            ETimeBookingEditMode[ETimeBookingEditMode["Split"] = 2] = "Split";
        })(Web.ETimeBookingEditMode || (Web.ETimeBookingEditMode = {}));
        var ETimeBookingEditMode = Web.ETimeBookingEditMode;
        var TimeBookingFormController = (function () {
            // constructor
            function TimeBookingFormController($services, $scope, timeBookingDataController, timeEntryTypeDataController, employeeDataController, projectDataController, peopleDc, authentication, $state) {
                var _this = this;
                this.$services = $services;
                this.$scope = $scope;
                this.timeBookingDataController = timeBookingDataController;
                this.timeEntryTypeDataController = timeEntryTypeDataController;
                this.employeeDataController = employeeDataController;
                this.projectDataController = projectDataController;
                this.peopleDc = peopleDc;
                this.authentication = authentication;
                this.$state = $state;
                this.drawHtml = false;
                this.copySectionRadio = "now";
                this.splitSectionRadio = "end";
                this.splitSectionHours = 0;
                this.splitSectionMinutes = 15;
                this.mode = parseInt(this.$services.$stateParams["mode"]);
                this.timeBookingId = this.$services.$stateParams["id"];
                var claim = this.isNew() ? "web_timebookings_add" : "web_timebookings_edit";
                var blockUi = this.$services.blockUi.instances.get("TimebookingsEditBlock");
                blockUi.start();
                authentication.hasClaimEnsureLoggedIn(claim).then(function (hasClaim) {
                    if (hasClaim) {
                        _this.isAdmin = authentication.hasClaim("web_timebookings_admin");
                        return _this.init();
                    }
                    else {
                        return _this.$services.$q.reject();
                    }
                }, function () {
                    _this.$state.transitionTo("tr.login");
                    return _this.$services.$q.reject();
                }).finally(function () {
                    blockUi.stop();
                    _this.drawHtml = true;
                });
                this.$services.pageLock.watchMyDirtyForm(this.$scope, "timebookingForm");
            }
            TimeBookingFormController.prototype.init = function () {
                var promises = [];
                promises.add(this.isNew() ? this.initNewTimeBooking() : this.initExistingTimeBooking());
                promises.add(this.loadTypes());
                if (this.isAdmin) {
                    promises.add(this.searchEmployee());
                }
                return this.$services.$q.all(promises);
            };
            // create new time booking
            TimeBookingFormController.prototype.initNewTimeBooking = function () {
                var _this = this;
                this.isEditable = true;
                var now = moment();
                var theDate = moment(this.$services.$stateParams["date"], "DD-MM-YYYY").hour(now.hour()).minute(now.minute()).second(now.second()).toDate();
                this.timeBooking = Web.Business.TimeBookingVm.fromDate(theDate, this.timeBookingDataController);
                this.timeBooking.stop = moment(this.timeBooking.start).add(1, "hour").toDate();
                this.timeBookingOriginal = this.timeBooking.clone();
                return this.authentication.getAppUser().then(function (au) {
                    var cm = au != null && au.person != null ? au.person : {};
                    _this.employee = new Web.Business.EmployeeVm(function () { return cm; });
                });
            };
            // edit existing time booking
            TimeBookingFormController.prototype.initExistingTimeBooking = function () {
                var _this = this;
                this.timeBooking = Web.Business.TimeBookingVm.fromDate(moment(new Date()).startOf("day").toDate(), this.timeBookingDataController);
                // load all related timebookings
                return this.timeBookingDataController.getAllTimeBookingsForId(this.timeBookingId).then(function (entries) {
                    var list = entries.toEnumerable();
                    var entry = list.firstOrDefault(function (e) { return e.id === _this.timeBookingId; });
                    _this.isExtraBooking = _this.timeBookingDataController.getIsExtraBooking(entry);
                    if (_this.isExtraBooking)
                        _this.parentTimeBooking = list.firstOrDefault(function (e) { return e.id === entry.parentId; });
                    _this.extraTimeBookings = list.where(function (e) { return e.parentId != null; }).toArray();
                    _this.timeBookingOriginal = entry.clone();
                    _this.isEditable = entry.externalWorkReportId == null;
                    _this.projectDataController.getProjectById(entry.projectId).then(function (project) {
                        _this.project = _this.copySectionProject = _this.splitSectionProject = project;
                        _this.projectDataController.search("Absenz", 0, 1).then(function (result) {
                            if (Triarc.arrayHasValues(result)) {
                                _this.splitSectionProject = result.toEnumerable().first();
                                _this.splitSectionEntryType = _this.searchedTypes.toEnumerable().first(function (t) { return t.abbreviation === "16090"; });
                            }
                        });
                    });
                    _this.employeeDataController.getByIds([entry.employeeId]).then(function (employees) { return _this.employee = employees.toEnumerable().firstOrDefault(); });
                    _this.timeEntryTypeDataController.getTypesById([entry.typeId]).then(function (types) { return _this.entryType = types.toEnumerable().firstOrDefault(); });
                    _this.timeBooking = entry;
                    _this.copySectionTime = new Date();
                    _this.copySectionDate = new Date();
                    _this.copySectionEntryType = _this.timeBookingOriginal.type;
                    _this.splitSectionTime = new Date(_this.timeBookingOriginal.start.valueOf());
                    _this.splitSectionEntryType = _this.timeBookingOriginal.type;
                });
            };
            TimeBookingFormController.prototype.isReadonly = function () {
                return this.mode !== 0 /* Edit */ && !this.isNew();
            };
            TimeBookingFormController.prototype.isDuplicating = function () {
                return this.mode === 1 /* Duplicate */;
            };
            TimeBookingFormController.prototype.isSplitting = function () {
                return this.mode === 2 /* Split */;
            };
            TimeBookingFormController.prototype.openDatepicker = function ($event) {
                $event.preventDefault();
                $event.stopPropagation();
                this.copySectionDatepickerOpened = true;
            };
            TimeBookingFormController.prototype.loadTypes = function () {
                var _this = this;
                this.searchedTypes = [];
                return this.timeEntryTypeDataController.search("", 0, 20).then(function (response) {
                    _this.searchedTypes = response;
                });
            };
            // add or edit context?
            TimeBookingFormController.prototype.isNew = function () {
                return this.timeBookingId == null;
            };
            // delete
            TimeBookingFormController.prototype.remove = function () {
                var _this = this;
                this.authentication.hasClaimEnsureLoggedIn("web_timebookings_delete").then(function (hasClaim) {
                    if (!hasClaim) {
                        _this.$state.transitionTo("tr.login");
                        return;
                    }
                    var message = _this.isExtraBooking ? "Soll die Zusatzbuchung unwiderruflich gelöscht werden?" : "Soll die Buchung inkl. allen Zusatzbuchungen unwiderruflich gelöscht werden?";
                    _this.$services.openConfirmModalLocalized(message).then(function (res) {
                        if (res) {
                            _this.timeBookingDataController.remove(_this.timeBookingId).then(function () {
                                _this.$scope.$emit(TimeBookingFormController.changeEventId);
                                _this.$state.transitionTo("tr.timebookings");
                                toastr.success("Buchung gelöscht");
                            }, function () {
                            });
                        }
                    });
                });
            };
            TimeBookingFormController.prototype.effortFilter = function (project) {
                return function (item) {
                    return angular.isObject(project) && item.effortType === project.effortType;
                };
            };
            TimeBookingFormController.prototype.searchProject = function (searchValue) {
                var _this = this;
                if (Triarc.strIsEmpty(searchValue))
                    searchValue = "";
                this.searchedProjects = [];
                this.projectDataController.search(searchValue, 0, 10).then(function (response) {
                    var clientIds = response.toEnumerable().select(function (p) { return p.clientId; }).toArray();
                    var t = _this.peopleDc.getClients(clientIds).then(function (clients) {
                        response.toEnumerable().forEach(function (proj) {
                            proj.assignClient(clients.toEnumerable().firstOrDefault(function (c) { return c.id === proj.clientId; }));
                        });
                        _this.searchedProjects = response;
                    });
                }, angular.noop);
            };
            TimeBookingFormController.prototype.searchEmployee = function (searchValue) {
                var _this = this;
                if (searchValue === void 0) { searchValue = ""; }
                if (Triarc.strIsEmpty(searchValue))
                    searchValue = "";
                this.searchedEmployees = [];
                return this.employeeDataController.search(searchValue, 0, 10).then(function (response) {
                    _this.searchedEmployees = response;
                }, angular.noop);
            };
            TimeBookingFormController.prototype.checkTimeHasChanged = function () {
                if (this.timeBooking == null)
                    return false;
                return this.timeBooking.start.getTime() !== this.timeBookingOriginal.start.getTime() || this.timeBooking.stop.getTime() !== this.timeBookingOriginal.stop.getTime();
            };
            // check if there are extra bookings that we manually changed (=unconfirmed)
            TimeBookingFormController.prototype.checkUnConfirmedExtraBookings = function () {
                var q = this.$services.$q.defer();
                if (this.isNew() || this.isExtraBooking || !this.checkTimeHasChanged()) {
                    q.resolve(false);
                    return q.promise;
                }
                return this.timeBooking.checkUnConfirmedExtraBookings();
            };
            // If 'begin' is set to true, split from the beginning, otherwise split from the end.
            TimeBookingFormController.prototype.saveSplitBeginEnd = function (begin) {
                var _this = this;
                var splittingPoint;
                if (begin) {
                    splittingPoint = moment(this.timeBookingOriginal.start).add(this.splitSectionHours, "h").add(this.splitSectionMinutes, "m");
                    this.timeBooking.start = splittingPoint.toDate();
                }
                else {
                    splittingPoint = moment(this.timeBookingOriginal.stop).subtract(this.splitSectionHours, "h").subtract(this.splitSectionMinutes, "m");
                    this.timeBooking.stop = splittingPoint.toDate();
                }
                this.timeBooking.confirmed = false;
                var splittedTimeBooking = begin ? Web.Business.TimeBookingVm.fromDate(this.timeBookingOriginal.start, this.timeBookingDataController) : Web.Business.TimeBookingVm.fromDate(this.timeBooking.stop, this.timeBookingDataController);
                splittedTimeBooking.typeId = this.splitSectionEntryType.id;
                splittedTimeBooking.projectId = this.splitSectionProject.id;
                splittedTimeBooking.employeeId = this.timeBookingOriginal.employeeId;
                splittedTimeBooking.comment = this.timeBookingOriginal.comment;
                splittedTimeBooking.confirmed = false;
                splittedTimeBooking.isDeleted = false;
                splittedTimeBooking.stop = begin ? splittingPoint.toDate() : this.timeBookingOriginal.stop;
                var savePromise = this.timeBookingDataController.saveMultiple([this.timeBooking, splittedTimeBooking], true);
                this.$services.pageLock.blockNavigation("Speichern", savePromise).then(function () {
                    _this.$scope.$emit(TimeBookingFormController.changeEventId);
                    toastr.success("Buchung gespeichert");
                    _this.$state.transitionTo("tr.timebookings");
                }, function () {
                    toastr.error(_this.$services.translate("Fehler beim Speichern"));
                });
            };
            TimeBookingFormController.prototype.validateSplitMinutes = function () {
                if (Triarc.hasNoValue(this.timeBookingOriginal))
                    return false;
                this.triggerValidation = true;
                if (this.splitSectionRadio === "timepoint") {
                    return true;
                }
                else {
                    return moment(this.timeBookingOriginal.start).add(this.splitSectionHours, "h").add(this.splitSectionMinutes, "m").isBefore(moment(this.timeBookingOriginal.stop));
                }
            };
            TimeBookingFormController.prototype.saveTimebookingsAndClose = function (timebookings, calculateExtraBookings) {
                var _this = this;
                var savePromise = this.timeBookingDataController.saveMultiple(timebookings, calculateExtraBookings);
                this.$services.pageLock.blockNavigation("Speichern", savePromise).then(function () {
                    _this.$scope.$emit(TimeBookingFormController.changeEventId);
                    toastr.success("Buchung gespeichert");
                    _this.$state.transitionTo("tr.timebookings");
                }, function () {
                    toastr.error(_this.$services.translate("Fehler beim Speichern"));
                });
            };
            TimeBookingFormController.prototype.saveSplitTimepoint = function () {
                // We need to split in the middle - only, if our we do not exceed current booking. In this case, we create one timebooking and update the other one.
                var splittingSpanStart = moment(this.splitSectionTime);
                var splittingSpanStop = moment(this.splitSectionTime).add(this.splitSectionHours, "h").add(this.splitSectionMinutes, "h");
                if (splittingSpanStop.isAfter(moment(this.timeBookingOriginal.stop).endOf("d")))
                    splittingSpanStop = moment(this.timeBookingOriginal.stop).endOf("d");
                // Make the original timebooking smaller.
                this.timeBooking.stop = splittingSpanStart.toDate();
                this.timeBooking.confirmed = false;
                var timeBookingMiddle = Web.Business.TimeBookingVm.fromDate(splittingSpanStart.toDate(), this.timeBookingDataController);
                timeBookingMiddle.typeId = this.splitSectionEntryType.id;
                timeBookingMiddle.projectId = this.splitSectionProject.id;
                timeBookingMiddle.employeeId = this.timeBookingOriginal.employeeId;
                timeBookingMiddle.comment = this.timeBookingOriginal.comment;
                timeBookingMiddle.confirmed = false;
                timeBookingMiddle.isDeleted = false;
                timeBookingMiddle.stop = new Date(splittingSpanStop.valueOf());
                if (splittingSpanStop.isBefore(moment(this.timeBookingOriginal.stop))) {
                    var timeBookingEnd = Web.Business.TimeBookingVm.fromDate(splittingSpanStop.toDate(), this.timeBookingDataController);
                    timeBookingEnd.typeId = this.timeBookingOriginal.typeId;
                    timeBookingEnd.projectId = this.timeBookingOriginal.projectId;
                    timeBookingEnd.employeeId = this.timeBookingOriginal.employeeId;
                    timeBookingEnd.comment = this.timeBookingOriginal.comment;
                    timeBookingEnd.confirmed = false;
                    timeBookingEnd.isDeleted = false;
                    timeBookingEnd.stop = new Date(this.timeBookingOriginal.stop.valueOf());
                    this.saveTimebookingsAndClose([this.timeBooking, timeBookingMiddle, timeBookingEnd], true);
                }
                else {
                    this.saveTimebookingsAndClose([this.timeBooking, timeBookingMiddle], true);
                }
            };
            TimeBookingFormController.prototype.saveSplit = function () {
                this.triggerValidation = true;
                if (this.$scope.timebookingForm.$invalid) {
                    return;
                }
                if (this.splitSectionRadio === "begin")
                    this.saveSplitBeginEnd(true);
                else if (this.splitSectionRadio === "end")
                    this.saveSplitBeginEnd(false);
                else
                    (this.saveSplitTimepoint());
            };
            TimeBookingFormController.prototype.saveDuplicate = function () {
                this.triggerValidation = true;
                if (this.$scope.timebookingForm.$invalid) {
                    return;
                }
                if (this.copySectionRadio === "now") {
                    this.copySectionDate = new Date();
                    this.copySectionTime = new Date();
                }
                var momentTime = moment(this.copySectionTime);
                var timeBooking = Web.Business.TimeBookingVm.fromDate(moment(this.copySectionDate).hour(momentTime.hour()).minute(momentTime.minute()).second(momentTime.second()).toDate(), this.timeBookingDataController);
                timeBooking.typeId = this.copySectionEntryType.id;
                timeBooking.projectId = this.copySectionProject.id;
                timeBooking.employeeId = this.timeBookingOriginal.employeeId;
                timeBooking.comment = this.timeBookingOriginal.comment;
                timeBooking.confirmed = false;
                timeBooking.isDeleted = false;
                var stop = moment(timeBooking.start).add(moment.duration(moment(this.timeBookingOriginal.stop).diff(moment(this.timeBooking.start))));
                var maxStop = moment(timeBooking.start).endOf("d");
                if (stop.isAfter(maxStop))
                    stop = maxStop;
                timeBooking.stop = stop.toDate();
                this.saveTimebookingsAndClose([timeBooking], true);
            };
            TimeBookingFormController.prototype.confirmSave = function () {
                var _this = this;
                this.triggerValidation = true;
                if (this.$scope.timebookingForm.$invalid) {
                    return;
                }
                // if we save an extra booking, always set the confirmed value to false to indicate a manual change..
                // if we save a booking which was already confirmed, unconfirm it
                var isConfirmed = this.timeBooking == null || this.isExtraBooking ? false : (this.timeBookingOriginal.confirmed ? false : this.timeBooking.confirmed);
                var timeBooking = this.timeBooking != null ? this.timeBooking : {};
                timeBooking.employeeId = this.employee.id;
                timeBooking.projectId = this.project.id;
                timeBooking.typeId = this.entryType.id;
                timeBooking.confirmed = isConfirmed;
                var overlap = this.timeBookingDataController.bookingOverlaps(timeBooking);
                if (overlap) {
                    // we have an overlap of time so warn before save
                    this.$services.openConfirmModalLocalized("In dieser Zeitspanne besteht bereits eine Buchung. Wollen Sie fortfahren?", "Achtung").then(function (proceed) {
                        if (proceed) {
                            _this.performCheckUnConfirmedExtraBookings(timeBooking);
                        }
                        else {
                            return;
                        }
                    });
                }
                else {
                    this.performCheckUnConfirmedExtraBookings(timeBooking);
                }
            };
            TimeBookingFormController.prototype.performCheckUnConfirmedExtraBookings = function (timeBooking) {
                var _this = this;
                this.checkUnConfirmedExtraBookings().then(function (unconfirmedExtraBookings) {
                    if (unconfirmedExtraBookings) {
                        _this.$services.openConfirmModalLocalized("Eine oder mehrere Zusatzbuchungen wurden manuell bearbeitet und werden beim Speichern der Buchung überschrieben. Möchten Sie fortfahren?").then(function (res) {
                            if (!res) {
                                return;
                            }
                            else {
                                _this.save(timeBooking);
                            }
                        });
                    }
                    else {
                        _this.save(timeBooking);
                    }
                });
            };
            // save
            TimeBookingFormController.prototype.save = function (timeBooking) {
                var _this = this;
                // if we save an extra booking, get the parent and unconfirm it..
                if (this.parentTimeBooking != null) {
                    this.parentTimeBooking.confirmed = false;
                    var saveParentsPromise = this.timeBookingDataController.saveMultiple([this.parentTimeBooking], false);
                    this.$services.pageLock.blockNavigation("Speichern", saveParentsPromise).then(function () {
                        _this.saveTimebookingsAndClose([timeBooking], _this.checkTimeHasChanged());
                    }, function () {
                    });
                }
                else {
                    this.saveTimebookingsAndClose([timeBooking], this.checkTimeHasChanged());
                }
            };
            TimeBookingFormController.prototype.close = function () {
                this.timeBooking.start = this.timeBookingOriginal.start;
                this.timeBooking.stop = this.timeBookingOriginal.stop;
            };
            TimeBookingFormController.prototype.timeIsOverlappingExtraBookings = function (date) {
                if (!Triarc.arrayHasValues(this.extraTimeBookings))
                    return false;
                for (var i = 0; i < this.extraTimeBookings.length; i++) {
                    var extraBooking = this.extraTimeBookings[i];
                    if (extraBooking.id === this.timeBooking.id)
                        continue;
                    if (date > extraBooking.start && date < extraBooking.stop)
                        return true;
                }
                return false;
            };
            // validation: extra booking's start can't overlap other extra bookings
            TimeBookingFormController.prototype.validateStartTimeOverlapping = function () {
                if (this.timeBooking.parentId != null) {
                    return !this.timeIsOverlappingExtraBookings(this.timeBooking.start);
                }
                return true;
            };
            // validation: extra booking's stop can't overlap other extra bookings
            TimeBookingFormController.prototype.validateStopTimeOverlapping = function () {
                if (this.timeBooking.parentId != null) {
                    return !this.timeIsOverlappingExtraBookings(this.timeBooking.stop);
                }
                return true;
            };
            // validation: an extra booking's start time can't fall below the parent's start time
            TimeBookingFormController.prototype.validateStartTime = function () {
                if (this.timeBooking.parentId != null) {
                    return (this.timeBooking.start >= this.parentTimeBooking.start && this.timeBooking.start !== this.parentTimeBooking.start);
                }
                return true;
            };
            // validation: a booking can't start after the stop time
            TimeBookingFormController.prototype.validateStopTime = function () {
                return this.timeBooking.stop > this.timeBooking.start && this.timeBooking.stop != this.timeBooking.start;
            };
            // validation: an extra booking's stop time can't exceed the parent's stop time
            TimeBookingFormController.prototype.validateStopWithin = function () {
                if (this.parentTimeBooking != null)
                    return this.timeBooking.stop <= this.parentTimeBooking.stop;
                return true;
            };
            TimeBookingFormController.controllerId = "TrTimeBookingFormController";
            TimeBookingFormController.changeEventId = "$TimeBookingFormControllerChangeEvent";
            TimeBookingFormController.$inject = [
                Web.TrServiceContainer.serviceId,
                "$scope",
                Web.Business.TimeBookingDataController.serviceId,
                Web.Business.TimeEntryTypeDataController.serviceId,
                Web.Business.EmployeeDataController.serviceId,
                Web.Business.ProjectDataController.serviceId,
                Web.Business.PeopleDataController.serviceId,
                "trAuthenticationService",
                "$state"
            ];
            return TimeBookingFormController;
        })();
        Web.TimeBookingFormController = TimeBookingFormController;
        timeRecorder.controller(TimeBookingFormController.controllerId, TimeBookingFormController);
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var ProjectController = (function () {
            function ProjectController(project, $proxy, notification) {
                this.project = project;
                this.$proxy = $proxy;
                this.notification = notification;
                this.inheritedPersons = [];
                this.inheritedLocations = [];
                this.persons = [];
                this.locations = [];
                this.personCandidates = [];
                this.locationCandidates = [];
                this.init();
            }
            ProjectController.prototype.init = function () {
                var _this = this;
                this.project.init();
                this.project.loadProjectLocations().then(function (l) {
                    _this.locations = l;
                }, function () {
                });
                this.project.loadProjectPersons().then(function (p) {
                    _this.persons = p;
                }, function () {
                });
                this.$proxy.Admin.webServiceAvailable().then(function (response) {
                    _this.webServiceAvailable = response.data;
                }, function () {
                    _this.webServiceAvailable = false;
                });
            };
            ProjectController.prototype.triggerProjectImport = function () {
                var _this = this;
                var toast = this.notification.persistentInfo("Jobdaten werden importiert");
                this.$proxy.Admin.triggerProjectImport().then(function (response) {
                    if (response.data) {
                        _this.notification.info("Job aktualisiert");
                    }
                    else {
                        _this.notification.error("Fehler beim Aktualisieren der Jobdaten");
                    }
                }, function () {
                    _this.notification.error("Fehler beim Aktualisieren der Jobdaten");
                }).finally(function () {
                    _this.notification.clearToastr(toast);
                    _this.project.startSearch();
                });
            };
            ProjectController.prototype.changeDescription = function () {
                this.editMode = true;
            };
            ProjectController.prototype.saveDescription = function () {
                var _this = this;
                this.project.changeDescription(this.selectedNode.id, this.selectedNode.description).then(function () {
                    _this.editMode = false;
                }, function () {
                });
            };
            ProjectController.prototype.cancelEditDescription = function () {
                this.editMode = false;
            };
            ProjectController.prototype.personAdded = function (person) {
                this.selectedNode.persons.add(person);
                this.project.changePersonAssignement(this.selectedNode.id, person.personId, true);
                this.mergePersons.push(person);
            };
            ProjectController.prototype.personRemoved = function (person) {
                var c = this.selectedNode.persons.length;
                var ind = -1;
                for (var i = 0; i < c; ++i) {
                    if (this.selectedNode.persons[i].personId === person.personId) {
                        ind = i;
                        break;
                    }
                }
                if (ind > -1)
                    this.selectedNode.persons.splice(ind, 1);
                this.project.changePersonAssignement(this.selectedNode.id, person.personId, false);
                for (var j = 0; j < this.mergePersons.length; ++j) {
                    if (this.mergePersons[j].personId === person.personId) {
                        ind = j;
                        break;
                    }
                }
                if (ind > -1)
                    this.mergePersons.splice(ind, 1);
                //this.updateMergePersonList();
            };
            ProjectController.prototype.locationAdded = function (location) {
                this.selectedNode.locations.add(location);
                this.project.changeLocationAssignement(this.selectedNode.id, location.locationId, true);
                this.mergeLocations.push(location);
            };
            ProjectController.prototype.locationRemoved = function (location) {
                var l = this.selectedNode.locations.length;
                var ind = -1;
                for (var i = 0; i < l; ++i) {
                    if (this.selectedNode.locations[i].locationId === location.locationId) {
                        ind = i;
                        break;
                    }
                }
                if (ind > -1)
                    this.selectedNode.locations.splice(ind, 1);
                this.project.changeLocationAssignement(this.selectedNode.id, location.locationId, false);
                for (var j = 0; j < this.mergeLocations.length; ++j) {
                    if (this.mergeLocations[j].locationId === location.locationId) {
                        ind = j;
                        break;
                    }
                }
                if (ind > -1)
                    this.mergeLocations.splice(ind, 1);
                //this.updateMergeLocationList();
            };
            ProjectController.prototype.setFlag = function (project, flag) {
                this.project.updateFlag(project, flag);
            };
            ProjectController.prototype.select = function (node) {
                this.selectedNode = node;
                this.showForm = true;
                this.showFlags = !!node.parent || !node.hasChildren;
                this.inheritedLocations = this.getAllLocations(node);
                this.inheritedPersons = this.getAllPersons(node);
                this.setLocationCandidates();
                this.setPersonCandidates();
                this.currentLocations = this.getCurrentLocations(this.selectedNode.locations);
                this.currentPersons = this.getCurrentPersons(this.selectedNode.persons);
                this.updateMergeLocationList();
                this.updateMergePersonList();
            };
            ProjectController.prototype.setLocationCandidates = function () {
                var _this = this;
                this.locationCandidates = [];
                this.locations.forEach(function (l) {
                    var add = true;
                    for (var i = 0; i < _this.inheritedLocations.length; ++i) {
                        if (_this.inheritedLocations[i].locationId === l.locationId) {
                            add = false;
                            break;
                        }
                    }
                    if (add)
                        _this.locationCandidates.push(l);
                });
            };
            ProjectController.prototype.setPersonCandidates = function () {
                var _this = this;
                this.personCandidates = [];
                this.persons.forEach(function (l) {
                    var add = true;
                    for (var i = 0; i < _this.inheritedPersons.length; ++i) {
                        if (_this.inheritedPersons[i].personId === l.personId) {
                            add = false;
                            break;
                        }
                    }
                    if (add)
                        _this.personCandidates.push(l);
                });
            };
            ProjectController.prototype.getCurrentPersons = function (persons) {
                var _this = this;
                var res = [];
                persons.forEach(function (p) {
                    for (var i = 0; i < _this.persons.length; ++i) {
                        if (_this.persons[i].personId === p.personId) {
                            res.push(_this.persons[i]);
                            break;
                        }
                    }
                });
                return res;
            };
            ProjectController.prototype.getCurrentLocations = function (locations) {
                var _this = this;
                var res = [];
                locations.forEach(function (l) {
                    for (var i = 0; i < _this.locations.length; ++i) {
                        if (_this.locations[i].locationId === l.locationId) {
                            res.push(_this.locations[i]);
                            break;
                        }
                    }
                });
                return res;
            };
            ProjectController.prototype.updateMergeLocationList = function () {
                var _this = this;
                this.mergeLocations = [];
                this.inheritedLocations.forEach(function (l) { return _this.mergeLocations.push(l); });
                for (var i = 0; i < this.currentLocations.length; ++i) {
                    var add = true;
                    for (var j = 0; j < this.mergeLocations.length; ++j) {
                        if (this.currentLocations[i].locationId === this.mergeLocations[j].locationId) {
                            add = false;
                            break;
                        }
                    }
                    if (add)
                        this.mergeLocations.push(this.currentLocations[i]);
                }
            };
            ProjectController.prototype.updateMergePersonList = function () {
                var _this = this;
                this.mergePersons = [];
                this.inheritedPersons.forEach(function (p) { return _this.mergePersons.push(p); });
                for (var i = 0; i < this.currentPersons.length; ++i) {
                    var add = true;
                    for (var j = 0; j < this.mergePersons.length; ++j) {
                        if (this.currentPersons[i].personId === this.mergePersons[j].personId) {
                            add = false;
                            break;
                        }
                    }
                    if (add)
                        this.mergePersons.push(this.currentPersons[i]);
                }
            };
            ProjectController.prototype.getAllPersons = function (project) {
                var people = [];
                if (project.explicit)
                    return people;
                var cur = project;
                while (cur.parent) {
                    cur = cur.parent;
                    people.addRange(cur.persons);
                }
                return people;
            };
            ProjectController.prototype.getAllLocations = function (project) {
                var locations = [];
                if (project.explicit)
                    return locations;
                var cur = project;
                while (cur.parent) {
                    cur = cur.parent;
                    locations.addRange(cur.locations);
                }
                return locations;
            };
            ProjectController.prototype.handleFlag = function (project, flag) {
                if (flag === 1) {
                    project.bookable = !project.bookable;
                }
                else if (flag === 2) {
                    project.explicit = !project.explicit;
                }
                else if (flag === 4) {
                    project.planningUnit = !project.planningUnit;
                }
                return (project.bookable ? 1 : 0) | (project.explicit ? 2 : 0) | (project.planningUnit ? 4 : 0);
            };
            ProjectController.controllerId = "TrProjectController";
            ProjectController.$inject = [Web.ProjectService.serviceId, "$tr-proxy", Web.NotificationServce.serviceId];
            return ProjectController;
        })();
        Web.ProjectController = ProjectController;
        var SelectLocation = (function () {
            function SelectLocation(model) {
                this.locationId = model.locationId;
                this.name = model.name;
            }
            SelectLocation.prototype.getId = function () {
                return this.locationId;
            };
            SelectLocation.prototype.getValue = function () {
                return this.name;
            };
            SelectLocation.convert = function (data) {
                var res = [];
                for (var i = 0; i < data.length; ++i) {
                    res.push(new SelectLocation(data[i]));
                }
                return res;
            };
            return SelectLocation;
        })();
        Web.SelectLocation = SelectLocation;
        var SelectPerson = (function () {
            function SelectPerson(model) {
                this.personId = model.personId;
                this.name = model.name;
            }
            SelectPerson.prototype.getId = function () {
                return this.personId;
            };
            SelectPerson.prototype.getValue = function () {
                return this.name;
            };
            SelectPerson.convert = function (data) {
                var res = [];
                for (var i = 0; i < data.length; ++i) {
                    res.push(new SelectPerson(data[i]));
                }
                return res;
            };
            return SelectPerson;
        })();
        Web.SelectPerson = SelectPerson;
        timeRecorder.controller(ProjectController.controllerId, ProjectController);
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var ExpensesController = (function () {
            function ExpensesController($scope, $notifications, $expensesDataController, $expenseTypeDataController, $services) {
                var _this = this;
                this.$scope = $scope;
                this.$notifications = $notifications;
                this.$expensesDataController = $expensesDataController;
                this.$expenseTypeDataController = $expenseTypeDataController;
                this.$services = $services;
                // current search result
                this.searchResult = [];
                this.model = {
                    targetingMode: false,
                    date: new Date()
                };
                this.expenseTypesMap = new Map();
                // whenver user selects an expense to target, it gets added to this map, with its id as key. Only candidates are in this map.
                this.targeted = new Map();
                this.getEntryPerDay = function (day) {
                    if (Triarc.hasNoValue(_this.searchResult) || Triarc.hasNoValue(_this.searchResult[day]))
                        return 0;
                    return _this.searchResult[day].length;
                };
                var authPromise = this.$services.$auth.hasClaimEnsureLoggedIn("web_expenses").then(function (hasClaim) {
                    if (!hasClaim) {
                        _this.$notifications.info("Unauthorized access.");
                        throw "Unauthorized access.";
                    }
                });
                var userIdPromise = this.$services.$auth.getAppUser().then(function (appUser) {
                    if (Triarc.hasValue(appUser.person))
                        _this.appUserId = appUser.person.id;
                });
                var expenseTypesPromise = this.$expenseTypeDataController.getAllExpenseTypes().then(function (expenseTypes) {
                    expenseTypes.forEach(function (et) {
                        _this.expenseTypesMap.set(et.id, et);
                    });
                });
                var promises = [authPromise, userIdPromise, expenseTypesPromise];
                this.$services.$q.all(promises).then(function () {
                    _this.init();
                }, function () {
                    _this.$notifications.info("Server error.");
                    _this.$services.$state.transitionTo("tr.login");
                });
            }
            // init view
            ExpensesController.prototype.init = function () {
                var _this = this;
                var dateParam = this.$services.$state.params["date"];
                if (Triarc.hasValue(dateParam)) {
                    this.model.date = dateParam;
                }
                this.$scope.$watch("ctrl.model.date", function () {
                    _this.search(false);
                }, true);
                var date = this.$services.$state.params["date"];
                if (Triarc.hasValue(date)) {
                    this.model.date = date;
                }
                this.$scope.$on("$stateChangeSuccess", function (event, toState, _, fromState) {
                    if (toState.name !== "tr.expenses")
                        return;
                    if (fromState.name === "tr.expenses.side.add" || fromState.name === "tr.expenses.side.edit") {
                        var date = _this.$services.$state.params["date"];
                        if (Triarc.hasValue(date)) {
                            _this.model.date = date;
                        }
                        _this.search(true);
                    }
                });
            };
            ExpensesController.prototype.isTargetCandidate = function (entry) {
                return this.targeted.has(entry.id);
            };
            ExpensesController.prototype.toggleTargetCandidature = function (entry) {
                if (this.targeted.has(entry.id))
                    this.targeted.delete(entry.id);
                else
                    this.targeted.set(entry.id, entry);
            };
            ExpensesController.prototype.isTargeted = function (entry) {
                return Triarc.hasValue(entry.visaEmployeeId);
            };
            ExpensesController.prototype.getExpenseTypeName = function (entry) {
                var expenseType = this.expenseTypesMap.get(entry.expenseTypeId);
                if (angular.isObject(expenseType))
                    return expenseType.name;
                return "";
            };
            ExpensesController.prototype.getValue = function (entry) {
                var expenseType = this.expenseTypesMap.get(entry.expenseTypeId);
                if (Triarc.hasValue(expenseType) && !expenseType.amountBased) {
                    var val = this.$services.$filter("number")(entry.value, 2);
                    return "CHF " + val;
                }
                if (Triarc.strNotEmpty(expenseType.unitOfMeasure))
                    return "" + entry.value + " " + expenseType.unitOfMeasure;
                return entry.value.toString();
            };
            ExpensesController.prototype.refreshDisplayedExpenses = function () {
                this.displayedExpenses = this.searchResult[this.model.date.getDay()];
            };
            // search. Ask server for new results if the week changed, otherwise just change displayed results.
            ExpensesController.prototype.search = function (force) {
                var _this = this;
                var monday = moment(this.model.date);
                if (monday.day() === 0)
                    monday.day(-6);
                else
                    monday.day(1);
                monday.startOf("d");
                var sunday = monday.clone().add(7, "d");
                // If we already have the results in the memory, just do nothing.
                if (!force && Triarc.hasValue(this.searchFrom) && monday.toDate().getTime() === this.searchFrom.getTime()) {
                    this.refreshDisplayedExpenses();
                    return;
                }
                this.searchFrom = monday.toDate();
                //this.appUserId will be undefined if we are not logged in as an employee - in this case we will just fetch all the expenses (as an admin).
                this.$expensesDataController.search(0, 100, this.searchFrom, sunday.toDate(), this.appUserId).then(function (expenses) {
                    for (var dayStart = monday.clone(); dayStart < sunday; dayStart.add(1, "d")) {
                        var dayEndDate = dayStart.clone().add(1, "d").toDate();
                        var dayStartDate = dayStart.toDate();
                        var dayNumber = dayStartDate.getDay();
                        _this.searchResult[dayNumber] = expenses.toEnumerable().where(function (e) { return e.date < dayEndDate && e.date >= dayStartDate; }).toArray();
                    }
                    _this.refreshDisplayedExpenses();
                });
            };
            ExpensesController.prototype.addButtonCallback = function () {
                this.$services.$state.go("tr.expenses.side.add", {
                    initialDate: this.model.date
                });
            };
            ExpensesController.prototype.okButtonCallback = function () {
            };
            ExpensesController.prototype.getTotalEntries = function () {
                return this.searchResult.toEnumerable().sum(function (expenses) { return expenses.length; });
            };
            ExpensesController.prototype.editEntry = function (entry) {
                if (!this.model.targetingMode && !this.isTargeted(entry))
                    this.$services.$state.go("tr.expenses.side.edit", { id: entry.id });
            };
            ExpensesController.prototype.targetStartButtonCallback = function () {
                this.targeted.clear();
            };
            ExpensesController.prototype.targetConfirmButtonCallback = function () {
                var _this = this;
                // If no values are targetted, do nothing.
                if (!Triarc.arrayHasValues(this.targeted.getValues())) {
                    this.model.targetingMode = false;
                    this.targeted.clear();
                    return;
                }
                var blockUi = this.$services.blockUi.instances.get("expensesBlock");
                blockUi.start();
                this.$expensesDataController.targetExpenses(this.targeted.getValues()).then(function () {
                    _this.model.targetingMode = false;
                    _this.targeted.clear();
                    _this.$notifications.info(_this.$services.translate("Spesen erfolgreich übermittelt."));
                    _this.search(true);
                }, function () {
                    _this.$notifications.error(_this.$services.translate("Spesen wurden nicht übermittelt."));
                }).finally(function () {
                    blockUi.stop();
                });
            };
            ExpensesController.controllerId = "TrExpensesController";
            ExpensesController.$inject = [
                "$scope",
                Web.NotificationServce.serviceId,
                Web.Business.ExpenseDataController.serviceId,
                Web.Business.ExpenseTypeDataController.serviceId,
                Web.TrServiceContainer.serviceId
            ];
            return ExpensesController;
        })();
        Web.ExpensesController = ExpensesController;
        timeRecorder.controller(ExpensesController.controllerId, ExpensesController);
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var ExpensesFormController = (function () {
            // constructor
            function ExpensesFormController($scope, $q, $expenseTypeDataController, $expenseDataController, $authentication, $state, $stateParams, $services) {
                var _this = this;
                this.$scope = $scope;
                this.$q = $q;
                this.$expenseTypeDataController = $expenseTypeDataController;
                this.$expenseDataController = $expenseDataController;
                this.$authentication = $authentication;
                this.$state = $state;
                this.$stateParams = $stateParams;
                this.$services = $services;
                this.isSearchingProjects = false;
                this.datepickerOpened = false;
                this.expenseDate = new Date();
                this.expenseDescription = "";
                this.idValue = this.$stateParams["id"];
                var authPromise = $authentication.hasClaimEnsureLoggedIn("web_expenses").then(function (hasClaim) {
                    if (!hasClaim)
                        throw "Unauthorized access.";
                });
                var userIdPromise = $authentication.getAppUser().then(function (appUser) {
                    _this.appUserId = appUser.person.id;
                });
                var expenseTypesPromise = this.$expenseTypeDataController.getAllExpenseTypes().then(function (expenseTypes) {
                    _this.expenseTypes = expenseTypes;
                    var lunchExpense = _this.expenseTypes.toEnumerable().firstOrDefault(function (et) { return et.name === "Mittagessen"; });
                    if (Triarc.hasValue(lunchExpense)) {
                        _this.selectedExpenseType = lunchExpense;
                        _this.expenseAmount = 1;
                    }
                });
                var promises = [authPromise, userIdPromise, expenseTypesPromise];
                if (!this.isNew()) {
                    var editedExpensePromise = this.$expenseDataController.getExpenseById(this.idValue).then(function (expenseVm) {
                        _this.editedExpense = expenseVm;
                    });
                    promises.push(editedExpensePromise);
                }
                else {
                    this.expenseDate = this.$state.params["initialDate"];
                }
                this.$q.all(promises).then(function () {
                    _this.init();
                }, function () {
                    _this.$state.go("^.^");
                });
                this.$services.pageLock.watchMyDirtyForm(this.$scope, "expensesForm");
            }
            // init view
            ExpensesFormController.prototype.init = function () {
                var _this = this;
                if (!this.isNew()) {
                    this.expenseDate = this.editedExpense.date;
                    this.expenseAmount = this.editedExpense.value;
                    this.selectedExpenseType = this.expenseTypes.toEnumerable().single(function (et) { return et.id === _this.editedExpense.expenseTypeId; });
                    this.expenseDescription = this.editedExpense.description;
                }
                this.$scope.$watch("ctrl.selectedExpenseType", function (newVal, oldVal) {
                    if (oldVal !== newVal && angular.isDefined(newVal)) {
                        if (newVal.amountBased) {
                            _this.expenseAmount = 1;
                        }
                        else {
                            _this.expenseAmount = null;
                        }
                    }
                });
            };
            ExpensesFormController.prototype.isDisabled = function () {
                return !Triarc.hasValue(this.selectedExpenseType);
            };
            ExpensesFormController.prototype.openDatepicker = function ($event) {
                $event.preventDefault();
                $event.stopPropagation();
                this.datepickerOpened = true;
            };
            // add or edit context?
            ExpensesFormController.prototype.isNew = function () {
                return this.idValue == null;
            };
            ExpensesFormController.prototype.getAmountLabel = function () {
                if (Triarc.hasValue(this.selectedExpenseType)) {
                    if (this.selectedExpenseType.amountBased) {
                        return "Anzahl";
                    }
                    else {
                        return "CHF";
                    }
                }
                else
                    return "";
            };
            ExpensesFormController.prototype.isAmountValid = function (val) {
                if (angular.isNumber(val)) {
                    if (this.selectedExpenseType.amountBased) {
                        return Math.round(val) === val;
                    }
                    else {
                        // expense is money based.
                        return this.decimalPlaces(val) <= 2;
                    }
                }
                return true;
            };
            // from http://stackoverflow.com/a/9539746
            ExpensesFormController.prototype.decimalPlaces = function (n) {
                // Make sure it is a number and use the builtin number -> string.
                var s = "" + +n;
                // Pull out the fraction and the exponent.
                var match = /(?:\.(\d+))?(?:[eE]([+\-]?\d+))?$/.exec(s);
                // NaN or Infinity or integer.
                // We arbitrarily decide that Infinity is integral.
                if (!match) {
                    return 0;
                }
                // Count the number of digits in the fraction and subtract the
                // exponent to simulate moving the decimal point left by exponent places.
                // 1.234e+2 has 1 fraction digit and '234'.length -  2 == 1
                // 1.234e-2 has 5 fraction digit and '234'.length - -2 == 5
                return Math.max(0, (match[1] === "0" ? 0 : (match[1] || "").length) - (match[2] || 0)); // exponent
            };
            ExpensesFormController.prototype.save = function () {
                var _this = this;
                this.triggerValidation = true;
                if (this.$scope.expensesForm.$invalid) {
                    return;
                }
                var expenseVm;
                if (this.isNew()) {
                    var expenseCm = {
                        id: Triarc.generateGuid(),
                        description: this.expenseDescription,
                        employeeId: this.appUserId,
                        date: this.expenseDate,
                        timestamp: new Date().getTime(),
                        value: this.expenseAmount,
                        expenseTypeId: this.selectedExpenseType.id,
                        externalId: "",
                        errorMessage: ""
                    };
                    expenseVm = new Web.Business.ExpenseVm(function () { return expenseCm; });
                }
                else {
                    this.editedExpense.description = this.expenseDescription;
                    this.editedExpense.expenseTypeId = this.selectedExpenseType.id;
                    this.editedExpense.date = this.expenseDate;
                    this.editedExpense.value = this.expenseAmount;
                    expenseVm = this.editedExpense;
                }
                var savePromise = this.$expenseDataController.addOrUpdateExpense(expenseVm);
                this.$services.pageLock.blockNavigation("Speichern", savePromise).then(function () {
                    toastr.success(_this.$services.translate("Gespeichert"));
                    _this.$state.transitionTo("tr.expenses", {
                        date: _this.expenseDate
                    });
                }, function () {
                    toastr.error(_this.$services.translate("Fehler beim Speichern"));
                });
            };
            ExpensesFormController.prototype.remove = function () {
                var _this = this;
                this.$expenseDataController.delete(this.idValue).then(function () {
                    _this.$state.transitionTo("tr.expenses", {
                        date: _this.expenseDate
                    });
                });
            };
            ExpensesFormController.controllerId = "TrExpensesFormController";
            ExpensesFormController.$inject = [
                "$scope",
                "$q",
                Web.Business.ExpenseTypeDataController.serviceId,
                Web.Business.ExpenseDataController.serviceId,
                "trAuthenticationService",
                "$state",
                "$stateParams",
                Web.TrServiceContainer.serviceId
            ];
            return ExpensesFormController;
        })();
        Web.ExpensesFormController = ExpensesFormController;
        timeRecorder.controller(ExpensesFormController.controllerId, ExpensesFormController);
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var TimeBookingSideController = (function () {
            function TimeBookingSideController($state) {
                this.$state = $state;
            }
            TimeBookingSideController.prototype.close = function () {
                this.$state.go('tr.timebookings');
            };
            TimeBookingSideController.$inject = ['$state'];
            TimeBookingSideController.controllerId = "TrTimeBookingSideController";
            return TimeBookingSideController;
        })();
        Web.TimeBookingSideController = TimeBookingSideController;
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
timeRecorder.controller(TimeRecorder.Web.TimeBookingSideController.controllerId, TimeRecorder.Web.TimeBookingSideController);
// Update the most local relative references and declare this controller.
// Install the angularjs.TypeScript.DefinitelyTyped NuGet package to resolve the .d.ts reference paths,
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var TimeSheetController = (function () {
            function TimeSheetController($scope, blockUi, $proxy, $timeSheetDataController, $projectDataController, authentication, $state, notification) {
                var _this = this;
                this.$scope = $scope;
                this.blockUi = blockUi;
                this.$proxy = $proxy;
                this.$timeSheetDataController = $timeSheetDataController;
                this.$projectDataController = $projectDataController;
                this.authentication = authentication;
                this.$state = $state;
                this.notification = notification;
                this.isSearchingProjects = false;
                this.datePickerStates = {
                    "opened1": false,
                    "opened2": false
                };
                this.datePickerOptions = {
                    dateDisabled: "day",
                    datepickerMode: "month"
                };
                this.init = function () {
                    _this.timesheetData = new Web.TimesheetData();
                    _this.$proxy.Admin.webServiceAvailable().then(function (response) {
                        _this.webServiceAvailable = response.data;
                    }, function () {
                        _this.webServiceAvailable = false;
                    });
                };
                this.triggerPlanDataImport = function () {
                    _this.$proxy.Planning.importPlanning().then(function (response) {
                        _this.notification.info("Plandaten aktualisiert");
                    }, function () {
                        _this.notification.error("Fehler beim Aktualisieren der Plandaten");
                    });
                };
                this.triggerAbsenceSync = function () {
                    _this.$proxy.Timesheet.syncAllAbsences().then(function (response) {
                        _this.notification.info("Absenzdaten aktualisiert");
                    }, function () {
                        _this.notification.error("Fehler beim Aktualisieren der Absenzdaten");
                    });
                };
                authentication.hasClaimEnsureLoggedIn("web_timesheet").then(function (hasClaim) {
                    if (hasClaim) {
                        _this.init();
                    }
                    else
                        _this.$state.transitionTo("tr.login");
                }, function () {
                    _this.$state.transitionTo("tr.login");
                });
            }
            ////
            // Serches projects through the ui-select item on the view
            ////
            TimeSheetController.prototype.searchProjects = function (searchValue) {
                var _this = this;
                if (Triarc.strNotEmpty(searchValue)) {
                    this.isSearchingProjects = true;
                    this.searchedProjects = [];
                    this.$projectDataController.search(searchValue, 0, 10).then(function (response) {
                        _this.searchedProjects = response;
                        _this.isSearchingProjects = false;
                    }, angular.noop);
                }
            };
            ////
            // Loads the data using the search crtiera 
            ////
            TimeSheetController.prototype.tryLoadData = function () {
                var _this = this;
                if (Triarc.hasValue(this.selectedProject) && Triarc.hasValue(this.selectedDate)) {
                    var blockUi = this.blockUi.instances.get("timesheetGrid");
                    blockUi.start();
                    this.timesheetData.timesheet = null;
                    var monthOfStart = moment(this.selectedDate).startOf("month").toDate();
                    var endOfMonth = moment(this.selectedDate).endOf("month").toDate();
                    var projectId = this.selectedProject.id;
                    this.$proxy.Timesheet.getTimesheet({ projectId: projectId, from: monthOfStart, to: endOfMonth }).then(function (response) {
                        _this.timesheetData.createDayColumns(_this.selectedDate);
                        _this.timesheetData.createVm(response.data);
                        blockUi.stop();
                    }, angular.noop);
                }
            };
            ////
            // Selects the date from the date picker and tries to search for timesheet date if all search criteria is set
            ////
            TimeSheetController.prototype.selectDate = function (date) {
                this.selectedDate = date;
            };
            TimeSheetController.prototype.openDatepicker = function ($event, opened) {
                $event.preventDefault();
                $event.stopPropagation();
                for (var key in this.datePickerStates) {
                    this.datePickerStates[key] = false;
                }
                this.datePickerStates[opened] = true;
            };
            ////
            // Returns the event name used for notifying that a row expansion has occurred. This is bound to the directive in the view
            ////
            TimeSheetController.prototype.rowExpansionEventName = function () {
                return TimeSheetController.onDirectiveExpansionRowEvent;
            };
            ////
            // Returns true if the day of the month is a weekend. This is used to highlight the weekend days in the timesheet
            ////
            TimeSheetController.prototype.isWeekend = function (dayOfMonth) {
                var dateClone = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), dayOfMonth);
                return dateClone.getDay() === 0 || dateClone.getDay() === 6;
            };
            ////
            // returns only the day based threshold values used in the day columns in the timesheet
            ////
            TimeSheetController.prototype.getDayThresholds = function () {
                return this.timesheetData.thresholdMap.get(0 /* DailyDone */);
            };
            ////
            // Returns only the total month based threshold values used in the total column in the timesheet
            ////
            TimeSheetController.prototype.getTotalMonthThresholds = function () {
                return this.timesheetData.thresholdMap.get(1 /* TotalMonthDone */);
            };
            TimeSheetController.$inject = ["$scope", "blockUI", "$tr-proxy", Web.Business.TimeSheetDataController.serviceId, Web.Business.ProjectDataController.serviceId, "trAuthenticationService", "$state", Web.NotificationServce.serviceId];
            TimeSheetController.controllerId = "TimeSheetController";
            TimeSheetController.onDirectiveExpansionRowEvent = "onDirectiveRowEvent";
            return TimeSheetController;
        })();
        Web.TimeSheetController = TimeSheetController;
        // Update the app1 variable name to be that of your module variable
        timeRecorder.controller(TimeSheetController.controllerId, TimeSheetController);
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
// Update the most local relative references and declare this directive.
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        // declare correct angularjs module
        timeRecorder.directive('timesheetAvailabilities', [
            function () {
                return {
                    restrict: "E",
                    templateUrl: Web.TimesheetData.expansionRowTemplate,
                    scope: {
                        employee: "=",
                        rowHeight: "=",
                        rowHeightExpanded: "=",
                        rowNumber: "=",
                        availabilityEntryTypes: "=",
                        externalScope: "="
                    },
                    link: function (scope, element, attrs) {
                        scope.isOpen = false;
                        scope.toggleExpand = function () {
                            if (!scope.isOpen) {
                                $(".timesheet-row-" + scope.rowNumber).animate({ height: scope.rowHeightExpanded }, 600, function () {
                                    scope.externalScope.$broadcast(Web.TimeSheetController.onDirectiveExpansionRowEvent);
                                });
                                scope.isOpen = true;
                            }
                            else {
                                $(".timesheet-row-" + scope.rowNumber).animate({ height: scope.rowHeight }, 600, function () {
                                    scope.externalScope.$broadcast(Web.TimeSheetController.onDirectiveExpansionRowEvent);
                                });
                                scope.isOpen = false;
                            }
                        };
                    }
                };
            }
        ]);
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
// Update the most local relative references and declare this controller.
// Install the angularjs.TypeScript.DefinitelyTyped NuGet package to resolve the .d.ts reference paths,
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        ////
        // This classed is used to hold, control and manipulate the date in the timesheet and its associated directives.
        ////
        var TimesheetData = (function () {
            function TimesheetData() {
                this.rowHeight = 129;
                this.rowHeightExpanded = 413;
                this.employeeColumnWidth = 200;
                this.dayColumnWidth = 60;
                this.totalColumnWidth = 100;
            }
            TimesheetData.prototype.createVm = function (cm) {
                var _this = this;
                this.thresholdMap = new Map();
                // uncomment when we have real data to test
                this.timesheet = new Web.Business.TimesheetVm(function () { return cm; });
                // remove when we have real data to test
                // this.timesheet = this.createTestData();
                // mapp the thresholds for faster access
                this.timesheet.thresholds.forEach(function (threshold) {
                    if (!_this.thresholdMap.has(threshold.type)) {
                        _this.thresholdMap.set(threshold.type, []);
                    }
                    _this.thresholdMap.get(threshold.type).add(threshold);
                });
                this.rowHeightExpanded = cm.timeEntryTypeCms.length * 26 + this.rowHeight;
                return this.timesheet;
                // return this.createTestData();
            };
            // test for seeing data until we have some in the db
            TimesheetData.prototype.createTestData = function () {
                var _this = this;
                this.timesheet = this.createTestData();
                // mapp the thresholds for faster access
                this.timesheet.thresholds.forEach(function (threshold) {
                    if (!_this.thresholdMap.has(threshold.type)) {
                        _this.thresholdMap.set(threshold.type, []);
                    }
                    _this.thresholdMap.get(threshold.type).add(threshold);
                });
                //return TimesheetData;
                var timeSheetCm = {
                    timesheetEmployees: [],
                    thresholds: [],
                    timeEntryTypeCms: []
                };
                timeSheetCm.thresholds.add({
                    fromMins: null,
                    toMins: -10,
                    colorCode: "#F5F7B0",
                    type: 0 /* DailyDone */
                });
                timeSheetCm.thresholds.add({
                    fromMins: -10,
                    toMins: 10,
                    colorCode: "#AFE3B6",
                    type: 0 /* DailyDone */
                });
                timeSheetCm.thresholds.add({
                    fromMins: 10,
                    toMins: null,
                    colorCode: "#EB6767",
                    type: 0 /* DailyDone */
                });
                timeSheetCm.thresholds.add({
                    fromMins: null,
                    toMins: -600,
                    colorCode: "#F5F7B0",
                    type: 1 /* TotalMonthDone */
                });
                timeSheetCm.thresholds.add({
                    fromMins: -300,
                    toMins: 300,
                    colorCode: "#AFE3B6",
                    type: 1 /* TotalMonthDone */
                });
                timeSheetCm.thresholds.add({
                    fromMins: 1200,
                    toMins: null,
                    colorCode: "#EB6767",
                    type: 1 /* TotalMonthDone */
                });
                var unAvailabilities = "sickLeave:KX,sick:KS,sicknessWaitingPeriod:KW,dailySicknessAllowence:KT,accidentWaiting:UK,accidentDailyAllowence:UT,holiday:F,maternityLeave:MU,absent:AB,absentWithoutPay:AU,regionalHoliday:R";
                var availabilityArray = new Array();
                var id = 0;
                unAvailabilities.split(",").forEach(function (a) {
                    availabilityArray.add({
                        name: a.split(":")[0],
                        abbreviation: a.split(":")[1],
                        id: id++
                    });
                });
                timeSheetCm.timeEntryTypeCms = availabilityArray;
                var employees = [];
                for (var i = 0; i < 10; i++) {
                    var employee = {
                        id: i,
                        firstName: "employee",
                        lastName: i.toString(),
                        timeEntries: []
                    };
                    var days = this.getDaysArray(new Date());
                    days.forEach(function (day) {
                        employee.timeEntries[day - 1] = {
                            plannedMins: Triarc.randomNumber(120, 638),
                            doneMins: Triarc.randomNumber(120, 900),
                            date: new Date(2015, 3, day),
                            availabilityTimeEntries: []
                        };
                        var numberOfUnavailabities = Triarc.randomNumber(0, 3);
                        for (var y = 0; y < numberOfUnavailabities; y++) {
                            var timeEntry = employee.timeEntries[day - 1];
                            var randomEntryType = availabilityArray[Triarc.randomNumber(0, 7)];
                            timeEntry.availabilityTimeEntries.add({
                                mins: Triarc.randomNumber(1, 600),
                                entryTypeId: randomEntryType.id
                            });
                        }
                    });
                    employees.add(employee);
                }
                timeSheetCm.timesheetEmployees.addRange(employees);
                this.timesheet = new Web.Business.TimesheetVm(function () { return timeSheetCm; });
                return this.timesheet;
            };
            TimesheetData.prototype.getDaysArray = function (date) {
                var names = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
                var result = [];
                var endMonth = new Date(date.getFullYear(), date.getMonth(), 1);
                while (date.getMonth() === endMonth.getMonth()) {
                    result.push(endMonth.getDate()); // + "-" + names[endMonth.getDay()]);
                    endMonth.setDate(endMonth.getDate() + 1);
                }
                return result;
            };
            ////
            // Creates all the columns needed for the month based on the date taken at the parameter i.e. 28 days in febuary etc.
            ////
            TimesheetData.prototype.createDayColumns = function (date) {
                this.dayColumns = [];
                var endMonth = new Date(date.getFullYear(), date.getMonth(), 1);
                while (date.getMonth() === endMonth.getMonth()) {
                    this.dayColumns.push({
                        date: new Date(endMonth.getFullYear(), endMonth.getMonth(), endMonth.getDate()),
                    });
                    endMonth.setDate(endMonth.getDate() + 1);
                }
            };
            TimesheetData.employeeCellTemplate = "Client/Views/timesheet/templates/timesheetEmployeeCellTemplate.html";
            TimesheetData.dayCellTemplate = "Client/Views/timesheet/templates/timesheetDayCellTemplate.html";
            TimesheetData.totalMonthCellTemplate = "Client/Views/timesheet/templates/timesheetTotalCellTemplate.html";
            TimesheetData.expansionRowTemplate = "Client/Views/timesheet/templates/timesheetAvailabilities.html";
            return TimesheetData;
        })();
        Web.TimesheetData = TimesheetData;
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Helper;
        (function (Helper) {
            var Timesheet;
            (function (Timesheet) {
                function determineThreshold(value, thresholds) {
                    if (!Triarc.arrayHasValues(thresholds))
                        return null;
                    return thresholds.toEnumerable().orderBy(function (cs) { return cs.fromMins; }).thenBy(function (cs) { return cs.toMins; }).firstOrDefault(function (s) { return ((value >= s.fromMins && value <= s.toMins) || s.fromMins == null && value <= s.toMins) || (s.toMins == null && value >= s.fromMins); });
                }
                Timesheet.determineThreshold = determineThreshold;
            })(Timesheet = Helper.Timesheet || (Helper.Timesheet = {}));
        })(Helper = Web.Helper || (Web.Helper = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
// Update the most local relative references and declare this directive.
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        // declare correct angularjs module
        timeRecorder.directive('timesheetDayCell', [
            function () {
                return {
                    replace: true,
                    restrict: "EA",
                    templateUrl: Web.TimesheetData.dayCellTemplate,
                    scope: {
                        timeEntry: "=",
                        isWeekend: "=",
                        columnWidth: "=",
                        thresholds: "="
                    },
                    link: function (scope, element, attrs) {
                        scope.breachedThreshold = function () {
                            if (Triarc.hasNoValue(scope.timeEntry))
                                return false;
                            var deviation = scope.timeEntry.done - scope.timeEntry.planned;
                            scope.selectedThreshold = Web.Helper.Timesheet.determineThreshold(deviation, scope.thresholds);
                            return Triarc.hasValue(scope.selectedThreshold);
                        };
                        scope.getTotal = function (entries) {
                            return entries.reduce(function (total, cur) { return total += cur.mins; }, 0);
                        };
                    }
                };
            }
        ]);
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
// Update the most local relative references and declare this directive.
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        // declare correct angularjs module
        timeRecorder.directive('timesheetEmployeeCell', [
            function () {
                return {
                    replace: true,
                    restrict: "EA",
                    templateUrl: Web.TimesheetData.employeeCellTemplate,
                    scope: {
                        employee: "=",
                        columnWidth: "=",
                        rowHeight: "=",
                        rowHeightExpanded: "=",
                        rowNumber: "=",
                        availabilityEntryTypes: "=",
                        externalScope: "="
                    },
                    link: function (scope, element, attrs) {
                    }
                };
            }
        ]);
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
// Update the most local relative references and declare this directive.
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        // declare correct angularjs module
        timeRecorder.directive('timesheetTotalCell', [
            function () {
                return {
                    replace: true,
                    restrict: "EA",
                    templateUrl: Web.TimesheetData.totalMonthCellTemplate,
                    scope: {
                        employee: "=",
                        columnWidth: "=",
                        thresholds: "=",
                        availabilityEntryTypes: "="
                    },
                    link: function (scope, element, attrs) {
                        scope.breachedThreshold = function () {
                            if (Triarc.hasNoValue(scope.employee))
                                return false;
                            var deviation = scope.employee.totalMonthDone - scope.employee.totalMonthPlanned;
                            scope.selectedThreshold = Web.Helper.Timesheet.determineThreshold(deviation, scope.thresholds);
                            return Triarc.hasValue(scope.selectedThreshold);
                        };
                    }
                };
            }
        ]);
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
/// <reference path="timesheetcontroller.ts" />
/// <reference path="directives/tltimesheetexpansion.ts" />
/// <reference path="TimesheetData.ts" />
/// <reference path="TimesheetHelper.ts" />
/// <reference path="directives/tltimesheetdaycelldirective.ts" />
/// <reference path="directives/tltimesheetemployeecelldirective.ts" />
/// <reference path="directives/tltimesheettotalcelldirective.ts" />
// Update the most local relative references and declare this controller.
// Install the angularjs.TypeScript.DefinitelyTyped NuGet package to resolve the .d.ts reference paths,
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var WorkReportController = (function () {
            function WorkReportController($scope, $services, dataControllers) {
                var _this = this;
                this.$scope = $scope;
                this.$services = $services;
                this.dataControllers = dataControllers;
                this.saveContactEvent = "WorkReportContactSavedEvt";
                this.setEmployeeSignatureImage = function (image) {
                    _this.employeeSignatureImage = image;
                };
                // Clone index.html, modify it so that a work report can be created on the server.
                this.setContactSignatureImage = function (image) {
                    _this.contactSignatureImage = image;
                    if (Triarc.hasNoValue(image)) {
                        _this.workReport.externalWorkReport.contactSignatureImageTimestamp = null;
                    }
                };
                this.$services.blockUi.start();
                this.requiredDataQ = this.$services.$q.all([
                    this.dataControllers.timeEntryTypeDc.ensureLoaded(),
                    this.dataControllers.projectDc.loadProjectTypes(),
                    this.$services.$auth.getAppUser().then(function (appUser) {
                        _this.currentEmployee = appUser.person;
                    })
                ]).finally(function () {
                    _this.$services.blockUi.stop();
                });
                this.$scope.$on(this.saveContactEvent, function (evt, saveEvt) {
                    _this.workReport.externalWorkReport.clientPromise.promise.then(function (client) {
                        _this.loadContactsForClient(client).then(function () {
                            _this.dataControllers.peopleDc.getContact(saveEvt.id).then(function (newContact) {
                                _this.selectedContact = newContact;
                            });
                        });
                    });
                });
                this.$services.pageLock.watchMyDirtyForm(this.$scope, "workReportForm");
            }
            WorkReportController.prototype.setWorkReport = function (workReport) {
                var _this = this;
                this.workReport = workReport;
                this.dayContainers = null;
                this.workReport.timeBookingsPromise.promise.then(function (timeBookings) {
                    if (Triarc.arrayHasValues(timeBookings)) {
                        _this.dayContainers = timeBookings.toEnumerable().groupBy(function (d) { return moment(d.start).startOf("day").toDate().getTime(); }).select(function (grouping) {
                            var groupedTimeBookings = grouping.toArray().toEnumerable().where(function (parentTimeBooking) { return Triarc.hasNoValue(parentTimeBooking.parentId); }).groupBy(function (tb) { return tb.typeId; }).select(function (groupedTimeBookings) {
                                // group the time bookings together
                                var bookingsToGroup = groupedTimeBookings.toArray();
                                var aTimeBooking = bookingsToGroup.toEnumerable().first();
                                bookingsToGroup.remove(aTimeBooking);
                                if (Triarc.arrayHasValues(bookingsToGroup)) {
                                    bookingsToGroup.forEach(function (remainingBooking) {
                                        aTimeBooking.addDuration(moment.duration(moment.utc(remainingBooking.stop).startOf("minute").diff(moment.utc(remainingBooking.start).startOf("minute"))));
                                    });
                                }
                                return aTimeBooking;
                            }).toArray();
                            // group the additioanl time bookings together
                            var groupedAdditionalBookings = grouping.toArray().toEnumerable().where(function (additionalTimeBooking) { return Triarc.hasValue(additionalTimeBooking.parentId); }).groupBy(function (ab) { return ab.typeId; }).select(function (groupedAdditionalBookings) {
                                var additionalBookingsToGroup = groupedAdditionalBookings.toArray();
                                var anAdditionalTimeBooking = additionalBookingsToGroup.toEnumerable().first();
                                additionalBookingsToGroup.remove(anAdditionalTimeBooking);
                                if (Triarc.arrayHasValues(additionalBookingsToGroup)) {
                                    additionalBookingsToGroup.forEach(function (remainingBooking) {
                                        anAdditionalTimeBooking.addDuration(moment.duration(moment.utc(remainingBooking.stop).startOf("minute").diff(moment.utc(remainingBooking.start).startOf("minute"))));
                                    });
                                }
                                return anAdditionalTimeBooking;
                            }).toArray();
                            var dayContainer = {
                                date: new Date(grouping.key()),
                                timeBookingGroups: []
                            };
                            groupedTimeBookings.forEach(function (tb) {
                                dayContainer.timeBookingGroups.add({ timeBooking: tb });
                            });
                            groupedAdditionalBookings.forEach(function (ab) {
                                dayContainer.timeBookingGroups.add({ additionalBooking: ab });
                            });
                            return dayContainer;
                        }).toArray();
                    }
                });
                return null;
            };
            WorkReportController.prototype.save = function () {
                var _this = this;
                this.triggerValidation = true;
                if (this.$scope.workReportForm.$invalid) {
                    return;
                }
                this.workReport.externalWorkReport.employeeSignatureImage = this.employeeSignatureImage;
                this.workReport.externalWorkReport.contactSignatureImage = this.contactSignatureImage;
                this.workReport.externalWorkReport.projectCompleted = this.workReport.externalWorkReport.projectCompleted;
                if (this.selectedContact) {
                    this.workReport.externalWorkReport.signedContactId = this.selectedContact.id;
                }
                else {
                    this.workReport.externalWorkReport.signedContactId = null;
                }
                // has the external work report captured all relavent information to be closed?
                if (!this.dataControllers.externalWorkReportDc.hasCloseStateCriteria(this.workReport.externalWorkReport)) {
                    if (!this.workReport.externalWorkReport.getSignatureLater) {
                        Web.ExternalWorkReport.Modal.openModalSaveState(this.$services.$modal, this.workReport.externalWorkReport).then(function (proceedWithSave) {
                            if (proceedWithSave) {
                                _this.persistReport();
                            }
                        });
                    }
                    else {
                        Triarc.Web.Modal.openConfirmModal("Möchten Sie den Arbeitsrapport für die anderen Mitarbeiter im Job zur einholung der Unterschrift Freigeben?", this.$services.$modal, "Warnung", "Ja", "Nein").then(function (result) {
                            if (result) {
                                _this.persistReport();
                            }
                            return null;
                        });
                    }
                }
                else {
                    //work report is ready to be finished
                    Web.ExternalWorkReport.Modal.openFinalizeModal(this.$services.$modal, this.workReport.externalWorkReport).then(function (response) {
                        if (response) {
                            _this.persistReport();
                        }
                        return;
                    });
                }
            };
            WorkReportController.prototype.persistReport = function () {
                var _this = this;
                this.workReport.externalWorkReport.html = this.getPdfHtml();
                var promise = this.dataControllers.externalWorkReportDc.save(this.workReport);
                return this.$services.pageLock.blockNavigation("Wird gespeichert", promise).then(function (response) {
                    toastr.success(_this.$services.translate("Gespeichert"));
                    _this.$services.$state.go("tr.employeeWorkReport.search", { search: true });
                }, function (err) {
                    toastr.error(_this.$services.translate("Fehler beim Speichern"));
                });
            };
            WorkReportController.prototype.cancel = function () {
                this.$services.$state.go("tr.employeeWorkReport.search", { search: true });
            };
            WorkReportController.prototype.getPdfHtml = function () {
                var clone = $("html").clone();
                // replace entire stylesheet with print.css
                var mainCss = clone.find("link[href*=Site]");
                var printCssPath = mainCss.attr("href").replace("Site", "time-recorder.print");
                mainCss.attr("href", printCssPath);
                clone.find(".body-content").removeClass("body-content");
                clone.find("#workReport").addClass("printing container");
                clone.find(".printable-element").removeClass("printable-element");
                clone.find(".hidden-from-print").remove();
                if (Triarc.hasValue(this.employeeSignatureImage)) {
                    clone.find('#employeeSignatureImage').attr("src", "data:image/png;base64," + this.employeeSignatureImage);
                }
                clone.find('#employeeSignatureCanvas').remove();
                if (Triarc.hasValue(this.contactSignatureImage)) {
                    clone.find('#contactSignatureImage').attr("src", "data:image/png;base64," + this.contactSignatureImage);
                }
                clone.find('#contactSignatureCanvas').remove();
                return $(clone)[0].outerHTML;
            };
            WorkReportController.prototype.savePdf = function () {
                this.$services.$proxy.PdfGenerator.generatePdf({ html: this.getPdfHtml() });
            };
            WorkReportController.prototype.loadContactsForClient = function (client) {
                var _this = this;
                return this.dataControllers.peopleDc.getContactsForClient(client.id).then(function (contacts) {
                    _this.clientContacts = contacts;
                    // if the work report has no signed contact yet and the client has a main contact then set the selected contact to be that one
                    if (Triarc.hasNoValue(_this.workReport.externalWorkReport.signedContactId) && Triarc.hasValue(client.mainContactId)) {
                        _this.selectedContact = _this.clientContacts.toEnumerable().firstOrDefault(function (c) { return c.id === client.mainContactId; });
                    }
                });
            };
            WorkReportController.prototype.openContactDetails = function (contactId) {
                throw "Developer Error: openAddContactDetails not implemented in extending controller of WorkReportController!";
            };
            WorkReportController.prototype.reportIsOpen = function (externalWorkReport) {
                if (Triarc.hasNoValue(externalWorkReport))
                    return false;
                return externalWorkReport.state === 0 /* Open */;
            };
            WorkReportController.prototype.setProjectComplete = function (value) {
                this.projectComplete = value;
                this.projectNotComplete = !value;
            };
            WorkReportController.controllerId = "TrWorkReportController";
            return WorkReportController;
        })();
        Web.WorkReportController = WorkReportController;
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
// Update the app1 variable name to be that of your module variable
timeRecorder.controller(TimeRecorder.Web.WorkReportController.controllerId, TimeRecorder.Web.WorkReportController);
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var AddWorkReportController = (function (_super) {
            __extends(AddWorkReportController, _super);
            function AddWorkReportController($scope, $services, dataControllers, $auth) {
                _super.call(this, $scope, $services, dataControllers);
                this.$scope = $scope;
                this.$services = $services;
                this.dataControllers = dataControllers;
                this.$auth = $auth;
                this.createNewReport(this.$services.$stateParams["projectId"]);
            }
            AddWorkReportController.prototype.createNewReport = function (projectId) {
                var _this = this;
                this.$auth.getAppUser().then(function (appUser) {
                    _this.requiredDataQ.then(function () {
                        _this.dataControllers.externalWorkReportDc.createNewWorkReport(appUser.person.id, projectId).then(function (workReport) {
                            _this.setWorkReport(workReport);
                            _this.workReport.externalWorkReport.clientPromise.promise.then(function (client) {
                                _this.loadContactsForClient(client).then(function () {
                                });
                            });
                        });
                    });
                });
            };
            AddWorkReportController.prototype.openContactDetails = function (contactId) {
                var _this = this;
                this.$scope.workReportForm.$dirty = false;
                this.workReport.externalWorkReport.clientPromise.promise.then(function (client) {
                    _this.$services.$state.go("tr.employeeWorkReport.add.side.contactDetails", { contactId: contactId, clientId: client.id, saveEvt: _this.saveContactEvent });
                });
            };
            AddWorkReportController.$inject = [
                '$scope',
                Web.TrServiceContainer.serviceId,
                Web.Business.DataControllerContainer.serviceId,
                Web.AuthenticationService.serviceId
            ];
            AddWorkReportController.controllerId = "TrAddWorkReportController";
            return AddWorkReportController;
        })(Web.WorkReportController);
        Web.AddWorkReportController = AddWorkReportController;
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
// Update the app1 variable name to be that of your module variable
timeRecorder.controller(TimeRecorder.Web.AddWorkReportController.controllerId, TimeRecorder.Web.AddWorkReportController);
// Update the most local relative references and declare this controller.
// Install the angularjs.TypeScript.DefinitelyTyped NuGet package to resolve the .d.ts reference paths,
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var EditWorkReportController = (function (_super) {
            __extends(EditWorkReportController, _super);
            function EditWorkReportController($scope, $services, dataControllers) {
                _super.call(this, $scope, $services, dataControllers);
                this.$scope = $scope;
                this.$services = $services;
                this.dataControllers = dataControllers;
                if (Triarc.strNotEmpty(this.$services.$stateParams["workReportId"]))
                    this.loadReport(this.$services.$stateParams["workReportId"]);
            }
            EditWorkReportController.prototype.loadReport = function (id) {
                var _this = this;
                this.requiredDataQ.then(function () {
                    _this.dataControllers.externalWorkReportDc.getFullWorkReport(id).then(function (workReport) {
                        _this.setWorkReport(workReport);
                        workReport.externalWorkReport.clientPromise.promise.then(function (client) {
                            _this.loadContactsForClient(client).then(function () {
                                if (Triarc.hasValue(workReport.externalWorkReport.signedContactId)) {
                                    _this.selectedContact = _this.clientContacts.toEnumerable().firstOrDefault(function (c) { return c.id === workReport.externalWorkReport.signedContactId; });
                                }
                            });
                        });
                        _this.employeeSignatureImage = _this.workReport.externalWorkReport.employeeSignatureImage;
                        _this.contactSignatureImage = _this.workReport.externalWorkReport.contactSignatureImage;
                        if (Triarc.hasValue(_this.workReport.externalWorkReport.projectCompleted)) {
                            _this.projectComplete = _this.workReport.externalWorkReport.projectCompleted;
                            _this.projectNotComplete = !_this.workReport.externalWorkReport.projectCompleted;
                        }
                    });
                });
            };
            EditWorkReportController.prototype.openContactDetails = function (contactId) {
                var _this = this;
                this.$scope.workReportForm.$dirty = false;
                this.workReport.externalWorkReport.clientPromise.promise.then(function (client) {
                    _this.$services.$state.go("tr.employeeWorkReport.edit.side.contactDetails", { contactId: contactId, clientId: client.id, workReportId: _this.workReport.externalWorkReport.id, saveEvt: _this.saveContactEvent });
                });
            };
            EditWorkReportController.$inject = ['$scope', Web.TrServiceContainer.serviceId, Web.Business.DataControllerContainer.serviceId];
            EditWorkReportController.controllerId = "TrEditWorkReportController";
            return EditWorkReportController;
        })(Web.WorkReportController);
        Web.EditWorkReportController = EditWorkReportController;
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
// Update the app1 variable name to be that of your module variable
timeRecorder.controller(TimeRecorder.Web.EditWorkReportController.controllerId, TimeRecorder.Web.EditWorkReportController);
// Update the most local relative references and declare this controller.
// Install the angularjs.TypeScript.DefinitelyTyped NuGet package to resolve the .d.ts reference paths,
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var SearchWorkReportController = (function () {
            function SearchWorkReportController($scope, $services, workReportDataController, searchService, authService, $fileService) {
                var _this = this;
                this.$scope = $scope;
                this.$services = $services;
                this.workReportDataController = workReportDataController;
                this.searchService = searchService;
                this.authService = authService;
                this.$fileService = $fileService;
                this.searchResults = [];
                this.skip = 0;
                this.take = 20;
                this.showList = false;
                this.datePickerStates = {
                    "from": false,
                    "to": false
                };
                this.datePickerOptions = {};
                // set the default state to open
                this.searchService.state = 0 /* Open */;
                this.authService.getAppUser().then(function (appUser) {
                    if (!_this.canAdmin()) {
                        _this.searchService.employeeId = appUser.person.id;
                        _this.selectedEmployee = appUser.person;
                    }
                    _this.search(true);
                });
            }
            SearchWorkReportController.prototype.download = function (externalWorkReport) {
                this.$fileService.downloadFile(externalWorkReport.pdfFileName);
            };
            SearchWorkReportController.prototype.openDatepicker = function ($event, opened) {
                $event.preventDefault();
                $event.stopPropagation();
                for (var key in this.datePickerStates) {
                    this.datePickerStates[key] = false;
                }
                this.datePickerStates[opened] = true;
            };
            /**
             * This will be override by wettstein
             * @returns {}
             */
            SearchWorkReportController.prototype.canAdmin = function () {
                return this.authService.hasClaim("web_externalWorkReportAdmin");
            };
            ////
            // Searches for ExternalWorkReports with the given values from the searchSerivce used for persisting them between views
            ////
            SearchWorkReportController.prototype.search = function (clearResults) {
                var _this = this;
                if (clearResults) {
                    this.showList = this.isSearching = false;
                    this.skip = 0;
                    this.searchResults = [];
                }
                if (!this.isSearching) {
                    this.isSearching = true;
                    this.workReportDataController.search(this.skip, this.take, this.searchService.employeeId, this.searchService.from, this.searchService.to, this.searchService.projectId, this.searchService.state).then(function (searchResults) {
                        _this.searchResults.addRange(searchResults);
                        _this.skip = _this.searchResults.length;
                        _this.showList = true;
                        if (searchResults.length === 20) {
                            _this.isSearching = false;
                        }
                        else {
                            _this.isSearching = true;
                        }
                    });
                }
            };
            ////
            // When the ui-select is changed then we need to pull out the id of the selected employee value for the search
            ////
            SearchWorkReportController.prototype.employeeSelected = function () {
                if (angular.isObject(this.selectedEmployee))
                    this.searchService.employeeId = this.selectedEmployee.id;
                else
                    this.searchService.employeeId = null;
            };
            ////
            // Used for searching for employees in the ui-select
            ////
            SearchWorkReportController.prototype.searchEmployees = function (searchValue) {
                var _this = this;
                this.workReportDataController.container.employeeDc.search(searchValue, 0, 10).then(function (employees) {
                    _this.searchedEmployees = employees;
                });
            };
            /**
             * this will be override by wettstein
             * @returns {}
             */
            SearchWorkReportController.prototype.canCreateWorkreports = function () {
                return true;
            };
            ////
            // When the ui-select is changed then we need to pull out the id of the selected project value for the search
            ////
            SearchWorkReportController.prototype.projectSelected = function () {
                if (angular.isObject(this.selectedProject))
                    this.searchService.projectId = this.selectedProject.id;
                else
                    this.searchService.projectId = null;
            };
            ////
            // Used for searching for projects in the ui-select
            ////
            SearchWorkReportController.prototype.searchProjects = function (searchValue) {
                var _this = this;
                this.workReportDataController.container.projectDc.search(searchValue, 0, 10).then(function (projects) {
                    _this.searchedProjects = projects;
                });
            };
            SearchWorkReportController.prototype.clearProject = function () {
                this.selectedProject = null;
            };
            SearchWorkReportController.prototype.getStateDisplayName = function (state) {
                switch (state) {
                    case 1 /* Closed */:
                        return "Abgeschlossen";
                    case 0 /* Open */:
                        return "Offen";
                }
                return undefined;
            };
            SearchWorkReportController.prototype.isOpen = function (workReport) {
                return workReport.state === 0 /* Open */;
            };
            SearchWorkReportController.prototype.editWorkReport = function (externalWorkReport) {
                this.$services.$state.transitionTo("tr.employeeWorkReport.edit", { workReportId: externalWorkReport.id });
            };
            SearchWorkReportController.$inject = [
                '$scope',
                Web.TrServiceContainer.serviceId,
                Web.Business.ExternalWorkReportDataController.serviceId,
                Web.ExternalWorkReportSearchServiceService.serviceId,
                Web.AuthenticationService.serviceId,
                Web.FileService.serviceId
            ];
            SearchWorkReportController.controllerId = "TrSearchWorkReportController";
            return SearchWorkReportController;
        })();
        Web.SearchWorkReportController = SearchWorkReportController;
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
// Update the app1 variable name to be that of your module variable
timeRecorder.controller(TimeRecorder.Web.SearchWorkReportController.controllerId, TimeRecorder.Web.SearchWorkReportController);
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var WorkReportSideController = (function () {
            function WorkReportSideController($state) {
                this.$state = $state;
            }
            WorkReportSideController.prototype.close = function () {
                this.$state.go("^.^.");
            };
            WorkReportSideController.$inject = ['$state'];
            WorkReportSideController.controllerId = "TrWorkReportSideController";
            return WorkReportSideController;
        })();
        Web.WorkReportSideController = WorkReportSideController;
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
timeRecorder.controller(TimeRecorder.Web.WorkReportSideController.controllerId, TimeRecorder.Web.WorkReportSideController);
// Update the most local relative references and declare this controller.
// Install the angularjs.TypeScript.DefinitelyTyped NuGet package to resolve the .d.ts reference paths,
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var ContactDetailsController = (function () {
            function ContactDetailsController($scope, $stateParams, $state, peopleDataDc) {
                this.$scope = $scope;
                this.$stateParams = $stateParams;
                this.$state = $state;
                this.peopleDataDc = peopleDataDc;
                this.saveEvt = this.$stateParams["saveEvt"];
                this.clientId = this.$stateParams["clientId"];
                if (Triarc.strNotEmpty(this.$stateParams["contactId"])) {
                    this.loadContact(this.$stateParams["contactId"]);
                }
                else {
                    var cm = Web.Bu.ContactVm.createCm();
                    this.contact = new Web.Bu.ContactVm(function () { return cm; });
                }
            }
            ContactDetailsController.prototype.isNew = function () {
                return this.clientId == null;
            };
            ContactDetailsController.prototype.loadContact = function (contactId) {
                var _this = this;
                this.peopleDataDc.getContact(contactId).then(function (contact) {
                    _this.contact = contact;
                });
            };
            ContactDetailsController.prototype.save = function () {
                var _this = this;
                this.triggerValidation = true;
                if (this.$scope.contactForm.$invalid)
                    return;
                this.contact.clientId = this.clientId;
                this.peopleDataDc.saveContact(this.contact).then(function (cm) {
                    if (Triarc.strNotEmpty(_this.saveEvt)) {
                        _this.$scope.$root.$broadcast(_this.saveEvt, { id: cm.id });
                    }
                    _this.$state.go("^.^.");
                });
            };
            ContactDetailsController.prototype.close = function () {
                this.$state.go("^.^.");
            };
            ContactDetailsController.$inject = [
                '$scope',
                "$stateParams",
                "$state",
                Web.Business.PeopleDataController.serviceId,
            ];
            ContactDetailsController.controllerId = "TrContactDetailsController";
            return ContactDetailsController;
        })();
        Web.ContactDetailsController = ContactDetailsController;
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
// Update the app1 variable name to be that of your module variable
timeRecorder.controller(TimeRecorder.Web.ContactDetailsController.controllerId, TimeRecorder.Web.ContactDetailsController);
// Update the most local relative references and declare this controller.
// Install the angularjs.TypeScript.DefinitelyTyped NuGet package to resolve the .d.ts reference paths,
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var CreateExternalWorkReportController = (function () {
            function CreateExternalWorkReportController($scope, blockUi, $state, authService, dataControllers) {
                var _this = this;
                this.$scope = $scope;
                this.blockUi = blockUi;
                this.$state = $state;
                this.authService = authService;
                this.dataControllers = dataControllers;
                var dataBlock = this.blockUi.instances.get("fetchingData");
                dataBlock.start();
                authService.getAppUser().then(function (appUser) {
                    _this.currentEmployeeId = appUser.person.id;
                    dataBlock.stop();
                });
            }
            CreateExternalWorkReportController.prototype.searchProjects = function (searchString) {
                var _this = this;
                if (Triarc.strIsEmpty(searchString)) {
                    searchString = "";
                }
                this.dataControllers.projectDc.searchForExternalWorkReports(searchString, 0, 10).then(function (projects) {
                    _this.searchedProjects = projects;
                });
            };
            CreateExternalWorkReportController.prototype.fetchAssociations = function (project) {
                var _this = this;
                this.dataControllers.peopleDc.getClient(project.clientId).then(function (client) {
                    _this.associatedClient = client;
                });
            };
            CreateExternalWorkReportController.prototype.next = function () {
                var _this = this;
                this.dataControllers.externalWorkReportDc.getIdFor(this.currentEmployeeId, this.selectedProject).then(function (id) {
                    // add?
                    if (Triarc.hasNoValue(id)) {
                        _this.$state.go("tr.employeeWorkReport.add", { projectId: _this.selectedProject.id });
                    }
                    else {
                        _this.$state.go("tr.employeeWorkReport.edit", { workReportId: id });
                    }
                });
            };
            CreateExternalWorkReportController.$inject = [
                "$scope",
                "blockUI",
                "$state",
                Web.AuthenticationService.serviceId,
                Web.Business.DataControllerContainer.serviceId
            ];
            CreateExternalWorkReportController.controllerId = "TrCreateExternalWorkReportController";
            return CreateExternalWorkReportController;
        })();
        Web.CreateExternalWorkReportController = CreateExternalWorkReportController;
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
// Update the app1 variable name to be that of your module variable
timeRecorder.controller(TimeRecorder.Web.CreateExternalWorkReportController.controllerId, TimeRecorder.Web.CreateExternalWorkReportController);
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var ExternalWorkReport;
        (function (ExternalWorkReport) {
            var Modal;
            (function (Modal) {
                function openModalSaveState($modal, externalWorkReport) {
                    var modalInstance = $modal.open({
                        templateUrl: "Client/Views/employee/modal/externalWorkReportRemainingCloseStateModalTemplate.html",
                        size: "md",
                        controller: function ($scope, $modalInstance, externalWorkReport) {
                            $scope.externalWorkReport = externalWorkReport;
                        },
                        resolve: {
                            externalWorkReport: function () {
                                return externalWorkReport;
                            }
                        }
                    });
                    return modalInstance.result.then(function (proceedWithSave) {
                        return proceedWithSave;
                    }, function () {
                        return false;
                    });
                }
                Modal.openModalSaveState = openModalSaveState;
                function openFinalizeModal($modal, externalWorkReport) {
                    var modalInstance = $modal.open({
                        templateUrl: "Client/Views/employee/modal/closeWorkReportModalTemplate.html",
                        size: "md",
                        controller: function ($scope, $modalInstance, externalWorkReport) {
                            $scope.externalWorkReport = externalWorkReport;
                        },
                        resolve: {
                            externalWorkReport: function () {
                                return externalWorkReport;
                            }
                        }
                    });
                    return modalInstance.result.then(function (closeReport) {
                        return closeReport;
                    }, function () {
                        return false;
                    });
                }
                Modal.openFinalizeModal = openFinalizeModal;
            })(Modal = ExternalWorkReport.Modal || (ExternalWorkReport.Modal = {}));
        })(ExternalWorkReport = Web.ExternalWorkReport || (Web.ExternalWorkReport = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var TimeBooking;
        (function (TimeBooking) {
            var Modal;
            (function (Modal) {
                function openTimeBookingsNotVisumedModal($modal, timeBookings) {
                    var modalInstance = $modal.open({
                        templateUrl: "Client/Views/employee/modal/timeBookingsNotVisumedModalTemplate.html",
                        size: "lg",
                        controller: function ($scope, $modalInstance, timeBookings) {
                            $scope.timeBookings = timeBookings;
                        },
                        resolve: {
                            timeBookings: function () {
                                return timeBookings;
                            }
                        }
                    });
                    return modalInstance.result.then(function (proceedWithSave) {
                        return proceedWithSave;
                    }, function () {
                        return false;
                    });
                }
                Modal.openTimeBookingsNotVisumedModal = openTimeBookingsNotVisumedModal;
            })(Modal = TimeBooking.Modal || (TimeBooking.Modal = {}));
        })(TimeBooking = Web.TimeBooking || (Web.TimeBooking = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
/// <reference path="workreportcontroller.ts" />
/// <reference path="addworkreportcontroller.ts" />
/// <reference path="editworkreportcontroller.ts" />
/// <reference path="searchworkreportcontroller.ts" />
/// <reference path="workreportsidecontroller.ts" />
/// <reference path="contactdetailscontroller.ts" />
/// <reference path="createexternalworkreportcontroller.ts" />
/// <reference path="modal/ExternalWorkReportRemainingCloseStateModal.ts" />
/// <reference path="modal/timebookingnotvisumedmodal.ts" />
/// <reference path="controllers/usercontroller.ts" />
/// <reference path="controllers/rolecontroller.ts" />
/// <reference path="controllers/downloadcontroller.ts" />
/// <reference path="controllers/locationcontroller.ts" />
/// <reference path="controllers/personcontroller.ts" />
/// <reference path="controllers/messagecontroller.ts" />
/// <reference path="controllers/expensessidecontroller.ts" />
/// <reference path="controllers/personalmessagecontroller.ts" />
/// <reference path="controllers/configcontroller.ts" />
/// <reference path="controllers/entrycontroller.ts" />
/// <reference path="controllers/timebookingcontroller.ts" />
/// <reference path="controllers/timebookingformcontroller.ts" />
/// <reference path="controllers/projectcontroller.ts" />
/// <reference path="controllers/expensescontroller.ts" />
/// <reference path="controllers/expensesformcontroller.ts" />
/// <reference path="controllers/timebookingsidecontroller.ts" />
// timesheet 
/// <reference path="controllers/timesheet/_timesheet_references.ts" />
// employee
/// <reference path="controllers/employee/_employee_controller_references.ts" /> 
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        // declare correct angularjs module
        timeRecorder.directive("filterHeader", [
            function () {
                return {
                    restrict: "E",
                    //replace: true,
                    //require: "^$DirectiveName",
                    //transclude: true,
                    controller: FilterHeaderController.controllerId,
                    templateUrl: "Client/Views/templates/FilterHeader.html",
                    scope: {
                        model: "=",
                        // This button adds new object, e.g new Expense. Callback implementation should side menu.
                        addButtonText: "@",
                        addButtonCallback: "&",
                        // This button starts mode, where user can checkbox objects (e.g expenses) to send to server (and abacus).
                        targetStartButtonText: "@",
                        targetStartButtonCallback: "&",
                        // This button cancels targetting mode, callback implementation should not send anything and clear checkboxes.
                        targetCancelButtonText: "@",
                        targetCancelButtonCallback: "&",
                        // This button confirms targetting mode, callback implementation should send objects to the server (and abacus in the end).
                        targetConfirmButtonText: "@",
                        targetConfirmButtonCallback: "&",
                        // function which returns number of entries per day is expected, where 0 is Sunday and 6 is Monday.
                        getEntryPerDay: "=",
                        getTotalEntries: "&"
                    },
                    controllerAs: "ctrl",
                    link: function (scope, element, attrs) {
                        // if a callback is declared and not bound then throw exception
                        //        if (!angular.isFunction(scope.myCallback))
                        //          throw "Developer Error: $DirectiveName function not defined!";
                        //        scope.$watch("model", (newModel, oldModel) => {
                        //
                        //        });
                    }
                };
            }
        ]);
        var FilterHeaderController = (function () {
            function FilterHeaderController($scope) {
                this.$scope = $scope;
                this.datepickerOpened = false;
            }
            FilterHeaderController.prototype.date = function () {
                return this.$scope.model.date;
            };
            FilterHeaderController.prototype.previousWeek = function () {
                this.date().setDate(this.date().getDate() - 7);
            };
            FilterHeaderController.prototype.nextWeek = function () {
                this.date().setDate(this.date().getDate() + 7);
            };
            FilterHeaderController.prototype.today = function () {
                this.date().setTime(new Date().getTime());
                this.$scope.model.date = new Date();
            };
            FilterHeaderController.prototype.getCurrentWeekday = function () {
                return this.date().getDay();
            };
            FilterHeaderController.prototype.openDatepicker = function ($event) {
                $event.preventDefault();
                $event.stopPropagation();
                this.datepickerOpened = true;
            };
            FilterHeaderController.prototype.goToDay = function (day) {
                var currentDayOfWeek = (this.date().getDay() + 6) % 7;
                var selectedDayOfWeek = (day + 6) % 7;
                var diff = selectedDayOfWeek - currentDayOfWeek;
                this.date().setDate(this.date().getDate() + diff);
            };
            FilterHeaderController.prototype.getDayName = function (day) {
                switch (day) {
                    case 0:
                        return "Sonntag";
                    case 1:
                        return "Montag";
                    case 2:
                        return "Dienstag";
                    case 3:
                        return "Mittwoch";
                    case 4:
                        return "Donnerstag";
                    case 5:
                        return "Freitag";
                    case 6:
                        return "Samstag";
                }
                return "";
            };
            FilterHeaderController.controllerId = "FilterHeaderController";
            FilterHeaderController.$inject = ["$scope"];
            return FilterHeaderController;
        })();
        Web.FilterHeaderController = FilterHeaderController;
        timeRecorder.controller(FilterHeaderController.controllerId, FilterHeaderController);
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var ProjectTree = (function () {
            function ProjectTree($compile, trProjectService) {
                var _this = this;
                this.$compile = $compile;
                this.trProjectService = trProjectService;
                this.restrict = "E";
                this.templateUrl = 'Client/Views/templates/projectTree.html';
                this.scope = {
                    project: '=',
                    nodeSelected: '&',
                    selectedNodeId: '=',
                    depth: '='
                };
                this.compile = function (element, attr) {
                    var contents = element.contents().remove();
                    var compiledContents;
                    return function (scope, iElement, iAttr) {
                        scope.expand = function (node, $event) {
                            $event.stopPropagation();
                            node.expanded = true;
                            if (node.loading)
                                return;
                            if (node.loaded) {
                                node.expanded = true;
                                return;
                            }
                            node.loading = true;
                            _this.trProjectService.loadChildren(node).then(function () {
                                node.expanded = true;
                                node.loaded = true;
                                node.loading = false;
                            }, function () {
                            });
                        };
                        scope.fold = function (node, $event) {
                            $event.stopPropagation();
                            node.expanded = false;
                        };
                        scope.selectInt = function (node) {
                            if (angular.isFunction(scope.nodeSelected)) {
                                scope.nodeSelected({ $node: node });
                            }
                        };
                        scope.setFlag = function (node, flag, $event) {
                            $event.stopPropagation();
                            _this.trProjectService.updateFlag(node, flag);
                        };
                        scope.getDepth = function () {
                            return 1 + scope.depth;
                        };
                        if (!compiledContents)
                            compiledContents = _this.$compile(contents);
                        compiledContents(scope, function (clone, s) {
                            iElement.append(clone);
                        });
                    };
                };
            }
            ProjectTree.directiveId = "projectTree";
            return ProjectTree;
        })();
        Web.ProjectTree = ProjectTree;
        timeRecorder.directive(ProjectTree.directiveId, ['$compile', Web.ProjectService.serviceId, function ($compile, project) {
            return new ProjectTree($compile, project);
        }]);
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var MultiSelect = (function () {
            function MultiSelect() {
                var _this = this;
                this.restrict = "E";
                this.templateUrl = 'Client/Views/templates/multiselect.html';
                this.scope = {
                    ngModel: '=',
                    ngSource: '=',
                    ngExclude: '=',
                    added: '&',
                    removed: '&',
                };
                this.remove = function (list, item) {
                    var l = list.length;
                    var ind = -1;
                    for (var i = 0; i < l; ++i) {
                        if (list[i].getId() === item.getId()) {
                            ind = i;
                            break;
                        }
                    }
                    if (i > -1)
                        list.splice(ind, 1);
                };
                this.evalOptions = function (scope) {
                    scope.options = [];
                    var source = scope.ngSource;
                    var sourcec = source ? source.length : 0;
                    var excludes = scope.ngExclude;
                    var exculdesl = excludes ? excludes.length : 0;
                    var model = scope.ngModel;
                    var modelc = model ? model.length : 0;
                    for (var i = 0; i < sourcec; ++i) {
                        var keep = true;
                        for (var j = 0; j < exculdesl; ++j) {
                            if (source[i].getId() === excludes[j].getId()) {
                                keep = false;
                                break;
                            }
                        }
                        if (!keep)
                            continue;
                        for (var y = 0; y < modelc; ++y) {
                            if (source[i].getId() === model[y].getId()) {
                                keep = false;
                                break;
                            }
                        }
                        if (keep) {
                            scope.options.push(source[i]);
                        }
                    }
                };
                this.link = function (scope, element, attributes) {
                    _this.evalOptions(scope);
                    scope.$watch('ngModel', function (n, o) {
                        _this.evalOptions(scope);
                    });
                    scope.$watch('ngExclude', function (n, o) {
                        _this.evalOptions(scope);
                    });
                    scope.$watch('ngSource', function (n, o) {
                        _this.evalOptions(scope);
                    });
                    var clickHandler = function (event) {
                        if (!element.is(event.target) && element.has(event.target).length === 0)
                            scope.toggleSearch(true);
                    };
                    var input = element.find('.select2-input');
                    var drop = element.find('.select2-drop');
                    var container = element.find(".select2-container");
                    scope.remove = function (item, $event) {
                        $event.stopPropagation();
                        if (scope.searchMode)
                            scope.toggleSearch();
                        _this.remove(scope.ngModel, item);
                        scope.options.push(item);
                        if (angular.isFunction(scope.removed))
                            scope.removed({ $item: item });
                    };
                    scope.addItem = function (item) {
                        scope.ngModel.push(item);
                        _this.remove(scope.options, item);
                        scope.toggleSearch();
                        if (angular.isFunction(scope.added))
                            scope.added({ $item: item });
                    };
                    scope.toggleSearch = function (apply) {
                        if (apply === void 0) { apply = false; }
                        scope.searchMode = !scope.searchMode;
                        if (scope.searchMode) {
                            input.css("width", "400px");
                            input.focus();
                            _this.placeDropDown(container, drop);
                            $(document).on('click', clickHandler);
                        }
                        else {
                            input.css('width', '10px');
                            $(document).off('click', clickHandler);
                        }
                        if (apply) {
                            scope.$apply();
                        }
                    };
                };
            }
            MultiSelect.prototype.placeDropDown = function (container, drop) {
                var offset = container.offset();
                drop.css({ top: (offset.top + container.height()) + "px", left: offset.left + "px", position: "fixed", width: container.width() + "px" });
            };
            MultiSelect.directiveId = "multiSelect";
            return MultiSelect;
        })();
        Web.MultiSelect = MultiSelect;
        timeRecorder.directive(MultiSelect.directiveId, [function () {
            return new MultiSelect();
        }]);
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
timeRecorder.filter('minsToHours', function ($filter) { return function (mins) {
    if (!angular.isNumber(mins))
        return mins;
    return mins / 60;
}; });
var DispoClient;
(function (DispoClient) {
    var Signature;
    (function (Signature) {
        var SignaturePopupModalController = (function () {
            function SignaturePopupModalController($scope, $modalInstance, initialSignatureBase64, title) {
                var _this = this;
                this.$scope = $scope;
                this.$modalInstance = $modalInstance;
                this.initialSignatureBase64 = initialSignatureBase64;
                this.title = title;
                this.setSignature = function (signatureBase64) {
                    _this.signatureBase64 = signatureBase64;
                };
            }
            SignaturePopupModalController.prototype.ok = function () {
                this.$modalInstance.close({
                    signatureBase64: this.signatureBase64
                });
            };
            SignaturePopupModalController.prototype.cancel = function () {
                this.$modalInstance.dismiss();
            };
            SignaturePopupModalController.$inject = ["$scope", "$modalInstance", "initialSignatureBase64", "title"];
            SignaturePopupModalController.controllerId = "SignaturePopupModalController";
            return SignaturePopupModalController;
        })();
        Signature.SignaturePopupModalController = SignaturePopupModalController;
        var sig = angular.module('tlSignature', []);
        // Update the app1 variable name to be that of your module variable
        timeRecorder.controller(SignaturePopupModalController.controllerId, SignaturePopupModalController);
        function openSignaturePopup($modal, signatureBase64, popupTitle) {
            if (popupTitle === void 0) { popupTitle = "_signature"; }
            var modalInstance = $modal.open({
                //animation: true,
                templateUrl: "Client/Views/directives/templates/tlSignaturePopupTemplate.html",
                controller: SignaturePopupModalController.controllerId,
                controllerAs: "ctrl",
                resolve: {
                    initialSignatureBase64: function () {
                        return signatureBase64;
                    },
                    title: function () {
                        return popupTitle;
                    }
                }
            });
            return modalInstance.result.then(function (result) {
                return result;
            }, function () {
                return null;
            });
        }
        Signature.openSignaturePopup = openSignaturePopup;
    })(Signature = DispoClient.Signature || (DispoClient.Signature = {}));
})(DispoClient || (DispoClient = {}));
var sig = angular.module('tlSignature', []);
sig.directive("tlSignature", ['$modal', function ($modal) {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "Client/Views/directives/templates/tlSignatureTemplate.html",
        scope: {
            signatureImageFn: "=",
            canvasHeight: "=",
            canvasWidth: "=",
            clear: "=",
            saveSize: "=?",
            initialBase64: "=?",
            enabled: "=",
            supportsPopup: "=",
            popupTitle: "="
        },
        link: function (scope, element, attrs) {
            // if we support the popup mode then we disabled the usual canvas as the canvas will be in the popup modal
            if (!angular.isFunction(scope.signatureImageFn))
                throw "Developer error, tlSignature does not have a bound function to save the image!";
            var canvas = $(element).find("#canvas")[0];
            var clearButton = $(element).find("#clearButton");
            var ctx = canvas.getContext("2d");
            // the last coordinates before the current move
            var lastPt;
            var saveFunction = function () {
                if (Triarc.hasValue(scope.saveSize)) {
                    if (ctx.canvas.toDataURL().length > scope.saveSize) {
                        scope.signatureImageFn(ctx.canvas.toDataURL().split(",")[1]);
                    }
                }
                else {
                    scope.signatureImageFn(ctx.canvas.toDataURL().split(",")[1]);
                }
            };
            var clearSignature = function () {
                scope.signatureImageFn(null);
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            };
            scope.clearSignature = function () {
                clearSignature();
            };
            scope.$watch("initialBase64", function (base64String, previousValue) {
                if (Triarc.strNotEmpty(base64String) && base64String !== previousValue) {
                    var signature = new Image;
                    signature.setAttribute("src", 'data:image/png;base64,' + base64String);
                    ctx.drawImage(signature, 0, 0);
                }
            });
            attrs.$observe("canvasHeight", function (newValue) {
                canvas.height = newValue;
                element.height(newValue);
            });
            attrs.$observe("canvasWidth", function (newValue) {
                canvas.width = newValue;
                element.width(newValue);
            });
            scope.$watch("clear", function (clear, oldValue) {
                if (clear) {
                    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                    scope.clear = false;
                }
            });
            if (!scope.supportsPopup) {
                scope.$watch("enabled", function (isDisabled, oldValue) {
                    if (!isDisabled) {
                        $(clearButton).on('touchstart', function (e) {
                            e.preventDefault();
                            e.stopPropagation();
                            clearSignature();
                        });
                        element.on('touchstart', function (e) {
                            if (e.target.id === "clearButton") {
                                clearSignature();
                                return;
                            }
                            e.preventDefault();
                            ctx.fillRect(e.originalEvent.touches[0].pageX - $(element).offset().left, e.originalEvent.touches[0].pageY - $(element).offset().top, 3, 3);
                            lastPt = { x: e.originalEvent.touches[0].pageX - $(element).offset().left, y: e.originalEvent.touches[0].pageY - $(element).offset().top };
                            saveFunction();
                        });
                        element.on('touchmove', function (e) {
                            if (e.target.id === "clearButton") {
                                clearSignature();
                                return;
                            }
                            e.preventDefault();
                            if (lastPt != null) {
                                ctx.beginPath();
                                ctx.moveTo(lastPt.x, lastPt.y);
                                ctx.lineWidth = 4;
                                ctx.lineTo(e.originalEvent.touches[0].pageX - $(element).offset().left, e.originalEvent.touches[0].pageY - $(element).offset().top);
                                ctx.stroke();
                            }
                            lastPt = { x: e.originalEvent.touches[0].pageX - $(element).offset().left, y: e.originalEvent.touches[0].pageY - $(element).offset().top };
                            saveFunction();
                        });
                        element.on('touchend', function (e) {
                            e.preventDefault();
                            lastPt = null;
                        });
                    }
                    else {
                        element.unbind("touchstart");
                        element.unbind("touchmove");
                        element.unbind("touchend");
                    }
                });
            }
            else {
                var popupIsOpen = false;
                var openPopupModalFn = function () {
                    scope.$apply(function () {
                        if (!popupIsOpen) {
                            popupIsOpen = true;
                            var currentSignature = ctx.canvas.toDataURL().length > 0 ? ctx.canvas.toDataURL() : scope.initialBase64;
                            DispoClient.Signature.openSignaturePopup($modal, currentSignature, scope.popupTitle).then(function (result) {
                                if (result !== null) {
                                    clearSignature();
                                    if (Triarc.hasValue(result.signatureBase64)) {
                                        var signature = new Image;
                                        signature.setAttribute("src", 'data:image/png;base64,' + result.signatureBase64);
                                        if (Triarc.hasValue(result.signatureBase64)) {
                                            ctx.drawImage(signature, 0, 0, canvas.width, canvas.height);
                                        }
                                        saveFunction();
                                    }
                                }
                                popupIsOpen = false;
                            });
                        }
                    });
                };
                scope.$watch("disabled", function (isDisabled, oldValue) {
                    if (!isDisabled) {
                        element.on('touchstart', function (e) {
                            openPopupModalFn();
                        });
                        element.on('click', function (e) {
                            openPopupModalFn();
                        });
                        element.on('touchmove', function (e) {
                            openPopupModalFn();
                        });
                    }
                    else {
                        element.unbind("touchstart");
                        element.unbind("touchmove");
                        element.unbind("touchend");
                    }
                });
            }
        }
    };
}]);
/// <reference path="directives/filterheader.ts" />
/// <reference path="directives/projecttree.ts" />
/// <reference path="directives/multiselect.ts" />
/// <reference path="directives/minstohours.ts" />
// tlSignature todo move to bower!
/// <reference path="directives/tlsignaturepopupmodal.ts" />
/// <reference path="directives/tlsignature.ts" />  
/// <reference path="client/data/data.ts" />
/// <reference path="Client/timeRecorder.ts" /> 
/// <reference path="client/filters/filters.ts" />
/// <reference path="client/datacontrollers/viewmodels/_viewmodel_references.ts" />
/// <reference path="client/datarepositories/_repositories_references.ts" />
/// <reference path="client/datacontrollers/datacontroller_references.ts" />
/// <reference path="Client/_services.ts" />
/// <reference path="Client/_controllers.ts" />
/// <reference path="client/directives.ts" />
;angular.module('tl-time-recorder').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('Client/Views/config.html',
    "<div ng-controller=\"TrConfigController as ctrl\"><h2>Konfiguration</h2><hr><div class=\"row\"><div class=\"col-md-12 form-horizontal\"><div class=\"form-group\"><label class=\"col-md-1 control-label\" for=\"timeOut\">Timeout</label><div class=\"col-md-8\"><input class=\"form-control\" maxlength=\"60\" style=\"max-width: 280px\" id=\"timeOut\" type=\"number\" ng-model=\"ctrl.config.timeOut\"></div></div><div class=\"form-group\"><label class=\"col-md-1 control-label\" for=\"logo\">Logo</label><div class=\"col-md-8\" ng-hide=\"ctrl.hasImage\"><input type=\"file\" id=\"logo\" maxlength=\"200\" class=\"form-control\" accept=\".png, .PNG, .jpg,.JPG\" onchange=\"angular.element(this).scope().ctrl.onImageSeleted()\"></div><div class=\"col-md-2\" ng-show=\"ctrl.hasImage\"><img style=\"width: 100%\" src=\"{{ctrl.imgUrl}}\" alt=\"\"></div><div ng-show=\"ctrl.hasImage\" class=\"col-md-1\"><div class=\"btn btn-default\" ng-click=\"ctrl.removeImage();\"><i class=\"glyphicon glyphicon-remove\"></i></div></div></div><div class=\"form-group\"><div class=\"col-md-4\"><div class=\"btn btn-default\" ng-click=\"ctrl.save()\">Speichern</div></div></div></div></div></div>"
  );


  $templateCache.put('Client/Views/directives/templates/tlSignaturePopupTemplate.html',
    "<div class=\"modal-header\"><h4 class=\"modal-title\">{{ctrl.title | translate}}</h4></div><div class=\"modal-body\"><tl-signature id=\"popupSignatureCanvas\" signature-image-fn=\"ctrl.setSignature\" canvas-width=\"550\" canvas-height=\"350\" initial-base-64=\"ctrl.initialSignatureBase64\" disabled></tl-signature></div><div class=\"modal-footer\"><button class=\"btn btn-primary\" ng-click=\"ctrl.ok()\" translate>_ok</button> <button class=\"btn btn-warning\" ng-click=\"ctrl.cancel()\" translate>_cancel</button></div>"
  );


  $templateCache.put('Client/Views/directives/templates/tlSignatureTemplate.html',
    "<div class=\"tl-signature\"><canvas id=\"canvas\" class=\"canvas\"></canvas><span id=\"clearButton\" ng-if=\"!disabled\" ng-click=\"clearSignature()\" class=\"glyphicon glyphicon-remove-circle tl-signature-remove\" aria-hidden=\"true\"></span></div>"
  );


  $templateCache.put('Client/Views/downloads.html',
    "<div ng-controller=\"TrDownloadController as ctrl\"><h2>Downloads</h2><hr><div class=\"col-md-7 tr-list\"><div class=\"row tr-list-head\"></div><div class=\"col-md-12\" ng-show=\"ctrl.loading\"><div class=\"tr-v-spacer\"></div><div class=\"tr-list-loader\"><div id=\"floatingBarsG\"><div class=\"blockG\" id=\"rotateG_01\"></div><div class=\"blockG\" id=\"rotateG_02\"></div><div class=\"blockG\" id=\"rotateG_03\"></div><div class=\"blockG\" id=\"rotateG_04\"></div><div class=\"blockG\" id=\"rotateG_05\"></div><div class=\"blockG\" id=\"rotateG_06\"></div><div class=\"blockG\" id=\"rotateG_07\"></div><div class=\"blockG\" id=\"rotateG_08\"></div></div></div></div><div class=\"row tr-list-item\" style=\"font-size: 14px\" ng-repeat=\"version in ctrl.versions\"><div class=\"col-md-4\"><span>{{version.versionName}}</span></div><div class=\"col-md-4\"><span>{{version.versionCode}}</span> &nbsp; <span ng-show=\"version.IsBeta\">(Beta)</span></div><div class=\"col-md-2\"><span>{{version.platform}}</span></div><div class=\"col-md-2\"><a ng-show=\"version.platform == 'Android'\" class=\"pull-right\" href=\"Downloads/TimeRecorder_{{version.versionCode}}.apk\">Download</a> <a ng-show=\"version.platform == 'iOS'\" class=\"pull-right\" href=\"{{ctrl.getIosDownloadLink(version.versionCode);}}\">Download</a></div></div></div></div>"
  );


  $templateCache.put('Client/Views/employee/contactDetails.html',
    "<div ng-controller=\"TrContactDetailsController as ctrl\"><div class=\"row\"><div class=\"col-xs-12\"><h2><span ng-if=\"ctrl.isNew()\">Kontakt erfassen</span> <span ng-if=\"!ctrl.isNew()\">Kontakt bearbeiten</span></h2></div></div><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><form name=\"contactForm\" class=\"form-horizontal\" novalidate><div class=\"row\"><div class=\"col-xs-12\"><div class=\"row\"><div class=\"col-xs-6\"><tl-validate target=\"contactForm.firstName\" label-text=\"'Vorname' | translate\" css-value=\"col-xs-8\" css-label=\"col-xs-4\" validate-now=\"ctrl.triggerValidation\" required class=\"form-value\"><input maxlength=\"60\" required class=\"form-control\" name=\"firstName\" type=\"text\" ng-model=\"ctrl.contact.firstName\"></tl-validate></div><div class=\"col-xs-6\"><tl-validate target=\"contactForm.lastName\" label-text=\"'Nachname' | translate\" css-value=\"col-xs-8\" css-label=\"col-xs-4\" validate-now=\"ctrl.triggerValidation\" required class=\"form-value\"><input maxlength=\"60\" required class=\"form-control\" name=\"lastName\" type=\"text\" ng-model=\"ctrl.contact.lastName\"></tl-validate></div></div><div class=\"row\"><div class=\"col-xs-6\"><tl-validate target=\"contactForm.email\" label-text=\"'Email' | translate\" css-value=\"col-xs-8\" css-label=\"col-xs-4\" validate-now=\"ctrl.triggerValidation\" required class=\"form-value\"><input maxlength=\"60\" required class=\"form-control\" name=\"lastName\" type=\"text\" ng-model=\"ctrl.contact.email\"></tl-validate></div><div class=\"col-xs-6\"><tl-validate target=\"contactForm.telephone\" label-text=\"'Telefon' | translate\" css-value=\"col-xs-8\" css-label=\"col-xs-4\" validate-now=\"ctrl.triggerValidation\" class=\"form-value timebookings-timeentry\" required><input maxlength=\"30\" class=\"form-control\" name=\"telephone\" type=\"text\" ng-model=\"ctrl.contact.telephone\"></tl-validate></div></div><div class=\"row\"><div class=\"col-xs-6\"><tl-validate target=\"contactForm.street\" label-text=\"'Strasse' | translate\" css-value=\"col-xs-8\" css-label=\"col-xs-4\" validate-now=\"ctrl.triggerValidation\" class=\"form-value timebookings-timeentry\" required><input maxlength=\"60\" class=\"form-control\" name=\"street\" type=\"text\" ng-model=\"ctrl.contact.street\"></tl-validate></div><div class=\"col-xs-6\"><tl-validate target=\"contactForm.streetNumber\" label-text=\"'Nummer' | translate\" css-value=\"col-xs-8\" css-label=\"col-xs-4\" validate-now=\"ctrl.triggerValidation\" class=\"form-value timebookings-timeentry\" required><input maxlength=\"20\" class=\"form-control\" name=\"street\" type=\"text\" ng-model=\"ctrl.contact.streetNumber\"></tl-validate></div></div><div class=\"row\"><div class=\"col-xs-6\"><tl-validate target=\"contactForm.city\" label-text=\"'Stadt' | translate\" css-value=\"col-xs-8\" css-label=\"col-xs-4\" validate-now=\"ctrl.triggerValidation\" class=\"form-value timebookings-timeentry\" required><input maxlength=\"60\" class=\"form-control\" name=\"city\" type=\"text\" ng-model=\"ctrl.contact.city\"></tl-validate></div><div class=\"col-xs-6\"><tl-validate target=\"contactForm.country\" label-text=\"'Land' | translate\" css-value=\"col-xs-8\" css-label=\"col-xs-4\" validate-now=\"ctrl.triggerValidation\" class=\"form-value timebookings-timeentry\" required><input maxlength=\"60\" class=\"form-control\" name=\"country\" type=\"text\" ng-model=\"ctrl.contact.country\"></tl-validate></div></div><div class=\"row\"><div class=\"col-xs-6\"><tl-validate target=\"contactForm.countryCode\" label-text=\"'PLZ' | translate\" css-value=\"col-xs-8\" css-label=\"col-xs-4\" validate-now=\"ctrl.triggerValidation\" class=\"form-value timebookings-timeentry\" required><input maxlength=\"20\" class=\"form-control\" name=\"countryCode\" type=\"text\" ng-model=\"ctrl.contact.countryCode\"></tl-validate></div><div class=\"col-xs-6\"></div></div><div class=\"row\"><div class=\"col-xs-12\"><div class=\"btn btn-success pull-right\" ng-click=\"ctrl.save();\">Speichern</div><div class=\"pull-right\">&nbsp;</div><div class=\"btn btn-primary pull-right\" ng-click=\"ctrl.close()\">Abbrechen</div></div></div></div></div></form></div>"
  );


  $templateCache.put('Client/Views/employee/createExternalWorkReport.html',
    "<div ng-controller=\"TrCreateExternalWorkReportController as ctrl\" block-ui=\"fetchingData\"><ui-select ng-model=\"ctrl.selectedProject\" ng-change=\"ctrl.fetchAssociations($select.selected)\"><ui-select-match placeholder=\"{{'_select' | translate}}\">{{$select.selected.name}}</ui-select-match><ui-select-choices repeat=\"project in ctrl.searchedProjects track by $index\" refresh=\"ctrl.searchProjects($select.search)\"><div style=\"font-weight: bold\" ng-bind-html=\"project.name | highlight: $select.search\"></div><small><span class=\"detail\" ng-if=\"project.externalObjectName && project.externalNumber\"><span translate>Aba Projekt Referenz</span>&#58; <span ng-bind-html=\"project.externalObjectName + ' (' + project.externalNumber + ')'  | highlight: $select.search\"></span><br></span> <span class=\"detail\" ng-if=\"project.client\"><span translate>Betreiber</span>&#58; <span ng-bind-html=\"project.client.name | highlight: $select.search\">\"></span> <span>,&nbsp;</span> <span ng-bind-html=\"project.client.city\"></span><br></span> <span class=\"detail\" ng-if=\"project.anlageNr\"><span translate>Anlage-Nr.</span>&#58; <span ng-bind-html=\"project.anlageNr\"></span><br></span><!--       Removed as there is a bug!--> <span class=\"detail\"><span translate>Dauer</span>&#58; <span>{{project.timeBookingFrom | date:'dd.MM.yyyy'}}&mdash;{{project.timeBookingTo | date:'dd.MM.yyyy'}}</span></span></small></ui-select-choices></ui-select><div class=\"tr-v-spacer\"></div><div class=\"row\" ng-if=\"ctrl.selectedProject\"><div class=\"col-md-3\"><label>Betreiber:</label></div><div class=\"col-md-9\"><div>{{ctrl.associatedClient.name}}</div></div></div><div class=\"row\" ng-if=\"ctrl.selectedProject.externalObjectName && ctrl.selectedProject.externalNumber\"><div class=\"col-md-3\"><label>Aba Projekt Referenz:</label></div><div class=\"col-md-9\"><div>{{ctrl.selectedProject.externalObjectName}}&nbsp;({{ctrl.selectedProject.externalNumber}})</div></div></div><!--       Removed as there is a bug!--><!--  <div class=\"row\" ng-if=\"ctrl.selectedProject\">--><!--    <div class=\"col-md-3\">--><!--      <label translate>Dauer:</label>--><!--    </div>--><!--    <div class=\"col-md-9\">--><!--      {{ctrl.selectedProject.timeBookingFrom | date:'dd.MM.yyyy'}}&mdash;{{ctrl.selectedProject.timeBookingTo | date:'dd.MM.yyyy'}}--><!--    </div>--><!--  </div>--><!--<div class=\"row\" ng-if=\"ctrl.selectedProject && ctrl.selectedProject.description\">\n" +
    "    <div class=\"col-md-3\">\n" +
    "      <label>Beschreibung: </label>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-9\">\n" +
    "      <div>{{ctrl.selectedProject.description}}</div>\n" +
    "    </div>\n" +
    "  </div>--><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><div class=\"row\"><div class=\"col-xs-12\"><div ng-show=\"ctrl.selectedProject\" class=\"btn btn-success pull-right\" ng-click=\"ctrl.next();\">Öffnen</div><div class=\"pull-right\">&nbsp;</div><div class=\"btn btn-primary pull-right\" ng-click=\"side.close()\">Abbrechen</div></div></div></div>"
  );


  $templateCache.put('Client/Views/employee/employeeEditWorkReport.html',
    "<div id=\"workReport\" class=\"work-report\" tl-full-height><ui-view class=\"detail-slide\"></ui-view><div class=\"row\"><div class=\"col-md-12\"><form name=\"workReportForm\" class=\"form-horizontal expenses\" novalidate><ng-include include-replace src=\"'header.section.template.html'\"></ng-include><div class=\"tr-v-spacer\"></div><ng-include include-replace src=\"'timeBooking.section.template.html'\"></ng-include><!--<div class=\"tr-v-spacer\"></div>--><ng-include class=\"avoid-page-break\" src=\"'options.section.template.html'\"></ng-include><div class=\"tr-v-spacer\"></div><ng-include class=\"avoid-page-break\" src=\"'workreport.material.section.template.html'\"></ng-include><div class=\"tr-v-spacer\"></div><ng-include include-replace src=\"'comments.section.template.html'\"></ng-include><div class=\"tr-v-spacer\"></div><ng-include src=\"'workToDo.section.template.html'\"></ng-include><div class=\"tr-v-spacer hidden-from-print\"></div><ng-include class=\"avoid-page-break\" src=\"'signature.section.template.html'\"></ng-include><div class=\"tr-v-spacer hidden-from-print\"></div><ng-include src=\"'buttons.section.template.html'\" class=\"hidden-from-print\"></ng-include></form></div></div></div><script type=\"text/ng-template\" id=\"buttons.section.template.html\"><div class=\"row\" style=\"page-break-inside: avoid; page-break-after: auto;\">\n" +
    "    <!--<button class=\"btn btn-success hidden-from-print\" ng-click=\"ctrl.savePdf()\" translate>Save Pdf</button>-->\n" +
    "    <div class=\"col-xs-3 col-md-offset-9\">\n" +
    "      <button class=\"btn btn-primary hidden-from-print pull-right\" ng-disabled=\"ctrl.$services.pageLock.buttonLock\" ng-if=\"!ctrl.reportIsOpen(ctrl.workReport.externalWorkReport)\" ng-click=\"ctrl.cancel()\" translate>Zurück</button>\n" +
    "      <button class=\"btn btn-success hidden-from-print pull-right\" ng-disabled=\"ctrl.$services.pageLock.buttonLock\" ng-if=\"ctrl.reportIsOpen(ctrl.workReport.externalWorkReport)\" ng-click=\"ctrl.save()\" ng-disabled=\"ctrl.$services.pageLock.buttonLock\" translate>Speichern</button>\n" +
    "      <div class=\"pull-right\">&nbsp;</div>\n" +
    "      <button class=\"btn btn-primary hidden-from-print pull-right\" ng-disabled=\"ctrl.$services.pageLock.buttonLock\" ng-if=\"ctrl.reportIsOpen(ctrl.workReport.externalWorkReport)\" ng-click=\"ctrl.cancel()\" ng-disabled=\"ctrl.$services.pageLock.buttonLock\" translate>Abbrechen</button>\n" +
    "    </div>\n" +
    "  </div></script><script type=\"text/ng-template\" id=\"header.section.template.html\"><div class=\"row\">\n" +
    "    <div class=\"col-xs-6\">\n" +
    "      <div class=\"logo\"></div>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-6\">\n" +
    "      <h2 class=\"testingC\">Arbeitsrapport&nbsp; Nr.&nbsp;{{ctrl.workReport.externalWorkReport.workReportNumber}}</h2>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row hidden-from-print\">\n" +
    "    <div class=\"col-xs-4 col-xs-offset-8\">\n" +
    "      <button class=\"btn btn-primary hidden-from-print pull-right\" ui-sref=\"tr.employeeWorkReport.edit.side.statistic({projectId : ctrl.workReport.externalWorkReport.project.externalNumber})\" translate>_projectStatistic</button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"tr-v-spacer\"></div>\n" +
    "  <div class=\"row header-section\">\n" +
    "    <div class=\"col-xs-6\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-xs-4\">\n" +
    "          <label translate=\"Betreiber\"></label>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-8\">\n" +
    "          {{ctrl.workReport.externalWorkReport.client.name}},&nbsp; {{ctrl.workReport.externalWorkReport.client.city}}\n" +
    "          <span ng-if=\"ctrl.workReport.externalWorkReport.project.additionalInformation.contactPerson\">, &nbsp;{{ctrl.workReport.externalWorkReport.project.additionalInformation.contactPerson}}</span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-xs-4\">\n" +
    "          <label translate=\"Anlage\"></label>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-8\">\n" +
    "          {{ctrl.workReport.externalWorkReport.project.additionalInformation.anlagenNr}},&nbsp; {{ctrl.workReport.externalWorkReport.project.additionalInformation.anlagenName}}\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-xs-4\">\n" +
    "          <label translate=\"Objekt\"></label>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-8\">\n" +
    "          <tl-svm-object-number-formatter object-number=\"ctrl.workReport.externalWorkReport.project.additionalInformation.objectId\"></tl-svm-object-number-formatter>,&nbsp;{{ctrl.workReport.externalWorkReport.project.additionalInformation.objectName}}\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-xs-4\">\n" +
    "          <label translate=\"Auftrag-Nr.\"></label>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-8\">\n" +
    "          <span ng-if=\"ctrl.workReport.externalWorkReport.project.additionalInformation.projectBillingNr\">\n" +
    "            <tl-abacus-project-number-formatter project-number=\"ctrl.workReport.externalWorkReport.project.additionalInformation.projectBillingNr\"></tl-abacus-project-number-formatter>\n" +
    "          </span>\n" +
    "          <span ng-if=\"!ctrl.workReport.externalWorkReport.project.additionalInformation.projectBillingNr\">\n" +
    "            -\n" +
    "          </span>\n" +
    "          <span>{{ctrl.workReport.externalWorkReport.project.invocieType | tlEnum:'TimeRecorder.Web.Data.EInvoiceType'}}</span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-6\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-xs-4\">\n" +
    "          <label translate=\"Bestell-Nr.\"></label>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-8\">\n" +
    "          <span ng-if=\"ctrl.workReport.externalWorkReport.project.additionalInformation.orderNumber\">\n" +
    "            {{ctrl.workReport.externalWorkReport.project.additionalInformation.orderNumber}}\n" +
    "          </span>\n" +
    "          <span ng-if=\"!ctrl.workReport.externalWorkReport.project.additionalInformation.orderNumber\">\n" +
    "            -\n" +
    "          </span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-xs-4\">\n" +
    "          <label translate=\"Job\"></label>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-8\">\n" +
    "          {{ctrl.workReport.externalWorkReport.project.name}}&nbsp;({{ctrl.workReport.externalWorkReport.project.externalNumber}})\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-xs-4\">\n" +
    "          <label translate=\"Typ\"></label>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-8\">\n" +
    "          {{ctrl.workReport.externalWorkReport.project.type.name}}\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-xs-4\">\n" +
    "          <label translate=\"Zeitraum\"></label>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-8\">\n" +
    "          {{ctrl.workReport.externalWorkReport.from | date:'dd.MM.yyyy'}}&mdash;{{ctrl.workReport.externalWorkReport.to | date:'dd.MM.yyyy'}}\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div></script><script type=\"text/ng-template\" id=\"timeBooking.section.template.html\"><div class=\"row\" style=\"page-break-after: auto; page-break-inside: avoid;\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "      <div class=\"row tr-list print\" ng-repeat=\"dayContainer in ctrl.dayContainers | orderBy:'date'\">\n" +
    "        <div class=\"col-xs-12\">\n" +
    "          <div class=\"row avoid-page-break tr-list-item tr-list-header\">\n" +
    "            <div class=\"col-xs-6\">\n" +
    "              {{dayContainer.date | date:'dd.MM.yyyy'}}\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-2 col-xs-offset-4\">\n" +
    "              {{ctrl.workReport.getDailyTotalMins(dayContainer) }}\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"row avoid-page-break\" ng-repeat=\"group in dayContainer.timeBookingGroups | orderBy:'[isAdditionalBooking, from]'\">\n" +
    "            <div class=\"col-xs-12\">\n" +
    "              <div ng-if=\"group.timeBooking\" class=\"row tr-list-item timebooking-list-item confirmed-timebooking\">\n" +
    "                <div class=\"col-xs-8\">\n" +
    "                  {{group.timeBooking.type.name}}\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-2\">\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-2\">\n" +
    "                  {{ctrl.workReport.getWorkedMins(group.timeBooking.start, group.timeBooking.stop) }}\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div ng-if=\"group.additionalBooking\" class=\"row avoid-page-break tr-list-item timebooking-extra-list-item confirmed-timebooking\">\n" +
    "                <div class=\"col-xs-8\">\n" +
    "                  {{group.additionalBooking.type.name}}\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-2\">\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-2\">\n" +
    "                  {{ctrl.workReport.getWorkedMins(group.additionalBooking.start, group.additionalBooking.stop) }}\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div></script><script type=\"text/ng-template\" id=\"options.section.template.html\"><div class=\"row\" style=\"page-break-after: auto; page-break-inside: avoid;\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "      <div class=\"row tr-list-item timebooking-list-item confirmed-timebooking\">\n" +
    "        <div class=\"col-xs-offset-9 col-xs-1\">\n" +
    "          <label translate=\"Total\" class=\"pull-right\"></label>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-2\">\n" +
    "          <label>{{ctrl.workReport.totalWorkedMins }}</label>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <!--<div class=\"row\">\n" +
    "        <div class=\"col-xs-12\">\n" +
    "          <label translate=\"Arbeit fertig zur Verrechnung\"></label>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"row tr-list-item timebooking-list-item confirmed-timebooking\">-->\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-xs-12\">\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-xs-10 btn-group\">\n" +
    "              <input type=\"checkbox\" ng-if=\"ctrl.workReport.externalWorkReport.projectCompleted\" class=\"printable-element\" checked>\n" +
    "              <input type=\"checkbox\" ng-if=\"!ctrl.workReport.externalWorkReport.projectCompleted\" class=\"printable-element\">\n" +
    "              <!--<label class=\"printable-element\" ng-show=\"ctrl.projectComplete\">&#10004;</label>\n" +
    "              <label class=\"printable-element\" ng-show=\"!ctrl.projectComplete\">&#10008;</label>-->\n" +
    "              <input type=\"checkbox\" class=\"hidden-from-print\" ng-disabled=\"!ctrl.reportIsOpen(ctrl.workReport.externalWorkReport) || ctrl.$services.pageLock.buttonLock\" ng-model=\"ctrl.workReport.externalWorkReport.projectCompleted\">\n" +
    "              <label class=\"align-with-checkbox\">Arbeit fertig zur Verrechnung</label>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-xs-4\">\n" +
    "              <input type=\"checkbox\" class=\"printable-element\" ng-if=\"ctrl.workReport.externalWorkReport.warranty\" checked>\n" +
    "              <input type=\"checkbox\" class=\"printable-element\" ng-if=\"!ctrl.workReport.externalWorkReport.warranty\">\n" +
    "              <!--<label class=\"printable-element\" ng-show=\"ctrl.workReport.externalWorkReport.warranty\">&#10004;</label>\n" +
    "              <label class=\"printable-element\" ng-show=\"!ctrl.workReport.externalWorkReport.warranty\">&#10008;</label>-->\n" +
    "              <input type=\"checkbox\" class=\"hidden-from-print\" ng-disabled=\"!ctrl.reportIsOpen(ctrl.workReport.externalWorkReport) || ctrl.$services.pageLock.buttonLock\" ng-model=\"ctrl.workReport.externalWorkReport.warranty\">\n" +
    "              <label class=\"align-with-checkbox\">Garantieantrag</label>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div></script><script type=\"text/ng-template\" id=\"workreport.material.section.template.html\"><div class=\"row\" style=\"page-break-after: auto; page-break-inside: avoid;\">\n" +
    "    <div class=\"col-md-12\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-xs-12\">\n" +
    "          <label translate=\"Material/Lieferschein Nr./Fremdleistungen\"></label>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"row timebooking-list-item\" style=\"padding-top:15px\">\n" +
    "        <div class=\"col-xs-12 material-field\">\n" +
    "          <tl-validate ng-if=\"ctrl.reportIsOpen(ctrl.workReport.externalWorkReport)\"\n" +
    "                       target=\"workReportForm.materials\"\n" +
    "                       label-text=\"\"\n" +
    "                       css-value=\"col-md-12\"\n" +
    "                       css-label=\"col-md-0\"\n" +
    "                       validate-now=\"ctrl.triggerValidation\"\n" +
    "                       clear-validation-errors=\"ctrl.clearValidationErrors\"\n" +
    "                       class=\"hidden-from-print\">\n" +
    "            <textarea name=\"materials\"\n" +
    "                      class=\"form-control\"\n" +
    "                      ng-model=\"ctrl.workReport.externalWorkReport.materials\"\n" +
    "                      ng-disabled=\"ctrl.$services.pageLock.buttonLock\"\n" +
    "                      tl-autosize></textarea>\n" +
    "          </tl-validate>\n" +
    "          <span ng-show=\"!ctrl.reportIsOpen(ctrl.workReport.externalWorkReport)\">{{ctrl.workReport.externalWorkReport.materials}}</span>\n" +
    "          <span ng-if=\"ctrl.workReport.externalWorkReport.materials.length > 0\" class=\"printable-element\" style=\"white-space:pre-wrap;\">{{ctrl.workReport.externalWorkReport.materials}}</span>\n" +
    "          <span ng-if=\"!ctrl.workReport.externalWorkReport.materials.length > 0\" class=\"printable-element\">\n" +
    "            -\n" +
    "          </span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"tr-v-spacer\"></div>\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-xs-12\">\n" +
    "          <label translate=\"Arbeitsumfang\"></label>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"row timebooking-list-item checkbox-list\">\n" +
    "        <div class=\"col-md-4\" ng-repeat=\"workItem in ctrl.workReport.externalWorkReport.workItems.items\">\n" +
    "          <span class=\"printable-element\">\n" +
    "            <span ng-if=\"workItem.selected\">&#10004;</span>\n" +
    "            <span ng-if=\"!workItem.selected\" class=\"checkbox-list-unchecked\"></span>\n" +
    "            <span class=\"work-item-name\">{{workItem.name}}</span>\n" +
    "          </span>\n" +
    "          <label class=\"hidden-from-print\">\n" +
    "            <input type=\"checkbox\"\n" +
    "                   ng-disabled=\"!ctrl.reportIsOpen(ctrl.workReport.externalWorkReport) || ctrl.$services.pageLock.buttonLock\"\n" +
    "                   ng-model=\"workItem.selected\" />{{workItem.name}}\n" +
    "          </label>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div></script><script type=\"text/ng-template\" id=\"comments.section.template.html\"><div class=\"row\" style=\"page-break-after: auto; page-break-inside: avoid;\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-xs-12\">\n" +
    "          <label translate=\"Bemerkung\"></label>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"row timebooking-list-item\" style=\"padding-top:15px\">\n" +
    "        <div class=\"col-xs-12\">\n" +
    "          <textarea name=\"comments\"\n" +
    "                    ng-if=\"ctrl.reportIsOpen(ctrl.workReport.externalWorkReport)\"\n" +
    "                    class=\"form-control hidden-from-print\"\n" +
    "                    ng-model=\"ctrl.workReport.externalWorkReport.comments\"\n" +
    "                    ng-disabled=\"ctrl.$services.pageLock.buttonLock\"\n" +
    "                    tl-autosize></textarea>\n" +
    "          <span ng-if=\"!ctrl.reportIsOpen(ctrl.workReport.externalWorkReport)\">{{ctrl.workReport.externalWorkReport.comments}}</span>\n" +
    "          <span ng-if=\"ctrl.workReport.externalWorkReport.comments.length > 0\" class=\"printable-element\" style=\"white-space:pre-wrap;\">{{ctrl.workReport.externalWorkReport.comments}}</span>\n" +
    "          <span ng-if=\"!ctrl.workReport.externalWorkReport.comments.length > 0\" class=\"printable-element\">\n" +
    "            -\n" +
    "          </span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div></script><script type=\"text/ng-template\" id=\"workToDo.section.template.html\"><div class=\"row\" style=\"page-break-after: auto; page-break-inside: avoid;\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-xs-12\">\n" +
    "          <label translate=\"_workToDo\"></label>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"row timebooking-list-item\" style=\"padding-top:15px\">\n" +
    "        <div class=\"col-xs-12\">\n" +
    "          <textarea name=\"workToDo\"\n" +
    "                    ng-if=\"ctrl.reportIsOpen(ctrl.workReport.externalWorkReport)\"\n" +
    "                    class=\"form-control hidden-from-print\"\n" +
    "                    ng-model=\"ctrl.workReport.externalWorkReport.workToDo\"\n" +
    "                    ng-disabled=\"ctrl.$services.pageLock.buttonLock\"\n" +
    "                    tl-autosize></textarea>\n" +
    "          <span ng-if=\"!ctrl.reportIsOpen(ctrl.workReport.externalWorkReport)\">{{ctrl.workReport.externalWorkReport.workToDo}}</span>\n" +
    "          <span ng-if=\"ctrl.workReport.externalWorkReport.workToDo.length > 0\" class=\"printable-element\" style=\"white-space:pre-wrap;\">{{ctrl.workReport.externalWorkReport.workToDo}}</span>\n" +
    "          <span ng-if=\"!ctrl.workReport.externalWorkReport.workToDo.length > 0\" class=\"printable-element\">\n" +
    "            -\n" +
    "          </span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"tr-v-spacer\"></div>\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-xs-2\">\n" +
    "          <span translate>_reportTo</span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-xs-6\">\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-sm-4\">\n" +
    "              <input type=\"checkbox\" class=\"printable-element\" ng-if=\"ctrl.workReport.externalWorkReport.sendPdfToProductOwner\" checked>\n" +
    "              <input type=\"checkbox\" class=\"printable-element\" ng-if=\"!ctrl.workReport.externalWorkReport.sendPdfToProductOwner\">\n" +
    "              <!--<span ng-show=\"workItem.selected\" class=\"printable-element\">&#10004;</span>\n" +
    "              <span ng-show=\"!workItem.selected\" class=\"printable-element\">&#10008;</span>-->\n" +
    "              <input type=\"checkbox\" class=\"hidden-from-print\" ng-disabled=\"!ctrl.reportIsOpen(ctrl.workReport.externalWorkReport) || ctrl.$services.pageLock.buttonLock\" ng-model=\"ctrl.workReport.externalWorkReport.sendPdfToProductOwner\">\n" +
    "              <label class=\"align-with-checkbox\" translate>_ownerName</label>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-8\">\n" +
    "              <span class=\"printable-element\">{{ctrl.workReport.externalWorkReport.companyInternToReportTo}}</span>\n" +
    "              <input name=\"companyInternToReportTo\"\n" +
    "                     class=\"hidden-from-print form-control\"\n" +
    "                     ng-disabled=\"!ctrl.reportIsOpen(ctrl.workReport.externalWorkReport) || ctrl.$services.pageLock.buttonLock\"\n" +
    "                     type=\"text\"\n" +
    "                     ng-model=\"ctrl.workReport.externalWorkReport.companyInternToReportTo\" />\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-6\">\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-sm-4\">\n" +
    "              <input name=\"reportToCustomer\" type=\"checkbox\" class=\"printable-element\" ng-if=\"ctrl.workReport.externalWorkReport.reportToCustomer\" checked>\n" +
    "              <input name=\"reportToCustomer\" type=\"checkbox\" class=\"printable-element\" ng-if=\"!ctrl.workReport.externalWorkReport.reportToCustomer\">\n" +
    "              <!--<span ng-show=\"workItem.selected\" class=\"printable-element\">&#10004;</span>\n" +
    "              <span ng-show=\"!workItem.selected\" class=\"printable-element\">&#10008;</span>-->\n" +
    "              <input type=\"checkbox\" class=\"hidden-from-print\" ng-disabled=\"!ctrl.reportIsOpen(ctrl.workReport.externalWorkReport) || ctrl.$services.pageLock.buttonLock\" ng-model=\"ctrl.workReport.externalWorkReport.reportToCustomer\">\n" +
    "              <label translate class=\"align-with-checkbox\">_customer</label>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-8\">\n" +
    "              <span class=\"printable-element\">{{ctrl.workReport.externalWorkReport.customerToReportTo}}</span>\n" +
    "              <input name=\"customerToReportTo\"\n" +
    "                     class=\"hidden-from-print form-control\"\n" +
    "                     ng-disabled=\"!ctrl.reportIsOpen(ctrl.workReport.externalWorkReport) || ctrl.$services.pageLock.buttonLock\"\n" +
    "                     type=\"text\"\n" +
    "                     ng-model=\"ctrl.workReport.externalWorkReport.customerToReportTo\" />\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div></script><script type=\"text/ng-template\" id=\"signature.section.template.html\"><div class=\"row\" style=\"page-break-after: auto; page-break-inside: avoid;\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-xs-6\">\n" +
    "          <label class=\"signature-person\">{{ctrl.currentEmployee.firstName + ' ' + ctrl.currentEmployee.lastName}}</label>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-6\">\n" +
    "          <label class=\"signature-person\" ng-if=\"!ctrl.reportIsOpen(ctrl.workReport.externalWorkReport)\">{{ctrl.selectedContact.firstName}}&nbsp;{{ctrl.selectedContact.lastName}}</label>\n" +
    "          <label class=\"printable-element signature-person\">{{ctrl.selectedContact.firstName}}&nbsp;{{ctrl.selectedContact.lastName}}</label>\n" +
    "          <div class=\"row\" ng-if=\"ctrl.reportIsOpen(ctrl.workReport.externalWorkReport)\">\n" +
    "            <ui-select name=\"selectedContact\" style=\"  width: 383px;\" class=\"hidden-from-print col-md-10\" ng-model=\"ctrl.selectedContact\">\n" +
    "              <ui-select-match placeholder=\"{{'Suche...' | translate}}\">\n" +
    "                {{$select.selected.firstName + ' ' + $select.selected.lastName}}\n" +
    "              </ui-select-match>\n" +
    "              <ui-select-choices repeat=\"contact in ctrl.clientContacts track by $index\">\n" +
    "                <div ng-bind-html=\"contact.firstName + ' ' + contact.lastName\"></div>\n" +
    "              </ui-select-choices>\n" +
    "            </ui-select>\n" +
    "            <div class=\"col-md-2\">\n" +
    "              <span ng-disabled=\"ctrl.$services.pageLock.buttonLock\"\n" +
    "                    ng-click=\"ctrl.openContactDetails(null)\"\n" +
    "                    ng-if=\"ctrl.reportIsOpen(ctrl.workReport.externalWorkReport)\"\n" +
    "                    class=\"glyphicon glyphicon-plus-sign align-glyphicon hidden-from-print\" aria-hidden=\"true\">\n" +
    "              </span>\n" +
    "              <span ng-disabled=\"ctrl.$services.pageLock.buttonLock\"\n" +
    "                    ng-click=\"ctrl.openContactDetails(ctrl.selectedContact.id)\"\n" +
    "                    ng-if=\"ctrl.selectedContact && ctrl.reportIsOpen(ctrl.workReport.externalWorkReport)\"\n" +
    "                    class=\"glyphicon glyphicon-pencil align-glyphicon hidden-from-print\" aria-hidden=\"true\">\n" +
    "              </span>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"tr-v-spacer hidden-from-print\"></div>\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-xs-6\">\n" +
    "          <img id=\"employeeSignatureImage\" class=\"printable-element\" />\n" +
    "          <tl-signature id=\"employeeSignatureCanvas\"\n" +
    "                        signature-image-fn=\"ctrl.setEmployeeSignatureImage\"\n" +
    "                        canvas-width=\"350\"\n" +
    "                        canvas-height=\"150\"\n" +
    "                        initial-base-64=\"ctrl.employeeSignatureImage\"\n" +
    "                        enabled=\"ctrl.reportIsOpen(ctrl.workReport.externalWorkReport) || false\"\n" +
    "                        supports-popup=\"true\"\n" +
    "                        popup-title=\"'Mitarbeiterunterschrift'\">\n" +
    "          </tl-signature>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-6\">\n" +
    "          <img id=\"contactSignatureImage\" class=\"printable-element\" />\n" +
    "          <tl-signature id=\"contactSignatureCanvas\"\n" +
    "                        signature-image-fn=\"ctrl.setContactSignatureImage\"\n" +
    "                        canvas-width=\"350\"\n" +
    "                        canvas-height=\"150\"\n" +
    "                        initial-base-64=\"ctrl.contactSignatureImage\"\n" +
    "                        enabled=\"ctrl.reportIsOpen(ctrl.workReport.externalWorkReport) || false\"\n" +
    "                        supports-popup=\"true\"\n" +
    "                        popup-title=\"'Betreiberunterschrift'\">\n" +
    "          </tl-signature>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-xs-6\">\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-6\">\n" +
    "          <label ng-show=\"ctrl.workReport.externalWorkReport.contactSignatureImageTimestamp\">Datum: {{ctrl.workReport.externalWorkReport.contactSignatureImageTimestamp | date:'dd.MM.yyyy HH:mm'}}</label>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"tr-v-spacer hidden-from-print\"></div>\n" +
    "      <div class=\"row hidden-from-print\">\n" +
    "        <div class=\"col-sm-6 col-sm-offset-6\">\n" +
    "          <input type=\"checkbox\" ng-disabled=\"!ctrl.reportIsOpen(ctrl.workReport.externalWorkReport) || ctrl.$services.pageLock.buttonLock\" ng-model=\"ctrl.workReport.externalWorkReport.getSignatureLater\">\n" +
    "          <label translate class=\"align-with-checkbox\">_getSignatureLater</label>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"tr-v-spacer hidden-from-print\"></div>\n" +
    "    </div>\n" +
    "  </div></script>"
  );


  $templateCache.put('Client/Views/employee/employeeSearchWorkReport.html',
    "<div id=\"workReport\" ng-controller=\"TrSearchWorkReportController as ctrl\" class=\"search-work-report full-height\"><ui-view class=\"detail-slide\"></ui-view><h1>Arbeitsrapport</h1><hr><div class=\"row filter-header\"><form class=\"col-md-12\" ng-submit=\"ctrl.search(true)\"><div class=\"row\"><div class=\"col-md-3\" ng-if=\"ctrl.canAdmin()\"><ui-select class=\"marginless-ui-select\" ng-change=\"ctrl.employeeSelected()\" ng-model=\"ctrl.selectedEmployee\"><ui-select-match allow-clear=\"true\" placeholder=\"{{'_select' | translate}}\">{{$select.selected.firstName + ' ' + $select.selected.lastName}}</ui-select-match><ui-select-choices repeat=\"employee in ctrl.searchedEmployees track by $index\" refresh=\"ctrl.searchEmployees($select.search)\"><div ng-bind-html=\"employee.firstName + ' ' + employee.lastName | highlight: $select.search\"></div></ui-select-choices></ui-select></div><div ng-class=\"{'col-md-3': !ctrl.canAdmin(), 'col-md-2': ctrl.canAdmin()}\"><ui-select class=\"marginless-ui-select\" ng-change=\"ctrl.projectSelected()\" ng-model=\"ctrl.selectedProject\" allow-clear=\"true\"><ui-select-match allow-clear=\"true\" placeholder=\"{{'Job' | translate}}\">{{$select.selected.name}}</ui-select-match><ui-select-choices repeat=\"project in ctrl.searchedProjects track by $index\" refresh=\"ctrl.searchProjects($select.search)\"><div ng-bind-html=\"project.name | highlight: $select.search\"></div></ui-select-choices></ui-select></div><div class=\"col-md-2\"><p class=\"input-group\"><input type=\"text\" class=\"form-control\" placeholder=\"Von\" current-text=\"Heute\" clear-text=\"Zurücksetzen\" close-text=\"Schliessen\" datepicker-popup max-date=\"ctrl.searchService.to\" ng-model=\"ctrl.searchService.from\" is-open=\"ctrl.datePickerStates['from']\"> <span class=\"input-group-btn\"><button type=\"button\" class=\"btn btn-default\" ng-click=\"ctrl.openDatepicker($event, 'from')\"><i class=\"glyphicon glyphicon-th-list\"></i></button></span></p></div><div class=\"col-md-2\"><p class=\"input-group\"><input type=\"text\" class=\"form-control\" placeholder=\"Bis\" current-text=\"Heute\" clear-text=\"Zurücksetzen\" close-text=\"Schliessen\" datepicker-popup min-date=\"ctrl.searchService.from\" ng-model=\"ctrl.searchService.to\" is-open=\"ctrl.datePickerStates['to']\"> <span class=\"input-group-btn\"><button type=\"button\" class=\"btn btn-default\" ng-click=\"ctrl.openDatepicker($event, 'to')\"><i class=\"glyphicon glyphicon-th-list\"></i></button></span></p></div><div class=\"col-md-2\"><ui-select class=\"marginless-ui-select\" ng-model=\"ctrl.searchService.state\"><ui-select-match placeholder=\"{{'Status' | translate}}\" allow-clear><span translate>{{ctrl.getStateDisplayName($select.selected)}}</span></ui-select-match><ui-select-choices repeat=\"state in (states | tlEnumOrdinals:'TimeRecorder.Web.Data.EWorkReportState')\"><span translate>{{ctrl.getStateDisplayName(state)}}</span></ui-select-choices></ui-select></div><div class=\"col-md-1\"><button type=\"submit\" class=\"btn btn-default\">Suchen</button></div><div class=\"col-md-2\" ng-show=\"ctrl.canCreateWorkreports()\"><button ui-sref=\"tr.employeeWorkReport.search.side.createExternalWorkReport\" class=\"btn btn-default pull-right\"><i class=\"glyphicon glyphicon-plus\"></i><span>Erstellen</span></button></div></div></form></div><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><div class=\"user-tasks\"><div class=\"col-md-12 tr-list-head\"><div class=\"row\"><div class=\"col-md-2\">Person</div><div class=\"col-md-2\">Betreiber/Anlage</div><div class=\"col-md-2\">Job</div><!--<div class=\"col-md-2\">Von</div>--><div class=\"col-md-3\">Von/Bis</div><div class=\"col-md-1\">Status</div><div class=\"col-md-2\"></div></div></div><div tl-scroll-top-limit=\"20\" tl-when-scrolled=\"ctrl.search(false)\" class=\"user-task-list\" tl-full-height ng-if=\"ctrl.showList && ctrl.searchResults.length > 0\"><div class=\"tr-list\"><div ng-repeat=\"externalWorkReport in ctrl.searchResults | orderBy:['-to','state'] track by $index \" class=\"col-md-12 tr-list-item search-result\" ng-style=\"{'background': ctrl.getBookingBackground(externalWorkReport) }\"><div class=\"row\"><div class=\"col-md-2 tr-ellipsis\">{{externalWorkReport.employee.fullName}}</div><div class=\"tr-ellipsis col-md-2\">{{externalWorkReport.client.name}},&nbsp;{{externalWorkReport.project.additionalInformation.anlagenNr}}</div><div class=\"tr-ellipsis col-md-2\">{{externalWorkReport.project.name}} ({{externalWorkReport.project.externalNumber}})</div><div class=\"col-md-3\">{{externalWorkReport.from | date : 'dd.MM.yyyy - H:mm'}}<br>{{externalWorkReport.to | date : 'dd.MM.yyyy - H:mm'}}</div><!--<div class=\"col-md-2\"></div>--><div class=\"col-md-1\">{{ctrl.getStateDisplayName(externalWorkReport.state) }}</div><div class=\"col-md-2 timebooking-list-buttons\"><span ng-if=\"ctrl.isOpen(externalWorkReport)\" ng-click=\"ctrl.editWorkReport(externalWorkReport)\" class=\"glyphicon glyphicon-edit\" translate></span> <span ng-if=\"!ctrl.isOpen(externalWorkReport)\" ng-click=\"ctrl.editWorkReport(externalWorkReport)\" class=\"glyphicon glyphicon-eye-open\" translate></span> <span ng-click=\"ctrl.download(externalWorkReport)\" ng-show=\"externalWorkReport.pdfFileName\" class=\"glyphicon glyphicon-download\"></span></div><div class=\"tr-list-selector-left\"></div><div class=\"tr-list-selector-right\"></div></div></div></div></div></div><div class=\"row tr-list-item\" ng-show=\"ctrl.showList && ctrl.searchResults.length === 0\"><div class=\"col-md-12\">Keine Einträge</div></div><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div></div>"
  );


  $templateCache.put('Client/Views/employee/modal/closeWorkReportModalTemplate.html',
    "<div class=\"modal-header\"><h4 class=\"modal-title\" translate>Warnung</h4></div><div class=\"modal-body\"><form name=\"closeReportForm\" class=\"form-horizontal\" novalidate><div class=\"row\"><div class=\"col-md-12\"><label translate>Möchten Sie den Arbeitsrapport abschliessen?</label></div></div><div class=\"tr-v-spacer\"></div><div class=\"row\"><div class=\"col-md-12\"><input type=\"checkbox\" style=\"width: 18px; height: 18px\" ng-model=\"externalWorkReport.projectCompleted\"><label class=\"align-with-checkbox\">&nbsp;Arbeit fertig zur Verrechnung</label></div></div><div class=\"row\"><div class=\"col-md-12\"><input type=\"checkbox\" style=\"width: 18px; height: 18px\" ng-model=\"externalWorkReport.sendPdfToEmployee\"><label class=\"align-with-checkbox\">&nbsp;Kopie an mich?</label></div></div></form></div><div class=\"modal-footer\"><button class=\"btn btn-primary\" ng-click=\"$dismiss('cancel')\" translate>Abbrechen</button> <button class=\"btn btn-success\" ng-click=\"$close(true)\" translate>Abschliessen</button></div>"
  );


  $templateCache.put('Client/Views/employee/modal/externalWorkReportRemainingCloseStateModalTemplate.html',
    "<div class=\"modal-header\"><h4 class=\"modal-title\" translate>Warnung</h4></div><div class=\"modal-body\"><form name=\"saveFilterForm\" class=\"form-horizontal\" novalidate><div class=\"row\"><div class=\"col-md-12\"><label translate>Um den Arbeitsrapport abzuschliessen, erfassen Sie bitte die folgenden Informationen:</label></div></div><div class=\"tr-v-spacer\"></div><div class=\"row\" ng-if=\"externalWorkReport.projectCompleted == null\"><div class=\"col-md-12\"><label translate>&bull; Arbeit Fertig (Ja/Nein)</label></div></div><div class=\"row\" ng-if=\"!externalWorkReport.materials || externalWorkReport.materials == ''\"><div class=\"col-md-12\"><label translate>&bull; Material/Lieferschein Nr./Fremdleistungen</label></div></div><div class=\"row\" ng-if=\"!externalWorkReport.employeeSignatureImage\"><div class=\"col-md-12\"><label translate>&bull; Unterschrift des Mitarbeiters</label></div></div><div class=\"row\" ng-if=\"!externalWorkReport.signedContactId\"><div class=\"col-md-12\"><label translate>&bull; Auswahl der Kontaktperson</label></div></div><div class=\"row\" ng-if=\"!externalWorkReport.contactSignatureImage\"><div class=\"col-md-12\"><label translate>&bull; Unterschrift der Kontaktperson</label></div></div></form></div><div class=\"modal-footer\"><button class=\"btn btn-primary\" ng-click=\"$dismiss('cancel')\" translate>Abbrechen</button> <button class=\"btn btn-success\" ng-click=\"$close(true)\" translate>Speichern ohne Abzuschliessen</button></div>"
  );


  $templateCache.put('Client/Views/employee/modal/timeBookingsNotVisumedModalTemplate.html',
    "<div class=\"modal-header\"><h4 class=\"modal-title\" translate>Warnung</h4></div><div class=\"modal-body\"><div class=\"row\"><div class=\"col-md-12\"><label translate>Für die folgenden Jobs haben Sie unvisierte Buchungen:</label></div></div><div class=\"tr-v-spacer\"></div><div class=\"row\"><div class=\"col-md-5\">Betreiber/Anlage</div><div class=\"col-md-5\">JobNr. / Tätigkeit</div><div class=\"col-md-2\">Datum</div></div><div class=\"row tr-list-item timebooking-list-item\" ng-repeat=\"timeBooking in timeBookings\"><div class=\"col-md-5\"><span>{{timeBooking.client}}</span> <span ng-show=\"timeBooking.anlageNr\">,&nbsp;{{timeBooking.anlageNr}}</span></div><div class=\"col-md-5\">{{timeBooking.projectName}}</div><div class=\"col-md-2\">{{timeBooking.start | date : 'dd.MM.yyyy'}}</div></div></div><div class=\"modal-footer\"><button class=\"btn btn-primary\" ng-click=\"$dismiss('cancel')\" translate>Abbrechen</button> <button class=\"btn btn-success\" ng-click=\"$close(true)\" translate>Abschliessen</button></div>"
  );


  $templateCache.put('Client/Views/entries.html',
    "<div ng-controller=\"TrEntryController as ctrl\"><h2>Buchungen</h2><hr><div ng-hide=\"ctrl.editMode\"><div class=\"row\"><div class=\"col-md-12\"><div class=\"row\"><div class=\"col-md-3\"><input type=\"text\" maxlength=\"60\" placeholder=\"Person\" ng-model=\"ctrl.search.personSearch\" typeahead-on-select=\"ctrl.selected($item, $model, $label)\" typeahead=\"p.label as p.label for p in ctrl.persons | filter:$viewValue | limitTo:8\" class=\"form-control\"></div><div class=\"col-md-2\"><p class=\"input-group\"><input type=\"text\" class=\"form-control\" placeholder=\"Von\" current-text=\"Heute\" clear-text=\"Zurücksetzen\" close-text=\"Schliessen\" datepicker-popup=\"{{ctrl.dateFormat}}\" ng-model=\"ctrl.search.from\" is-open=\"ctrl.fromOpen\"> <span class=\"input-group-btn\"><button type=\"button\" class=\"btn btn-default\" ng-click=\"ctrl.open($event,1)\"><i class=\"glyphicon glyphicon-th-list\"></i></button></span></p></div><div class=\"col-md-2\"><p class=\"input-group\"><input type=\"text\" lass=\"form-control\" placeholder=\"Bis\" current-text=\"Heute\" clear-text=\"Löschen\" close-text=\"Schliessen\" datepicker-popup=\"{{ctrl.dateFormat}}\" ng-model=\"ctrl.search.to\" is-open=\"ctrl.toOpen\"> <span class=\"input-group-btn\"><button type=\"button\" class=\"btn btn-default\" ng-click=\"ctrl.open($event, 2)\"><i class=\"glyphicon glyphicon-th-list\"></i></button></span></p></div><div class=\"col-md-2\"><select class=\"form-control\" ng-model=\"ctrl.search.type\" ng-options=\"t as t for t in ctrl.types\"><option value=\"\">Typ wählen</option></select></div><div class=\"col-md-2\"><select class=\"form-control\" ng-model=\"ctrl.search.state\" ng-options=\"s as s for s in ctrl.states\"><option value=\"\">Status Wählen</option></select></div></div><div class=\"row\"><div class=\"col-md-1\"><div class=\"btn btn-default\" ng-click=\"ctrl.search.search();\">Suchen</div></div><div class=\"col-md-2\"><div class=\"btn btn-default\" ng-click=\"ctrl.newEntry();\">Buchung Erstellen</div></div></div></div></div><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><div class=\"row\"><div class=\"col-md-12 tr-list-head\"><div class=\"row\"><div class=\"col-md-1\">Status</div><div class=\"col-md-1\">Badge</div><div class=\"col-md-2\">Person</div><div class=\"col-md-2\">Buchungszeitpunkt</div><div class=\"col-md-1\">Typ</div><div class=\"col-md-2\">Standort</div><div class=\"col-md-1\">TerminalId</div><div class=\"col-md-2\">AuftragId</div></div></div><div infinite-scroll=\"ctrl.search.getMore();\" infinite-scroll-distance=\"1\" class=\"tr-list\"><div ng-repeat=\"entry in ctrl.search.currentResult\" class=\"col-md-12 tr-list-item\"><div class=\"row\" style=\"cursor: pointer\" ng-click=\"ctrl.selectEntry(entry)\"><div class=\"col-md-1\"><div class=\"tr-success-indicator\" ng-class=\"{'tr-success' : entry.transmitted, 'tr-fail' : !entry.transmitted}\"></div></div><div class=\"col-md-1\">{{entry.badgeId}}</div><div class=\"col-md-2 tr-ellipsis\">{{entry.employeeName}}</div><div class=\"col-md-2\">{{entry.bookedTime | date : 'dd.MM.yyyy - H:mm'}}</div><div class=\"col-md-1\">{{entry.type}}</div><div class=\"col-md-2 tr-ellipsis\">{{entry.locationName}}</div><div class=\"col-md-1\">{{entry.terminalId}}</div><div class=\"col-md-2 tr-ellipsis\">{{entry.objectId}}</div><div class=\"tr-list-selector-left\"></div><div class=\"tr-list-selector-right\"></div></div></div></div></div></div><div ng-show=\"ctrl.editMode\"><div class=\"row\"><div class=\"col-md-12\"><h4 class=\"tr-col-form-title tr-ellipsis\">Buchung Editieren</h4><div class=\"row\" ng-show=\"ctrl.minDate !=null && !ctrl.selectedEntry.canEdit && ctrl.selectedEntry.errorCode == 0\"><div class=\"col-md-12\"><p class=\"tr-warning-text\"><span class=\"glyphicon glyphicon-exclamation-sign\"></span>&nbsp; <span>Diese Buchung ist bereits verrechnet und nicht mehr editierbar</span></p></div></div><div class=\"row\" ng-show=\"!ctrl.webServiceAvailable && !ctrl.newMode\"><div class=\"col-md-12\"><p class=\"tr-warning-text\"><span class=\"glyphicon glyphicon-exclamation-sign\"></span>&nbsp; <span>Der plustime Webservice ist zurzeit nicht erreichbar</span></p></div></div><div class=\"row\" ng-show=\"ctrl.selectedEntry.errorCode != 0\"><div class=\"col-md-12\"><p class=\"tr-error-text\"><span class=\"glyphicon glyphicon-exclamation-sign\"></span> &nbsp; <span>Fehler bei der übertragung zu plustime: {{ctrl.selectedEntry.errorMessage}}</span></p></div></div><div class=\"row\" ng-show=\"ctrl.minDate == null && ctrl.selectedEntry.employeeId\"><div class=\"col-md-12\"><p class=\"tr-warning-text\"><span class=\"glyphicon glyphicon-exclamation-sign\"></span> &nbsp; <span>Für diesen Benutzer ist keine Berechnungssperre definiert, Buchungen können nicht editiert werden.</span></p></div></div><div class=\"row\"><div class=\"form-group\"><label class=\"col-md-1 control-label\" for=\"person\">Person</label><div class=\"col-md-3\"><select id=\"person\" class=\"form-control\" ng-change=\"ctrl.personChanged()\" ng-disabled=\"!ctrl.selectedEntry.canEdit\" ng-model=\"ctrl.selectedEntry.employeeId\"><option value=\"0\">Wählen...</option><option value=\"{{p.id}}\" ng-repeat=\"p in ctrl.people\">{{p.firstName}} {{p.lastName}}</option></select></div></div></div><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><div class=\"row\"><div class=\"form-group\"><label class=\"col-md-1 control-label\" for=\"location\">Terminal</label><div class=\"col-md-3\"><select id=\"location\" class=\"form-control\" ng-disabled=\"!ctrl.selectedEntry.canEdit\" ng-model=\"ctrl.selectedEntry.locationId\"><option value=\"0\">Wählen...</option><option value=\"{{l.key}}\" ng-repeat=\"l in ctrl.locations\">{{l.name}}</option></select></div></div></div><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><div class=\"row\"><div class=\"form-group\"><label class=\"col-md-1 control-label\" for=\"id\">Datum</label><div class=\"col-md-3\"><div class=\"input-group\"><input type=\"text\" class=\"form-control\" min-date=\"ctrl.minDate\" current-text=\"Heute\" clear-text=\"Zurücksetzen\" close-text=\"Schliessen\" ng-disabled=\"!ctrl.selectedEntry.CanEdit\" placeholder=\"Datum\" datepicker-popup=\"{{ctrl.dateFormat}}\" ng-model=\"ctrl.selectedEntry.bookedTime\" is-open=\"ctrl.editOpen\"> <span class=\"input-group-btn\"><button type=\"button\" class=\"btn btn-default\" ng-click=\"ctrl.open($event, 3)\"><i class=\"glyphicon glyphicon-th-list\"></i></button></span></div></div></div></div><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><div class=\"row\"><div class=\"form-group\"><label class=\"col-md-1 control-label\" for=\"id\">Zeit</label><div class=\"col-md-3\" ng-show=\"ctrl.selectedEntry.canEdit\"><timepicker tl-autoselect tl-timepicker-prune tl-timepicker-numeric ng-model=\"ctrl.selectedEntry.bookedTime\" ng-change=\"ctrl.timechange();\" hour-step=\"1\" minute-step=\"1\" show-meridian=\"false\"></timepicker></div><div class=\"col-md-3\" ng-hide=\"ctrl.selectedEntry.canEdit\">{{ctrl.selectedEntry.BookedTime | date : 'HH:mm'}} Uhr</div></div></div><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><div class=\"row\"><div class=\"form-group\"><label class=\"col-md-1 control-label\" for=\"id\">Typ</label><div class=\"col-md-3\"><select class=\"form-control\" ng-model=\"ctrl.selectedEntry.type\" ng-disabled=\"!ctrl.selectedEntry.canEdit\" ng-options=\"t as t for t in ctrl.types\"><option value=\"\">Typ wählen</option></select></div></div></div><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><div class=\"row\"><div class=\"form-group\"><label class=\"col-md-1 control-label\" for=\"id\">Objekt</label><div class=\"col-md-3\"><input class=\"form-control\" maxlength=\"60\" id=\"id\" type=\"text\" ng-disabled=\"!ctrl.selectedEntry.canEdit\" ng-model=\"ctrl.selectedEntry.objectId\"></div></div></div><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><div class=\"row\"><div class=\"col-md-12\"><div class=\"btn btn-default pull-left\" ng-show=\"ctrl.canEdit();\" ng-click=\"ctrl.save();\">Speichern</div><div class=\"pull-left\">&nbsp;</div><div class=\"btn btn-default pull-left\" ng-show=\"ctrl.canEdit() && !ctrl.newMode\" ng-click=\"ctrl.delete();\">Löschen</div><div class=\"pull-left\">&nbsp;</div><div class=\"btn btn-default pull-left\" ng-click=\"ctrl.cancelEdit();\">Zurück</div></div></div></div></div></div></div>"
  );


  $templateCache.put('Client/Views/expenses.form.html',
    "<div ng-controller=\"TrExpensesFormController as ctrl\"><form name=\"expensesForm\" class=\"form-horizontal expenses\" novalidate><h2><span ng-if=\"ctrl.isNew()\">{{'Neuer Speseneintrag am ' + (ctrl.expenseDate | date : 'dd.MM.yyyy')}}</span> <span ng-if=\"!ctrl.isNew()\">Speseneintrag bearbeiten</span></h2><hr><div class=\"row\"><div class=\"col-xs-6\"><tl-validate target=\"expensesForm.expenseType\" label-text=\"'Spesenart'\" css-value=\"col-md-8\" css-label=\"col-md-4\" validate-now=\"ctrl.triggerValidation\" required class=\"form-value\"><ui-select required name=\"expenseType\" ng-model=\"ctrl.selectedExpenseType\"><ui-select-match placeholder=\"{{'Suche...' | translate}}\">{{$select.selected.name}}</ui-select-match><ui-select-choices repeat=\"expenseType in ctrl.expenseTypes track by $index\" refresh=\"ctrl.searchProjects($select.search)\"><div ng-bind-html=\"expenseType.name  | highlight: $select.search\"></div></ui-select-choices></ui-select></tl-validate></div><div class=\"col-xs-6\"><tl-validate target=\"expensesForm.amount\" label-text=\"ctrl.getAmountLabel()\" css-value=\"col-md-8\" css-label=\"col-md-4\" validate-now=\"ctrl.triggerValidation\" required class=\"form-value\"><b><span><input type=\"number\" maxlength=\"10\" ng-disabled=\"ctrl.isDisabled()\" required name=\"amount\" class=\"form-control\" ng-model=\"ctrl.expenseAmount\" ui-validate=\"{amountInteger:'ctrl.isAmountValid($value)'}\" ui-validate-watch=\" 'ctrl.selectedExpenseType' \" name=\" amount\"></span></b></tl-validate></div></div><div class=\"row\"><div class=\"col-xs-6\"><tl-validate target=\"expensesForm.date\" label-text=\"'Datum'\" css-value=\"col-md-8\" css-label=\"col-md-4\" validate-now=\"ctrl.triggerValidation\" required class=\"form-value\"><div class=\"input-group\"><input name=\"date\" type=\"text\" ng-model=\"ctrl.expenseDate\" class=\"form-control datepicker\" datepicker-popup view-format ng-disabled=\"ctrl.isDisabled()\" is-open=\"ctrl.datepickerOpened\"> <span class=\"input-group-btn\"><button type=\"button\" class=\"btn btn-default\" ng-click=\"ctrl.openDatepicker($event)\"><i class=\"glyphicon glyphicon-wider glyphicon-th-list\"></i></button></span></div></tl-validate></div><div class=\"col-xs-6\"><tl-validate target=\"expensesForm.description\" label-text=\"'Kommentar'\" css-value=\"col-md-8\" css-label=\"col-md-4\" validate-now=\"ctrl.triggerValidation\" class=\"form-value\"><b><span><input type=\"text\" maxlength=\"120\" ng-disabled=\"ctrl.isDisabled()\" name=\"description\" class=\"form-control\" ng-model=\"ctrl.expenseDescription\"></span></b></tl-validate></div></div><div class=\"tr-v-spacer\"></div><div class=\"row\"><div class=\"col-md-12\"><div class=\"btn btn-danger pull-right\" ng-click=\"ctrl.remove();\" ng-disabled=\"ctrl.$services.pageLock.buttonLock\" ng-hide=\"ctrl.isNew()\">Löschen</div><div class=\"pull-right\">&nbsp;</div><div class=\"btn btn-success pull-right\" ng-click=\"ctrl.save();\" ng-disabled=\"ctrl.$services.pageLock.buttonLock\">Speichern</div><div class=\"pull-right\">&nbsp;</div><div class=\"btn btn-primary pull-right\" ui-sref=\"tr.expenses\" ng-disabled=\"ctrl.$services.pageLock.buttonLock\">Abbrechen</div></div></div></form></div>"
  );


  $templateCache.put('Client/Views/expenses.html',
    "<div ng-controller=\"TrExpensesController as ctrl\" class=\"expenses\"><ui-view class=\"detail-slide\"></ui-view><div class=\"row\"><h1 class=\"col-md-9\">Spesen</h1></div><filter-header model=\"ctrl.model\" add-button-callback=\"ctrl.addButtonCallback()\" add-button-text=\"Neuer Eintrag\" target-start-button-callback=\"ctrl.targetStartButtonCallback()\" target-start-button-text=\"Visieren\" target-cancel-button-callback=\"ctrl.targetCancelButtonCallback()\" target-cancel-button-text=\"Abbrechen\" target-confirm-button-callback=\"ctrl.targetConfirmButtonCallback()\" target-confirm-button-text=\"Speichern\" get-entry-per-day=\"ctrl.getEntryPerDay\" get-total-entries=\"ctrl.getTotalEntries()\"></filter-header><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><div class=\"row\" ng-if=\"ctrl.displayedExpenses.length !== 0\" block-ui=\"expensesBlock\"><div class=\"col-md-12 tr-list-head\"><div class=\"row\"><div class=\"col-md-1\"></div><div class=\"col-md-6\">Spesenart</div><div class=\"col-md-2\">Anzahl</div><div class=\"col-md-2\">Status</div><div class=\"col-md-1\"><span ng-show=\"ctrl.model.targetingMode\">Visiert</span></div></div></div><div class=\"tr-list\"><!--infinite-scroll=\"ctrl.search.getMore();\" infinite-scroll-distance=\"1\"--><ng-include src=\"'expenses.row'\"></ng-include></div></div><div ng-if=\"ctrl.displayedExpenses.length === 0\" class=\"row tr-list-item\"><div class=\"col-md-12\">Keine Einträge</div></div></div><script type=\"text/ng-template\" id=\"expenses.row\"><div ng-repeat=\"entry in ctrl.displayedExpenses\" class=\"col-md-12 tr-list-item timebooking-list-item\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-1 tr-ellipsis\">\n" +
    "        {{$index + 1}}\n" +
    "      </div>\n" +
    "      <div class=\"col-md-6 tr-ellipsis\">\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col-md-12\">\n" +
    "            {{ctrl.getExpenseTypeName(entry)}}\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col-md-12\">\n" +
    "            {{entry.description}}\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-2\">{{ctrl.getValue(entry)}}</div>\n" +
    "\n" +
    "      <div class=\"col-md-2\">\n" +
    "        <span ng-if=\"ctrl.isTargeted(entry)\">Visiert</span>\n" +
    "        <span ng-if=\"!ctrl.isTargeted(entry)\">Nicht visiert</span>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"col-md-1 tr-list-action-buttons\">\n" +
    "        <span ng-hide=\"ctrl.model.targetingMode || ctrl.isTargeted(entry)\" class=\"glyphicon glyphicon-edit\" ng-click=\"ctrl.editEntry(entry)\"></span>\n" +
    "        <input ng-disabled=\"ctrl.isTargeted(entry)\" type=\"checkbox\" ng-show=\"ctrl.model.targetingMode\" ng-click=\"ctrl.toggleTargetCandidature(entry)\" ng-checked=\"ctrl.isTargetCandidate(entry) || ctrl.isTargeted(entry)\" />\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div></script>"
  );


  $templateCache.put('Client/Views/globalMessages.html',
    "<div ng-controller=\"TrMessageController as ctrl\"><h2>Globale Nachrichten</h2><hr><div class=\"col-md-4\"><div class=\"row\" style=\"margin: 0\"><div class=\"col-md-12 tr-list-head\"><div class=\"row\"><div class=\"col-md-3\"></div><div class=\"col-md-9\">Nachricht</div></div></div><div class=\"tr-list\"><div class=\"col-md-12\" ng-show=\"ctrl.loading\"><div class=\"tr-v-spacer\"></div><div class=\"tr-list-loader\"><div id=\"floatingBarsG\"><div class=\"blockG\" id=\"rotateG_01\"></div><div class=\"blockG\" id=\"rotateG_02\"></div><div class=\"blockG\" id=\"rotateG_03\"></div><div class=\"blockG\" id=\"rotateG_04\"></div><div class=\"blockG\" id=\"rotateG_05\"></div><div class=\"blockG\" id=\"rotateG_06\"></div><div class=\"blockG\" id=\"rotateG_07\"></div><div class=\"blockG\" id=\"rotateG_08\"></div></div></div></div><div class=\"col-md-12 tr-list-item\" ng-repeat=\"msg in ctrl.messages\" ng-click=\"ctrl.select(msg)\" ng-class=\"{'tr-list-item-selected': msg.id == ctrl.selectedMessage.id}\"><div class=\"row\"><div class=\"col-md-3\"><i class=\"glyphicon glyphicon-comment\"></i></div><div class=\"col-md-9 tr-ellipsis\">{{msg.title}}</div><div class=\"tr-list-selector-left\"></div><div class=\"tr-list-selector-right\"></div></div></div><div class=\"col-md-12 tr-list-item\" ng-click=\"ctrl.create();\" ng-hide=\"ctrl.loading\" ng-class=\"{'tr-list-item-selected': ctrl.selectedMessage.id == 0}\"><div class=\"row\"><div class=\"col-md-3\"><i class=\"glyphicon glyphicon-plus\"></i></div><div class=\"col-md-9\">Neue Nachricht</div><div class=\"tr-list-selector-left\"></div><div class=\"tr-list-selector-right\"></div></div></div></div></div></div><div class=\"col-md-offset-1 col-md-7 form-horizontal\" ng-show=\"ctrl.showForm\"><div class=\"row\"><ul class=\"nav nav-pills\"><li role=\"presentation\" ng-class=\"{active : ctrl.mode == 1}\"><a href=\"\" ng-click=\"ctrl.switchMode(1);\"><i class=\"glyphicon glyphicon-list\"></i>&nbsp;<span>Einspaltig</span></a></li><li role=\"presentation\" ng-class=\"{active : ctrl.mode == 2}\"><a href=\"\" ng-click=\"ctrl.switchMode(2);\"><i class=\"glyphicon glyphicon-picture\"></i>&nbsp;<span>Zweispaltig</span></a></li><li role=\"presentation\" ng-class=\"{active : ctrl.mode == 3}\"><a href=\"\" ng-click=\"ctrl.switchMode(3);\"><i class=\"glyphicon glyphicon-certificate\"></i>&nbsp;<span>Freies Html</span></a></li></ul><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><div class=\"col-md-12\" ng-show=\"ctrl.mode==1\"><div class=\"row\"><div class=\"col-md-2\"><b>Titel:</b></div><div class=\"col-md-7\"><input type=\"text\" maxlength=\"{{ctrl.maxTitleLength}}\" class=\"form-control\" ng-model=\"ctrl.title\"></div><div class=\"col-md-3 tr-g-msg-bullet-charleft\">noch {{ctrl.maxTitleLength - ctrl.title.length}} Zeichen</div></div><div class=\"tr-v-spacer\"></div><div class=\"row\"><ul class=\"nav nav-pills\"><li role=\"presentation\" ng-class=\"{active : ctrl.textMode == 1}\"><a href=\"\" ng-click=\"ctrl.switchTextMode(1);\"><i class=\"glyphicon glyphicon-align-justify\"></i> &nbsp; <span>Text</span></a></li><li role=\"presentation\" ng-class=\"{active : ctrl.textMode == 2}\"><a href=\"\" ng-click=\"ctrl.switchTextMode(2);\"><i class=\"glyphicon glyphicon-list\"></i> &nbsp; <span>Liste</span></a></li></ul></div><div class=\"tr-v-spacer\"></div><div ng-show=\"ctrl.textMode == 1\"><div class=\"row\"><div class=\"col-md-2\"><b>Text</b></div><div class=\"col-md-offset-3 col-md-3 tr-g-msg-charsleft\">noch {{ctrl.maxTextLength - ctrl.text.length}} Zeichen</div></div><div class=\"row\"><div class=\"col-md-8\"><textarea ng-model=\"ctrl.text\" maxlength=\"{{ctrl.maxTextLength}}\" style=\"max-width: 100%; width: 100%;height: 150px\"></textarea></div></div></div><div ng-repeat=\"bullet in ctrl.bullets  track by $index\" ng-show=\"ctrl.textMode == 2\"><div class=\"row\"><div class=\"col-md-2\"><b>Punkt {{$index + 1}}:</b></div><div class=\"col-md-6\"><input type=\"text\" class=\"form-control\" maxlength=\"{{ctrl.maxBulletLength}}\" ng-model=\"bullet.str\"></div><div class=\"col-md-1\"><div class=\"btn btn-default\" ng-click=\"ctrl.removeBullet($index);\"><i class=\"glyphicon glyphicon-remove\"></i></div></div><div class=\"col-md-3 tr-g-msg-bullet-charleft\">noch {{ctrl.maxBulletLength - bullet.str.length}} Zeichen</div></div><div class=\"tr-v-spacer\"></div></div><div class=\"row\" ng-show=\"ctrl.textMode == 2\"><div class=\"col-md-offset-8 col-md-1\"><div class=\"btn btn-default\" ng-show=\"ctrl.bullets.length < ctrl.maxBullets\" ng-click=\"ctrl.addBullet();\"><i class=\"glyphicon glyphicon-plus\"></i></div></div></div></div><div class=\"col-md-12\" ng-show=\"ctrl.mode==2\"><div class=\"row\"><div class=\"col-md-2\"><b>Titel:</b></div><div class=\"col-md-7\"><input type=\"text\" class=\"form-control\" maxlength=\"{{ctrl.maxTitleLength}}\" ng-model=\"ctrl.title\"></div><div class=\"col-md-3 tr-g-msg-bullet-charleft\">noch {{ctrl.maxTitleLength - ctrl.title.length}} Zeichen</div></div><div class=\"tr-v-spacer\"></div><div class=\"row\"><div class=\"col-md-2\"><b>Bild:</b></div><div class=\"col-md-4\" ng-show=\"!ctrl.hasImage\"><!--<input type=\"text\" class=\"form-control\" ng-model=\"ctrl.imgUrl\"/>--><input type=\"file\" id=\"fileUpload\" class=\"form-control\" accept=\".png, .PNG, .jpg,.JPG\" onchange=\"angular.element(this).scope().ctrl.fileSelected()\"></div><div class=\"col-md-4\" ng-show=\"ctrl.hasImage\"><div style=\"width: 150px\"><img src=\"{{ctrl.imgUrl}}\" alt=\"\" id=\"image-preview\" style=\"width: 100%\"></div></div><div class=\"col-md-1\" ng-show=\"ctrl.hasImage\"><div class=\"btn btn-default\" ng-click=\"ctrl.removeImage();\"><i class=\"glyphicon glyphicon-remove\"></i></div></div><div class=\"col-md-1\"></div><div class=\"col-md-3 col-md-offset-2 tr-g-msg-charsleft\" style=\"text-align: left\">max. 5MB Bildgrösse</div></div><div class=\"tr-v-spacer\"></div><div class=\"row\"><ul class=\"nav nav-pills\"><li role=\"presentation\" ng-class=\"{active : ctrl.textMode == 1}\"><a href=\"\" ng-click=\"ctrl.switchTextMode(1);\"><i class=\"glyphicon glyphicon-align-justify\"></i> &nbsp; <span>Text</span></a></li><li role=\"presentation\" ng-class=\"{active : ctrl.textMode == 2}\"><a href=\"\" ng-click=\"ctrl.switchTextMode(2);\"><i class=\"glyphicon glyphicon-list\"></i> &nbsp; <span>Liste</span></a></li></ul></div><div class=\"tr-v-spacer\"></div><div ng-show=\"ctrl.textMode == 1\"><div class=\"row\"><div class=\"col-md-2\"><b>Text</b></div><div class=\"col-md-3 col-md-offset-3 tr-g-msg-charsleft\">noch {{ctrl.maxTextLength - ctrl.text.length}} Zeichen</div></div><div class=\"row\"><div class=\"col-md-8\"><textarea ng-model=\"ctrl.text\" maxlength=\"{{ctrl.maxTextLength}}\" style=\"max-width: 100%; width: 100%;height: 150px\"></textarea></div></div></div><div ng-repeat=\"bullet in ctrl.bullets track by $index\" ng-show=\"ctrl.textMode == 2\"><div class=\"row\"><div class=\"col-md-2\"><b>Punkt {{$index + 1}}:</b></div><div class=\"col-md-6\"><input type=\"text\" class=\"form-control\" maxlength=\"{{ctrl.maxBulletLength}}\" ng-model=\"bullet.str\"></div><div class=\"col-md-1\"><div class=\"btn btn-default\" ng-click=\"ctrl.removeBullet($index);\"><i class=\"glyphicon glyphicon-remove\"></i></div></div><div class=\"col-md-3 tr-g-msg-bullet-charleft\">noch {{ctrl.maxBulletLength - bullet.str.length}} Zeichen</div></div><div class=\"tr-v-spacer\"></div></div><div class=\"row\" ng-show=\"ctrl.textMode == 2\"><div class=\"col-md-offset-8 col-md-1\"><div class=\"btn btn-default\" ng-show=\"ctrl.bullets.length < ctrl.maxBullets\" ng-click=\"ctrl.addBullet();\"><i class=\"glyphicon glyphicon-plus\"></i></div></div></div></div><div class=\"col-md-12\" ng-show=\"ctrl.mode==3\"><textarea ng-model=\"ctrl.rawHtml\" style=\"max-width: 100%; width: 100%;height: 300px\"></textarea></div><div class=\"col-md-12\"><div class=\"tr-v-spacer\"></div><div class=\"btn btn-default\" ng-click=\"ctrl.preview();\">Vorschau</div><div class=\"btn btn-default\" ng-click=\"ctrl.save();\">Speichern</div><div class=\"btn btn-default\" ng-click=\"ctrl.delete();\" ng-show=\"ctrl.selectedMessage.Id\">Löschen</div></div></div></div><div class=\"tr-preview-background\" ng-show=\"ctrl.showPreview;\"><div class=\"tr-preview-container\"><div class=\"tr-preview-actions\"><a class=\"pull-right\" ng-click=\"ctrl.hidePreview()\" style=\"font-size: 18px;color: black\"><i class=\"glyphicon glyphicon-remove\"></i></a></div><div class=\"tr-preview-device\"><div class=\"col-md-3\"><div class=\"tr-employee-card-wrapper\"><div class=\"tr-employee-card\"></div><div class=\"tr-employee-card-text\">Mitarbeiter Karte einlesen</div></div><div class=\"tr-clock\" clock></div><div class=\"tr-logo\"></div></div><div class=\"col-md-9\"><div id=\"msg-container\" class=\"tr-preview-message-container\" ng-bind-html=\"ctrl.renderedHtml | unsafe\"></div><!--<div id=\"msg-container-1\" class=\"tr-preview-message-container\" ng-show=\"ctrl.mode == 1\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"tr-global-message-title\">\n" +
    "\t\t\t\t\t\t\t\t\t{{ctrl.title}}\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<ul>\n" +
    "\t\t\t\t\t\t\t\t\t<li ng-repeat=\"bullet in ctrl.bullets track by $index\" class=\"tr-global-message-item\">\n" +
    "\t\t\t\t\t\t\t\t\t\t{{bullet.str}}\n" +
    "\t\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t</ul>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\n" +
    "\n" +
    "\t\t\t\t\t\t<div id=\"msg-container-2\" class=\"tr-preview-message-container\" ng-show=\"ctrl.mode == 2\">\n" +
    "\t\t\t\t\t\t\t<div class=\"row\">\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-md-5\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"tr-preview-image-background\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<img class=\"tr-preview-image\" src=\"{{ctrl.imgUrl}}\" alt=\"\" />\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"tr-global-message-title-dual\">\n" +
    "\t\t\t\t\t\t\t\t\t\t{{ctrl.title}}\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t<ul>\n" +
    "\t\t\t\t\t\t\t\t\t\t<li ng-repeat=\"bullet in ctrl.bullets track by $index\" class=\"tr-global-message-item-dual\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t{{bullet.str}}\n" +
    "\t\t\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t\t</ul>\n" +
    "\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t\t\t<div id=\"msg-container-3\" class=\"tr-preview-message-container\" ng-show=\"ctrl.mode == 3\" ng-bind-html=\"ctrl.rawHtml | unsafe\">\n" +
    "\n" +
    "\t\t\t\t\t\t</div>--></div></div></div></div><div id=\"html-parser-hidden\" style=\"display: none\"></div></div>"
  );


  $templateCache.put('Client/Views/home.html',
    "<div class=\"jumbotron\"><h1>TIMERECORDER</h1><p class=\"lead\"></p></div>"
  );


  $templateCache.put('Client/Views/locations.html',
    "<div ng-controller=\"TrLocationController as ctrl\"><h2>Standorte</h2><hr><div class=\"col-md-7\"><div class=\"row\" style=\"margin: 0\" slim-scroll><div class=\"col-md-12 tr-list-head\"><div class=\"row\"><div class=\"col-md-1\"></div><div class=\"col-md-3\">Id</div><div class=\"col-md-5\">Name</div></div></div><div class=\"tr-list\"><div class=\"col-md-12\" ng-show=\"ctrl.loading\"><div class=\"tr-v-spacer\"></div><div class=\"tr-list-loader\"><div id=\"floatingBarsG\"><div class=\"blockG\" id=\"rotateG_01\"></div><div class=\"blockG\" id=\"rotateG_02\"></div><div class=\"blockG\" id=\"rotateG_03\"></div><div class=\"blockG\" id=\"rotateG_04\"></div><div class=\"blockG\" id=\"rotateG_05\"></div><div class=\"blockG\" id=\"rotateG_06\"></div><div class=\"blockG\" id=\"rotateG_07\"></div><div class=\"blockG\" id=\"rotateG_08\"></div></div></div></div><div ng-repeat=\"location in ctrl.locations|orderBy:'locationId'\" class=\"col-md-12 tr-list-item\" ng-click=\"ctrl.select(location);\" ng-class=\"{'tr-list-item-selected': location.key == ctrl.selectedLocation.key}\"><div class=\"row\"><div class=\"col-md-1\"><i class=\"glyphicon glyphicon-home\"></i></div><div class=\"col-md-3\">{{location.locationId}}</div><div class=\"col-md-5 tr-ellipsis\">{{location.name}}</div><div class=\"tr-list-selector-left\"></div><div class=\"tr-list-selector-right\"></div></div></div><div class=\"col-md-12 tr-list-item\" ng-hide=\"ctrl.loading\" ng-click=\" ctrl.create();\" ng-class=\"{'tr-list-item-selected': ctrl.selectedLocation.key == 0}\"><div class=\"row\"><div class=\"col-md-1\"><i class=\"glyphicon glyphicon-plus\"></i></div><div class=\"col-md-3\">Neuer Standort</div><div class=\"tr-list-selector-left\"></div><div class=\"tr-list-selector-right\"></div></div></div></div></div></div><div class=\"col-md-offset-1 col-md-4 form-horizontal\" ng-show=\"ctrl.showForm\"><div class=\"row\"><h4 class=\"tr-col-form-title tr-ellipsis\">{{ctrl.selectedLocation.name}}</h4><div class=\"form-group\"><label class=\"col-md-4 control-label\" for=\"id\">Id</label><div class=\"col-md-8\"><input class=\"form-control\" id=\"id\" type=\"text\" ng-model=\"ctrl.selectedLocation.locationId\" maxlength=\"{{ctrl.idMaxLength}}\"></div></div><div class=\"form-group\"><label class=\"col-md-4 control-label\" for=\"name\">Name</label><div class=\"col-md-8\"><input class=\"form-control\" id=\"name\" type=\"text\" ng-model=\"ctrl.selectedLocation.name\" maxlength=\"{{ctrl.nameMaxLength}}\"></div></div><div class=\"form-group\"><label class=\"col-md-4 control-label\" for=\"pin\">NotfallPin</label><div class=\"col-md-8\"><input class=\"form-control\" id=\"pin\" type=\"text\" ng-model=\"ctrl.selectedLocation.emergencyPin\" maxlength=\"{{ctrl.pinMaxLength}}\"></div></div><div class=\"form-group\"><div class=\"col-md-4\"><div class=\"btn btn-default\" ng-click=\"ctrl.save()\">Speichern</div></div><div class=\"col-md-4\"><div class=\"btn btn-default\" ng-show=\"!ctrl.selectedLocation.userId && ctrl.selectedLocation.key != 0\" ng-click=\"ctrl.delete()\">Löschen</div></div></div></div></div></div>"
  );


  $templateCache.put('Client/Views/login.html',
    "<h2>Login</h2><hr><div class=\"col-md-4 form-horizontal\"><div class=\"form-group\"><label class=\"col-md-4 control-label\" for=\"email\">Benutzername</label><div class=\"col-md-8\"><input class=\"form-control\" maxlength=\"60\" ng-enter=\"app.login();\" id=\"email\" type=\"text\" ng-model=\"app.userName\"></div></div><div class=\"form-group\"><label class=\"col-md-4 control-label\" for=\"password\">Passwort</label><div class=\"col-md-8\"><input class=\"form-control\" maxlength=\"60\" ng-enter=\"app.login()\" id=\"password\" type=\"password\" ng-model=\"app.password\"></div></div><div class=\"form-group\"><div class=\"col-md-offset-4 col-md-8\"><div class=\"checkbox\"><input type=\"checkbox\" id=\"rememberme\" ng-model=\"app.rememberMe\"><label for=\"rememberme\">Remember me</label></div></div></div><div class=\"form-group\"><div class=\"col-md-offset-4 col-md-8\"><div class=\"btn btn-default\" ng-click=\"app.login()\">Log in</div></div></div></div>"
  );


  $templateCache.put('Client/Views/personalMessages.html',
    "<div ng-controller=\"TrPersonalMessageController as ctrl\"><h2>Persönliche Nachrichten</h2><hr><div class=\"col-md-12\"><div class=\"row\"><div class=\"col-md-5\"><div class=\"btn btn-default\" ng-click=\"ctrl.create();\">Neue Nachricht</div><h4>Gesendete Nachrichten</h4><div slim-scroll><div ng-repeat=\"msg in ctrl.messages | orderBy: ['ReadByAll', '-TimeSent']\" class=\"tr-sent-message\" ng-click=\"ctrl.select(msg);\" ng-class=\"{'tr-sent-message-selected' : msg.messageId === ctrl.selectedId, 'aread' : msg.readByAll, 'aunread' : !msg.readByAll}\"><div class=\"tr-sent-message-title\">{{msg.head}}</div><div class=\"tr-sent-message-date\">{{msg.timeEllapsed}}</div><div class=\"tr-sent-message-recipients\"><span>An:</span> <span ng-repeat=\"rec in msg.recipients\"><span>{{rec.name}}</span> <span ng-show=\"!$last\">,</span></span></div></div></div></div><div class=\"col-md-7\" ng-show=\"ctrl.showForm\"><div style=\"height: 76px;width: 100%\"></div><div to-select source=\"ctrl.selectOptions\" model=\"ctrl.recipients\" disabled></div><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><div class=\"tr-p-msg-input-container\"><div class=\"tr-p-msg-label\">Titel:</div><input type=\"text\" maxlength=\"120\" ng-disabled=\"!ctrl.isNew\" class=\"tr-p-msg-input\" ng-model=\"ctrl.head\"></div><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><div class=\"tr-p-msg-input-container\"><div class=\"tr-p-msg-label\" style=\"float: left\">Nachricht:</div><div class=\"tr-p-msg-charsleft\" ng-show=\"ctrl.isNew\">{{ctrl.maxMsgLength - ctrl.body.length}} Zeichen übrig</div><div style=\"clear: both\"></div></div><textarea maxlength=\"{{ctrl.maxMsgLength}}\" class=\"tr-p-msg-textarea\" ng-disabled=\"!ctrl.isNew\" ng-model=\"ctrl.body\"></textarea><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><div class=\"btn btn-default\" ng-show=\"ctrl.isNew && ctrl.validate()\" ng-click=\"ctrl.send();\">Abschicken</div></div></div></div><div class=\"col-md-12\"></div></div>"
  );


  $templateCache.put('Client/Views/persons.html',
    "<div ng-controller=\"TrPersonController as ctrl\" block-ui=\"importing\"><div class=\"col-md-10\"><h2>Personen</h2></div><div class=\"col-md-2\"><div class=\"btn btn-default pull-right\" ng-show=\"ctrl.webServiceAvailable\" ng-click=\"ctrl.triggerPersonImport()\">Personalstamm Importieren</div></div><hr><div class=\"col-md-7\"><div class=\"row\"><div class=\"col-md-8\"><div class=\"input-group\"><input type=\"text\" maxlength=\"60\" class=\"form-control\" ng-model=\"ctrl.person.search\" placeholder=\"Suche\"> <span class=\"input-group-btn\"><button class=\"btn btn-default\" type=\"button\" ng-click=\"ctrl.person.startSearch()\">Suchen</button></span></div></div><div class=\"col-md-4\"><div class=\"btn btn-default pull-right\" ng-click=\"ctrl.create()\"><i class=\"glyphicon glyphicon-plus\"></i>&nbsp;Erstellen</div></div></div><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><div class=\"row\" style=\"margin: 0\" infinite-scroll=\"ctrl.person.loadMore();\" infinite-scroll-distance=\"1\"><div class=\"col-md-12 tr-list-head\"><div class=\"row\"><div class=\"col-md-1\"></div><div class=\"col-md-2\">Id</div><div class=\"col-md-3\">Name</div><div class=\"col-md-2\">Externe Id</div><div class=\"col-md-4\">Rolle</div></div></div><div class=\"tr-list\"><div class=\"col-md-12\" ng-show=\"ctrl.loading\"><div class=\"tr-v-spacer\"></div><div class=\"tr-list-loader\"><div id=\"floatingBarsG\"><div class=\"blockG\" id=\"rotateG_01\"></div><div class=\"blockG\" id=\"rotateG_02\"></div><div class=\"blockG\" id=\"rotateG_03\"></div><div class=\"blockG\" id=\"rotateG_04\"></div><div class=\"blockG\" id=\"rotateG_05\"></div><div class=\"blockG\" id=\"rotateG_06\"></div><div class=\"blockG\" id=\"rotateG_07\"></div><div class=\"blockG\" id=\"rotateG_08\"></div></div></div></div><div ng-repeat=\"person in ctrl.person.people\" class=\"col-md-12 tr-list-item\" ng-click=\"ctrl.select(person);\" ng-class=\"{'tr-list-item-selected': person.id == ctrl.selectedPerson.id}\"><div class=\"row\"><div class=\"col-md-1\"><i class=\"glyphicon glyphicon-user\"></i></div><div class=\"col-md-2\">{{person.employeeId}}</div><div class=\"col-md-3 tr-ellipsis\">{{person.firstName}} {{person.lastName}}</div><div class=\"col-md-2 tr-ellipsis\">{{person.externalId}}</div><div class=\"col-md-4 tr-ellipsis\">{{ctrl.getRole(person)}}</div><div class=\"tr-list-selector-left\"></div><div class=\"tr-list-selector-right\"></div></div></div></div></div></div><div class=\"col-md-offset-1 col-md-4 form-horizontal\" ng-show=\"ctrl.showForm\"><div class=\"row\"><h4 class=\"tr-col-form-title tr-ellipsis\">{{ctrl.selectedPerson.firstName}} {{ctrl.selectedPerson.lastName}}</h4><div class=\"form-group\"><label class=\"col-md-4 control-label\" for=\"id\">Id</label><div class=\"col-md-8\"><input class=\"form-control\" id=\"id\" type=\"text\" ng-model=\"ctrl.selectedPerson.employeeId\" maxlength=\"{{ctrl.idMaxLength}}\"></div></div><div class=\"form-group\"><label class=\"col-md-4 control-label\" for=\"fstn\">Vorname</label><div class=\"col-md-8\"><input class=\"form-control\" id=\"fstn\" type=\"text\" ng-model=\"ctrl.selectedPerson.firstName\" maxlength=\"{{ctrl.firstNameMaxLength}}\"></div></div><div class=\"form-group\"><label class=\"col-md-4 control-label\" for=\"lstn\">Nachname</label><div class=\"col-md-8\"><input class=\"form-control\" id=\"lstn\" type=\"text\" ng-model=\"ctrl.selectedPerson.lastName\" maxlength=\"{{ctrl.lastNameMaxLength}}\"></div></div><div class=\"form-group\"><label class=\"col-md-4 control-label\" for=\"lstn\">Externe Id</label><div class=\"col-md-8\"><input class=\"form-control\" id=\"lstn\" type=\"text\" ng-model=\"ctrl.selectedPerson.externalId\"></div></div><div class=\"form-group\"><label class=\"col-md-4 control-label\" for=\"type\">Rolle</label><div class=\"col-md-8\"><select id=\"type\" class=\"form-control\" ng-model=\"ctrl.selectedPerson.profileId\"><option value=\"0\">Wählen...</option><option value=\"{{p.id}}\" ng-repeat=\"p in ctrl.profiles\">{{p.name}}</option></select></div></div><!--<div class=\"form-group\">\n" +
    "\t\t\t\t<label class=\"col-md-4 control-label\" for=\"pin\">NotfallPin</label>\n" +
    "\t\t\t\t<div class=\"col-md-8\">\n" +
    "\t\t\t\t\t<input class=\"form-control\" id=\"pin\" type=\"text\" ng-model=\"ctrl.selectedPerson.emergencyPin\"/>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>--><div class=\"form-group\"><div class=\"col-md-4\"><div class=\"btn btn-default\" ng-click=\"ctrl.save()\">Speichern</div></div><div class=\"col-md-4\"><div class=\"btn btn-default\" ng-show=\"ctrl.selectedPerson.Id != 0\" ng-click=\"ctrl.delete()\">Löschen</div></div></div></div></div></div>"
  );


  $templateCache.put('Client/Views/projects.html',
    "<div ng-controller=\"TrProjectController as ctrl\"><div class=\"col-md-10\"><h2>Job</h2></div><div class=\"col-md-2\"><div class=\"btn btn-default pull-right\" ng-show=\"ctrl.webServiceAvailable\" ng-click=\"ctrl.triggerProjectImport()\">Jobdaten Importieren</div></div><hr><div class=\"col-md-5\"><div><div class=\"row\"><div class=\"col-md-12\"><div class=\"input-group\"><input type=\"text\" class=\"form-control\" ng-model=\"ctrl.project.search\" placeholder=\"Suche\"> <span class=\"input-group-btn\"><button class=\"btn btn-default\" type=\"button\" ng-click=\"ctrl.project.startSearch()\">Suchen</button></span></div></div></div></div><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><div infinite-scroll=\"ctrl.project.loadMore();\" infinite-scroll-distance=\"1\"><div ng-repeat=\"project in ctrl.project.roots\"><project-tree node-selected=\"ctrl.select($node)\" depth=\"0\" selected-node-id=\"ctrl.selectedNode.id\" project=\"project\"></project-tree></div></div></div><div class=\"col-md-offset-1 col-md-6 form-horizontal\" ng-show=\"ctrl.showForm\"><div class=\"row\"><h3>{{ctrl.selectedNode.name}}</h3><h4 ng-show=\"ctrl.showFlags\"><span class=\"label label-default tr-clickable\" ng-click=\"ctrl.setFlag(ctrl.selectedNode, 1)\" ng-class=\"{'label-primary': ctrl.selectedNode.bookable}\">Buchbar</span> <span class=\"label label-default tr-clickable\" ng-click=\"ctrl.setFlag(ctrl.selectedNode, 2)\" ng-class=\"{'label-danger': ctrl.selectedNode.explicit}\">Explizit</span> <span class=\"label label-default tr-clickable\" ng-click=\"ctrl.setFlag(ctrl.selectedNode, 4)\" ng-class=\"{'label-success': ctrl.selectedNode.planningUnit}\">Planungseinheit</span></h4><div class=\"tr-v-spacer\"></div><div><p class=\"tr-subtext\" ng-show=\"!ctrl.editMode && ctrl.selectedNode.description\">{{ctrl.selectedNode.description}}</p><p class=\"tr-subtext\" ng-hide=\"ctrl.editMode || ctrl.selectedNode.description\">Keine Beschreibung</p><div ng-show=\"ctrl.editMode\"><textarea type=\"text\" class=\"form-control\" ng-model=\"ctrl.selectedNode.description\" style=\"width: 100%; max-width: 100%\"></textarea></div></div><div ng-show=\"ctrl.editMode\"><div class=\"tr-v-spacer\"></div><div class=\"btn btn-default\" ng-click=\"ctrl.saveDescription()\">Speichern</div><div class=\"btn btn-default\" ng-click=\"ctrl.cancelEditDescription()\">Abbrechen</div></div><div class=\"tr-v-spacer\"></div><div class=\"tr-subtitle\">Alle berechigten Personen</div><div class=\"tr-subtext\"><span ng-repeat=\"p in ctrl.mergePersons\"><span>{{p.name}}</span><span ng-hide=\"$last\">,</span></span></div><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><div class=\"tr-subtitle\">Alle konfigurierten Standorte</div><div class=\"tr-subtext\"><span ng-repeat=\"l in ctrl.mergeLocations\"><span>{{l.name}}</span><span ng-hide=\"$last\">,</span></span></div><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><div class=\"tr-subtitle\">Direkt berechigte Personen</div><ui-select name=\"employees\" multiple ng-model=\"ctrl.currentPersons\" on-remove=\"ctrl.personRemoved($item, $model)\" on-select=\"ctrl.personAdded($item, $model)\"><ui-select-match placeholder=\"{{'Wählen...' | translate}}\">{{$item.name}}</ui-select-match><ui-select-choices repeat=\"p in ctrl.personCandidates track by $index\"><div ng-bind-html=\"p.name | highlight: $select.search\"></div></ui-select-choices></ui-select><!--<multi-select removed=\"ctrl.personRemoved($item)\" added=\"ctrl.personAdded($item)\" ng-model=\"ctrl.currentPersons\" ng-source=\"ctrl.persons\" ng-exclude=\"ctrl.inheritedPersons\"></multi-select>--><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><div class=\"tr-subtitle\">Direkt konfigurierte Standorte</div><ui-select name=\"employees\" multiple ng-model=\"ctrl.currentLocations\" on-remove=\"ctrl.locationRemoved($item, $model)\" on-select=\"ctrl.locationAdded($item, $model)\"><ui-select-match placeholder=\"{{'Wählen...' | translate}}\">{{$item.name}}</ui-select-match><ui-select-choices repeat=\"l in ctrl.locationCandidates track by $index\"><div ng-bind-html=\"l.name | highlight: $select.search\"></div></ui-select-choices></ui-select><!--<multi-select removed=\"ctrl.locationRemoved($item)\" added=\"ctrl.locationAdded($item)\" ng-model=\"ctrl.currentLocations\" ng-source=\"ctrl.locations\" ng-exclude=\"ctrl.inheritedLocations\"></multi-select>--><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><div class=\"btn btn-default\" ng-hide=\"ctrl.editMode\" ng-click=\"ctrl.changeDescription()\">Beschreibung ändern</div></div></div></div>"
  );


  $templateCache.put('Client/Views/roles.html',
    "<div ng-controller=\"TrRoleController as ctrl\"><h2>Rollen</h2><hr><div class=\"col-md-4\"><div class=\"row\" style=\"margin: 0\" slim-scroll><div class=\"col-md-12 tr-list-head\"><div class=\"row\"><div class=\"col-md-1\"></div><div class=\"col-md-11\">Name</div><!--<div class=\"col-md-6\">Beschreibung</div>--></div></div><div class=\"tr-list\"><div class=\"col-md-12\" ng-show=\"ctrl.loading\"><div class=\"tr-v-spacer\"></div><div class=\"tr-list-loader\"><div id=\"floatingBarsG\"><div class=\"blockG\" id=\"rotateG_01\"></div><div class=\"blockG\" id=\"rotateG_02\"></div><div class=\"blockG\" id=\"rotateG_03\"></div><div class=\"blockG\" id=\"rotateG_04\"></div><div class=\"blockG\" id=\"rotateG_05\"></div><div class=\"blockG\" id=\"rotateG_06\"></div><div class=\"blockG\" id=\"rotateG_07\"></div><div class=\"blockG\" id=\"rotateG_08\"></div></div></div></div><div class=\"col-md-12 tr-list-item\" ng-repeat=\"role in ctrl.roles|orderBy:'name'\" ng-click=\"ctrl.select(role)\" ng-class=\"{'tr-list-item-selected': role.id == ctrl.selectedRole.id}\"><div class=\"row\"><div class=\"col-md-2\"><i class=\"glyphicon glyphicon-cog\"></i></div><div class=\"col-md-9 tr-ellipsis\">{{role.name}}</div><!--<div class=\"col-md-7 tr-ellipsis\">{{role.Description}}</div>--><div class=\"tr-list-selector-left\"></div><div class=\"tr-list-selector-right\"></div></div></div><div class=\"col-md-12 tr-list-item\" ng-click=\"ctrl.create();\" ng-hide=\"ctrl.loading\" ng-class=\"{'tr-list-item-selected': ctrl.selectedRole.id == 0}\"><div class=\"row\"><div class=\"col-md-2\"><i class=\"glyphicon glyphicon-plus\"></i></div><div class=\"col-md-9\">Neu</div><div class=\"tr-list-selector-left\"></div><div class=\"tr-list-selector-right\"></div></div></div></div></div></div><div class=\"col-md-offset-1 col-md-7 form-horizontal\" ng-show=\"ctrl.selectedRole\"><div class=\"row\"><h4 class=\"tr-col-form-title tr-ellipsis\">{{ctrl.selectedRole.name}}</h4><div class=\"form-group\"><label class=\"col-md-3 control-label\" for=\"name\">Name</label><div class=\"col-md-8\"><input class=\"form-control\" id=\"name\" type=\"text\" ng-model=\"ctrl.selectedRole.name\" maxlength=\"{{ctrl.maxNameLength}}\"></div></div><div class=\"form-group\"><label class=\"col-md-3 control-label\" for=\"description\">Beschreibung</label><div class=\"col-md-8\"><textarea class=\"form-control\" id=\"description\" type=\"text\" ng-model=\"ctrl.selectedRole.description\"></textarea></div></div><p style=\"font-size: 14px; font-weight: bold\">Berechtigungen</p><hr><div class=\"row\"><div class=\"col-md-5\"><b>Inaktiv</b><div class=\"tr-v-spacer\"></div><div class=\"row tr-claim-list\" slim-scroll height=\"300\"><div class=\"col-md-12 tr-claim\" ng-repeat=\"claim in ctrl.inactiveClaims | orderBy : 'name'\" ng-click=\"ctrl.selectClaim(claim, false);\" ng-class=\"{'tr-claim-selected': claim.id == ctrl.selectedClaim.id}\">{{claim.name}}</div></div></div><div class=\"col-md-5 col-md-offset-2\"><b>Aktiv</b><div class=\"tr-v-spacer\"></div><div class=\"row tr-claim-list\" slim-scroll height=\"300\"><div class=\"col-md-12 tr-claim\" ng-repeat=\"claim in ctrl.activeClaims | orderBy : 'name'\" ng-click=\"ctrl.selectClaim(claim, true);\" ng-class=\"{'tr-claim-selected': claim.id == ctrl.selectedClaim.id}\">{{claim.name}}</div></div></div></div><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><p style=\"font-size: 14px; font-weight: bold\">{{ctrl.selectedClaim.name}}</p><hr><p>{{ctrl.selectedClaim.description}}</p><div class=\"tr-v-spacer\"></div><div class=\"row\"><div class=\"form-group\" ng-repeat=\"field in ctrl.selectedClaim.fields\"><label class=\"col-md-3 control-label\" for=\"name\">{{field.name}}</label><div class=\"col-md-8\"><input ng-show=\"field.type === 1\" class=\"form-control\" type=\"number\" ng-model=\"field.value\"> <input ng-show=\"field.type === 2\" class=\"form-control\" type=\"text\" ng-model=\"field.value\"> <input ng-show=\"field.type === 3\" type=\"checkbox\" ng-model=\"field.value\"></div></div></div><div ng-hide=\"ctrl.isCurrentClaimActive || !ctrl.selectedClaim\" class=\"btn btn-default\" ng-click=\"ctrl.addClaim();\">Aktivieren</div><div ng-show=\"ctrl.isCurrentClaimActive && ctrl.selectedClaim\" class=\"btn btn-default\" ng-click=\"ctrl.removeClaim();\">Deaktivieren</div><!--<div ng-repeat=\"claim in ctrl.claims\">\n" +
    "\t\t\t\t<div class=\"row\">\n" +
    "\t\t\t\t\t<div ng-show=\"ctrl.hasClaim(claim)\" class=\"col-md-3\">\n" +
    "\t\t\t\t\t\t<div class=\"btn btn-xs btn-danger\" ng-click=\"ctrl.toggleClaim(claim)\">\n" +
    "\t\t\t\t\t\t\t<i class=\"glyphicon glyphicon-minus\"></i>\n" +
    "\t\t\t\t\t\t\tEntfernen\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div ng-hide=\"ctrl.hasClaim(claim)\" class=\"col-md-3\">\n" +
    "\t\t\t\t\t\t<div class=\"btn btn-xs btn-success\" ng-click=\"ctrl.toggleClaim(claim)\">\n" +
    "\t\t\t\t\t\t\t<i class=\"glyphicon glyphicon-plus\"></i>\n" +
    "\t\t\t\t\t\t\tHinzufügen\n" +
    "\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div class=\"col-md-9\"><p><span>{{claim.Name}}</span>&nbsp;<a tooltip-placement=\"right\" tooltip=\"{{claim.Description}}\"><b>?</b> </a></p></div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>--><div class=\"tr-v-spacer\"></div><div class=\"form-group\"><div class=\"col-md-4\"><div class=\"btn btn-default\" ng-click=\"ctrl.save()\">Speichern</div></div><div class=\"col-md-4\" ng-show=\"ctrl.selectedRole.userCount < 1 && !ctrl.newRole\"><div class=\"btn btn-default\" ng-click=\"ctrl.delete()\">Löschen</div></div></div></div></div></div>"
  );


  $templateCache.put('Client/Views/sidePage.html',
    "<div class=\"dispo-side-container container-fluid\"><div class=\"dispo-side-empty-page\" ng-click=\"side.close()\"></div><div class=\"dispo-side-outer\"><div class=\"bar\"><button class=\"btn btn-default\" ng-click=\"side.close()\"><span class=\"glyphicon glyphicon-arrow-right\"></span></button></div><div class=\"dispo-side-scrollable has-sticky-bar\"><div class=\"dispo-side-page\"><ui-view></ui-view></div></div></div></div>"
  );


  $templateCache.put('Client/Views/start.html',
    "<div>test start page</div>"
  );


  $templateCache.put('Client/Views/templates/FilterHeader.html',
    "<div class=\"row filter-header\"><div class=\"col-md-4\"><h3 class=\"current-date\">KW {{model.date | date:'w, EEEE d. MMMM'}}</h3></div><div class=\"col-md-8\" ng-if=\"!model.targetingMode\"><div class=\"row\"><div class=\"col-md-7 btn-group\"><div class=\"filter-header-date-navigation\"><button type=\"button\" class=\"btn btn-default\" ng-click=\"ctrl.previousWeek()\"><span class=\"glyphicon glyphicon-arrow-left glyphicon-wider\"></span></button> <button type=\"button\" class=\"btn btn-default\" ng-click=\"ctrl.today()\">Heute</button> <button type=\"button\" class=\"btn btn-default\" ng-click=\"ctrl.nextWeek()\"><span class=\"glyphicon glyphicon-arrow-right glyphicon-wider\"></span></button></div><div class=\"input-group\"><input name=\"expensesForm.date\" type=\"text\" ng-model=\"model.date\" class=\"form-control datepicker\" datepicker-popup view-format ng-disabled=\"ctrl.isDisabled()\" show-button-bar=\"false\" is-open=\"ctrl.datepickerOpened\"> <span class=\"input-group-btn\"><button type=\"button\" class=\"btn btn-default\" ng-click=\"ctrl.openDatepicker($event)\"><span class=\"glyphicon glyphicon-wider glyphicon-th-list\"></span></button></span></div></div><div ng-if=\"!model.targetingMode\" class=\"col-md-5\"><button ng-click=\"model.targetingMode = true; targetStartButtonCallback();\" class=\"btn btn-default btn-min-width\"><span class=\"glyphicon glyphicon-ok glyphicon-ok-darkgreen\"></span><span>{{targetStartButtonText}}</span></button> <button ng-click=\"addButtonCallback()\" class=\"btn btn-default btn-min-width pull-right\"><span class=\"glyphicon glyphicon-plus\"></span><span>{{addButtonText}}</span></button></div></div></div><div ng-if=\"model.targetingMode\" class=\"col-md-offset-5 col-md-3 btn-group\"><button ng-click=\"model.targetingMode = false; targetCancelButtonCallback()\" class=\"btn btn-primary btn-min-width\"><span>{{targetCancelButtonText}}</span></button> <button ng-click=\"targetConfirmButtonCallback()\" class=\"btn btn-success btn-min-width pull-right\"><span class=\"glyphicon glyphicon-ok glyphicon-ok-white\"></span><span>{{targetConfirmButtonText}}</span></button></div></div><div class=\"tr-v-spacer\"></div><div class=\"row filter-week\"><div class=\"col-md-12\"><div class=\"calendar-panel\"><div class=\"btn-group fill\"><button type=\"button\" ng-repeat=\"day in [1, 2, 3, 4, 5, 6, 0]\" class=\"btn btn-default day-btn\" ng-click=\"ctrl.goToDay(day)\" ng-disabled=\"model.targetingMode\" ng-class=\"{ 'day-btn-selected': ctrl.getCurrentWeekday() === day, 'day-btn-last': $last, 'day-btn-first': $first }\">{{ctrl.getDayName(day)}}<br><strong>{{getEntryPerDay(day)}}</strong></button><div class=\"total pull-right\">Total:<br><strong>{{getTotalEntries()}}</strong></div></div></div></div></div>"
  );


  $templateCache.put('Client/Views/templates/multiselect.html',
    "<div><div class=\"select2-container select2-container-multi\" style=\"width: 100%\"><ul class=\"select2-choices\" ng-click=\"toggleSearch();\"><li class=\"select2-search-choice\" ng-repeat=\"c in ngModel track by $index\"><div>{{c.getValue()}}</div><a ng-click=\"remove(c, $event);\" class=\"select2-search-choice-close\" tabindex=\"-1\"></a></li><li class=\"select2-search-field\"><label class=\"select2-offscreen\"></label><input type=\"text\" ng-model=\"search\" class=\"select2-input\" style=\"width: 10px\" placeholder=\"\"></li></ul></div><div class=\"select2-drop select2-drop-multi select2-drop-active\" ng-show=\"searchMode\"><ul class=\"select2-results\"><li ng-repeat=\"o in options | filter:search track by $index\" ng-click=\"addItem(o)\" class=\"select2-results-dept-0 select2-result select2-result-selectable\" role=\"presentation\"><div class=\"select2-result-label\" role=\"option\"><span class=\"select2-match\"></span> {{o.getValue()}}</div></li><li ng-show=\"options.length === 0\" class=\"select2-results-dept-0 select2-result\" role=\"presentation\"><div class=\"select2-result-label\" role=\"option\"><span class=\"select2-match\"></span> Keine Resultate</div></li></ul></div></div>"
  );


  $templateCache.put('Client/Views/templates/projectTree.html',
    "<div><div class=\"tr-project-node\" ng-class=\"{'tr-project-node-selected': project.id == selectedNodeId}\" ng-click=\"selectInt(project)\"><div class=\"tr-project-node-head\"><span class=\"glyphicon glyphicon-plus tr-clickable\" ng-show=\"!project.expanded && project.hasChildren\" ng-click=\"expand(project, $event)\"></span> <span class=\"glyphicon glyphicon-minus tr-clickable\" ng-show=\"project.expanded\" ng-click=\"fold(project, $event)\"></span></div><div class=\"tr-project-flags\" ng-hide=\"depth === 0 && project.hasChildren\"><div class=\"tr-project-flag\" ng-click=\"setFlag(project, 1, $event)\" ng-class=\"{'tr-blue': project.bookable}\">B</div><div class=\"tr-project-flag\" ng-click=\"setFlag(project, 2, $event)\" ng-class=\" {'tr-red': project.explicit}\">E</div><div class=\"tr-project-flag\" ng-click=\"setFlag(project, 4, $event)\" ng-class=\" {'tr-green': project.planningUnit}\">P</div></div><div class=\"tr-project-node-body\"><span>{{project.externalId}}&nbsp;{{project.name}}</span></div><div style=\"clear: both\"></div></div><div class=\"tr-project-children-container\" ng-show=\"project.expanded\"><div ng-repeat=\"c in project.children\"><project-tree project=\"c\" node-selected=\"selectInt($node)\" depth=\"getDepth();\" selected-node-id=\"selectedNodeId\"></project-tree></div></div></div>"
  );


  $templateCache.put('Client/Views/templates/toSelect.html',
    "<div class=\"toSelect-container\"><label class=\"toSelect-label\" for=\"toSelect\">An:</label><div class=\"toSelect-selected\" style=\"float: left\"><div class=\"toSelect-selectedItem\" ng-repeat=\"selected in model track by $index\" ng-class=\"{'read' : selected.read && disabled, 'unread' : !selected.read && disabled}\"><span class=\"toSelect-selectedItem-name\">{{selected.value}}</span> &nbsp; <span class=\"toSelect-selectedItem-remove\" ng-hide=\"disabled\" ng-click=\"removeItem(selected);\"><i class=\"glyphicon glyphicon-remove\"></i></span></div><input type=\"text\" id=\"toSelect\" ng-hide=\"disabled\" class=\"toSelect-input\" ng-model=\"search\" ng-change=\"realign()\"><div style=\"clear: both\"></div></div><div style=\"clear: both\"></div><div class=\"toSelect-matches\" ng-show=\"search && !disabled\"><div class=\"toSelect-match\" ng-repeat=\"match in source | filter:filter track by $index\" ng-bind-html=\"match.htmlString | unsafe\" ng-click=\"addItem(match);\"></div><div class=\"toSelect-match no-matches\">Keine Resultate</div></div></div>"
  );


  $templateCache.put('Client/Views/timebooking/modal/timebookingModalTemplate.html',
    "<div class=\"modal-header\"><h4 class=\"modal-title\" translate>Warnung</h4></div><div class=\"modal-body\">xxx</div><div class=\"modal-footer\"><button class=\"btn btn-primary\" ng-click=\"$close(true)\" translate>Bestätigen</button> <button class=\"btn btn-warning\" ng-click=\"$dismiss('cancel')\" translate>Abbrechen</button></div>"
  );


  $templateCache.put('Client/Views/timebooking/timebookings.form.html',
    "<div ng-controller=\"TrTimeBookingFormController as ctrl\" class=\"timebookings-edit\"><div ng-if=\"!ctrl.isDuplicating() && !ctrl.isSplitting()\"><h2><span ng-if=\"ctrl.isNew()\">{{'Neuer Eintrag am ' + (ctrl.timeBooking.start | date : 'dd.MM.yyyy')}}</span> <span ng-if=\"!ctrl.isNew() && !ctrl.isExtraBooking\">Eintrag bearbeiten</span> <span ng-if=\"ctrl.isExtraBooking\">Zusatzbuchung bearbeiten</span></h2><hr></div><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><form name=\"timebookingForm\" class=\"form-horizontal\" novalidate><div class=\"row\" block-ui=\"TimebookingsEditBlock\"><div ng-if=\"ctrl.drawHtml\" class=\"col-md-12\"><div class=\"row\"><div class=\"col-md-6\"><div class=\"row\" ng-if=\"ctrl.isAdmin\"><tl-validate target=\"timebookingForm.employee\" label-text=\"'Person' | translate\" css-value=\"col-md-8\" css-label=\"col-md-4\" validate-now=\"ctrl.triggerValidation\" required class=\"form-value\"><ui-select ng-hide=\"ctrl.isReadonly()\" required name=\"employee\" ng-model=\"ctrl.employee\" class=\"\" ng-disabled=\"!ctrl.isEditable\"><ui-select-match placeholder=\"{{'Wählen...' | translate}}\">{{$select.selected.firstName}}&nbsp;{{$select.selected.lastName}}</ui-select-match><ui-select-choices repeat=\"employee in ctrl.searchedEmployees track by $index\" refresh=\"ctrl.searchEmployee($select.search)\"><div ng-bind-html=\"employee.firstName + ' ' + employee.lastName  | highlight: $select.search\"></div></ui-select-choices><span class=\"timebooking-form-readonly\" ng-show=\"ctrl.isReadonly()\">{{ctrl.employee.firstName}}&nbsp;{{ctrl.employee.lastName}}</span></ui-select></tl-validate></div></div></div><div class=\"row\"><div class=\"col-md-6\"><tl-validate target=\"timebookingForm.project\" label-text=\"'Job' | translate\" css-value=\"col-md-8\" css-label=\"col-md-4\" validate-now=\"ctrl.triggerValidation\" required class=\"form-value\"><ui-select ng-hide=\"ctrl.isReadonly()\" required name=\"project\" on-select=\"ctrl.entryType = undefined\" ng-model=\"ctrl.project\" ng-disabled=\"!ctrl.isEditable || ctrl.isExtraBooking\" class=\"\"><ui-select-match placeholder=\"{{'Wählen...' | translate}}\">{{$select.selected.name}}</ui-select-match><ui-select-choices repeat=\"project in ctrl.searchedProjects track by $index\" refresh=\"ctrl.searchProject($select.search)\"><ng-include src=\"'timebookings.form.project-dropdown.html'\"></ng-include></ui-select-choices></ui-select><span class=\"timebooking-form-readonly\" ng-show=\"ctrl.isReadonly()\">{{ctrl.project.name}}</span></tl-validate></div><div class=\"col-md-6\"><tl-validate target=\"timebookingForm.entryType\" label-text=\"'Typ' | translate\" css-value=\"col-md-8\" css-label=\"col-md-4\" validate-now=\"ctrl.triggerValidation\" required class=\"form-value\"><ui-select ng-hide=\"ctrl.isReadonly()\" required name=\"entryType\" ng-model=\"ctrl.entryType\" class=\"\" ng-disabled=\"!ctrl.project || (!ctrl.isEditable || ctrl.isExtraBooking)\"><ui-select-match placeholder=\"{{'Wählen...' | translate}}\">{{$select.selected.name}}</ui-select-match><ui-select-choices repeat=\"type in ctrl.searchedTypes | filter:ctrl.effortFilter(ctrl.project) track by $index\"><!--refresh=\"ctrl.searchType($select.search)\"--><div ng-bind-html=\"type.name\"></div></ui-select-choices></ui-select><span class=\"timebooking-form-readonly\" ng-show=\"ctrl.isReadonly()\">{{ctrl.entryType.name}}</span></tl-validate></div></div><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><div class=\"row\"><div class=\"col-md-6\"><div class=\"row timeentry\"><tl-validate target=\"timebookingForm.fromDate\" label-text=\"'Von' | translate\" css-value=\"col-md-4\" css-label=\"col-md-4\" validate-now=\"ctrl.triggerValidation\" class=\"form-value col-md-12\" required><div ng-hide=\"ctrl.isReadonly()\" class=\"input-group time-picker\"><timepicker tl-autoselect tl-timepicker-prune tl-timepicker-focus tl-timepicker-numeric ui-validate=\"{taskWithinStart : 'ctrl.validateStartTime()', taskTimeOverlapping: 'ctrl.validateStartTimeOverlapping()' }\" ui-validate-watch=\"['ctrl.timeBooking.start']\" name=\"fromDate\" ng-model=\"ctrl.timeBooking.start\" show-meridian=\"false\" hour-step=\"ctrl.isEditable ? 1 : 0\" minute-step=\"ctrl.isEditable ? 1 : 0\"></timepicker></div><span class=\"timebooking-form-readonly\" ng-show=\"ctrl.isReadonly()\">{{ctrl.timeBooking.start | date : 'HH:mm'}}</span></tl-validate></div></div><div class=\"col-md-6\"><div class=\"row timeentry\"><tl-validate target=\"timebookingForm.toDate\" label-text=\"'Bis' | translate\" css-value=\"col-md-4\" css-label=\"col-md-4\" validation-text=\"_error\" validate-now=\"ctrl.triggerValidation\" class=\"form-value col-md-12\" required><div ng-hide=\"ctrl.isReadonly()\" class=\"input-group time-picker\"><timepicker tl-autoselect tl-timepicker-prune tl-timepicker-numeric ui-validate=\"{taskTo: 'ctrl.validateStopTime()', taskWithinStop : 'ctrl.validateStopWithin()', taskTimeOverlapping: 'ctrl.validateStopTimeOverlapping()'}\" ui-validate-watch=\"['ctrl.timeBooking.start', 'ctrl.timeBooking.stop']\" name=\"toDate\" ng-model=\"ctrl.timeBooking.stop\" show-meridian=\"false\" hour-step=\"ctrl.isEditable ? 1 : 0\" minute-step=\"ctrl.isEditable ? 1 : 0\"></timepicker></div><span class=\"timebooking-form-readonly\" ng-show=\"ctrl.isReadonly()\">{{ctrl.timeBooking.stop | date : 'HH:mm'}}</span></tl-validate></div></div></div><div class=\"row\"><div class=\"col-md-12\"><div class=\"row\"><tl-validate target=\"timebookingForm.description\" label-text=\"'Bemerkung' | translate\" css-value=\"col-md-10\" css-label=\"col-md-2\" validate-now=\"ctrl.triggerValidation\" class=\"form-value col-md-12 timebookings-timeentry\" required><textarea ng-hide=\"ctrl.isReadonly()\" class=\"form-control\" name=\"description\" type=\"text\" ng-model=\"ctrl.timeBooking.comment\" ng-disabled=\"!ctrl.isEditable\"></textarea><span class=\"timebooking-form-readonly\" ng-show=\"ctrl.isReadonly()\">{{ctrl.timeBooking.comment}}</span></tl-validate></div></div></div><div class=\"tr-v-spacer\"></div><div class=\"row\" ng-if=\"!ctrl.isReadonly()\"><div class=\"col-md-12\"><div class=\"btn btn-danger pull-right\" ng-click=\"ctrl.remove();\" ng-disabled=\"!ctrl.isEditable || ctrl.$services.pageLock.buttonLock\" ng-hide=\"ctrl.isNew()\">Löschen</div><div class=\"pull-right\">&nbsp;</div><div class=\"btn btn-success pull-right\" ng-click=\"ctrl.confirmSave();\" ng-disabled=\"!ctrl.isEditable || ctrl.$services.pageLock.buttonLock\">Speichern</div><div class=\"pull-right\">&nbsp;</div><div class=\"btn btn-primary pull-right\" ng-disabled=\"ctrl.$services.pageLock.buttonLock\" ng-click=\"ctrl.close(); side.close()\">Zurück</div></div></div><div ng-if=\"ctrl.isDuplicating()\"><ng-include src=\"'timebookings.form.duplicate.html'\"></ng-include></div><div ng-if=\"ctrl.isSplitting()\"><ng-include src=\"'timebookings.form.split.html'\"></ng-include></div></div></div></form><script type=\"text/ng-template\" id=\"timebookings.form.duplicate.html\"><h2>\n" +
    "      <span>{{'_timebookingDuplicateTitle' | translate}}</span>\n" +
    "    </h2>\n" +
    "    <hr />\n" +
    "    <div class=\"tr-v-spacer\"></div>\n" +
    "    <div class=\"tr-v-spacer\"></div>\n" +
    "    <div class=\"row min-height-row\">\n" +
    "\n" +
    "      <div class=\"col-md-6\">\n" +
    "        <div class=\"timeentry\">\n" +
    "          <tl-validate target=\"timebookingForm.toDate\"\n" +
    "                       label-text=\"'_timebookingDuplicateTimepoint' | translate\"\n" +
    "                       css-value=\"col-md-8\"\n" +
    "                       css-label=\"col-md-4\"\n" +
    "                       validation-text=\"_error\"\n" +
    "                       validate-now=\"ctrl.triggerValidation\"\n" +
    "                       class=\"form-value\"\n" +
    "                       required>\n" +
    "            <div class=\"btn-group\">\n" +
    "              <label class=\"btn btn-primary\" ng-model=\"ctrl.copySectionRadio\" btn-radio=\"'now'\">{{'_timebookingDuplicateNow' | translate}}</label>\n" +
    "              <label class=\"btn btn-primary\" ng-model=\"ctrl.copySectionRadio\" btn-radio=\"'date'\">{{'_timebookingDuplicateDate' | translate}}</label>\n" +
    "            </div>\n" +
    "          </tl-validate>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"col-md-3\" ng-if=\"ctrl.copySectionRadio === 'date'\">\n" +
    "\n" +
    "        <div class=\"input-group\">\n" +
    "          <input type=\"text\"\n" +
    "                 ng-model=\"ctrl.copySectionDate\"\n" +
    "                 class=\"form-control datepicker\"\n" +
    "                 datepicker-popup\n" +
    "                 view-format\n" +
    "                 is-open=\"ctrl.copySectionDatepickerOpened\" />\n" +
    "          <span class=\"input-group-btn\">\n" +
    "            <button type=\"button\" class=\"btn btn-default\" ng-click=\"ctrl.openDatepicker($event)\"><i class=\"glyphicon glyphicon-wider glyphicon-th-list\"></i></button>\n" +
    "          </span>\n" +
    "        </div>\n" +
    "\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "      <div class=\"col-md-3\" ng-if=\"ctrl.copySectionRadio === 'date'\">\n" +
    "\n" +
    "        <div class=\"input-group time-picker copy-section-time-picker\">\n" +
    "          <timepicker tl-autoselect tl-timepicker-prune tl-timepicker-numeric required ng-model=\"ctrl.copySectionTime\" show-meridian=\"false\"></timepicker>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-6\">\n" +
    "\n" +
    "        <tl-validate target=\"timebookingForm.copySectionProject\"\n" +
    "                     label-text=\"'Job' | translate\"\n" +
    "                     css-value=\"col-md-8\"\n" +
    "                     css-label=\"col-md-4\"\n" +
    "                     validate-now=\"ctrl.triggerValidation\"\n" +
    "                     required\n" +
    "                     class=\"form-value\">\n" +
    "          <ui-select name=\"timebookingForm.copySectionProject\" on-select=\"ctrl.copySectionEntryType = undefined;\" ng-model=\"ctrl.copySectionProject\" class=\"\">\n" +
    "            <ui-select-match placeholder=\"{{'Wählen...' | translate}}\">\n" +
    "              {{$select.selected.name}}\n" +
    "            </ui-select-match>\n" +
    "            <ui-select-choices repeat=\"project in ctrl.searchedProjects track by $index\"\n" +
    "                               refresh=\"ctrl.searchProject($select.search)\">\n" +
    "              <ng-include src=\"'timebookings.form.project-dropdown.html'\"></ng-include>\n" +
    "            </ui-select-choices>\n" +
    "          </ui-select>\n" +
    "        </tl-validate>\n" +
    "\n" +
    "      </div>\n" +
    "      <div class=\"col-md-6\">\n" +
    "\n" +
    "        <tl-validate target=\"timebookingForm.copySectionEntryType\"\n" +
    "                     label-text=\"'Typ' | translate\"\n" +
    "                     css-value=\"col-md-8\"\n" +
    "                     css-label=\"col-md-4\"\n" +
    "                     validate-now=\"ctrl.triggerValidation\"\n" +
    "                     required\n" +
    "                     class=\"form-value\">\n" +
    "          <ui-select required name=\"copySectionEntryType\" ng-model=\"ctrl.copySectionEntryType\" class=\"\" ng-disabled=\"!ctrl.copySectionProject\">\n" +
    "            <ui-select-match placeholder=\"{{'Wählen...' | translate}}\">\n" +
    "              {{$select.selected.name}}\n" +
    "            </ui-select-match>\n" +
    "            <ui-select-choices repeat=\"type in ctrl.searchedTypes | filter:ctrl.effortFilter(ctrl.copySectionProject) track by $index\">\n" +
    "              <!--refresh=\"ctrl.searchType($select.search)\"-->\n" +
    "              <div ng-bind-html=\"type.name\"></div>\n" +
    "            </ui-select-choices>\n" +
    "          </ui-select>\n" +
    "        </tl-validate>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"tr-v-spacer\"></div>\n" +
    "    <div class=\"tr-v-spacer\"></div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-12\">\n" +
    "        <div class=\"btn btn-success pull-right\" ng-disabled=\"ctrl.$services.pageLock.buttonLock\" ng-click=\"ctrl.saveDuplicate();\" translate>_timebookingDuplicateButton</div>\n" +
    "        <div class=\"pull-right\">&nbsp;</div>\n" +
    "        <div class=\"btn btn-primary pull-right\" ng-disabled=\"ctrl.$services.pageLock.buttonLock\" ng-click=\"ctrl.close(); side.close()\">Zurück</div>\n" +
    "      </div>\n" +
    "    </div></script><script type=\"text/ng-template\" id=\"timebookings.form.split.html\"><h2>\n" +
    "      <span>{{'_timebookingSplitTitle' | translate}}</span>\n" +
    "    </h2>\n" +
    "    <hr />\n" +
    "    <div class=\"tr-v-spacer\"></div>\n" +
    "    <div class=\"tr-v-spacer\"></div>\n" +
    "    <div class=\"row min-height-row\">\n" +
    "\n" +
    "      <div class=\"col-md-6 timebooking-no-padding-right\">\n" +
    "        <tl-validate target=\"timebookingForm.toDate\"\n" +
    "                     label-text=\"'_timebookingDuplicateTimepoint' | translate\"\n" +
    "                     css-value=\"col-md-8\"\n" +
    "                     css-label=\"col-md-4\"\n" +
    "                     validation-text=\"_error\"\n" +
    "                     validate-now=\"ctrl.triggerValidation\"\n" +
    "                     class=\"form-value \"\n" +
    "                     required>\n" +
    "          <div class=\"btn-group\">\n" +
    "            <label class=\"btn btn-primary timebooking-smaller-button\" ng-model=\"ctrl.splitSectionRadio\" btn-radio=\"'begin'\">{{'_timebookingSplitBegin' | translate}}</label>\n" +
    "            <label class=\"btn btn-primary timebooking-smaller-button\" ng-model=\"ctrl.splitSectionRadio\" btn-radio=\"'end'\">{{'_timebookingSplitEnd' | translate}}</label>\n" +
    "            <label class=\"btn btn-primary timebooking-smaller-button\" ng-model=\"ctrl.splitSectionRadio\" btn-radio=\"'timepoint'\">{{'_timebookingSplitTimepoint' | translate}}</label>\n" +
    "          </div>\n" +
    "        </tl-validate>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"col-md-6\">\n" +
    "        <div class=\"row timeentry\" ng-if=\"ctrl.splitSectionRadio==='timepoint'\">\n" +
    "          <tl-validate target=\"timebookingForm.splitTime\"\n" +
    "                       label-text=\"'_timebookingSplitTime' | translate\"\n" +
    "                       css-value=\"col-md-8\"\n" +
    "                       css-label=\"col-md-4\"\n" +
    "                       validate-now=\"ctrl.triggerValidation\"\n" +
    "                       class=\"form-value\"\n" +
    "                       required>\n" +
    "            <div class=\"input-group time-picker copy-section-time-picker\">\n" +
    "              <timepicker tl-autoselect tl-timepicker-numeric name=\"splitTime\" required max=\"ctrl.timeBookingOriginal.stop\" min=\"ctrl.timeBookingOriginal.start\" ng-model=\"ctrl.splitSectionTime\" show-meridian=\"false\">\n" +
    "              </timepicker>\n" +
    "            </div>\n" +
    "          </tl-validate>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"duration\">\n" +
    "        <div class=\"display-inline col-md-4\">\n" +
    "          <tl-validate target=\"timebookingForm.splitHours\"\n" +
    "                       label-text=\"'_duration' | translate\"\n" +
    "                       css-value=\"col-md-4 hours\"\n" +
    "                       css-label=\"col-md-6\"\n" +
    "                       validate-now=\"ctrl.triggerValidation\"\n" +
    "                       explicit=\"true\"\n" +
    "                       class=\"form-value\"\n" +
    "                       required>\n" +
    "            <div class=\"display-inline\">\n" +
    "              <input tl-autoselect tl-autofocus maxlength=\"5\" type=\"number\" required name=\"splitHours\" class=\"form-control\" ng-model=\"ctrl.splitSectionHours\" min=\"0\" />\n" +
    "            </div>\n" +
    "            <div class=\"display-inline\">\n" +
    "              <span class=\" control-label middle-text\">h</span>\n" +
    "            </div>\n" +
    "          </tl-validate>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"display-inline col-md-2\">\n" +
    "          <tl-validate target=\"timebookingForm.splitMinutes\"\n" +
    "                       css-value=\"col-md-8 minutes\"\n" +
    "                       css-label=\"col-md-0\"\n" +
    "                       validate-now=\"ctrl.triggerValidation\"\n" +
    "                       explicit=\"true\"\n" +
    "                       class=\"form-value\"\n" +
    "                       required>\n" +
    "            <div class=\"display-inline\">\n" +
    "              <input tl-autoselect type=\"number\" maxlength=\"5\" name=\"splitMinutes\" class=\"form-control\" ng-model=\"ctrl.splitSectionMinutes\" min=\"0\" max=\"59\"\n" +
    "                     ui-validate=\"{timebookingInvalidSplitDuration: 'ctrl.validateSplitMinutes()'}\"\n" +
    "                     ui-validate-watch=\"['(ctrl.splitSectionMinutes + (ctrl.splitSectionHours * 60))', 'ctrl.splitSectionRadio', 'ctrl.splitSectionTime']\" />\n" +
    "            </div>\n" +
    "            <div class=\"display-inline\">\n" +
    "              <span class=\"control-label middle-text\">min</span>\n" +
    "            </div>\n" +
    "          </tl-validate>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-6\">\n" +
    "\n" +
    "        <tl-validate target=\"timebookingForm.splitSectionProject\"\n" +
    "                     label-text=\"'Job' | translate\"\n" +
    "                     css-value=\"col-md-8\"\n" +
    "                     css-label=\"col-md-4\"\n" +
    "                     validate-now=\"ctrl.triggerValidation\"\n" +
    "                     required\n" +
    "                     class=\"form-value\">\n" +
    "          <ui-select name=\"timebookingForm.splitSectionProject\" on-select=\"ctrl.splitSectionEntryType = undefined;\" ng-model=\"ctrl.splitSectionProject\">\n" +
    "            <ui-select-match placeholder=\"{{'Wählen...' | translate}}\">\n" +
    "              {{$select.selected.name}}\n" +
    "            </ui-select-match>\n" +
    "            <ui-select-choices repeat=\"project in ctrl.searchedProjects track by $index\"\n" +
    "                               refresh=\"ctrl.searchProject($select.search)\">\n" +
    "              <ng-include src=\"'timebookings.form.project-dropdown.html'\"></ng-include>\n" +
    "            </ui-select-choices>\n" +
    "          </ui-select>\n" +
    "        </tl-validate>\n" +
    "\n" +
    "      </div>\n" +
    "      <div class=\"col-md-6\">\n" +
    "\n" +
    "        <tl-validate target=\"timebookingForm.splitSectionEntryType\"\n" +
    "                     label-text=\"'Typ' | translate\"\n" +
    "                     css-value=\"col-md-8\"\n" +
    "                     css-label=\"col-md-4\"\n" +
    "                     validate-now=\"ctrl.triggerValidation\"\n" +
    "                     required\n" +
    "                     class=\"form-value\">\n" +
    "          <ui-select required name=\"splitSectionEntryType\" ng-model=\"ctrl.splitSectionEntryType\" class=\"\" ng-disabled=\"!ctrl.splitSectionProject\">\n" +
    "            <ui-select-match placeholder=\"{{'Wählen...' | translate}}\">\n" +
    "              {{$select.selected.name}}\n" +
    "            </ui-select-match>\n" +
    "            <ui-select-choices repeat=\"type in ctrl.searchedTypes | filter:ctrl.effortFilter(ctrl.splitSectionProject) track by $index\">\n" +
    "              <!--refresh=\"ctrl.searchType($select.search)\"-->\n" +
    "              <div ng-bind-html=\"type.name\"></div>\n" +
    "            </ui-select-choices>\n" +
    "          </ui-select>\n" +
    "        </tl-validate>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"tr-v-spacer\"></div>\n" +
    "    <div class=\"tr-v-spacer\"></div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-12\">\n" +
    "        <div class=\"btn btn-success pull-right\" ng-disabled=\"ctrl.$services.pageLock.buttonLock\" ng-click=\"ctrl.saveSplit();\" translate>_timebookingSplitButton</div>\n" +
    "        <div class=\"pull-right\">&nbsp;</div>\n" +
    "        <div class=\"btn btn-primary pull-right\" ng-disabled=\"ctrl.$services.pageLock.buttonLock\" ng-click=\"ctrl.close(); side.close()\">Zurück</div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"tr-v-spacer\"></div></script><script type=\"text/ng-template\" id=\"timebookings.form.project-dropdown.html\"><div style=\"font-weight: bold\" ng-bind-html=\"project.name | highlight: $select.search\"></div>\n" +
    "    <small>\n" +
    "      <span class=\"detail\" ng-if=\"project.externalObjectName && project.externalNumber\">\n" +
    "        <span translate>Aba Projekt Referenz</span>&#58;\n" +
    "        <span ng-bind-html=\"project.externalObjectName + ' (' + project.externalNumber + ')'  | highlight: $select.search\"></span>\n" +
    "        <br />\n" +
    "      </span>\n" +
    "      <span class=\"detail\" ng-if=\"project.associatedClient\">\n" +
    "        <span translate>Betreiber</span>&#58;\n" +
    "        <span ng-bind-html=\"project.associatedClient.name | highlight: $select.search\">\"></span>\n" +
    "        <br />\n" +
    "      </span>\n" +
    "      <span class=\"detail\" ng-if=\"project.anlageNr\">\n" +
    "        <span translate>Anlage-Nr.</span>&#58;\n" +
    "        <span ng-bind-html=\"project.anlageNr\"></span>\n" +
    "        <br />\n" +
    "      </span>\n" +
    "    </small></script></div>"
  );


  $templateCache.put('Client/Views/timebooking/timebookings.html',
    "<div ng-controller=\"TrTimeBookingController as ctrl\" class=\"full-height\"><!-- side navigation --><ui-view class=\"detail-slide\"></ui-view><div class=\"row\"><h1 class=\"col-md-9\">Arbeitszeiterfassung</h1></div><filter-header model=\"ctrl.filterHeaderDate\" add-button-callback=\"ctrl.filterHeaderAdd()\" add-button-text=\"Neuer Eintrag\" target-start-button-callback=\"ctrl.filterHeaderShowConfirm()\" target-start-button-text=\"Visieren\" target-cancel-button-callback=\"ctrl.filterHeaderConfirmCancel()\" target-cancel-button-text=\"Abbrechen\" target-confirm-button-callback=\"ctrl.filterHeaderConfirmSave()\" target-confirm-button-text=\"Speichern\" get-entry-per-day=\"ctrl.filterHeaderGetEntryPerDay\" get-total-entries=\"ctrl.filterHeaderGetTotalEntries()\"></filter-header><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><div class=\"row user-tasks\" ng-if=\"ctrl.hasData() && !ctrl.isLoading\"><div class=\"col-md-12 tr-list-head\"><div class=\"row\"><div ng-if=\"ctrl.isAdmin\" class=\"col-md-1\">Person</div><div class=\"col-md-2\">Betreiber/Anlage</div><div class=\"col-md-3\">JobNr. / Tätigkeit</div><div class=\"col-md-2\">Typ</div><div class=\"col-md-1 timebookings-times-padding\">Zeit</div><div class=\"col-md-1 timebookings-duration-padding\">Dauer</div><!--<div class=\"col-md-2\">Kommentar</div>--><div class=\"col-md-1 timebookings-status-padding\">Status</div><div class=\"col-md-2\"><span ng-show=\"ctrl.filterHeaderDate.targetingMode\">Visiert</span></div></div></div><div infinite-scroll=\"ctrl.search.getMore();\" infinite-scroll-distance=\"1\" class=\"tr-list user-task-list\" tl-full-height><div ng-repeat=\"(key, value) in ctrl.timeBookingsOfDay.entries | groupBy: 'entry.projectId'\" class=\"timebooking-group-container\"><div ng-repeat=\"container in value\"><ng-include include-replace src=\"'timebooking.row.template.html'\"></ng-include><div ng-repeat=\"entry in container.related\"><ng-include include-replace src=\"'timebooking.extra.row.template.html'\"></ng-include></div></div></div></div></div><div ng-if=\"!ctrl.hasData() && !ctrl.isLoading\" class=\"row tr-list-item\"><div class=\"col-md-12\">Keine Arbeitszeit erfasst.</div></div><div ng-if=\"ctrl.isLoading\" class=\"row tr-list-item\"><div class=\"col-md-12\">Wird geladen..</div></div><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div></div><script type=\"text/ng-template\" id=\"timebooking.row.template.html\"><div class=\"col-md-12 tr-list-item timebooking-list-item\">\n" +
    "\t\t<div class=\"row\">\n" +
    "\t\t\t<div ng-if=\"ctrl.isAdmin\" class=\"col-md-1 tr-ellipsis\">{{container.entry.employeeName}}</div>\n" +
    "\t\t\t\n" +
    "\t\t\t<div class=\"col-md-2\">\n" +
    "\t\t\t\t<span>{{container.entry.client}}</span>\n" +
    "\t\t\t\t<span ng-show=\"container.entry.anlageNr\">,&nbsp;{{container.entry.anlageNr}}</span>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"col-md-3\">\n" +
    "\t\t\t\t{{container.entry.projectName}}\n" +
    "\t\t\t</div>\n" +
    "\n" +
    "\t\t\t<div class=\"col-md-2\">{{container.entry.typeName}}</div>\n" +
    "      <div class=\"col-md-1 timebookings-times-padding\">{{container.entry.start | date : 'H:mm'}} - {{container.entry.stop | date : 'H:mm'}}</div>\n" +
    "      <div class=\"col-md-1 timebookings-duration-padding\">{{ctrl.getDuration(container.entry)}}</div>\n" +
    "\t\t\t<!--<div class=\"col-md-2\">{{container.entry.comment}}</div>-->\n" +
    "      <div class=\"col-md-1 timebookings-status-padding\" ng-style=\"{'color': ctrl.getStateColor(container.entry.state) }\">{{ctrl.getStateById(container.entry.state)}}</div>\n" +
    "      <div class=\"col-md-2 timebooking-list-buttons\">\n" +
    "        <span ng-show=\"!ctrl.filterHeaderDate.targetingMode && ctrl.isDuplicable(container.entry)\" class=\"glyphicon glyphicon-duplicate\" ng-click=\"ctrl.duplicateTimebooking(container.entry)\"></span>\n" +
    "        <span ng-show=\"!ctrl.filterHeaderDate.targetingMode && ctrl.isSplittable(container.entry)\" class=\"glyphicon glyphicon-scissors\" ng-click=\"ctrl.splitTimebooking(container.entry)\"></span>\n" +
    "        <span ng-hide=\"ctrl.filterHeaderDate.targetingMode || container.entry.isSignedOff\" class=\"glyphicon glyphicon-edit\" ng-click=\"ctrl.editTimebooking(container.entry)\"></span>\n" +
    "        <input type=\"checkbox\" ng-show=\"ctrl.filterHeaderDate.targetingMode\" ng-model=\"container.entry.confirmed\" ng-change=\"ctrl.setConfirmed(container.entry)\" ng-disabled=\"!ctrl.isEditable(container.entry)\" />\n" +
    "\n" +
    "      </div>\n" +
    "\t\t\t<!--<div class=\"tr-list-selector-left\">\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"tr-list-selector-right\">\n" +
    "\t\t\t</div>-->\n" +
    "\t\t</div>\n" +
    "\t</div></script><script type=\"text/ng-template\" id=\"timebooking.extra.row.template.html\"><div class=\"col-md-12 tr-list-item timebooking-extra-list-item\">\n" +
    "\t\t<div class=\"row\">\n" +
    "\t\t\t<div ng-if=\"ctrl.isAdmin\" class=\"col-md-1 tr-ellipsis\"></div>\n" +
    "\t\t\t<div class=\"col-md-2\">\n" +
    "        <span>{{container.entry.client}}</span>\n" +
    "        <span ng-show=\"container.entry.anlageNr\">,&nbsp;{{container.entry.anlageNr}}</span>\n" +
    "      </div>\n" +
    "\t\t\t<div class=\"col-md-3\">{{entry.projectName}}</div>\n" +
    "\t\t\t<div class=\"col-md-2\">{{entry.typeName}}</div>\n" +
    "      <div class=\"col-md-1 timebookings-times-padding\">{{entry.start | date : 'H:mm'}} - {{entry.stop | date : 'H:mm'}}</div>\n" +
    "      <div class=\"col-md-1 timebookings-duration-padding\">{{ctrl.getDuration(entry)}}</div>\n" +
    "\t\t\t<!--<div class=\"col-md-2 tr-ellipsis\">{{entry.comment}}</div>-->\n" +
    "      <div class=\"col-md-1 timebookings-status-padding\"></div>\n" +
    "      <div class=\"col-md-2 timebooking-list-buttons\">\n" +
    "        <span ng-hide=\"ctrl.filterHeaderDate.targetingMode || container.entry.isSignedOff\" class=\"glyphicon glyphicon-edit\" ng-click=\"ctrl.editTimebooking(entry)\"></span>\n" +
    "      </div>\n" +
    "\t\t\t<!--<div class=\"tr-list-selector-left\">\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"tr-list-selector-right\">\n" +
    "\t\t\t</div>-->\n" +
    "\t\t</div>\n" +
    "\t</div></script>"
  );


  $templateCache.put('Client/Views/timesheet/templates/timesheetAvailabilities.html',
    "<div class=\"unavailability-section\"><span ng-if=\"!isOpen\" ng-click=\"toggleExpand()\" class=\"glyphicon glyphicon-plus-sign expansioon-button\" aria-hidden=\"true\"></span> <span ng-if=\"isOpen\" ng-click=\"toggleExpand()\" class=\"glyphicon glyphicon-minus-sign expansioon-button\" aria-hidden=\"true\"></span> <span class=\"expansion-label\" translate>Details</span> <span></span><div class=\"un-availabilities\" ng-repeat=\"unAvailability in availabilityEntryTypes | orderBy:'abbreviation'\"><span>{{unAvailability.name}}</span></div></div>"
  );


  $templateCache.put('Client/Views/timesheet/templates/timesheetDayCellTemplate.html',
    "<div class=\"days-column\" ng-style=\"{'width': columnWidth + 'px', 'background-color': isWeekend ? '#EBEBEB' : ''}\"><span class=\"planned-amount\">{{timeEntry.planned | minsToHours | tlDecimalPlaces:2}}</span> <span class=\"done\"><span class=\"threshold\" ng-show=\"breachedThreshold()\" ng-style=\"{'background-color' : selectedThreshold.color}\"></span> <span class=\"done-amount\">{{timeEntry.done | minsToHours | tlDecimalPlaces:2}}</span></span> <span class=\"other-total\"><span>{{getTotal(timeEntry.availabilityTimeEntries) | minsToHours | tlDecimalPlaces:2}}</span></span><div class=\"un-availabilities\"><div class=\"un-availability\" ng-repeat=\"availabilityTimeEntry in timeEntry.availabilityTimeEntries | orderBy:'abbreviation'\"><span>{{availabilityTimeEntry.mins | minsToHours | tlDecimalPlaces:2}}</span></div></div></div>"
  );


  $templateCache.put('Client/Views/timesheet/templates/timesheetEmployeeCellTemplate.html',
    "<div class=\"employee-column\" ng-style=\"{'width': columnWidth + 'px'}\"><span class=\"employee-name\">{{employee.name}}</span> <span class=\"planned-label\" translate>Geplant</span> <span class=\"done-label\" translate>Geleistet</span> <span class=\"done-label\" translate>BLARGHH (to name)</span><timesheet-availabilities employee=\"employee\" row-height=\"rowHeight\" row-height-expanded=\"rowHeightExpanded\" row-number=\"rowNumber\" availability-entry-types=\"availabilityEntryTypes\" external-scope=\"externalScope\"></timesheet-availabilities></div>"
  );


  $templateCache.put('Client/Views/timesheet/templates/timesheetTotalCellTemplate.html',
    "<div class=\"total-month-column\" ng-style=\"{'width': columnWidth + 'px'}\"><span class=\"total-planned-amount\">{{employee.totalMonthPlanned | minsToHours | tlDecimalPlaces:2}}</span> <span class=\"done\"><span class=\"threshold\" ng-show=\"breachedThreshold()\" ng-style=\"{'background-color' : selectedThreshold.color}\"></span> <span class=\"total-done-amount\">{{employee.totalMonthDone | minsToHours | tlDecimalPlaces:2}}</span></span> <span class=\"total-unavailable-amount\">{{employee.totalMonthAvailabilityEntries | minsToHours | tlDecimalPlaces:2}}</span><div class=\"un-availabilities-summary\"><div class=\"un-availabilities\" ng-repeat=\"entryType in availabilityEntryTypes | orderBy:'abbreviation'\"><span>{{employee.totalMonthAvailabilityFor(entryType) | minsToHours | tlDecimalPlaces:2}}</span></div></div></div>"
  );


  $templateCache.put('Client/Views/timesheet/timesheet.html',
    "<div ng-controller=\"TimeSheetController as ctrl\" class=\"timesheet\"><div class=\"row\"><div class=\"col-md-8\"><h2>Soll/Ist Livereport</h2></div><div class=\"col-md-4\"><div class=\"btn btn-default pull-right\" ng-show=\"ctrl.webServiceAvailable\" ng-click=\"ctrl.triggerPlanDataImport()\">Planzeiten importieren</div><div class=\"btn btn-default pull-right\" ng-show=\"ctrl.webServiceAvailable\" ng-click=\"ctrl.triggerAbsenceSync()\">Absenzen synchronisieren</div></div></div><hr><div class=\"project-search\"><div class=\"project-search-details\" ng-style=\"{'width': ctrl.timesheetData.employeeColumnWidth + 'px'}\"><div class=\"projectName\"><span translate>Jobname</span> <span translate>Monat</span></div></div><div class=\"project-search-criteria\"><div class=\"row\"><div class=\"col-md-4\"><ui-select ng-model=\"ctrl.selectedProject\"><ui-select-match placeholder=\"{{'Suche...' | translate}}\">{{$select.selected.name}}</ui-select-match><ui-select-choices repeat=\"project in ctrl.searchedProjects track by $index\" refresh=\"ctrl.searchProjects($select.search)\"><div ng-bind-html=\"project.name | highlight: $select.search\"></div></ui-select-choices></ui-select></div><div class=\"col-md-3 search\"><div ng-show=\"ctrl.isSearchingProjects\" class=\"ui-select-searching\"></div><button ng-click=\"ctrl.tryLoadData()\" class=\"btn btn-default search-button\">Suchen</button></div></div><!----><div class=\"row\"><div class=\"col-md-4\"><div class=\"input-group\"><input name=\"date\" type=\"text\" ng-model=\"ctrl.selectedDate\" class=\"form-control datepicker\" datepicker-popup=\"MM.yyyy\" view-format=\"MM.yyyy\" is-open=\"ctrl.datePickerStates['opened1']\" current-text=\"Heute\" clear-text=\"Zurücksetzen\" close-text=\"Schliessen\" date-disabled=\"day\" min-mode=\"'month'\" datepicker-mode=\"'month'\" datepicker-options=\"{minMode: 'month',datepickerMode: 'month'}\" ng-change=\"ctrl.selectDate(ctrl.selectedDate)\"> <span class=\"input-group-btn\"><button type=\"button\" class=\"btn btn-default\" ng-click=\"ctrl.openDatepicker($event, 'opened1')\"><i class=\"glyphicon glyphicon-th-list\"></i></button></span></div></div></div></div></div><div class=\"row timesheet-data\" tl-window-height=\"150\" tl-window-height-container-class=\".timesheet\" block-ui=\"timesheetGrid\"><div ng-if=\"ctrl.timesheetData.timesheet\" class=\"col-md-12 timesheet-data-container\" scroll-manager scroll-sender><div class=\"timesheet-employees\" ng-style=\"{'min-width': ctrl.timesheetData.employeeColumnWidth + 'px'}\"><div class=\"header-column\"><span>{{'Mitarbeiter' | translate}}</span></div><div class=\"verticle-scrollable\" vertical-scroll-receiver tl-window-height=\"190\" tl-window-height-container-class=\".timesheet\"><div ng-class=\"'timesheet-row-' + {{$index}}\" class=\"timesheet-employee-row timesheet-row\" ng-repeat=\"employee in ctrl.timesheetData.timesheet.timeSheetEmployees track by $index\" ng-style=\"{'height': ctrl.timesheetData.rowHeight + 'px'}\"><timesheet-employee-cell employee=\"employee\" column-width=\"ctrl.timesheetData.employeeColumnWidth\" availability-entry-types=\"ctrl.timesheetData.timesheet.availabilityEntryTypes\" row-height=\"ctrl.timesheetData.rowHeight\" row-height-expanded=\"ctrl.timesheetData.rowHeightExpanded\" row-number=\"$index\" external-scope=\"ctrl.$scope\"></timesheet-employee-cell></div></div></div><div class=\"timesheet-days\"><div class=\"header-column\" ng-style=\"{'min-width': ctrl.timesheetData.dayColumnWidth + 'px', 'background-color' : dayColumn.color}\" ng-repeat=\"dayColumn in ctrl.timesheetData.dayColumns\"><span>{{dayColumn.date | date:'EEE dd'}}</span></div><div class=\"horizontal-scrollable\" vertical-scroll-receiver tl-window-height=\"190\" tl-window-height-container-class=\".timesheet\"><div ng-class=\"'timesheet-row-' + {{$index}}\" class=\"timesheet-days-row timesheet-row\" ng-repeat=\"employee in ctrl.timesheetData.timesheet.timeSheetEmployees\" ng-style=\"{'height': ctrl.timesheetData.rowHeight + 'px'}\"><timesheet-day-cell time-entry=\"employee.timeEntry(dayColumn.date)\" is-weekend=\"ctrl.isWeekend($index + 1)\" column-width=\"ctrl.timesheetData.dayColumnWidth\" thresholds=\"ctrl.getDayThresholds()\" ng-repeat=\"dayColumn in ctrl.timesheetData.dayColumns track by $index\"></timesheet-day-cell></div></div></div><div class=\"timesheet-totals\" ng-style=\"{'min-width': ctrl.timesheetData.totalColumnWidth + 'px'}\"><div class=\"header-column\"><span>{{'Total' | translate}}</span></div><div class=\"verticle-scrollable\" vertical-scroll-receiver tl-window-height=\"190\" tl-window-height-container-class=\".timesheet\"><div ng-class=\"'timesheet-row-' + {{$index}}\" class=\"timesheet-total-row timesheet-row\" ng-repeat=\"employee in ctrl.timesheetData.timesheet.timeSheetEmployees\" ng-style=\"{'height': ctrl.timesheetData.rowHeight + 'px'}\"><timesheet-total-cell employee=\"employee\" column-width=\"ctrl.timesheetData.totalColumnWidth\" thresholds=\"ctrl.getTotalMonthThresholds()\" availability-entry-types=\"ctrl.timesheetData.timesheet.availabilityEntryTypes\"></timesheet-total-cell></div></div></div><div scroll-sender tl-full-height style=\"width: 17px; position: absolute; right: 0; z-index: 100; overflow-y: auto\" tl-window-height=\"150\" tl-window-height-container-class=\".timesheet\"><div tl-height-of=\".verticle-scrollable\" tl-height-of-on-event=\"ctrl.rowExpansionEventName()\" tl-height-of-offset=\"20\" style=\"width: 17px\"></div></div></div></div></div><!-- ui-grid-pinning-->"
  );


  $templateCache.put('Client/Views/users.html',
    "<div ng-controller=\"TrUserController as ctrl\"><h2>Terminals</h2><hr><div class=\"col-md-7\"><div class=\"row\"><div class=\"col-md-8\"><div class=\"input-group\"><input type=\"text\" class=\"form-control\" ng-model=\"ctrl.user.search\" placeholder=\"Suche\"> <span class=\"input-group-btn\"><button class=\"btn btn-default\" type=\"button\" ng-click=\"ctrl.user.startSearch()\">Suchen</button></span></div></div><div class=\"col-md-4\"><div class=\"btn btn-default pull-right\" ng-click=\"ctrl.create()\"><i class=\"glyphicon glyphicon-plus\"></i>&nbsp;Erstellen</div></div></div><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><div class=\"row\" style=\"margin: 0px\" infinite-scroll=\"ctrl.user.loadMore();\" infinite-scroll-distance=\"1\"><div class=\"col-md-12 tr-list-head\"><div class=\"row\"><div class=\"col-md-1\"></div><div class=\"col-md-4\">Name</div><div class=\"col-md-3\">Typ</div><div class=\"col-md-4\">Aktiv</div></div></div><div class=\"tr-list\"><div class=\"col-md-12\" ng-show=\"ctrl.loading\"><div class=\"tr-v-spacer\"></div><div class=\"tr-list-loader\"><div id=\"floatingBarsG\"><div class=\"blockG\" id=\"rotateG_01\"></div><div class=\"blockG\" id=\"rotateG_02\"></div><div class=\"blockG\" id=\"rotateG_03\"></div><div class=\"blockG\" id=\"rotateG_04\"></div><div class=\"blockG\" id=\"rotateG_05\"></div><div class=\"blockG\" id=\"rotateG_06\"></div><div class=\"blockG\" id=\"rotateG_07\"></div><div class=\"blockG\" id=\"rotateG_08\"></div></div></div></div><div ng-repeat=\"user in ctrl.user.users\" class=\"col-md-12 tr-list-item\" ng-click=\"ctrl.select(user);\" ng-class=\"{'tr-list-item-selected':user.id == ctrl.selectedUser.id}\"><div class=\"row\"><div class=\"col-md-1\"><i class=\"glyphicon glyphicon-user\"></i></div><div class=\"col-md-4 tr-ellipsis\">{{user.userName}}</div><div class=\"col-md-3\"><span ng-show=\"user.userType==1\">Terminal</span> <span ng-show=\"user.userType==2\">Persönlich</span> <span ng-show=\"user.userType==0\">Administrator</span></div><div class=\"col-md-4\">{{ user.lastPing | date:'dd.MM.yyyy HH:mm:ss' }}</div><div class=\"tr-list-selector-left\"></div><div class=\"tr-list-selector-right\"></div></div></div></div></div></div><div class=\"col-md-4 col-md-offset-1 form-horizontal\" ng-show=\"ctrl.showForm\"><div class=\"row\"><h4 class=\"tr-col-form-title tr-ellipsis\">{{ctrl.selectedUser.userName}}</h4><div class=\"form-group\"><label class=\"col-md-4 control-label\" for=\"name\">Name</label><div class=\"col-md-8\"><input class=\"form-control\" id=\"name\" type=\"text\" ng-model=\"ctrl.selectedUser.userName\" maxlength=\"{{ctrl.nameMaxLength}}\"></div></div><div class=\"form-group\" ng-hide=\"ctrl.selectedUser.userType === 0\"><label class=\"col-md-4 control-label\" for=\"tid\">Id</label><div class=\"col-md-8\"><input class=\"form-control\" id=\"tid\" type=\"text\" ng-model=\"ctrl.selectedUser.terminalid\" maxlength=\"{{ctrl.idMaxLength}}\"></div></div><div class=\"form-group\"><label class=\"col-md-4 control-label\" for=\"type\">Typ</label><div class=\"col-md-8\" ng-hide=\"ctrl.selectedUser.userType === 0\"><select id=\"type\" class=\"form-control\" ng-model=\"ctrl.selectedUser.userType\"><option value=\"1\">Terminal</option><option value=\"2\">Persönlich</option></select></div><div class=\"col-md-8\" ng-show=\"ctrl.selectedUser.userType === 0\"><p style=\"margin-top: 6px; font-weight: bold\">Administrator</p></div></div><div class=\"form-group\" ng-show=\"ctrl.selectedUser.userType == 1\"><label class=\"col-md-4 control-label\" for=\"location\">Standort</label><div class=\"col-md-8\"><select id=\"location\" class=\"form-control\" ng-model=\"ctrl.selectedUser.locationId\"><option value=\"0\">Wählen...</option><option value=\"{{l.key}}\" ng-repeat=\"l in ctrl.locations\">{{l.name}}</option></select></div></div><div class=\"form-group\" ng-show=\"ctrl.selectedUser.userType == 2\"><label class=\"col-md-4 control-label\" for=\"person\">Person</label><div class=\"col-md-8\"><select id=\"person\" class=\"form-control\" ng-model=\"ctrl.selectedUser.personId\"><option value=\"0\">Wählen...</option><option value=\"{{p.id}}\" ng-repeat=\"p in ctrl.persons\">{{p.firstName}} {{p.lastName}}</option></select></div></div><div class=\"form-group\" ng-hide=\"ctrl.editPassword || ctrl.newUser\"><div class=\"col-md-offset-4 col-md-8\"><p><a ng-click=\"ctrl.changePw()\">Passwort ändern</a></p><p ng-show=\"ctrl.authentication.appUser.isAdmin\"><a ng-click=\"ctrl.resetPw();\">Passwort zurücksetzen</a></p></div></div><div class=\"form-group\" ng-show=\"ctrl.editPassword\"><label class=\"col-md-4 control-label\" for=\"apw\">Altes Pw</label><div class=\"col-md-8\"><input class=\"form-control\" id=\"apw\" type=\"password\" ng-model=\"ctrl.selectedUser.oldPassword\"></div></div><div class=\"form-group\" ng-show=\"ctrl.editPassword || ctrl.newUser\"><label class=\"col-md-4 control-label\" for=\"pw\">Passwort</label><div class=\"col-md-8\"><input class=\"form-control\" id=\"pw\" type=\"password\" ng-model=\"ctrl.selectedUser.password\" maxlength=\"{{ctrl.passwordMaxLength}}\"></div></div><div class=\"form-group\" ng-show=\"ctrl.editPassword || ctrl.newUser\"><label class=\"col-md-4 control-label\" for=\"pwc\">Bestätigen</label><div class=\"col-md-8\"><input class=\"form-control\" id=\"pwc\" type=\"password\" ng-model=\"ctrl.selectedUser.passwordConfirm\" maxlength=\"{{ctrl.passwordMaxLength}}\"></div></div><div class=\"form-group\" ng-hide=\"!ctrl.editPassword || ctrl.newUser\"><div class=\"col-md-offset-4 col-md-8\" ng-click=\"ctrl.stopChangePw()\"><a>Abbrechen</a></div></div><div class=\"form-group\"><div class=\"col-md-4\"><div class=\"btn btn-default\" ng-click=\"ctrl.save()\">Speichern</div></div><div class=\"col-md-4\"><div class=\"btn btn-default\" ng-hide=\"ctrl.newUser || ctrl.selectedUser.userType === 0\" ng-click=\"ctrl.delete()\">Löschen</div></div></div></div></div></div>"
  );

}]);
