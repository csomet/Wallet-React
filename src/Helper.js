export const validateBudget = budget => {
    let totalBudget = parseInt(budget, 10)|| 0;

    if(totalBudget > 0 ) {
        return totalBudget;
    } else {
        return false;
    }
}

export const reviewBudget = (budget,remaining) => {
    let clase;
    // check  25% 
    if( (budget / 4) > remaining) {
         clase = 'alert alert-danger';
    } else if( (budget / 2) > remaining) {
        clase = 'alert alert-warning'
    } else {
        clase = 'alert alert alert-success';
    }
    return clase;
} 