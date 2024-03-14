const date = {
    dateDiff: (date1, date2 = new Date()) => {
        const diff = Math.abs(date2.getTime() - date1.getTime());
        const totalMonths = Math.ceil(diff / (1000 * 60 * 60 * 24 * 30.44));
        const years = Math.floor(totalMonths / 12);
        const months = totalMonths % 12;
    
        return { years, months };
    },
    format_date: (date) => {
        return new Date(date).toLocaleDateString('pt-BR', {
            timeZone: 'UTC',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    }

    
}
export {
    date
}