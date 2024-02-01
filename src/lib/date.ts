export function formatDate(inputDate: string): string {
    const date = new Date(inputDate);
    const options: any = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    return formattedDate;
}