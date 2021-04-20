'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
    const { ctx } = this;
    const dataList = {
      list: [
        { id: 1, title: 'This is first news' },
        { id: 2, title: 'This is second news' },
      ]
    }
    await this.ctx.render('news/list.tpl', dataList)
  }

  async listApi() {
    const { ctx } = this;
    const dataList = {
      list: [
        { id: 1, title: 'This is first news' },
        { id: 2, title: 'This is second news' },
      ]
    }
    this.ctx.body = dataList
  }
}

module.exports = NewsController;
