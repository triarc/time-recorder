declare module Data {
    class Config {
        static WebApiUrl: string;
        static ApplicationUrl: string;
    }
}
declare module Data {
    interface IVersionVm {
        key: number;
        version: number;
        versionName: string;
        versionCode: string;
        isBeta: boolean;
        platform: string;
    }
    interface ILocationVm {
        key: number;
        locationId: string;
        name: string;
        userId: string;
        userName: string;
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
    interface IAppConfig {
        bookingTimeout: number;
    }
    interface IUserLoginInfoViewModel {
        loginProvider: string;
        providerKey: string;
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
    interface IKeyVaulePair {
        key: string;
        value: string;
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
    interface IProfileConfigVm {
        name: string;
        description: string;
        id: number;
        userCount: number;
        featureConfigurations: Data.IFeatureConfigurationVm[];
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
    interface IWorkObjectViewModel {
        id: string;
        name: string;
        parentId: string;
        reportable: boolean;
        explicit: boolean;
        badgeIds: string[];
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
    interface ISaldo {
        saldoType: ESaldoType;
        flexTimeHours: number;
        flexTimeMinutes: number;
        overTimeHours?: number;
        overTimeMinutes?: number;
        vacationDays: number;
    }
    interface ITimeBookingCm {
        id?: number;
        personId: number;
        projectId?: number;
        start: Date;
        stop?: Date;
        timeEntryTypeId: number;
        state: ETimeBookingState;
    }
    interface ITimeEntryTypeVm {
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
    interface IProjectPersonVm {
        personId: number;
        name: string;
    }
    interface IProjectLocationVm {
        locationId: number;
        name: string;
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
    enum EPlatform {
        Android = 0,
        iOS = 1,
        WindowsPhone = 2,
    }
    enum EAppUserType {
        WebOnly = 0,
        Terminal = 1,
        Personal = 2,
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
    enum ESaldoType {
        DefaultCh = 0,
        DefaultDe = 1,
        Enzler = 2,
    }
    enum ETimeBookingState {
        Open = 0,
        Complete = 1,
        Faulted = 2,
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
    enum EProjectFlag {
        Bookable = 1,
        Explicit = 2,
        PlanningUnit = 4,
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
        getLatestVersionNumberRequest(params: VersionGetLatestVersionNumberParams): Triarc.Data.DataRequest<Data.IVersionVm>;
        getLatestVersionNumber(params: VersionGetLatestVersionNumberParams): ng.IPromise<Triarc.Data.DataResponse<Data.IVersionVm>>;
        getServerVersionRequest(): Triarc.Data.DataRequest<string>;
        getServerVersion(): ng.IPromise<Triarc.Data.DataResponse<string>>;
        getVersionsMultipleRequest(params: VersionGetVersionsEnumerableParams): Triarc.Data.DataRequest<Data.IVersionVm[]>;
        getVersionsMultiple(params: VersionGetVersionsEnumerableParams): ng.IPromise<Triarc.Data.DataResponse<Data.IVersionVm[]>>;
        newVersionVm(): IVersionVm;
    }
    class VersionResource implements IVersionResource {
        private $http;
        private $q;
        private $location;
        constructor($http: any, $q: any, $location: any);
        getLatestPlistRequest(params: any): Triarc.Data.DataRequest<any>;
        getLatestPlist(params: any): ng.IPromise<Triarc.Data.DataResponse<any>>;
        getLatestVersionNumberRequest(params: any): Triarc.Data.DataRequest<IVersionVm>;
        getLatestVersionNumber(params: any): ng.IPromise<Triarc.Data.DataResponse<IVersionVm>>;
        getServerVersionRequest(): Triarc.Data.DataRequest<string>;
        getServerVersion(): ng.IPromise<Triarc.Data.DataResponse<string>>;
        getVersionsMultipleRequest(params: any): Triarc.Data.DataRequest<IVersionVm[]>;
        getVersionsMultiple(params: any): ng.IPromise<Triarc.Data.DataResponse<IVersionVm[]>>;
        newVersionVm(): IVersionVm;
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
        getLocationByIdRequest(params: LocationGetLocationByIdParams): Triarc.Data.DataRequest<Data.ILocationVm>;
        getLocationById(params: LocationGetLocationByIdParams): ng.IPromise<Triarc.Data.DataResponse<Data.ILocationVm>>;
        getMultipleRequest(params: LocationGetEnumerableParams): Triarc.Data.DataRequest<Data.ILocationVm[]>;
        getMultiple(params: LocationGetEnumerableParams): ng.IPromise<Triarc.Data.DataResponse<Data.ILocationVm[]>>;
        putRequest(data: ILocationVm): Triarc.Data.DataRequest<any>;
        put(data: ILocationVm): ng.IPromise<Triarc.Data.DataResponse<any>>;
        deleteRequest(params: LocationDeleteParams): Triarc.Data.DataRequest<any>;
        delete(params: LocationDeleteParams): ng.IPromise<Triarc.Data.DataResponse<any>>;
        newLocationVm(): ILocationVm;
    }
    class LocationResource implements ILocationResource {
        private $http;
        private $q;
        private $location;
        constructor($http: any, $q: any, $location: any);
        getLocationByIdRequest(params: any): Triarc.Data.DataRequest<ILocationVm>;
        getLocationById(params: any): ng.IPromise<Triarc.Data.DataResponse<ILocationVm>>;
        getMultipleRequest(params: any): Triarc.Data.DataRequest<ILocationVm[]>;
        getMultiple(params: any): ng.IPromise<Triarc.Data.DataResponse<ILocationVm[]>>;
        putRequest(data: any): Triarc.Data.DataRequest<any>;
        put(data: any): ng.IPromise<Triarc.Data.DataResponse<any>>;
        deleteRequest(params: any): Triarc.Data.DataRequest<any>;
        delete(params: any): ng.IPromise<Triarc.Data.DataResponse<any>>;
        newLocationVm(): ILocationVm;
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
        getAppUserRequest(): Triarc.Data.DataRequest<Data.IAppUser>;
        getAppUser(): ng.IPromise<Triarc.Data.DataResponse<Data.IAppUser>>;
        loginRequest(data: ILoginViewModel): Triarc.Data.DataRequest<any>;
        login(data: ILoginViewModel): ng.IPromise<Triarc.Data.DataResponse<any>>;
        getUsersMultipleRequest(params: AccountGetUsersEnumerableParams): Triarc.Data.DataRequest<Data.IUserVm[]>;
        getUsersMultiple(params: AccountGetUsersEnumerableParams): ng.IPromise<Triarc.Data.DataResponse<Data.IUserVm[]>>;
        searchMultipleRequest(params: AccountSearchEnumerableParams): Triarc.Data.DataRequest<Data.IUserVm[]>;
        searchMultiple(params: AccountSearchEnumerableParams): ng.IPromise<Triarc.Data.DataResponse<Data.IUserVm[]>>;
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
        getUserInfoRequest(): Triarc.Data.DataRequest<Data.IUserInfoViewModel>;
        getUserInfo(): ng.IPromise<Triarc.Data.DataResponse<Data.IUserInfoViewModel>>;
        getManageInfoRequest(params: AccountGetManageInfoParams): Triarc.Data.DataRequest<Data.IManageInfoViewModel>;
        getManageInfo(params: AccountGetManageInfoParams): ng.IPromise<Triarc.Data.DataResponse<Data.IManageInfoViewModel>>;
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
        getExternalLoginsMultipleRequest(params: AccountGetExternalLoginsEnumerableParams): Triarc.Data.DataRequest<Data.IExternalLoginViewModel[]>;
        getExternalLoginsMultiple(params: AccountGetExternalLoginsEnumerableParams): ng.IPromise<Triarc.Data.DataResponse<Data.IExternalLoginViewModel[]>>;
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
        newFeatureClaimVm(): IFeatureClaimVm;
    }
    class AccountResource implements IAccountResource {
        private $http;
        private $q;
        private $location;
        constructor($http: any, $q: any, $location: any);
        getAppUserRequest(): Triarc.Data.DataRequest<IAppUser>;
        getAppUser(): ng.IPromise<Triarc.Data.DataResponse<IAppUser>>;
        loginRequest(data: any): Triarc.Data.DataRequest<any>;
        login(data: any): ng.IPromise<Triarc.Data.DataResponse<any>>;
        getUsersMultipleRequest(params: any): Triarc.Data.DataRequest<IUserVm[]>;
        getUsersMultiple(params: any): ng.IPromise<Triarc.Data.DataResponse<IUserVm[]>>;
        searchMultipleRequest(params: any): Triarc.Data.DataRequest<IUserVm[]>;
        searchMultiple(params: any): ng.IPromise<Triarc.Data.DataResponse<IUserVm[]>>;
        createUserRequest(data: any): Triarc.Data.DataRequest<any>;
        createUser(data: any): ng.IPromise<Triarc.Data.DataResponse<any>>;
        editUserRequest(data: any): Triarc.Data.DataRequest<any>;
        editUser(data: any): ng.IPromise<Triarc.Data.DataResponse<any>>;
        resetPasswordRequest(params: any): Triarc.Data.DataRequest<any>;
        resetPassword(params: any): ng.IPromise<Triarc.Data.DataResponse<any>>;
        deleteRequest(data: any): Triarc.Data.DataRequest<any>;
        delete(data: any): ng.IPromise<Triarc.Data.DataResponse<any>>;
        pingRequest(): Triarc.Data.DataRequest<any>;
        ping(): ng.IPromise<Triarc.Data.DataResponse<any>>;
        logoutRequest(): Triarc.Data.DataRequest<any>;
        logout(): ng.IPromise<Triarc.Data.DataResponse<any>>;
        getUserInfoRequest(): Triarc.Data.DataRequest<IUserInfoViewModel>;
        getUserInfo(): ng.IPromise<Triarc.Data.DataResponse<IUserInfoViewModel>>;
        getManageInfoRequest(params: any): Triarc.Data.DataRequest<IManageInfoViewModel>;
        getManageInfo(params: any): ng.IPromise<Triarc.Data.DataResponse<IManageInfoViewModel>>;
        changePasswordRequest(data: any): Triarc.Data.DataRequest<any>;
        changePassword(data: any): ng.IPromise<Triarc.Data.DataResponse<any>>;
        setPasswordRequest(data: any): Triarc.Data.DataRequest<any>;
        setPassword(data: any): ng.IPromise<Triarc.Data.DataResponse<any>>;
        addExternalLoginRequest(data: any): Triarc.Data.DataRequest<any>;
        addExternalLogin(data: any): ng.IPromise<Triarc.Data.DataResponse<any>>;
        removeLoginRequest(data: any): Triarc.Data.DataRequest<any>;
        removeLogin(data: any): ng.IPromise<Triarc.Data.DataResponse<any>>;
        getExternalLoginRequest(params: any): Triarc.Data.DataRequest<any>;
        getExternalLogin(params: any): ng.IPromise<Triarc.Data.DataResponse<any>>;
        getExternalLoginsMultipleRequest(params: any): Triarc.Data.DataRequest<IExternalLoginViewModel[]>;
        getExternalLoginsMultiple(params: any): ng.IPromise<Triarc.Data.DataResponse<IExternalLoginViewModel[]>>;
        registerRequest(data: any): Triarc.Data.DataRequest<any>;
        register(data: any): ng.IPromise<Triarc.Data.DataResponse<any>>;
        registerExternalRequest(data: any): Triarc.Data.DataRequest<any>;
        registerExternal(data: any): ng.IPromise<Triarc.Data.DataResponse<any>>;
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
        newFeatureClaimVm(): IFeatureClaimVm;
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
        getConfigsMultipleRequest(params: AdminGetConfigsEnumerableParams): Triarc.Data.DataRequest<Data.IKeyVaulePair[]>;
        getConfigsMultiple(params: AdminGetConfigsEnumerableParams): ng.IPromise<Triarc.Data.DataResponse<Data.IKeyVaulePair[]>>;
        echoServiceRequest(): Triarc.Data.DataRequest<boolean>;
        echoService(): ng.IPromise<Triarc.Data.DataResponse<boolean>>;
        newKeyVaulePair(): IKeyVaulePair;
    }
    class AdminResource implements IAdminResource {
        private $http;
        private $q;
        private $location;
        constructor($http: any, $q: any, $location: any);
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
        getConfigsMultipleRequest(params: any): Triarc.Data.DataRequest<IKeyVaulePair[]>;
        getConfigsMultiple(params: any): ng.IPromise<Triarc.Data.DataResponse<IKeyVaulePair[]>>;
        echoServiceRequest(): Triarc.Data.DataRequest<boolean>;
        echoService(): ng.IPromise<Triarc.Data.DataResponse<boolean>>;
        newKeyVaulePair(): IKeyVaulePair;
    }
    interface ITimesheetResource {
        getTimesheetRequest(data: ITimesheetSearchCriteria): Triarc.Data.DataRequest<Data.ITimesheetCm>;
        getTimesheet(data: ITimesheetSearchCriteria): ng.IPromise<Triarc.Data.DataResponse<Data.ITimesheetCm>>;
        newTimesheetCm(): ITimesheetCm;
        newTimesheetSearchCriteria(): ITimesheetSearchCriteria;
    }
    class TimesheetResource implements ITimesheetResource {
        private $http;
        private $q;
        private $location;
        constructor($http: any, $q: any, $location: any);
        getTimesheetRequest(data: any): Triarc.Data.DataRequest<ITimesheetCm>;
        getTimesheet(data: any): ng.IPromise<Triarc.Data.DataResponse<ITimesheetCm>>;
        newTimesheetCm(): ITimesheetCm;
        newTimesheetSearchCriteria(): ITimesheetSearchCriteria;
    }
    interface ConfigurationProfileGetConfigsEnumerableParams {
        $skip?: number;
        $top?: number;
        $orderBy?: string;
        $filter?: string;
    }
    interface IConfigurationProfileResource {
        getConfigsMultipleRequest(params: ConfigurationProfileGetConfigsEnumerableParams): Triarc.Data.DataRequest<Data.IProfileConfigVm[]>;
        getConfigsMultiple(params: ConfigurationProfileGetConfigsEnumerableParams): ng.IPromise<Triarc.Data.DataResponse<Data.IProfileConfigVm[]>>;
        deleteRequest(data: IProfileConfigVm): Triarc.Data.DataRequest<any>;
        delete(data: IProfileConfigVm): ng.IPromise<Triarc.Data.DataResponse<any>>;
        saveRequest(data: IProfileConfigVm): Triarc.Data.DataRequest<any>;
        save(data: IProfileConfigVm): ng.IPromise<Triarc.Data.DataResponse<any>>;
        newProfileConfigVm(): IProfileConfigVm;
    }
    class ConfigurationProfileResource implements IConfigurationProfileResource {
        private $http;
        private $q;
        private $location;
        constructor($http: any, $q: any, $location: any);
        getConfigsMultipleRequest(params: any): Triarc.Data.DataRequest<IProfileConfigVm[]>;
        getConfigsMultiple(params: any): ng.IPromise<Triarc.Data.DataResponse<IProfileConfigVm[]>>;
        deleteRequest(data: any): Triarc.Data.DataRequest<any>;
        delete(data: any): ng.IPromise<Triarc.Data.DataResponse<any>>;
        saveRequest(data: any): Triarc.Data.DataRequest<any>;
        save(data: any): ng.IPromise<Triarc.Data.DataResponse<any>>;
        newProfileConfigVm(): IProfileConfigVm;
    }
    interface PersonGetPersonByIdParams {
        id: string;
    }
    interface PersonGetEnumerableParams {
        $skip?: number;
        $top?: number;
        $orderBy?: string;
        $filter?: string;
    }
    interface PersonSearchEnumerableParams {
        search: string;
        skip: number;
        take: number;
        $skip?: number;
        $top?: number;
        $orderBy?: string;
        $filter?: string;
    }
    interface PersonDeleteParams {
        id: number;
    }
    interface IPersonResource {
        getPersonByIdRequest(params: PersonGetPersonByIdParams): Triarc.Data.DataRequest<Data.IPersonVm>;
        getPersonById(params: PersonGetPersonByIdParams): ng.IPromise<Triarc.Data.DataResponse<Data.IPersonVm>>;
        getMultipleRequest(params: PersonGetEnumerableParams): Triarc.Data.DataRequest<Data.IPersonVm[]>;
        getMultiple(params: PersonGetEnumerableParams): ng.IPromise<Triarc.Data.DataResponse<Data.IPersonVm[]>>;
        searchMultipleRequest(params: PersonSearchEnumerableParams): Triarc.Data.DataRequest<Data.IPersonVm[]>;
        searchMultiple(params: PersonSearchEnumerableParams): ng.IPromise<Triarc.Data.DataResponse<Data.IPersonVm[]>>;
        putRequest(data: IPersonVm): Triarc.Data.DataRequest<any>;
        put(data: IPersonVm): ng.IPromise<Triarc.Data.DataResponse<any>>;
        deleteRequest(params: PersonDeleteParams): Triarc.Data.DataRequest<any>;
        delete(params: PersonDeleteParams): ng.IPromise<Triarc.Data.DataResponse<any>>;
        newPersonVm(): IPersonVm;
    }
    class PersonResource implements IPersonResource {
        private $http;
        private $q;
        private $location;
        constructor($http: any, $q: any, $location: any);
        getPersonByIdRequest(params: any): Triarc.Data.DataRequest<IPersonVm>;
        getPersonById(params: any): ng.IPromise<Triarc.Data.DataResponse<IPersonVm>>;
        getMultipleRequest(params: any): Triarc.Data.DataRequest<IPersonVm[]>;
        getMultiple(params: any): ng.IPromise<Triarc.Data.DataResponse<IPersonVm[]>>;
        searchMultipleRequest(params: any): Triarc.Data.DataRequest<IPersonVm[]>;
        searchMultiple(params: any): ng.IPromise<Triarc.Data.DataResponse<IPersonVm[]>>;
        putRequest(data: any): Triarc.Data.DataRequest<any>;
        put(data: any): ng.IPromise<Triarc.Data.DataResponse<any>>;
        deleteRequest(params: any): Triarc.Data.DataRequest<any>;
        delete(params: any): ng.IPromise<Triarc.Data.DataResponse<any>>;
        newPersonVm(): IPersonVm;
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
        getLatestMessagesMultipleRequest(params: PersonalMessageGetLatestMessagesEnumerableParams): Triarc.Data.DataRequest<Data.IMessage[]>;
        getLatestMessagesMultiple(params: PersonalMessageGetLatestMessagesEnumerableParams): ng.IPromise<Triarc.Data.DataResponse<Data.IMessage[]>>;
        saveMessageRequest(data: ISaveMessage): Triarc.Data.DataRequest<any>;
        saveMessage(data: ISaveMessage): ng.IPromise<Triarc.Data.DataResponse<any>>;
        markAsReadRequest(params: PersonalMessageMarkAsReadParams): Triarc.Data.DataRequest<any>;
        markAsRead(params: PersonalMessageMarkAsReadParams): ng.IPromise<Triarc.Data.DataResponse<any>>;
        getSentMessagesMultipleRequest(params: PersonalMessageGetSentMessagesEnumerableParams): Triarc.Data.DataRequest<Data.ISentMessage[]>;
        getSentMessagesMultiple(params: PersonalMessageGetSentMessagesEnumerableParams): ng.IPromise<Triarc.Data.DataResponse<Data.ISentMessage[]>>;
        newMessage(): IMessage;
        newSentMessage(): ISentMessage;
        newSaveMessage(): ISaveMessage;
    }
    class PersonalMessageResource implements IPersonalMessageResource {
        private $http;
        private $q;
        private $location;
        constructor($http: any, $q: any, $location: any);
        getLatestMessagesMultipleRequest(params: any): Triarc.Data.DataRequest<IMessage[]>;
        getLatestMessagesMultiple(params: any): ng.IPromise<Triarc.Data.DataResponse<IMessage[]>>;
        saveMessageRequest(data: any): Triarc.Data.DataRequest<any>;
        saveMessage(data: any): ng.IPromise<Triarc.Data.DataResponse<any>>;
        markAsReadRequest(params: any): Triarc.Data.DataRequest<any>;
        markAsRead(params: any): ng.IPromise<Triarc.Data.DataResponse<any>>;
        getSentMessagesMultipleRequest(params: any): Triarc.Data.DataRequest<ISentMessage[]>;
        getSentMessagesMultiple(params: any): ng.IPromise<Triarc.Data.DataResponse<ISentMessage[]>>;
        newMessage(): IMessage;
        newSentMessage(): ISentMessage;
        newSaveMessage(): ISaveMessage;
    }
    interface WorkObjectGetProjectsForLocationEnumerableParams {
        locationId: number;
        $skip?: number;
        $top?: number;
        $orderBy?: string;
        $filter?: string;
    }
    interface IWorkObjectResource {
        getProjectsForLocationMultipleRequest(params: WorkObjectGetProjectsForLocationEnumerableParams): Triarc.Data.DataRequest<Data.IWorkObjectViewModel[]>;
        getProjectsForLocationMultiple(params: WorkObjectGetProjectsForLocationEnumerableParams): ng.IPromise<Triarc.Data.DataResponse<Data.IWorkObjectViewModel[]>>;
        newWorkObjectViewModel(): IWorkObjectViewModel;
    }
    class WorkObjectResource implements IWorkObjectResource {
        private $http;
        private $q;
        private $location;
        constructor($http: any, $q: any, $location: any);
        getProjectsForLocationMultipleRequest(params: any): Triarc.Data.DataRequest<IWorkObjectViewModel[]>;
        getProjectsForLocationMultiple(params: any): ng.IPromise<Triarc.Data.DataResponse<IWorkObjectViewModel[]>>;
        newWorkObjectViewModel(): IWorkObjectViewModel;
    }
    interface IConfigResource {
        getRequest(): Triarc.Data.DataRequest<Data.IConfigVm>;
        get(): ng.IPromise<Triarc.Data.DataResponse<Data.IConfigVm>>;
        putRequest(data: ISaveConfigVm): Triarc.Data.DataRequest<any>;
        put(data: ISaveConfigVm): ng.IPromise<Triarc.Data.DataResponse<any>>;
        newConfigVm(): IConfigVm;
        newSaveConfigVm(): ISaveConfigVm;
    }
    class ConfigResource implements IConfigResource {
        private $http;
        private $q;
        private $location;
        constructor($http: any, $q: any, $location: any);
        getRequest(): Triarc.Data.DataRequest<IConfigVm>;
        get(): ng.IPromise<Triarc.Data.DataResponse<IConfigVm>>;
        putRequest(data: any): Triarc.Data.DataRequest<any>;
        put(data: any): ng.IPromise<Triarc.Data.DataResponse<any>>;
        newConfigVm(): IConfigVm;
        newSaveConfigVm(): ISaveConfigVm;
    }
    interface ClaimGetClaimsEnumerableParams {
        $skip?: number;
        $top?: number;
        $orderBy?: string;
        $filter?: string;
    }
    interface IClaimResource {
        getClaimsMultipleRequest(params: ClaimGetClaimsEnumerableParams): Triarc.Data.DataRequest<Data.IFeatureClaimVm[]>;
        getClaimsMultiple(params: ClaimGetClaimsEnumerableParams): ng.IPromise<Triarc.Data.DataResponse<Data.IFeatureClaimVm[]>>;
        newFeatureClaimVm(): IFeatureClaimVm;
    }
    class ClaimResource implements IClaimResource {
        private $http;
        private $q;
        private $location;
        constructor($http: any, $q: any, $location: any);
        getClaimsMultipleRequest(params: any): Triarc.Data.DataRequest<IFeatureClaimVm[]>;
        getClaimsMultiple(params: any): ng.IPromise<Triarc.Data.DataResponse<IFeatureClaimVm[]>>;
        newFeatureClaimVm(): IFeatureClaimVm;
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
        getDailyGlobalMessageRequest(): Triarc.Data.DataRequest<Data.IGlobalMessageVm>;
        getDailyGlobalMessage(): ng.IPromise<Triarc.Data.DataResponse<Data.IGlobalMessageVm>>;
        getMultipleRequest(params: GlobalMessageGetEnumerableParams): Triarc.Data.DataRequest<Data.IGlobalMessageVm[]>;
        getMultiple(params: GlobalMessageGetEnumerableParams): ng.IPromise<Triarc.Data.DataResponse<Data.IGlobalMessageVm[]>>;
        putRequest(data: IGlobalMessageVm): Triarc.Data.DataRequest<any>;
        put(data: IGlobalMessageVm): ng.IPromise<Triarc.Data.DataResponse<any>>;
        deleteRequest(params: GlobalMessageDeleteParams): Triarc.Data.DataRequest<any>;
        delete(params: GlobalMessageDeleteParams): ng.IPromise<Triarc.Data.DataResponse<any>>;
        newGlobalMessageVm(): IGlobalMessageVm;
        newPostedImage(): IPostedImage;
    }
    class GlobalMessageResource implements IGlobalMessageResource {
        private $http;
        private $q;
        private $location;
        constructor($http: any, $q: any, $location: any);
        getDailyGlobalMessageRequest(): Triarc.Data.DataRequest<IGlobalMessageVm>;
        getDailyGlobalMessage(): ng.IPromise<Triarc.Data.DataResponse<IGlobalMessageVm>>;
        getMultipleRequest(params: any): Triarc.Data.DataRequest<IGlobalMessageVm[]>;
        getMultiple(params: any): ng.IPromise<Triarc.Data.DataResponse<IGlobalMessageVm[]>>;
        putRequest(data: any): Triarc.Data.DataRequest<any>;
        put(data: any): ng.IPromise<Triarc.Data.DataResponse<any>>;
        deleteRequest(params: any): Triarc.Data.DataRequest<any>;
        delete(params: any): ng.IPromise<Triarc.Data.DataResponse<any>>;
        newGlobalMessageVm(): IGlobalMessageVm;
        newPostedImage(): IPostedImage;
    }
    interface SaldoGetByIdParams {
        employeeId: string;
    }
    interface ISaldoResource {
        getByIdRequest(params: SaldoGetByIdParams): Triarc.Data.DataRequest<Data.ISaldo>;
        getById(params: SaldoGetByIdParams): ng.IPromise<Triarc.Data.DataResponse<Data.ISaldo>>;
        newSaldo(): ISaldo;
    }
    class SaldoResource implements ISaldoResource {
        private $http;
        private $q;
        private $location;
        constructor($http: any, $q: any, $location: any);
        getByIdRequest(params: any): Triarc.Data.DataRequest<ISaldo>;
        getById(params: any): ng.IPromise<Triarc.Data.DataResponse<ISaldo>>;
        newSaldo(): ISaldo;
    }
    interface IOperationResource {
        triggerImportPersonalDataRequest(): Triarc.Data.DataRequest<any>;
        triggerImportPersonalData(): ng.IPromise<Triarc.Data.DataResponse<any>>;
        triggerImportObjectDataRequest(): Triarc.Data.DataRequest<any>;
        triggerImportObjectData(): ng.IPromise<Triarc.Data.DataResponse<any>>;
    }
    class OperationResource implements IOperationResource {
        private $http;
        private $q;
        private $location;
        constructor($http: any, $q: any, $location: any);
        triggerImportPersonalDataRequest(): Triarc.Data.DataRequest<any>;
        triggerImportPersonalData(): ng.IPromise<Triarc.Data.DataResponse<any>>;
        triggerImportObjectDataRequest(): Triarc.Data.DataRequest<any>;
        triggerImportObjectData(): ng.IPromise<Triarc.Data.DataResponse<any>>;
    }
    interface ImageGetParams {
        id: number;
    }
    interface IImageResource {
        getRequest(params: ImageGetParams): Triarc.Data.DataRequest<any>;
        get(params: ImageGetParams): ng.IPromise<Triarc.Data.DataResponse<any>>;
    }
    class ImageResource implements IImageResource {
        private $http;
        private $q;
        private $location;
        constructor($http: any, $q: any, $location: any);
        getRequest(params: any): Triarc.Data.DataRequest<any>;
        get(params: any): ng.IPromise<Triarc.Data.DataResponse<any>>;
    }
    interface TimeBookingSearchEnumerableParams {
        $skip?: number;
        $top?: number;
        $orderBy?: string;
        $filter?: string;
    }
    interface TimeBookingGetAvailableEntryTypesEnumerableParams {
        $skip?: number;
        $top?: number;
        $orderBy?: string;
        $filter?: string;
    }
    interface ITimeBookingResource {
        searchMultipleRequest(params: TimeBookingSearchEnumerableParams, data: ITimeBookingSearchParams): Triarc.Data.DataRequest<Data.ITimeBookingCm[]>;
        searchMultiple(params: TimeBookingSearchEnumerableParams, data: ITimeBookingSearchParams): ng.IPromise<Triarc.Data.DataResponse<Data.ITimeBookingCm[]>>;
        saveRequest(data: ITimeBookingCm): Triarc.Data.DataRequest<Data.ITimeBookingCm>;
        save(data: ITimeBookingCm): ng.IPromise<Triarc.Data.DataResponse<Data.ITimeBookingCm>>;
        getAvailableEntryTypesMultipleRequest(params: TimeBookingGetAvailableEntryTypesEnumerableParams): Triarc.Data.DataRequest<Data.ITimeEntryTypeVm[]>;
        getAvailableEntryTypesMultiple(params: TimeBookingGetAvailableEntryTypesEnumerableParams): ng.IPromise<Triarc.Data.DataResponse<Data.ITimeEntryTypeVm[]>>;
        getMetaDataRequest(): Triarc.Data.DataRequest<Data.ITimeBookingMetaDataVm>;
        getMetaData(): ng.IPromise<Triarc.Data.DataResponse<Data.ITimeBookingMetaDataVm>>;
        newTimeBookingCm(): ITimeBookingCm;
        newTimeEntryTypeVm(): ITimeEntryTypeVm;
        newTimeBookingMetaDataVm(): ITimeBookingMetaDataVm;
        newTimeBookingSearchParams(): ITimeBookingSearchParams;
    }
    class TimeBookingResource implements ITimeBookingResource {
        private $http;
        private $q;
        private $location;
        constructor($http: any, $q: any, $location: any);
        searchMultipleRequest(params: any, data: any): Triarc.Data.DataRequest<ITimeBookingCm[]>;
        searchMultiple(params: any, data: any): ng.IPromise<Triarc.Data.DataResponse<ITimeBookingCm[]>>;
        saveRequest(data: any): Triarc.Data.DataRequest<ITimeBookingCm>;
        save(data: any): ng.IPromise<Triarc.Data.DataResponse<ITimeBookingCm>>;
        getAvailableEntryTypesMultipleRequest(params: any): Triarc.Data.DataRequest<ITimeEntryTypeVm[]>;
        getAvailableEntryTypesMultiple(params: any): ng.IPromise<Triarc.Data.DataResponse<ITimeEntryTypeVm[]>>;
        getMetaDataRequest(): Triarc.Data.DataRequest<ITimeBookingMetaDataVm>;
        getMetaData(): ng.IPromise<Triarc.Data.DataResponse<ITimeBookingMetaDataVm>>;
        newTimeBookingCm(): ITimeBookingCm;
        newTimeEntryTypeVm(): ITimeEntryTypeVm;
        newTimeBookingMetaDataVm(): ITimeBookingMetaDataVm;
        newTimeBookingSearchParams(): ITimeBookingSearchParams;
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
        validateUserRequest(params: TimeEntryValidateUserParams): Triarc.Data.DataRequest<Data.ICheckUserResult>;
        validateUser(params: TimeEntryValidateUserParams): ng.IPromise<Triarc.Data.DataResponse<Data.ICheckUserResult>>;
        putRequest(data: ITimeEntryVm): Triarc.Data.DataRequest<boolean>;
        put(data: ITimeEntryVm): ng.IPromise<Triarc.Data.DataResponse<boolean>>;
        deleteRequest(data: ITimeEntryVm): Triarc.Data.DataRequest<boolean>;
        delete(data: ITimeEntryVm): ng.IPromise<Triarc.Data.DataResponse<boolean>>;
        validateWorkObjectRequest(params: TimeEntryValidateWorkObjectParams): Triarc.Data.DataRequest<EAuftragVerificationStatus>;
        validateWorkObject(params: TimeEntryValidateWorkObjectParams): ng.IPromise<Triarc.Data.DataResponse<EAuftragVerificationStatus>>;
        searchTimeEntriesMultipleRequest(params: TimeEntrySearchTimeEntriesEnumerableParams, data: ITimeEntrySearchVm): Triarc.Data.DataRequest<Data.ITimeEntryVm[]>;
        searchTimeEntriesMultiple(params: TimeEntrySearchTimeEntriesEnumerableParams, data: ITimeEntrySearchVm): ng.IPromise<Triarc.Data.DataResponse<Data.ITimeEntryVm[]>>;
        getAvailableBookingTypesMultipleRequest(params: TimeEntryGetAvailableBookingTypesEnumerableParams): Triarc.Data.DataRequest<string[]>;
        getAvailableBookingTypesMultiple(params: TimeEntryGetAvailableBookingTypesEnumerableParams): ng.IPromise<Triarc.Data.DataResponse<string[]>>;
        newCheckUserResult(): ICheckUserResult;
        newTimeEntryVm(): ITimeEntryVm;
        newTimeEntryModel(): ITimeEntryModel;
        newTimeEntryCollection(): ITimeEntryCollection;
        newTimeEntrySearchVm(): ITimeEntrySearchVm;
    }
    class TimeEntryResource implements ITimeEntryResource {
        private $http;
        private $q;
        private $location;
        constructor($http: any, $q: any, $location: any);
        postSingleRequest(data: any): Triarc.Data.DataRequest<any>;
        postSingle(data: any): ng.IPromise<Triarc.Data.DataResponse<any>>;
        postMultipleRequest(data: any): Triarc.Data.DataRequest<any>;
        postMultiple(data: any): ng.IPromise<Triarc.Data.DataResponse<any>>;
        validateUserRequest(params: any): Triarc.Data.DataRequest<ICheckUserResult>;
        validateUser(params: any): ng.IPromise<Triarc.Data.DataResponse<ICheckUserResult>>;
        putRequest(data: any): Triarc.Data.DataRequest<boolean>;
        put(data: any): ng.IPromise<Triarc.Data.DataResponse<boolean>>;
        deleteRequest(data: any): Triarc.Data.DataRequest<boolean>;
        delete(data: any): ng.IPromise<Triarc.Data.DataResponse<boolean>>;
        validateWorkObjectRequest(params: any): Triarc.Data.DataRequest<EAuftragVerificationStatus>;
        validateWorkObject(params: any): ng.IPromise<Triarc.Data.DataResponse<EAuftragVerificationStatus>>;
        searchTimeEntriesMultipleRequest(params: any, data: any): Triarc.Data.DataRequest<ITimeEntryVm[]>;
        searchTimeEntriesMultiple(params: any, data: any): ng.IPromise<Triarc.Data.DataResponse<ITimeEntryVm[]>>;
        getAvailableBookingTypesMultipleRequest(params: any): Triarc.Data.DataRequest<string[]>;
        getAvailableBookingTypesMultiple(params: any): ng.IPromise<Triarc.Data.DataResponse<string[]>>;
        newCheckUserResult(): ICheckUserResult;
        newTimeEntryVm(): ITimeEntryVm;
        newTimeEntryModel(): ITimeEntryModel;
        newTimeEntryCollection(): ITimeEntryCollection;
        newTimeEntrySearchVm(): ITimeEntrySearchVm;
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
        getAllPersonsMultipleRequest(params: ProjectGetAllPersonsEnumerableParams): Triarc.Data.DataRequest<Data.IProjectPersonVm[]>;
        getAllPersonsMultiple(params: ProjectGetAllPersonsEnumerableParams): ng.IPromise<Triarc.Data.DataResponse<Data.IProjectPersonVm[]>>;
        getAllLocationsMultipleRequest(params: ProjectGetAllLocationsEnumerableParams): Triarc.Data.DataRequest<Data.IProjectLocationVm[]>;
        getAllLocationsMultiple(params: ProjectGetAllLocationsEnumerableParams): ng.IPromise<Triarc.Data.DataResponse<Data.IProjectLocationVm[]>>;
        searchProjectsMultipleRequest(params: ProjectSearchProjectsEnumerableParams): Triarc.Data.DataRequest<Data.IProjectVm[]>;
        searchProjectsMultiple(params: ProjectSearchProjectsEnumerableParams): ng.IPromise<Triarc.Data.DataResponse<Data.IProjectVm[]>>;
        getRootProjectsMultipleRequest(params: ProjectGetRootProjectsEnumerableParams): Triarc.Data.DataRequest<Data.IProjectVm[]>;
        getRootProjectsMultiple(params: ProjectGetRootProjectsEnumerableParams): ng.IPromise<Triarc.Data.DataResponse<Data.IProjectVm[]>>;
        getChildrenMultipleRequest(params: ProjectGetChildrenEnumerableParams): Triarc.Data.DataRequest<Data.IProjectVm[]>;
        getChildrenMultiple(params: ProjectGetChildrenEnumerableParams): ng.IPromise<Triarc.Data.DataResponse<Data.IProjectVm[]>>;
        putProjectDescriptionRequest(params: ProjectPutProjectDescriptionParams): Triarc.Data.DataRequest<any>;
        putProjectDescription(params: ProjectPutProjectDescriptionParams): ng.IPromise<Triarc.Data.DataResponse<any>>;
        putPersonAssignmentRequest(params: ProjectPutPersonAssignmentParams): Triarc.Data.DataRequest<any>;
        putPersonAssignment(params: ProjectPutPersonAssignmentParams): ng.IPromise<Triarc.Data.DataResponse<any>>;
        putLocationAssignmentRequest(params: ProjectPutLocationAssignmentParams): Triarc.Data.DataRequest<any>;
        putLocationAssignment(params: ProjectPutLocationAssignmentParams): ng.IPromise<Triarc.Data.DataResponse<any>>;
        setFlagsRequest(params: ProjectSetFlagsParams): Triarc.Data.DataRequest<any>;
        setFlags(params: ProjectSetFlagsParams): ng.IPromise<Triarc.Data.DataResponse<any>>;
        newProjectPersonVm(): IProjectPersonVm;
        newProjectLocationVm(): IProjectLocationVm;
        newProjectVm(): IProjectVm;
    }
    class ProjectResource implements IProjectResource {
        private $http;
        private $q;
        private $location;
        constructor($http: any, $q: any, $location: any);
        getAllPersonsMultipleRequest(params: any): Triarc.Data.DataRequest<IProjectPersonVm[]>;
        getAllPersonsMultiple(params: any): ng.IPromise<Triarc.Data.DataResponse<IProjectPersonVm[]>>;
        getAllLocationsMultipleRequest(params: any): Triarc.Data.DataRequest<IProjectLocationVm[]>;
        getAllLocationsMultiple(params: any): ng.IPromise<Triarc.Data.DataResponse<IProjectLocationVm[]>>;
        searchProjectsMultipleRequest(params: any): Triarc.Data.DataRequest<IProjectVm[]>;
        searchProjectsMultiple(params: any): ng.IPromise<Triarc.Data.DataResponse<IProjectVm[]>>;
        getRootProjectsMultipleRequest(params: any): Triarc.Data.DataRequest<IProjectVm[]>;
        getRootProjectsMultiple(params: any): ng.IPromise<Triarc.Data.DataResponse<IProjectVm[]>>;
        getChildrenMultipleRequest(params: any): Triarc.Data.DataRequest<IProjectVm[]>;
        getChildrenMultiple(params: any): ng.IPromise<Triarc.Data.DataResponse<IProjectVm[]>>;
        putProjectDescriptionRequest(params: any): Triarc.Data.DataRequest<any>;
        putProjectDescription(params: any): ng.IPromise<Triarc.Data.DataResponse<any>>;
        putPersonAssignmentRequest(params: any): Triarc.Data.DataRequest<any>;
        putPersonAssignment(params: any): ng.IPromise<Triarc.Data.DataResponse<any>>;
        putLocationAssignmentRequest(params: any): Triarc.Data.DataRequest<any>;
        putLocationAssignment(params: any): ng.IPromise<Triarc.Data.DataResponse<any>>;
        setFlagsRequest(params: any): Triarc.Data.DataRequest<any>;
        setFlags(params: any): ng.IPromise<Triarc.Data.DataResponse<any>>;
        newProjectPersonVm(): IProjectPersonVm;
        newProjectLocationVm(): IProjectLocationVm;
        newProjectVm(): IProjectVm;
    }
    interface ProxyContainer {
        Version: IVersionResource;
        Location: ILocationResource;
        Account: IAccountResource;
        Admin: IAdminResource;
        Timesheet: ITimesheetResource;
        ConfigurationProfile: IConfigurationProfileResource;
        Person: IPersonResource;
        PersonalMessage: IPersonalMessageResource;
        WorkObject: IWorkObjectResource;
        Config: IConfigResource;
        Claim: IClaimResource;
        GlobalMessage: IGlobalMessageResource;
        Saldo: ISaldoResource;
        Operation: IOperationResource;
        Image: IImageResource;
        TimeBooking: ITimeBookingResource;
        TimeEntry: ITimeEntryResource;
        Project: IProjectResource;
    }
}
declare var timeRecorder: ng.IModule;
interface IToSelectScope extends ng.IScope {
    model: TimeRecorder.Web.ToSelectOption[];
    source: TimeRecorder.Web.ToSelectOption[];
    search: string;
    filter: (item: TimeRecorder.Web.ToSelectOption) => boolean;
    addItem: (item: TimeRecorder.Web.ToSelectOption) => void;
    removeItem: (item: TimeRecorder.Web.ToSelectOption) => void;
    realign: () => void;
}
declare module TimeRecorder.Web {
    class AuthenticationService {
        private $proxy;
        private $q;
        static $inject: string[];
        static serviceId: string;
        appUser: Data.IAppUser;
        isAuthenticated: boolean;
        private loginInfo;
        constructor($proxy: Data.ProxyContainer, $q: ng.IQService);
        getAppUser: () => ng.IPromise<Data.IAppUser>;
        login: (password: string, userName: string, rememberMe: boolean) => ng.IPromise<{}>;
        logout: () => void;
        hasClaim(claim: string): ng.IPromise<boolean>;
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
        constructor($proxy: Data.ProxyContainer, $q: ng.IQService);
        startSearch(): ng.IPromise<{}>;
        loadMore(): void;
        loadPersons(): ng.IPromise<Data.IPersonVm[]>;
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
        persons: Data.IPersonVm[];
        nameMaxLength: number;
        idMaxLength: number;
        passwordMaxLength: number;
        constructor(authentication: AuthenticationService, $state: any, user: UserService, notification: NotificationServce, person: PersonService, location: LocationService);
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
        constructor(authentication: AuthenticationService, $state: any, role: RoleService, notification: NotificationServce);
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
        constructor(location: LocationService, notification: NotificationServce, authentication: AuthenticationService, $state: any);
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
        constructor(person: PersonService, role: RoleService, notification: NotificationServce, authentication: AuthenticationService, $state: any, $proxy: Data.ProxyContainer);
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
        constructor($q: ng.IQService, globalMessages: GlobalMessageService, notification: NotificationServce, authentication: AuthenticationService, $state: any);
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
    class PersonalMessageController {
        private personalMessages;
        private person;
        private authentication;
        private notification;
        private $state;
        static $inject: string[];
        static controllerId: string;
        persons: Data.IPersonVm[];
        selectOptions: ToSelectOption[];
        recipients: ToSelectOption[];
        body: string;
        head: string;
        messages: Data.ISentMessage[];
        selectedId: number;
        showForm: boolean;
        isNew: boolean;
        maxMsgLength: number;
        constructor(personalMessages: PersonalMessageService, person: PersonService, authentication: AuthenticationService, notification: NotificationServce, $state: any);
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
        constructor(notification: NotificationServce, authentication: AuthenticationService, $state: any, $proxy: Data.ProxyContainer, $scope: ng.IScope);
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
        people: Data.IPersonVm[];
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
        constructor(search: SearchService, authentication: AuthenticationService, $state: any, person: PersonService, location: LocationService, $proxy: Data.ProxyContainer, notification: NotificationServce);
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
    interface IMetaDataVm {
        id: number;
    }
    class TimebookingController {
        private authentication;
        private $state;
        private person;
        private location;
        private $proxy;
        private notification;
        static controllerId: string;
        static $inject: string[];
        metaData: Data.ITimeBookingMetaDataVm;
        searchResult: Data.ITimeBookingCm[];
        timeBooking: Data.ITimeBookingCm;
        fromFilter: Date;
        toFilter: Date;
        stateFilter: number;
        personFilter: string;
        typeFilter: number;
        datepickerOptions: {};
        dateFormat: string;
        minDate: Date;
        calendarIsOpen: {
            from: boolean;
            to: boolean;
        };
        constructor(authentication: AuthenticationService, $state: any, person: PersonService, location: LocationService, $proxy: Data.ProxyContainer, notification: NotificationServce);
        private init();
        getState(): Data.ETimeBookingState;
        getMetaDataVm<T extends IMetaDataVm>(id: number, data: T[]): T;
        getPersonNameById(id: number): string;
        getProjectNameById(id: number): string;
        getTypeNameById(id: number): string;
        getStateNameById(id: number): string;
        getStateColor(state: Data.ETimeBookingState): string;
        getIsEditable(entry: Data.ITimeBookingCm): boolean;
        search(): void;
        openCalendar(event: any, key: string): void;
    }
}
declare module TimeRecorder.Web {
    class TimeBookingEditController {
        private authentication;
        private $state;
        private person;
        private location;
        private $proxy;
        private notification;
        static controllerId: string;
        static $inject: string[];
        metaData: Data.ITimeBookingMetaDataVm;
        searchResult: Data.ITimeBookingCm[];
        timeBooking: Data.ITimeBookingCm;
        fromFilter: Date;
        toFilter: Date;
        stateFilter: number;
        personFilter: string;
        typeFilter: number;
        datepickerOptions: {};
        dateFormat: string;
        minDate: Date;
        calendarIsOpen: {
            from: boolean;
            to: boolean;
        };
        constructor(authentication: AuthenticationService, $state: any, person: PersonService, location: LocationService, $proxy: Data.ProxyContainer, notification: NotificationServce);
        private init();
        getState(): Data.ETimeBookingState;
        getMetaDataVm<T extends IMetaDataVm>(id: number, data: T[]): T;
        getPersonNameById(id: number): string;
        getProjectNameById(id: number): string;
        getTypeNameById(id: number): string;
        getStateNameById(id: number): string;
        getStateColor(state: Data.ETimeBookingState): string;
        getIsEditable(entry: Data.ITimeBookingCm): boolean;
        search(): void;
        openCalendar(event: any, key: string): void;
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
    class TimeSheetDataController {
        private $q;
        private $proxy;
        static serviceId: string;
        static $inject: string[];
        constructor($q: ng.IQService, $proxy: Data.ProxyContainer);
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
        static $inject: string[];
        static controllerId: string;
        static onDirectiveExpansionRowEvent: string;
        selectedDate: Date;
        timesheetData: TimesheetData;
        selectedProject: Data.IProjectVm;
        searchedProjects: Data.IProjectVm[];
        datePickerStates: {
            [name: string]: boolean;
        };
        datePickerOptions: {
            dateDisabled: string;
            datepickerMode: string;
        };
        constructor($scope: ITimeSheetControllerScope, blockUi: ng.ui.block.IBlockService, $proxy: Data.ProxyContainer, $timeSheetDataController: Business.TimeSheetDataController);
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
declare var mod: ng.IModule;
declare var mod: ng.IModule;
declare var mod: ng.IModule;
declare module DispoClient {
    interface IWindowHeightScope extends ng.IScope {
    }
}
