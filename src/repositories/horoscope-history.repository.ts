import { FilterQuery } from "mongoose";
import { IHoroscopeHistory } from "../common/interface/horoscope.interface";
import { HoroscopeHistoryModel } from "../schema/horoscope.schema";

const createHoroscopeHistory = async (data: IHoroscopeHistory) => {
    try {
        return await HoroscopeHistoryModel.create(data);
    } catch (err) {
        console.log(`Error at [HoroscopeHistoryRepository :: createUser], err: ${err}`);
        throw err;
    }
};

// GET ONE
const getHoroscopeHistory = async (filter: FilterQuery<any>) => {
    try {
        return await HoroscopeHistoryModel.findOne(filter).lean();
    } catch (err) {
        console.log(`Error at [HoroscopeHistoryRepository :: getHoroscopeHistory], err: ${err}`);
        throw err;
    }
};

// GET MANY
const getManyHoroscopeHistory = async (filter: FilterQuery<IHoroscopeHistory> = {}) => {
    try {
        return await HoroscopeHistoryModel.find(filter).lean();
    } catch (err) {
        console.log(`Error at [HoroscopeHistoryRepository :: getManyHoroscopeHistory], err: ${err}`);
        throw err;
    }
};

export {
    createHoroscopeHistory,
    getHoroscopeHistory,
    getManyHoroscopeHistory
};
