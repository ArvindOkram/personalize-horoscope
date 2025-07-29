import { ZodiacSign } from "../enums/zodiac.enum";

export interface zodiacHoroscope {
    description: string;
    mood: string;
    to_do: string;
    to_avoid: string;
}

export interface IHoroscopeHistory {
    userId: string;
    zodiac: ZodiacSign
    user_horoscope: zodiacHoroscope
}