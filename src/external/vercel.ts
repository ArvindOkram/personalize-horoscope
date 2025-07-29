// external API not used could be use in future
import axios from "axios";
import { VercelHoroscopeResponse } from "../model/response/vercel-external.response";
import { HttpStatusCode } from "../common/enums/http-status.enum";

/**
 * Fetch daily horoscope by zodiac sign
 * @param sign Zodiac sign
 * @param day Day for horoscope (e.g., 'today', 'tomorrow', 'yesterday')
 * @returns
 */
export const fetchDailyHoroscope = async (
    sign: string,
    day: "today" | "tomorrow" | "yesterday" = "today"
): Promise<VercelHoroscopeResponse> => {
    try {
        const vercelUrl: string = process.env.VERCEL_HOROSCOPE_API_URL!;
        const response = await axios.get(vercelUrl, {
            params: {
                sign,
                day,
            },
            headers: {
                Accept: "application/json",
            },
        });

        if (response.status != HttpStatusCode.OK) {
            console.warn(`Error calling vercel api, url: ${vercelUrl}`);
            throw new Error(`Vercel side failure`);
        }

        return response.data;
    } catch (err) {
        console.error(`Error at [Vercel :: fetchDailyHoroscope], err: ${err}`)
        throw err;
    }
};
