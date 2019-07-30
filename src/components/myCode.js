import React from 'react';

const ExpenseListItem  = ({description, amount, createdAt}) => (
    <div>
        <h3>{description}</h3>
        <p>{createdAt-amount}</p>
    </div>
)