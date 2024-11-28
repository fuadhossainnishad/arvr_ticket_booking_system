import { format } from 'date-fns';
export function formateDate(dateString:string):string{
    const formateString='yyyy-MM-dd'
    const date=new Date(dateString)
    return format(date,formateString);
     
}

