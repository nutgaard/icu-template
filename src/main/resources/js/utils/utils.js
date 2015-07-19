module.exports = {
    delay: (func, ms = 350) => {
        return function () {
            var that = this;
            var args = arguments;
            setTimeout(function () {
                func.call(that, args);
            }, ms);
        }
    }
};