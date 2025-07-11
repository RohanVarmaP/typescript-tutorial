import { words } from "../data/Words";

type timeType = {
    date: string,
    time: string,
}

function getRandomNumber(arr: string[]): number {
    return Math.floor(Math.random() * arr.length)
}

export function getRandomWord(): string {
    return words[getRandomNumber(words)]
}

export function getFarewellText(language: string): string {
    const options: string[] = [
        `Farewell, ${language}`,
        `Adios, ${language}`,
        `R.I.P., ${language}`,
        `We'll miss you, ${language}`,
        `Oh no, not ${language}!`,
        `${language} bites the dust`,
        `Gone but not forgotten, ${language}`,
        `The end of ${language} as we know it`,
        `Off into the sunset, ${language}`,
        `${language}, it's been real`,
        `${language}, your watch has ended`,
        `${language} has left the building`
    ];
    return options[getRandomNumber(options)];
}


export const DateTimeComponent = (): timeType => {
    const currentDate = new Date();

    const formattedDate = currentDate.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });

    const formattedTime = currentDate.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });

    return {
        date: formattedDate,
        time: formattedTime
    }
};

export default DateTimeComponent;