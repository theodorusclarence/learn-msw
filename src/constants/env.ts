const isProd = process.env.NODE_ENV === 'production';

export const MSW_FLAG = !isProd;
