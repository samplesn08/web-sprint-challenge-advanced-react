import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    const header = screen.getByText(/checkout form/i)
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)
    const fName = screen.getByLabelText('First Name:')
    const lName = screen.getByLabelText('Last Name:')
    const address = screen.getByLabelText('Address:')
    const city = screen.getByLabelText('City:')
    const state = screen.getByLabelText('State:')
    const zip = screen.getByLabelText('Zip:')
    const submitButton = screen.getByRole('button')
    

    userEvent.type(fName, 'Nicholas')
    userEvent.type(lName, 'Samples')
    userEvent.type(address, '123 Road St.')
    userEvent.type(city, 'Pittsburgh')
    userEvent.type(state, 'PA')
    userEvent.type(zip, '12345')
    userEvent.click(submitButton)
    
    const successDiv = screen.getByTestId('successMessage')
    expect(successDiv).toBeInTheDocument()
});
