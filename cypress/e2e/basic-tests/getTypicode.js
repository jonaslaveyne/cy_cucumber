describe('Use GET method to get data from typicode', () => {

    it.skip('first visit ang get on typicode.com', () => {
        cy.visit('https://jsonplaceholder.typicode.com/');
        cy.request({
            method: 'GET',
            url: '/posts'
        })
    })

    it('GET on typicode.com with properties', () => {
        cy.api({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts'
        })
    })

    it('GET on typicode.com no properties', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts'
        )
    })

    it('GET on typicode.com without add the GET string', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts')
    })

    it('GET on typicode.com and check status in response with expect', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts').then((response) => {
            expect(response.status).to.eq(200);
        })
    })

    it('GET on typicode.com and check status in response with its status', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts').its('status').should('eq', 200);
    })

    it('GET on typicode.com and check body lenght in response with its body', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts').its('body').should('have.length', 100);
    })

    it('GET on typicode.com and check lenght greater than in body response with its body', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts').its('body').should('have.length.greaterThan', 90);
    })

    it('GET on typicode.com without and check status and lenght with expect', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.length(100);
        })
    })

    it('GET on typicode.com check status in response and some body properties with expect', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.length(100);
            expect(response.body).to.be.a('array');
            expect(response.body).not.to.be.a('number');
        })
    })

    it('GET on typicode.com check status in response and some body properties with should', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts').should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.length(100);
            expect(response.body).to.be.a('array');
            expect(response.body).not.to.be.a('number');
        })
    })


    it('GET on typicode.com check status in response and some body properties with should in posts/1', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts/1').should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.a('object');
            expect(response.body).not.to.be.a('number');
            expect(response.body).not.to.be.a('string');
        })
    })

    it('GET on typicode.com check status in response and some body properties with should in posts/1', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts/').should((response) => {
            response.body.forEach((array) => {
                expect(array).to.include.all.keys(["userId", "id", "title", "body"]);
            });
        })
    })

    it('GET on typicode.com check status in response and lenght for the body', () => {
        cy.request('https://jsonplaceholder.typicode.com/comments').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.length(500);
            expect(response.body).to.be.a('array');
            expect(response.duration).to.be.lessThan(60);
        })
    })

    // Exercises for 02/04/2025

    it('GET on typicode.com check status in response and some body properties with should in photos', () => {
        cy.request('https://jsonplaceholder.typicode.com/photos').should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.a('array');
            expect(response.body).not.to.be.a('number');
            expect(response.body).to.have.length(5000);
        })
    })

    it('GET on typicode.com check status in response and some body properties with should in todos', () => {
        cy.request('https://jsonplaceholder.typicode.com/todos').should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.a('array');
            expect(response.body).not.to.be.a('number');
            expect(response.body).to.have.length(200);
        })
    })

    it('GET on typicode.com check status in response and some body properties with should in todos/1', () => {
        cy.request('https://jsonplaceholder.typicode.com/todos/1').should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('title', 'delectus aut autem');
            expect(response.body).to.have.property('completed').that.is.a('boolean');
            expect(response.body).to.include.all.keys(["userId", "id", "title", "completed"]);
            expect(response.body).to.deep.equal(
                {
                    "userId": 1,
                    "id": 1,
                    "title": "delectus aut autem",
                    "completed": false
                }
            )
        })
    })

    it('GET on api.restful-api.dev check response is correct on object 1', () => {
        cy.request('https://api.restful-api.dev/objects/1').should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body['id']).to.be.a('number').eq(1);
            expect(response.body['name']).to.be.a('string').eq('Google Pixel 6 Pro');
            // expect(response.body).not.to.be.a('number');
            // expect(response.body).to.have.length(200);
            // expect(response.body['title']).be.a('string').eq(
            //     'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'
            //   );
            //   expect(response.body['userId']).be.a('number').to.eq(1);
            //   expect(response.body['body']).to.be.a('string').to.contain(
            //     'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
            //   );
        })
    })

})