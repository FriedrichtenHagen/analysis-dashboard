// one day 
export interface dayData {
    date: string,
    google_spend: string, 
    id: string, 
    meta_spend: string, 
    revenue: string,
    influencer: string,
    new_customers: string,
}


// array of days
export interface transactionDataProps{
    transactionData: dayData[] 
}
