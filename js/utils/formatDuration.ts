export default function(input: number): string {
    const floatSeconds: number = input;
    const hours: number = Math.floor(floatSeconds / 3600);
    const minutes: number = Math.floor(floatSeconds / 60 - hours * 60);
    const seconds: number = Math.floor(floatSeconds - minutes * 60);
    let result: string = seconds.toString();
    if (seconds < 10) {
        result = "0" + seconds.toString();
    }
    if (minutes < 10) {
        result = "0" + minutes.toString() + ":" + result;
    } else {
        result = minutes.toString() + ":" + result;
    }
    if (hours > 0) {
        result = hours.toString() + ":" + result;
    }
    return result;
}
