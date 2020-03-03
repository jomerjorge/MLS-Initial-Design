export interface Iproducts {
    id: number;
    name: string;
    desc: string;
    price: number;
    discount: string;
    status: string;
}

export interface integreq{
    IntegrationID: number;
    Type: string;
    ImportID: number;
    ProviderID: number;
    ProviderEmail: string;
    URL: string;
    ImportProgress: string;
    LastRan: string;
    Updatefreqinhours: string;
    Listings: string;
    AvgImgs: string;
    CreatedStatus: string;
    Leads: string;
    Users: string;
    Agencies: string;
    Logs: string;
    Errors: string;
    Edit: string;
    Setup: string;
}