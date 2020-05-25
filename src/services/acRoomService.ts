import {IRoom, IRoomListing} from "../types";
import {apiService} from "./apiService";
import {data, UserData} from "../data";

class AcRoomService {
    private currentRoomListing: IRoomListing = {
        list: [],
    };

    private newRoomListing: IRoomListing = {
        list: [],
    };

    public async updateRoomListing(){
        const previousRoomListing = this.currentRoomListing;
        this.currentRoomListing = await apiService.apiGet('/list',{});
        this.newRoomListing = {
            list: this.currentRoomListing.list.filter(v => !previousRoomListing.list.map(w=>w.id).includes(v.id)),
        };
    }

    public async publishPlayer(){
        for(const newRoom of this.newRoomListing.list){
            for(const [tgId, userData] of Object.entries(data.userDataMap)){
                if(!userData.isPolling) {
                    continue;
                }
                if(userData.cat1 !== newRoom.action) {
                    continue;
                }
                if(userData.cat2.length > 0){
                    if(userData.cat2.filter(value => -1 !== newRoom.types.indexOf(value)).length === 0) continue;
                }
                if(userData.keyword.length > 0){
                    if(!([newRoom.name, newRoom.room, newRoom.note].join(' ').includes(userData.keyword))) {
                        continue;
                    }
                }
                this.tellPlayer(newRoom, userData);
            }
        }
    }

    public async tellPlayer(room: IRoom, userData: UserData){
        userData.telegram.sendMessage(userData.chat.id,
            `房間名稱: ${room.name}\n`+
            `房間標題: ${room.room}\n`+
            `房間9UP: ${room.note}\n`+
            `LINK: ${this.getRoomUrl(room)}`);
    }

    public getRoomUrl(room: IRoom){
        return `https://ac-room.cc/${room.id}`;
    }

}

export const acRoomService = new AcRoomService();
