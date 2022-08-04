import { screen } from "@testing-library/dom";
import { APP_ROUTES } from "../../common/constants/";

describe("Go to send page and submit form with user values", () => {
  let walletsResponse = [];
  it("should render the form to send ether", () => {
    cy.intercept({
      method: "GET",
      path:
        "api?module=account&action=txlistinternal&startblock=0&endblock=2702578&page=22&offset=10&sort=asc&apikey=1T68H92AUDD2CAH79WHWG8THZU9XPBPQQH",
      hostname: "api.etherscan.io",
    }).as("getWallets");

    cy.intercept({
      method: "GET",
      path:
        "api?module=account&action=balancemulti&address=0x2a9345be3f611a15b4ac383c0f601c4b16b24577%2C0x834e9b529ac9fa63b39a06f8d8c9b0d6791fa5df%2C0x073f70b5bfade6409e4951ef72bc8f4157677729%2C0xf88a65846c19d8fc76fff545feaa7bbc7114f667%2C0xfc372ff6927cb396d9cf29803500110da632bc52%2C0xce09fd3e23b65bad12809190a19b6bfcffd48c35%2C0x288e4356f12d0d3d0f8df3506e457e7cfd5f4ab0%2C0x17580b766f7453525ca4c6a88b01b50570ea088c&tag=latest&apikey=1T68H92AUDD2CAH79WHWG8THZU9XPBPQQH",
      hostname: "api.etherscan.io",
    }).as("getWalletsBalance");

    cy.visit(APP_ROUTES.HOME);
    cy.wait("@getWallets");

    cy.wait("@getWalletsBalance").then(({ response }) => {
      walletsResponse = response.body.result.sort((a, b) =>
        a.balance > b.balance
      ).reverse()
        .sort();
    });

    cy.get("[data-testid='wallet-list-item']").each(
      (item, index, list) => {
        expect(list).to.have.length(8);
        expect(item.children).to.have.length(2);
      },
    );

    cy.findByTestId("button-next").click();

    cy.url().should("include", APP_ROUTES.SEND);
  });

  it("should fill the form and click the send button", () => {
    cy.get("[data-testid='button']").should("have.length", 1).each(
      (button, index) => {
        return button;
      },
    ).then((button) => {
      expect(button[0]).to.have.property("disabled");
    });
    cy.findByTestId("from-input").type(walletsResponse[0].account);
    cy.findByTestId("to-input").type(walletsResponse[2].account);
    cy.findByTestId("amount-input").type("0.76983");
    cy.findByTestId("button").click();
    cy.url().should("include", APP_ROUTES.SEND_SUCCESS);
  });
});
