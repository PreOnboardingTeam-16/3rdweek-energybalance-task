describe('start', () => {
  context('검색', () => {  
        it('successfully load', () => {
          cy.visit('https://energybalancee.herokuapp.com/') 

          cy.get('img[alt="로고"]').click();
    
          cy.get('div').contains('검색').click()
    
          cy.get('button').contains('인기 순').click()
    
          cy.get('button').contains('높은가격 순').click()
    
          cy.get('button').contains('낮은가격 순').click()
      })
    
     
    });  
  });  

  