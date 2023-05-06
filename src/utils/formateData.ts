export const formateData = (date: number) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const dateRefactor = new Date(date)
    const year = dateRefactor.getFullYear()
    const month = dateRefactor.getMonth()
    const day = dateRefactor.getDate()
    return `${day} ${monthNames[month]} ${year}`
}

export const formateDataApiToAndFrom = (dayCount: number) => {
    const past = new Date().setDate(new Date().getDate() - dayCount)
    const pastDate = new Date(past)

    const yearPast = pastDate.getFullYear()
    const monthPast = pastDate.getMonth() < 10 ? '0' + Number(pastDate.getMonth() + 1) : pastDate.getMonth() + 1
    const dayPast = pastDate.getDate() < 10 ? '0' + pastDate.getDate() : pastDate.getDate()

    return `${yearPast}-${monthPast}-${dayPast}`
}