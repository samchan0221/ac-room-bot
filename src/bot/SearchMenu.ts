
// on search menu

import TelegrafInlineMenu from "telegraf-inline-menu";
import {actionList, IAction, IRoomType, roomTypeList} from "../types";
import {data, UserData} from "../data";

export const searchMenu = new TelegrafInlineMenu(ctx => `而家search緊: ${data.userDataMap[ctx.from!.id]?.keyword || ''}`);
searchMenu.setCommand('help');

// TEXT
searchMenu.question('更改關鍵字','add', {
    uniqueIdentifier: '666',
    questionText: '打keyword啦',
    setFunc: (_ctx, key) => {
        const id = _ctx.from!.id;
        if(!data.userDataMap[id]){
            data.userDataMap[id] = new UserData(_ctx.telegram, _ctx.chat);
        }
        data.userDataMap[id].keyword = key || '';
    },
});

// CAT
searchMenu.select('s1', actionList, {
    setFunc: async (ctx, key) => {
        const id = ctx.from!.id;
        if(!data.userDataMap[id]){
            data.userDataMap[id] = new UserData(ctx.telegram, ctx.chat);
        }
        data.userDataMap[id].cat1 = key as IAction || '';
    },
    isSetFunc: (_ctx, key) => {
        const id = _ctx.from!.id;
        if(!data.userDataMap[id]){
            data.userDataMap[id] = new UserData(_ctx.telegram, _ctx.chat);
        }
        return data.userDataMap[id].cat1 === key;
    }
});

searchMenu.select('s2', roomTypeList, {
    setFunc: async (ctx, cat) => {
        const id = ctx.from!.id;
        if(!data.userDataMap[id]){
            data.userDataMap[id] = new UserData(ctx.telegram, ctx.chat);
        }
        if(data.userDataMap[id].cat2.includes(cat as IRoomType)){
            data.userDataMap[id].cat2 = data.userDataMap[id].cat2.filter(v=>v!==cat);
        } else {
            data.userDataMap[id].cat2.push(cat as IRoomType);
        }
    },
    isSetFunc: (_ctx, cat) => {
        const id = _ctx.from!.id;
        if(!data.userDataMap[id]){
            data.userDataMap[id] = new UserData(_ctx.telegram, _ctx.chat);
        }
        return data.userDataMap[id].cat2.includes(cat as IRoomType);
    }
});

searchMenu.select('s3', ['有match就TG我'], {
    setFunc: async (ctx, cat) => {
        const id = ctx.from!.id;
        if(!data.userDataMap[id]){
            data.userDataMap[id] = new UserData(ctx.telegram, ctx.chat);
        }
        if(data.userDataMap[id].isPolling){
            data.userDataMap[id].isPolling = false;
        } else {
            data.userDataMap[id].isPolling = true;
        }
    },
    isSetFunc: (_ctx, cat) => {
        const id = _ctx.from!.id;
        if(!data.userDataMap[id]){
            data.userDataMap[id] = new UserData(_ctx.telegram, _ctx.chat);
        }
        return data.userDataMap[id].isPolling;
    }
});

