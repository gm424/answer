// https://docs.cypress.io/api/table-of-contents

describe('测试', () => {
  it('显示最先记录', () => {
    cy.visit('/')
  })
  it('添加记录', () => {
    //点击Add按钮
    cy.contains('button','Add').click()
    //找到input框,添加title
    cy.get('input[placeholder="Add title"]')
    .type('the new title')
    //找到input框,添加content
    cy.get('input[placeholder="Add content"]')
    .type('the new content')
    //找到确定按钮提交
    cy.contains('button','确 定').click()
  })
  it('删除记录', () => {
    cy.visit('/')
    //点击复选框按钮
    cy.get('input[value=0]').click()
    //点击取消按钮
    cy.get('#Cancel').click({force: true})
    cy.visit('/')
    //点击复选框按钮
    cy.get('input[value=1]').click({force: true})
    //点击确定按钮
    cy.contains('button','YES').click({force: true})
  })
})
