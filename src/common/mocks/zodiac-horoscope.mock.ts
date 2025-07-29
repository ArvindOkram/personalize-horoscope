import { zodiacHoroscope } from "../interface/horoscope.interface";
import { ZodiacSign } from "../enums/zodiac.enum";

export const zodiacMockMap: Record<ZodiacSign, zodiacHoroscope> = {
    [ZodiacSign.ARIES]: {
        "description": "Your fiery spirit is high today. Use it wisely",
        "mood": "Energetic",
        "to_do": "Take initiative, start new tasks, lead by example",
        "to_avoid": "Impulsive decisions, arguments"
    },
    [ZodiacSign.TAURUS]: {
        "description": "Today calls for patience and grounding.",
        "mood": "Calm",
        "to_do": "Stick to routines, spend time in nature",
        "to_avoid": "Overspending, resisting change"
    },
    [ZodiacSign.GEMINI]: {
        "description": "Your mind is sharp—make the most of it.",
        "mood": "Curious",
        "to_do": "Engage in conversations, write or learn something new",
        "to_avoid": "Scattering energy, overthinking"
    },
    [ZodiacSign.CANCER]: {
        "description": "Emotions may run deep—honor them.",
        "mood": "Sensitive",
        "to_do": "Connect with loved ones, reflect quietly",
        "to_avoid": "Emotional reactivity, isolation"
    },
    [ZodiacSign.LEO]: {
        "description": "Your charisma shines—use it for good.",
        "mood": "Confident",
        "to_do": "Express yourself, be generous",
        "to_avoid": "Seeking too much attention, arrogance"
    },
    [ZodiacSign.VIRGO]: {
        "description": "Details matter more than usual today.",
        "mood": "Focused",
        "to_do": "Organize, plan, finish pending tasks",
        "to_avoid": "Being overly critical, micromanaging"
    },
    [ZodiacSign.LIBRA]: {
        "description": "Seek balance in all you do today.",
        "mood": "Harmonious",
        "to_do": "Collaborate, make peace, decorate your space",
        "to_avoid": "Indecision, people-pleasing"
    },
    [ZodiacSign.SCORPIO]: {
        "description": "A day of intense clarity and purpose.",
        "mood": "Driven",
        "to_do": "Focus on transformation, dig deep into projects",
        "to_avoid": "Jealousy, secrecy"
    },
    [ZodiacSign.SAGITTARIUS]: {
        "description": "Adventure calls—say yes to new experiences.",
        "mood": "Optimistic",
        "to_do": "Explore ideas, travel (even mentally)",
        "to_avoid": "Overpromising, bluntness"
    },
    [ZodiacSign.CAPRICORN]: {
        "description": "Slow and steady progress is key today.",
        "mood": "Disciplined",
        "to_do": "Set realistic goals, take responsibility",
        "to_avoid": "Workaholism, being too rigid"
    },
    [ZodiacSign.AQUARIUS]: {
        "description": "Innovation flows—let your mind wander.",
        "mood": "Inventive",
        "to_do": "Think outside the box, help a cause",
        "to_avoid": "Detachment, ignoring emotions"
    },
    [ZodiacSign.PISCES]: {
        "description": "You're tuned in—trust your intuition.",
        "mood": "Dreamy",
        "to_do": "Create art, meditate, be kind",
        "to_avoid": "Escapism, overidealizing others"
    }
};