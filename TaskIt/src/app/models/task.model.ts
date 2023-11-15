export class Task {
  public id: number;
  public title: string;
  public date: Date;
  public priority: string;
  public status: string;
  public description?: string;
  constructor(id:number, title:string, date:Date, priority:string, status: string, description?:string ){
    this.id=id;
    this.title=title;
    this.date=date;
    this.priority=priority;
    this.status=status;
    this.description=description;
  }
}
