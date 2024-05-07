import { Article } from '../../../src/entities/Article';

const defaultArticle = {
    title: 'Всё о IT',
    subtitle: 'Рассказываем и показываем',
    img: 'https://www.it-world.ru/upload/iblock/3f6/6c5bvtxl1zu15ocotsmcsk1e6k2xi6ew/shutterstock_1033853617.jpg',
    views: 654,
    createdAt: '12.05.2021',
    userId: '1',
    type: ['SCIENCE'],
    blocks: [],
};

export const createArticle = (article?: Article) => {
    return cy
        .request({
            method: 'POST',
            url: 'http://localhost:8000/articles',
            headers: { Authorization: 'fdf' },
            body: article ?? defaultArticle,
        })
        .then((resp) => resp.body);
};

export const removeArticle = (articleId: string) => {
    return cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { Authorization: 'fdf' },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>;
            removeArticle(articleId: string): Chainable<void>;
        }
    }
}
