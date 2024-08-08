const path = require('path');

export const IS_MAC = process.platform === 'darwin';
export const IS_WIN = process.platform === 'win32';
export const IS_DEV = process.env.NODE_ENV === 'development';

let rootDir;
if (process.env.PORTABLE_EXECUTABLE_DIR) {
    rootDir = process.env.PORTABLE_EXECUTABLE_DIR;
} else if (process.env.APPIMAGE) {
    rootDir = path.dirname(
        path.resolve(
            process.env.APPIMAGE
        )
    );
}

export const PORTABLE_DIRECTORY = rootDir;
export const IS_PORTABLE = !!PORTABLE_DIRECTORY;
