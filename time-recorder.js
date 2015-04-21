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
            (function (ETimeBookingState) {
                ETimeBookingState[ETimeBookingState["Open"] = 0] = "Open";
                ETimeBookingState[ETimeBookingState["Complete"] = 1] = "Complete";
                ETimeBookingState[ETimeBookingState["Faulted"] = 2] = "Faulted";
            })(Data.ETimeBookingState || (Data.ETimeBookingState = {}));
            var ETimeBookingState = Data.ETimeBookingState;
            (function (EProjectFlag) {
                EProjectFlag[EProjectFlag["Bookable"] = 1] = "Bookable";
                EProjectFlag[EProjectFlag["Explicit"] = 2] = "Explicit";
                EProjectFlag[EProjectFlag["PlanningUnit"] = 4] = "PlanningUnit";
            })(Data.EProjectFlag || (Data.EProjectFlag = {}));
            var EProjectFlag = Data.EProjectFlag;
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
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, {}, "Employee", "IPersonVm[]", false);
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
                EmployeeResource.prototype.newPersonVm = function () {
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
            var OperationResource = (function () {
                function OperationResource($requestSender) {
                    this.$requestSender = $requestSender;
                }
                OperationResource.prototype.triggerImportPersonalDataRequest = function () {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Operation/TriggerImportPersonalData";
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Operation", "any", false);
                    return dataRequest;
                };
                OperationResource.prototype.triggerImportPersonalData = function () {
                    var request = this.triggerImportPersonalDataRequest();
                    return this.$requestSender.requestValue(request);
                };
                OperationResource.prototype.triggerImportObjectDataRequest = function () {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Operation/TriggerImportObjectData";
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Operation", "any", false);
                    return dataRequest;
                };
                OperationResource.prototype.triggerImportObjectData = function () {
                    var request = this.triggerImportObjectDataRequest();
                    return this.$requestSender.requestValue(request);
                };
                return OperationResource;
            })();
            Data.OperationResource = OperationResource;
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
                TimeBookingResource.prototype.saveRequest = function (data) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/TimeBooking/Save";
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, data, "TimeBooking", "ITimeBookingCm", true);
                    return dataRequest;
                };
                TimeBookingResource.prototype.save = function (data) {
                    var request = this.saveRequest(data);
                    return this.$requestSender.requestValue(request);
                };
                TimeBookingResource.prototype.getRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/TimeBooking/Get";
                    if (angular.isDefined(params.id)) {
                        url = Triarc.Data.appendUrlParameter(url, "id", encodeURIComponent(params.id));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, {}, "TimeBooking", "ITimeBookingCm", false);
                    return dataRequest;
                };
                TimeBookingResource.prototype.get = function (params) {
                    var request = this.getRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                TimeBookingResource.prototype.getAvailableEntryTypesMultipleRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/TimeBooking/GetAvailableEntryTypes";
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
                TimeBookingResource.prototype.getAvailableEntryTypesMultiple = function (params) {
                    var request = this.getAvailableEntryTypesMultipleRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                TimeBookingResource.prototype.getMetaDataRequest = function () {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/TimeBooking/GetMetaData";
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "TimeBooking", "ITimeBookingMetaDataVm", false);
                    return dataRequest;
                };
                TimeBookingResource.prototype.getMetaData = function () {
                    var request = this.getMetaDataRequest();
                    return this.$requestSender.requestValue(request);
                };
                TimeBookingResource.prototype.deleteRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/TimeBooking/Delete";
                    if (angular.isDefined(params.id)) {
                        url = Triarc.Data.appendUrlParameter(url, "id", encodeURIComponent(params.id));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("DELETE", url, {}, "TimeBooking", "boolean", false);
                    return dataRequest;
                };
                TimeBookingResource.prototype.delete = function (params) {
                    var request = this.deleteRequest(params);
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
                TimeBookingResource.prototype.newTimeBookingCm = function () {
                    return {};
                };
                TimeBookingResource.prototype.newTimeEntryTypeCm = function () {
                    return {};
                };
                TimeBookingResource.prototype.newTimeBookingMetaDataVm = function () {
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
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Admin", "boolean", false);
                    return dataRequest;
                };
                AdminResource.prototype.triggerPersonImport = function () {
                    var request = this.triggerPersonImportRequest();
                    return this.$requestSender.requestValue(request);
                };
                AdminResource.prototype.triggerProjectImportRequest = function () {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Admin/TriggerProjectImport";
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Admin", "boolean", false);
                    return dataRequest;
                };
                AdminResource.prototype.triggerProjectImport = function () {
                    var request = this.triggerProjectImportRequest();
                    return this.$requestSender.requestValue(request);
                };
                AdminResource.prototype.fetchOrderDataRequest = function () {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Admin/FetchOrderData";
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Admin", "any", false);
                    return dataRequest;
                };
                AdminResource.prototype.fetchOrderData = function () {
                    var request = this.fetchOrderDataRequest();
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
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Person", "IPersonCm", false);
                    return dataRequest;
                };
                PersonResource.prototype.getPersonById = function (params) {
                    var request = this.getPersonByIdRequest(params);
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
                PersonResource.prototype.searchPeopleMultipleRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Person/SearchPeople";
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
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, {}, "Person", "IPersonCm[]", false);
                    return dataRequest;
                };
                PersonResource.prototype.searchPeopleMultiple = function (params) {
                    var request = this.searchPeopleMultipleRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                PersonResource.prototype.getContactRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Person/GetContact";
                    if (angular.isDefined(params.contactId)) {
                        url = Triarc.Data.appendUrlParameter(url, "contactId", encodeURIComponent(params.contactId));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Person", "IPersonCm", false);
                    return dataRequest;
                };
                PersonResource.prototype.getContact = function (params) {
                    var request = this.getContactRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                PersonResource.prototype.getPersonRequest = function (params) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/Person/GetPerson";
                    if (angular.isDefined(params.personId)) {
                        url = Triarc.Data.appendUrlParameter(url, "personId", encodeURIComponent(params.personId));
                    }
                    var dataRequest = new Triarc.Data.DataRequest("GET", url, {}, "Person", "IPersonCm", false);
                    return dataRequest;
                };
                PersonResource.prototype.getPerson = function (params) {
                    var request = this.getPersonRequest(params);
                    return this.$requestSender.requestValue(request);
                };
                PersonResource.prototype.newPersonCm = function () {
                    return {};
                };
                PersonResource.prototype.newClientCm = function () {
                    return {};
                };
                PersonResource.prototype.newContactCm = function () {
                    return {};
                };
                return PersonResource;
            })();
            Data.PersonResource = PersonResource;
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
                ExpensesResource.prototype.newExpenseCm = function () {
                    return {};
                };
                ExpensesResource.prototype.newExpenseTypeCm = function () {
                    return {};
                };
                ExpensesResource.prototype.newExpensesSearchCm = function () {
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
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, data, "WorkReport", "ISearchExternalWorkReportCm[]", true);
                    return dataRequest;
                };
                WorkReportResource.prototype.searchMultiple = function (params, data) {
                    var request = this.searchMultipleRequest(params, data);
                    return this.$requestSender.requestValue(request);
                };
                WorkReportResource.prototype.newWorkReportCm = function () {
                    return {};
                };
                WorkReportResource.prototype.newExternalWorkReportCm = function () {
                    return {};
                };
                WorkReportResource.prototype.newSearchExternalWorkReportCm = function () {
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
                AccountResource.prototype.newPersonVm = function () {
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
                TimeEntryResource.prototype.putRequest = function (data) {
                    var url = this.$requestSender.getUrl('$tr-proxy') + "/TimeEntry/Put";
                    var dataRequest = new Triarc.Data.DataRequest("POST", url, data, "TimeEntry", "boolean", true);
                    return dataRequest;
                };
                TimeEntryResource.prototype.put = function (data) {
                    var request = this.putRequest(data);
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
                            Operation: new OperationResource($requestSender),
                            PdfGenerator: new PdfGeneratorResource($requestSender),
                            TimeBooking: new TimeBookingResource($requestSender),
                            Admin: new AdminResource($requestSender),
                            GlobalMessage: new GlobalMessageResource($requestSender),
                            Person: new PersonResource($requestSender),
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
    "tlLayout"
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
            template: "<ui-view></ui-view>"
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
            templateUrl: "Client/Views/expenses.html"
        });
        $stateProvider.state("tr.expenses.side", {
            templateUrl: "Client/Views/sidePage.html",
            controller: "ExpensesSideController as side",
            abstract: true
        });
        $stateProvider.state("tr.expenses.side.add", {
            templateUrl: "Client/Views/expenses.form.html",
        });
        $stateProvider.state("tr.expenses.side.edit", {
            url: "/expenses/edit/:id",
            templateUrl: "Client/Views/expenses.form.html"
        });
        $stateProvider.state("tr.searchEmployeeWorkReport", {
            url: "/employeeWorkReport",
            templateUrl: "Client/Views/employee/employeeSearchWorkReport.html",
        });
        $stateProvider.state("tr.editEmployeeWorkReport", {
            url: "/editWorkReport/:id?",
            templateUrl: "Client/Views/employee/employeeEditWorkReport.html",
            // parent: TimeRecorder.routingParent,
            controller: "EditWorkReportController as ctrl"
        });
        $stateProvider.state("tr.addEmployeeWorkReport", {
            url: "/addWorkReport/:projectId?",
            templateUrl: "Client/Views/employee/employeeEditWorkReport.html",
            //parent: TimeRecorder.routingParent,
            controller: "AddWorkReportController as ctrl"
        });
        $stateProvider.state("tr.timebookings", {
            url: "/timebookings",
            templateUrl: "Client/Views/timebookings.html",
        });
        $stateProvider.state("tr.timebookings.side", {
            templateUrl: "Client/Views/sidePage.html",
            controller: "TimeBookingSideController as side",
            abstract: true
        });
        $stateProvider.state("tr.timebookings.side.add", {
            url: "/add",
            templateUrl: "Client/Views/timebookings.form.html",
        });
        $stateProvider.state("tr.timebookings.side.edit", {
            url: "/edit/:id",
            templateUrl: "Client/Views/timebookings.form.html",
        });
        $stateProvider.state("tr.timebookings.add", {
            url: "/timebookings/add",
            templateUrl: "Client/Views/timebookings.form.html",
        });
        $stateProvider.state("tr.timebookings.edit", {
            url: "/timebookings/edit/:id",
            templateUrl: "Client/Views/timebookings.form.html",
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
            var TimeEntryVm = (function () {
                function TimeEntryVm(cm, availabilityEntryTypes) {
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
                Object.defineProperty(TimeEntryVm.prototype, "date", {
                    get: function () {
                        return this.cm().date;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeEntryVm.prototype, "planned", {
                    get: function () {
                        return this.cm().plannedMins !== 0 ? this.cm().plannedMins : 240;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeEntryVm.prototype, "done", {
                    get: function () {
                        // unavailabilities get added to the total done value
                        return this.cm().doneMins + this.totalAvailability;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeEntryVm.prototype, "availabilityTimeEntries", {
                    get: function () {
                        return this._availabilityTimeEntries;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeEntryVm.prototype, "totalAvailability", {
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
                return TimeEntryVm;
            })();
            Business.TimeEntryVm = TimeEntryVm;
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
                        this._dayEntries = this.cm().timeEntries.toEnumerable().select(function (te) { return new Business.TimeEntryVm(function () { return te; }, function () { return _this.availabilityEntryTypes(); }); }).toArray();
                        return this._dayEntries;
                    },
                    enumerable: true,
                    configurable: true
                });
                TimesheetEmployeeVm.prototype.timeEntry = function (date) {
                    var _this = this;
                    var timeEntry = this.timeEntries.toEnumerable().firstOrDefault(function (te) { return moment(te.date).isSame(moment(date), "day"); });
                    if (Triarc.hasNoValue(timeEntry)) {
                        timeEntry = new Business.TimeEntryVm(function () { return {
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
                Object.defineProperty(PersonVm.prototype, "mainAddressId", {
                    get: function () {
                        return this.cm().mainAddressId;
                    },
                    set: function (val) {
                        this.cm().mainAddressId = val;
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
                Object.defineProperty(PersonVm.prototype, "fullName", {
                    //    get clientId() {
                    //      return this.cm().clientId;
                    //    }
                    //
                    //    set clientId(val) {
                    //      this.cm().clientId = val;
                    //    }
                    get: function () {
                        return this.cm().firstName + " " + this.cm().lastName;
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
            var PersonVm = Web.Bu.PersonVm;
            var EmployeeVm = (function (_super) {
                __extends(EmployeeVm, _super);
                function EmployeeVm(cm) {
                    _super.call(this, cm);
                    this.cm = cm;
                }
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
                Object.defineProperty(EmployeeVm.prototype, "emergencyPin", {
                    get: function () {
                        return this.cm().emergencyPin;
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
            var ProjectVm = (function () {
                function ProjectVm(cm) {
                    this.cm = cm;
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
                Object.defineProperty(ClientVm.prototype, "mainAddress", {
                    get: function () {
                        return null;
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
            var TimeBookingVm = (function () {
                function TimeBookingVm(cm) {
                    this.cm = cm;
                }
                Object.defineProperty(TimeBookingVm.prototype, "id", {
                    get: function () {
                        return this.cm().id;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeBookingVm.prototype, "employeeId", {
                    get: function () {
                        return this.cm().employeeId;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeBookingVm.prototype, "projectId", {
                    get: function () {
                        return this.cm().projectId;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeBookingVm.prototype, "start", {
                    get: function () {
                        return this.cm().start;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeBookingVm.prototype, "stop", {
                    get: function () {
                        return this.cm().stop;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeBookingVm.prototype, "state", {
                    get: function () {
                        return this.cm().state;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeBookingVm.prototype, "typeId", {
                    get: function () {
                        return this.cm().timeEntryTypeId;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TimeBookingVm.prototype, "comment", {
                    get: function () {
                        return this.cm().comment;
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
                    enumerable: true,
                    configurable: true
                });
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
            var ExternalWorkReportVm = (function () {
                function ExternalWorkReportVm(cm) {
                    this.cm = cm;
                }
                Object.defineProperty(ExternalWorkReportVm.prototype, "id", {
                    get: function () {
                        return this.cm().id;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExternalWorkReportVm.prototype, "from", {
                    get: function () {
                        return this.cm().from;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExternalWorkReportVm.prototype, "to", {
                    get: function () {
                        return this.cm().to;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExternalWorkReportVm.prototype, "employeeSignatureImage", {
                    get: function () {
                        return this.cm().employeeSignatureImage;
                    },
                    set: function (value) {
                        this.cm().employeeSignatureImage = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExternalWorkReportVm.prototype, "customerSignatureImage", {
                    get: function () {
                        return this.cm().customerSignatureImage;
                    },
                    set: function (value) {
                        this.cm().customerSignatureImage = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExternalWorkReportVm.prototype, "signatureTimestamp", {
                    get: function () {
                        return this.cm().signatureTimestamp;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExternalWorkReportVm.prototype, "projectCompleted", {
                    get: function () {
                        return this.cm().projectCompleted;
                    },
                    set: function (value) {
                        this.cm().projectCompleted = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExternalWorkReportVm.prototype, "project", {
                    get: function () {
                        if (Triarc.hasValue(this._project))
                            return this.project;
                        return null;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExternalWorkReportVm.prototype, "signedClient", {
                    get: function () {
                        return this._signedClient;
                    },
                    enumerable: true,
                    configurable: true
                });
                ExternalWorkReportVm.prototype.update = function (cm) {
                    angular.copy(this.cm(), cm());
                    this.project = null;
                    this._signedClient = null;
                };
                return ExternalWorkReportVm;
            })();
            Business.ExternalWorkReportVm = ExternalWorkReportVm;
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Business;
        (function (Business) {
            var SearchExternalWorkReportVm = (function () {
                function SearchExternalWorkReportVm(cm) {
                    this.cm = cm;
                }
                Object.defineProperty(SearchExternalWorkReportVm.prototype, "id", {
                    get: function () {
                        return this.cm().id;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SearchExternalWorkReportVm.prototype, "from", {
                    get: function () {
                        return this.cm().from;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SearchExternalWorkReportVm.prototype, "to", {
                    get: function () {
                        return this.cm().to;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SearchExternalWorkReportVm.prototype, "projectCompleted", {
                    get: function () {
                        return this.cm().projectCompleted;
                    },
                    enumerable: true,
                    configurable: true
                });
                return SearchExternalWorkReportVm;
            })();
            Business.SearchExternalWorkReportVm = SearchExternalWorkReportVm;
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var Business;
        (function (Business) {
            var WorkReportVm = (function () {
                function WorkReportVm(cm, externalWorkReportDc) {
                    this.cm = cm;
                    this.externalWorkReportDc = externalWorkReportDc;
                }
                Object.defineProperty(WorkReportVm.prototype, "externalWorkReport", {
                    get: function () {
                        var _this = this;
                        if (Triarc.hasValue(this._externalWorkReport))
                            return this._externalWorkReport;
                        this._externalWorkReport = new Business.ExternalWorkReportVm(function () { return _this.cm().externalWorkReport; });
                        return this._externalWorkReport;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(WorkReportVm.prototype, "timeBookings", {
                    get: function () {
                        var _this = this;
                        if (Triarc.hasValue(this._timeBookings))
                            return this._timeBookings;
                        this._timeBookings = [];
                        this.externalWorkReportDc().container.timeBookingDc.resolveFor(this.cm().timeBookingIds).then(function (timeBookings) {
                            _this._timeBookings = timeBookings;
                        });
                        return this._timeBookings;
                    },
                    enumerable: true,
                    configurable: true
                });
                WorkReportVm.prototype.toCm = function () {
                    var cm = this.cm();
                    return cm;
                };
                return WorkReportVm;
            })();
            Business.WorkReportVm = WorkReportVm;
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
/// <reference path="externalworkreportvm.ts" />
/// <reference path="searchexternalworkreportvm.ts" />
/// <reference path="workreportvm.ts" />
/// <reference path="timesheet/_timesheet_vm_references.ts" />
/// <reference path="expensevm.ts" />
/// <reference path="expensetypevm.ts" />
/// <reference path="personvm.ts" />
/// <reference path="EmployeeVm.ts" />
/// <reference path="projectvm.ts" />
/// <reference path="clientvm.ts" />
/// <reference path="contactvm.ts" />
/// <reference path="timebookingvm.ts" />
/// <reference path="timeentrytypevm.ts" />
/// <reference path="workreport/_work_report_references.ts" />
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
                ExpenseTypeRepository.serviceId = "ExpenseTypeRepository";
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
                ExpenseRepository.prototype.search = function () {
                    return this.$proxy.Expenses.searchMultiple({}, {}).then(function (response) {
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
                    var _this = this;
                    return this.$proxy.Expenses.delete({ id: id }).then(function () { return _this.$q.when(); });
                };
                ExpenseRepository.$inject = [
                    "$tr-proxy",
                    "$q"
                ];
                ExpenseRepository.serviceId = "ExpenseRepository";
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
                ProjectRepository.prototype.getProjectById = function (id) {
                    return this.$proxy.Project.getProjectById({ projectId: id }).then(function (p) { return p.data; });
                };
                ProjectRepository.prototype.getProjectsById = function (ids) {
                    return this.$proxy.Project.getProjectsByIdMultiple({}, { ids: ids }).then(function (p) { return p.data; });
                };
                ProjectRepository.prototype.search = function (searchValue, skip, take) {
                    return this.$proxy.Project.searchProjectsMultiple({ searchValue: searchValue, skip: skip, take: take }).then(function (ret) { return ret.data; });
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
            var PersonVm = Web.Bu.PersonVm;
            var PeopleRepository = (function () {
                function PeopleRepository($proxy) {
                    this.$proxy = $proxy;
                }
                PeopleRepository.prototype.getContactsForClient = function (clientId, isLiveData) {
                    return this.$proxy.Person.getContactsForClientMultiple({ clientId: clientId }).then(function (response) {
                        return response.data.toEnumerable().select(function (p) { return new PersonVm(function () { return p; }); }).toArray();
                    });
                };
                PeopleRepository.prototype.getPerson = function (id, isLiveData) {
                    return this.$proxy.Person.getContact({ contactId: id }).then(function (response) { return response.data; });
                };
                PeopleRepository.prototype.searchPeople = function (searchString) {
                    return this.$proxy.Person.searchPeopleMultiple({ searchString: searchString }).then(function (response) { return response.data; });
                };
                PeopleRepository.$inject = [
                    "$tr-proxy"
                ];
                PeopleRepository.serviceId = "PeopleRepository";
                return PeopleRepository;
            })();
            Business.PeopleRepository = PeopleRepository;
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
                EmployeeRepository.serviceId = "trEmployeeRepository";
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
                TimeEntryTypeRepository.prototype.getMetaData = function () {
                    return this.$proxy.TimeBooking.getMetaData().then(function (response) {
                        return response.data;
                    });
                };
                TimeEntryTypeRepository.prototype.getTypesById = function (ids) {
                    return this.$proxy.TimeEntryType.getTypesByIdMultiple({}, { ids: ids }).then(function (t) { return t.data; });
                };
                TimeEntryTypeRepository.serviceId = "$TimeEntryTypeRepository";
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
                TimeBookingRepository.prototype.getDetail = function (id) {
                    return this.$proxy.TimeBooking.get({ id: id }).then(function (response) { return new Business.TimeBookingVm(function () { return response.data; }); });
                };
                TimeBookingRepository.prototype.search = function (data) {
                    return this.$proxy.TimeBooking.searchMultiple({}, data).then(function (response) { return response.data.toEnumerable().select(function (t) { return new Business.TimeBookingVm(function () { return t; }); }).toArray(); });
                };
                TimeBookingRepository.prototype.save = function (data) {
                    return this.$proxy.TimeBooking.save(data);
                };
                TimeBookingRepository.prototype.remove = function (id) {
                    return this.$proxy.TimeBooking.delete({ id: id });
                };
                TimeBookingRepository.prototype.resolveFor = function (ids) {
                    return this.$proxy.TimeBooking.getForMultiple({}, { ids: ids });
                };
                TimeBookingRepository.serviceId = "$TimeBookingRepository";
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
                ExternalWorkReportRepository.prototype.save = function (data) {
                    return this.$proxy.WorkReport.save(data.toCm()).then(function (response) { return response.data; });
                };
                ExternalWorkReportRepository.prototype.search = function (employeeId, projectId, projectComplete) {
                    return this.$proxy.WorkReport.searchMultiple({}, { employeeId: employeeId, projectId: projectId, projectComplete: projectComplete });
                };
                ExternalWorkReportRepository.serviceId = "$ExternalWorkReportRepository";
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
/// <reference path="expensetyperepository.ts" />
/// <reference path="expenserepository.ts" />
/// <reference path="projectrepository.ts" />
/// <reference path="peoplerepository.ts" />
/// <reference path="employeerespository.ts" />
/// <reference path="timeentrytyperepository.ts" />
/// <reference path="timebookingrepository.ts" />
/// <reference path="externalworkreportrepository.ts" />
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
                TimeSheetDataController.serviceId = "$TimeSheetDataController";
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
                ExpenseTypeDataController.prototype.getAllExpenses = function () {
                    return this.expenseTypeRepository.getAllExpenses().then(function (expenseTypes) { return expenseTypes.toEnumerable().select(function (et) { return new Business.ExpenseTypeVm(function () { return et; }); }).toArray(); });
                };
                ExpenseTypeDataController.serviceId = "ExpenseTypeDataController";
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
                }
                ExpenseDataController.prototype.search = function () {
                    return this.expenseRepository.search().then(function (expenses) { return expenses.toEnumerable().select(function (e) { return new Business.ExpenseVm(function () { return e; }); }).toArray(); });
                };
                ExpenseDataController.prototype.getExpenseById = function (id) {
                    return this.expenseRepository.getExpenseById(id).then(function (e) { return new Business.ExpenseVm(function () { return e; }); });
                };
                ExpenseDataController.prototype.addOrUpdateExpense = function (expenseVm) {
                    return this.expenseRepository.addOrUpdate(expenseVm.getCm()).then(function (expenseCm) { return new Business.ExpenseVm(function () { return expenseCm; }); });
                };
                ExpenseDataController.prototype.delete = function (id) {
                    return this.expenseRepository.delete(id);
                };
                ExpenseDataController.serviceId = "ExpenseDataController";
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
                }
                ProjectDataController.prototype.getProjectById = function (id) {
                    return this.projectRepository.getProjectById(id).then(function (p) { return new Business.ProjectVm(function () { return p; }); });
                };
                ProjectDataController.prototype.getProjectsById = function (ids) {
                    return this.projectRepository.getProjectsById(ids).then(function (projects) { return projects.toEnumerable().select(function (p) { return new Business.ProjectVm(function () { return p; }); }).toArray(); });
                };
                ProjectDataController.prototype.search = function (searchValue, skip, take) {
                    return this.projectRepository.search(searchValue, skip, take).then(function (projects) { return projects.toEnumerable().select(function (p) { return new Business.ProjectVm(function () { return p; }); }).toArray(); });
                };
                ProjectDataController.serviceId = "ProjectDataController";
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
            var PersonVm = Web.Bu.PersonVm;
            var PeopleDataController = (function () {
                function PeopleDataController($q, peopleRepository) {
                    this.$q = $q;
                    this.peopleRepository = peopleRepository;
                }
                PeopleDataController.prototype.getContactsForClient = function (clientId, isLiveData) {
                    return this.peopleRepository.getContactsForClient(clientId, isLiveData);
                };
                PeopleDataController.prototype.getPerson = function (id, isLiveData) {
                    return this.peopleRepository.getPerson(id, isLiveData);
                };
                PeopleDataController.prototype.searchPeople = function (searchString) {
                    return this.peopleRepository.searchPeople(searchString).then(function (people) {
                        return people.toEnumerable().select(function (p) { return new PersonVm(function () { return p; }); }).toArray();
                    });
                };
                PeopleDataController.serviceId = "$PersonDataController";
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
                }
                TimeBookingDataController.prototype.getIsEditable = function (entry) {
                    return entry.state == null || entry.state === 0 /* Open */;
                };
                TimeBookingDataController.prototype.getDetail = function (id) {
                    return this.repository.getDetail(id);
                };
                TimeBookingDataController.prototype.search = function (data) {
                    return this.repository.search(data);
                };
                TimeBookingDataController.prototype.save = function (data) {
                    return this.repository.save(data);
                };
                TimeBookingDataController.prototype.remove = function (id) {
                    return this.repository.remove(id);
                };
                TimeBookingDataController.prototype.resolveFor = function (ids) {
                    return this.repository.resolveFor(ids).then(function (response) {
                        return response.data.toEnumerable().select(function (tb) { return new Business.TimeBookingVm(function () { return tb; }); }).toArray();
                    });
                };
                TimeBookingDataController.serviceId = "$TimeBookingDataController";
                TimeBookingDataController.$inject = [
                    "$q",
                    Business.TimeBookingRepository.serviceId
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
                TimeEntryTypeDataController.prototype.search = function (searchValue, skip, take) {
                    return this.repository.search(searchValue, skip, take).then(function (types) { return types.toEnumerable().select(function (p) { return new Business.TimeEntryTypeVm(function () { return p; }); }).toArray(); });
                };
                TimeEntryTypeDataController.prototype.getTypesById = function (ids) {
                    return this.repository.getTypesById(ids).then(function (types) { return types.toEnumerable().select(function (t) { return new Business.TimeEntryTypeVm(function () { return t; }); }).toArray(); });
                };
                TimeEntryTypeDataController.prototype.getMetaData = function (forceReload) {
                    if (this.metaData == null || forceReload)
                        return this.repository.getMetaData();
                    var q = this.$q.defer();
                    q.resolve(this.metaData);
                    return q.promise;
                };
                TimeEntryTypeDataController.prototype.getMetaDataVm = function (id, data) {
                    if (id == null || data == null || this.metaData == null)
                        return null;
                    var vmList = data.toEnumerable();
                    return vmList.firstOrDefault(function (e) { return e.id === id; });
                };
                TimeEntryTypeDataController.prototype.getStateColor = function (state) {
                    switch (state) {
                        case 0 /* Open */:
                            return "#00FF00";
                        case 1 /* Complete */:
                            return "#333333";
                        case 2 /* Faulted */:
                            return "#FF0000";
                        default:
                            return "#000000";
                    }
                };
                TimeEntryTypeDataController.serviceId = "$TimeEntryTypeDataController";
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
                function ExternalWorkReportDataController($q, repository) {
                    this.$q = $q;
                    this.repository = repository;
                }
                ExternalWorkReportDataController.prototype.get = function (id) {
                    var _this = this;
                    return this.repository.get(id).then(function (cm) { return new Business.WorkReportVm(function () { return cm; }, function () { return _this; }); });
                };
                ExternalWorkReportDataController.prototype.save = function (workReport) {
                    return this.repository.save(workReport).then(function (cm) { return workReport.externalWorkReport.update(function () { return cm; }); });
                };
                ExternalWorkReportDataController.prototype.search = function (employeeId, projectId, projectComplete) {
                    return this.repository.search(employeeId, projectId, projectComplete).then(function (response) {
                        return response.data.toEnumerable().select(function (s) { return new Business.SearchExternalWorkReportVm(function () { return s; }); }).toArray();
                    });
                };
                ExternalWorkReportDataController.prototype.createNewWorkReport = function (employeeId, projectId) {
                    var workReport = new Business.WorkReportVm(function () { return null; }, function () { return null; });
                    return workReport;
                };
                ExternalWorkReportDataController.serviceId = "$ExternalWorkReportDataController";
                ExternalWorkReportDataController.$inject = [
                    "$q",
                    Business.ExternalWorkReportRepository.serviceId
                ];
                return ExternalWorkReportDataController;
            })();
            Business.ExternalWorkReportDataController = ExternalWorkReportDataController;
            timeRecorder.service(ExternalWorkReportDataController.serviceId, ExternalWorkReportDataController);
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
                function DataControllerContainer(expencesDc, expenceTypeDc, externalWorkReportDc, projectDc, timeBookingDc, timeEntryTypeDc, timeSheetDc) {
                    this.expencesDc = expencesDc;
                    this.expenceTypeDc = expenceTypeDc;
                    this.externalWorkReportDc = externalWorkReportDc;
                    this.projectDc = projectDc;
                    this.timeBookingDc = timeBookingDc;
                    this.timeEntryTypeDc = timeEntryTypeDc;
                    this.timeSheetDc = timeSheetDc;
                }
                DataControllerContainer.prototype.initialize = function () {
                    this.expencesDc.container = this;
                    this.expenceTypeDc.container = this;
                    this.externalWorkReportDc.container = this;
                    this.projectDc.container = this;
                    this.timeBookingDc.container = this;
                    this.timeEntryTypeDc.container = this;
                    this.timeSheetDc.container = this;
                };
                DataControllerContainer.serviceId = "$DataControllerContainer";
                DataControllerContainer.$inject = [
                    Business.ExpenseDataController.serviceId,
                    Business.ExpenseTypeDataController.serviceId,
                    Business.ExternalWorkReportDataController.serviceId,
                    Business.ProjectDataController.serviceId,
                    Business.TimeBookingDataController.serviceId,
                    Business.TimeEntryTypeDataController.serviceId,
                    Business.TimeSheetDataController.serviceId
                ];
                return DataControllerContainer;
            })();
            Business.DataControllerContainer = DataControllerContainer;
            // declare correct angularjs module
            timeRecorder.service(DataControllerContainer.serviceId, DataControllerContainer).run([DataControllerContainer.serviceId, function (container) { return container.initialize(); }]);
        })(Business = Web.Business || (Web.Business = {}));
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
/// <reference path="timesheetdatacontroller.ts" />
/// <reference path="expensetypedatacontroller.ts" />
/// <reference path="expensedatacontroller.ts" />
/// <reference path="projectdatacontroller.ts" />
/// <reference path="people/peopledatacontroller.ts" />
/// <reference path="people/employeedatacontroller.ts" />
/// <reference path="timebookingdatacontroller.ts" />
/// <reference path="timeentrytypedatacontroller.ts" />
/// <reference path="externalworkreportdatacontroller.ts" />
/// <reference path="datacontrollercontainer.ts" />
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
            UserService.serviceId = "user";
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
            }
            NotificationServce.$inject = [];
            NotificationServce.serviceId = "notification";
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
            RoleService.serviceId = "role";
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
            LocationService.serviceId = "location";
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
            PersonService.serviceId = "person";
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
            GlobalMessageService.serviceId = "globalMessages";
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
            PersonalMessageService.serviceId = "personalMessages";
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
            SearchService.serviceId = "search";
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
            ProjectService.serviceId = "project";
            ProjectService.$inject = ["$tr-proxy", "$q"];
            return ProjectService;
        })();
        Web.ProjectService = ProjectService;
        timeRecorder.service(ProjectService.serviceId, ProjectService);
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
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
            UserController.controllerId = "UserController";
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
            RoleController.controllerId = "RoleController";
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
            DownloadController.controllerId = "DownloadController";
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
                this.create = function () {
                    _this.selectedLocation = { locationId: "", name: "Neuer Standort", key: 0, userName: "", userId: "" };
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
            LocationController.controllerId = "LocationController";
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
                    _this.selectedPerson = { id: 0, employeeId: "", firstName: "", lastName: "", externalId: "", profileId: 0, claimConfigurations: [], userName: "", userId: "", workStatus: null, emergencyPin: "" };
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
            PersonController.controllerId = "PersonController";
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
            MessageController.controllerId = "MessageController";
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
            ExpensesSideController.controllerId = "ExpensesSideController";
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
            PersonalMessageController.controllerId = "PersonalMessageController";
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
            ConfigController.controllerId = "ConfigController";
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
                this.selectedEntry = {
                    id: 0,
                    canEdit: true,
                    badgeId: "",
                    bookedTime: new Date(),
                    employeeName: "",
                    transmitted: false,
                    type: "",
                    objectId: "",
                    terminalId: "",
                    employeeId: 0,
                    locationId: 0,
                    locationName: "",
                    errorCode: 0,
                    errorMessage: ""
                };
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
                var _this = this;
                console.log(this.selectedEntry.bookedTime);
                if (!this.validate()) {
                    return;
                }
                this.$proxy.TimeEntry.put(this.selectedEntry).then(function (response) {
                    if (response.data) {
                        _this.notification.info("Eintrag gespeichert");
                        _this.selectedEntry = null;
                        _this.newMode = false;
                        _this.editMode = false;
                        _this.search.search();
                    }
                    else {
                        _this.notification.error("Änderung fehlgeschlagen");
                    }
                }, function (e) {
                    _this.notification.error("Änderung fehlgeschlagen");
                });
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
            EntryController.controllerId = "EntryController";
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
            // constructor
            function TimeBookingController(authentication, timeBookingDataController, timeEntryTypeDataController, employeeDataController, projectDataController, $state) {
                var _this = this;
                this.authentication = authentication;
                this.timeBookingDataController = timeBookingDataController;
                this.timeEntryTypeDataController = timeEntryTypeDataController;
                this.employeeDataController = employeeDataController;
                this.projectDataController = projectDataController;
                this.$state = $state;
                // form values
                this.fromValue = null;
                this.toValue = null;
                this.stateValue = null;
                this.personValue = null;
                this.typeValue = null;
                // date picker settings
                this.calendarSettings = {
                    fromIsOpen: false,
                    toIsOpen: false,
                    datepickerOptions: { currentText: "Heute", clearText: "Löschen", closeText: "Schliessen" },
                    dateFormat: "dd.MM.yyyy",
                    minDate: Date
                };
                authentication.hasClaimEnsureLoggedIn("web_timebookings").then(function (hasClaim) {
                    if (hasClaim)
                        _this.init();
                    else
                        _this.$state.transitionTo("tr.login");
                }, function () {
                    _this.$state.transitionTo("tr.login");
                });
            }
            // init view
            TimeBookingController.prototype.init = function () {
                var _this = this;
                this.timeEntryTypeDataController.getMetaData(false).then(function (response) {
                    _this.metaData = response;
                    _this.search();
                }, function () {
                });
            };
            TimeBookingController.prototype.getMetaData = function () {
                return this.timeEntryTypeDataController.metaData;
            };
            TimeBookingController.prototype.setConfirmed = function (timebooking) {
                // todo: add magic..
                console.log(timebooking);
                console.log(timebooking.confirmed);
            };
            TimeBookingController.prototype.getStateById = function (id) {
                if (id == null)
                    return null;
                var key = id.toString();
                if (Web.Data.ETimeBookingState.hasOwnProperty(key))
                    return Web.Data.ETimeBookingState[key];
            };
            TimeBookingController.prototype.getBookingBackground = function (timebooking) {
                // http://www.stripegenerator.com/#Zm9yZT1FRUVFRUU7aD0zMDt3PTI7cD0zO2JhY2sxPWZmZmZmZjtiYWNrMj1mZjAwMDA7Z3Q9MDtkPTA7c2hhZG93PTA7
                if (timebooking.parentId != null)
                    return "url(Content/images/stripes.png)";
                return "transparent";
            };
            TimeBookingController.prototype.getStateColor = function (state) {
                return this.timeEntryTypeDataController.getStateColor(state);
            };
            // search
            TimeBookingController.prototype.search = function () {
                var _this = this;
                var params = {
                    person: this.personValue,
                    state: this.getStateById(this.stateValue),
                    timeEntryTypeId: this.typeValue,
                    from: this.fromValue,
                    to: this.toValue
                };
                return this.timeBookingDataController.search(params).then(function (data) {
                    var enumerable = data.toEnumerable();
                    var projectIds = enumerable.select(function (t) { return t.projectId; });
                    _this.projectDataController.getProjectsById(projectIds.toArray()).then(function (projects) {
                        var employeeIds = enumerable.select(function (t) { return t.employeeId; });
                        _this.employeeDataController.getByIds(employeeIds.toArray()).then(function (employees) {
                            var typeIds = enumerable.select(function (t) { return t.typeId; });
                            _this.timeEntryTypeDataController.getTypesById(typeIds.toArray()).then(function (types) {
                                _this.searchResult = _this.resolveTimeBookingData(data, projects, employees, types);
                            });
                        });
                    });
                }, function () {
                });
            };
            TimeBookingController.prototype.resolveTimeBookingData = function (data, projects, employees, types) {
                if (data != null && projects != null && employees != null && types != null) {
                    var projectsEnumerable = projects.toEnumerable();
                    var employeeEnumerable = employees.toEnumerable();
                    var typesEnumerable = types.toEnumerable();
                    for (var i = 0; i < data.length; i++) {
                        var timeBooking = data[i];
                        var project = projectsEnumerable.firstOrDefault(function (p) { return p.id === timeBooking.projectId; });
                        var employee = employeeEnumerable.firstOrDefault(function (e) { return e.id === timeBooking.employeeId; });
                        var entryType = typesEnumerable.firstOrDefault(function (t) { return t.id === timeBooking.typeId; });
                        data[i].projectName = project.name;
                        data[i].employeeName = employee.firstName + " " + employee.lastName;
                        data[i].typeName = entryType.name;
                    }
                }
                return data;
            };
            TimeBookingController.prototype.openCalendar = function (event, key) {
                key = key + "IsOpen";
                event.preventDefault();
                event.stopPropagation();
                if (this.calendarSettings.hasOwnProperty(key))
                    this.calendarSettings[key] = true;
            };
            TimeBookingController.controllerId = "TimeBookingController";
            TimeBookingController.$inject = [
                "trAuthenticationService",
                Web.Business.TimeBookingDataController.serviceId,
                Web.Business.TimeEntryTypeDataController.serviceId,
                Web.Business.EmployeeDataController.serviceId,
                Web.Business.ProjectDataController.serviceId,
                "$state"
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
        var TimeBookingFormController = (function () {
            // constructor
            function TimeBookingFormController($scope, timeBookingDataController, timeEntryTypeDataController, employeeDataController, projectDataController, authentication, $state, $stateParams) {
                var _this = this;
                this.$scope = $scope;
                this.timeBookingDataController = timeBookingDataController;
                this.timeEntryTypeDataController = timeEntryTypeDataController;
                this.employeeDataController = employeeDataController;
                this.projectDataController = projectDataController;
                this.authentication = authentication;
                this.$state = $state;
                this.$stateParams = $stateParams;
                this.idValue = this.$stateParams["id"];
                var claim = this.isNew() ? "web_timebookings_add" : "web_timebookings_edit";
                authentication.hasClaimEnsureLoggedIn(claim).then(function (hasClaim) {
                    if (hasClaim)
                        _this.init();
                    else
                        _this.$state.transitionTo("tr.login");
                }, function () {
                    _this.$state.transitionTo("tr.login");
                });
            }
            // init view
            TimeBookingFormController.prototype.init = function () {
                var _this = this;
                if (!this.isNew()) {
                    this.timeBookingDataController.getDetail(this.idValue).then(function (entry) {
                        _this.idValue = entry.id;
                        _this.fromValue = entry.start;
                        _this.comment = entry.comment;
                        _this.toValue = entry.stop;
                        _this.projectDataController.getProjectById(entry.projectId).then(function (project) {
                            _this.project = project;
                        });
                        _this.employeeDataController.getByIds([entry.employeeId]).then(function (employees) {
                            _this.employee = employees.toEnumerable().firstOrDefault();
                        });
                        _this.timeEntryTypeDataController.getTypesById([entry.projectId]).then(function (types) {
                            _this.entryType = types.toEnumerable().firstOrDefault();
                            ;
                        });
                        //this.person = data.persons.toEnumerable().firstOrDefault(p => p.id  === entry.personId);
                        //this.project = data.projects.toEnumerable().firstOrDefault(p => p.id === entry.projectId);
                        //this.entryType = data.types.toEnumerable().firstOrDefault(et => et.id === entry.timeEntryTypeId);
                        _this.fromTimeValue = new Date(_this.fromValue.getTime());
                        if (_this.toValue != null) {
                            _this.toTimeValue = new Date(_this.toValue.getTime());
                        }
                        else {
                            var toTimeDate = new Date();
                            toTimeDate.setHours(0, 0);
                            _this.toTimeValue = toTimeDate;
                        }
                    }, function () {
                    });
                }
                else {
                    this.fromValue = new Date();
                    this.fromTimeValue = new Date(this.fromValue.getTime());
                    this.toValue = new Date();
                    this.toTimeValue = new Date(this.toValue.getTime());
                }
            };
            // add or edit context?
            TimeBookingFormController.prototype.isNew = function () {
                return this.idValue == null;
            };
            // delete
            TimeBookingFormController.prototype.remove = function () {
                var _this = this;
                this.timeBookingDataController.remove(this.idValue).then(function (response) {
                    if (response)
                        _this.$state.transitionTo("tr.timebookings");
                }, function () {
                });
            };
            TimeBookingFormController.prototype.searchType = function (searchValue) {
                var _this = this;
                if (!Triarc.strNotEmpty(searchValue))
                    return;
                this.searchedTypes = [];
                this.timeEntryTypeDataController.search(searchValue, 0, 10).then(function (response) {
                    _this.searchedTypes = response;
                }, angular.noop);
            };
            TimeBookingFormController.prototype.searchProject = function (searchValue) {
                var _this = this;
                if (!Triarc.strNotEmpty(searchValue))
                    return;
                this.searchedProjects = [];
                this.projectDataController.search(searchValue, 0, 10).then(function (response) {
                    _this.searchedProjects = response;
                }, angular.noop);
            };
            TimeBookingFormController.prototype.searchEmployee = function (searchValue) {
                var _this = this;
                if (!Triarc.strNotEmpty(searchValue))
                    return;
                this.searchedEmployees = [];
                this.employeeDataController.search(searchValue, 0, 10).then(function (response) {
                    _this.searchedEmployees = response;
                }, angular.noop);
            };
            // save
            TimeBookingFormController.prototype.save = function () {
                var _this = this;
                this.triggerValidation = true;
                if (this.$scope.timebookingForm.$invalid) {
                    return;
                }
                var data = {
                    id: this.idValue,
                    employeeId: this.employee.id,
                    projectId: this.project.id,
                    comment: "",
                    confirmed: null,
                    //parentId: null,
                    start: this.fromValue,
                    stop: this.toValue,
                    timeEntryTypeId: this.entryType.id,
                    state: 0 /* Open */
                };
                data.start.setHours(this.fromTimeValue.getHours());
                data.start.setMinutes(this.fromTimeValue.getMinutes());
                data.stop.setHours(this.toTimeValue.getHours());
                data.stop.setMinutes(this.toTimeValue.getMinutes());
                // save & redirect
                this.timeBookingDataController.save(data).then(function (response) {
                    if (_this.isNew() && response.data.id != null)
                        _this.$state.transitionTo("tr.timebookings.side.edit", { id: response.data.id });
                }, function () {
                });
            };
            TimeBookingFormController.controllerId = "TimeBookingFormController";
            TimeBookingFormController.$inject = [
                "$scope",
                Web.Business.TimeBookingDataController.serviceId,
                Web.Business.TimeEntryTypeDataController.serviceId,
                Web.Business.EmployeeDataController.serviceId,
                Web.Business.ProjectDataController.serviceId,
                "trAuthenticationService",
                "$state",
                "$stateParams"
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
                this.init();
            }
            ProjectController.prototype.init = function () {
                var _this = this;
                this.project.init();
                this.project.loadProjectLocations().then(function (l) {
                    _this.locations = SelectLocation.convert(l);
                }, function () {
                });
                this.project.loadProjectPersons().then(function (p) {
                    _this.persons = SelectPerson.convert(p);
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
                this.persons = [];
                this.$proxy.Admin.triggerProjectImport().then(function (response) {
                    if (response.data) {
                        _this.notification.info("Projekte aktualisiert");
                    }
                    else {
                        _this.notification.error("Fehler beim Aktualisieren der Projektdaten");
                    }
                }, function () {
                    _this.notification.error("Fehler beim Aktualisieren der Projektdaten");
                }).finally(function () {
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
                this.project.changePersonAssignement(this.selectedNode.id, person.PersonId, true);
                this.updateMergePersonList();
            };
            ProjectController.prototype.personRemoved = function (person) {
                var c = this.selectedNode.persons.length;
                var ind = -1;
                for (var i = 0; i < c; ++i) {
                    if (this.selectedNode.persons[i].personId === person.PersonId) {
                        ind = i;
                        break;
                    }
                }
                if (ind > -1)
                    this.selectedNode.persons.splice(ind, 1);
                this.project.changePersonAssignement(this.selectedNode.id, person.PersonId, false);
                this.updateMergePersonList();
            };
            ProjectController.prototype.locationAdded = function (location) {
                this.selectedNode.locations.add(location);
                this.project.changeLocationAssignement(this.selectedNode.id, location.LocationId, true);
                this.updateMergeLocationList();
            };
            ProjectController.prototype.locationRemoved = function (location) {
                var l = this.selectedNode.locations.length;
                var ind = -1;
                for (var i = 0; i < l; ++i) {
                    if (this.selectedNode.locations[i].locationId === location.LocationId) {
                        ind = i;
                        break;
                    }
                }
                if (ind > -1)
                    this.selectedNode.locations.splice(ind, 1);
                this.project.changeLocationAssignement(this.selectedNode.id, location.LocationId, false);
                this.updateMergeLocationList();
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
                this.currentLocations = SelectLocation.convert(this.selectedNode.locations);
                this.currentPersons = SelectPerson.convert(this.selectedNode.persons);
                this.updateMergeLocationList();
                this.updateMergePersonList();
            };
            ProjectController.prototype.updateMergeLocationList = function () {
                var _this = this;
                this.mergeLocations = [];
                this.inheritedLocations.forEach(function (l) { return _this.mergeLocations.push(l); });
                for (var i = 0; i < this.currentLocations.length; ++i) {
                    var add = true;
                    for (var j = 0; j < this.mergeLocations.length; ++j) {
                        if (this.currentLocations[i].getId() === this.mergeLocations[j].getId()) {
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
                        if (this.currentPersons[i].getId() === this.mergePersons[j].getId()) {
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
                return SelectPerson.convert(people);
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
                return SelectLocation.convert(locations);
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
            ProjectController.controllerId = "ProjectController";
            ProjectController.$inject = ["project", "$tr-proxy", "notification"];
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
            // constructor
            function ExpensesController($scope, authentication, expensesDataController, expenseTypeDataController, $state) {
                var _this = this;
                this.$scope = $scope;
                this.authentication = authentication;
                this.expensesDataController = expensesDataController;
                this.expenseTypeDataController = expenseTypeDataController;
                this.$state = $state;
                this.expenseTypesMap = new Map();
                $scope.filterHeaderModel = {
                    date: new Date()
                };
                authentication.hasClaimEnsureLoggedIn("web_expenses").then(function (hasClaim) {
                    if (hasClaim)
                        _this.init();
                    else
                        _this.$state.transitionTo("tr.login");
                }, function () {
                    _this.$state.transitionTo("tr.login");
                });
            }
            // init view
            ExpensesController.prototype.init = function () {
                var _this = this;
                this.expenseTypeDataController.getAllExpenses().then(function (expenseTypes) {
                    expenseTypes.forEach(function (et) {
                        _this.expenseTypesMap.set(et.id, et);
                    });
                    _this.search();
                });
                this.$scope.$on("$stateChangeSuccess", function (event, toState, _, fromState) {
                    if (toState.name !== "tr.expenses")
                        return;
                    if (fromState.name === "tr.expenses.side.add" || fromState.name === "tr.expenses.side.edit") {
                        _this.search();
                    }
                });
                //this.service.getMetaData(false).then((response) => {
                //  this.search();
                //},() => { });
            };
            ExpensesController.prototype.getExpenseTypeName = function (entry) {
                return this.expenseTypesMap.has(entry.expenseTypeId) ? this.expenseTypesMap.get(entry.expenseTypeId).name : "";
            };
            ExpensesController.prototype.getValue = function (entry) {
                return "CHF" + entry.value;
            };
            // search
            ExpensesController.prototype.search = function () {
                var _this = this;
                this.expensesDataController.search().then(function (expenses) {
                    _this.searchResult = expenses;
                });
                //var params = <Data.ITimeBookingSearchParams>{
                //  Person: this.personValue,
                //  State: this.service.getStateById(this.stateValue),
                //  TimeEntryTypeId: this.typeValue,
                //  From: this.fromValue,
                //  To: this.toValue
                //};
                //return this.service.search(params).then((response) => {
                //  this.searchResult = response.data;
                //},() => { });
            };
            ExpensesController.prototype.addButtonCallback = function () {
                this.$state.go("tr.expenses.side.add");
            };
            ExpensesController.prototype.okButtonCallback = function () {
                this.$state.go("tr.expenses.side.add");
            };
            ExpensesController.controllerId = "ExpensesController";
            ExpensesController.$inject = [
                "$scope",
                "trAuthenticationService",
                Web.Business.ExpenseDataController.serviceId,
                Web.Business.ExpenseTypeDataController.serviceId,
                "$state"
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
            function ExpensesFormController($scope, $q, $expenseTypeDataController, $expenseDataController, $authentication, $state, $stateParams) {
                var _this = this;
                this.$scope = $scope;
                this.$q = $q;
                this.$expenseTypeDataController = $expenseTypeDataController;
                this.$expenseDataController = $expenseDataController;
                this.$authentication = $authentication;
                this.$state = $state;
                this.$stateParams = $stateParams;
                this.isSearchingProjects = false;
                this.datepickerOpened = false;
                this.expenseDate = new Date();
                this.expenseDescription = "";
                this.idValue = this.$stateParams["id"];
                var claim = "web_expenses";
                var authPromise = $authentication.hasClaimEnsureLoggedIn(claim).then(function (hasClaim) {
                    if (hasClaim)
                        return _this.$q.when();
                    else
                        return _this.$q.reject();
                });
                var userIdPromise = $authentication.getAppUser().then(function (appUser) {
                    _this.appUserId = appUser.person.id;
                });
                var expenseTypesPromise = this.$expenseTypeDataController.getAllExpenses().then(function (expenseTypes) {
                    _this.expenseTypes = expenseTypes;
                });
                var promises = promises = [authPromise, userIdPromise, expenseTypesPromise];
                if (!this.isNew()) {
                    var editedExpensePromise = this.$expenseDataController.getExpenseById(this.idValue).then(function (expenseVm) {
                        _this.editedExpense = expenseVm;
                    });
                    promises.push(editedExpensePromise);
                }
                this.$q.all(promises).then(function () {
                    _this.init();
                }, function () {
                    _this.$state.transitionTo("tr.login");
                });
            }
            // init view
            ExpensesFormController.prototype.init = function () {
                var _this = this;
                if (!this.isNew()) {
                    this.expenseDate = this.editedExpense.timestamp;
                    this.expenseAmount = this.editedExpense.value;
                    this.selectedExpenseType = this.expenseTypes.toEnumerable().single(function (et) { return et.id === _this.editedExpense.expenseTypeId; });
                    this.expenseDescription = this.editedExpense.description;
                }
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
                    if (this.selectedExpenseType.amountBased)
                        return "Anzahl";
                    else
                        return "CHF";
                }
                else
                    return "";
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
                        description: this.expenseDescription,
                        employeeId: this.appUserId,
                        timestamp: this.expenseDate,
                        value: this.expenseAmount,
                        expenseTypeId: this.selectedExpenseType.id
                    };
                    expenseVm = new Web.Business.ExpenseVm(function () { return expenseCm; });
                }
                else {
                    this.editedExpense.description = this.expenseDescription;
                    this.editedExpense.expenseTypeId = this.selectedExpenseType.id;
                    this.editedExpense.timestamp = this.expenseDate;
                    this.editedExpense.value = this.expenseAmount;
                    expenseVm = this.editedExpense;
                }
                this.$expenseDataController.addOrUpdateExpense(expenseVm).then(function () {
                    _this.$state.transitionTo("tr.expenses");
                });
            };
            ExpensesFormController.prototype.remove = function () {
                var _this = this;
                this.$expenseDataController.delete(this.idValue).then(function () {
                    _this.$state.transitionTo("tr.expenses");
                });
            };
            ExpensesFormController.controllerId = "ExpensesFormController";
            ExpensesFormController.$inject = [
                "$scope",
                "$q",
                Web.Business.ExpenseTypeDataController.serviceId,
                Web.Business.ExpenseDataController.serviceId,
                "trAuthenticationService",
                "$state",
                "$stateParams"
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
            TimeBookingSideController.controllerId = "TimeBookingSideController";
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
            function TimeSheetController($scope, blockUi, $proxy, $timeSheetDataController, $projectDataController, authentication, $state) {
                var _this = this;
                this.$scope = $scope;
                this.blockUi = blockUi;
                this.$proxy = $proxy;
                this.$timeSheetDataController = $timeSheetDataController;
                this.$projectDataController = $projectDataController;
                this.authentication = authentication;
                this.$state = $state;
                this.isSearchingProjects = false;
                this.datePickerStates = {
                    "opened1": false,
                    "opened2": false
                };
                this.datePickerOptions = {
                    dateDisabled: "day",
                    datepickerMode: "month"
                };
                authentication.hasClaimEnsureLoggedIn("web_persons").then(function (hasClaim) {
                    if (hasClaim)
                        _this.timesheetData = new Web.TimesheetData();
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
            TimeSheetController.$inject = ["$scope", "blockUI", "$tr-proxy", Web.Business.TimeSheetDataController.serviceId, Web.Business.ProjectDataController.serviceId, "trAuthenticationService", "$state"];
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
                this.rowHeight = 110;
                this.rowHeightExpanded = 393;
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
            function WorkReportController($scope, workReportDataController) {
                //      var workReport = {
                //        externalWorkReport: <IExternalWorkReport>{
                //          id: 0,
                //          from: new Date,
                //          to: new Date(),
                //          projectCompleted: false,
                //          projectId: 10,
                //          signatureImage: "",
                //          signatureTimestamp: new Date(),
                //          signedClientId: 1
                //        },
                //        timeBookings: []
                //      }
                //
                //      var fromDate = new Date();
                //      var toDate = new Date(fromDate.getTime());
                //      for (var i = 0; i < 10; i++) {
                //
                //        fromDate.setHours(7);
                //        fromDate.setMinutes(0);
                //        fromDate.setSeconds(0);
                //
                //        toDate.setHours(fromDate.getHours() + 4);
                //        toDate.setMinutes(20);
                //        toDate.setSeconds(0);
                //        workReport.timeBookings.add({
                //          from: new Date(fromDate.getTime()),
                //          to: new Date(toDate.getTime()),
                //          name: "Reise",
                //          comments: "These are some very long comments so I can see if they reall fit on the screen and you can seem them if they go over the end of the row"
                //        });
                //
                //        fromDate.setHours(toDate.getHours());
                //        toDate.setHours(fromDate.getHours() + 4);
                //
                //        workReport.timeBookings.add({
                //          from: new Date(fromDate.getTime()),
                //          to: new Date(toDate.getTime()),
                //          name: "Reise",
                //          comments: "These are some very long comments so I can see if they reall fit on the screen and you can seem them if they go over the end of the row"
                //        });
                //
                //
                //        fromDate.setDate(fromDate.getDate() + 1);
                //        toDate.setDate(fromDate.getDate() + 1);
                //      }
                var _this = this;
                this.$scope = $scope;
                this.workReportDataController = workReportDataController;
                this.setEmployeeSignatureImage = function (image) {
                    _this.employeeSignatureImage = image;
                };
                this.setCustomerSignatureImage = function (image) {
                    _this.customerSignatureImage = image;
                };
                //      this.workReport = workReport;
                //      this.dayContainers = [];
                //      this.dayContainers = this.workReport.timeBookings.toEnumerable().groupBy(d => moment(d.start).startOf("day").toDate().getTime())
                //        .select(g => {
                //        return <IDayContainer>{
                //          date: new Date(g.key()),
                //          timeBookings: g.toArray()
                //        };
                //      }).toArray();
            }
            WorkReportController.prototype.save = function () {
                if (this.employeeSignatureImage) {
                    this.workReport.externalWorkReport.employeeSignatureImage = this.employeeSignatureImage.split(",")[1];
                }
                if (this.customerSignatureImage) {
                    this.workReport.externalWorkReport.customerSignatureImage = this.customerSignatureImage.split(",")[1];
                }
                this.workReportDataController.save(this.workReport).then(function () {
                    toastr.info("Saved");
                });
            };
            WorkReportController.prototype.savePdf = function () {
                if (this.employeeSignatureImage) {
                    console.log(this.employeeSignatureImage);
                }
                if (this.customerSignatureImage) {
                    console.log(this.customerSignatureImage);
                }
                var htmlParent = document.createElement("html");
                var bodyParent = document.createElement("body");
                htmlParent.appendChild(bodyParent);
                var clone = $("#workReport").clone();
                clone.addClass("printing");
                clone.addClass("body-content");
                clone.addClass("container");
                clone.find(".hidden-from-print").remove();
                bodyParent.appendChild(clone[0]);
                // this.$proxy.PdfGenerator.generatePdf({ html: $(htmlParent)[0].outerHTML });
            };
            WorkReportController.prototype.getWorkedMins = function (from, to) {
                var duration = moment.duration(moment(to).diff(moment(from)));
                return duration.asMinutes();
            };
            WorkReportController.prototype.getDailyTotalMins = function (dayContainer) {
                var _this = this;
                var totalMins = 0;
                dayContainer.timeBookings.forEach(function (tb) {
                    totalMins += _this.getWorkedMins(tb.start, tb.stop);
                });
                return totalMins;
            };
            WorkReportController.prototype.getTotalWorkedMins = function () {
                if (Triarc.hasNoValue(this.workReport) || Triarc.hasNoValue(this.workReport.timeBookings))
                    return null;
                var totalMins = 0;
                this.workReport.timeBookings.forEach(function (tb) {
                    var duration = moment.duration(moment(tb.stop).diff(moment(tb.start)));
                    totalMins += duration.asMinutes();
                });
                return totalMins;
            };
            WorkReportController.prototype.getMinTimeBookingDate = function () {
                return moment(this.workReport.timeBookings.toEnumerable().min(function (t) { return t.start.getTime(); })).toDate();
            };
            WorkReportController.prototype.getMaxTimeBookingDate = function () {
                return moment(this.workReport.timeBookings.toEnumerable().max(function (t) { return t.stop.getTime(); })).toDate();
            };
            WorkReportController.$inject = ['$scope', Web.Business.ExternalWorkReportDataController.serviceId];
            WorkReportController.controllerId = "WorkReportController";
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
            function AddWorkReportController($scope, $stateParams, //: ng.ui.IStateParamsService,
                workReportDataController, timeBookingDataController, authService) {
                _super.call(this, $scope, workReportDataController);
                this.$scope = $scope;
                this.$stateParams = $stateParams;
                this.workReportDataController = workReportDataController;
                this.timeBookingDataController = timeBookingDataController;
                this.authService = authService;
                this.createNewReport(this.$stateParams["projectId"]);
            }
            AddWorkReportController.prototype.createNewReport = function (projectId) {
                var _this = this;
                this.authService.getAppUser().then(function (appUser) {
                    _this.workReport = _this.workReportDataController.createNewWorkReport(appUser.person.id, projectId);
                });
            };
            AddWorkReportController.$inject = [
                '$scope',
                "$stateParams",
                Web.Business.ExternalWorkReportDataController.serviceId,
                Web.Business.TimeBookingDataController.serviceId,
                Web.AuthenticationService.serviceId
            ];
            AddWorkReportController.controllerId = "AddWorkReportController";
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
            function EditWorkReportController($scope, $stateParams, // : ng.ui.IStateParamsService,
                workReportDataController) {
                _super.call(this, $scope, workReportDataController);
                this.$scope = $scope;
                this.$stateParams = $stateParams;
                this.workReportDataController = workReportDataController;
                this.loadReport(this.$stateParams["id"]);
            }
            EditWorkReportController.prototype.loadReport = function (id) {
                var _this = this;
                this.workReportDataController.get(id).then(function (workReport) {
                    _this.workReport = workReport;
                    _this.dayContainers = null;
                    _this.$scope.$watch("ctrl.workReport.timeBookings", function () {
                        if (Triarc.arrayHasValues(_this.workReport.timeBookings)) {
                            _this.dayContainers = _this.workReport.timeBookings.toEnumerable().groupBy(function (d) { return moment(d.start).startOf("day").toDate().getTime(); }).select(function (g) {
                                return {
                                    date: new Date(g.key()),
                                    timeBookings: g.toArray()
                                };
                            }).toArray();
                        }
                    });
                });
            };
            EditWorkReportController.$inject = ['$scope', "$stateParams", Web.Business.ExternalWorkReportDataController.serviceId];
            EditWorkReportController.controllerId = "EditWorkReportController";
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
            function SearchWorkReportController($scope, workReportDataController) {
                this.$scope = $scope;
                this.workReportDataController = workReportDataController;
                this.projectComplete = false;
            }
            SearchWorkReportController.prototype.search = function () {
                var _this = this;
                this.workReportDataController.search(this.employeeId, this.projectId, this.projectComplete).then(function (searchResults) {
                    _this.searchResults = searchResults;
                });
            };
            SearchWorkReportController.$inject = ['$scope', Web.Business.ExternalWorkReportDataController.serviceId];
            SearchWorkReportController.controllerId = "SearchWorkReportController";
            return SearchWorkReportController;
        })();
        Web.SearchWorkReportController = SearchWorkReportController;
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
// Update the app1 variable name to be that of your module variable
timeRecorder.controller(TimeRecorder.Web.SearchWorkReportController.controllerId, TimeRecorder.Web.SearchWorkReportController);
/// <reference path="workreportcontroller.ts" />
/// <reference path="addworkreportcontroller.ts" />
/// <reference path="editworkreportcontroller.ts" />
/// <reference path="searchworkreportcontroller.ts" />
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
                        addButtonText: "@",
                        addButtonCallback: "&",
                        okButtonText: "@",
                        okButtonCallback: "&"
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
                console.log("jebaka", $scope);
            }
            FilterHeaderController.prototype.previousWeek = function () {
                this.$scope.model.date.setDate(this.$scope.model.date.getDate() - 7);
            };
            FilterHeaderController.prototype.nextWeek = function () {
                this.$scope.model.date.setDate(this.$scope.model.date.getDate() + 7);
            };
            FilterHeaderController.prototype.today = function () {
                this.$scope.model.date = new Date();
            };
            FilterHeaderController.prototype.openDatepicker = function ($event) {
                $event.preventDefault();
                $event.stopPropagation();
                this.datepickerOpened = true;
            };
            FilterHeaderController.controllerId = "FilterHeaderController";
            FilterHeaderController.$inject = ["$scope"];
            return FilterHeaderController;
        })();
        Web.FilterHeaderController = FilterHeaderController;
        // declare correct angularjs module
        timeRecorder.controller(FilterHeaderController.controllerId, FilterHeaderController);
    })(Web = TimeRecorder.Web || (TimeRecorder.Web = {}));
})(TimeRecorder || (TimeRecorder = {}));
var TimeRecorder;
(function (TimeRecorder) {
    var Web;
    (function (Web) {
        var ProjectTree = (function () {
            function ProjectTree($compile, project) {
                var _this = this;
                this.$compile = $compile;
                this.project = project;
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
                            _this.project.loadChildren(node).then(function () {
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
                            _this.project.updateFlag(node, flag);
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
        timeRecorder.directive(ProjectTree.directiveId, ['$compile', 'project', function ($compile, project) {
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
var sig = angular.module('tlSignature', []);
sig.directive("tlSignature", [function () {
    return {
        restrict: "E",
        replace: true,
        template: "<canvas></canvas>",
        scope: {
            signatureImageFn: "=",
            canvasHeight: "=",
            canvasWidth: "=",
            clear: "=",
            saveSize: "=?"
        },
        link: function (scope, element, attrs) {
            if (!angular.isFunction(scope.signatureImageFn))
                throw "Developer error, tlSignature does not have a bound function to save the image!";
            var canvas = element[0];
            var ctx = canvas.getContext("2d");
            // the last coordinates before the current move
            var lastPt;
            var saveFunction = function () {
                if (Triarc.hasValue(scope.saveSize)) {
                    if (ctx.canvas.toDataURL().length > scope.saveSize) {
                        scope.signatureImageFn(ctx.canvas.toDataURL());
                    }
                }
                else {
                    scope.signatureImageFn(ctx.canvas.toDataURL());
                }
            };
            attrs.$observe("canvasHeight", function (newValue) {
                canvas.height = newValue;
            });
            attrs.$observe("canvasWidth", function (newValue) {
                canvas.width = newValue;
            });
            scope.$watch("clear", function (clear, oldValue) {
                if (clear) {
                    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                    scope.clear = false;
                }
            });
            element.on('touchstart', function (e) {
                e.preventDefault();
                ctx.fillRect(e.originalEvent.touches[0].pageX - $(element).offset().left, e.originalEvent.touches[0].pageY - $(element).offset().top, 2, 2);
                lastPt = { x: e.originalEvent.touches[0].pageX - $(element).offset().left, y: e.originalEvent.touches[0].pageY - $(element).offset().top };
                saveFunction();
            });
            element.on('touchmove', function (e) {
                e.preventDefault();
                if (lastPt != null) {
                    ctx.beginPath();
                    ctx.moveTo(lastPt.x, lastPt.y);
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
    };
}]);
/// <reference path="directives/filterheader.ts" />
/// <reference path="directives/projecttree.ts" />
/// <reference path="directives/multiselect.ts" />
/// <reference path="directives/minstohours.ts" />
/// <reference path="directives/tlsignature.ts" />
/// <reference path="typings/linq.d.ts" />
/// <reference path="typings/tsd.d.ts" />
/// <reference path="bower_components/cirrus-tlArray/tlArray.d.ts" />
/// <reference path="bower_components/cirrus-tlAuth/tlAuth.d.ts" />
/// <reference path="bower_components/cirrus-tlDataServices/tlDataServices.d.ts" />
/// <reference path="bower_components/cirrus-tlLocalization/tlLocalization.d.ts" />
/// <reference path="bower_components/cirrus-utils/utils.d.ts" />
/// <reference path="bower_components/cirrus-tlUtils/tlUtils.d.ts" />
/// <reference path="bower_components/cirrus-tlUtils/tlUtils.d.ts" />
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
    "<div ng-controller=\"ConfigController as ctrl\"><h2>Konfiguration</h2><hr><div class=\"row\"><div class=\"col-md-12 form-horizontal\"><div class=\"form-group\"><label class=\"col-md-1 control-label\" for=\"timeOut\">Timeout</label><div class=\"col-md-8\"><input class=\"form-control\" style=\"max-width: 280px\" id=\"timeOut\" type=\"number\" ng-model=\"ctrl.config.timeOut\"></div></div><div class=\"form-group\"><label class=\"col-md-1 control-label\" for=\"logo\">Logo</label><div class=\"col-md-8\" ng-hide=\"ctrl.hasImage\"><input type=\"file\" id=\"logo\" class=\"form-control\" accept=\".png, .PNG, .jpg,.JPG\" onchange=\"angular.element(this).scope().ctrl.onImageSeleted()\"></div><div class=\"col-md-2\" ng-show=\"ctrl.hasImage\"><img style=\"width: 100%\" src=\"{{ctrl.imgUrl}}\" alt=\"\"></div><div ng-show=\"ctrl.hasImage\" class=\"col-md-1\"><div class=\"btn btn-default\" ng-click=\"ctrl.removeImage();\"><i class=\"glyphicon glyphicon-remove\"></i></div></div></div><div class=\"form-group\"><div class=\"col-md-4\"><div class=\"btn btn-default\" ng-click=\"ctrl.save()\">Speichern</div></div></div></div></div></div>"
  );


  $templateCache.put('Client/Views/downloads.html',
    "<div ng-controller=\"DownloadController as ctrl\"><h2>Downloads</h2><hr><div class=\"col-md-7 tr-list\"><div class=\"row tr-list-head\"></div><div class=\"col-md-12\" ng-show=\"ctrl.loading\"><div class=\"tr-v-spacer\"></div><div class=\"tr-list-loader\"><div id=\"floatingBarsG\"><div class=\"blockG\" id=\"rotateG_01\"></div><div class=\"blockG\" id=\"rotateG_02\"></div><div class=\"blockG\" id=\"rotateG_03\"></div><div class=\"blockG\" id=\"rotateG_04\"></div><div class=\"blockG\" id=\"rotateG_05\"></div><div class=\"blockG\" id=\"rotateG_06\"></div><div class=\"blockG\" id=\"rotateG_07\"></div><div class=\"blockG\" id=\"rotateG_08\"></div></div></div></div><div class=\"row tr-list-item\" style=\"font-size: 14px\" ng-repeat=\"version in ctrl.versions\"><div class=\"col-md-4\"><span>{{version.versionName}}</span></div><div class=\"col-md-4\"><span>{{version.versionCode}}</span> &nbsp; <span ng-show=\"version.IsBeta\">(Beta)</span></div><div class=\"col-md-2\"><span>{{version.platform}}</span></div><div class=\"col-md-2\"><a ng-show=\"version.platform == 'Android'\" class=\"pull-right\" href=\"Downloads/TimeRecorder_{{version.versionCode}}.apk\">Download</a> <a ng-show=\"version.platform == 'iOS'\" class=\"pull-right\" href=\"{{ctrl.getIosDownloadLink(version.versionCode);}}\">Download</a></div></div></div></div>"
  );


  $templateCache.put('Client/Views/employee/employeeEditWorkReport.html',
    "<div id=\"workReport\" class=\"work-report container\" style=\"overflow: visible width:100%; height: 100%\"><ng-include include-replace src=\"'header.section.template.html'\"></ng-include><ng-include include-replace src=\"'timeBooking.section.template.html'\"></ng-include><ng-include include-replace src=\"'options.section.template.html'\"></ng-include><ng-include include-replace src=\"'signature.section.template.html'\"></ng-include><button class=\"btn btn-success hidden-from-print\" ng-click=\"ctrl.savePdf()\" translate>Save Pdf</button></div><script type=\"text/ng-template\" id=\"header.section.template.html\"><div class=\"row\">\r" +
    "\n" +
    "    <div class=\"col-xs-2 col-md-offset-10\">\r" +
    "\n" +
    "      <button class=\"btn btn-success hidden-from-print\" ng-click=\"ctrl.save()\" translate>Save</button>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "   \r" +
    "\n" +
    "  </div></script><script type=\"text/ng-template\" id=\"header.section.template.html\"><div class=\"row\">\r" +
    "\n" +
    "    <div class=\"col-xs-12\">\r" +
    "\n" +
    "      <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-xs-12\">\r" +
    "\n" +
    "          <div class=\"logo\"></div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "      <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-xs-6\">\r" +
    "\n" +
    "          <h2 class=\"testingC\" translate=\"Arbeitsrapport\"></h2>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "      <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-xs-2\">\r" +
    "\n" +
    "          <label translate=\"Projektname\"></label>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-xs-8\">\r" +
    "\n" +
    "          {{ctrl.workReport.externalWorkReport.project.name}}\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "      <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-xs-2\">\r" +
    "\n" +
    "          <label translate=\"Typ\"></label>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-xs-8\">\r" +
    "\n" +
    "          {{ctrl.workReport.externalWorkReport.project.type.name}}Project Type\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "      <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-xs-2\">\r" +
    "\n" +
    "          <label translate=\"Zeitraum\"></label>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-xs-8\">\r" +
    "\n" +
    "          {{ctrl.workReport.externalWorkReport.from | date:'dd.MM.yyyy'}}&mdash;{{ctrl.workReport.externalWorkReport.to | date:'dd.MM.yyyy'}}\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "      <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-xs-2\">\r" +
    "\n" +
    "          <label translate=\"Material\"></label>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-xs-8\">\r" +
    "\n" +
    "          <textarea ng-if=\"!ctrl.workReport.externalWorkReport.projectCompleted\" class=\"form-control hidden-from-print\" ng-model=\"ctrl.workReport.externalWorkReport.materials\"></textarea>\r" +
    "\n" +
    "          <span ng-if=\"ctrl.workReport.externalWorkReport.projectCompleted\" class=\"printable-element\">{{ctrl.workReport.externalWorkReport.materials}}</span>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div></script><script type=\"text/ng-template\" id=\"timeBooking.section.template.html\"><div class=\"row\">\r" +
    "\n" +
    "    <div class=\"col-xs-12\">\r" +
    "\n" +
    "      <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-xs-12\">\r" +
    "\n" +
    "          <div class=\"row\" ng-repeat=\"dayContainer in ctrl.dayContainers | orderBy:'date'\">\r" +
    "\n" +
    "            <div class=\"col-xs-12\">\r" +
    "\n" +
    "              <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-xs-6\">\r" +
    "\n" +
    "                  {{dayContainer.date | date:'dd.MM.yyyy'}}\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"col-xs-2 col-xs-offset-4\">\r" +
    "\n" +
    "                  {{ctrl.getDailyTotalMins(dayContainer) | minsToHours | tlDecimalPlaces:2 }}\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "              </div>\r" +
    "\n" +
    "              <div class=\"row\" ng-repeat=\"timeBooking in dayContainer.timeBookings | orderBy:'from'\">\r" +
    "\n" +
    "                <div class=\"col-xs-2\">\r" +
    "\n" +
    "                  {{timeBooking.name}}\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"col-xs-8\">\r" +
    "\n" +
    "                  {{timeBooking.comments}}\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"col-xs-2\">\r" +
    "\n" +
    "                  {{ctrl.getWorkedMins(timeBooking.start, timeBooking.stop) | minsToHours | tlDecimalPlaces:2}}\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "              </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div></script><script type=\"text/ng-template\" id=\"timeBooking.detail.section.template.html\"></script><script type=\"text/ng-template\" id=\"options.section.template.html\"><div class=\"row\">\r" +
    "\n" +
    "    <div class=\"col-xs-12\">\r" +
    "\n" +
    "      <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-xs-4\">\r" +
    "\n" +
    "          <label class=\"checkbox\">\r" +
    "\n" +
    "            <input type=\"checkbox\" class=\"hidden-from-print\" ng-disabled=\"ctrl.workreport.externalWorkReport.projectCompleted\" ng-model=\"ctrl.workReport.externalWorkReport.warrenty\">\r" +
    "\n" +
    "            Garentteantrag\r" +
    "\n" +
    "          </label>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-xs-2 col-xs-offset-4\">\r" +
    "\n" +
    "          <label translate=\"Total\"></label>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-xs-1\">\r" +
    "\n" +
    "          {{ctrl.getTotalWorkedMins() | minsToHours | tlDecimalPlaces:2}}\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "      <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-xs-12\">\r" +
    "\n" +
    "          <label translate=\"Arbeit Fertig\"></label>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "      <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-xs-12 btn-group\">\r" +
    "\n" +
    "          <label class=\"checkbox\">\r" +
    "\n" +
    "            <input type=\"checkbox\" btn-radio=\"true\" ng-disabled=\"ctrl.workreport.externalWorkReport.projectCompleted\" class=\"hidden-from-print\" ng-click=\"ctrl.workReport.externalWorkReport.projectCompleted = !ctrl.workReport.externalWorkReport.projectCompleted\" ng-model=\"ctrl.workReport.externalWorkReport.projectCompleted\">Ja\r" +
    "\n" +
    "          </label>\r" +
    "\n" +
    "          <label class=\"checkbox\">\r" +
    "\n" +
    "            <input type=\"checkbox\" btn-radio=\"false\" ng-disabled=\"ctrl.workreport.externalWorkReport.projectCompleted\" class=\"hidden-from-print\" ng-click=\"ctrl.workReport.externalWorkReport.projectCompleted = !ctrl.workReport.externalWorkReport.projectCompleted\" ng-model=\"ctrl.workReport.externalWorkReport.projectCompleted\">\r" +
    "\n" +
    "            Nein\r" +
    "\n" +
    "          </label>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div></script><script type=\"text/ng-template\" id=\"signature.section.template.html\"><div class=\"row\">\r" +
    "\n" +
    "    <div class=\"col-xs-5\">\r" +
    "\n" +
    "      <label>{{ctrl.currentEmployee.firstName + ' ' + ctrl.currentEmployee.lastName}}</label>\r" +
    "\n" +
    "      <tl-signature id=\"employeeSignatureCanvas\"\r" +
    "\n" +
    "                    signature-image-fn=\"ctrl.setEmployeeSignatureImage\"\r" +
    "\n" +
    "                    value=\"{{ clearVal }}\"\r" +
    "\n" +
    "                    style=\"border: 1px solid black;\"\r" +
    "\n" +
    "                    canvas-width=\"350\"\r" +
    "\n" +
    "                    canvas-height=\"150\"\r" +
    "\n" +
    "                    save-size=3000>\r" +
    "\n" +
    "      </tl-signature>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-xs-5 col-xs-offset-2\">\r" +
    "\n" +
    "      <ui-select class=\"hidden-from-print\" ng-model=\"ctrl.selectedContact\">\r" +
    "\n" +
    "        <ui-select-match placeholder=\"{{'Suche...' | translate}}\">\r" +
    "\n" +
    "          {{$select.selected.firstName + ' ' + $select.selected.lastName}}\r" +
    "\n" +
    "        </ui-select-match>\r" +
    "\n" +
    "        <ui-select-choices repeat=\"contact in ctrl.searchContacts track by $index\">\r" +
    "\n" +
    "          <div ng-bind-html=\"contact.firstName + ' ' + contact.lastName  | highlight: $select.search\"></div>\r" +
    "\n" +
    "        </ui-select-choices>\r" +
    "\n" +
    "      </ui-select>\r" +
    "\n" +
    "      <span class=\"printable-element\">{{ctrl.selectedContact.firstName}}&nbsp;{{ctrl.selectedContact.lastName}}</span>\r" +
    "\n" +
    "      <tl-signature id=\"customerSignatureCanvas\"\r" +
    "\n" +
    "                    signature-image-fn=\"ctrl.setCustomerSignatureImage\"\r" +
    "\n" +
    "                    style=\"border: 1px solid black;\"\r" +
    "\n" +
    "                    canvas-width=\"350\"\r" +
    "\n" +
    "                    canvas-height=\"150\"\r" +
    "\n" +
    "                    save-size=3000>\r" +
    "\n" +
    "      </tl-signature>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div></script>"
  );


  $templateCache.put('Client/Views/employee/employeeSearchWorkReport.html',
    "<div id=\"workReport\" ng-controller=\"SearchWorkReportController as ctrl\" class=\"search-work-report\"><h2>Arbeitsrapport</h2><hr><div class=\"row\"><form class=\"col-md-12\" ng-submit=\"ctrl.search()\"><div class=\"row\"><div class=\"col-md-3\"><input type=\"text\" placeholder=\"Person\" ng-model=\"ctrl.personValue\" typeahead-on-select=\"ctrl.selected($item, $model, $label)\" typeahead=\"p.label as p.label for p in ctrl.persons | filter:$viewValue | limitTo:8\" class=\"form-control\"></div><div class=\"col-md-2\"><p class=\"input-group\"><input type=\"text\" class=\"form-control\" placeholder=\"Von\" current-text=\"Heute\" clear-text=\"Löschen\" close-text=\"Schliessen\" datepicker-popup=\"{{ctrl.dateFormat}}\" ng-model=\"ctrl.fromValue\" is-open=\"ctrl.calendarSettings.fromIsOpen\"> <span class=\"input-group-btn\"><button type=\"button\" class=\"btn btn-default\" ng-click=\"ctrl.openCalendar($event, 'from')\"><i class=\"glyphicon glyphicon-th-list\"></i></button></span></p></div><div class=\"col-md-2\"><p class=\"input-group\"><input type=\"text\" class=\"form-control\" placeholder=\"Bis\" current-text=\"Heute\" clear-text=\"Löschen\" close-text=\"Schliessen\" datepicker-popup=\"{{ctrl.dateFormat}}\" ng-model=\"ctrl.toValue\" is-open=\"ctrl.calendarSettings.toIsOpen\"> <span class=\"input-group-btn\"><button type=\"button\" class=\"btn btn-default\" ng-click=\"ctrl.openCalendar($event, 'to')\"><i class=\"glyphicon glyphicon-th-list\"></i></button></span></p></div><div class=\"col-md-2\"><select class=\"form-control\" ng-model=\"ctrl.typeFilter\" ng-options=\"t.id as t.name for t in ctrl.metaData.types\"><option value=\"\">Typ wählen</option></select></div><div class=\"col-md-2\"><select class=\"form-control\" ng-model=\"ctrl.stateFilter\" ng-options=\"s.id as s.name for s in ctrl.metaData.states\"><option value=\"\">Status Wählen</option></select></div></div><div class=\"row\"><div class=\"col-md-1\"><button type=\"submit\" class=\"btn btn-default\">Suchen</button></div><div class=\"col-md-1\"><div class=\"btn btn-default\" ui-sref=\"tr.timebookings.side.add\">Erstellen</div></div><div class=\"col-md-1\"><input type=\"checkbox\" ng-model=\"ctrl.showConfirmation\" name=\"visum\"> Visum</div></div></form></div><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><div class=\"row\"><div class=\"col-md-12 tr-list-head\"><div class=\"row\"><div class=\"col-md-1\">Person</div><div class=\"col-md-1\">Projekt</div><div class=\"col-md-2\">Start</div><div class=\"col-md-2\">Stop</div><div class=\"col-md-2\">Typ</div><div class=\"col-md-2\">Status</div><div class=\"col-md-1\"><span ng-show=\"ctrl.showConfirmation\">Visum</span></div><div class=\"col-md-1\"></div></div></div><div infinite-scroll=\"ctrl.search.getMore();\" infinite-scroll-distance=\"1\" class=\"tr-list\"><div ng-repeat=\"entry in ctrl.searchResults\" class=\"col-md-12 tr-list-item\" ng-style=\"{'background': ctrl.getBookingBackground(entry) }\"><div class=\"row\" ng-click=\"ctrl.selectEntry(entry)\"><div class=\"col-md-1 tr-ellipsis\">{{entry.employeeName}}</div><div class=\"col-md-1 tr-ellipsis\">{{entry.project.name}}</div><div class=\"col-md-2\">{{entry.from | date : 'dd.MM.yyyy - H:mm'}}</div><div class=\"col-md-2\">{{entry.to | date : 'dd.MM.yyyy - H:mm'}}</div><div class=\"col-md-2\">{{entry.typeName}}</div><div class=\"col-md-2\" ng-style=\"{'color': ctrl.getStateColor(entry.state) }\">{{ctrl.getStateById(entry.state)}}</div><div class=\"col-md-1\"><input type=\"checkbox\" ng-show=\"ctrl.showConfirmation\" ng-model=\"entry.confirmed\" ng-change=\"ctrl.setConfirmed(entry)\"></div><div class=\"col-md-1\"><a ui-sref=\"tr.editEmployeeWorkReport({id:entry.id})\">Edit</a></div><div class=\"tr-list-selector-left\"></div><div class=\"tr-list-selector-right\"></div></div></div></div></div><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div></div>"
  );


  $templateCache.put('Client/Views/entries.html',
    "<div ng-controller=\"EntryController as ctrl\"><h2>Buchungen</h2><hr><div ng-hide=\"ctrl.editMode\"><div class=\"row\"><div class=\"col-md-12\"><div class=\"row\"><div class=\"col-md-3\"><input type=\"text\" placeholder=\"Person\" ng-model=\"ctrl.search.personSearch\" typeahead-on-select=\"ctrl.selected($item, $model, $label)\" typeahead=\"p.label as p.label for p in ctrl.persons | filter:$viewValue | limitTo:8\" class=\"form-control\"></div><div class=\"col-md-2\"><p class=\"input-group\"><input type=\"text\" class=\"form-control\" placeholder=\"Von\" current-text=\"Heute\" clear-text=\"Löschen\" close-text=\"Schliessen\" datepicker-popup=\"{{ctrl.dateFormat}}\" ng-model=\"ctrl.search.from\" is-open=\"ctrl.fromOpen\"> <span class=\"input-group-btn\"><button type=\"button\" class=\"btn btn-default\" ng-click=\"ctrl.open($event,1)\"><i class=\"glyphicon glyphicon-th-list\"></i></button></span></p></div><div class=\"col-md-2\"><p class=\"input-group\"><input type=\"text\" class=\"form-control\" placeholder=\"Bis\" current-text=\"Heute\" clear-text=\"Löschen\" close-text=\"Schliessen\" datepicker-popup=\"{{ctrl.dateFormat}}\" ng-model=\"ctrl.search.to\" is-open=\"ctrl.toOpen\"> <span class=\"input-group-btn\"><button type=\"button\" class=\"btn btn-default\" ng-click=\"ctrl.open($event, 2)\"><i class=\"glyphicon glyphicon-th-list\"></i></button></span></p></div><div class=\"col-md-2\"><select class=\"form-control\" ng-model=\"ctrl.search.type\" ng-options=\"t as t for t in ctrl.types\"><option value=\"\">Typ wählen</option></select></div><div class=\"col-md-2\"><select class=\"form-control\" ng-model=\"ctrl.search.state\" ng-options=\"s as s for s in ctrl.states\"><option value=\"\">Status Wählen</option></select></div></div><div class=\"row\"><div class=\"col-md-1\"><div class=\"btn btn-default\" ng-click=\"ctrl.search.search();\">Suchen</div></div><div class=\"col-md-2\"><div class=\"btn btn-default\" ng-click=\"ctrl.newEntry();\">Buchung Erstellen</div></div></div></div></div><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><div class=\"row\"><div class=\"col-md-12 tr-list-head\"><div class=\"row\"><div class=\"col-md-1\">Status</div><div class=\"col-md-1\">Badge</div><div class=\"col-md-2\">Person</div><div class=\"col-md-2\">Buchungszeitpunkt</div><div class=\"col-md-1\">Typ</div><div class=\"col-md-2\">Standort</div><div class=\"col-md-1\">TerminalId</div><div class=\"col-md-2\">AuftragId</div></div></div><div infinite-scroll=\"ctrl.search.getMore();\" infinite-scroll-distance=\"1\" class=\"tr-list\"><div ng-repeat=\"entry in ctrl.search.currentResult\" class=\"col-md-12 tr-list-item\"><div class=\"row\" style=\"cursor: pointer\" ng-click=\"ctrl.selectEntry(entry)\"><div class=\"col-md-1\"><div class=\"tr-success-indicator\" ng-class=\"{'tr-success' : entry.transmitted, 'tr-fail' : !entry.transmitted}\"></div></div><div class=\"col-md-1\">{{entry.badgeId}}</div><div class=\"col-md-2 tr-ellipsis\">{{entry.employeeName}}</div><div class=\"col-md-2\">{{entry.bookedTime | date : 'dd.MM.yyyy - H:mm'}}</div><div class=\"col-md-1\">{{entry.type}}</div><div class=\"col-md-2 tr-ellipsis\">{{entry.locationName}}</div><div class=\"col-md-1\">{{entry.terminalId}}</div><div class=\"col-md-2 tr-ellipsis\">{{entry.objectId}}</div><div class=\"tr-list-selector-left\"></div><div class=\"tr-list-selector-right\"></div></div></div></div></div></div><div ng-show=\"ctrl.editMode\"><div class=\"row\"><div class=\"col-md-12\"><h4 class=\"tr-col-form-title tr-ellipsis\">Buchung Editieren</h4><div class=\"row\" ng-show=\"ctrl.minDate !=null && !ctrl.selectedEntry.canEdit && ctrl.selectedEntry.errorCode == 0\"><div class=\"col-md-12\"><p class=\"tr-warning-text\"><span class=\"glyphicon glyphicon-exclamation-sign\"></span>&nbsp; <span>Diese Buchung ist bereits verrechnet und nicht mehr editierbar</span></p></div></div><div class=\"row\" ng-show=\"!ctrl.webServiceAvailable && !ctrl.newMode\"><div class=\"col-md-12\"><p class=\"tr-warning-text\"><span class=\"glyphicon glyphicon-exclamation-sign\"></span>&nbsp; <span>Der plustime Webservice ist zurzeit nicht erreichbar</span></p></div></div><div class=\"row\" ng-show=\"ctrl.selectedEntry.errorCode != 0\"><div class=\"col-md-12\"><p class=\"tr-error-text\"><span class=\"glyphicon glyphicon-exclamation-sign\"></span> &nbsp; <span>Fehler bei der übertragung zu plustime: {{ctrl.selectedEntry.errorMessage}}</span></p></div></div><div class=\"row\" ng-show=\"ctrl.minDate == null && ctrl.selectedEntry.employeeId\"><div class=\"col-md-12\"><p class=\"tr-warning-text\"><span class=\"glyphicon glyphicon-exclamation-sign\"></span> &nbsp; <span>Für diesen Benutzer ist keine Berechnungssperre definiert, Buchungen können nicht editiert werden.</span></p></div></div><div class=\"row\"><div class=\"form-group\"><label class=\"col-md-1 control-label\" for=\"person\">Person</label><div class=\"col-md-3\"><select id=\"person\" class=\"form-control\" ng-change=\"ctrl.personChanged()\" ng-disabled=\"!ctrl.selectedEntry.canEdit\" ng-model=\"ctrl.selectedEntry.employeeId\"><option value=\"0\">Wählen...</option><option value=\"{{p.id}}\" ng-repeat=\"p in ctrl.people\">{{p.firstName}} {{p.lastName}}</option></select></div></div></div><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><div class=\"row\"><div class=\"form-group\"><label class=\"col-md-1 control-label\" for=\"location\">Terminal</label><div class=\"col-md-3\"><select id=\"location\" class=\"form-control\" ng-disabled=\"!ctrl.selectedEntry.canEdit\" ng-model=\"ctrl.selectedEntry.locationId\"><option value=\"0\">Wählen...</option><option value=\"{{l.key}}\" ng-repeat=\"l in ctrl.locations\">{{l.name}}</option></select></div></div></div><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><div class=\"row\"><div class=\"form-group\"><label class=\"col-md-1 control-label\" for=\"id\">Datum</label><div class=\"col-md-3\"><div class=\"input-group\"><input type=\"text\" class=\"form-control\" min-date=\"ctrl.minDate\" current-text=\"Heute\" clear-text=\"Löschen\" close-text=\"Schliessen\" ng-disabled=\"!ctrl.selectedEntry.CanEdit\" placeholder=\"Datum\" datepicker-popup=\"{{ctrl.dateFormat}}\" ng-model=\"ctrl.selectedEntry.bookedTime\" is-open=\"ctrl.editOpen\"> <span class=\"input-group-btn\"><button type=\"button\" class=\"btn btn-default\" ng-click=\"ctrl.open($event, 3)\"><i class=\"glyphicon glyphicon-th-list\"></i></button></span></div></div></div></div><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><div class=\"row\"><div class=\"form-group\"><label class=\"col-md-1 control-label\" for=\"id\">Zeit</label><div class=\"col-md-3\" ng-show=\"ctrl.selectedEntry.canEdit\"><timepicker ng-model=\"ctrl.selectedEntry.bookedTime\" ng-change=\"ctrl.timechange();\" hour-step=\"1\" minute-step=\"1\" show-meridian=\"false\"></timepicker></div><div class=\"col-md-3\" ng-hide=\"ctrl.selectedEntry.canEdit\">{{ctrl.selectedEntry.BookedTime | date : 'HH:mm'}} Uhr</div></div></div><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><div class=\"row\"><div class=\"form-group\"><label class=\"col-md-1 control-label\" for=\"id\">Typ</label><div class=\"col-md-3\"><select class=\"form-control\" ng-model=\"ctrl.selectedEntry.type\" ng-disabled=\"!ctrl.selectedEntry.canEdit\" ng-options=\"t as t for t in ctrl.types\"><option value=\"\">Typ wählen</option></select></div></div></div><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><div class=\"row\"><div class=\"form-group\"><label class=\"col-md-1 control-label\" for=\"id\">Objekt</label><div class=\"col-md-3\"><input class=\"form-control\" id=\"id\" type=\"text\" ng-disabled=\"!ctrl.selectedEntry.canEdit\" ng-model=\"ctrl.selectedEntry.objectId\"></div></div></div><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><div class=\"row\"><div class=\"col-md-12\"><div class=\"btn btn-default pull-left\" ng-show=\"ctrl.canEdit();\" ng-click=\"ctrl.save();\">Speichern</div><div class=\"pull-left\">&nbsp;</div><div class=\"btn btn-default pull-left\" ng-show=\"ctrl.canEdit() && !ctrl.newMode\" ng-click=\"ctrl.delete();\">Löschen</div><div class=\"pull-left\">&nbsp;</div><div class=\"btn btn-default pull-left\" ng-click=\"ctrl.cancelEdit();\">Zurück</div></div></div></div></div></div></div>"
  );


  $templateCache.put('Client/Views/expenses.form.html',
    "<div ng-controller=\"ExpensesFormController as ctrl\"><form name=\"expensesForm\" class=\"form-horizontal\" novalidate><h2>{{ ctrl.isNew() ? 'Add an expense' : 'Edit an expense' }}</h2><hr><div class=\"row\"><div class=\"col-md-12\"><tl-validate target=\"expensesForm.projectName\" label-text=\"'Leistungsarten'\" css-value=\"col-md-6\" css-label=\"col-md-4\" validate-now=\"ctrl.triggerValidation\" required class=\"form-value\"><div class=\"row\"><ui-select ng-model=\"ctrl.selectedExpenseType\"><ui-select-match placeholder=\"{{'Suche...' | translate}}\">{{$select.selected.name}}</ui-select-match><ui-select-choices repeat=\"expenseType in ctrl.expenseTypes track by $index\" refresh=\"ctrl.searchProjects($select.search)\"><div ng-bind-html=\"expenseType.name  | highlight: $select.search\"></div></ui-select-choices></ui-select></div></tl-validate></div></div><div class=\"tr-v-spacer\"></div><div class=\"row\"><div class=\"col-md-12\"><tl-validate target=\"expensesForm.amount\" label-text=\"ctrl.getAmountLabel()\" css-value=\"col-md-6\" css-label=\"col-md-4\" validate-now=\"ctrl.triggerValidation\" required class=\"form-value\"><div class=\"row\"><b><span><input type=\"number\" ng-disabled=\"ctrl.isDisabled()\" required name=\"amount\" class=\"form-control\" ng-model=\"ctrl.expenseAmount\"></span></b></div></tl-validate></div></div><div class=\"tr-v-spacer\"></div><div class=\"row\"><div class=\"col-md-12\"><tl-validate target=\"expensesForm.date\" label-text=\"'Datum'\" css-value=\"col-md-6\" css-label=\"col-md-4\" validate-now=\"ctrl.triggerValidation\" required class=\"form-value\"><div class=\"input-group row\"><input name=\"expensesForm.date\" type=\"text\" ng-model=\"ctrl.expenseDate\" class=\"form-control datepicker\" datepicker-popup view-format ng-disabled=\"ctrl.isDisabled()\" is-open=\"ctrl.datepickerOpened\" close-text=\"{{'_close' | translate}}\" current-text=\"{{'_now' | translate}}\"> <span class=\"input-group-btn\"><button type=\"button\" class=\"btn btn-default\" ng-click=\"ctrl.openDatepicker($event)\"><i class=\"glyphicon glyphicon-calendar\"></i></button></span></div></tl-validate></div></div><div class=\"tr-v-spacer\"></div><div class=\"row\"><div class=\"col-md-12\"><tl-validate target=\"expensesForm.description\" label-text=\"'Kommentar'\" css-value=\"col-md-6\" css-label=\"col-md-4\" validate-now=\"ctrl.triggerValidation\" class=\"form-value\"><div class=\"row\"><b><span><input type=\"text\" ng-disabled=\"ctrl.isDisabled()\" name=\"description\" class=\"form-control\" ng-model=\"ctrl.expenseDescription\"></span></b></div></tl-validate></div></div><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><div class=\"row\"><div class=\"col-md-12\"><div class=\"btn btn-default pull-left\" ui-sref=\"tr.expenses\">Zurück</div><div class=\"pull-left\">&nbsp;</div><div class=\"btn btn-default pull-left\" ng-click=\"ctrl.save();\">Speichern</div><div class=\"pull-left\">&nbsp;</div><div class=\"btn btn-default pull-left\" ng-click=\"ctrl.remove();\" ng-hide=\"ctrl.isNew()\">Löschen</div></div></div></form></div>"
  );


  $templateCache.put('Client/Views/expenses.html',
    "<div ng-controller=\"ExpensesController as ctrl\" class=\"expenses\"><ui-view class=\"detail-slide\"></ui-view><div class=\"row\"><h1 class=\"col-md-9\">Spesen</h1></div><filter-header model=\"filterHeaderModel\" add-button-callback=\"ctrl.addButtonCallback()\" add-button-text=\"Add new expense\" ok-button-callback=\"ctrl.okButtonCallback()\" ok-button-text=\"Target all expenses\"></filter-header><hr><div class=\"row\"></div><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><div class=\"row tr-list-head\"></div><div class=\"row\"><div class=\"tr-list\"><!--infinite-scroll=\"ctrl.search.getMore();\" infinite-scroll-distance=\"1\"--><div class=\"row\"><div class=\"col-md-2\"><ng-include src=\"'expenses.weeklabel'\"></ng-include></div><div class=\"col-md-10\"><ng-include src=\"'expenses.row'\"></ng-include></div></div><!--ng-click=\"ctrl.selectEntry(entry)\" ui-sref=\"expensesEdit({id:entry.Id})\"--><!--<div class=\"row\" style=\"cursor: pointer;\" ng-click=\"ctrl.selectEntry(entry)\" ui-sref=\"expensesEdit({id:entry.Id})\">\r" +
    "\n" +
    "        <div class=\"col-md-3 tr-ellipsis\">{{ctrl.service.getPersonNameById(entry.PersonId)}}</div>\r" +
    "\n" +
    "        <div class=\"tr-list-selector-left\">\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"tr-list-selector-right\">\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "      </div>--></div></div><script type=\"text/ng-template\" id=\"expenses.row\"><div ng-repeat=\"entry in ctrl.searchResult\" class=\"col-md-12\">\r" +
    "\n" +
    "        <div class=\"row tr-list-item\">\r" +
    "\n" +
    "          <div class=\"col-md-2\">{{entry.timestamp | date:\"dd.MM\"}} </div>\r" +
    "\n" +
    "          <div class=\"col-md-6 tr-ellipsis\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "              <div class=\"col-md-12\">\r" +
    "\n" +
    "                {{ctrl.getExpenseTypeName(entry)}}\r" +
    "\n" +
    "              </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "              <div class=\"col-md-12\">\r" +
    "\n" +
    "                {{entry.description}}\r" +
    "\n" +
    "              </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "          <div class=\"col-md-2\">{{ctrl.getValue(entry)}}</div>\r" +
    "\n" +
    "          <div class=\"col-md-2 text-right\">\r" +
    "\n" +
    "            <span ui-sref=\"tr.expenses.side.edit({id:entry.id})\" class=\"glyphicon glyphicon-edit\"></span>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "      </div></script><script type=\"text/ng-template\" id=\"expenses.weeklabel\"><div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-md-12 tr-ellipsis\">\r" +
    "\n" +
    "          {{filterHeaderModel.date | date:\"MMMM\"}}\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "      <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-md-12 tr-ellipsis\">\r" +
    "\n" +
    "          KW {{filterHeaderModel.date | date:\"w\"}}\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "      </div></script></div>"
  );


  $templateCache.put('Client/Views/globalMessages.html',
    "<div ng-controller=\"MessageController as ctrl\"><h2>Globale Nachrichten</h2><hr><div class=\"col-md-4\"><div class=\"row\" style=\"margin: 0\"><div class=\"col-md-12 tr-list-head\"><div class=\"row\"><div class=\"col-md-3\"></div><div class=\"col-md-9\">Nachricht</div></div></div><div class=\"tr-list\"><div class=\"col-md-12\" ng-show=\"ctrl.loading\"><div class=\"tr-v-spacer\"></div><div class=\"tr-list-loader\"><div id=\"floatingBarsG\"><div class=\"blockG\" id=\"rotateG_01\"></div><div class=\"blockG\" id=\"rotateG_02\"></div><div class=\"blockG\" id=\"rotateG_03\"></div><div class=\"blockG\" id=\"rotateG_04\"></div><div class=\"blockG\" id=\"rotateG_05\"></div><div class=\"blockG\" id=\"rotateG_06\"></div><div class=\"blockG\" id=\"rotateG_07\"></div><div class=\"blockG\" id=\"rotateG_08\"></div></div></div></div><div class=\"col-md-12 tr-list-item\" ng-repeat=\"msg in ctrl.messages\" ng-click=\"ctrl.select(msg)\" ng-class=\"{'tr-list-item-selected': msg.id == ctrl.selectedMessage.id}\"><div class=\"row\"><div class=\"col-md-3\"><i class=\"glyphicon glyphicon-comment\"></i></div><div class=\"col-md-9 tr-ellipsis\">{{msg.title}}</div><div class=\"tr-list-selector-left\"></div><div class=\"tr-list-selector-right\"></div></div></div><div class=\"col-md-12 tr-list-item\" ng-click=\"ctrl.create();\" ng-hide=\"ctrl.loading\" ng-class=\"{'tr-list-item-selected': ctrl.selectedMessage.id == 0}\"><div class=\"row\"><div class=\"col-md-3\"><i class=\"glyphicon glyphicon-plus\"></i></div><div class=\"col-md-9\">Neue Nachricht</div><div class=\"tr-list-selector-left\"></div><div class=\"tr-list-selector-right\"></div></div></div></div></div></div><div class=\"col-md-offset-1 col-md-7 form-horizontal\" ng-show=\"ctrl.showForm\"><div class=\"row\"><ul class=\"nav nav-pills\"><li role=\"presentation\" ng-class=\"{active : ctrl.mode == 1}\"><a href=\"\" ng-click=\"ctrl.switchMode(1);\"><i class=\"glyphicon glyphicon-list\"></i>&nbsp;<span>Einspaltig</span></a></li><li role=\"presentation\" ng-class=\"{active : ctrl.mode == 2}\"><a href=\"\" ng-click=\"ctrl.switchMode(2);\"><i class=\"glyphicon glyphicon-picture\"></i>&nbsp;<span>Zweispaltig</span></a></li><li role=\"presentation\" ng-class=\"{active : ctrl.mode == 3}\"><a href=\"\" ng-click=\"ctrl.switchMode(3);\"><i class=\"glyphicon glyphicon-certificate\"></i>&nbsp;<span>Freies Html</span></a></li></ul><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><div class=\"col-md-12\" ng-show=\"ctrl.mode==1\"><div class=\"row\"><div class=\"col-md-2\"><b>Titel:</b></div><div class=\"col-md-7\"><input type=\"text\" maxlength=\"{{ctrl.maxTitleLength}}\" class=\"form-control\" ng-model=\"ctrl.title\"></div><div class=\"col-md-3 tr-g-msg-bullet-charleft\">noch {{ctrl.maxTitleLength - ctrl.title.length}} Zeichen</div></div><div class=\"tr-v-spacer\"></div><div class=\"row\"><ul class=\"nav nav-pills\"><li role=\"presentation\" ng-class=\"{active : ctrl.textMode == 1}\"><a href=\"\" ng-click=\"ctrl.switchTextMode(1);\"><i class=\"glyphicon glyphicon-align-justify\"></i> &nbsp; <span>Text</span></a></li><li role=\"presentation\" ng-class=\"{active : ctrl.textMode == 2}\"><a href=\"\" ng-click=\"ctrl.switchTextMode(2);\"><i class=\"glyphicon glyphicon-list\"></i> &nbsp; <span>Liste</span></a></li></ul></div><div class=\"tr-v-spacer\"></div><div ng-show=\"ctrl.textMode == 1\"><div class=\"row\"><div class=\"col-md-2\"><b>Text</b></div><div class=\"col-md-offset-3 col-md-3 tr-g-msg-charsleft\">noch {{ctrl.maxTextLength - ctrl.text.length}} Zeichen</div></div><div class=\"row\"><div class=\"col-md-8\"><textarea ng-model=\"ctrl.text\" maxlength=\"{{ctrl.maxTextLength}}\" style=\"max-width: 100%; width: 100%;height: 150px\"></textarea></div></div></div><div ng-repeat=\"bullet in ctrl.bullets  track by $index\" ng-show=\"ctrl.textMode == 2\"><div class=\"row\"><div class=\"col-md-2\"><b>Punkt {{$index + 1}}:</b></div><div class=\"col-md-6\"><input type=\"text\" class=\"form-control\" maxlength=\"{{ctrl.maxBulletLength}}\" ng-model=\"bullet.str\"></div><div class=\"col-md-1\"><div class=\"btn btn-default\" ng-click=\"ctrl.removeBullet($index);\"><i class=\"glyphicon glyphicon-remove\"></i></div></div><div class=\"col-md-3 tr-g-msg-bullet-charleft\">noch {{ctrl.maxBulletLength - bullet.str.length}} Zeichen</div></div><div class=\"tr-v-spacer\"></div></div><div class=\"row\" ng-show=\"ctrl.textMode == 2\"><div class=\"col-md-offset-8 col-md-1\"><div class=\"btn btn-default\" ng-show=\"ctrl.bullets.length < ctrl.maxBullets\" ng-click=\"ctrl.addBullet();\"><i class=\"glyphicon glyphicon-plus\"></i></div></div></div></div><div class=\"col-md-12\" ng-show=\"ctrl.mode==2\"><div class=\"row\"><div class=\"col-md-2\"><b>Titel:</b></div><div class=\"col-md-7\"><input type=\"text\" class=\"form-control\" maxlength=\"{{ctrl.maxTitleLength}}\" ng-model=\"ctrl.title\"></div><div class=\"col-md-3 tr-g-msg-bullet-charleft\">noch {{ctrl.maxTitleLength - ctrl.title.length}} Zeichen</div></div><div class=\"tr-v-spacer\"></div><div class=\"row\"><div class=\"col-md-2\"><b>Bild:</b></div><div class=\"col-md-4\" ng-show=\"!ctrl.hasImage\"><!--<input type=\"text\" class=\"form-control\" ng-model=\"ctrl.imgUrl\"/>--><input type=\"file\" id=\"fileUpload\" class=\"form-control\" accept=\".png, .PNG, .jpg,.JPG\" onchange=\"angular.element(this).scope().ctrl.fileSelected()\"></div><div class=\"col-md-4\" ng-show=\"ctrl.hasImage\"><div style=\"width: 150px\"><img src=\"{{ctrl.imgUrl}}\" alt=\"\" id=\"image-preview\" style=\"width: 100%\"></div></div><div class=\"col-md-1\" ng-show=\"ctrl.hasImage\"><div class=\"btn btn-default\" ng-click=\"ctrl.removeImage();\"><i class=\"glyphicon glyphicon-remove\"></i></div></div><div class=\"col-md-1\"></div><div class=\"col-md-3 col-md-offset-2 tr-g-msg-charsleft\" style=\"text-align: left\">max. 5MB Bildgrösse</div></div><div class=\"tr-v-spacer\"></div><div class=\"row\"><ul class=\"nav nav-pills\"><li role=\"presentation\" ng-class=\"{active : ctrl.textMode == 1}\"><a href=\"\" ng-click=\"ctrl.switchTextMode(1);\"><i class=\"glyphicon glyphicon-align-justify\"></i> &nbsp; <span>Text</span></a></li><li role=\"presentation\" ng-class=\"{active : ctrl.textMode == 2}\"><a href=\"\" ng-click=\"ctrl.switchTextMode(2);\"><i class=\"glyphicon glyphicon-list\"></i> &nbsp; <span>Liste</span></a></li></ul></div><div class=\"tr-v-spacer\"></div><div ng-show=\"ctrl.textMode == 1\"><div class=\"row\"><div class=\"col-md-2\"><b>Text</b></div><div class=\"col-md-3 col-md-offset-3 tr-g-msg-charsleft\">noch {{ctrl.maxTextLength - ctrl.text.length}} Zeichen</div></div><div class=\"row\"><div class=\"col-md-8\"><textarea ng-model=\"ctrl.text\" maxlength=\"{{ctrl.maxTextLength}}\" style=\"max-width: 100%; width: 100%;height: 150px\"></textarea></div></div></div><div ng-repeat=\"bullet in ctrl.bullets track by $index\" ng-show=\"ctrl.textMode == 2\"><div class=\"row\"><div class=\"col-md-2\"><b>Punkt {{$index + 1}}:</b></div><div class=\"col-md-6\"><input type=\"text\" class=\"form-control\" maxlength=\"{{ctrl.maxBulletLength}}\" ng-model=\"bullet.str\"></div><div class=\"col-md-1\"><div class=\"btn btn-default\" ng-click=\"ctrl.removeBullet($index);\"><i class=\"glyphicon glyphicon-remove\"></i></div></div><div class=\"col-md-3 tr-g-msg-bullet-charleft\">noch {{ctrl.maxBulletLength - bullet.str.length}} Zeichen</div></div><div class=\"tr-v-spacer\"></div></div><div class=\"row\" ng-show=\"ctrl.textMode == 2\"><div class=\"col-md-offset-8 col-md-1\"><div class=\"btn btn-default\" ng-show=\"ctrl.bullets.length < ctrl.maxBullets\" ng-click=\"ctrl.addBullet();\"><i class=\"glyphicon glyphicon-plus\"></i></div></div></div></div><div class=\"col-md-12\" ng-show=\"ctrl.mode==3\"><textarea ng-model=\"ctrl.rawHtml\" style=\"max-width: 100%; width: 100%;height: 300px\"></textarea></div><div class=\"col-md-12\"><div class=\"tr-v-spacer\"></div><div class=\"btn btn-default\" ng-click=\"ctrl.preview();\">Vorschau</div><div class=\"btn btn-default\" ng-click=\"ctrl.save();\">Speichern</div><div class=\"btn btn-default\" ng-click=\"ctrl.delete();\" ng-show=\"ctrl.selectedMessage.Id\">Löschen</div></div></div></div><div class=\"tr-preview-background\" ng-show=\"ctrl.showPreview;\"><div class=\"tr-preview-container\"><div class=\"tr-preview-actions\"><a class=\"pull-right\" ng-click=\"ctrl.hidePreview()\" style=\"font-size: 18px;color: black\"><i class=\"glyphicon glyphicon-remove\"></i></a></div><div class=\"tr-preview-device\"><div class=\"col-md-3\"><div class=\"tr-employee-card-wrapper\"><div class=\"tr-employee-card\"></div><div class=\"tr-employee-card-text\">Mitarbeiter Karte einlesen</div></div><div class=\"tr-clock\" clock></div><div class=\"tr-logo\"></div></div><div class=\"col-md-9\"><div id=\"msg-container\" class=\"tr-preview-message-container\" ng-bind-html=\"ctrl.renderedHtml | unsafe\"></div><!--<div id=\"msg-container-1\" class=\"tr-preview-message-container\" ng-show=\"ctrl.mode == 1\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t<div class=\"tr-global-message-title\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t{{ctrl.title}}\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t<ul>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t<li ng-repeat=\"bullet in ctrl.bullets track by $index\" class=\"tr-global-message-item\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t{{bullet.str}}\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t</li>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t</ul>\r" +
    "\n" +
    "\t\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t\t\t\t\t\t<div id=\"msg-container-2\" class=\"tr-preview-message-container\" ng-show=\"ctrl.mode == 2\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t<div class=\"row\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-md-5\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"tr-preview-image-background\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t<img class=\"tr-preview-image\" src=\"{{ctrl.imgUrl}}\" alt=\"\" />\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t<div class=\"tr-global-message-title-dual\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t{{ctrl.title}}\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t<ul>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t<li ng-repeat=\"bullet in ctrl.bullets track by $index\" class=\"tr-global-message-item-dual\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t\t{{bullet.str}}\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t</li>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t</ul>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t\t\t\t\t\t<div id=\"msg-container-3\" class=\"tr-preview-message-container\" ng-show=\"ctrl.mode == 3\" ng-bind-html=\"ctrl.rawHtml | unsafe\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t\t\t\t\t\t</div>--></div></div></div></div><div id=\"html-parser-hidden\" style=\"display: none\"></div></div>"
  );


  $templateCache.put('Client/Views/home.html',
    "<div class=\"jumbotron\"><h1>TIMERECORDER</h1><p class=\"lead\"></p></div>"
  );


  $templateCache.put('Client/Views/locations.html',
    "<div ng-controller=\"LocationController as ctrl\"><h2>Standorte</h2><hr><div class=\"col-md-7\"><div class=\"row\" style=\"margin: 0\" slim-scroll><div class=\"col-md-12 tr-list-head\"><div class=\"row\"><div class=\"col-md-1\"></div><div class=\"col-md-3\">Id</div><div class=\"col-md-5\">Name</div></div></div><div class=\"tr-list\"><div class=\"col-md-12\" ng-show=\"ctrl.loading\"><div class=\"tr-v-spacer\"></div><div class=\"tr-list-loader\"><div id=\"floatingBarsG\"><div class=\"blockG\" id=\"rotateG_01\"></div><div class=\"blockG\" id=\"rotateG_02\"></div><div class=\"blockG\" id=\"rotateG_03\"></div><div class=\"blockG\" id=\"rotateG_04\"></div><div class=\"blockG\" id=\"rotateG_05\"></div><div class=\"blockG\" id=\"rotateG_06\"></div><div class=\"blockG\" id=\"rotateG_07\"></div><div class=\"blockG\" id=\"rotateG_08\"></div></div></div></div><div ng-repeat=\"location in ctrl.locations|orderBy:'locationId'\" class=\"col-md-12 tr-list-item\" ng-click=\"ctrl.select(location);\" ng-class=\"{'tr-list-item-selected': location.key == ctrl.selectedLocation.key}\"><div class=\"row\"><div class=\"col-md-1\"><i class=\"glyphicon glyphicon-home\"></i></div><div class=\"col-md-3\">{{location.locationId}}</div><div class=\"col-md-5 tr-ellipsis\">{{location.name}}</div><div class=\"tr-list-selector-left\"></div><div class=\"tr-list-selector-right\"></div></div></div><div class=\"col-md-12 tr-list-item\" ng-hide=\"ctrl.loading\" ng-click=\" ctrl.create();\" ng-class=\"{'tr-list-item-selected': ctrl.selectedLocation.key == 0}\"><div class=\"row\"><div class=\"col-md-1\"><i class=\"glyphicon glyphicon-plus\"></i></div><div class=\"col-md-3\">Neuer Standort</div><div class=\"tr-list-selector-left\"></div><div class=\"tr-list-selector-right\"></div></div></div></div></div></div><div class=\"col-md-offset-1 col-md-4 form-horizontal\" ng-show=\"ctrl.showForm\"><div class=\"row\"><h4 class=\"tr-col-form-title tr-ellipsis\">{{ctrl.selectedLocation.name}}</h4><div class=\"form-group\"><label class=\"col-md-4 control-label\" for=\"id\">Id</label><div class=\"col-md-8\"><input class=\"form-control\" id=\"id\" type=\"text\" ng-model=\"ctrl.selectedLocation.locationId\" maxlength=\"{{ctrl.idMaxLength}}\"></div></div><div class=\"form-group\"><label class=\"col-md-4 control-label\" for=\"fstn\">Name</label><div class=\"col-md-8\"><input class=\"form-control\" id=\"fstn\" type=\"text\" ng-model=\"ctrl.selectedLocation.name\" maxlength=\"{{ctrl.nameMaxLength}}\"></div></div><div class=\"form-group\"><div class=\"col-md-4\"><div class=\"btn btn-default\" ng-click=\"ctrl.save()\">Speichern</div></div><div class=\"col-md-4\"><div class=\"btn btn-default\" ng-show=\"!ctrl.selectedLocation.userId && ctrl.selectedLocation.key != 0\" ng-click=\"ctrl.delete()\">Löschen</div></div></div></div></div></div>"
  );


  $templateCache.put('Client/Views/login.html',
    "<h2>Login</h2><hr><div class=\"col-md-4 form-horizontal\"><div class=\"form-group\"><label class=\"col-md-4 control-label\" for=\"email\">Benutzername</label><div class=\"col-md-8\"><input class=\"form-control\" ng-enter=\"app.login();\" id=\"email\" type=\"text\" ng-model=\"app.userName\"></div></div><div class=\"form-group\"><label class=\"col-md-4 control-label\" for=\"password\">Passwort</label><div class=\"col-md-8\"><input class=\"form-control\" ng-enter=\"app.login()\" id=\"password\" type=\"password\" ng-model=\"app.password\"></div></div><div class=\"form-group\"><div class=\"col-md-offset-4 col-md-8\"><div class=\"checkbox\"><input type=\"checkbox\" id=\"rememberme\" ng-model=\"app.rememberMe\"><label for=\"rememberme\">Remember me</label></div></div></div><div class=\"form-group\"><div class=\"col-md-offset-4 col-md-8\"><div class=\"btn btn-default\" ng-click=\"app.login()\">Log in</div></div></div></div>"
  );


  $templateCache.put('Client/Views/personalMessages.html',
    "<div ng-controller=\"PersonalMessageController as ctrl\"><h2>Persönliche Nachrichten</h2><hr><div class=\"col-md-12\"><div class=\"row\"><div class=\"col-md-5\"><div class=\"btn btn-default\" ng-click=\"ctrl.create();\">Neue Nachricht</div><h4>Gesendete Nachrichten</h4><div slim-scroll><div ng-repeat=\"msg in ctrl.messages | orderBy: ['ReadByAll', '-TimeSent']\" class=\"tr-sent-message\" ng-click=\"ctrl.select(msg);\" ng-class=\"{'tr-sent-message-selected' : msg.messageId === ctrl.selectedId, 'aread' : msg.readByAll, 'aunread' : !msg.readByAll}\"><div class=\"tr-sent-message-title\">{{msg.head}}</div><div class=\"tr-sent-message-date\">{{msg.timeEllapsed}}</div><div class=\"tr-sent-message-recipients\"><span>An:</span> <span ng-repeat=\"rec in msg.recipients\"><span>{{rec.name}}</span> <span ng-show=\"!$last\">,</span></span></div></div></div></div><div class=\"col-md-7\" ng-show=\"ctrl.showForm\"><div style=\"height: 76px;width: 100%\"></div><div to-select source=\"ctrl.selectOptions\" model=\"ctrl.recipients\" disabled></div><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><div class=\"tr-p-msg-input-container\"><div class=\"tr-p-msg-label\">Titel:</div><input type=\"text\" ng-disabled=\"!ctrl.isNew\" class=\"tr-p-msg-input\" ng-model=\"ctrl.head\"></div><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><div class=\"tr-p-msg-input-container\"><div class=\"tr-p-msg-label\" style=\"float: left\">Nachricht:</div><div class=\"tr-p-msg-charsleft\" ng-show=\"ctrl.isNew\">{{ctrl.maxMsgLength - ctrl.body.length}} Zeichen übrig</div><div style=\"clear: both\"></div></div><textarea maxlength=\"{{ctrl.maxMsgLength}}\" class=\"tr-p-msg-textarea\" ng-disabled=\"!ctrl.isNew\" ng-model=\"ctrl.body\"></textarea><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><div class=\"btn btn-default\" ng-show=\"ctrl.isNew && ctrl.validate()\" ng-click=\"ctrl.send();\">Abschicken</div></div></div></div><div class=\"col-md-12\"></div></div>"
  );


  $templateCache.put('Client/Views/persons.html',
    "<div ng-controller=\"PersonController as ctrl\"><div class=\"col-md-10\"><h2>Personen</h2></div><div class=\"col-md-2\"><div class=\"btn btn-default pull-right\" ng-show=\"ctrl.webServiceAvailable\" ng-click=\"ctrl.triggerPersonImport()\">Personalstamm Importieren</div></div><hr><div class=\"col-md-7\"><div class=\"row\"><div class=\"col-md-8\"><div class=\"input-group\"><input type=\"text\" class=\"form-control\" ng-model=\"ctrl.person.search\" placeholder=\"Suche\"> <span class=\"input-group-btn\"><button class=\"btn btn-default\" type=\"button\" ng-click=\"ctrl.person.startSearch()\">Suchen</button></span></div></div><div class=\"col-md-4\"><div class=\"btn btn-default pull-right\" ng-click=\"ctrl.create()\"><i class=\"glyphicon glyphicon-plus\"></i>&nbsp;Erstellen</div></div></div><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><div class=\"row\" style=\"margin: 0\" infinite-scroll=\"ctrl.person.loadMore();\" infinite-scroll-distance=\"1\"><div class=\"col-md-12 tr-list-head\"><div class=\"row\"><div class=\"col-md-1\"></div><div class=\"col-md-2\">Id</div><div class=\"col-md-3\">Name</div><div class=\"col-md-2\">Externe Id</div><div class=\"col-md-4\">Rolle</div></div></div><div class=\"tr-list\"><div class=\"col-md-12\" ng-show=\"ctrl.loading\"><div class=\"tr-v-spacer\"></div><div class=\"tr-list-loader\"><div id=\"floatingBarsG\"><div class=\"blockG\" id=\"rotateG_01\"></div><div class=\"blockG\" id=\"rotateG_02\"></div><div class=\"blockG\" id=\"rotateG_03\"></div><div class=\"blockG\" id=\"rotateG_04\"></div><div class=\"blockG\" id=\"rotateG_05\"></div><div class=\"blockG\" id=\"rotateG_06\"></div><div class=\"blockG\" id=\"rotateG_07\"></div><div class=\"blockG\" id=\"rotateG_08\"></div></div></div></div><div ng-repeat=\"person in ctrl.person.people\" class=\"col-md-12 tr-list-item\" ng-click=\"ctrl.select(person);\" ng-class=\"{'tr-list-item-selected': person.id == ctrl.selectedPerson.id}\"><div class=\"row\"><div class=\"col-md-1\"><i class=\"glyphicon glyphicon-user\"></i></div><div class=\"col-md-2\">{{person.employeeId}}</div><div class=\"col-md-3 tr-ellipsis\">{{person.firstName}} {{person.lastName}}</div><div class=\"col-md-2 tr-ellipsis\">{{person.externalId}}</div><div class=\"col-md-4 tr-ellipsis\">{{ctrl.getRole(person)}}</div><div class=\"tr-list-selector-left\"></div><div class=\"tr-list-selector-right\"></div></div></div></div></div></div><div class=\"col-md-offset-1 col-md-4 form-horizontal\" ng-show=\"ctrl.showForm\"><div class=\"row\"><h4 class=\"tr-col-form-title tr-ellipsis\">{{ctrl.selectedPerson.firstName}} {{ctrl.selectedPerson.lastName}}</h4><div class=\"form-group\"><label class=\"col-md-4 control-label\" for=\"id\">Id</label><div class=\"col-md-8\"><input class=\"form-control\" id=\"id\" type=\"text\" ng-model=\"ctrl.selectedPerson.employeeId\" maxlength=\"{{ctrl.idMaxLength}}\"></div></div><div class=\"form-group\"><label class=\"col-md-4 control-label\" for=\"fstn\">Vorname</label><div class=\"col-md-8\"><input class=\"form-control\" id=\"fstn\" type=\"text\" ng-model=\"ctrl.selectedPerson.firstName\" maxlength=\"{{ctrl.firstNameMaxLength}}\"></div></div><div class=\"form-group\"><label class=\"col-md-4 control-label\" for=\"lstn\">Nachname</label><div class=\"col-md-8\"><input class=\"form-control\" id=\"lstn\" type=\"text\" ng-model=\"ctrl.selectedPerson.lastName\" maxlength=\"{{ctrl.lastNameMaxLength}}\"></div></div><div class=\"form-group\"><label class=\"col-md-4 control-label\" for=\"lstn\">Externe Id</label><div class=\"col-md-8\"><input class=\"form-control\" id=\"lstn\" type=\"text\" ng-model=\"ctrl.selectedPerson.externalId\"></div></div><div class=\"form-group\"><label class=\"col-md-4 control-label\" for=\"type\">Rolle</label><div class=\"col-md-8\"><select id=\"type\" class=\"form-control\" ng-model=\"ctrl.selectedPerson.profileId\"><option value=\"0\">Wählen...</option><option value=\"{{p.id}}\" ng-repeat=\"p in ctrl.profiles\">{{p.name}}</option></select></div></div><div class=\"form-group\"><label class=\"col-md-4 control-label\" for=\"pin\">NotfallPin</label><div class=\"col-md-8\"><input class=\"form-control\" id=\"pin\" type=\"text\" ng-model=\"ctrl.selectedPerson.emergencyPin\"></div></div><div class=\"form-group\"><div class=\"col-md-4\"><div class=\"btn btn-default\" ng-click=\"ctrl.save()\">Speichern</div></div><div class=\"col-md-4\"><div class=\"btn btn-default\" ng-show=\"ctrl.selectedPerson.Id != 0\" ng-click=\"ctrl.delete()\">Löschen</div></div></div></div></div></div>"
  );


  $templateCache.put('Client/Views/projects.html',
    "<div ng-controller=\"ProjectController as ctrl\"><div class=\"col-md-10\"><h2>Projekte</h2></div><div class=\"col-md-2\"><div class=\"btn btn-default pull-right\" ng-show=\"ctrl.webServiceAvailable\" ng-click=\"ctrl.triggerProjectImport()\">Projektdaten Importieren</div></div><hr><div class=\"col-md-5\"><div><div class=\"row\"><div class=\"col-md-12\"><div class=\"input-group\"><input type=\"text\" class=\"form-control\" ng-model=\"ctrl.project.search\" placeholder=\"Suche\"> <span class=\"input-group-btn\"><button class=\"btn btn-default\" type=\"button\" ng-click=\"ctrl.project.startSearch()\">Suchen</button></span></div></div></div></div><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><div infinite-scroll=\"ctrl.project.loadMore();\" infinite-scroll-distance=\"1\"><div ng-repeat=\"project in ctrl.project.roots\"><project-tree node-selected=\"ctrl.select($node)\" depth=\"0\" selected-node-id=\"ctrl.selectedNode.id\" project=\"project\"></project-tree></div></div></div><div class=\"col-md-offset-1 col-md-6 form-horizontal\" ng-show=\"ctrl.showForm\"><div class=\"row\"><h3>{{ctrl.selectedNode.name}}</h3><h4 ng-show=\"ctrl.showFlags\"><span class=\"label label-default tr-clickable\" ng-click=\"ctrl.setFlag(ctrl.selectedNode, 1)\" ng-class=\"{'label-primary': ctrl.selectedNode.bookable}\">Buchbar</span> <span class=\"label label-default tr-clickable\" ng-click=\"ctrl.setFlag(ctrl.selectedNode, 2)\" ng-class=\"{'label-danger': ctrl.selectedNode.explicit}\">Explizit</span> <span class=\"label label-default tr-clickable\" ng-click=\"ctrl.setFlag(ctrl.selectedNode, 4)\" ng-class=\"{'label-success': ctrl.selectedNode.planningUnit}\">Planungseinheit</span></h4><div class=\"tr-v-spacer\"></div><div><p class=\"tr-subtext\" ng-show=\"!ctrl.editMode && ctrl.selectedNode.description\">{{ctrl.selectedNode.description}}</p><p class=\"tr-subtext\" ng-hide=\"ctrl.editMode || ctrl.selectedNode.description\">Keine Beschreibung</p><div ng-show=\"ctrl.editMode\"><textarea type=\"text\" class=\"form-control\" ng-model=\"ctrl.selectedNode.description\" style=\"width: 100%; max-width: 100%\"></textarea></div></div><div ng-show=\"ctrl.editMode\"><div class=\"tr-v-spacer\"></div><div class=\"btn btn-default\" ng-click=\"ctrl.saveDescription()\">Speichern</div><div class=\"btn btn-default\" ng-click=\"ctrl.cancelEditDescription()\">Abbrechen</div></div><div class=\"tr-v-spacer\"></div><div class=\"tr-subtitle\">Alle berechigten Personen</div><div class=\"tr-subtext\"><span ng-repeat=\"p in ctrl.mergePersons\"><span>{{p.name}}</span><span ng-hide=\"$last\">,</span></span></div><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><div class=\"tr-subtitle\">Alle konfigurierten Standorte</div><div class=\"tr-subtext\"><span ng-repeat=\"l in ctrl.mergeLocations\"><span>{{l.name}}</span><span ng-hide=\"$last\">,</span></span></div><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><div class=\"tr-subtitle\">Direkt berechigte Personen</div><multi-select removed=\"ctrl.personRemoved($item)\" added=\"ctrl.personAdded($item)\" ng-model=\"ctrl.currentPersons\" ng-source=\"ctrl.persons\" ng-exclude=\"ctrl.inheritedPersons\"></multi-select><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><div class=\"tr-subtitle\">Direkt konfigurierte Standorte</div><multi-select removed=\"ctrl.locationRemoved($item)\" added=\"ctrl.locationAdded($item)\" ng-model=\"ctrl.currentLocations\" ng-source=\"ctrl.locations\" ng-exclude=\"ctrl.inheritedLocations\"></multi-select><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><div class=\"btn btn-default\" ng-hide=\"ctrl.editMode\" ng-click=\"ctrl.changeDescription()\">Beschreibung ändern</div></div></div></div>"
  );


  $templateCache.put('Client/Views/roles.html',
    "<div ng-controller=\"RoleController as ctrl\"><h2>Rollen</h2><hr><div class=\"col-md-4\"><div class=\"row\" style=\"margin: 0\" slim-scroll><div class=\"col-md-12 tr-list-head\"><div class=\"row\"><div class=\"col-md-1\"></div><div class=\"col-md-11\">Name</div><!--<div class=\"col-md-6\">Beschreibung</div>--></div></div><div class=\"tr-list\"><div class=\"col-md-12\" ng-show=\"ctrl.loading\"><div class=\"tr-v-spacer\"></div><div class=\"tr-list-loader\"><div id=\"floatingBarsG\"><div class=\"blockG\" id=\"rotateG_01\"></div><div class=\"blockG\" id=\"rotateG_02\"></div><div class=\"blockG\" id=\"rotateG_03\"></div><div class=\"blockG\" id=\"rotateG_04\"></div><div class=\"blockG\" id=\"rotateG_05\"></div><div class=\"blockG\" id=\"rotateG_06\"></div><div class=\"blockG\" id=\"rotateG_07\"></div><div class=\"blockG\" id=\"rotateG_08\"></div></div></div></div><div class=\"col-md-12 tr-list-item\" ng-repeat=\"role in ctrl.roles|orderBy:'name'\" ng-click=\"ctrl.select(role)\" ng-class=\"{'tr-list-item-selected': role.id == ctrl.selectedRole.id}\"><div class=\"row\"><div class=\"col-md-2\"><i class=\"glyphicon glyphicon-cog\"></i></div><div class=\"col-md-9 tr-ellipsis\">{{role.name}}</div><!--<div class=\"col-md-7 tr-ellipsis\">{{role.Description}}</div>--><div class=\"tr-list-selector-left\"></div><div class=\"tr-list-selector-right\"></div></div></div><div class=\"col-md-12 tr-list-item\" ng-click=\"ctrl.create();\" ng-hide=\"ctrl.loading\" ng-class=\"{'tr-list-item-selected': ctrl.selectedRole.id == 0}\"><div class=\"row\"><div class=\"col-md-2\"><i class=\"glyphicon glyphicon-plus\"></i></div><div class=\"col-md-9\">Neu</div><div class=\"tr-list-selector-left\"></div><div class=\"tr-list-selector-right\"></div></div></div></div></div></div><div class=\"col-md-offset-1 col-md-7 form-horizontal\" ng-show=\"ctrl.selectedRole\"><div class=\"row\"><h4 class=\"tr-col-form-title tr-ellipsis\">{{ctrl.selectedRole.name}}</h4><div class=\"form-group\"><label class=\"col-md-3 control-label\" for=\"name\">Name</label><div class=\"col-md-8\"><input class=\"form-control\" id=\"name\" type=\"text\" ng-model=\"ctrl.selectedRole.name\" maxlength=\"{{ctrl.maxNameLength}}\"></div></div><div class=\"form-group\"><label class=\"col-md-3 control-label\" for=\"description\">Beschreibung</label><div class=\"col-md-8\"><textarea class=\"form-control\" id=\"description\" type=\"text\" ng-model=\"ctrl.selectedRole.description\"></textarea></div></div><p style=\"font-size: 14px; font-weight: bold\">Berechtigungen</p><hr><div class=\"row\"><div class=\"col-md-5\"><b>Inaktiv</b><div class=\"tr-v-spacer\"></div><div class=\"row tr-claim-list\" slim-scroll height=\"300\"><div class=\"col-md-12 tr-claim\" ng-repeat=\"claim in ctrl.inactiveClaims | orderBy : 'name'\" ng-click=\"ctrl.selectClaim(claim, false);\" ng-class=\"{'tr-claim-selected': claim.id == ctrl.selectedClaim.id}\">{{claim.name}}</div></div></div><div class=\"col-md-5 col-md-offset-2\"><b>Aktiv</b><div class=\"tr-v-spacer\"></div><div class=\"row tr-claim-list\" slim-scroll height=\"300\"><div class=\"col-md-12 tr-claim\" ng-repeat=\"claim in ctrl.activeClaims | orderBy : 'name'\" ng-click=\"ctrl.selectClaim(claim, true);\" ng-class=\"{'tr-claim-selected': claim.id == ctrl.selectedClaim.id}\">{{claim.name}}</div></div></div></div><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><p style=\"font-size: 14px; font-weight: bold\">{{ctrl.selectedClaim.name}}</p><hr><p>{{ctrl.selectedClaim.description}}</p><div class=\"tr-v-spacer\"></div><div class=\"row\"><div class=\"form-group\" ng-repeat=\"field in ctrl.selectedClaim.fields\"><label class=\"col-md-3 control-label\" for=\"name\">{{field.name}}</label><div class=\"col-md-8\"><input ng-show=\"field.type === 1\" class=\"form-control\" type=\"number\" ng-model=\"field.value\"> <input ng-show=\"field.type === 2\" class=\"form-control\" type=\"text\" ng-model=\"field.value\"> <input ng-show=\"field.type === 3\" type=\"checkbox\" ng-model=\"field.value\"></div></div></div><div ng-hide=\"ctrl.isCurrentClaimActive || !ctrl.selectedClaim\" class=\"btn btn-default\" ng-click=\"ctrl.addClaim();\">Aktivieren</div><div ng-show=\"ctrl.isCurrentClaimActive && ctrl.selectedClaim\" class=\"btn btn-default\" ng-click=\"ctrl.removeClaim();\">Deaktivieren</div><!--<div ng-repeat=\"claim in ctrl.claims\">\r" +
    "\n" +
    "\t\t\t\t<div class=\"row\">\r" +
    "\n" +
    "\t\t\t\t\t<div ng-show=\"ctrl.hasClaim(claim)\" class=\"col-md-3\">\r" +
    "\n" +
    "\t\t\t\t\t\t<div class=\"btn btn-xs btn-danger\" ng-click=\"ctrl.toggleClaim(claim)\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t<i class=\"glyphicon glyphicon-minus\"></i>\r" +
    "\n" +
    "\t\t\t\t\t\t\tEntfernen\r" +
    "\n" +
    "\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t<div ng-hide=\"ctrl.hasClaim(claim)\" class=\"col-md-3\">\r" +
    "\n" +
    "\t\t\t\t\t\t<div class=\"btn btn-xs btn-success\" ng-click=\"ctrl.toggleClaim(claim)\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t<i class=\"glyphicon glyphicon-plus\"></i>\r" +
    "\n" +
    "\t\t\t\t\t\t\tHinzufügen\r" +
    "\n" +
    "\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t<div class=\"col-md-9\"><p><span>{{claim.Name}}</span>&nbsp;<a tooltip-placement=\"right\" tooltip=\"{{claim.Description}}\"><b>?</b> </a></p></div>\r" +
    "\n" +
    "\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t</div>--><div class=\"tr-v-spacer\"></div><div class=\"form-group\"><div class=\"col-md-4\"><div class=\"btn btn-default\" ng-click=\"ctrl.save()\">Speichern</div></div><div class=\"col-md-4\" ng-show=\"ctrl.selectedRole.userCount < 1 && !ctrl.newRole\"><div class=\"btn btn-default\" ng-click=\"ctrl.delete()\">Löschen</div></div></div></div></div></div>"
  );


  $templateCache.put('Client/Views/sidePage.html',
    "<div class=\"dispo-side-container container-fluid\"><div class=\"dispo-side-empty-page\" ng-click=\"side.close()\"></div><div class=\"dispo-side-outer\"><div class=\"bar\"><button class=\"btn btn-default\" ng-click=\"side.close()\"><span class=\"glyphicon glyphicon-arrow-right\"></span></button></div><div class=\"dispo-side-scrollable has-sticky-bar\"><div class=\"dispo-side-page\"><ui-view></ui-view></div></div></div></div>"
  );


  $templateCache.put('Client/Views/start.html',
    "<div>test start page</div>"
  );


  $templateCache.put('Client/Views/templates/FilterHeader.html',
    "<div class=\"row filter-header\"><div class=\"col-md-4\"><h2 class=\"current-date\">{{model.date | date:'EEEE d. MMMM'}}</h2></div><div class=\"col-md-2\"><div class=\"btn-group\"><button type=\"button\" class=\"btn btn-default\" ng-click=\"ctrl.previousWeek()\">left</button> <button type=\"button\" class=\"btn btn-default\" ng-click=\"ctrl.today()\">Heute</button> <button type=\"button\" class=\"btn btn-default\" ng-click=\"ctrl.nextWeek()\">right</button></div></div><div class=\"col-md-2\"><div class=\"input-group\"><input name=\"expensesForm.date\" type=\"text\" ng-model=\"model.date\" class=\"form-control datepicker\" datepicker-popup view-format ng-disabled=\"ctrl.isDisabled()\" is-open=\"ctrl.datepickerOpened\" close-text=\"{{'_close' | translate}}\" current-text=\"{{'_now' | translate}}\"> <span class=\"input-group-btn\"><button type=\"button\" class=\"btn btn-default\" ng-click=\"ctrl.openDatepicker($event)\"><i class=\"glyphicon glyphicon-th-list\"></i></button></span></div></div><div class=\"col-md-2\"><button ng-click=\"okButtonCallback()\" class=\"btn btn-default\"><i class=\"glyphicon glyphicon-ok\"></i><span>{{okButtonText}}</span></button></div><div class=\"col-md-2\"><button ng-click=\"addButtonCallback()\" class=\"btn btn-default\"><i class=\"glyphicon glyphicon-plus\"></i><span>{{addButtonText}}</span></button></div></div>"
  );


  $templateCache.put('Client/Views/templates/multiselect.html',
    "<div><div class=\"select2-container select2-container-multi\" style=\"width: 100%\"><ul class=\"select2-choices\" ng-click=\"toggleSearch();\"><li class=\"select2-search-choice\" ng-repeat=\"c in ngModel track by $index\"><div>{{c.getValue()}}</div><a ng-click=\"remove(c, $event);\" class=\"select2-search-choice-close\" tabindex=\"-1\"></a></li><li class=\"select2-search-field\"><label class=\"select2-offscreen\"></label><input type=\"text\" ng-model=\"search\" class=\"select2-input\" style=\"width: 10px\" placeholder=\"\"></li></ul></div><div class=\"select2-drop select2-drop-multi select2-drop-active\" ng-show=\"searchMode\"><ul class=\"select2-results\"><li ng-repeat=\"o in options | filter:search track by $index\" ng-click=\"addItem(o)\" class=\"select2-results-dept-0 select2-result select2-result-selectable\" role=\"presentation\"><div class=\"select2-result-label\" role=\"option\"><span class=\"select2-match\"></span> {{o.getValue()}}</div></li><li ng-show=\"options.length === 0\" class=\"select2-results-dept-0 select2-result\" role=\"presentation\"><div class=\"select2-result-label\" role=\"option\"><span class=\"select2-match\"></span> Keine Resultate</div></li></ul></div></div>"
  );


  $templateCache.put('Client/Views/templates/projectTree.html',
    "<div><div class=\"tr-project-node\" ng-class=\"{'tr-project-node-selected': project.id == selectedNodeId}\" ng-click=\"selectInt(project)\"><div class=\"tr-project-node-head\"><span class=\"glyphicon glyphicon-plus tr-clickable\" ng-show=\"!project.expanded && project.hasChildren\" ng-click=\"expand(project, $event)\"></span> <span class=\"glyphicon glyphicon-minus tr-clickable\" ng-show=\"project.expanded\" ng-click=\"fold(project, $event)\"></span></div><div class=\"tr-project-flags\" ng-hide=\"depth === 0 && project.hasChildren\"><div class=\"tr-project-flag\" ng-click=\"setFlag(project, 1, $event)\" ng-class=\"{'tr-blue': project.bookable}\">B</div><div class=\"tr-project-flag\" ng-click=\"setFlag(project, 2, $event)\" ng-class=\" {'tr-red': project.explicit}\">E</div><div class=\"tr-project-flag\" ng-click=\"setFlag(project, 4, $event)\" ng-class=\" {'tr-green': project.planningUnit}\">P</div></div><div class=\"tr-project-node-body\"><span>{{project.name}}</span></div><div style=\"clear: both\"></div></div><div class=\"tr-project-children-container\" ng-show=\"project.expanded\"><div ng-repeat=\"c in project.children\"><project-tree project=\"c\" node-selected=\"selectInt($node)\" depth=\"getDepth();\" selected-node-id=\"selectedNodeId\"></project-tree></div></div></div>"
  );


  $templateCache.put('Client/Views/templates/toSelect.html',
    "<div class=\"toSelect-container\"><label class=\"toSelect-label\" for=\"toSelect\">An:</label><div class=\"toSelect-selected\" style=\"float: left\"><div class=\"toSelect-selectedItem\" ng-repeat=\"selected in model track by $index\" ng-class=\"{'read' : selected.read && disabled, 'unread' : !selected.read && disabled}\"><span class=\"toSelect-selectedItem-name\">{{selected.value}}</span> &nbsp; <span class=\"toSelect-selectedItem-remove\" ng-hide=\"disabled\" ng-click=\"removeItem(selected);\"><i class=\"glyphicon glyphicon-remove\"></i></span></div><input type=\"text\" id=\"toSelect\" ng-hide=\"disabled\" class=\"toSelect-input\" ng-model=\"search\" ng-change=\"realign()\"><div style=\"clear: both\"></div></div><div style=\"clear: both\"></div><div class=\"toSelect-matches\" ng-show=\"search && !disabled\"><div class=\"toSelect-match\" ng-repeat=\"match in source | filter:filter track by $index\" ng-bind-html=\"match.htmlString | unsafe\" ng-click=\"addItem(match);\"></div><div class=\"toSelect-match no-matches\">Keine Resultate</div></div></div>"
  );


  $templateCache.put('Client/Views/timebookings.form.html',
    "<div ng-controller=\"TimeBookingFormController as ctrl\" class=\"timebookings-edit\"><h2>{{ ctrl.isNew() ? 'Arbeitszeit erfassen' : 'Arbeitszeit bearbeiten' }}</h2><hr><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><form name=\"timebookingForm\" class=\"form-horizontal\" novalidate><div class=\"row\"><div class=\"col-xs-4\"><div class=\"row\"><tl-validate target=\"timebookingForm.employee\" label-text=\"'Person' | translate\" css-value=\"col-xs-8\" css-label=\"col-xs-4\" validate-now=\"ctrl.triggerValidation\" required class=\"form-value\"><div class=\"row\"><ui-select required name=\"employee\" ng-model=\"ctrl.employee\" class=\"\"><ui-select-match placeholder=\"{{'Wählen...' | translate}}\">{{$select.selected.firstName}}&nbsp;{{$select.selected.lastName}}</ui-select-match><ui-select-choices repeat=\"employee in ctrl.searchedEmployees track by $index\" refresh=\"ctrl.searchEmployee($select.search)\"><div ng-bind-html=\"employee.firstName + ' ' + employee.lastName  | highlight: $select.search\"></div></ui-select-choices></ui-select></div></tl-validate></div><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><div class=\"row\"><tl-validate target=\"timebookingForm.project\" label-text=\"'Projekt' | translate\" css-value=\"col-xs-8\" css-label=\"col-xs-4\" validate-now=\"ctrl.triggerValidation\" required class=\"form-value\"><div class=\"row\"><ui-select required name=\"project\" ng-model=\"ctrl.project\" class=\"\"><ui-select-match placeholder=\"{{'Wählen...' | translate}}\">{{$select.selected.name}}</ui-select-match><ui-select-choices repeat=\"project in ctrl.searchedProjects track by $index\" refresh=\"ctrl.searchProject($select.search)\"><div ng-bind-html=\"project.name | highlight: $select.search\"></div></ui-select-choices></ui-select></div></tl-validate></div><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><div class=\"row\"><tl-validate target=\"timebookingForm.entryType\" label-text=\"'Typ' | translate\" css-value=\"col-xs-8\" css-label=\"col-xs-4\" validate-now=\"ctrl.triggerValidation\" required class=\"form-value\"><div class=\"row\"><ui-select required name=\"entryType\" ng-model=\"ctrl.entryType\" class=\"\"><ui-select-match placeholder=\"{{'Wählen...' | translate}}\">{{$select.selected.name}}</ui-select-match><ui-select-choices repeat=\"type in ctrl.searchedTypes track by $index\" refresh=\"ctrl.searchType($select.search)\"><div ng-bind-html=\"type.name\"></div></ui-select-choices></ui-select></div></tl-validate></div><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><div class=\"row timeentry\"><tl-validate target=\"timebookingForm.fromDate\" label-text=\"'Von' | translate\" css-value=\"col-xs-8\" css-label=\"col-xs-4\" validate-now=\"ctrl.triggerValidation\" class=\"form-value col-xs-12 timebookings-timeentry\" required><div class=\"input-group\"><input id=\"from\" name=\"fromDate\" ng-model=\"ctrl.fromValue\" type=\"text\" class=\"form-control date\" min-date=\"ctrl.minDate\" current-text=\"Heute\" clear-text=\"Löschen\" close-text=\"Schliessen\" placeholder=\"Datum\" datepicker-popup view-format required is-open=\"ctrl.service.calendarSettings.fromIsOpen\"> <button type=\"button\" class=\"btn btn-default\" ng-click=\"ctrl.service.openCalendar($event, 'from')\"><i class=\"glyphicon glyphicon-th-list\"></i></button></div></tl-validate><div class=\"time-picker\"><timepicker ng-model=\"ctrl.fromTimeValue\" show-meridian=\"false\"></timepicker></div></div><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><div class=\"row timeentry\"><tl-validate target=\"timebookingForm.toDate\" label-text=\"'Bis' | translate\" css-value=\"col-xs-8\" css-label=\"col-xs-4\" validate-now=\"ctrl.triggerValidation\" class=\"form-value col-xs-12 timebookings-timeentry\" required><div class=\"input-group\"><input id=\" to\" name=\"toDate\" ng-model=\"ctrl.toValue\" type=\"text\" class=\"form-control date\" min-date=\"ctrl.minDate\" current-text=\"Heute\" clear-text=\"Löschen\" close-text=\"Schliessen\" placeholder=\"Datum\" datepicker-popup view-format required is-open=\"ctrl.service.calendarSettings.toIsOpen\"> <button type=\"button\" class=\"btn btn-default\" ng-click=\"ctrl.service.openCalendar($event, 'to')\"><i class=\"glyphicon glyphicon-th-list\"></i></button></div></tl-validate><div class=\"time-picker\"><timepicker ng-model=\"ctrl.toTimeValue\" show-meridian=\"false\"></timepicker></div></div><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><div class=\"row timeentry\"><tl-validate target=\"timebookingForm.description\" label-text=\"'Bemerkung' | translate\" css-value=\"col-xs-8\" css-label=\"col-xs-4\" validate-now=\"ctrl.triggerValidation\" class=\"form-value col-xs-12 timebookings-timeentry\" required><textarea class=\"form-control\" name=\"description\" type=\"text\" ng-model=\"ctrl.comment\"></textarea></tl-validate></div><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><div class=\"row\"><div class=\"col-xs-12\"><div class=\"btn btn-default pull-left\" ui-sref=\"tr.timebookings\">Zurück</div><div class=\"pull-left\">&nbsp;</div><div class=\"btn btn-default pull-left\" ng-click=\"ctrl.save();\">Speichern</div><div class=\"pull-left\">&nbsp;</div><div class=\"btn btn-default pull-left\" ng-click=\"ctrl.remove();\" ng-hide=\"ctrl.isNew()\">Löschen</div></div></div></div></div></form></div>"
  );


  $templateCache.put('Client/Views/timebookings.html',
    "<div ng-controller=\"TimeBookingController as ctrl\"><!-- side navigation --><ui-view class=\"detail-slide\"></ui-view><h2>Arbeitszeiterfassung</h2><hr><div class=\"row\"><form class=\"col-md-12\" ng-submit=\"ctrl.search()\"><div class=\"row\"><div class=\"col-md-3\"><input type=\"text\" placeholder=\"Person\" ng-model=\"ctrl.personValue\" typeahead-on-select=\"ctrl.selected($item, $model, $label)\" typeahead=\"p.label as p.label for p in ctrl.persons | filter:$viewValue | limitTo:8\" class=\"form-control\"></div><div class=\"col-md-2\"><p class=\"input-group\"><input type=\"text\" class=\"form-control\" placeholder=\"Von\" current-text=\"Heute\" clear-text=\"Löschen\" close-text=\"Schliessen\" datepicker-popup=\"{{ctrl.dateFormat}}\" ng-model=\"ctrl.fromValue\" is-open=\"ctrl.calendarSettings.fromIsOpen\"> <span class=\"input-group-btn\"><button type=\"button\" class=\"btn btn-default\" ng-click=\"ctrl.openCalendar($event, 'from')\"><i class=\"glyphicon glyphicon-th-list\"></i></button></span></p></div><div class=\"col-md-2\"><p class=\"input-group\"><input type=\"text\" class=\"form-control\" placeholder=\"Bis\" current-text=\"Heute\" clear-text=\"Löschen\" close-text=\"Schliessen\" datepicker-popup=\"{{ctrl.dateFormat}}\" ng-model=\"ctrl.toValue\" is-open=\"ctrl.calendarSettings.toIsOpen\"> <span class=\"input-group-btn\"><button type=\"button\" class=\"btn btn-default\" ng-click=\"ctrl.openCalendar($event, 'to')\"><i class=\"glyphicon glyphicon-th-list\"></i></button></span></p></div><div class=\"col-md-2\"><select class=\"form-control\" ng-model=\"ctrl.typeFilter\" ng-options=\"t.id as t.name for t in ctrl.metaData.types\"><option value=\"\">Typ wählen</option></select></div><div class=\"col-md-2\"><select class=\"form-control\" ng-model=\"ctrl.stateFilter\" ng-options=\"s.id as s.name for s in ctrl.metaData.states\"><option value=\"\">Status Wählen</option></select></div></div><div class=\"row\"><div class=\"col-md-1\"><button type=\"submit\" class=\"btn btn-default\">Suchen</button></div><div class=\"col-md-1\"><div class=\"btn btn-default\" ui-sref=\"tr.timebookings.side.add\">Erstellen</div></div><div class=\"col-md-1\"><input type=\"checkbox\" ng-model=\"ctrl.showConfirmation\" name=\"visum\"> Visum</div></div></form></div><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><div class=\"row\"><div class=\"col-md-12 tr-list-head\"><div class=\"row\"><div class=\"col-md-1\">Person</div><div class=\"col-md-1\">Projekt</div><div class=\"col-md-2\">Start</div><div class=\"col-md-2\">Stop</div><div class=\"col-md-2\">Typ</div><div class=\"col-md-2\">Status</div><div class=\"col-md-1\"><span ng-show=\"ctrl.showConfirmation\">Visum</span></div><div class=\"col-md-1\"></div></div></div><div infinite-scroll=\"ctrl.search.getMore();\" infinite-scroll-distance=\"1\" class=\"tr-list\"><div ng-repeat=\"entry in ctrl.searchResult\" class=\"col-md-12 tr-list-item\" ng-style=\"{'background': ctrl.getBookingBackground(entry) }\"><div class=\"row\" ng-click=\"ctrl.selectEntry(entry)\"><div class=\"col-md-1 tr-ellipsis\">{{entry.employeeName}}</div><div class=\"col-md-1 tr-ellipsis\">{{entry.projectName}}</div><div class=\"col-md-2\">{{entry.start | date : 'dd.MM.yyyy - H:mm'}}</div><div class=\"col-md-2\">{{entry.stop | date : 'dd.MM.yyyy - H:mm'}}</div><div class=\"col-md-2\">{{entry.typeName}}</div><div class=\"col-md-2\" ng-style=\"{'color': ctrl.getStateColor(entry.state) }\">{{ctrl.getStateById(entry.state)}}</div><div class=\"col-md-1\"><input type=\"checkbox\" ng-show=\"ctrl.showConfirmation\" ng-model=\"entry.confirmed\" ng-change=\"ctrl.setConfirmed(entry)\"></div><div class=\"col-md-1\"><a ui-sref=\"tr.timebookings.side.edit({id:entry.id})\">Edit</a></div><div class=\"tr-list-selector-left\"></div><div class=\"tr-list-selector-right\"></div></div></div></div></div><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div></div>"
  );


  $templateCache.put('Client/Views/timesheet/templates/timesheetAvailabilities.html',
    "<div class=\"unavailability-section\"><span ng-if=\"!isOpen\" ng-click=\"toggleExpand()\" class=\"glyphicon glyphicon-plus-sign expansioon-button\" aria-hidden=\"true\"></span> <span ng-if=\"isOpen\" ng-click=\"toggleExpand()\" class=\"glyphicon glyphicon-minus-sign expansioon-button\" aria-hidden=\"true\"></span> <span class=\"expansion-label\" translate>Details</span> <span></span><div class=\"un-availabilities\" ng-repeat=\"unAvailability in availabilityEntryTypes | orderBy:'abbreviation'\"><span>{{unAvailability.name}}</span></div></div>"
  );


  $templateCache.put('Client/Views/timesheet/templates/timesheetDayCellTemplate.html',
    "<div class=\"days-column\" ng-style=\"{'width': columnWidth + 'px', 'background-color': isWeekend ? '#EBEBEB' : ''}\"><span class=\"planned-amount\">{{timeEntry.planned | minsToHours | tlDecimalPlaces:2}}</span> <span class=\"done\"><span class=\"threshold\" ng-show=\"breachedThreshold()\" ng-style=\"{'background-color' : selectedThreshold.color}\"></span> <span class=\"done-amount\">{{timeEntry.done | minsToHours | tlDecimalPlaces:2}}</span></span><div class=\"un-availabilities\"><div class=\"un-availability\" ng-repeat=\"availabilityTimeEntry in timeEntry.availabilityTimeEntries | orderBy:'abbreviation'\"><span>{{availabilityTimeEntry.mins | minsToHours | tlDecimalPlaces:2}}</span></div></div></div>"
  );


  $templateCache.put('Client/Views/timesheet/templates/timesheetEmployeeCellTemplate.html',
    "<div class=\"employee-column\" ng-style=\"{'width': columnWidth + 'px'}\"><span class=\"employee-name\">{{employee.name}}</span> <span class=\"planned-label\" translate>Geplant</span> <span class=\"done-label\" translate>Geleistet</span><timesheet-availabilities employee=\"employee\" row-height=\"rowHeight\" row-height-expanded=\"rowHeightExpanded\" row-number=\"rowNumber\" availability-entry-types=\"availabilityEntryTypes\" external-scope=\"externalScope\"></timesheet-availabilities></div>"
  );


  $templateCache.put('Client/Views/timesheet/templates/timesheetTotalCellTemplate.html',
    "<div class=\"total-month-column\" ng-style=\"{'width': columnWidth + 'px'}\"><span class=\"total-planned-amount\">{{employee.totalMonthPlanned | minsToHours | tlDecimalPlaces:2}}</span> <span class=\"done\"><span class=\"threshold\" ng-show=\"breachedThreshold()\" ng-style=\"{'background-color' : selectedThreshold.color}\"></span> <span class=\"total-done-amount\">{{employee.totalMonthDone | minsToHours | tlDecimalPlaces:2}}</span></span> <span class=\"total-unavailable-amount\">{{employee.totalMonthAvailabilityEntries | minsToHours | tlDecimalPlaces:2}}</span><div class=\"un-availabilities-summary\"><div class=\"un-availabilities\" ng-repeat=\"entryType in availabilityEntryTypes | orderBy:'abbreviation'\"><span>{{employee.totalMonthAvailabilityFor(entryType) | minsToHours | tlDecimalPlaces:2}}</span></div></div></div>"
  );


  $templateCache.put('Client/Views/timesheet/timesheet.html',
    "<div ng-controller=\"TimeSheetController as ctrl\" class=\"timesheet\"><div class=\"project-search\"><div class=\"project-search-details\" ng-style=\"{'width': ctrl.timesheetData.employeeColumnWidth + 'px'}\"><div class=\"projectName\"><span translate>Projektname</span> <span translate>Monat</span></div></div><div class=\"project-search-criteria\"><div class=\"row\"><div class=\"col-md-4\"><ui-select ng-model=\"ctrl.selectedProject\"><ui-select-match placeholder=\"{{'Suche...' | translate}}\">{{$select.selected.Name}}</ui-select-match><ui-select-choices repeat=\"project in ctrl.searchedProjects track by $index\" refresh=\"ctrl.searchProjects($select.search)\"><div ng-bind-html=\"project.name | highlight: $select.search\"></div></ui-select-choices></ui-select></div><div class=\"col-md-3 search\"><div ng-show=\"ctrl.isSearchingProjects\" class=\"ui-select-searching\"></div><button ng-click=\"ctrl.tryLoadData()\" class=\"btn btn-default search-button\">Suchen</button></div></div><!----><div class=\"row\"><div class=\"col-md-4\"><div class=\"input-group\"><input name=\"date\" type=\"text\" ng-model=\"ctrl.selectedDate\" class=\"form-control datepicker\" datepicker-popup=\"MM.yyyy\" view-format=\"MM.yyyy\" is-open=\"ctrl.datePickerStates['opened1']\" current-text=\"Heute\" clear-text=\"Löschen\" close-text=\"Schliessen\" date-disabled=\"day\" min-mode=\"'month'\" datepicker-mode=\"'month'\" datepicker-options=\"{minMode: 'month',datepickerMode: 'month'}\" ng-change=\"ctrl.selectDate(ctrl.selectedDate)\"> <span class=\"input-group-btn\"><button type=\"button\" class=\"btn btn-default\" ng-click=\"ctrl.openDatepicker($event, 'opened1')\"><i class=\"glyphicon glyphicon-th-list\"></i></button></span></div></div></div></div></div><div class=\"row timesheet-data\" tl-window-height=\"150\" tl-window-height-container-class=\".timesheet\" block-ui=\"timesheetGrid\"><div ng-if=\"ctrl.timesheetData.timesheet\" class=\"col-md-12 timesheet-data-container\" scroll-manager scroll-sender><div class=\"timesheet-employees\" ng-style=\"{'min-width': ctrl.timesheetData.employeeColumnWidth + 'px'}\"><div class=\"header-column\"><span>{{'Mitarbeiter' | translate}}</span></div><div class=\"verticle-scrollable\" vertical-scroll-receiver tl-window-height=\"190\" tl-window-height-container-class=\".timesheet\"><div ng-class=\"'timesheet-row-' + {{$index}}\" class=\"timesheet-employee-row timesheet-row\" ng-repeat=\"employee in ctrl.timesheetData.timesheet.timeSheetEmployees track by $index\" ng-style=\"{'height': ctrl.timesheetData.rowHeight + 'px'}\"><timesheet-employee-cell employee=\"employee\" column-width=\"ctrl.timesheetData.employeeColumnWidth\" availability-entry-types=\"ctrl.timesheetData.timesheet.availabilityEntryTypes\" row-height=\"ctrl.timesheetData.rowHeight\" row-height-expanded=\"ctrl.timesheetData.rowHeightExpanded\" row-number=\"$index\" external-scope=\"ctrl.$scope\"></timesheet-employee-cell></div></div></div><div class=\"timesheet-days\"><div class=\"header-column\" ng-style=\"{'min-width': ctrl.timesheetData.dayColumnWidth + 'px', 'background-color' : dayColumn.color}\" ng-repeat=\"dayColumn in ctrl.timesheetData.dayColumns\"><span>{{dayColumn.date | date:'EEE dd'}}</span></div><div class=\"horizontal-scrollable\" vertical-scroll-receiver tl-window-height=\"190\" tl-window-height-container-class=\".timesheet\"><div ng-class=\"'timesheet-row-' + {{$index}}\" class=\"timesheet-days-row timesheet-row\" ng-repeat=\"employee in ctrl.timesheetData.timesheet.timeSheetEmployees\" ng-style=\"{'height': ctrl.timesheetData.rowHeight + 'px'}\"><timesheet-day-cell time-entry=\"employee.timeEntry(dayColumn.date)\" is-weekend=\"ctrl.isWeekend($index + 1)\" column-width=\"ctrl.timesheetData.dayColumnWidth\" thresholds=\"ctrl.getDayThresholds()\" ng-repeat=\"dayColumn in ctrl.timesheetData.dayColumns track by $index\"></timesheet-day-cell></div></div></div><div class=\"timesheet-totals\" ng-style=\"{'min-width': ctrl.timesheetData.totalColumnWidth + 'px'}\"><div class=\"header-column\"><span>{{'Total' | translate}}</span></div><div class=\"verticle-scrollable\" vertical-scroll-receiver tl-window-height=\"190\" tl-window-height-container-class=\".timesheet\"><div ng-class=\"'timesheet-row-' + {{$index}}\" class=\"timesheet-total-row timesheet-row\" ng-repeat=\"employee in ctrl.timesheetData.timesheet.timeSheetEmployees\" ng-style=\"{'height': ctrl.timesheetData.rowHeight + 'px'}\"><timesheet-total-cell employee=\"employee\" column-width=\"ctrl.timesheetData.totalColumnWidth\" thresholds=\"ctrl.getTotalMonthThresholds()\" availability-entry-types=\"ctrl.timesheetData.timesheet.availabilityEntryTypes\"></timesheet-total-cell></div></div></div><div scroll-sender tl-full-height style=\"width: 17px; position: absolute; right: 0; z-index: 100; overflow-y: auto\" tl-window-height=\"150\" tl-window-height-container-class=\".timesheet\"><div tl-height-of=\".verticle-scrollable\" tl-height-of-on-event=\"ctrl.rowExpansionEventName()\" tl-height-of-offset=\"20\" style=\"width: 17px\"></div></div></div></div></div><!-- ui-grid-pinning-->"
  );


  $templateCache.put('Client/Views/users.html',
    "<div ng-controller=\"UserController as ctrl\"><h2>Terminals</h2><hr><div class=\"col-md-7\"><div class=\"row\"><div class=\"col-md-8\"><div class=\"input-group\"><input type=\"text\" class=\"form-control\" ng-model=\"ctrl.user.search\" placeholder=\"Suche\"> <span class=\"input-group-btn\"><button class=\"btn btn-default\" type=\"button\" ng-click=\"ctrl.user.startSearch()\">Suchen</button></span></div></div><div class=\"col-md-4\"><div class=\"btn btn-default pull-right\" ng-click=\"ctrl.create()\"><i class=\"glyphicon glyphicon-plus\"></i>&nbsp;Erstellen</div></div></div><div class=\"tr-v-spacer\"></div><div class=\"tr-v-spacer\"></div><div class=\"row\" style=\"margin: 0px\" infinite-scroll=\"ctrl.user.loadMore();\" infinite-scroll-distance=\"1\"><div class=\"col-md-12 tr-list-head\"><div class=\"row\"><div class=\"col-md-1\"></div><div class=\"col-md-4\">Name</div><div class=\"col-md-3\">Typ</div><div class=\"col-md-4\">Aktiv</div></div></div><div class=\"tr-list\"><div class=\"col-md-12\" ng-show=\"ctrl.loading\"><div class=\"tr-v-spacer\"></div><div class=\"tr-list-loader\"><div id=\"floatingBarsG\"><div class=\"blockG\" id=\"rotateG_01\"></div><div class=\"blockG\" id=\"rotateG_02\"></div><div class=\"blockG\" id=\"rotateG_03\"></div><div class=\"blockG\" id=\"rotateG_04\"></div><div class=\"blockG\" id=\"rotateG_05\"></div><div class=\"blockG\" id=\"rotateG_06\"></div><div class=\"blockG\" id=\"rotateG_07\"></div><div class=\"blockG\" id=\"rotateG_08\"></div></div></div></div><div ng-repeat=\"user in ctrl.user.users\" class=\"col-md-12 tr-list-item\" ng-click=\"ctrl.select(user);\" ng-class=\"{'tr-list-item-selected':user.id == ctrl.selectedUser.id}\"><div class=\"row\"><div class=\"col-md-1\"><i class=\"glyphicon glyphicon-user\"></i></div><div class=\"col-md-4 tr-ellipsis\">{{user.userName}}</div><div class=\"col-md-3\"><span ng-show=\"user.userType==1\">Terminal</span> <span ng-show=\"user.userType==2\">Persönlich</span> <span ng-show=\"user.userType==0\">Administrator</span></div><div class=\"col-md-4\">{{ user.lastPing | date:'dd.MM.yyyy HH:mm:ss' }}</div><div class=\"tr-list-selector-left\"></div><div class=\"tr-list-selector-right\"></div></div></div></div></div></div><div class=\"col-md-4 col-md-offset-1 form-horizontal\" ng-show=\"ctrl.showForm\"><div class=\"row\"><h4 class=\"tr-col-form-title tr-ellipsis\">{{ctrl.selectedUser.userName}}</h4><div class=\"form-group\"><label class=\"col-md-4 control-label\" for=\"name\">Name</label><div class=\"col-md-8\"><input class=\"form-control\" id=\"name\" type=\"text\" ng-model=\"ctrl.selectedUser.userName\" maxlength=\"{{ctrl.nameMaxLength}}\"></div></div><div class=\"form-group\" ng-hide=\"ctrl.selectedUser.userType === 0\"><label class=\"col-md-4 control-label\" for=\"tid\">Id</label><div class=\"col-md-8\"><input class=\"form-control\" id=\"tid\" type=\"text\" ng-model=\"ctrl.selectedUser.terminalid\" maxlength=\"{{ctrl.idMaxLength}}\"></div></div><div class=\"form-group\"><label class=\"col-md-4 control-label\" for=\"type\">Typ</label><div class=\"col-md-8\" ng-hide=\"ctrl.selectedUser.userType === 0\"><select id=\"type\" class=\"form-control\" ng-model=\"ctrl.selectedUser.userType\"><option value=\"1\">Terminal</option><option value=\"2\">Persönlich</option></select></div><div class=\"col-md-8\" ng-show=\"ctrl.selectedUser.userType === 0\"><p style=\"margin-top: 6px; font-weight: bold\">Administrator</p></div></div><div class=\"form-group\" ng-show=\"ctrl.selectedUser.userType == 1\"><label class=\"col-md-4 control-label\" for=\"location\">Standort</label><div class=\"col-md-8\"><select id=\"location\" class=\"form-control\" ng-model=\"ctrl.selectedUser.locationId\"><option value=\"0\">Wählen...</option><option value=\"{{l.key}}\" ng-repeat=\"l in ctrl.locations\">{{l.name}}</option></select></div></div><div class=\"form-group\" ng-show=\"ctrl.selectedUser.userType == 2\"><label class=\"col-md-4 control-label\" for=\"person\">Person</label><div class=\"col-md-8\"><select id=\"person\" class=\"form-control\" ng-model=\"ctrl.selectedUser.personId\"><option value=\"0\">Wählen...</option><option value=\"{{p.id}}\" ng-repeat=\"p in ctrl.persons\">{{p.firstName}} {{p.lastName}}</option></select></div></div><div class=\"form-group\" ng-hide=\"ctrl.editPassword || ctrl.newUser\"><div class=\"col-md-offset-4 col-md-8\"><p><a ng-click=\"ctrl.changePw()\">Passwort ändern</a></p><p ng-show=\"ctrl.authentication.appUser.isAdmin\"><a ng-click=\"ctrl.resetPw();\">Passwort zurücksetzen</a></p></div></div><div class=\"form-group\" ng-show=\"ctrl.editPassword\"><label class=\"col-md-4 control-label\" for=\"apw\">Altes Pw</label><div class=\"col-md-8\"><input class=\"form-control\" id=\"apw\" type=\"password\" ng-model=\"ctrl.selectedUser.oldPassword\"></div></div><div class=\"form-group\" ng-show=\"ctrl.editPassword || ctrl.newUser\"><label class=\"col-md-4 control-label\" for=\"pw\">Passwort</label><div class=\"col-md-8\"><input class=\"form-control\" id=\"pw\" type=\"password\" ng-model=\"ctrl.selectedUser.password\" maxlength=\"{{ctrl.passwordMaxLength}}\"></div></div><div class=\"form-group\" ng-show=\"ctrl.editPassword || ctrl.newUser\"><label class=\"col-md-4 control-label\" for=\"pwc\">Bestätigen</label><div class=\"col-md-8\"><input class=\"form-control\" id=\"pwc\" type=\"password\" ng-model=\"ctrl.selectedUser.passwordConfirm\" maxlength=\"{{ctrl.passwordMaxLength}}\"></div></div><div class=\"form-group\" ng-hide=\"!ctrl.editPassword || ctrl.newUser\"><div class=\"col-md-offset-4 col-md-8\" ng-click=\"ctrl.stopChangePw()\"><a>Abbrechen</a></div></div><div class=\"form-group\"><div class=\"col-md-4\"><div class=\"btn btn-default\" ng-click=\"ctrl.save()\">Speichern</div></div><div class=\"col-md-4\"><div class=\"btn btn-default\" ng-hide=\"ctrl.newUser || ctrl.selectedUser.userType === 0\" ng-click=\"ctrl.delete()\">Löschen</div></div></div></div></div></div>"
  );

}]);
