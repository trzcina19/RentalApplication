export class Property {
    constructor(
        public propertyId: number,
        public type: string,
        public description: string,
        public romos: number,
        public area: number,
        public washer: boolean,
        public refrigerator: boolean,
        public iron: boolean,
    ) { };

}