  //////////////////////////
  //
  //    Modals
  //
  //////////////////////////
function initModal() {
    // Get the modal
    var modal = document.querySelector('[data-js="modal"]');
    var body = document.querySelector('body');
    // Get the button that opens the modal
    var btn = document.querySelectorAll('.portfolio-display button');
    // When the user clicks on the button, open the modal 

    btn.forEach(item => {
        item.addEventListener('click', function() {
            modal.classList.add('modal-opened');
            body.style['overflow'] = 'hidden';

            // Set modal
            var id = item.getAttribute('data-modal');
            var { description, tag, link, name } = modalContent.find(m => m.name == id);
            document.querySelector('[data-js="modal-description"]').innerHTML = description;
            document.querySelector('[data-js="modal-tag"]').innerHTML = tag;
            document.querySelector('[data-js="modal-link"]').setAttribute('href',link);
            document.querySelector('[data-js="modal-title"]').innerHTML = name;
            document.querySelector(`[data-img="${id}"]`).classList.add('active');
        });
    });
    var closeIcon = document.getElementById("close");

    closeIcon.onclick = function() {
        // modal.style.display = "none";
        modal.classList.remove('modal-opened');
        body.style['overflow'] = 'scroll';

        document.querySelector(`.modal__image-hidden.active`).classList.remove('active');
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.classList.remove('modal-opened');
            body.style['overflow'] = 'scroll';
            document.querySelector(`.modal__image-hidden.active`).classList.remove('active');
        }
    }
}

const modalContent = [{
        'name': 'Grainger',
        'tag': 'JavaScript (NodeJS, HandlebarsJS), HTML, CSS with Java',
        'link': 'https://www.grainger.com',
        'description': `Currently working on the Search Adaptive Responsince (SAR) team to create a 
                        better desktop and mobile UI. Implementing a new, fully responsive, product
                        description page compatiable with over 60 million products.`,
    },{
        'name': 'Hyatt',
        'tag': 'VueJS and Java with AEM',
        'link': 'https://www.world.hyatt.com',
        'description': `Worked on the World of Hyatt team to help their web app achieve new visuals and design. 
                        Re-designed the My Account page to provide a leaner page while adding functionality like point 
                        conversions for miles with American Airlines and a brand explorer view to receive free nights for 
                        staying with different brands.`,
    },{
        'name': 'Geneca',
        'tag': 'AngularJS, C#, .NET, and Azure',
        'link': 'https://www.geneca.com',
        'description': `Built custom software solutions for clients in a variety of businesses. Developed prototypes, set up development and QA environments along with databases and security.  `,
    },{
        'name': 'ShipBob',
        'tag': 'VueJS, C#, .NET, and Azure',
        'link': 'https://www.shipbob.com/',
        'description': `Enhanced the developemt of a warehouse application to improve the package return flow and with bulk orders. Optimized grouping of batch orders.`,
    },{
        'name': 'Levinson',
        'tag': 'AngularJS, C#, .NET, and Azure',
        'link': 'http://levinsonlocations.com/',
        'description': `Developed greenfield web app to be used in-house by employees to manage location assets and data. 
            Designed full stack solution with a small team to organize clients projects to help manage company resources.`,
    },{
        'name': 'CMT',
        'tag': 'C#, .NET',
        'link': 'https://www.capitalmarketstrading.com/',
        'description': `Develop the largest company GUI for a custom trading interface to be used 
            in-house. Using .NET framework, gathered live trading information from exchange servers 
            using WebSockets and allowed users to place trades on the market.`,
    },
];

window.addEventListener('DOMContentLoaded', initModal);