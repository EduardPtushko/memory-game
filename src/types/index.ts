export interface ColorElement {
    bcgColor: string;
    open: boolean;
    id: number;
}

export interface Validation {
    required: boolean;
    minLength: number;
    maxLength: number;
    isEmail: boolean;
    isNumeric: boolean;
}

export interface Result {
    date?: string;
    colors: number;
    clicks: number;
    _id: string;
}
