export type IMethod = 'GET'|'POST';

export type IRoomListing = {
    list: Array<IRoom>,
};

export type IRoom = {
    id: string,
    name: string,
    room: string, //description
    note: string,
    action: IAction,
    types: Array<IRoomType>,
    close: boolean,
    private: false,
    private_code: null|string,
    no_fee: number,
    cutline: 0,
    limit: 1,
    image: null| string,
    leave_method?: string,
    order: number,
    guests: 0,
    created_at: Date,
    updated_at: Date,
    last_action_at: Date,
    like: number,
    style: null,
    upLimit: boolean,
    freeRoom: boolean,
};

export type IAction = '免費'|'收費'|'收購'|'販賣'|'交換';
export const actionList: IAction[] = ['免費','收費','收購','販賣','交換'];
export type IRoomType = '贈送'|'逛島'|'菜價'|'流星雨'|'DIY'|'NPC'|'收留'|'摸摸'|'代工'|'澆花'|'化石'|'活動';
export const roomTypeList: IRoomType[] = ['贈送','逛島','菜價','流星雨','DIY','NPC','收留','摸摸','代工','澆花','化石','活動'];
