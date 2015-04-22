/// <reference path="../typings/tsd.d.ts" />
declare module TimeRecorder.Web.Data {
    interface IVersionVm {
        key: number;
        version: number;
        versionName: string;
        versionCode: string;
        isBeta: boolean;
        platform: string;
    }
    interface IEmployeeCm {
        employeeId: string;
        externalId: string;
        profileId?: number;
        userId: string;
        userName: string;
        emergencyPin: string;
        bookingLock?: Date;
        claimConfigurations: Data.IFeatureConfigurationVm[];
        lastName: string;
        firstName: string;
        email: string;
        telephone: string;
        id: number;
        timestamp: Date;
        addressId?: number;
        city: string;
        country: string;
        countryCode: string;
        street: string;
        streetNumber: string;
        zipCode: string;
    }
    interface IPersonVm {
        id: number;
        employeeId: string;
        firstName: string;
        lastName: string;
        profileId?: number;
        userId: string;
        userName: string;
        emergencyPin: string;
        externalId: string;
        bookingLock?: Date;
        claimConfigurations: Data.IFeatureConfigurationVm[];
    }
    interface ISearchIdSet {
        ids: number[];
    }
    interface IFeatureConfigurationVm {
        configurationJson: string;
        featureClaim: Data.IFeatureClaimVm;
    }
    interface IFeatureClaimVm {
        claim: string;
        description: string;
        id: number;
        name: string;
        fields: Data.IFeatureClaimFieldVm[];
    }
    interface IFeatureClaimFieldVm {
        name: string;
        fieldType: EFieldType;
    }
    interface IAddressCm {
        id: number;
        city: string;
        country: string;
        countryCode: string;
        street: string;
        streetNumber: string;
        zipCode: string;
        name: string;
        timestamp: number;
    }
    interface ITimesheetCm {
        timesheetEmployees: Data.ITimesheetEmployeeCm[];
        thresholds: Data.ITimesheetThresholdCm[];
        timeEntryTypeCms: Data.ITimesheetTimeEntryTypeCm[];
    }
    interface ITimesheetSearchCriteria {
        projectId: number;
        from: Date;
        to: Date;
    }
    interface ITimesheetEmployeeCm {
        id: number;
        firstName: string;
        lastName: string;
        timeEntries: Data.ITimesheetTimeEntryCm[];
    }
    interface ITimesheetThresholdCm {
        fromMins?: number;
        toMins?: number;
        colorCode: string;
        type: EThresholdType;
    }
    interface ITimesheetTimeEntryTypeCm {
        id: number;
        name: string;
        abbreviation: string;
    }
    interface ITimesheetTimeEntryCm {
        plannedMins: number;
        doneMins: number;
        date: Date;
        availabilityTimeEntries: Data.ITimesheetAvailabilityTimeEntryCm[];
    }
    interface ITimesheetAvailabilityTimeEntryCm {
        entryTypeId: number;
        mins: number;
    }
    interface IPdfGeneratorCriteria {
        html: string;
    }
    interface ITimeBookingCm {
        id?: number;
        employeeId: number;
        parentId?: number;
        confirmed: boolean;
        comment: string;
        projectId?: number;
        start: Date;
        stop?: Date;
        timeEntryTypeId: number;
        state: ETimeBookingState;
    }
    interface ITimeEntryTypeCm {
        id: number;
        name: string;
    }
    interface ITimeBookingMetaDataVm {
        persons: Data.ITimeBookingPersonVm[];
        projects: Data.ITimeBookingProjectVm[];
        types: Data.ITimeBookingTypeVm[];
        states: Data.ITimeBookingStateVm[];
    }
    interface ITimeBookingSearchParams {
        person: string;
        from?: Date;
        to?: Date;
        timeEntryTypeId?: number;
        state?: ETimeBookingState;
    }
    interface IIdsContainer {
        ids: number[];
    }
    interface ITimeBookingPersonVm {
        id: number;
        firstName: string;
        lastName: string;
    }
    interface ITimeBookingProjectVm {
        id: number;
        name: string;
    }
    interface ITimeBookingTypeVm {
        id: number;
        name: string;
    }
    interface ITimeBookingStateVm {
        id: number;
        name: string;
    }
    interface IKeyVaulePair {
        key: string;
        value: string;
    }
    interface IGlobalMessageVm {
        message: string;
        title: string;
        date?: Date;
        id: number;
        hasImage: boolean;
        image: Data.IPostedImage;
    }
    interface IPostedImage {
        type: string;
        name: string;
        size: number;
        bytes: string;
    }
    interface IPersonCm {
        lastName: string;
        firstName: string;
        email: string;
        telephone: string;
        id: number;
        timestamp: Date;
        addressId?: number;
        city: string;
        country: string;
        countryCode: string;
        street: string;
        streetNumber: string;
        zipCode: string;
    }
    interface IClientCm {
        id: number;
        name: string;
        mainContactId: number;
        addressId: number;
        timestamp: number;
        city: string;
        country: string;
        countryCode: string;
        street: string;
        streetNumber: string;
        zipCode: string;
    }
    interface IContactCm {
        clientId?: number;
        lastName: string;
        firstName: string;
        email: string;
        telephone: string;
        id: number;
        timestamp: Date;
        addressId?: number;
        city: string;
        country: string;
        countryCode: string;
        street: string;
        streetNumber: string;
        zipCode: string;
    }
    interface IProjectPersonVm {
        personId: number;
        name: string;
    }
    interface IProjectLocationVm {
        locationId: number;
        name: string;
    }
    interface IProjectCm {
        id: number;
        name: string;
        description: string;
        bookable: boolean;
        parentId?: number;
    }
    interface IProjectVm {
        id: number;
        name: string;
        description: string;
        bookable: boolean;
        explicit: boolean;
        planningUnit: boolean;
        hasChildren: boolean;
        persons: Data.IProjectPersonVm[];
        locations: Data.IProjectLocationVm[];
        children: Data.IProjectVm[];
        parent: Data.IProjectVm;
    }
    interface IExpenseCm {
        id: number;
        value: number;
        timestamp: number;
        date: Date;
        description: string;
        expenseTypeId: number;
        employeeId: number;
        visaEmployeeId?: number;
        visaTimestamp?: Date;
    }
    interface IExpenseTypeCm {
        id: number;
        name: string;
        description: string;
        validFrom?: Date;
        validTo?: Date;
        amountBased: boolean;
        timestamp: number;
        unitOfMeasure: string;
    }
    interface IExpensesSearchCm {
        skip?: number;
        take?: number;
        employeeId?: number;
        from?: Date;
        to?: Date;
    }
    interface IConfigVm {
        id: number;
        timeOut: number;
        imageId?: number;
    }
    interface ISaveConfigVm {
        timeOut: number;
        saveImage: boolean;
        bytes: string;
        fileName: string;
        fileType: string;
    }
    interface IProfileConfigVm {
        name: string;
        description: string;
        id: number;
        userCount: number;
        featureConfigurations: Data.IFeatureConfigurationVm[];
    }
    interface IWorkReportCm {
        externalWorkReport: Data.IExternalWorkReportCm;
        timeBookingIds: number[];
    }
    interface IExternalWorkReportCm {
        id: number;
        from: Date;
        to: Date;
        employeeSignatureImage: string;
        customerSignatureImage: string;
        signatureTimestamp?: Date;
        projectCompleted: boolean;
        projectId: number;
        signedContactId?: number;
        employeeId: number;
    }
    interface ISearchExternalWorkReportCm {
        id: number;
        from: Date;
        to: Date;
        signatureTimestamp?: Date;
        projectCompleted: boolean;
        projectId: number;
        employeeId: number;
        signedContactId?: number;
    }
    interface IExternalWorkReportSearchCriteria {
        employeeId?: number;
        projectId?: number;
        projectComplete?: boolean;
    }
    interface ISaldo {
        saldoType: ESaldoType;
        flexTimeHours: number;
        flexTimeMinutes: number;
        overTimeHours?: number;
        overTimeMinutes?: number;
        vacationDays: number;
    }
    interface IWorkObjectViewModel {
        id: string;
        name: string;
        parentId: string;
        reportable: boolean;
        explicit: boolean;
        badgeIds: string[];
    }
    interface IAppUser {
        profileId: string;
        appUserType: EAppUserType;
        person: Data.IPersonVm;
        location: Data.ILocationVm;
        appConfig: Data.IAppConfig;
        terminalId: string;
        isAdmin: boolean;
    }
    interface IUserVm {
        id: string;
        userName: string;
        userType: EAppUserType;
        locationId?: number;
        personId?: number;
        email: string;
        terminalid: string;
        password: string;
        oldPassword: string;
        passwordConfirm: string;
        lastPing?: Date;
    }
    interface IUserInfoViewModel {
        userName: string;
        hasRegistered: boolean;
        loginProvider: string;
    }
    interface IManageInfoViewModel {
        localLoginProvider: string;
        userName: string;
        logins: Data.IUserLoginInfoViewModel[];
        externalLoginProviders: Data.IExternalLoginViewModel[];
    }
    interface IExternalLoginViewModel {
        name: string;
        url: string;
        state: string;
    }
    interface ILoginViewModel {
        username: string;
        password: string;
        rememberMe: boolean;
    }
    interface IChangePasswordBindingModel {
        id: number;
        oldPassword: string;
        newPassword: string;
        confirmPassword: string;
    }
    interface ISetPasswordBindingModel {
        id: number;
        newPassword: string;
        confirmPassword: string;
    }
    interface IAddExternalLoginBindingModel {
        externalAccessToken: string;
    }
    interface IRemoveLoginBindingModel {
        loginProvider: string;
        providerKey: string;
    }
    interface IRegisterVm {
        id: number;
        userName: string;
        password: string;
        confirmPassword: string;
    }
    interface IRegisterExternalBindingModel {
        userName: string;
    }
    interface ILocationVm {
        key: number;
        locationId: string;
        name: string;
        userId: string;
        userName: string;
    }
    interface IAppConfig {
        bookingTimeout: number;
    }
    interface IUserLoginInfoViewModel {
        loginProvider: string;
        providerKey: string;
    }
    interface IMessage {
        id: number;
        head: string;
        body: string;
        authorName: string;
        timePassed: string;
    }
    interface ISentMessage {
        messageId: number;
        recipients: Data.IMessageRecipient[];
        authorId?: number;
        body: string;
        head: string;
        timeEllapsed: string;
        timeSent: Date;
        readByAll: boolean;
    }
    interface ISaveMessage {
        head: string;
        body: string;
        authorId: number;
        recipientIds: number[];
    }
    interface IMessageRecipient {
        name: string;
        messageRead: boolean;
    }
    interface ICheckUserResult {
        presenceStatus: boolean;
        angemeldeterArbeitsgang: string;
    }
    interface ITimeEntryVm {
        id: number;
        badgeId: string;
        employeeName: string;
        employeeId: number;
        locationId: number;
        locationName: string;
        type: string;
        bookedTime: Date;
        terminalId: string;
        transmitted: boolean;
        objectId: string;
        errorCode: number;
        errorMessage: string;
        canEdit: boolean;
    }
    interface ITimeEntryModel {
        terminalId: string;
        timeEntryType: string;
        objectId: string;
        positionId: string;
        employeeId: string;
        comment: string;
        elapsedSeconds: number;
    }
    interface ITimeEntryCollection {
        timeEntries: Data.ITimeEntryModel[];
    }
    interface ITimeEntrySearchVm {
        personId?: number;
        personSearch: string;
        from?: Date;
        to?: Date;
        state: number;
        type: string;
        skip: number;
        take: number;
    }
    enum EPlatform {
        Android = 0,
        iOS = 1,
        WindowsPhone = 2,
    }
    enum EFieldType {
        Number = 1,
        String = 2,
        Boolean = 3,
        DateTime = 4,
    }
    enum EThresholdType {
        DailyDone = 0,
        TotalMonthDone = 1,
    }
    enum ETimeBookingState {
        Open = 0,
        Complete = 1,
        Faulted = 2,
    }
    enum EProjectFlag {
        Bookable = 1,
        Explicit = 2,
        PlanningUnit = 4,
    }
    enum ESaldoType {
        DefaultCh = 0,
        DefaultDe = 1,
        Enzler = 2,
    }
    enum EAppUserType {
        WebOnly = 0,
        Terminal = 1,
        Personal = 2,
    }
    enum EAuftragVerificationStatus {
        Success = 0,
        ArbeitsgangNotValid = 1,
        AuftragNotValid = 2,
        PositionNotValid = 4,
        ArbeitsgangNotExist = 8,
        AuftragNotExist = 16,
        PositionNotExist = 32,
        CommunicationError = -1,
    }
    interface VersionGetLatestPlistParams {
        versionCode1: number;
        versionCode2: number;
        versionCode3: number;
    }
    interface VersionGetLatestVersionNumberParams {
        includeBetas: boolean;
        platform?: EPlatform;
    }
    interface VersionGetVersionsEnumerableParams {
        $skip?: number;
        $top?: number;
        $orderBy?: string;
        $filter?: string;
    }
    interface IVersionResource {
        getLatestPlistRequest(params: VersionGetLatestPlistParams): Triarc.Data.DataRequest<any>;
        getLatestPlist(params: VersionGetLatestPlistParams): ng.IPromise<Triarc.Data.DataResponse<any>>;
        getLatestVersionNumberRequest(params: VersionGetLatestVersionNumberParams): Triarc.Data.DataRequest<IVersionVm>;
        getLatestVersionNumber(params: VersionGetLatestVersionNumberParams): ng.IPromise<Triarc.Data.DataResponse<IVersionVm>>;
        getServerVersionRequest(): Triarc.Data.DataRequest<string>;
        getServerVersion(): ng.IPromise<Triarc.Data.DataResponse<string>>;
        getVersionsMultipleRequest(params: VersionGetVersionsEnumerableParams): Triarc.Data.DataRequest<IVersionVm[]>;
        getVersionsMultiple(params: VersionGetVersionsEnumerableParams): ng.IPromise<Triarc.Data.DataResponse<IVersionVm[]>>;
        newVersionVm(): IVersionVm;
    }
    class VersionResource implements IVersionResource {
        private $requestSender;
        constructor($requestSender: any);
        getLatestPlistRequest(params: any): Triarc.Data.DataRequest<any>;
        getLatestPlist(params: any): any;
        getLatestVersionNumberRequest(params: any): Triarc.Data.DataRequest<IVersionVm>;
        getLatestVersionNumber(params: any): any;
        getServerVersionRequest(): Triarc.Data.DataRequest<string>;
        getServerVersion(): any;
        getVersionsMultipleRequest(params: any): Triarc.Data.DataRequest<IVersionVm[]>;
        getVersionsMultiple(params: any): any;
        newVersionVm(): IVersionVm;
    }
    interface ImageGetParams {
        id: number;
    }
    interface IImageResource {
        getRequest(params: ImageGetParams): Triarc.Data.DataRequest<any>;
        get(params: ImageGetParams): ng.IPromise<Triarc.Data.DataResponse<any>>;
    }
    class ImageResource implements IImageResource {
        private $requestSender;
        constructor($requestSender: any);
        getRequest(params: any): Triarc.Data.DataRequest<any>;
        get(params: any): any;
    }
    interface EmployeeGetEmployeeByIdParams {
        id: string;
    }
    interface EmployeeGetEmployeesByIdEnumerableParams {
        $skip?: number;
        $top?: number;
        $orderBy?: string;
        $filter?: string;
    }
    interface EmployeeGetEnumerableParams {
        $skip?: number;
        $top?: number;
        $orderBy?: string;
        $filter?: string;
    }
    interface EmployeeSearchEnumerableParams {
        search: string;
        skip: number;
        take: number;
        $skip?: number;
        $top?: number;
        $orderBy?: string;
        $filter?: string;
    }
    interface EmployeeDeleteParams {
        id: number;
    }
    interface IEmployeeResource {
        getEmployeeByIdRequest(params: EmployeeGetEmployeeByIdParams): Triarc.Data.DataRequest<IEmployeeCm>;
        getEmployeeById(params: EmployeeGetEmployeeByIdParams): ng.IPromise<Triarc.Data.DataResponse<IEmployeeCm>>;
        getEmployeesByIdMultipleRequest(params: EmployeeGetEmployeesByIdEnumerableParams, data: ISearchIdSet): Triarc.Data.DataRequest<IEmployeeCm[]>;
        getEmployeesByIdMultiple(params: EmployeeGetEmployeesByIdEnumerableParams, data: ISearchIdSet): ng.IPromise<Triarc.Data.DataResponse<IEmployeeCm[]>>;
        getMultipleRequest(params: EmployeeGetEnumerableParams): Triarc.Data.DataRequest<IEmployeeCm[]>;
        getMultiple(params: EmployeeGetEnumerableParams): ng.IPromise<Triarc.Data.DataResponse<IEmployeeCm[]>>;
        searchMultipleRequest(params: EmployeeSearchEnumerableParams): Triarc.Data.DataRequest<IPersonVm[]>;
        searchMultiple(params: EmployeeSearchEnumerableParams): ng.IPromise<Triarc.Data.DataResponse<IPersonVm[]>>;
        putRequest(data: IPersonVm): Triarc.Data.DataRequest<any>;
        put(data: IPersonVm): ng.IPromise<Triarc.Data.DataResponse<any>>;
        deleteRequest(params: EmployeeDeleteParams): Triarc.Data.DataRequest<any>;
        delete(params: EmployeeDeleteParams): ng.IPromise<Triarc.Data.DataResponse<any>>;
        newEmployeeCm(): IEmployeeCm;
        newPersonVm(): IPersonVm;
        newSearchIdSet(): ISearchIdSet;
        newFeatureClaimVm(): IFeatureClaimVm;
    }
    class EmployeeResource implements IEmployeeResource {
        private $requestSender;
        constructor($requestSender: any);
        getEmployeeByIdRequest(params: any): Triarc.Data.DataRequest<IEmployeeCm>;
        getEmployeeById(params: any): any;
        getEmployeesByIdMultipleRequest(params: any, data: any): Triarc.Data.DataRequest<IEmployeeCm[]>;
        getEmployeesByIdMultiple(params: any, data: any): any;
        getMultipleRequest(params: any): Triarc.Data.DataRequest<IEmployeeCm[]>;
        getMultiple(params: any): any;
        searchMultipleRequest(params: any): Triarc.Data.DataRequest<IPersonVm[]>;
        searchMultiple(params: any): any;
        putRequest(data: any): Triarc.Data.DataRequest<any>;
        put(data: any): any;
        deleteRequest(params: any): Triarc.Data.DataRequest<any>;
        delete(params: any): any;
        newEmployeeCm(): IEmployeeCm;
        newPersonVm(): IPersonVm;
        newSearchIdSet(): ISearchIdSet;
        newFeatureClaimVm(): IFeatureClaimVm;
    }
    interface AddressSearchAddressesEnumerableParams {
        searchString: string;
        $skip?: number;
        $top?: number;
        $orderBy?: string;
        $filter?: string;
    }
    interface AddressGetEnumerableParams {
        $skip?: number;
        $top?: number;
        $orderBy?: string;
        $filter?: string;
    }
    interface AddressGetParams {
        id: number;
    }
    interface IAddressResource {
        searchAddressesMultipleRequest(params: AddressSearchAddressesEnumerableParams): Triarc.Data.DataRequest<IAddressCm[]>;
        searchAddressesMultiple(params: AddressSearchAddressesEnumerableParams): ng.IPromise<Triarc.Data.DataResponse<IAddressCm[]>>;
        getMultipleRequest(params: AddressGetEnumerableParams): Triarc.Data.DataRequest<IAddressCm[]>;
        getMultiple(params: AddressGetEnumerableParams): ng.IPromise<Triarc.Data.DataResponse<IAddressCm[]>>;
        getRequest(params: AddressGetParams): Triarc.Data.DataRequest<IAddressCm>;
        get(params: AddressGetParams): ng.IPromise<Triarc.Data.DataResponse<IAddressCm>>;
        newAddressCm(): IAddressCm;
    }
    class AddressResource implements IAddressResource {
        private $requestSender;
        constructor($requestSender: any);
        searchAddressesMultipleRequest(params: any): Triarc.Data.DataRequest<IAddressCm[]>;
        searchAddressesMultiple(params: any): any;
        getMultipleRequest(params: any): Triarc.Data.DataRequest<IAddressCm[]>;
        getMultiple(params: any): any;
        getRequest(params: any): Triarc.Data.DataRequest<IAddressCm>;
        get(params: any): any;
        newAddressCm(): IAddressCm;
    }
    interface ITimesheetResource {
        getTimesheetRequest(data: ITimesheetSearchCriteria): Triarc.Data.DataRequest<ITimesheetCm>;
        getTimesheet(data: ITimesheetSearchCriteria): ng.IPromise<Triarc.Data.DataResponse<ITimesheetCm>>;
        newTimesheetCm(): ITimesheetCm;
        newTimesheetSearchCriteria(): ITimesheetSearchCriteria;
    }
    class TimesheetResource implements ITimesheetResource {
        private $requestSender;
        constructor($requestSender: any);
        getTimesheetRequest(data: any): Triarc.Data.DataRequest<ITimesheetCm>;
        getTimesheet(data: any): any;
        newTimesheetCm(): ITimesheetCm;
        newTimesheetSearchCriteria(): ITimesheetSearchCriteria;
    }
    interface IOperationResource {
        triggerImportPersonalDataRequest(): Triarc.Data.DataRequest<any>;
        triggerImportPersonalData(): ng.IPromise<Triarc.Data.DataResponse<any>>;
        triggerImportObjectDataRequest(): Triarc.Data.DataRequest<any>;
        triggerImportObjectData(): ng.IPromise<Triarc.Data.DataResponse<any>>;
    }
    class OperationResource implements IOperationResource {
        private $requestSender;
        constructor($requestSender: any);
        triggerImportPersonalDataRequest(): Triarc.Data.DataRequest<any>;
        triggerImportPersonalData(): any;
        triggerImportObjectDataRequest(): Triarc.Data.DataRequest<any>;
        triggerImportObjectData(): any;
    }
    interface IPdfGeneratorResource {
        generatePdfRequest(data: IPdfGeneratorCriteria): Triarc.Data.DataRequest<any>;
        generatePdf(data: IPdfGeneratorCriteria): ng.IPromise<Triarc.Data.DataResponse<any>>;
        newPdfGeneratorCriteria(): IPdfGeneratorCriteria;
    }
    class PdfGeneratorResource implements IPdfGeneratorResource {
        private $requestSender;
        constructor($requestSender: any);
        generatePdfRequest(data: any): Triarc.Data.DataRequest<any>;
        generatePdf(data: any): any;
        newPdfGeneratorCriteria(): IPdfGeneratorCriteria;
    }
    interface TimeBookingSearchEnumerableParams {
        $skip?: number;
        $top?: number;
        $orderBy?: string;
        $filter?: string;
    }
    interface TimeBookingGetParams {
        id: number;
    }
    interface TimeBookingGetAvailableEntryTypesEnumerableParams {
        $skip?: number;
        $top?: number;
        $orderBy?: string;
        $filter?: string;
    }
    interface TimeBookingDeleteParams {
        id: number;
    }
    interface TimeBookingGetForEnumerableParams {
        $skip?: number;
        $top?: number;
        $orderBy?: string;
        $filter?: string;
    }
    interface ITimeBookingResource {
        searchMultipleRequest(params: TimeBookingSearchEnumerableParams, data: ITimeBookingSearchParams): Triarc.Data.DataRequest<ITimeBookingCm[]>;
        searchMultiple(params: TimeBookingSearchEnumerableParams, data: ITimeBookingSearchParams): ng.IPromise<Triarc.Data.DataResponse<ITimeBookingCm[]>>;
        saveRequest(data: ITimeBookingCm): Triarc.Data.DataRequest<ITimeBookingCm>;
        save(data: ITimeBookingCm): ng.IPromise<Triarc.Data.DataResponse<ITimeBookingCm>>;
        getRequest(params: TimeBookingGetParams): Triarc.Data.DataRequest<ITimeBookingCm>;
        get(params: TimeBookingGetParams): ng.IPromise<Triarc.Data.DataResponse<ITimeBookingCm>>;
        getAvailableEntryTypesMultipleRequest(params: TimeBookingGetAvailableEntryTypesEnumerableParams): Triarc.Data.DataRequest<ITimeEntryTypeCm[]>;
        getAvailableEntryTypesMultiple(params: TimeBookingGetAvailableEntryTypesEnumerableParams): ng.IPromise<Triarc.Data.DataResponse<ITimeEntryTypeCm[]>>;
        getMetaDataRequest(): Triarc.Data.DataRequest<ITimeBookingMetaDataVm>;
        getMetaData(): ng.IPromise<Triarc.Data.DataResponse<ITimeBookingMetaDataVm>>;
        deleteRequest(params: TimeBookingDeleteParams): Triarc.Data.DataRequest<boolean>;
        delete(params: TimeBookingDeleteParams): ng.IPromise<Triarc.Data.DataResponse<boolean>>;
        getForMultipleRequest(params: TimeBookingGetForEnumerableParams, data: IIdsContainer): Triarc.Data.DataRequest<ITimeBookingCm[]>;
        getForMultiple(params: TimeBookingGetForEnumerableParams, data: IIdsContainer): ng.IPromise<Triarc.Data.DataResponse<ITimeBookingCm[]>>;
        newTimeBookingCm(): ITimeBookingCm;
        newTimeEntryTypeCm(): ITimeEntryTypeCm;
        newTimeBookingMetaDataVm(): ITimeBookingMetaDataVm;
        newTimeBookingSearchParams(): ITimeBookingSearchParams;
        newIdsContainer(): IIdsContainer;
    }
    class TimeBookingResource implements ITimeBookingResource {
        private $requestSender;
        constructor($requestSender: any);
        searchMultipleRequest(params: any, data: any): Triarc.Data.DataRequest<ITimeBookingCm[]>;
        searchMultiple(params: any, data: any): any;
        saveRequest(data: any): Triarc.Data.DataRequest<ITimeBookingCm>;
        save(data: any): any;
        getRequest(params: any): Triarc.Data.DataRequest<ITimeBookingCm>;
        get(params: any): any;
        getAvailableEntryTypesMultipleRequest(params: any): Triarc.Data.DataRequest<ITimeEntryTypeCm[]>;
        getAvailableEntryTypesMultiple(params: any): any;
        getMetaDataRequest(): Triarc.Data.DataRequest<ITimeBookingMetaDataVm>;
        getMetaData(): any;
        deleteRequest(params: any): Triarc.Data.DataRequest<boolean>;
        delete(params: any): any;
        getForMultipleRequest(params: any, data: any): Triarc.Data.DataRequest<ITimeBookingCm[]>;
        getForMultiple(params: any, data: any): any;
        newTimeBookingCm(): ITimeBookingCm;
        newTimeEntryTypeCm(): ITimeEntryTypeCm;
        newTimeBookingMetaDataVm(): ITimeBookingMetaDataVm;
        newTimeBookingSearchParams(): ITimeBookingSearchParams;
        newIdsContainer(): IIdsContainer;
    }
    interface AdminGetConfigsEnumerableParams {
        $skip?: number;
        $top?: number;
        $orderBy?: string;
        $filter?: string;
    }
    interface IAdminResource {
        seedDatabaseRequest(): Triarc.Data.DataRequest<any>;
        seedDatabase(): ng.IPromise<Triarc.Data.DataResponse<any>>;
        webServiceEnabledRequest(): Triarc.Data.DataRequest<boolean>;
        webServiceEnabled(): ng.IPromise<Triarc.Data.DataResponse<boolean>>;
        webServiceAvailableRequest(): Triarc.Data.DataRequest<boolean>;
        webServiceAvailable(): ng.IPromise<Triarc.Data.DataResponse<boolean>>;
        triggerPersonImportRequest(): Triarc.Data.DataRequest<boolean>;
        triggerPersonImport(): ng.IPromise<Triarc.Data.DataResponse<boolean>>;
        triggerProjectImportRequest(): Triarc.Data.DataRequest<boolean>;
        triggerProjectImport(): ng.IPromise<Triarc.Data.DataResponse<boolean>>;
        fetchOrderDataRequest(): Triarc.Data.DataRequest<any>;
        fetchOrderData(): ng.IPromise<Triarc.Data.DataResponse<any>>;
        getServerVersionRequest(): Triarc.Data.DataRequest<string>;
        getServerVersion(): ng.IPromise<Triarc.Data.DataResponse<string>>;
        getConfigsMultipleRequest(params: AdminGetConfigsEnumerableParams): Triarc.Data.DataRequest<IKeyVaulePair[]>;
        getConfigsMultiple(params: AdminGetConfigsEnumerableParams): ng.IPromise<Triarc.Data.DataResponse<IKeyVaulePair[]>>;
        echoServiceRequest(): Triarc.Data.DataRequest<boolean>;
        echoService(): ng.IPromise<Triarc.Data.DataResponse<boolean>>;
        newKeyVaulePair(): IKeyVaulePair;
    }
    class AdminResource implements IAdminResource {
        private $requestSender;
        constructor($requestSender: any);
        seedDatabaseRequest(): Triarc.Data.DataRequest<any>;
        seedDatabase(): any;
        webServiceEnabledRequest(): Triarc.Data.DataRequest<boolean>;
        webServiceEnabled(): any;
        webServiceAvailableRequest(): Triarc.Data.DataRequest<boolean>;
        webServiceAvailable(): any;
        triggerPersonImportRequest(): Triarc.Data.DataRequest<boolean>;
        triggerPersonImport(): any;
        triggerProjectImportRequest(): Triarc.Data.DataRequest<boolean>;
        triggerProjectImport(): any;
        fetchOrderDataRequest(): Triarc.Data.DataRequest<any>;
        fetchOrderData(): any;
        getServerVersionRequest(): Triarc.Data.DataRequest<string>;
        getServerVersion(): any;
        getConfigsMultipleRequest(params: any): Triarc.Data.DataRequest<IKeyVaulePair[]>;
        getConfigsMultiple(params: any): any;
        echoServiceRequest(): Triarc.Data.DataRequest<boolean>;
        echoService(): any;
        newKeyVaulePair(): IKeyVaulePair;
    }
    interface GlobalMessageGetEnumerableParams {
        $skip?: number;
        $top?: number;
        $orderBy?: string;
        $filter?: string;
    }
    interface GlobalMessageDeleteParams {
        id: number;
    }
    interface IGlobalMessageResource {
        getDailyGlobalMessageRequest(): Triarc.Data.DataRequest<IGlobalMessageVm>;
        getDailyGlobalMessage(): ng.IPromise<Triarc.Data.DataResponse<IGlobalMessageVm>>;
        getMultipleRequest(params: GlobalMessageGetEnumerableParams): Triarc.Data.DataRequest<IGlobalMessageVm[]>;
        getMultiple(params: GlobalMessageGetEnumerableParams): ng.IPromise<Triarc.Data.DataResponse<IGlobalMessageVm[]>>;
        putRequest(data: IGlobalMessageVm): Triarc.Data.DataRequest<any>;
        put(data: IGlobalMessageVm): ng.IPromise<Triarc.Data.DataResponse<any>>;
        deleteRequest(params: GlobalMessageDeleteParams): Triarc.Data.DataRequest<any>;
        delete(params: GlobalMessageDeleteParams): ng.IPromise<Triarc.Data.DataResponse<any>>;
        newGlobalMessageVm(): IGlobalMessageVm;
        newPostedImage(): IPostedImage;
    }
    class GlobalMessageResource implements IGlobalMessageResource {
        private $requestSender;
        constructor($requestSender: any);
        getDailyGlobalMessageRequest(): Triarc.Data.DataRequest<IGlobalMessageVm>;
        getDailyGlobalMessage(): any;
        getMultipleRequest(params: any): Triarc.Data.DataRequest<IGlobalMessageVm[]>;
        getMultiple(params: any): any;
        putRequest(data: any): Triarc.Data.DataRequest<any>;
        put(data: any): any;
        deleteRequest(params: any): Triarc.Data.DataRequest<any>;
        delete(params: any): any;
        newGlobalMessageVm(): IGlobalMessageVm;
        newPostedImage(): IPostedImage;
    }
    interface PersonGetPersonByIdParams {
        id: number;
    }
    interface PersonSearchClientsEnumerableParams {
        searchString: string;
        $skip?: number;
        $top?: number;
        $orderBy?: string;
        $filter?: string;
    }
    interface PersonGetClientParams {
        clientId: number;
    }
    interface PersonGetContactsForClientEnumerableParams {
        clientId: number;
        $skip?: number;
        $top?: number;
        $orderBy?: string;
        $filter?: string;
    }
    interface PersonSearchPeopleEnumerableParams {
        searchString: string;
        $skip?: number;
        $top?: number;
        $orderBy?: string;
        $filter?: string;
    }
    interface PersonGetContactParams {
        contactId: number;
    }
    interface PersonGetPersonParams {
        personId: number;
    }
    interface IPersonResource {
        getPersonByIdRequest(params: PersonGetPersonByIdParams): Triarc.Data.DataRequest<IPersonCm>;
        getPersonById(params: PersonGetPersonByIdParams): ng.IPromise<Triarc.Data.DataResponse<IPersonCm>>;
        searchClientsMultipleRequest(params: PersonSearchClientsEnumerableParams): Triarc.Data.DataRequest<IClientCm[]>;
        searchClientsMultiple(params: PersonSearchClientsEnumerableParams): ng.IPromise<Triarc.Data.DataResponse<IClientCm[]>>;
        getClientRequest(params: PersonGetClientParams): Triarc.Data.DataRequest<IClientCm>;
        getClient(params: PersonGetClientParams): ng.IPromise<Triarc.Data.DataResponse<IClientCm>>;
        getContactsForClientMultipleRequest(params: PersonGetContactsForClientEnumerableParams): Triarc.Data.DataRequest<IContactCm[]>;
        getContactsForClientMultiple(params: PersonGetContactsForClientEnumerableParams): ng.IPromise<Triarc.Data.DataResponse<IContactCm[]>>;
        searchPeopleMultipleRequest(params: PersonSearchPeopleEnumerableParams): Triarc.Data.DataRequest<IPersonCm[]>;
        searchPeopleMultiple(params: PersonSearchPeopleEnumerableParams): ng.IPromise<Triarc.Data.DataResponse<IPersonCm[]>>;
        getContactRequest(params: PersonGetContactParams): Triarc.Data.DataRequest<IPersonCm>;
        getContact(params: PersonGetContactParams): ng.IPromise<Triarc.Data.DataResponse<IPersonCm>>;
        getPersonRequest(params: PersonGetPersonParams): Triarc.Data.DataRequest<IPersonCm>;
        getPerson(params: PersonGetPersonParams): ng.IPromise<Triarc.Data.DataResponse<IPersonCm>>;
        newPersonCm(): IPersonCm;
        newClientCm(): IClientCm;
        newContactCm(): IContactCm;
    }
    class PersonResource implements IPersonResource {
        private $requestSender;
        constructor($requestSender: any);
        getPersonByIdRequest(params: any): Triarc.Data.DataRequest<IPersonCm>;
        getPersonById(params: any): any;
        searchClientsMultipleRequest(params: any): Triarc.Data.DataRequest<IClientCm[]>;
        searchClientsMultiple(params: any): any;
        getClientRequest(params: any): Triarc.Data.DataRequest<IClientCm>;
        getClient(params: any): any;
        getContactsForClientMultipleRequest(params: any): Triarc.Data.DataRequest<IContactCm[]>;
        getContactsForClientMultiple(params: any): any;
        searchPeopleMultipleRequest(params: any): Triarc.Data.DataRequest<IPersonCm[]>;
        searchPeopleMultiple(params: any): any;
        getContactRequest(params: any): Triarc.Data.DataRequest<IPersonCm>;
        getContact(params: any): any;
        getPersonRequest(params: any): Triarc.Data.DataRequest<IPersonCm>;
        getPerson(params: any): any;
        newPersonCm(): IPersonCm;
        newClientCm(): IClientCm;
        newContactCm(): IContactCm;
    }
    interface ProjectGetAllPersonsEnumerableParams {
        $skip?: number;
        $top?: number;
        $orderBy?: string;
        $filter?: string;
    }
    interface ProjectGetAllLocationsEnumerableParams {
        $skip?: number;
        $top?: number;
        $orderBy?: string;
        $filter?: string;
    }
    interface ProjectSearchProjectsEnumerableParams {
        searchValue: string;
        skip: number;
        take: number;
        $skip?: number;
        $top?: number;
        $orderBy?: string;
        $filter?: string;
    }
    interface ProjectGetRootProjectsEnumerableParams {
        search: string;
        skip: number;
        take: number;
        $skip?: number;
        $top?: number;
        $orderBy?: string;
        $filter?: string;
    }
    interface ProjectGetChildrenEnumerableParams {
        projectId: number;
        $skip?: number;
        $top?: number;
        $orderBy?: string;
        $filter?: string;
    }
    interface ProjectPutProjectDescriptionParams {
        description: string;
        projectId: number;
    }
    interface ProjectPutPersonAssignmentParams {
        projectId: number;
        personId: number;
        value: boolean;
    }
    interface ProjectGetProjectByIdParams {
        projectId: number;
    }
    interface ProjectGetProjectsByIdEnumerableParams {
        $skip?: number;
        $top?: number;
        $orderBy?: string;
        $filter?: string;
    }
    interface ProjectPutLocationAssignmentParams {
        projectId: number;
        locationId: number;
        value: boolean;
    }
    interface ProjectSetFlagsParams {
        projectId: number;
        flags: EProjectFlag;
    }
    interface IProjectResource {
        getAllPersonsMultipleRequest(params: ProjectGetAllPersonsEnumerableParams): Triarc.Data.DataRequest<IProjectPersonVm[]>;
        getAllPersonsMultiple(params: ProjectGetAllPersonsEnumerableParams): ng.IPromise<Triarc.Data.DataResponse<IProjectPersonVm[]>>;
        getAllLocationsMultipleRequest(params: ProjectGetAllLocationsEnumerableParams): Triarc.Data.DataRequest<IProjectLocationVm[]>;
        getAllLocationsMultiple(params: ProjectGetAllLocationsEnumerableParams): ng.IPromise<Triarc.Data.DataResponse<IProjectLocationVm[]>>;
        searchProjectsMultipleRequest(params: ProjectSearchProjectsEnumerableParams): Triarc.Data.DataRequest<IProjectCm[]>;
        searchProjectsMultiple(params: ProjectSearchProjectsEnumerableParams): ng.IPromise<Triarc.Data.DataResponse<IProjectCm[]>>;
        getRootProjectsMultipleRequest(params: ProjectGetRootProjectsEnumerableParams): Triarc.Data.DataRequest<IProjectVm[]>;
        getRootProjectsMultiple(params: ProjectGetRootProjectsEnumerableParams): ng.IPromise<Triarc.Data.DataResponse<IProjectVm[]>>;
        getChildrenMultipleRequest(params: ProjectGetChildrenEnumerableParams): Triarc.Data.DataRequest<IProjectVm[]>;
        getChildrenMultiple(params: ProjectGetChildrenEnumerableParams): ng.IPromise<Triarc.Data.DataResponse<IProjectVm[]>>;
        putProjectDescriptionRequest(params: ProjectPutProjectDescriptionParams): Triarc.Data.DataRequest<any>;
        putProjectDescription(params: ProjectPutProjectDescriptionParams): ng.IPromise<Triarc.Data.DataResponse<any>>;
        putPersonAssignmentRequest(params: ProjectPutPersonAssignmentParams): Triarc.Data.DataRequest<any>;
        putPersonAssignment(params: ProjectPutPersonAssignmentParams): ng.IPromise<Triarc.Data.DataResponse<any>>;
        getProjectByIdRequest(params: ProjectGetProjectByIdParams): Triarc.Data.DataRequest<IProjectCm>;
        getProjectById(params: ProjectGetProjectByIdParams): ng.IPromise<Triarc.Data.DataResponse<IProjectCm>>;
        getProjectsByIdMultipleRequest(params: ProjectGetProjectsByIdEnumerableParams, data: ISearchIdSet): Triarc.Data.DataRequest<IProjectCm[]>;
        getProjectsByIdMultiple(params: ProjectGetProjectsByIdEnumerableParams, data: ISearchIdSet): ng.IPromise<Triarc.Data.DataResponse<IProjectCm[]>>;
        putLocationAssignmentRequest(params: ProjectPutLocationAssignmentParams): Triarc.Data.DataRequest<any>;
        putLocationAssignment(params: ProjectPutLocationAssignmentParams): ng.IPromise<Triarc.Data.DataResponse<any>>;
        setFlagsRequest(params: ProjectSetFlagsParams): Triarc.Data.DataRequest<any>;
        setFlags(params: ProjectSetFlagsParams): ng.IPromise<Triarc.Data.DataResponse<any>>;
        newProjectPersonVm(): IProjectPersonVm;
        newProjectLocationVm(): IProjectLocationVm;
        newProjectCm(): IProjectCm;
        newProjectVm(): IProjectVm;
        newSearchIdSet(): ISearchIdSet;
    }
    class ProjectResource implements IProjectResource {
        private $requestSender;
        constructor($requestSender: any);
        getAllPersonsMultipleRequest(params: any): Triarc.Data.DataRequest<IProjectPersonVm[]>;
        getAllPersonsMultiple(params: any): any;
        getAllLocationsMultipleRequest(params: any): Triarc.Data.DataRequest<IProjectLocationVm[]>;
        getAllLocationsMultiple(params: any): any;
        searchProjectsMultipleRequest(params: any): Triarc.Data.DataRequest<IProjectCm[]>;
        searchProjectsMultiple(params: any): any;
        getRootProjectsMultipleRequest(params: any): Triarc.Data.DataRequest<IProjectVm[]>;
        getRootProjectsMultiple(params: any): any;
        getChildrenMultipleRequest(params: any): Triarc.Data.DataRequest<IProjectVm[]>;
        getChildrenMultiple(params: any): any;
        putProjectDescriptionRequest(params: any): Triarc.Data.DataRequest<any>;
        putProjectDescription(params: any): any;
        putPersonAssignmentRequest(params: any): Triarc.Data.DataRequest<any>;
        putPersonAssignment(params: any): any;
        getProjectByIdRequest(params: any): Triarc.Data.DataRequest<IProjectCm>;
        getProjectById(params: any): any;
        getProjectsByIdMultipleRequest(params: any, data: any): Triarc.Data.DataRequest<IProjectCm[]>;
        getProjectsByIdMultiple(params: any, data: any): any;
        putLocationAssignmentRequest(params: any): Triarc.Data.DataRequest<any>;
        putLocationAssignment(params: any): any;
        setFlagsRequest(params: any): Triarc.Data.DataRequest<any>;
        setFlags(params: any): any;
        newProjectPersonVm(): IProjectPersonVm;
        newProjectLocationVm(): IProjectLocationVm;
        newProjectCm(): IProjectCm;
        newProjectVm(): IProjectVm;
        newSearchIdSet(): ISearchIdSet;
    }
    interface ExpensesSearchEnumerableParams {
        $skip?: number;
        $top?: number;
        $orderBy?: string;
        $filter?: string;
    }
    interface ExpensesGetParams {
        id: number;
    }
    interface ExpensesDeleteParams {
        id: number;
    }
    interface ExpensesGetExpenseTypesEnumerableParams {
        $skip?: number;
        $top?: number;
        $orderBy?: string;
        $filter?: string;
    }
    interface IExpensesResource {
        addOrUpdateExpenseRequest(data: IExpenseCm): Triarc.Data.DataRequest<IExpenseCm>;
        addOrUpdateExpense(data: IExpenseCm): ng.IPromise<Triarc.Data.DataResponse<IExpenseCm>>;
        searchMultipleRequest(params: ExpensesSearchEnumerableParams, data: IExpensesSearchCm): Triarc.Data.DataRequest<IExpenseCm[]>;
        searchMultiple(params: ExpensesSearchEnumerableParams, data: IExpensesSearchCm): ng.IPromise<Triarc.Data.DataResponse<IExpenseCm[]>>;
        getRequest(params: ExpensesGetParams): Triarc.Data.DataRequest<IExpenseCm>;
        get(params: ExpensesGetParams): ng.IPromise<Triarc.Data.DataResponse<IExpenseCm>>;
        deleteRequest(params: ExpensesDeleteParams): Triarc.Data.DataRequest<any>;
        delete(params: ExpensesDeleteParams): ng.IPromise<Triarc.Data.DataResponse<any>>;
        getExpenseTypesMultipleRequest(params: ExpensesGetExpenseTypesEnumerableParams): Triarc.Data.DataRequest<IExpenseTypeCm[]>;
        getExpenseTypesMultiple(params: ExpensesGetExpenseTypesEnumerableParams): ng.IPromise<Triarc.Data.DataResponse<IExpenseTypeCm[]>>;
        newExpenseCm(): IExpenseCm;
        newExpenseTypeCm(): IExpenseTypeCm;
        newExpensesSearchCm(): IExpensesSearchCm;
    }
    class ExpensesResource implements IExpensesResource {
        private $requestSender;
        constructor($requestSender: any);
        addOrUpdateExpenseRequest(data: any): Triarc.Data.DataRequest<IExpenseCm>;
        addOrUpdateExpense(data: any): any;
        searchMultipleRequest(params: any, data: any): Triarc.Data.DataRequest<IExpenseCm[]>;
        searchMultiple(params: any, data: any): any;
        getRequest(params: any): Triarc.Data.DataRequest<IExpenseCm>;
        get(params: any): any;
        deleteRequest(params: any): Triarc.Data.DataRequest<any>;
        delete(params: any): any;
        getExpenseTypesMultipleRequest(params: any): Triarc.Data.DataRequest<IExpenseTypeCm[]>;
        getExpenseTypesMultiple(params: any): any;
        newExpenseCm(): IExpenseCm;
        newExpenseTypeCm(): IExpenseTypeCm;
        newExpensesSearchCm(): IExpensesSearchCm;
    }
    interface IConfigResource {
        getRequest(): Triarc.Data.DataRequest<IConfigVm>;
        get(): ng.IPromise<Triarc.Data.DataResponse<IConfigVm>>;
        putRequest(data: ISaveConfigVm): Triarc.Data.DataRequest<any>;
        put(data: ISaveConfigVm): ng.IPromise<Triarc.Data.DataResponse<any>>;
        newConfigVm(): IConfigVm;
        newSaveConfigVm(): ISaveConfigVm;
    }
    class ConfigResource implements IConfigResource {
        private $requestSender;
        constructor($requestSender: any);
        getRequest(): Triarc.Data.DataRequest<IConfigVm>;
        get(): any;
        putRequest(data: any): Triarc.Data.DataRequest<any>;
        put(data: any): any;
        newConfigVm(): IConfigVm;
        newSaveConfigVm(): ISaveConfigVm;
    }
    interface ConfigurationProfileGetConfigsEnumerableParams {
        $skip?: number;
        $top?: number;
        $orderBy?: string;
        $filter?: string;
    }
    interface IConfigurationProfileResource {
        getConfigsMultipleRequest(params: ConfigurationProfileGetConfigsEnumerableParams): Triarc.Data.DataRequest<IProfileConfigVm[]>;
        getConfigsMultiple(params: ConfigurationProfileGetConfigsEnumerableParams): ng.IPromise<Triarc.Data.DataResponse<IProfileConfigVm[]>>;
        deleteRequest(data: IProfileConfigVm): Triarc.Data.DataRequest<any>;
        delete(data: IProfileConfigVm): ng.IPromise<Triarc.Data.DataResponse<any>>;
        saveRequest(data: IProfileConfigVm): Triarc.Data.DataRequest<any>;
        save(data: IProfileConfigVm): ng.IPromise<Triarc.Data.DataResponse<any>>;
        newProfileConfigVm(): IProfileConfigVm;
    }
    class ConfigurationProfileResource implements IConfigurationProfileResource {
        private $requestSender;
        constructor($requestSender: any);
        getConfigsMultipleRequest(params: any): Triarc.Data.DataRequest<IProfileConfigVm[]>;
        getConfigsMultiple(params: any): any;
        deleteRequest(data: any): Triarc.Data.DataRequest<any>;
        delete(data: any): any;
        saveRequest(data: any): Triarc.Data.DataRequest<any>;
        save(data: any): any;
        newProfileConfigVm(): IProfileConfigVm;
    }
    interface WorkReportGetParams {
        externalWorkReportId: number;
    }
    interface WorkReportSearchEnumerableParams {
        $skip?: number;
        $top?: number;
        $orderBy?: string;
        $filter?: string;
    }
    interface IWorkReportResource {
        getRequest(params: WorkReportGetParams): Triarc.Data.DataRequest<IWorkReportCm>;
        get(params: WorkReportGetParams): ng.IPromise<Triarc.Data.DataResponse<IWorkReportCm>>;
        saveRequest(data: IWorkReportCm): Triarc.Data.DataRequest<IExternalWorkReportCm>;
        save(data: IWorkReportCm): ng.IPromise<Triarc.Data.DataResponse<IExternalWorkReportCm>>;
        searchMultipleRequest(params: WorkReportSearchEnumerableParams, data: IExternalWorkReportSearchCriteria): Triarc.Data.DataRequest<ISearchExternalWorkReportCm[]>;
        searchMultiple(params: WorkReportSearchEnumerableParams, data: IExternalWorkReportSearchCriteria): ng.IPromise<Triarc.Data.DataResponse<ISearchExternalWorkReportCm[]>>;
        newWorkReportCm(): IWorkReportCm;
        newExternalWorkReportCm(): IExternalWorkReportCm;
        newSearchExternalWorkReportCm(): ISearchExternalWorkReportCm;
        newExternalWorkReportSearchCriteria(): IExternalWorkReportSearchCriteria;
    }
    class WorkReportResource implements IWorkReportResource {
        private $requestSender;
        constructor($requestSender: any);
        getRequest(params: any): Triarc.Data.DataRequest<IWorkReportCm>;
        get(params: any): any;
        saveRequest(data: any): Triarc.Data.DataRequest<IExternalWorkReportCm>;
        save(data: any): any;
        searchMultipleRequest(params: any, data: any): Triarc.Data.DataRequest<ISearchExternalWorkReportCm[]>;
        searchMultiple(params: any, data: any): any;
        newWorkReportCm(): IWorkReportCm;
        newExternalWorkReportCm(): IExternalWorkReportCm;
        newSearchExternalWorkReportCm(): ISearchExternalWorkReportCm;
        newExternalWorkReportSearchCriteria(): IExternalWorkReportSearchCriteria;
    }
    interface ClaimGetClaimsEnumerableParams {
        $skip?: number;
        $top?: number;
        $orderBy?: string;
        $filter?: string;
    }
    interface IClaimResource {
        getClaimsMultipleRequest(params: ClaimGetClaimsEnumerableParams): Triarc.Data.DataRequest<IFeatureClaimVm[]>;
        getClaimsMultiple(params: ClaimGetClaimsEnumerableParams): ng.IPromise<Triarc.Data.DataResponse<IFeatureClaimVm[]>>;
        newFeatureClaimVm(): IFeatureClaimVm;
    }
    class ClaimResource implements IClaimResource {
        private $requestSender;
        constructor($requestSender: any);
        getClaimsMultipleRequest(params: any): Triarc.Data.DataRequest<IFeatureClaimVm[]>;
        getClaimsMultiple(params: any): any;
        newFeatureClaimVm(): IFeatureClaimVm;
    }
    interface SaldoGetByIdParams {
        employeeId: string;
    }
    interface ISaldoResource {
        getByIdRequest(params: SaldoGetByIdParams): Triarc.Data.DataRequest<ISaldo>;
        getById(params: SaldoGetByIdParams): ng.IPromise<Triarc.Data.DataResponse<ISaldo>>;
        newSaldo(): ISaldo;
    }
    class SaldoResource implements ISaldoResource {
        private $requestSender;
        constructor($requestSender: any);
        getByIdRequest(params: any): Triarc.Data.DataRequest<ISaldo>;
        getById(params: any): any;
        newSaldo(): ISaldo;
    }
    interface WorkObjectGetProjectsForLocationEnumerableParams {
        locationId: number;
        $skip?: number;
        $top?: number;
        $orderBy?: string;
        $filter?: string;
    }
    interface IWorkObjectResource {
        getProjectsForLocationMultipleRequest(params: WorkObjectGetProjectsForLocationEnumerableParams): Triarc.Data.DataRequest<IWorkObjectViewModel[]>;
        getProjectsForLocationMultiple(params: WorkObjectGetProjectsForLocationEnumerableParams): ng.IPromise<Triarc.Data.DataResponse<IWorkObjectViewModel[]>>;
        newWorkObjectViewModel(): IWorkObjectViewModel;
    }
    class WorkObjectResource implements IWorkObjectResource {
        private $requestSender;
        constructor($requestSender: any);
        getProjectsForLocationMultipleRequest(params: any): Triarc.Data.DataRequest<IWorkObjectViewModel[]>;
        getProjectsForLocationMultiple(params: any): any;
        newWorkObjectViewModel(): IWorkObjectViewModel;
    }
    interface AccountGetUsersEnumerableParams {
        $skip?: number;
        $top?: number;
        $orderBy?: string;
        $filter?: string;
    }
    interface AccountSearchEnumerableParams {
        search: string;
        skip: number;
        take: number;
        $skip?: number;
        $top?: number;
        $orderBy?: string;
        $filter?: string;
    }
    interface AccountResetPasswordParams {
        userId: string;
    }
    interface AccountGetManageInfoParams {
        returnUrl: string;
        generateState?: boolean;
    }
    interface AccountGetExternalLoginParams {
        provider: string;
        error?: string;
    }
    interface AccountGetExternalLoginsEnumerableParams {
        returnUrl: string;
        generateState?: boolean;
        $skip?: number;
        $top?: number;
        $orderBy?: string;
        $filter?: string;
    }
    interface IAccountResource {
        getAppUserRequest(): Triarc.Data.DataRequest<IAppUser>;
        getAppUser(): ng.IPromise<Triarc.Data.DataResponse<IAppUser>>;
        loginRequest(data: ILoginViewModel): Triarc.Data.DataRequest<any>;
        login(data: ILoginViewModel): ng.IPromise<Triarc.Data.DataResponse<any>>;
        getUsersMultipleRequest(params: AccountGetUsersEnumerableParams): Triarc.Data.DataRequest<IUserVm[]>;
        getUsersMultiple(params: AccountGetUsersEnumerableParams): ng.IPromise<Triarc.Data.DataResponse<IUserVm[]>>;
        searchMultipleRequest(params: AccountSearchEnumerableParams): Triarc.Data.DataRequest<IUserVm[]>;
        searchMultiple(params: AccountSearchEnumerableParams): ng.IPromise<Triarc.Data.DataResponse<IUserVm[]>>;
        createUserRequest(data: IUserVm): Triarc.Data.DataRequest<any>;
        createUser(data: IUserVm): ng.IPromise<Triarc.Data.DataResponse<any>>;
        editUserRequest(data: IUserVm): Triarc.Data.DataRequest<any>;
        editUser(data: IUserVm): ng.IPromise<Triarc.Data.DataResponse<any>>;
        resetPasswordRequest(params: AccountResetPasswordParams): Triarc.Data.DataRequest<any>;
        resetPassword(params: AccountResetPasswordParams): ng.IPromise<Triarc.Data.DataResponse<any>>;
        deleteRequest(data: IUserVm): Triarc.Data.DataRequest<any>;
        delete(data: IUserVm): ng.IPromise<Triarc.Data.DataResponse<any>>;
        pingRequest(): Triarc.Data.DataRequest<any>;
        ping(): ng.IPromise<Triarc.Data.DataResponse<any>>;
        logoutRequest(): Triarc.Data.DataRequest<any>;
        logout(): ng.IPromise<Triarc.Data.DataResponse<any>>;
        getUserInfoRequest(): Triarc.Data.DataRequest<IUserInfoViewModel>;
        getUserInfo(): ng.IPromise<Triarc.Data.DataResponse<IUserInfoViewModel>>;
        getManageInfoRequest(params: AccountGetManageInfoParams): Triarc.Data.DataRequest<IManageInfoViewModel>;
        getManageInfo(params: AccountGetManageInfoParams): ng.IPromise<Triarc.Data.DataResponse<IManageInfoViewModel>>;
        changePasswordRequest(data: IChangePasswordBindingModel): Triarc.Data.DataRequest<any>;
        changePassword(data: IChangePasswordBindingModel): ng.IPromise<Triarc.Data.DataResponse<any>>;
        setPasswordRequest(data: ISetPasswordBindingModel): Triarc.Data.DataRequest<any>;
        setPassword(data: ISetPasswordBindingModel): ng.IPromise<Triarc.Data.DataResponse<any>>;
        addExternalLoginRequest(data: IAddExternalLoginBindingModel): Triarc.Data.DataRequest<any>;
        addExternalLogin(data: IAddExternalLoginBindingModel): ng.IPromise<Triarc.Data.DataResponse<any>>;
        removeLoginRequest(data: IRemoveLoginBindingModel): Triarc.Data.DataRequest<any>;
        removeLogin(data: IRemoveLoginBindingModel): ng.IPromise<Triarc.Data.DataResponse<any>>;
        getExternalLoginRequest(params: AccountGetExternalLoginParams): Triarc.Data.DataRequest<any>;
        getExternalLogin(params: AccountGetExternalLoginParams): ng.IPromise<Triarc.Data.DataResponse<any>>;
        getExternalLoginsMultipleRequest(params: AccountGetExternalLoginsEnumerableParams): Triarc.Data.DataRequest<IExternalLoginViewModel[]>;
        getExternalLoginsMultiple(params: AccountGetExternalLoginsEnumerableParams): ng.IPromise<Triarc.Data.DataResponse<IExternalLoginViewModel[]>>;
        registerRequest(data: IRegisterVm): Triarc.Data.DataRequest<any>;
        register(data: IRegisterVm): ng.IPromise<Triarc.Data.DataResponse<any>>;
        registerExternalRequest(data: IRegisterExternalBindingModel): Triarc.Data.DataRequest<any>;
        registerExternal(data: IRegisterExternalBindingModel): ng.IPromise<Triarc.Data.DataResponse<any>>;
        newAppUser(): IAppUser;
        newUserVm(): IUserVm;
        newUserInfoViewModel(): IUserInfoViewModel;
        newManageInfoViewModel(): IManageInfoViewModel;
        newExternalLoginViewModel(): IExternalLoginViewModel;
        newLoginViewModel(): ILoginViewModel;
        newChangePasswordBindingModel(): IChangePasswordBindingModel;
        newSetPasswordBindingModel(): ISetPasswordBindingModel;
        newAddExternalLoginBindingModel(): IAddExternalLoginBindingModel;
        newRemoveLoginBindingModel(): IRemoveLoginBindingModel;
        newRegisterVm(): IRegisterVm;
        newRegisterExternalBindingModel(): IRegisterExternalBindingModel;
        newPersonVm(): IPersonVm;
        newLocationVm(): ILocationVm;
        newAppConfig(): IAppConfig;
    }
    class AccountResource implements IAccountResource {
        private $requestSender;
        constructor($requestSender: any);
        getAppUserRequest(): Triarc.Data.DataRequest<IAppUser>;
        getAppUser(): any;
        loginRequest(data: any): Triarc.Data.DataRequest<any>;
        login(data: any): any;
        getUsersMultipleRequest(params: any): Triarc.Data.DataRequest<IUserVm[]>;
        getUsersMultiple(params: any): any;
        searchMultipleRequest(params: any): Triarc.Data.DataRequest<IUserVm[]>;
        searchMultiple(params: any): any;
        createUserRequest(data: any): Triarc.Data.DataRequest<any>;
        createUser(data: any): any;
        editUserRequest(data: any): Triarc.Data.DataRequest<any>;
        editUser(data: any): any;
        resetPasswordRequest(params: any): Triarc.Data.DataRequest<any>;
        resetPassword(params: any): any;
        deleteRequest(data: any): Triarc.Data.DataRequest<any>;
        delete(data: any): any;
        pingRequest(): Triarc.Data.DataRequest<any>;
        ping(): any;
        logoutRequest(): Triarc.Data.DataRequest<any>;
        logout(): any;
        getUserInfoRequest(): Triarc.Data.DataRequest<IUserInfoViewModel>;
        getUserInfo(): any;
        getManageInfoRequest(params: any): Triarc.Data.DataRequest<IManageInfoViewModel>;
        getManageInfo(params: any): any;
        changePasswordRequest(data: any): Triarc.Data.DataRequest<any>;
        changePassword(data: any): any;
        setPasswordRequest(data: any): Triarc.Data.DataRequest<any>;
        setPassword(data: any): any;
        addExternalLoginRequest(data: any): Triarc.Data.DataRequest<any>;
        addExternalLogin(data: any): any;
        removeLoginRequest(data: any): Triarc.Data.DataRequest<any>;
        removeLogin(data: any): any;
        getExternalLoginRequest(params: any): Triarc.Data.DataRequest<any>;
        getExternalLogin(params: any): any;
        getExternalLoginsMultipleRequest(params: any): Triarc.Data.DataRequest<IExternalLoginViewModel[]>;
        getExternalLoginsMultiple(params: any): any;
        registerRequest(data: any): Triarc.Data.DataRequest<any>;
        register(data: any): any;
        registerExternalRequest(data: any): Triarc.Data.DataRequest<any>;
        registerExternal(data: any): any;
        newAppUser(): IAppUser;
        newUserVm(): IUserVm;
        newUserInfoViewModel(): IUserInfoViewModel;
        newManageInfoViewModel(): IManageInfoViewModel;
        newExternalLoginViewModel(): IExternalLoginViewModel;
        newLoginViewModel(): ILoginViewModel;
        newChangePasswordBindingModel(): IChangePasswordBindingModel;
        newSetPasswordBindingModel(): ISetPasswordBindingModel;
        newAddExternalLoginBindingModel(): IAddExternalLoginBindingModel;
        newRemoveLoginBindingModel(): IRemoveLoginBindingModel;
        newRegisterVm(): IRegisterVm;
        newRegisterExternalBindingModel(): IRegisterExternalBindingModel;
        newPersonVm(): IPersonVm;
        newLocationVm(): ILocationVm;
        newAppConfig(): IAppConfig;
    }
    interface PersonalMessageGetLatestMessagesEnumerableParams {
        employeeId: number;
        $skip?: number;
        $top?: number;
        $orderBy?: string;
        $filter?: string;
    }
    interface PersonalMessageMarkAsReadParams {
        messageId: number;
        personId: number;
    }
    interface PersonalMessageGetSentMessagesEnumerableParams {
        personId: number;
        $skip?: number;
        $top?: number;
        $orderBy?: string;
        $filter?: string;
    }
    interface IPersonalMessageResource {
        getLatestMessagesMultipleRequest(params: PersonalMessageGetLatestMessagesEnumerableParams): Triarc.Data.DataRequest<IMessage[]>;
        getLatestMessagesMultiple(params: PersonalMessageGetLatestMessagesEnumerableParams): ng.IPromise<Triarc.Data.DataResponse<IMessage[]>>;
        saveMessageRequest(data: ISaveMessage): Triarc.Data.DataRequest<any>;
        saveMessage(data: ISaveMessage): ng.IPromise<Triarc.Data.DataResponse<any>>;
        markAsReadRequest(params: PersonalMessageMarkAsReadParams): Triarc.Data.DataRequest<any>;
        markAsRead(params: PersonalMessageMarkAsReadParams): ng.IPromise<Triarc.Data.DataResponse<any>>;
        getSentMessagesMultipleRequest(params: PersonalMessageGetSentMessagesEnumerableParams): Triarc.Data.DataRequest<ISentMessage[]>;
        getSentMessagesMultiple(params: PersonalMessageGetSentMessagesEnumerableParams): ng.IPromise<Triarc.Data.DataResponse<ISentMessage[]>>;
        newMessage(): IMessage;
        newSentMessage(): ISentMessage;
        newSaveMessage(): ISaveMessage;
    }
    class PersonalMessageResource implements IPersonalMessageResource {
        private $requestSender;
        constructor($requestSender: any);
        getLatestMessagesMultipleRequest(params: any): Triarc.Data.DataRequest<IMessage[]>;
        getLatestMessagesMultiple(params: any): any;
        saveMessageRequest(data: any): Triarc.Data.DataRequest<any>;
        saveMessage(data: any): any;
        markAsReadRequest(params: any): Triarc.Data.DataRequest<any>;
        markAsRead(params: any): any;
        getSentMessagesMultipleRequest(params: any): Triarc.Data.DataRequest<ISentMessage[]>;
        getSentMessagesMultiple(params: any): any;
        newMessage(): IMessage;
        newSentMessage(): ISentMessage;
        newSaveMessage(): ISaveMessage;
    }
    interface TimeEntryTypeSearchEnumerableParams {
        searchValue: string;
        skip: number;
        take: number;
        $skip?: number;
        $top?: number;
        $orderBy?: string;
        $filter?: string;
    }
    interface TimeEntryTypeGetTypesByIdEnumerableParams {
        $skip?: number;
        $top?: number;
        $orderBy?: string;
        $filter?: string;
    }
    interface ITimeEntryTypeResource {
        searchMultipleRequest(params: TimeEntryTypeSearchEnumerableParams): Triarc.Data.DataRequest<ITimeEntryTypeCm[]>;
        searchMultiple(params: TimeEntryTypeSearchEnumerableParams): ng.IPromise<Triarc.Data.DataResponse<ITimeEntryTypeCm[]>>;
        getTypesByIdMultipleRequest(params: TimeEntryTypeGetTypesByIdEnumerableParams, data: ISearchIdSet): Triarc.Data.DataRequest<ITimeEntryTypeCm[]>;
        getTypesByIdMultiple(params: TimeEntryTypeGetTypesByIdEnumerableParams, data: ISearchIdSet): ng.IPromise<Triarc.Data.DataResponse<ITimeEntryTypeCm[]>>;
        newTimeEntryTypeCm(): ITimeEntryTypeCm;
        newSearchIdSet(): ISearchIdSet;
    }
    class TimeEntryTypeResource implements ITimeEntryTypeResource {
        private $requestSender;
        constructor($requestSender: any);
        searchMultipleRequest(params: any): Triarc.Data.DataRequest<ITimeEntryTypeCm[]>;
        searchMultiple(params: any): any;
        getTypesByIdMultipleRequest(params: any, data: any): Triarc.Data.DataRequest<ITimeEntryTypeCm[]>;
        getTypesByIdMultiple(params: any, data: any): any;
        newTimeEntryTypeCm(): ITimeEntryTypeCm;
        newSearchIdSet(): ISearchIdSet;
    }
    interface LocationGetLocationByIdParams {
        id: string;
    }
    interface LocationGetEnumerableParams {
        $skip?: number;
        $top?: number;
        $orderBy?: string;
        $filter?: string;
    }
    interface LocationDeleteParams {
        id: number;
    }
    interface ILocationResource {
        getLocationByIdRequest(params: LocationGetLocationByIdParams): Triarc.Data.DataRequest<ILocationVm>;
        getLocationById(params: LocationGetLocationByIdParams): ng.IPromise<Triarc.Data.DataResponse<ILocationVm>>;
        getMultipleRequest(params: LocationGetEnumerableParams): Triarc.Data.DataRequest<ILocationVm[]>;
        getMultiple(params: LocationGetEnumerableParams): ng.IPromise<Triarc.Data.DataResponse<ILocationVm[]>>;
        putRequest(data: ILocationVm): Triarc.Data.DataRequest<any>;
        put(data: ILocationVm): ng.IPromise<Triarc.Data.DataResponse<any>>;
        deleteRequest(params: LocationDeleteParams): Triarc.Data.DataRequest<any>;
        delete(params: LocationDeleteParams): ng.IPromise<Triarc.Data.DataResponse<any>>;
        newLocationVm(): ILocationVm;
    }
    class LocationResource implements ILocationResource {
        private $requestSender;
        constructor($requestSender: any);
        getLocationByIdRequest(params: any): Triarc.Data.DataRequest<ILocationVm>;
        getLocationById(params: any): any;
        getMultipleRequest(params: any): Triarc.Data.DataRequest<ILocationVm[]>;
        getMultiple(params: any): any;
        putRequest(data: any): Triarc.Data.DataRequest<any>;
        put(data: any): any;
        deleteRequest(params: any): Triarc.Data.DataRequest<any>;
        delete(params: any): any;
        newLocationVm(): ILocationVm;
    }
    interface TimeEntryValidateUserParams {
        persNr: number;
    }
    interface TimeEntryValidateWorkObjectParams {
        objectNumber: string;
        positionNumber: string;
        personalNumber: number;
    }
    interface TimeEntrySearchTimeEntriesEnumerableParams {
        $skip?: number;
        $top?: number;
        $orderBy?: string;
        $filter?: string;
    }
    interface TimeEntryGetAvailableBookingTypesEnumerableParams {
        $skip?: number;
        $top?: number;
        $orderBy?: string;
        $filter?: string;
    }
    interface ITimeEntryResource {
        postSingleRequest(data: ITimeEntryModel): Triarc.Data.DataRequest<any>;
        postSingle(data: ITimeEntryModel): ng.IPromise<Triarc.Data.DataResponse<any>>;
        postMultipleRequest(data: ITimeEntryCollection): Triarc.Data.DataRequest<any>;
        postMultiple(data: ITimeEntryCollection): ng.IPromise<Triarc.Data.DataResponse<any>>;
        validateUserRequest(params: TimeEntryValidateUserParams): Triarc.Data.DataRequest<ICheckUserResult>;
        validateUser(params: TimeEntryValidateUserParams): ng.IPromise<Triarc.Data.DataResponse<ICheckUserResult>>;
        putRequest(data: ITimeEntryVm): Triarc.Data.DataRequest<boolean>;
        put(data: ITimeEntryVm): ng.IPromise<Triarc.Data.DataResponse<boolean>>;
        deleteRequest(data: ITimeEntryVm): Triarc.Data.DataRequest<boolean>;
        delete(data: ITimeEntryVm): ng.IPromise<Triarc.Data.DataResponse<boolean>>;
        validateWorkObjectRequest(params: TimeEntryValidateWorkObjectParams): Triarc.Data.DataRequest<EAuftragVerificationStatus>;
        validateWorkObject(params: TimeEntryValidateWorkObjectParams): ng.IPromise<Triarc.Data.DataResponse<EAuftragVerificationStatus>>;
        upateLegacyEntriesRequest(): Triarc.Data.DataRequest<any>;
        upateLegacyEntries(): ng.IPromise<Triarc.Data.DataResponse<any>>;
        searchTimeEntriesMultipleRequest(params: TimeEntrySearchTimeEntriesEnumerableParams, data: ITimeEntrySearchVm): Triarc.Data.DataRequest<ITimeEntryVm[]>;
        searchTimeEntriesMultiple(params: TimeEntrySearchTimeEntriesEnumerableParams, data: ITimeEntrySearchVm): ng.IPromise<Triarc.Data.DataResponse<ITimeEntryVm[]>>;
        getAvailableBookingTypesMultipleRequest(params: TimeEntryGetAvailableBookingTypesEnumerableParams): Triarc.Data.DataRequest<string[]>;
        getAvailableBookingTypesMultiple(params: TimeEntryGetAvailableBookingTypesEnumerableParams): ng.IPromise<Triarc.Data.DataResponse<string[]>>;
        newCheckUserResult(): ICheckUserResult;
        newTimeEntryVm(): ITimeEntryVm;
        newTimeEntryModel(): ITimeEntryModel;
        newTimeEntryCollection(): ITimeEntryCollection;
        newTimeEntrySearchVm(): ITimeEntrySearchVm;
    }
    class TimeEntryResource implements ITimeEntryResource {
        private $requestSender;
        constructor($requestSender: any);
        postSingleRequest(data: any): Triarc.Data.DataRequest<any>;
        postSingle(data: any): any;
        postMultipleRequest(data: any): Triarc.Data.DataRequest<any>;
        postMultiple(data: any): any;
        validateUserRequest(params: any): Triarc.Data.DataRequest<ICheckUserResult>;
        validateUser(params: any): any;
        putRequest(data: any): Triarc.Data.DataRequest<boolean>;
        put(data: any): any;
        deleteRequest(data: any): Triarc.Data.DataRequest<boolean>;
        delete(data: any): any;
        validateWorkObjectRequest(params: any): Triarc.Data.DataRequest<EAuftragVerificationStatus>;
        validateWorkObject(params: any): any;
        upateLegacyEntriesRequest(): Triarc.Data.DataRequest<any>;
        upateLegacyEntries(): any;
        searchTimeEntriesMultipleRequest(params: any, data: any): Triarc.Data.DataRequest<ITimeEntryVm[]>;
        searchTimeEntriesMultiple(params: any, data: any): any;
        getAvailableBookingTypesMultipleRequest(params: any): Triarc.Data.DataRequest<string[]>;
        getAvailableBookingTypesMultiple(params: any): any;
        newCheckUserResult(): ICheckUserResult;
        newTimeEntryVm(): ITimeEntryVm;
        newTimeEntryModel(): ITimeEntryModel;
        newTimeEntryCollection(): ITimeEntryCollection;
        newTimeEntrySearchVm(): ITimeEntrySearchVm;
    }
    interface ProxyContainer {
        Version: IVersionResource;
        Image: IImageResource;
        Employee: IEmployeeResource;
        Address: IAddressResource;
        Timesheet: ITimesheetResource;
        Operation: IOperationResource;
        PdfGenerator: IPdfGeneratorResource;
        TimeBooking: ITimeBookingResource;
        Admin: IAdminResource;
        GlobalMessage: IGlobalMessageResource;
        Person: IPersonResource;
        Project: IProjectResource;
        Expenses: IExpensesResource;
        Config: IConfigResource;
        ConfigurationProfile: IConfigurationProfileResource;
        WorkReport: IWorkReportResource;
        Claim: IClaimResource;
        Saldo: ISaldoResource;
        WorkObject: IWorkObjectResource;
        Account: IAccountResource;
        PersonalMessage: IPersonalMessageResource;
        TimeEntryType: ITimeEntryTypeResource;
        Location: ILocationResource;
        TimeEntry: ITimeEntryResource;
    }
}
declare var timeRecorder: ng.IModule;
declare module TimeRecorder {
    var routingParent: any;
}
interface IToSelectScope extends ng.IScope {
    model: TimeRecorder.Web.ToSelectOption[];
    source: TimeRecorder.Web.ToSelectOption[];
    search: string;
    filter: (item: TimeRecorder.Web.ToSelectOption) => boolean;
    addItem: (item: TimeRecorder.Web.ToSelectOption) => void;
    removeItem: (item: TimeRecorder.Web.ToSelectOption) => void;
    realign: () => void;
}
declare module TimeRecorder.Web.Business {
    class TimesheetEntryTypeVm {
        private cm;
        constructor(cm: () => Data.ITimesheetTimeEntryTypeCm);
        id: number;
        abbreviation: string;
        name: string;
    }
}
declare module TimeRecorder.Web.Business {
    class TimesheetAvailabilityTimeEntryVm {
        private cm;
        private entryType;
        constructor(cm: () => Data.ITimesheetAvailabilityTimeEntryCm, entryType: () => TimesheetEntryTypeVm);
        entryTypeId: number;
        mins: number;
        abbreviation: string;
        name: string;
    }
}
declare module TimeRecorder.Web.Business {
    class TimeEntryVm {
        private cm;
        private availabilityEntryTypes;
        private _availabilityTimeEntries;
        private _totalUnavalable;
        private _threshold;
        constructor(cm: () => Data.ITimesheetTimeEntryCm, availabilityEntryTypes: () => TimesheetEntryTypeVm[]);
        date: Date;
        planned: number;
        done: any;
        availabilityTimeEntries: TimesheetAvailabilityTimeEntryVm[];
        totalAvailability: any;
    }
}
declare module TimeRecorder.Web.Business {
    class TimesheetEmployeeVm {
        private cm;
        private availabilityEntryTypes;
        private _dayEntries;
        private _totalMonthPlanned;
        private _totalMonthDone;
        private _totalMonthUnAvailable;
        constructor(cm: () => Data.ITimesheetEmployeeCm, availabilityEntryTypes: () => TimesheetEntryTypeVm[]);
        id: number;
        name: string;
        firstName: string;
        lastName: string;
        timeEntries: TimeEntryVm[];
        timeEntry(date: Date): TimeEntryVm;
        totalMonthPlanned: any;
        totalMonthDone: any;
        totalMonthAvailabilityEntries: any;
        totalMonthAvailabilityFor(availabilityEntryType: TimesheetEntryTypeVm): number;
        update(cm: Data.ITimesheetEmployeeCm): void;
        reset(): void;
        toCm(): Data.ITimesheetEmployeeCm;
    }
}
declare module TimeRecorder.Web.Business {
    class TimesheetVm {
        private cm;
        private _timeSheetEmployees;
        private _thresholds;
        private _availabilityEntryTypes;
        constructor(cm: () => Data.ITimesheetCm);
        timeSheetEmployees: TimesheetEmployeeVm[];
        thresholds: TimesheetThresholdVm[];
        availabilityEntryTypes: TimesheetEntryTypeVm[];
        update(cm: Data.ITimesheetCm): void;
        reset(): void;
        toCm(): Data.ITimesheetCm;
    }
}
declare module TimeRecorder.Web.Business {
    class TimesheetThresholdVm {
        private cm;
        constructor(cm: () => Data.ITimesheetThresholdCm);
        fromMins: number;
        toMins: number;
        color: string;
        type: Data.EThresholdType;
    }
}
declare module TimeRecorder.Web.Business {
    class ExpenseVm {
        private cm;
        constructor(cm: () => Data.IExpenseCm);
        getCm(): Data.IExpenseCm;
        id: number;
        description: string;
        employeeId: number;
        value: number;
        date: Date;
        timestamp: number;
        expenseTypeId: number;
        visaEmployeeId: number;
        visaTimestamp: Date;
    }
}
declare module TimeRecorder.Web.Business {
    class ExpenseTypeVm {
        private cm;
        constructor(cm: () => Data.IExpenseTypeCm);
        id: number;
        name: string;
        description: string;
        validFrom: Date;
        validTo: Date;
        amountBased: boolean;
        timestamp: number;
        unitOfMeasure: string;
    }
}
declare module TimeRecorder.Web.Bu {
    class PersonVm {
        protected cm: () => Data.IPersonCm;
        constructor(cm: () => Data.IPersonCm);
        addressId: number;
        lastName: string;
        firstName: string;
        email: string;
        telephone: string;
        id: number;
        timestamp: Date;
        city: string;
        zipCode: string;
        country: string;
        countryCode: string;
        street: string;
        streetNumber: string;
        fullName: string;
        update(entityCm: Data.IPersonCm): void;
        reset(): void;
    }
}
declare module TimeRecorder.Web.Business {
    import PersonVm = Web.Bu.PersonVm;
    class EmployeeVm extends PersonVm {
        protected cm: () => Data.IEmployeeCm;
        constructor(cm: () => Data.IEmployeeCm);
        employeeId: string;
        profileId: number;
        userId: string;
        userName: string;
        emergencyPin: string;
        externalId: string;
        bookingLock: Date;
    }
}
declare module TimeRecorder.Web.Business {
    class ProjectVm {
        private cm;
        constructor(cm: () => Data.IProjectCm);
        id: number;
        name: string;
        parentId: number;
        description: string;
        bookable: boolean;
    }
}
declare module TimeRecorder.Web.Business {
    class ClientVm {
        private cm;
        constructor(cm: () => Data.IClientCm);
        id: number;
        name: string;
        mainContact: any;
        mainAddress: any;
    }
}
declare module TimeRecorder.Web.Bu {
    class ContactVm extends PersonVm {
        protected cm: () => Data.IContactCm;
        constructor(cm: () => Data.IContactCm);
        clientId: number;
        update(entityCm: Data.IPersonCm): void;
        reset(): void;
    }
}
declare module TimeRecorder.Web.Business {
    class TimeBookingVm {
        private cm;
        constructor(cm: () => Data.ITimeBookingCm);
        id: number;
        employeeId: number;
        employeeName: string;
        projectId: number;
        projectName: string;
        start: Date;
        stop: Date;
        state: Data.ETimeBookingState;
        typeId: number;
        typeName: string;
        comment: string;
        confirmed: boolean;
        parentId: number;
    }
}
declare module TimeRecorder.Web.Business {
    class TimeEntryTypeVm {
        private cm;
        constructor(cm: () => Data.ITimeEntryTypeCm);
        id: number;
        name: string;
    }
}
declare module TimeRecorder.Web.Business {
    class ExternalWorkReportVm {
        private cm;
        private _project;
        private _signedClient;
        constructor(cm: () => Data.IExternalWorkReportCm);
        id: number;
        from: Date;
        to: Date;
        employeeSignatureImage: string;
        customerSignatureImage: string;
        signatureTimestamp: Date;
        projectCompleted: boolean;
        project: any;
        signedClient: ClientVm;
        update(cm: () => Data.IExternalWorkReportCm): void;
    }
}
declare module TimeRecorder.Web.Business {
    class SearchExternalWorkReportVm {
        private cm;
        constructor(cm: () => Data.ISearchExternalWorkReportCm);
        id: number;
        from: Date;
        to: Date;
        projectCompleted: boolean;
    }
}
declare module TimeRecorder.Web.Business {
    class WorkReportVm {
        private cm;
        private externalWorkReportDc;
        private _externalWorkReport;
        private _timeBookings;
        constructor(cm: () => Data.IWorkReportCm, externalWorkReportDc: () => ExternalWorkReportDataController);
        externalWorkReport: ExternalWorkReportVm;
        timeBookings: TimeBookingVm[];
        toCm(): Data.IWorkReportCm;
    }
}
declare module TimeRecorder.Web.Business {
    class ExpenseTypeRepository {
        protected $proxy: Data.ProxyContainer;
        protected $q: ng.IQService;
        static $inject: string[];
        static serviceId: string;
        constructor($proxy: Data.ProxyContainer, $q: ng.IQService);
        getAllExpenses(): ng.IPromise<Data.IExpenseTypeCm[]>;
    }
}
declare module TimeRecorder.Web.Business {
    class ExpenseRepository {
        protected $proxy: Data.ProxyContainer;
        protected $q: ng.IQService;
        static $inject: string[];
        static serviceId: string;
        constructor($proxy: Data.ProxyContainer, $q: ng.IQService);
        search(skip?: number, take?: number, from?: Date, to?: Date, employeeId?: number): ng.IPromise<Data.IExpenseCm[]>;
        addOrUpdate(expenseCm: Data.IExpenseCm): ng.IPromise<Data.IExpenseCm>;
        getExpenseById(id: number): ng.IPromise<Data.IExpenseCm>;
        delete(id: number): ng.IPromise<void>;
    }
}
declare module TimeRecorder.Web.Business {
    class ProjectRepository {
        protected $proxy: Data.ProxyContainer;
        protected $q: ng.IQService;
        static $inject: string[];
        static serviceId: string;
        constructor($proxy: Data.ProxyContainer, $q: ng.IQService);
        getProjectById(id: number): ng.IPromise<Data.IProjectCm>;
        getProjectsById(ids: number[]): ng.IPromise<Data.IProjectCm[]>;
        search(searchValue: string, skip: number, take: number): ng.IPromise<Data.IProjectCm[]>;
    }
}
declare module TimeRecorder.Web.Business {
    import PersonVm = Web.Bu.PersonVm;
    class PeopleRepository {
        protected $proxy: Data.ProxyContainer;
        static $inject: string[];
        static serviceId: string;
        constructor($proxy: Data.ProxyContainer);
        getContactsForClient(clientId: number, isLiveData: boolean): ng.IPromise<PersonVm[]>;
        getPerson(id: number, isLiveData: boolean): ng.IPromise<Data.IPersonCm>;
        searchPeople(searchString: string): ng.IPromise<Data.IPersonCm[]>;
    }
}
declare module TimeRecorder.Web.Business {
    class EmployeeRepository {
        protected $proxy: Data.ProxyContainer;
        static $inject: string[];
        static serviceId: string;
        constructor($proxy: Data.ProxyContainer);
        getById(id: string): ng.IPromise<Data.IEmployeeCm>;
        getByIds(ids: number[]): ng.IPromise<Data.IEmployeeCm[]>;
        getAllEmployees(): ng.IPromise<Data.IEmployeeCm[]>;
        search(searchValue: string, skip: number, take: number): ng.IPromise<Data.IEmployeeCm[]>;
    }
}
declare module TimeRecorder.Web.Business {
    class TimeEntryTypeRepository {
        private $proxy;
        private $q;
        static serviceId: string;
        static $inject: string[];
        constructor($proxy: Data.ProxyContainer, $q: ng.IQService);
        search(searchValue: string, skip: number, take: number): ng.IPromise<Data.ITimeEntryTypeCm[]>;
        getMetaData(): ng.IPromise<Data.ITimeBookingMetaDataVm>;
        getTypesById(ids: number[]): ng.IPromise<Data.ITimeEntryTypeCm[]>;
    }
}
declare module TimeRecorder.Web.Business {
    class TimeBookingRepository {
        private $proxy;
        private $q;
        static serviceId: string;
        static $inject: string[];
        constructor($proxy: Data.ProxyContainer, $q: ng.IQService);
        getDetail(id: number): ng.IPromise<Business.TimeBookingVm>;
        search(data: Data.ITimeBookingSearchParams): ng.IPromise<Business.TimeBookingVm[]>;
        save(data: Data.ITimeBookingCm): ng.IPromise<Triarc.Data.DataResponse<Data.ITimeBookingCm>>;
        remove(id: number): ng.IPromise<Triarc.Data.DataResponse<boolean>>;
        resolveFor(ids: number[]): ng.IPromise<Triarc.Data.DataResponse<Data.ITimeBookingCm[]>>;
    }
}
declare module TimeRecorder.Web.Business {
    class ExternalWorkReportRepository {
        private $proxy;
        private $q;
        static serviceId: string;
        static $inject: string[];
        constructor($proxy: Data.ProxyContainer, $q: ng.IQService);
        get(id: number): ng.IPromise<Data.IWorkReportCm>;
        save(data: Business.WorkReportVm): ng.IPromise<Data.IExternalWorkReportCm>;
        search(employeeId?: number, projectId?: number, projectComplete?: boolean): ng.IPromise<Triarc.Data.DataResponse<Data.ISearchExternalWorkReportCm[]>>;
    }
}
declare module TimeRecorder.Web.Business {
    class TimeSheetDataController {
        private $q;
        private $proxy;
        static serviceId: string;
        static $inject: string[];
        container: Business.DataControllerContainer;
        constructor($q: ng.IQService, $proxy: Data.ProxyContainer);
    }
}
declare module TimeRecorder.Web.Business {
    class ExpenseTypeDataController {
        private $q;
        private expenseTypeRepository;
        static serviceId: string;
        static $inject: string[];
        container: Business.DataControllerContainer;
        constructor($q: ng.IQService, expenseTypeRepository: ExpenseTypeRepository);
        getAllExpenseTypes(): ng.IPromise<ExpenseTypeVm[]>;
    }
}
declare module TimeRecorder.Web.Business {
    class ExpenseDataController {
        private $q;
        private expenseRepository;
        static serviceId: string;
        static $inject: string[];
        container: Business.DataControllerContainer;
        constructor($q: ng.IQService, expenseRepository: ExpenseRepository);
        search(skip?: number, take?: number, from?: Date, to?: Date, employeeId?: number): ng.IPromise<ExpenseVm[]>;
        getExpenseById(id: number): ng.IPromise<ExpenseVm>;
        addOrUpdateExpense(expenseVm: ExpenseVm): ng.IPromise<ExpenseVm>;
        delete(id: number): ng.IPromise<void>;
    }
}
declare module TimeRecorder.Web.Business {
    class ProjectDataController {
        private $q;
        private projectRepository;
        static serviceId: string;
        static $inject: string[];
        container: Business.DataControllerContainer;
        constructor($q: ng.IQService, projectRepository: ProjectRepository);
        getProjectById(id: number): ng.IPromise<ProjectVm>;
        getProjectsById(ids: number[]): ng.IPromise<ProjectVm[]>;
        search(searchValue: string, skip: number, take: number): ng.IPromise<ProjectVm[]>;
    }
}
declare module TimeRecorder.Web.Business {
    import PersonVm = Web.Bu.PersonVm;
    class PeopleDataController {
        private $q;
        private peopleRepository;
        static serviceId: string;
        static $inject: string[];
        constructor($q: ng.IQService, peopleRepository: PeopleRepository);
        getContactsForClient(clientId: number, isLiveData: boolean): ng.IPromise<PersonVm[]>;
        getPerson(id: number, isLiveData: boolean): ng.IPromise<PersonVm>;
        searchPeople(searchString: string): ng.IPromise<PersonVm[]>;
    }
}
declare module TimeRecorder.Web.Business {
    class EmployeeDataController {
        private $q;
        private employeeRepository;
        static serviceId: string;
        static $inject: string[];
        constructor($q: ng.IQService, employeeRepository: EmployeeRepository);
        getAllPersons(): ng.IPromise<Business.EmployeeVm[]>;
        getById(id: string): ng.IPromise<Business.EmployeeVm>;
        getByIds(ids: number[]): ng.IPromise<Business.EmployeeVm[]>;
        search(searchValue: string, skip: number, take: number): ng.IPromise<EmployeeVm[]>;
    }
}
declare module TimeRecorder.Web.Business {
    class TimeBookingDataController {
        private $q;
        repository: TimeBookingRepository;
        static serviceId: string;
        static $inject: string[];
        container: Business.DataControllerContainer;
        constructor($q: ng.IQService, repository: TimeBookingRepository);
        getIsEditable(entry: Data.ITimeBookingCm): boolean;
        getDetail(id: number): ng.IPromise<TimeBookingVm>;
        search(data: Data.ITimeBookingSearchParams): ng.IPromise<TimeBookingVm[]>;
        save(data: Data.ITimeBookingCm): ng.IPromise<Triarc.Data.DataResponse<Data.ITimeBookingCm>>;
        remove(id: number): ng.IPromise<Triarc.Data.DataResponse<boolean>>;
        resolveFor(ids: number[]): ng.IPromise<TimeBookingVm[]>;
    }
}
declare module TimeRecorder.Web.Business {
    interface IMetaDataVm {
        id: number;
    }
    class TimeEntryTypeDataController {
        private $q;
        private repository;
        static serviceId: string;
        static $inject: string[];
        container: Business.DataControllerContainer;
        constructor($q: ng.IQService, repository: TimeEntryTypeRepository);
        search(searchValue: string, skip: number, take: number): ng.IPromise<TimeEntryTypeVm[]>;
        getTypesById(ids: number[]): ng.IPromise<TimeEntryTypeVm[]>;
        metaData: Data.ITimeBookingMetaDataVm;
        getMetaData(forceReload: boolean): ng.IPromise<Data.ITimeBookingMetaDataVm>;
        getMetaDataVm<T extends IMetaDataVm>(id: number, data: T[]): T;
        getStateColor(state: Data.ETimeBookingState): string;
    }
}
declare module TimeRecorder.Web.Business {
    class ExternalWorkReportDataController {
        private $q;
        repository: ExternalWorkReportRepository;
        static serviceId: string;
        static $inject: string[];
        container: Business.DataControllerContainer;
        constructor($q: ng.IQService, repository: ExternalWorkReportRepository);
        get(id: number): ng.IPromise<Business.WorkReportVm>;
        save(workReport: Business.WorkReportVm): ng.IPromise<void>;
        search(employeeId?: number, projectId?: number, projectComplete?: boolean): ng.IPromise<SearchExternalWorkReportVm[]>;
        createNewWorkReport(employeeId: number, projectId: number): WorkReportVm;
    }
}
declare module TimeRecorder.Web.Business {
    class DataControllerContainer {
        expencesDc: ExpenseDataController;
        expenceTypeDc: ExpenseTypeDataController;
        externalWorkReportDc: ExternalWorkReportDataController;
        projectDc: ProjectDataController;
        timeBookingDc: TimeBookingDataController;
        timeEntryTypeDc: TimeEntryTypeDataController;
        timeSheetDc: TimeSheetDataController;
        static serviceId: string;
        static $inject: string[];
        constructor(expencesDc: ExpenseDataController, expenceTypeDc: ExpenseTypeDataController, externalWorkReportDc: ExternalWorkReportDataController, projectDc: ProjectDataController, timeBookingDc: TimeBookingDataController, timeEntryTypeDc: TimeEntryTypeDataController, timeSheetDc: TimeSheetDataController);
        initialize(): void;
    }
}
declare module TimeRecorder.Web {
    interface IAuthenticationService {
        getAppUser(): ng.IPromise<Data.IAppUser>;
        login(password: string, userName: string, rememberMe: boolean): ng.IPromise<any>;
        logout(): void;
        hasClaim(claim: string): boolean;
        hasAnyClaimOf(claims: string[]): boolean;
        hasClaimEnsureLoggedIn(claim: string): ng.IPromise<boolean>;
        hasAnyClaimOfEnsureLoggedIn(claims: string[]): ng.IPromise<boolean>;
    }
}
declare module TimeRecorder.Web {
    class AuthenticationService implements IAuthenticationService {
        private $proxy;
        private $q;
        static $inject: string[];
        static serviceId: string;
        appUser: Data.IAppUser;
        isAuthenticated: boolean;
        private loginInfo;
        constructor($proxy: Data.ProxyContainer, $q: ng.IQService);
        getAppUser: () => ng.IPromise<Data.IAppUser>;
        login: (password: string, userName: string, rememberMe: boolean) => ng.IPromise<any>;
        logout: () => void;
        hasAnyClaimOf(claims: string[]): boolean;
        hasAnyClaimOfEnsureLoggedIn(claims: string[]): ng.IPromise<boolean>;
        hasClaimEnsureLoggedIn(claim: string): ng.IPromise<boolean>;
        hasClaim(claim: string): boolean;
        private containsAnyClaimOf(col, claims);
        private containsClaim(col, claim);
    }
}
declare module TimeRecorder.Web {
    class UserService {
        private $proxy;
        private $q;
        static serviceId: string;
        static $inject: string[];
        skip: number;
        take: number;
        initialTake: number;
        search: string;
        hasSearch: boolean;
        isLoading: boolean;
        endReached: boolean;
        users: Data.IUserVm[];
        constructor($proxy: Data.ProxyContainer, $q: ng.IQService);
        startSearch(): ng.IPromise<{}>;
        loadMore(): void;
        getUsers: () => ng.IPromise<Data.IUserVm[]>;
        removeUser: (user: Data.IUserVm) => ng.IPromise<boolean>;
        resetPassword(userId: string): ng.IPromise<boolean>;
        editUser: (user: Data.IUserVm) => ng.IPromise<Boolean>;
        createUser: (user: Data.IUserVm) => ng.IPromise<Boolean>;
    }
}
declare module TimeRecorder.Web {
    class NotificationServce {
        static $inject: any[];
        static serviceId: string;
        constructor();
        error: (msg: string, title?: string) => void;
        info: (msg: string, title?: string) => void;
    }
}
declare module TimeRecorder.Web {
    class RoleService {
        private $proxy;
        private $q;
        static serviceId: string;
        static $inject: string[];
        constructor($proxy: Data.ProxyContainer, $q: ng.IQService);
        saveRole: (role: Data.IProfileConfigVm) => ng.IPromise<boolean>;
        deleteRole: (role: Data.IProfileConfigVm) => ng.IPromise<boolean>;
        loadClaims: () => ng.IPromise<Data.IFeatureClaimVm[]>;
        loadRoles: () => ng.IPromise<Data.IProfileConfigVm[]>;
    }
}
declare module TimeRecorder.Web {
    class LocationService {
        private $proxy;
        private $q;
        static serviceId: string;
        static $inject: string[];
        constructor($proxy: Data.ProxyContainer, $q: ng.IQService);
        loadLocations: () => ng.IPromise<Data.ILocationVm[]>;
        saveLocation: (location: Data.ILocationVm) => ng.IPromise<{}>;
        deleteLocation: (locationId: number) => ng.IPromise<{}>;
    }
}
declare module TimeRecorder.Web {
    class PersonService {
        private $proxy;
        private $q;
        private personController;
        static serviceId: string;
        static $inject: string[];
        skip: number;
        take: number;
        initialTake: number;
        search: string;
        hasSearch: boolean;
        isLoading: boolean;
        endReached: boolean;
        people: Data.IPersonVm[];
        constructor($proxy: Data.ProxyContainer, $q: ng.IQService, personController: Business.EmployeeDataController);
        startSearch(): ng.IPromise<{}>;
        loadMore(): void;
        loadPersons(): ng.IPromise<Business.EmployeeVm[]>;
        savePerson: (person: Data.IPersonVm) => ng.IPromise<boolean>;
        deletePerson: (personId: number) => ng.IPromise<{}>;
    }
}
declare module TimeRecorder.Web {
    class GlobalMessageService {
        private $q;
        private $proxy;
        static serviceId: string;
        static $inject: string[];
        constructor($q: ng.IQService, $proxy: Data.ProxyContainer);
        loadMessages: () => ng.IPromise<Data.IGlobalMessageVm[]>;
        putMessage: (msg: Data.IGlobalMessageVm) => ng.IPromise<{}>;
        deleteMessage: (id: number) => ng.IPromise<{}>;
    }
}
declare module TimeRecorder.Web {
    class PersonalMessageService {
        private $proxy;
        private $q;
        static $inject: string[];
        static serviceId: string;
        constructor($proxy: Data.ProxyContainer, $q: ng.IQService);
        saveMessage: (message: Data.ISaveMessage) => ng.IPromise<Triarc.Data.DataResponse<any>>;
        getSentMessages: (personId: number) => ng.IPromise<Triarc.Data.DataResponse<Data.ISentMessage[]>>;
    }
}
declare module TimeRecorder.Web {
    class SearchService {
        private $proxy;
        private $q;
        static serviceId: string;
        static $inject: string[];
        from: Date;
        to: Date;
        type: string;
        personId: number;
        personSearch: string;
        state: string;
        take: number;
        skip: number;
        isLoading: boolean;
        hasSearch: boolean;
        endreached: boolean;
        currentResult: Data.ITimeEntryVm[];
        constructor($proxy: Data.ProxyContainer, $q: ng.IQService);
        getMore(): void;
        search(): void;
        private generateParams();
    }
}
declare module TimeRecorder.Web {
    class ProjectService {
        private $proxy;
        private $q;
        static serviceId: string;
        static $inject: string[];
        roots: Data.IProjectVm[];
        skip: number;
        take: number;
        initialTake: number;
        search: string;
        hasSearch: boolean;
        isLoading: boolean;
        endReached: boolean;
        constructor($proxy: Data.ProxyContainer, $q: ng.IQService);
        init(): void;
        startSearch(): void;
        loadMore(): void;
        loadProjectPersons(): ng.IPromise<Data.IProjectPersonVm[]>;
        loadProjectLocations(): ng.IPromise<Data.IProjectLocationVm[]>;
        changeDescription(projectId: number, description: string): ng.IPromise<{}>;
        changePersonAssignement(projectId: number, personId: number, value: boolean): void;
        changeLocationAssignement(projectId: number, locationId: number, value: boolean): void;
        updateFlag: (project: IProjectTreeNode, flag: number) => void;
        loadChildren(root: Data.IProjectVm): ng.IPromise<{}>;
        private handleFlag(project, flag);
    }
}
declare module TimeRecorder.Web {
    class UserController {
        private authentication;
        private $state;
        private user;
        private notification;
        private person;
        private location;
        static controllerId: string;
        static $inject: string[];
        selectedUser: Data.IUserVm;
        loading: boolean;
        newUser: boolean;
        editPassword: boolean;
        showForm: boolean;
        locations: Data.ILocationVm[];
        persons: Business.EmployeeVm[];
        nameMaxLength: number;
        idMaxLength: number;
        passwordMaxLength: number;
        constructor(authentication: IAuthenticationService, $state: any, user: UserService, notification: NotificationServce, person: PersonService, location: LocationService);
        init(): void;
        loadPersons: () => void;
        loadLocations: () => void;
        loadUsers: () => void;
        select(user: Data.IUserVm): void;
        changePw: () => void;
        stopChangePw: () => void;
        create: () => void;
        delete: () => void;
        save: () => void;
        resetPw(): void;
        private editUser(user);
        private createUser(user);
        private validate;
    }
}
declare module TimeRecorder.Web {
    class RoleController {
        private authentication;
        private $state;
        private role;
        private notification;
        static controllerId: string;
        static $inject: string[];
        claims: Data.IFeatureClaimVm[];
        roles: Data.IProfileConfigVm[];
        activeClaims: FeatureClaim[];
        inactiveClaims: FeatureClaim[];
        selectedRole: Data.IProfileConfigVm;
        newRole: boolean;
        loading: boolean;
        selectedClaim: FeatureClaim;
        isCurrentClaimActive: boolean;
        maxNameLength: number;
        constructor(authentication: IAuthenticationService, $state: any, role: RoleService, notification: NotificationServce);
        init(): void;
        loadRoles: () => void;
        loadClaims: () => void;
        select(role: Data.IProfileConfigVm): void;
        create: () => void;
        selectClaim(claim: FeatureClaim, active: boolean): void;
        addClaim(): void;
        removeClaim(): void;
        save: () => void;
        delete: () => void;
        toggleClaim: (claim: Data.IFeatureClaimVm) => void;
        hasClaim: (claim: Data.IFeatureClaimVm) => boolean;
        private validate;
    }
    class Field {
        name: string;
        value: any;
        type: number;
        constructor(name: string, value: any, type: number);
    }
    class FeatureClaim {
        name: string;
        id: number;
        description: string;
        fields: Field[];
        constructor(name: string, id: number, description: string, json: string, fileds: Data.IFeatureClaimFieldVm[]);
        convertToVm(): Data.IFeatureConfigurationVm;
    }
}
declare module TimeRecorder.Web {
    class DownloadController {
        private $proxy;
        static controllerId: string;
        static $inject: string[];
        versions: Data.IVersionVm[];
        loading: boolean;
        constructor($proxy: Data.ProxyContainer);
        getVersions: () => void;
        getIosDownloadLink(versionCode: string): string;
    }
}
declare module TimeRecorder.Web {
    class LocationController {
        private location;
        private notification;
        private authentication;
        private $state;
        static $inject: string[];
        static controllerId: string;
        locations: Data.ILocationVm[];
        loading: boolean;
        showForm: boolean;
        selectedLocation: Data.ILocationVm;
        idMaxLength: number;
        nameMaxLength: number;
        constructor(location: LocationService, notification: NotificationServce, authentication: IAuthenticationService, $state: any);
        init(): void;
        select(location: Data.ILocationVm): void;
        create: () => void;
        save: () => void;
        delete: () => void;
        private validate;
        loadLocations: () => void;
    }
}
declare module TimeRecorder.Web {
    class PersonController {
        person: PersonService;
        private role;
        private notification;
        private authentication;
        private $state;
        private $proxy;
        static $inject: string[];
        static controllerId: string;
        loading: boolean;
        showForm: boolean;
        profiles: Data.IProfileConfigVm[];
        selectedPerson: Data.IPersonVm;
        idMaxLength: number;
        firstNameMaxLength: number;
        lastNameMaxLength: number;
        webServiceAvailable: boolean;
        constructor(person: PersonService, role: RoleService, notification: NotificationServce, authentication: IAuthenticationService, $state: any, $proxy: Data.ProxyContainer);
        init(): void;
        select(person: Data.IPersonVm): void;
        create: () => void;
        save: () => void;
        delete: () => void;
        triggerPersonImport(): void;
        getRole(person: Data.IPersonVm): string;
        private validate;
        loadPersons: () => void;
        loadProfiles: () => void;
    }
}
declare module TimeRecorder.Web {
    class MessageController {
        private $q;
        private globalMessages;
        private notification;
        private authentication;
        private $state;
        static controllerId: string;
        static $inject: string[];
        loading: boolean;
        showForm: boolean;
        mode: number;
        textMode: number;
        bullets: {
            str: string;
        }[];
        title: string;
        imgUrl: string;
        rawHtml: string;
        text: string;
        hasImage: boolean;
        uploadImage: boolean;
        bytes: any;
        fileType: string;
        fileSize: number;
        fileName: string;
        maxTextLength: number;
        maxBulletLength: number;
        maxTitleLength: number;
        maxBullets: number;
        renderedHtml: string;
        showPreview: boolean;
        messages: Data.IGlobalMessageVm[];
        selectedMessage: Data.IGlobalMessageVm;
        constructor($q: ng.IQService, globalMessages: GlobalMessageService, notification: NotificationServce, authentication: IAuthenticationService, $state: any);
        init(): void;
        private resetForm;
        select: (msg: Data.IGlobalMessageVm) => void;
        create: () => void;
        delete: () => void;
        loadMessages: () => void;
        switchMode: (mode: any) => void;
        switchTextMode: (mode: any) => void;
        addBullet: () => void;
        removeBullet: (index: any) => void;
        preview: () => void;
        hidePreview: () => void;
        save: () => void;
        fileSelected: () => void;
        removeImage: () => void;
        private parseHtml;
        private renderHtml;
        private renderBullets;
        private renderText;
        private renderTitle;
        private renderImage;
        private renderOneCol;
        private renderTwoCol;
        private renderRaw;
    }
}
declare module TimeRecorder.Web {
    class ExpensesSideController {
        private $state;
        static $inject: string[];
        static controllerId: string;
        constructor($state: any);
        close(): void;
    }
}
declare module TimeRecorder.Web {
    class PersonalMessageController {
        private personalMessages;
        private person;
        private authentication;
        private notification;
        private $state;
        static $inject: string[];
        static controllerId: string;
        persons: Business.EmployeeVm[];
        selectOptions: ToSelectOption[];
        recipients: ToSelectOption[];
        body: string;
        head: string;
        messages: Data.ISentMessage[];
        selectedId: number;
        showForm: boolean;
        isNew: boolean;
        maxMsgLength: number;
        constructor(personalMessages: PersonalMessageService, person: PersonService, authentication: IAuthenticationService, notification: NotificationServce, $state: any);
        init: () => void;
        send: () => void;
        select: (msg: Data.ISentMessage) => void;
        create: () => void;
        private loadSentMessages;
        private validate;
    }
    class ToSelectOption {
        value: string;
        id: number;
        read: boolean;
        htmlString: string;
        constructor(value: string, id: number, read: boolean);
        static convertToToSelectOptions<TSourceType>(source: TSourceType[], convertFn: (src: TSourceType) => ToSelectOption): any[];
    }
}
declare module TimeRecorder.Web {
    class ConfigController {
        private notification;
        private authentication;
        private $state;
        private $proxy;
        private $scope;
        private trWebApiUrl;
        static $inject: string[];
        static controllerId: string;
        config: Data.IConfigVm;
        hasImage: boolean;
        imgUrl: string;
        fileName: string;
        fileSize: number;
        fileType: string;
        bytes: any[];
        newImage: boolean;
        constructor(notification: NotificationServce, authentication: IAuthenticationService, $state: any, $proxy: Data.ProxyContainer, $scope: ng.IScope, trWebApiUrl: string);
        init(): void;
        private loadConfig();
        save(): void;
        onImageSeleted(): void;
        removeImage(): void;
        private validate();
    }
}
declare module TimeRecorder.Web {
    class EntryController {
        search: SearchService;
        private authentication;
        private $state;
        private person;
        private location;
        private $proxy;
        private notification;
        static controllerId: string;
        static $inject: string[];
        persons: TypeAheadPerson[];
        people: Business.EmployeeVm[];
        locations: Data.ILocationVm[];
        dateFormat: string;
        fromOpen: boolean;
        toOpen: boolean;
        editOpen: boolean;
        editMode: boolean;
        newMode: boolean;
        types: string[];
        selectedEntry: Data.ITimeEntryVm;
        selectedPerson: string;
        webServiceAvailable: boolean;
        minDate: Date;
        constructor(search: SearchService, authentication: IAuthenticationService, $state: any, person: PersonService, location: LocationService, $proxy: Data.ProxyContainer, notification: NotificationServce);
        init(): void;
        open(event: any, cal: any): void;
        selected(item: TypeAheadPerson): void;
        selectEntry(entry: Data.ITimeEntryVm): void;
        newEntry(): void;
        cancelEdit(): void;
        personChanged(): void;
        save(): void;
        timechange(): void;
        canEdit(): boolean;
        delete(): void;
        private validate();
        states: string[];
        datepickerOptions: {};
    }
    class TypeAheadPerson {
        id: number;
        label: string;
        constructor(id: number, label: string);
    }
}
declare module TimeRecorder.Web {
    class TimeBookingController {
        private authentication;
        private timeBookingDataController;
        private timeEntryTypeDataController;
        private employeeDataController;
        private projectDataController;
        private $state;
        static controllerId: string;
        static $inject: string[];
        constructor(authentication: IAuthenticationService, timeBookingDataController: Business.TimeBookingDataController, timeEntryTypeDataController: Business.TimeEntryTypeDataController, employeeDataController: Business.EmployeeDataController, projectDataController: Business.ProjectDataController, $state: any);
        metaData: Data.ITimeBookingMetaDataVm;
        searchResult: Business.TimeBookingVm[];
        showConfirmation: boolean;
        fromValue: Date;
        toValue: Date;
        stateValue: number;
        personValue: string;
        typeValue: number;
        calendarSettings: {
            fromIsOpen: boolean;
            toIsOpen: boolean;
            datepickerOptions: {
                currentText: string;
                clearText: string;
                closeText: string;
            };
            dateFormat: string;
            minDate: DateConstructor;
        };
        private init();
        getMetaData(): Data.ITimeBookingMetaDataVm;
        setConfirmed(timebooking: Data.ITimeBookingCm): void;
        getStateById(id: number): Data.ETimeBookingState;
        getBookingBackground(timebooking: Data.ITimeBookingCm): string;
        getStateColor(state: Data.ETimeBookingState): string;
        search(): ng.IPromise<void>;
        resolveTimeBookingData(data: Business.TimeBookingVm[], projects: Business.ProjectVm[], employees: Business.EmployeeVm[], types: Business.TimeEntryTypeVm[]): Business.TimeBookingVm[];
        openCalendar(event: any, key: string): void;
    }
}
declare module TimeRecorder.Web {
    interface ITimebookingControllerScope extends ng.IScope {
        timebookingForm: ng.IFormController;
    }
    class TimeBookingFormController {
        $scope: ITimebookingControllerScope;
        private timeBookingDataController;
        private timeEntryTypeDataController;
        private employeeDataController;
        private projectDataController;
        private authentication;
        private $state;
        private $stateParams;
        static controllerId: string;
        static $inject: string[];
        triggerValidation: boolean;
        idValue: number;
        employee: Business.EmployeeVm;
        project: Business.ProjectVm;
        entryType: Business.TimeEntryTypeVm;
        fromValue: Date;
        fromTimeValue: Date;
        toValue: Date;
        toTimeValue: Date;
        comment: string;
        searchedProjects: Business.ProjectVm[];
        searchedTypes: Business.TimeEntryTypeVm[];
        searchedEmployees: Business.EmployeeVm[];
        constructor($scope: ITimebookingControllerScope, timeBookingDataController: Business.TimeBookingDataController, timeEntryTypeDataController: Business.TimeEntryTypeDataController, employeeDataController: Business.EmployeeDataController, projectDataController: Business.ProjectDataController, authentication: IAuthenticationService, $state: any, $stateParams: any);
        private init();
        isNew(): boolean;
        remove(): void;
        searchType(searchValue: string): void;
        searchProject(searchValue: string): void;
        searchEmployee(searchValue: string): void;
        save(): void;
    }
}
declare module TimeRecorder.Web {
    class ProjectController {
        project: ProjectService;
        private $proxy;
        private notification;
        static controllerId: string;
        static $inject: string[];
        selectedNode: Data.IProjectVm;
        showForm: boolean;
        showFlags: boolean;
        inheritedPersons: SelectPerson[];
        inheritedLocations: SelectLocation[];
        persons: SelectPerson[];
        locations: SelectLocation[];
        currentLocations: SelectLocation[];
        currentPersons: SelectPerson[];
        mergePersons: SelectPerson[];
        mergeLocations: SelectLocation[];
        editMode: boolean;
        webServiceAvailable: boolean;
        constructor(project: ProjectService, $proxy: Data.ProxyContainer, notification: NotificationServce);
        private init();
        triggerProjectImport(): void;
        changeDescription(): void;
        saveDescription(): void;
        cancelEditDescription(): void;
        personAdded(person: any): void;
        personRemoved(person: any): void;
        locationAdded(location: any): void;
        locationRemoved(location: any): void;
        setFlag(project: IProjectTreeNode, flag: number): void;
        select(node: IProjectTreeNode): void;
        private updateMergeLocationList();
        private updateMergePersonList();
        private getAllPersons(project);
        private getAllLocations(project);
        private handleFlag(project, flag);
    }
    class SelectLocation implements Data.IProjectLocationVm, IMultiselectItem {
        locationId: number;
        name: string;
        constructor(model: Data.IProjectLocationVm);
        getId(): number;
        getValue(): string;
        static convert(data: Data.IProjectLocationVm[]): any[];
    }
    class SelectPerson implements Data.IProjectPersonVm, IMultiselectItem {
        personId: number;
        name: string;
        constructor(model: Data.IProjectPersonVm);
        getId(): number;
        getValue(): string;
        static convert(data: Data.IProjectPersonVm[]): any[];
    }
}
declare module TimeRecorder.Web {
    class ExpensesController {
        private $scope;
        private $q;
        private $authentication;
        private $expensesDataController;
        private $expenseTypeDataController;
        private $state;
        static controllerId: string;
        static $inject: string[];
        private searchResult;
        displayedExpenses: Business.ExpenseVm[];
        date: Date;
        private expenseTypesMap;
        private appUserId;
        private searchFrom;
        constructor($scope: ng.IScope, $q: ng.IQService, $authentication: IAuthenticationService, $expensesDataController: Business.ExpenseDataController, $expenseTypeDataController: Business.ExpenseTypeDataController, $state: any);
        private init();
        getExpenseTypeName(entry: Business.ExpenseVm): string;
        getValue(entry: Business.ExpenseVm): string;
        private refreshDisplayedExpenses();
        private getDayStart(time);
        search(force: boolean): void;
        addButtonCallback(): void;
        okButtonCallback(): void;
        getEntryPerDay: (day: number) => number;
        getTotalEntries(): number;
    }
}
declare module TimeRecorder.Web {
    interface IExpensesFormScope extends ng.IScope {
        expensesForm: ng.IFormController;
    }
    class ExpensesFormController {
        private $scope;
        private $q;
        private $expenseTypeDataController;
        private $expenseDataController;
        private $authentication;
        private $state;
        private $stateParams;
        static controllerId: string;
        static $inject: string[];
        idValue: number;
        selectedExpenseType: Business.ExpenseTypeVm;
        expenseTypes: Business.ExpenseTypeVm[];
        isSearchingProjects: boolean;
        datepickerOpened: boolean;
        expenseAmount: number;
        expenseDate: Date;
        expenseDescription: string;
        triggerValidation: boolean;
        private editedExpense;
        private appUserId;
        constructor($scope: IExpensesFormScope, $q: ng.IQService, $expenseTypeDataController: Business.ExpenseTypeDataController, $expenseDataController: Business.ExpenseDataController, $authentication: IAuthenticationService, $state: any, $stateParams: any);
        private init();
        isDisabled(): boolean;
        openDatepicker($event: any): void;
        isNew(): boolean;
        getAmountLabel(): string;
        save(): void;
        remove(): void;
    }
}
declare module TimeRecorder.Web {
    class TimeBookingSideController {
        private $state;
        static $inject: string[];
        static controllerId: string;
        constructor($state: any);
        close(): void;
    }
}
declare module TimeRecorder.Web {
    interface ITimeSheetControllerScope extends ng.IScope {
    }
    class TimeSheetController {
        $scope: ITimeSheetControllerScope;
        private blockUi;
        private $proxy;
        private $timeSheetDataController;
        private $projectDataController;
        private authentication;
        private $state;
        static $inject: string[];
        static controllerId: string;
        static onDirectiveExpansionRowEvent: string;
        selectedDate: Date;
        timesheetData: TimesheetData;
        selectedProject: Business.ProjectVm;
        searchedProjects: Business.ProjectVm[];
        isSearchingProjects: boolean;
        datePickerStates: {
            [name: string]: boolean;
        };
        datePickerOptions: {
            dateDisabled: string;
            datepickerMode: string;
        };
        constructor($scope: ITimeSheetControllerScope, blockUi: ng.ui.block.IBlockService, $proxy: Data.ProxyContainer, $timeSheetDataController: Business.TimeSheetDataController, $projectDataController: Business.ProjectDataController, authentication: IAuthenticationService, $state: ng.ui.IStateService);
        searchProjects(searchValue: string): void;
        private tryLoadData();
        private selectDate(date);
        openDatepicker($event: any, opened: any): void;
        rowExpansionEventName(): string;
        isWeekend(dayOfMonth: number): boolean;
        getDayThresholds(): Business.TimesheetThresholdVm[];
        getTotalMonthThresholds(): Business.TimesheetThresholdVm[];
    }
}
declare module angular {
    module ui {
        module block {
            interface IBlockService {
                start(message?: string): any;
                stop(): any;
                reset(): any;
                state(): any;
                instances: IBlockInstances;
            }
            interface IBlockInstances {
                get(id: string): IBlockService;
            }
        }
    }
}
declare module TimeRecorder.Web {
    interface ITimesheetUnavailabilityScope extends ng.IScope {
        toggleExpand(): any;
        isOpen: boolean;
        employee: Business.TimesheetEmployeeVm;
        rowHeight: number;
        rowHeightExpanded: number;
        availabilityEntryTypes: Business.TimesheetEntryTypeVm[];
        rowNumber: number;
        externalScope: ng.IScope;
    }
}
declare module TimeRecorder.Web {
    interface IDayColumn {
        date: Date;
    }
    class TimesheetData {
        static employeeCellTemplate: string;
        static dayCellTemplate: string;
        static totalMonthCellTemplate: string;
        static expansionRowTemplate: string;
        rowHeight: number;
        rowHeightExpanded: number;
        employeeColumnWidth: number;
        dayColumnWidth: number;
        totalColumnWidth: number;
        timesheet: Business.TimesheetVm;
        dayColumns: IDayColumn[];
        thresholdMap: Map<Data.EThresholdType, Business.TimesheetThresholdVm[]>;
        createVm(cm: Data.ITimesheetCm): Business.TimesheetVm;
        private createTestData();
        getDaysArray(date: Date): any[];
        createDayColumns(date: Date): void;
    }
}
declare module TimeRecorder.Web.Helper.Timesheet {
    function determineThreshold(value: number, thresholds: Business.TimesheetThresholdVm[]): Business.TimesheetThresholdVm;
}
declare module TimeRecorder.Web {
    interface ITimesheetDayCellDirectiveScope extends ng.IScope {
        timeEntry: Business.TimeEntryVm;
        isWeekend: boolean;
        columnWidth: number;
        thresholds: Business.TimesheetThresholdVm[];
        breachedThreshold(): boolean;
        selectedThreshold: Business.TimesheetThresholdVm;
    }
}
declare module TimeRecorder.Web {
    interface ITimesheetEmployeeCellDirectiveScope extends ng.IScope {
        employee: Business.TimesheetEmployeeVm;
        columnWidth: number;
        rowHeight: number;
        rowHeightExpanded: number;
        rowNumber: number;
        externalScope: ng.IScope;
        availabilityEntryTypes: Business.TimesheetEntryTypeVm[];
    }
}
declare module TimeRecorder.Web {
    interface ITimesheetTotalCellDirectiveScope extends ng.IScope {
        employee: Business.TimesheetEmployeeVm;
        columnWidth: number;
        thresholds: Business.TimesheetThresholdVm[];
        breachedThreshold(): boolean;
        selectedThreshold: Business.TimesheetThresholdVm;
        availabilityEntryTypes: Business.TimesheetEntryTypeVm[];
    }
}
declare module TimeRecorder.Web {
    interface IWorkReportControllerScope extends ng.IScope {
    }
    interface IDayContainer {
        date: Date;
        timeBookings: Business.TimeBookingVm[];
    }
    class WorkReportController {
        protected $scope: IWorkReportControllerScope;
        protected workReportDataController: Business.ExternalWorkReportDataController;
        static $inject: string[];
        static controllerId: string;
        workReport: Business.WorkReportVm;
        dayContainers: IDayContainer[];
        employeeSignatureImage: any;
        customerSignatureImage: any;
        currentEmployee: Business.EmployeeVm;
        selectedContact: Web.Bu.ContactVm;
        client: Business.ClientVm;
        constructor($scope: IWorkReportControllerScope, workReportDataController: Business.ExternalWorkReportDataController);
        save(): void;
        setEmployeeSignatureImage: (image: any) => void;
        setCustomerSignatureImage: (image: any) => void;
        savePdf(): void;
        getWorkedMins(from: Date, to: Date): number;
        getDailyTotalMins(dayContainer: IDayContainer): number;
        getTotalWorkedMins(): number;
        getMinTimeBookingDate(): Date;
        getMaxTimeBookingDate(): Date;
    }
}
declare module TimeRecorder.Web {
    interface IAddWorkReportControllerScope extends ng.IScope {
    }
    class AddWorkReportController extends WorkReportController {
        protected $scope: IWorkReportControllerScope;
        protected $stateParams: any;
        protected workReportDataController: Business.ExternalWorkReportDataController;
        protected timeBookingDataController: Business.TimeBookingDataController;
        protected authService: IAuthenticationService;
        static $inject: string[];
        static controllerId: string;
        workReport: Business.WorkReportVm;
        constructor($scope: IWorkReportControllerScope, $stateParams: any, workReportDataController: Business.ExternalWorkReportDataController, timeBookingDataController: Business.TimeBookingDataController, authService: IAuthenticationService);
        private createNewReport(projectId);
    }
}
declare module TimeRecorder.Web {
    interface IEditWorkReportControllerScope extends ng.IScope {
    }
    class EditWorkReportController extends WorkReportController {
        protected $scope: IWorkReportControllerScope;
        protected $stateParams: any;
        protected workReportDataController: Business.ExternalWorkReportDataController;
        static $inject: string[];
        static controllerId: string;
        workReport: Business.WorkReportVm;
        constructor($scope: IWorkReportControllerScope, $stateParams: any, workReportDataController: Business.ExternalWorkReportDataController);
        private loadReport(id);
    }
}
declare module TimeRecorder.Web {
    interface ISearchWorkReportControllerScope extends ng.IScope {
    }
    class SearchWorkReportController {
        private $scope;
        private workReportDataController;
        static $inject: string[];
        static controllerId: string;
        employeeId: number;
        projectId: number;
        projectComplete: boolean;
        searchResults: Business.SearchExternalWorkReportVm[];
        constructor($scope: ISearchWorkReportControllerScope, workReportDataController: Business.ExternalWorkReportDataController);
        search(): void;
    }
}
declare module TimeRecorder.Web {
    interface IFilterHeaderScope extends ng.IScope {
        date: Date;
        buttonText: string;
        addButtonCallback: () => void;
        getEntriesPerDay: (day: number) => number;
        getTotalEntries: () => number;
    }
    class FilterHeaderController {
        private $scope;
        static controllerId: string;
        static $inject: string[];
        datepickerOpened: boolean;
        constructor($scope: IFilterHeaderScope);
        previousWeek(): void;
        nextWeek(): void;
        today(): void;
        getCurrentWeekday(): number;
        openDatepicker($event: any): void;
        goToDay(day: number): void;
        getDayName(day: number): string;
    }
}
declare module TimeRecorder.Web {
    interface IProjectTreeScope extends ng.IScope {
        projects: Data.IProjectVm[];
        expand: (node: IProjectTreeNode, $event: ng.IAngularEvent) => void;
        fold: (node: IProjectTreeNode, $event: ng.IAngularEvent) => void;
        selectInt: (node: IProjectTreeNode) => void;
        nodeSelected: (node: {
            $node: IProjectTreeNode;
        }) => void;
        selectedNodeId: number;
        setFlag: (node: IProjectTreeNode, flag: number, $event: ng.IAngularEvent) => void;
        getDepth(): number;
        depth: number;
    }
    interface IProjectTreeNode extends Data.IProjectVm {
        expanded: boolean;
        loaded: boolean;
        loading: boolean;
    }
    class ProjectTree implements ng.IDirective {
        private $compile;
        private project;
        static directiveId: string;
        restrict: string;
        templateUrl: string;
        scope: {
            project: string;
            nodeSelected: string;
            selectedNodeId: string;
            depth: string;
        };
        compile: (element: ng.IAugmentedJQuery, attr: ng.IAttributes) => ng.IDirectivePrePost;
        constructor($compile: ng.ICompileService, project: ProjectService);
    }
}
declare module TimeRecorder.Web {
    interface IMultiselectScope extends ng.IScope {
        ngModel: IMultiselectItem[];
        ngSource: IMultiselectItem[];
        ngExclude: IMultiselectItem[];
        search: string;
        options: IMultiselectItem[];
        remove: (item: IMultiselectItem, event: ng.IAngularEvent) => void;
        addItem: (item: IMultiselectItem) => void;
        toggleSearch: (apply?: boolean) => void;
        searchMode: boolean;
        added: (item: {
            $item: IMultiselectItem;
        }) => void;
        removed: (item: {
            $item: IMultiselectItem;
        }) => void;
    }
    class MultiSelect implements ng.IDirective {
        static directiveId: string;
        restrict: string;
        templateUrl: string;
        scope: {
            ngModel: string;
            ngSource: string;
            ngExclude: string;
            added: string;
            removed: string;
        };
        link: (scope: IMultiselectScope, element: ng.IAugmentedJQuery, attributes: ng.IAttributes) => void;
        constructor();
        private placeDropDown(container, drop);
        private remove;
        private evalOptions;
    }
    interface IMultiselectItem {
        getId: () => number;
        getValue: () => string;
    }
}
declare var sig: ng.IModule;
