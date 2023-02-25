export interface IRoom {
    _id: string;
    roomName: string;
    roomCreator: {
        name: string;
        avatar: {
            public_id: string;
            secure_url: string;
        };
        _id: string;
    };
    clients: number;
}
