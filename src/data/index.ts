import {IAction, IRoomType} from "../types";
import {Telegram} from "telegraf";

export class UserData {
    public keyword: string = '';
    public telegram: Telegram;
    public chat: any;
    public cat1: IAction = "免費";
    public cat2: Array<IRoomType> = [];
    public isPolling: boolean = true;

    constructor(telegram: Telegram, chat: any){
        this.telegram = telegram;
        this.chat = chat;
    }
}

class Data {
    public userDataMap: {[key: string]: UserData} = {};
}

export const data = new Data();
