import { Schema, model } from "mongoose";

const horoscopeHistorySchema = new Schema(
  {
    userId: {
      type: String,
      required: [true, 'UserId is required'],
    },
    zodiac: {
      type: String,
      required: [true, 'Zodiac is required'],
    },
    user_horoscope: {
      description: {
        type: String,
        required: true,
      },
      mood: {
        type: String,
        required: true,
      },
      to_do: {
        type: String,
        required: true,
      },
      to_avoid: {
        type: String,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

export const HoroscopeHistoryModel = model("horoscope_history", horoscopeHistorySchema);