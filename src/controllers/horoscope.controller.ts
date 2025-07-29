import { Request, Response } from 'express';
import horoscopeService from '../services/horoscope.service';
import { HttpStatusCode } from '../common/enums/http-status.enum';

const getUserHoroscope = async (req: Request, res: Response) => {
    try {
        const userData = (req as any).userData;
        const { userId } = userData;

        if (!userId) {
            return res.status(400).json({ message: "User ID missing from token" });
        }

        const response = await horoscopeService.getUserHoroscope(userId);

        return res.status(HttpStatusCode.OK).send(response);
    } catch (err: any) {
        console.log(`Error at [HoroscopeController :: getUserHoroscope], err: ${err}`)
        return res.status(500).send({
            err: err.message
        })
    }
}

const getUserHoroscopeHistory = async (req: Request, res: Response) => {
    try {
        const userData = (req as any).userData;
        const { userId } = userData;

        if (!userId) {
            return res.status(400).json({ message: "User ID missing from token" });
        }

        const response = await horoscopeService.getUserHoroscopeHistory(userId);

        return res.status(HttpStatusCode.OK).send(response);
    } catch (err: any) {
        console.log(`Error at [HoroscopeController :: getUserHoroscopeHistory], err: ${err}`)
        return res.status(500).send({
            err: err.message
        })
    }
}

/**
 * Can be use in future to pre seed the zodiac horoscope in-memory to enable efficient execution
 */
// const seedTodayHoroscope = async (req: Request, res: Response) => {
//     try {

//     } catch (err: any) {
//         console.log(`Error at [HoroscopeController :: seedTodayHoroscope], err: ${err}`)
//         return res.status(500).send({
//             err: err.message
//         })
//     }
// }

export default {
    getUserHoroscope,
    getUserHoroscopeHistory
}