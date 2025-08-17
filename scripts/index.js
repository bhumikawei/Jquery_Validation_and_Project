const { info } = require("sass");

$(document).ready(function() {
    //forming a constructor named person
    function Person(firstName, lastName, address, city) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
    }

    //initially we fill pople array with 2 random persons
    var peopleArray = new Array(
        new Person("Siya", "Wei", "Wangfujing Street", "Beijing"),
        new Person("Arsiyan", "Lan", "Nanjing Road", "Shanghai")
    );

    var showHideSpeed = 200;

    //Cache all needed elements for easy access
    var firstNameField = $("#firstName");
    var lastNameField = $("#lastName");
    var addressField = $("#address");
    var cityField = $("#city");
    var peopleDropdown = $("#people");
    var displayAddress = $("#displayAddress");
    var infoField = $("#info");
    var entryFields = $("#entry");
    var reviewField = $("#review");

    var personEntryBtn = $("#personEntryToggle");
    var reviewBtn = $("#reviewToggle");
    var addPersonBtn = $("#addPersonBtn");

    //when dom is loaded
    firstNameField.focus();
    showPerson();

    //Event subscriptions
    //subscribe to events
    personEntryBtn.click(personEntryToggle());
    reviewBtn.click(reviewToggle());
    addPersonBtn.click(addPerson());
    peopleDropdown.change(addonchange());
    $(document).keypress(onEntrPress());

    //event handler functions
    //handles opening/ closing of person entry fieldset
    var formShow = true;
    function personEntryToggle() {
        if (formShow) {
            entryField.hide(showHideSpeed);
            //personEntryBtn.text("Add Person");
        } else {
            entryField.show(showHideSpeed);
            //personEntryBtn.text("Hide Person Entry");
        }
        formShown = !formShown;
    }

    //handles openig/ closing of review fieldset
    var displayShown = true;
    function reviewToggle() {
        if (displayShown) {
            reviewField.hide(showHideSpeed);
            //reviewBtn.text("Review");
        } else {
            reviewField.show(showHideSpeed);
            //reviewBtn.text("Hide Review");
        }
        displayShown = !displayShown;
    }

    //handles changing of dropdown options
    function addonchange() {
        var address = peopleArray[$(this).val()].address;
        var city = peopleArray[$(this).val()].city;
        displayAddress.html(address + ", " + city);
    }

    //handles enter press on the page
    function onEntrPress(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            addPerson();
        }
    }

    //adds the person in the people array
    function addPerson() {
        var fieldsEntered = true;
        $("input[type == 'text']").each(function(index, inputElement) {
            if($(inputElement).val() == "") {
                fieldsEntered = false;
                return false;
            }
        });
        if(fieldsEntered) {
            let person = new Person(
                firstNameField.val(),
                lastNameField.val(),
                addressField.val(),
                cityField.val()
            );
            peopleArray.push(person);
            resetForm();
            showPerson();
        } else {
            infoField.html("Please fill all fields before adding a person.");
        }
    }

    //shows the seletcted persons data
    function showPerson() {
        peopleDropdoen.children().remove();

        $(peopleArray).each(function (index, person) {
            var fullName = person.firstName + " " + person.lastName;
            var addNewOption = new Option(fullName, index);
            peopleDropdown.append(addNewOption);
        })
    }

    //resents all form inputs
    function resetForm() {
        $("input[type='text']").val("");
        infoField.html("");
        firstNameField.focus();
    }
})