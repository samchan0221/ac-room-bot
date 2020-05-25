import {Telegraf} from "telegraf";
import {TelegrafContext} from "telegraf/typings/context";
import {locales} from "../locales";
import {searchMenu} from "./SearchMenu";

export class TgBot{
    private bot: Telegraf<TelegrafContext>;

    constructor(token: string){
        this.bot = new Telegraf<TelegrafContext>(token);
    }

    public init(){
        this.bot.catch((err, ctx) => {
            console.log(`Ooops, encountered an error for ${ctx.updateType}`, err);
            ctx.reply('個野壞左, 搵singsingBB');
        });

        this.bot.start((ctx) => {
            ctx.reply(locales.welcomeMessage);
        });

        this.bot.use(searchMenu.init());

        this.bot.hears('/search', (ctx)=>{
            ctx.reply('testing');
        });

        this.bot.launch();
        console.log('bot started');
    }
}
