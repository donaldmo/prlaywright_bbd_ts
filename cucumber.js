module.exports = {
    default: {
        require: ['tests/step-definitions/*.ts'],
        format: ['progress'],
        paths: ['tests/features/*.feature'],
        requireModule: ['ts-node/register'],
    }
}