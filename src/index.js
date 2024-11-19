const handleSubmit = (e) => {
    /* By default, submitting a form refreshes the page. 
       To prevent this, we use e.preventDefault(). */
    e.preventDefault();
       /* The lines below select the spans from the DOM and store them in variables,  
       so we can later update their text content.
       Best Practice: Using specific and descriptive variable names helps make the code more readable 
       and ensures it's clear what each variable represents. */
    const usernameSpan = document.getElementById("results-username");
    const codingLevelSpan = document.getElementById("results-coding-level");
    const locationSpan = document.getElementById("results-location");
    const likeAssignmentSpan = document.getElementById("results-did-like-assignment");
    /* new FormData(e.target) collects all the data the user submitted from the form 
       and stores it in a special FormData object. 
       However, we can't access the values in this object directly without first converting it into a plain JS object. 
    */
    const formData = new FormData(e.target);
   /*  Object.fromEntries(formData) takes this FormData object and converts it into a plain JS object.

        Best Practice: Destructuring extracts values from the object and creates variables to hold them, like username, codingLevel, location, and didLikeAssignment, 
        so you don't have to reference the object multiple times. This simplifies the code and makes it more readable.
        
        Alternatively, you can access the values directly from the form using `e.target`, like: `e.target.username.value`, `e.target.codingLevel.value`, etc. 

        This method removes the need for both `new FormData` and `Object.fromEntries`, but it can be less convenient when dealing with multiple form fields.*/
    const { username, codingLevel, location, didLikeAssignment } = Object.fromEntries(formData);
    /* 
        Now that the user's input is stored in variables, we're updating the text content of the spans to display these values.
        For `didLikeAssignment`, since it was a checkbox, if it was checked, its value would be 'on'. 
        If it was unchecked, it wouldn't be included in the FormData object. 
        So, we check if `didLikeAssignment` exists. if it does, we display `'Yes'`, otherwise, we display `'No'`.
    */
    usernameSpan.textContent = username;
    codingLevelSpan.textContent = codingLevel;
    locationSpan.textContent = location;
    likeAssignmentSpan.textContent = didLikeAssignment? 'Yes' : 'No';
    //  `e.target.reset()` clears all the form fields, resetting them to their default values.
    e.target.reset();
};
document.getElementById('new-user-form').addEventListener('submit', handleSubmit);
/*
This code adds an event listener to the form with the ID 'new-user-form', so when the form is submitted, the handleSubmit function is invoked. 
*/