function initModal() {
    // Get the modal
    var modal = document.getElementById("myModal");
    var body = document.querySelector('body');
    // Get the button that opens the modal
    var btn = document.querySelectorAll(".portfolio-display button");
    // When the user clicks on the button, open the modal 

    btn.forEach(item => {
        item.addEventListener('click', function() {
            modal.style.display = "block"; // make this class based
            modal.style['overflow'] = 'scroll';
            body.style['overflow'] = 'hidden';

            // Set modal
            var id = item.getAttribute('data-modal');
            var obj = modalContent.find(m => m.name == id);
            document.querySelector('[data-js="modal-description"]').innerHTML = obj.description;
            document.querySelector('[data-js="modal-tag"]').innerHTML = obj.tag;
            document.querySelector('[data-js="modal-link"]').setAttribute('href',obj.link);
            document.querySelector('[data-js="modal-title"]').innerHTML = obj.name;
            document.querySelector(`[data-img="${id}"]`).classList.add('active');

        });
    });
    var span = document.getElementById("close");

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
        body.style['overflow'] = 'scroll';

        document.querySelector(`.modal__image-hidden.active`).classList.remove('active');

    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        // debugger;
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

const modalContent = [{
        'name': 'Hyatt',
        'tag': 'VueJS and Java with AEM',
        'link': 'https://www.world.hyatt.com',
        'description': `Currently working on the World of Hyatt team to help their web app achieve new visuals and design. 
                        Re-designed the My Account page to provide a leaner page while adding functionality like point 
                        conversions for miles with American Airlines and a brand explorer view to receive free nights for 
                        staying with different brands.`,
        
    },{
        'name': 'Geneca',
        'tag': 'AngularJS, C#, .NET, and Azure',
        'link': 'https://www.geneca.com',
        'description': `Test geneca`,
    },{
        'name': 'ShipBob',
        'tag': 'VueJS, C#, .NET, and Azure',
        'link': 'https://www.geneca.com',
        'description': `Test shipbob`,
    },{
        'name': 'Levinson',
        'tag': 'AngularJS, C#, .NET, and Azure',
        'link': 'https://www.geneca.com',
        'description': `Test levinson`,
    },{
        'name': 'xCelor/ CMT',
        'tag': 'C#, .NET',
        'link': 'https://www.geneca.com',
        'description': `Test xcelor`,
    },
];

window.addEventListener('DOMContentLoaded', initModal);