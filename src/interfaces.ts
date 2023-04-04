export interface Asset {
    id: number;
    name: string;
    type: "stock" | "bond" | "currency";
    purchasePrice: number;
    quantity: number;
    annualPercentageRate: number;
    brokerCommission: number;
    tax: number;
    investmentPeriod: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface Portfolio {
    id: number;
    name: string;
    assets: Asset[];
    created_at: Date;
}

