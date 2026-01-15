import { configureReanimatedLogger, ReanimatedLogLevel } from 'react-native-reanimated';

// Disable all Reanimated warnings in development
configureReanimatedLogger({
    level: ReanimatedLogLevel.warn,
    strict: false, // Disable strict mode
});
