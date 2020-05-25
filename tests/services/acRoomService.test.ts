import {acRoomService} from "../../src/services/acRoomService";

describe('acRoomService.test.ts', ()=>{
    it('testing updateRoomListing()', async ()=>{
        console.time('aaa');
        const result = await acRoomService.updateRoomListing();
        console.log(result);
        console.time('aaa');
    });
});
