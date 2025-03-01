/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
// @ts-ignore
Cypress.Commands.add('wait_promise', (timeout) => {
// Use Cypress.Promise to simulate the wait without logging
    return new Cypress.Promise(resolve => {
        setTimeout(() => {
            resolve();// @ts-ignore
        }, timeout);
    });
});

/**
 * Configure Project Specific BaseUrl and its Related Configurations
 * header =
 * url =
 * failOnStatusCode =
 * timeout =
 * retryOnNetworkFailure =
 */
//@ts-ignore
Cypress.Commands.add('launch_website', (timeout) => {
    const headers = {
        'true-client-ip': '00.20.149.000' // Replace with your white list static ip
    };
    cy.visit({
        url: 'https://staging.xxxxx.io/xxx', // Replace with your website URL
        headers: headers,
        failOnStatusCode: false,
        timeout: 10000, // Replace with your page loading wait
        retryOnNetworkFailure: true
    });
});
/**
 * This will stop Cypress from failing your test when the specific error happens,
 * but it's generally better to fix the underlying issue
 */
Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('Cannot read properties of undefined')) {
        return false; // Return false to indicate the error is handled
    }
    return true;
});
