
export class Data {
    data: any

    constructor() {
        this.data = "";
    }

    setData(x?: any) { this.data = x || ""; }
    
    async fetchedData() {
        await fetch('http://cdn.sbtech.com/rj/mocks/MOCK_DATA.json')
            .then(x => x.json())
            .then(x => this.setData(x));
    }
}

