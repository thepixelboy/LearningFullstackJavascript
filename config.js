const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export const logStars = function(message) {
    console.info('**********');
    console.info(message);
    console.info('**********');
};

export default {
    'mongodb+srv://yourUser:yourPassword@actinium-dvo5d.mongodb.net/test?retryWrites=true&w=majority',    
    port: env.PORT || 8080,
    host: env.HOST || '0.0.0.0',
    get serverUrl() {
        return `http://${this.host}:${this.port}`;
    }
};