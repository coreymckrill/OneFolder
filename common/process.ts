export const IS_MAC = process.platform === 'darwin';
export const IS_WIN = process.platform === 'win32';
export const IS_DEV = process.env.NODE_ENV === 'development';

export const PORTABLE_DIRECTORY = process.env.PORTABLE_EXECUTABLE_DIR as string;
export const IS_PORTABLE = !!PORTABLE_DIRECTORY;
