const getSaveDonatedCard = () => {
    const storedDonatedCard = localStorage.getItem('donated-card')
    if (storedDonatedCard) {
        return JSON.parse(storedDonatedCard)
    }
    return [];
}

const saveDonation = id => {
    const storedDonatedCard = getSaveDonatedCard();
    storedDonatedCard.push(id)
    localStorage.setItem('donated-card', JSON.stringify(storedDonatedCard))

}

export { getSaveDonatedCard, saveDonation }