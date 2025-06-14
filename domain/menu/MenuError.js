class MenuError extends Error {
    constructor(message = "MenuError") {
        super(message);
        this.name = "MenuError";
    }
}

export default MenuError;
