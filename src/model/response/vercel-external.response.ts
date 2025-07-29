// Not used in the project, can be used later
export interface VercelHoroscopeResponse {
    data: VercelHoroscopeResponseData;
    status: number;
    success: boolean;
}

export interface VercelHoroscopeResponseData {
    date: string; //Jul 28, 2025
    horoscope_data: string;
}
