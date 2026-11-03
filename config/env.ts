import dotenv from 'dotenv'

dotenv.config()

export const ENV = {
    baseUrl: process.env.BASE_URL!,
    browser:process.env.BROSWER || 'chromium'
};