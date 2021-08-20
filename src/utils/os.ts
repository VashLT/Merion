// functions to detect OS
export const getUserOS = () => {
    if (window.navigator.userAgent.indexOf("Windows NT 10.0") !== -1) return "windows";
    if (window.navigator.userAgent.indexOf("Windows NT 6.3") !== -1) return "windows";
    if (window.navigator.userAgent.indexOf("Windows NT 6.2") !== -1) return "windows";
    if (window.navigator.userAgent.indexOf("Windows NT 6.1") !== -1) return "windows";
    if (window.navigator.userAgent.indexOf("Windows NT 6.0") !== -1) return "windows";
    if (window.navigator.userAgent.indexOf("Windows NT 5.1") !== -1) return "windows";
    if (window.navigator.userAgent.indexOf("Windows NT 5.0") !== -1) return "windows";
    if (window.navigator.userAgent.indexOf("Mac") !== -1) return "mac/ios";
    if (window.navigator.userAgent.indexOf("X11") !== -1) return "unix";
    if (window.navigator.userAgent.indexOf("Linux") !== -1) return "linux";
}

export default getUserOS;