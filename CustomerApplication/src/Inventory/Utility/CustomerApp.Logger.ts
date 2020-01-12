export interface ILogger{
    Log();
}

export class DbLogger implements ILogger{
    Log(){
        console.log("Using Db logger")
    }
}
export class FileLogger implements ILogger{
    Log(){
        console.log("Using File logger")
    }
 
}
export class BaseLogger implements BaseLogger{
    Log(){
        console.log("Using console logger");
    }
}
export class ConsoleLogger extends BaseLogger{
    Log(){
        console.log("Using console logger");

    }
}