class facture {
    constructor(amount, state, creationDate, deadline) {
        this.amount = amount || '';
        this.state = state || '';
        this.creationDate = creationDate || '';
        this.deadline = deadline || '';
    }
}

export default facture;