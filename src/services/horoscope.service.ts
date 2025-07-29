import { ZodiacSign } from "../common/enums/zodiac.enum";
import { IHoroscopeHistory, zodiacHoroscope } from "../common/interface/horoscope.interface";
import { zodiacMockMap } from "../common/mocks/zodiac-horoscope.mock";
import { createHoroscopeHistory, getHoroscopeHistory, getManyHoroscopeHistory } from "../repositories/horoscope-history.repository";
import { getUserField } from "../repositories/user.repository";

const getUserHoroscope = async (userId: string) => {
    try {
        const userZodiac = await getUserField({ _id: userId }, 'zodiac') as ZodiacSign;
        const todayHorscope: zodiacHoroscope = zodiacMockMap[userZodiac];

        await captureUserHoroscope(userId, userZodiac, todayHorscope);

        return todayHorscope;
    } catch (err) {
        console.log(`Error at [HoroscopeService :: getUserHoroscope], err: ${err}`);
        throw err;
    }
}

const captureUserHoroscope = async (
    userId: string,
    userZodiac: ZodiacSign,
    todayHoroscope: zodiacHoroscope
) => {
    try {
        const startOfToday = new Date();
        startOfToday.setUTCHours(0, 0, 0, 0);

        // Check if a record already exists for today
        const existing = await getHoroscopeHistory({
            userId,
            createdAt: { $gte: startOfToday }
        });

        if (existing) {
            console.log(`Horoscope for user ${userId} already captured today.`);
            return null;
        }

        const userHoroscope: IHoroscopeHistory = {
            userId,
            zodiac: userZodiac,
            user_horoscope: todayHoroscope
        };

        return await createHoroscopeHistory(userHoroscope);
    } catch (err) {
        console.log(`Error at [HoroscopeService :: captureUserHoroscope], err: ${err}`);
        throw err;
    }
};





const getUserHoroscopeHistory = async (userId: string) => {
    try {
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        const userHoroscopeHistory = await getManyHoroscopeHistory(
            {
                userId,
                createdAt: {
                    $gte: sevenDaysAgo
                }
            },
        );

        const sortedUserHoroscopeHistory = userHoroscopeHistory
            .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

        return sortedUserHoroscopeHistory.map(horoscope => horoscope.user_horoscope);
    } catch (err) {
        console.log(`Error at [HoroscopeService :: getUserHoroscopeHistory], err: ${err}`);
        throw err;
    }
}



export default {
    getUserHoroscope,
    getUserHoroscopeHistory
}