export const updateProfile = (firstName: string, lastName: string) => {
    cy.getByTestId('EditableProfileHeaderCard.EditButton').click();
    cy.getByTestId('ProfileCard.firstName').clear().type(firstName);
    cy.getByTestId('ProfileCard.lastName').clear().type(lastName);
    cy.getByTestId('EditableProfileHeaderCard.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
    return cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: 'fdf' },
        body: {
            id: '4',
            first: 'test',
            lastname: 'user',
            age: 22,
            currency: 'USD',
            country: 'Russia',
            city: 'Moscow',
            username: 'testuser',
            avatar: 'https://i.pinimg.com/736x/9f/3a/da/9f3ada5db0d3581a8111f401790726a1.jpg',
        },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstName: string, lastName: string): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
