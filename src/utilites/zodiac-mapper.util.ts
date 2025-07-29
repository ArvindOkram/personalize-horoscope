import { ZodiacSign } from "../common/enums/zodiac.enum";

/**
 * Returns corresponding zodiac sign wrt dob
 * @param birthDate 
 * @returns 
 */
export const getZodiacSign = (birthDate: Date): string => {
    try {
        const day = birthDate.getDate();
        const month = birthDate.getMonth() + 1; // JavaScript months are 0-based

        // Validate month and day
        const daysInMonth = new Date(birthDate.getFullYear(), month, 0).getDate();
        if (month < 1 || month > 12 || day < 1 || day > daysInMonth) {
            throw new Error("Invalid birth date");
        }

        if ((month === 1 && day >= 20) || (month === 2 && day <= 18))
            return ZodiacSign.AQUARIUS;
        if ((month === 2 && day >= 19) || (month === 3 && day <= 20))
            return ZodiacSign.PISCES;
        if ((month === 3 && day >= 21) || (month === 4 && day <= 19))
            return ZodiacSign.ARIES;
        if ((month === 4 && day >= 20) || (month === 5 && day <= 20))
            return ZodiacSign.TAURUS;
        if ((month === 5 && day >= 21) || (month === 6 && day <= 20))
            return ZodiacSign.GEMINI;
        if ((month === 6 && day >= 21) || (month === 7 && day <= 22))
            return ZodiacSign.CANCER;
        if ((month === 7 && day >= 23) || (month === 8 && day <= 22))
            return ZodiacSign.LEO;
        if ((month === 8 && day >= 23) || (month === 9 && day <= 22))
            return ZodiacSign.VIRGO;
        if ((month === 9 && day >= 23) || (month === 10 && day <= 22))
            return ZodiacSign.LIBRA;
        if ((month === 10 && day >= 23) || (month === 11 && day <= 21))
            return ZodiacSign.SCORPIO;
        if ((month === 11 && day >= 22) || (month === 12 && day <= 21))
            return ZodiacSign.SAGITTARIUS;
        if ((month === 12 && day >= 22) || (month === 1 && day <= 19))
            return ZodiacSign.CAPRICORN;

        throw new Error("Zodiac sign could not be determined");
    } catch (err) {
        console.log(`Error at [ZodiacMapperUtil :: getZodiacSign], err: ${err}`);
        throw err;
    }
};
