(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });


    // Car Categories


    
    $(".categories-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
         dots: true,
        loop: true,
        margin: 25,
        nav : false,
        navText : [
            '<i class="fa fa-angle-right"></i>',
            '<i class="fa fa-angle-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });


   // Back to top button
   document.addEventListener('DOMContentLoaded', function () {
    // Get references to the back-to-top button and arrow
    var backToTopButton = document.querySelector('.back-to-top');
    var arrow = backToTopButton.querySelector('.arrow');
    
    // Function to adjust arrow position inside the button
    function adjustArrowPosition() {
        var buttonSize = backToTopButton.offsetWidth; // Get the width of the button (circle)
        var arrowSize = arrow.offsetWidth; // Get the width of the arrow

        // Center the arrow inside the button
        var offset = (buttonSize - arrowSize) / 2;
        
        // Dynamically set the arrow's left position to center it
        arrow.style.position = 'absolute';
        arrow.style.left = `${offset}px`;
    }

    // Call the adjustArrowPosition function to set the initial positioning
    adjustArrowPosition();

    // Re-adjust the arrow position whenever the window is resized
    window.addEventListener('resize', adjustArrowPosition);

    // Show or hide the back-to-top button based on scroll position
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'flex';  // Show button when scrolled down
        } else {
            backToTopButton.style.display = 'none';   // Hide button when near the top
        }
    });

    // Smooth scroll to top when back-to-top button is clicked
    backToTopButton.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'  // Smooth scroll effect
        });
    });
});



})(jQuery);


 




// form booking tagg



document.querySelectorAll('.bookNowBtnz').forEach((button) => {
    button.addEventListener('click', function () {
        // Open a new window (Popup)
        const newWindow = window.open('', '', 'width=800,height=600,resizable,scrollbars');

        // Define the HTML content for the popup window
        const popupHTML = `
            <html>
                <head>
                    <style>
                        /* Basic Styles */
                        body, html {
                            margin: 0;
                            padding: 0;
                            font-family: 'Arial', sans-serif;
                            background-color: #f4f7fc;
                            color: #333;
                        }

                        .hero-container {
                            max-width: 1000px;
                            margin: 0 auto;
                            padding: 20px;
                            background-color: #fff;
                            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                            border-radius: 8px;
                        }

                        h3.hero-title {
                            font-size: 1.5em;
                            margin-bottom: 10px;
                            color: #4A90E2;
                        }

                        .hero-row {
                            display: flex;
                            flex-wrap: wrap;
                            justify-content: space-between;
                            gap: 20px;
                            margin-bottom: 20px;
                        }

                        .hero-col {
                            flex: 1 1 45%;
                            min-width: 300px;
                        }

                        .hero-inputBox {
                            margin-bottom: 15px;
                            position: relative;
                        }

                        .hero-inputBox label {
                            font-size: 0.9em;
                            color: #555;
                            display: block;
                            margin-bottom: 5px;
                        }

                        .hero-inputBox input,
                        .hero-inputBox select {
                            width: 100%;
                            padding: 12px 15px;
                            font-size: 1em;
                            border: 1px solid #ddd;
                            border-radius: 5px;
                            transition: border-color 0.3s;
                        }

                        .hero-inputBox input:focus,
                        .hero-inputBox select:focus {
                            border-color: #4A90E2;
                            outline: none;
                        }

                        .hero-submitBtn {
                            width: 100%;
                            padding: 15px;
                            background-color: #4A90E2;
                            color: white;
                            border: none;
                            font-size: 1.2em;
                            border-radius: 5px;
                            cursor: pointer;
                            transition: background-color 0.3s ease;
                        }

                        .hero-submitBtn:hover {
                            background-color: #357ABD;
                        }

                        .error-message {
                            color: red;
                            font-size: 0.9em;
                            margin-top: 5px;
                        }

                    </style>
                </head>
                <body>
                    <div class="hero-container">
                        <form id="bookingForm">
                            <div class="hero-row">
                                <!-- Billing Address Column -->
                                <div class="hero-col">
                                    <h3 class="hero-title">Hero Billing Address</h3>
                                    <div class="hero-inputBox">
                                        <label for="ironManName">Full Name (Iron Man)</label>
                                        <input type="text" id="ironManName" placeholder="Enter your full name" required>
                                        <div class="error-message" id="nameError"></div>
                                    </div>
                                    <div class="hero-inputBox">
                                        <label for="thorEmail">Email (Thor)</label>
                                        <input type="email" id="thorEmail" placeholder="Enter email address" required>
                                        <div class="error-message" id="emailError"></div>
                                    </div>
                                    <div class="hero-inputBox">
                                        <label for="captainAmericaAddress">Address (Captain America)</label>
                                        <input type="text" id="captainAmericaAddress" placeholder="Enter address" required>
                                        <div class="error-message" id="addressError"></div>
                                    </div>
                                    <div class="hero-inputBox">
                                        <label for="hulkCity">City (Hulk)</label>
                                        <input type="text" id="hulkCity" placeholder="Enter city" required>
                                        <div class="error-message" id="cityError"></div>
                                    </div>
                                    <div class="hero-inputBox">
                                        <label for="blackWidowState">State (Black Widow)</label>
                                        <input type="text" id="blackWidowState" placeholder="Enter state" required>
                                        <div class="error-message" id="stateError"></div>
                                    </div>
                                    <div class="hero-inputBox">
                                        <label for="spiderManZip">Zip Code (Spider-Man)</label>
                                        <input type="text" id="spiderManZip" placeholder="123 456" required>
                                        <div class="error-message" id="zipError"></div>
                                    </div>
                                </div>
                                
                                <!-- Payment Column -->
                                <div class="hero-col">
                                    <h3 class="hero-title">Hero Payment</h3>
                                    <p class="hero-paymentInfo">Only cards will be accepted.</p>
                                    <div class="hero-inputBox">
                                        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20240715140014/Online-Payment-Project.webp" alt="credit/debit card image" style="max-width: 100%;">
                                    </div>
                                    <div class="hero-inputBox">
                                        <label for="doctorStrangeCardName">Name On Card (Doctor Strange)</label>
                                        <select id="doctorStrangeCardName" required>
                                            <option value="">Choose Name</option>
                                            <option value="Iron Man">Iron Man</option>
                                            <option value="Thor">Thor</option>
                                            <option value="Captain America">Captain America</option>
                                            <option value="Hulk">Hulk</option>
                                            <option value="Black Widow">Black Widow</option>
                                        </select>
                                        <div class="error-message" id="cardNameError"></div>
                                    </div>
                                    <div class="hero-inputBox">
                                        <label for="starLordCardNum">Credit Card Number (Star-Lord)</label>
                                        <input type="text" id="starLordCardNum" placeholder="1111-2222-3333-4444" maxlength="19" required>
                                        <div class="error-message" id="cardNumberError"></div>
                                    </div>
                                    <div class="hero-inputBox">
                                        <label for="blackWidowExpMonth">Exp Month (Black Widow)</label>
                                        <select id="blackWidowExpMonth" required>
                                            <option value="">Choose Month</option>
                                            <option value="01">01</option>
                                            <option value="02">02</option>
                                            <option value="03">03</option>
                                            <option value="04">04</option>
                                            <option value="05">05</option>
                                            <option value="06">06</option>
                                            <option value="07">07</option>
                                            <option value="08">08</option>
                                            <option value="09">09</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                        </select>
                                        <div class="error-message" id="expMonthError"></div>
                                    </div>
                                    <div class="hero-inputBox">
                                        <label for="thorExpYear">Exp Year (Thor)</label>
                                        <select id="thorExpYear" required>
                                            <option value="">Choose Year</option>
                                            <option value="2023">2023</option>
                                            <option value="2024">2024</option>
                                        </select>
                                        <div class="error-message" id="expYearError"></div>
                                    </div>
                                    <div class="hero-inputBox">
                                        <label for="captainAmericaCvv">CVV (Captain America)</label>
                                        <input type="number" id="captainAmericaCvv" placeholder="123" required>
                                        <div class="error-message" id="cvvError"></div>
                                    </div>
                                </div>
                            </div>

                            <input type="submit" value="Proceed to Checkout" class="hero-submitBtn">
                        </form>
                    </div>
                    
                    <script>
                        // Form Validation with Dynamic JS
                        document.getElementById('bookingForm').addEventListener('submit', function(event) {
                            event.preventDefault();

                            // Clear previous error messages
                            document.querySelectorAll('.error-message').forEach(msg => msg.textContent = '');

                            let isValid = true;

                            // Validate Full Name (Only letters and spaces)
                            const nameField = document.getElementById('ironManName');
                            const namePattern = /^[A-Za-z\s]+$/;
                            if (!namePattern.test(nameField.value)) {
                                document.getElementById('nameError').textContent = "Please enter a valid name (letters and spaces only).";
                                isValid = false;
                            }

                            // Validate Email (Standard email format)
                            const emailField = document.getElementById('thorEmail');
                            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                            if (!emailPattern.test(emailField.value)) {
                                document.getElementById('emailError').textContent = "Please enter a valid email address.";
                                isValid = false;
                            }

                            // Validate Address (Only letters, numbers, commas, etc.)
                            const addressField = document.getElementById('captainAmericaAddress');
                            const addressPattern = /^[A-Za-z0-9\s,.'-]+$/;
                            if (!addressPattern.test(addressField.value)) {
                                document.getElementById('addressError').textContent = "Please enter a valid address.";
                                isValid = false;
                            }

                            // Validate City (Only letters)
                            const cityField = document.getElementById('hulkCity');
                            const cityPattern = /^[A-Za-z\s]+$/;
                            if (!cityPattern.test(cityField.value)) {
                                document.getElementById('cityError').textContent = "Please enter a valid city name.";
                                isValid = false;
                            }

                            // Validate Zip Code (Must be a valid number, 5 or 9 digits)
                            const zipField = document.getElementById('spiderManZip');
                            const zipPattern = /^[0-9]{5}(?:-[0-9]{4})?$/;
                            if (!zipPattern.test(zipField.value)) {
                                document.getElementById('zipError').textContent = "Please enter a valid zip code (e.g., 12345 or 12345-6789).";
                                isValid = false;
                            }

                            // If the form is valid, show a success message
                            if (isValid) {
                                alert("Your car is booked!");
                            } else {
                                alert("Please fill in all fields correctly.");
                            }
                        });
                    </script>
                </body>
            </html>
        `;

        // Write the HTML content to the new window
        newWindow.document.write(popupHTML);
        newWindow.document.close(); // Ensure the document is fully loaded
    });
});







// chaln container 

document.getElementById('showButton').addEventListener('click', function() {
    // Open a new window on the right side
    let newWindow = window.open('', '_blank', 'width=600,height=600,left=800,top=100');
    // Check if the window opened successfully
    if (newWindow) {
        // Create the content inside the new window
        let contentDiv = newWindow.document.createElement('div');
        contentDiv.id = 'contentDiv';
        contentDiv.className = 'content-container';
        contentDiv.style.textAlign = 'center';
        contentDiv.style.marginTop = '20px';
       
        // Create the image element
        let img = newWindow.document.createElement('img');
        img.id = 'imageElement';
        img.className = 'content-image';
        img.src = 'img/blog-1.jpg'; // Placeholder image URL
        img.alt = 'Placeholder Image';
        img.style.maxWidth = '100%';
        img.style.height = 'auto';
        img.style.marginBottom = '10px';

        // Create the text content with headings and explanations
        let ul = newWindow.document.createElement('ul');
        ul.id = 'pointsList';
        ul.className = 'points-list';

        let points = [
            { title: '1. Ask the Rental Agency', content: 'Contact the Rental Agency. After you’ve returned the rental car, you can contact the rental agency to inquire about any fines associated with the car during the rental period. Sometimes, the rental agency will notify you of any fines directly after the rental period ends. They may send you an invoice or email notification for any fines or penalties incurred during your rental.' },
            { title: '2. Online Portals or Rental Agency Websites', content: 'Login to Your Account. Many rental agencies have online portals where you can track your rental details, including any fines that have been applied. After returning the car, check your rental invoice or email notifications. Some agencies send fines to your email address or through their app.' },
            { title: '3. Check Traffic Violation Records (For Local Fines)', content: 'Government Websites. In many countries, traffic fines are registered by the local government, and you can check them through the official government portal for traffic violations. If the fine is associated with the rental car, the government may send the fine to the rental company, who will then forward it to you.' },
            { title: '4. Fines Associated with Rental Cars (General Process)', content: 'Rental Car Agencies. If a traffic violation occurs during your rental period (e.g., speeding, parking, running a red light), the rental company will usually receive a fine notice in the vehicle\'s name, and they will then charge you for the fine, sometimes adding an administrative fee. Automatic Fines (Tolls). In some places, toll road fines (if you use a toll pass or enter a restricted area) are automatically billed to your rental account. The agency may contact you after the fact and charge you for any toll violations.' },
            { title: '5. International Car Rentals', content: 'Cross-Border Fines. If you rent a car in one country and drive to another (e.g., in Europe or the USA), rental agencies may send fines directly to your address if you’re a foreign renter. Toll Violations. For international rentals, tolls and road usage charges may also be forwarded to the rental agency and, in turn, to you after the rental period.' },
            { title: '6. How to Prevent Fines When Renting a Car', content: 'Drive Carefully. Always obey traffic laws to avoid fines. This includes parking in legal spots, obeying speed limits, and avoiding prohibited areas. Understand Local Driving Rules. If you\'re renting a car in a foreign country, make sure you\'re aware of local driving regulations, such as parking restrictions, speed limits, and low-emission zones (for cities like London, Paris, etc.). Use GPS for Tolls. If you\'re traveling through toll roads, ensure your rental car has a GPS system or a toll transponder (e.g., E-ZPass in the U.S., Telepass in Italy) to avoid missed toll payments.' },
            { title: '7. In Case of Rental Car Fines After Return', content: 'Review Rental Terms. Check the terms and conditions of your rental agreement. Some rental companies charge you for fines even if they weren’t caused by you (for example, if the car was parked improperly). Dispute the Fine. If you believe the fine was mistakenly issued or you weren\'t responsible for the infraction, contact the rental agency and provide any evidence you have. For example, if you can prove the fine was from before your rental period, the agency may reverse the charge.' },
            { title: '8. How Long to Wait for Fines?', content: 'Time Delay. Be aware that fines might take a few weeks or even months to be processed, depending on the country or the type of violation. Rental Agency Processing. Rental agencies may charge you for the fine long after you\'ve returned the car, so keep an eye on your email or rental account for several weeks after your rental ends.' }
        ];

        // Loop through the points array and create a heading and content for each point
        points.forEach(function(point) {
            // Create a heading element for the title
            let heading = newWindow.document.createElement('h3');
            heading.textContent = point.title;
            heading.style.color = '#333';
            heading.style.marginBottom = '10px';

            // Create a paragraph for the content
            let para = newWindow.document.createElement('p');
            para.textContent = point.content;
            para.style.fontSize = '14px';
            para.style.lineHeight = '1.6';
            para.style.textAlign = 'justify';

            // Append the heading and paragraph to the list
            let li = newWindow.document.createElement('li');
            li.style.listStyleType = 'none'; // Remove default list bullets
            li.style.marginBottom = '20px'; // Space out the points
            li.appendChild(heading);
            li.appendChild(para);

            ul.appendChild(li);
        });

        // Append the image and list to the content div
        contentDiv.appendChild(img);
        contentDiv.appendChild(ul);

        // Create a close button
        let closeButton = newWindow.document.createElement('button');
        closeButton.textContent = 'Close';
        closeButton.style.marginTop = '20px';
        closeButton.style.padding = '10px';
        closeButton.style.backgroundColor = 'red';
        closeButton.style.color = 'white';
        closeButton.style.border = 'none';
        closeButton.style.cursor = 'pointer';
        
        // Add event listener to close the window when the button is clicked
        closeButton.addEventListener('click', function() {
            newWindow.close();
        });

        // Append the close button to the content div
        contentDiv.appendChild(closeButton);

        // Append the content div to the new window's body
        newWindow.document.body.appendChild(contentDiv);

        // Optionally, you can add some basic styles to the new window's body
        newWindow.document.body.style.fontFamily = 'Arial, sans-serif';
        newWindow.document.body.style.margin = '20px';
    } else {
        alert('The window could not be opened. Please allow pop-ups.');
    }
});




// ----// Event listener for opening the window
document.getElementById('openWindowButton').addEventListener('click', function() {
    // Open a new window on the right side
    let newWindow = window.open('', '_blank', 'width=600,height=600,left=800,top=100');

    // Check if the window opened successfully
    if (newWindow) {
        // Create the content inside the new window
        let mikhailDiv = newWindow.document.createElement('div');
        mikhailDiv.id = 'mikhailDiv';
        mikhailDiv.className = 'content-container';
        mikhailDiv.style.textAlign = 'center';
        mikhailDiv.style.marginTop = '20px';

        // Create the image element with a unique ID and class
        let winstonImg = newWindow.document.createElement('img');
        winstonImg.id = 'winstonImage';
        winstonImg.className = 'content-image';
        winstonImg.src = 'img/blog-2.jpg'; // Placeholder image URL
        winstonImg.alt = 'Placeholder Image';
        winstonImg.style.maxWidth = '100%';
        winstonImg.style.height = 'auto';
        winstonImg.style.marginBottom = '10px';

        // Append the image to the content div
        mikhailDiv.appendChild(winstonImg);

        // Create the text content as an unordered list with a unique ID and class
        let ul = newWindow.document.createElement('ul');
        ul.id = 'pointsList';
        ul.className = 'points-list';

        // Array containing points (rental cost info)
        let points = [
            {
                heading: "1. Visit Rental Car Websites",
                content: "Most major car rental companies offer an online booking platform where you can get quotes based on your specific preferences. Some popular rental agencies to check are: Enterprise Rent-A-Car, Hertz, Avis, Budget, Sixt, Europcar, Turo (Peer-to-peer car rentals, often includes luxury and sports cars)."
            },
            {
                heading: "2. Choose Your Location and Dates",
                content: "Rental prices can vary significantly depending on where and when you are renting. To get an accurate price, enter the following details on the rental agency's website: Pick-up and drop-off location (the city or airport), Dates and times (dates for pick-up and drop-off), Car type or category (choose sports, luxury, economy, or SUV)."
            },
            {
                heading: "3. Sports Car Rentals",
                content: "Sports cars typically cost more than economy or standard vehicles because they are higher-end vehicles. Here’s a general idea of how sports car rentals break down: Sports Cars: Cars like the Ford Mustang, Chevrolet Camaro, or similar typically cost between $50-$200 per day depending on the location and time of year. Luxury Sports Cars: Cars like the Porsche 911, Audi R8, or BMW M-series can range from $200-$600 per day or even more. Supercars: Exotic supercars like a Ferrari, Lamborghini, or McLaren can cost between $600-$2,500 per day or higher."
            },
            {
                heading: "4. Other Car Types and Costs",
                content: "The cost of renting non-sport cars (economy, SUV, luxury, etc.) can also vary: Economy Cars (e.g., Ford Fiesta, Toyota Corolla): These are usually the least expensive, ranging from $20-$60 per day. Standard or Full-Size Cars (e.g., Toyota Camry, Honda Accord): These cars might cost around $40-$90 per day. Luxury Cars (e.g., BMW 3 Series, Mercedes-Benz E-Class): These may cost between $100-$300 per day. SUVs and Minivans: Depending on the size and model, these can range from $50-$150 per day."
            },
            {
                heading: "5. Comparison Websites",
                content: "You can also use comparison websites to get an idea of rental prices across different car rental agencies. Some popular ones include: Kayak (https://www.kayak.com), Expedia (https://www.expedia.com), Rentalcars.com (https://www.rentalcars.com), Auto Europe (https://www.autoeurope.com). These sites let you enter your location and dates and show you options from multiple rental companies, helping you compare prices easily."
            },
            {
                heading: "6. Turo (Peer-to-Peer Car Rental)",
                content: "If you’re interested in a luxury or sports car, consider using a peer-to-peer car rental service like Turo. Turo allows individuals to rent out their own cars (including sports and exotic cars). Prices vary depending on the car's make, model, and location, but they can be cheaper or more expensive than traditional rental agencies. Prices for sports cars on Turo can range from $100-$1,000+ per day, depending on the model."
            },
            {
                heading: "7. Additional Fees",
                content: "When renting a car, especially a sports car or luxury vehicle, keep in mind the following potential additional fees: Insurance: You may need to purchase additional insurance, which can cost anywhere from $10-$30 per day depending on the coverage. Taxes and Fees: Rental prices do not always include taxes, airport fees, or other charges, so be sure to check the total cost before booking. Fuel Charges: Many rental agencies offer a 'full-to-full' fuel policy, where you pick up the car with a full tank and return it full. If not, you may be charged for refueling at a higher rate. Mileage Fees: Some rentals, especially sports cars, may come with mileage restrictions. If you exceed the limit, you could be charged an additional fee per mile or kilometer."
            },
            {
                heading: "8. Example Breakdown for Sports Car Rental Costs",
                content: "Ford Mustang Convertible (Standard Sports Car): Price: $60-$150 per day, Location: Los Angeles or Miami, Insurance: $20 per day, Additional fees: Taxes and airport fees may add another $20-$50 to the total. Porsche 911 (Luxury Sports Car): Price: $200-$500 per day, Location: Las Vegas or New York City, Insurance: $40 per day, Additional fees: Taxes and fees may be around $50-$100. Lamborghini Huracán (Supercar): Price: $1,000-$2,500 per day, Location: Los Angeles, Miami, or Las Vegas, Insurance: $75 per day, Additional fees: Taxes and fees could be around $100+."
            },
            {
                heading: "9. Discounts and Offers",
                content: "Loyalty Programs: Many rental agencies offer loyalty programs that give you discounts or free upgrades after a few rentals. For example, Hertz Gold Plus Rewards or Avis Preferred. Coupons and Special Deals: Check for promotional codes or special offers online, especially for premium or sports cars."
            }
        ];

        // Loop through the points array and create list items for each heading and content
        points.forEach(function(point) {
            // Create heading for each section
            let heading = newWindow.document.createElement('h3');
            heading.textContent = point.heading;

            // Create content for each section
            let content = newWindow.document.createElement('p');
            content.textContent = point.content;
            content.style.textAlign = 'justify';

            // Append heading and content to the list
            ul.appendChild(heading);
            ul.appendChild(content);
        });

        // Append the list of points to the content div
        mikhailDiv.appendChild(ul);

        // Create a close button with a unique ID and class
        let marcosButton = newWindow.document.createElement('button');
        marcosButton.id = 'marcosButton';
        marcosButton.className = 'close-button';
        marcosButton.textContent = 'Close';
        marcosButton.style.marginTop = '20px';
        marcosButton.style.padding = '10px';
        marcosButton.style.backgroundColor = 'red';
        marcosButton.style.color = 'white';
        marcosButton.style.border = 'none';
        marcosButton.style.cursor = 'pointer';
        
        // Add event listener to close the window when the button is clicked
        marcosButton.addEventListener('click', function() {
            newWindow.close();
        });

        // Append the close button to the content div
        mikhailDiv.appendChild(marcosButton);

        // Append the content div to the new window's body
        newWindow.document.body.appendChild(mikhailDiv);

        // Optionally, add some basic styles to the new window's body
        newWindow.document.body.style.fontFamily = 'Arial, sans-serif';
        newWindow.document.body.style.margin = '20px';
    } else {
        alert('The window could not be opened. Please allow pop-ups.');
    }
});





// -----
document.getElementById('nayantharaButton').addEventListener('click', function() {
    // Open a new window on the right side
    let newWindow = window.open('', '_blank', 'width=600,height=600,left=800,top=100');

    // Check if the window opened successfully
    if (newWindow) {
        // Create the content inside the new window
        let contentDiv = newWindow.document.createElement('div');
        contentDiv.id = 'nayantharaDiv'; // Using a Tamil heroine name for the ID
        contentDiv.className = 'rajinikanth-container'; // Tamil heroine as the class name
        contentDiv.style.textAlign = 'center';
        contentDiv.style.marginTop = '20px';

        // Create the image element with a unique ID and class
        let img = newWindow.document.createElement('img');
        img.id = 'samanthaImage'; // Tamil heroine name for image ID
        img.className = 'deepika-image'; // Tamil heroine name for image class
        img.src = 'img/blog-3.jpg'; // Placeholder image URL
        img.alt = 'Car Rental Guide Image';
        img.style.maxWidth = '100%';
        img.style.height = 'auto';
        img.style.marginBottom = '10px';
        
        contentDiv.appendChild(img);
        // Create the text content as an unordered list with a unique ID and class
        let ul = newWindow.document.createElement('ul');
        ul.id = 'trishaList'; // Tamil heroine name for list ID
        ul.className = 'anushka-list'; // Tamil heroine name for list class

        let points = [
            {
                heading: "1. Driver's License",
                content: "Valid Driver’s License: You will need a current and valid driver's license. Make sure your license has been held for a minimum period (usually 1-2 years). The rental agency may not accept provisional or temporary licenses, so ensure that your license is permanent. \n\nInternational Drivers: If you're renting a car in a country where your driver’s license is not recognized, you may need an International Driving Permit (IDP) in addition to your regular driver’s license. \n\nNon-Resident Drivers: If you're not a resident of the country you're renting the car in, the rental agency may require that your driver's license be in English or that you present an IDP."
            },
            {
                heading: "2. Credit Card",
                content: "Credit Card for Payment: Most rental agencies require a credit card to secure the rental. A credit card is preferred because it can serve as a deposit in case of damages or other issues. Debit cards may not be accepted, or you may be required to show additional documentation (e.g., return flight tickets, proof of address). \n\nCardholder’s Name: The credit card must be in the name of the person renting the vehicle. \n\nAvailable Credit: The card should have enough available credit to cover the deposit amount and the estimated rental fees."
            },
            {
                heading: "3. Proof of Identity",
                content: "Passport: If you're renting a car in a country that is not your home country, you'll likely need to provide a passport as proof of identity. \n\nUtility Bill: In some cases, especially for local rentals or if you're renting long-term, you might need to show proof of residence (e.g., a utility bill with your name and address on it)."
            },
            {
                heading: "4. Rental Confirmation",
                content: "Reservation Details: If you've pre-booked the car online, you will need to present a printed or digital copy of your rental confirmation. This usually includes details such as the rental agreement number, the car you’ve reserved, and the rental dates. \n\nVoucher (if applicable): If you’ve booked through a third-party website like Expedia, Kayak, or Rentalcars.com, you may need to show a voucher or confirmation email."
            },
            {
                heading: "5. Age Requirements",
                content: "Minimum Age: You must meet the minimum age requirement of the rental agency, which is typically between 21 and 25 years old (depending on the country or agency). Drivers under 25 may face a young driver surcharge. \n\nMaximum Age: Some rental companies have upper age limits (usually around 70–75 years old), especially if you're renting a luxury or specialty car."
            },
            {
                heading: "6. Proof of Insurance",
                content: "Car Insurance: Rental agencies usually offer Collision Damage Waiver (CDW) or Loss Damage Waiver (LDW) options, but it’s often a good idea to have your own car insurance or verify whether your credit card covers rental car insurance. If you’re traveling internationally, it’s advisable to check with your insurance provider about coverage abroad. \n\nCredit Card Insurance: Some credit cards provide rental car insurance when you use the card to pay for the rental, but be sure to confirm this with your card provider beforehand."
            },
            {
                heading: "7. Return Flight Information (for International Rentals)",
                content: "Return Ticket: In some cases, especially for international rentals, you may be asked to show proof of your return flight to confirm your travel dates. This is more common for long-term rentals or rentals with specific policies for tourists."
            },
            {
                heading: "8. Additional Documentation (if applicable)",
                content: "Corporate Rental: If you're renting a car for business purposes, you may need to show a corporate ID or an authorization letter from your employer. \n\nRental History: In some cases, the rental agency may ask for previous rental references if you're renting a high-end car (luxury or sports car). \n\nAdditional Drivers: If you plan to add extra drivers to the rental, you’ll need to provide additional driver documentation (i.e., their driver’s license, and in some cases, a credit card)."
            },
            {
                heading: "9. Special Requests or Restrictions",
                content: "Infant/Child Seat: If you're traveling with a child, make sure to request an infant or child seat in advance and be prepared to show identification for the child (age or passport). \n\nSpecial Vehicle Requests: If you’re renting a specialty vehicle, like a sports car, luxury car, or RV, there may be additional requirements such as a higher age requirement, driving history, or additional documentation."
            }
        ];

        // Loop through the points array and create list items for each heading and content
        points.forEach(function(point) {
            // Create heading for each section
            let heading = newWindow.document.createElement('h3');
            heading.textContent = point.heading;

            // Create content for each section
            let content = newWindow.document.createElement('p');
            content.textContent = point.content;
            content.style.textAlign = 'justify';

            // Append heading and content to the list
            ul.appendChild(heading);
            ul.appendChild(content);
        });

        // Append the list of points to the content div
        contentDiv.appendChild(ul);

        // Create a close button with a unique ID and class
        let closeButton = newWindow.document.createElement('button');
        closeButton.id = 'rajinikanthCloseButton'; // Tamil actor name for close button ID
        closeButton.className = 'vikram-close-button'; // Tamil actor name for close button class
        closeButton.textContent = 'Close';
        closeButton.style.marginTop = '20px';
        closeButton.style.padding = '10px';
        closeButton.style.backgroundColor = 'red';
        closeButton.style.color = 'white';
        closeButton.style.border = 'none';
        closeButton.style.cursor = 'pointer';
        
        // Add event listener to close the window when the button is clicked
        closeButton.addEventListener('click', function() {
            newWindow.close();
        });

        // Append the close button to the content div
        contentDiv.appendChild(closeButton);

        // Append the content div to the new window's body
        newWindow.document.body.appendChild(contentDiv);

        // Optionally, you can add some basic styles to the new window's body
        newWindow.document.body.style.fontFamily = 'Arial, sans-serif';
        newWindow.document.body.style.margin = '20px';
    } else {
        alert('The window could not be opened. Please allow pop-ups.');
    }
});
