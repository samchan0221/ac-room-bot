import {TgBot} from "./bot";
import {acRoomService} from "./services/acRoomService";

const bot = new TgBot('1281053571:AAHw-K2Vsswy-ynT3NQxyWmnz4hEMlq8iRg');
bot.init();

async function loopOnce() {
    await acRoomService.updateRoomListing();
    await acRoomService.publishPlayer();
    await new Promise(resolve => setTimeout(()=>resolve(), 1000));
    return;
}

async function main(){
    while (true){
        await loopOnce();
    }
}

main();


