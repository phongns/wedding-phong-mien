export interface WeddingBlock {
    mainPicture: string;
    wifeName: string;
    husbandName: string;
    wifeFamily: {
        motherName: string;
        fatherName: string;
        address: string;
    };
    husbandFamily: {
        motherName: string;
        fatherName: string;
        address: string;
    };
    times: {
        day: string;
        dayOfWeek: string;
        lunar: string;
        time: string;
        address: string;
    };
    timeLine: {
        welcome: string;
        talk: string;
        party: string;
    },
    albums: string[];
}