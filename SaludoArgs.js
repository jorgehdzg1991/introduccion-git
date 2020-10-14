module.exports = class SaludoArgs {
    static get nombre() {
        return process.argv[2];
    }

    static get apellido() {
        return process.argv[3];
    }
}
