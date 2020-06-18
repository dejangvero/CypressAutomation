/// <reference types="Cypress" />

class Productspage
{
    getCheckoutButton()
    {
        return cy.get("a[class='nav-link btn btn-primary']")
    }

    getFirstPriceElement()
    {
        return cy.get("body > app-root > app-shop > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(4) > strong")
    }

    getSecondPriceElement()
    {
        return cy.get("body > app-root > app-shop > div > div > div > table > tbody > tr:nth-child(2) > td:nth-child(4) > strong")
    }

    getFinalPrice(rawElement)
    {
        rawElement.then(function(price)
        {
            const rawPrice = price.text()            
            const finalPrice = parseInt(rawPrice.substring(3)).then(function(){
                cy.log(finalPRice)
            })                                          
            return finalPrice
        })
        
    }

    getTotalPriceElement()
    {
        return cy.get("h3>strong")
    }

    getFinalCheckout()
    {
        return cy.get("td>button[class='btn btn-success']")
    }

    getCountryDropdownInput()
    {
        return cy.get("input[id='country']")
    }
    
    selectDropdownValue(element, data)
    {
        element.type(data)
    }

    getDropDownValueFiltered()
    {
        return cy.get("div.suggestions>ul>li>a")
    }

    getCheckboxElement()
    {
        return cy.get("label[for='checkbox2']")
    }

    checkCheckbox(element)
    {
        element.check()
    }

    getPurchaseButton()
    {
        return cy.get("input[value='Purchase']")
    }

    getTextElement()
    {
        return cy.get(".alert")
    }

    getTextFromAnElement(rawElement)
    {
        rawElement.then(function(element)
        {
            const textvalue = element.text()
            return textvalue
        })
    }

    getPrices()
    {
        return cy.get("td:nth-child(4)>strong")
    }

    getAndCompareSum()
    {   
        var itemsTotal = 0
        return cy.get('td:nth-child(4) > strong').each(($el, index, $list) => {
 
            const [dolar, itemValue] = $el.text().split(" ")
            itemsTotal = itemsTotal + Number(itemValue)
 
        }).then(function () {
 
            cy.get('h3 > strong').then(function (el) {
 
                const [dolar, siteTotal] = el.text().split(" ")
                expect(Number(siteTotal)).to.equal(itemsTotal)
            })
        })
    }
}
export default Productspage