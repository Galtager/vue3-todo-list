export interface  ITodoItem {
    num?: number,
    task: string,
    date: Date,
    status: IStatus,
    id:string
}


export type IStatus = "Active" | "Completed" | "All"
