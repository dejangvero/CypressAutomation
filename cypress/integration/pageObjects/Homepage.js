class Homepage
{
    getEditBox()
    {
        return cy.get("body > app-root > form-comp > div > form > div:nth-child(1) > input")
    }

    getTwoWayDataBinding()
    {
        return cy.get("body > app-root > form-comp > div > h4 > input")
    }

    getGender(maleOrFemale)
    {
        return cy.get("select").select(maleOrFemale)
    }

    getEntrepreneurRadioButton()
    {
        return cy.get("#inlineRadio3")
    }

    getShopTab()
    {
        return cy.get("li:nth-child(2) > a")
    }
}

export default Homepage